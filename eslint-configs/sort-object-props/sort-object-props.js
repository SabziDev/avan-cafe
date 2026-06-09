/* eslint-disable max-lines-per-function */
/* eslint-disable unicorn/consistent-function-scoping */

const sortObjectProps = {
  rules: {
    "sort-object-props": {
      meta: {
        type: "suggestion",
        fixable: "code",
        messages: {
          wrongOrder: "Object properties should be ordered!",
          wrongDestructure: "Destructured properties should be ordered!",
          wrongParams: "Function parameters should be ordered!",
          wrongArgs: "Function arguments should be ordered!",
        },
      },

      create(context) {
        const firstGroupOrder = [
          "key",
          "ref",
          "id",
          // ----
          "type",
          "name",
          "value",
          "placeholder",
          // ----
          "src",
          "alt",
          "loading",
          "poster",
          "controls",
          // ----
          "href",
          "target",
          "rel",
          "to",
          "replace",
        ];
        const eventHandlerOrder = ["onClick", "onChange", "onKeyUp"];

        const { sourceCode } = context;
        const firstGroupSet = new Set(firstGroupOrder);

        const isEventHandler = (keyName) => /^on[A-Z]/.test(keyName);

        const getEventPriority = (handlerName) => {
          const index = eventHandlerOrder.indexOf(handlerName);

          return index === -1 ? 999 : index;
        };

        const isClassStyle = (keyName) =>
          ["className", "style"].includes(keyName);

        const getKeyName = (prop) => {
          return prop.key?.name || prop.key?.value || "";
        };

        const handleParams = (node) => {
          const { params } = node;
          if (!params || params.length <= 1) return;

          const getParamName = (param) => {
            if (param.type === "Identifier") return param.name;
            if (param.type === "ObjectPattern") {
              return param.properties.map((p) => p.key.name).join(",");
            }

            return "";
          };

          const normalParams = [];
          const restParams = [];

          for (const param of params) {
            const name = getParamName(param);

            if (firstGroupSet.has(name)) {
              normalParams.push(param);
            } else {
              restParams.push(param);
            }
          }

          const sortedFirstGroup = firstGroupOrder.flatMap((name) =>
            normalParams.filter((p) => getParamName(p) === name),
          );

          const sorted = [...sortedFirstGroup, ...restParams];

          let needsFix = false;

          for (const [i, param] of params.entries()) {
            if (param !== sorted[i]) {
              needsFix = true;
              break;
            }
          }

          if (!needsFix) return;

          context.report({
            node,
            messageId: "wrongParams",
            fix(fixer) {
              const sortedText = sorted
                .map((p) => sourceCode.getText(p))
                .join(", ");
              const range = [params[0].range[0], params.at(-1).range[1]];

              return fixer.replaceTextRange(range, sortedText);
            },
          });
        };

        return {
          ObjectExpression(node) {
            const { properties } = node;
            if (properties.length <= 1) return;

            const normalProps = [];
            const classStyleProps = [];
            const eventProps = [];
            const restProps = [];

            for (const prop of properties) {
              if (prop.type !== "Property" && prop.type !== "SpreadElement") {
                restProps.push(prop);
                continue;
              }

              const keyName = getKeyName(prop);

              if (firstGroupSet.has(keyName)) {
                normalProps.push(prop);
              } else if (isClassStyle(keyName)) {
                classStyleProps.push(prop);
              } else if (isEventHandler(keyName)) {
                eventProps.push(prop);
              } else {
                restProps.push(prop);
              }
            }

            const sortedFirstGroup = firstGroupOrder.flatMap((name) =>
              normalProps.filter((prop) => getKeyName(prop) === name),
            );

            const sortedEventProps = eventProps.toSorted((a, b) => {
              const priorityA = getEventPriority(getKeyName(a));
              const priorityB = getEventPriority(getKeyName(b));
              if (priorityA === 999 && priorityB === 999) return 0;

              return priorityA - priorityB;
            });

            const sortedClassStyle = classStyleProps.toSorted((a, b) => {
              const nameA = getKeyName(a);
              const nameB = getKeyName(b);
              if (nameA === "className" && nameB === "style") return -1;
              if (nameA === "style" && nameB === "className") return 1;

              return 0;
            });

            const sorted = [
              ...sortedFirstGroup,
              ...restProps,
              ...sortedEventProps,
              ...sortedClassStyle,
            ];

            let needsFix = false;

            for (const [i, property] of properties.entries()) {
              if (property !== sorted[i]) {
                needsFix = true;
                break;
              }
            }

            if (!needsFix) return;

            context.report({
              node,
              messageId: "wrongOrder",
              fix(fixer) {
                const sortedText = sorted
                  .map((p) => sourceCode.getText(p))
                  .join(", ");

                return fixer.replaceText(node, `{ ${sortedText} }`);
              },
            });
          },

          ObjectPattern(node) {
            const { properties } = node;
            if (!properties || properties.length <= 1) return;

            const normalProps = [];
            const restProps = [];

            for (const prop of properties) {
              const keyName = prop.key?.name || prop.key?.value || "";

              if (firstGroupSet.has(keyName)) {
                normalProps.push(prop);
              } else {
                restProps.push(prop);
              }
            }

            const sortedFirstGroup = firstGroupOrder.flatMap((name) =>
              normalProps.filter(
                (prop) => (prop.key?.name || prop.key?.value) === name,
              ),
            );

            const sorted = [...sortedFirstGroup, ...restProps];

            let needsFix = false;

            for (const [i, property] of properties.entries()) {
              if (property !== sorted[i]) {
                needsFix = true;
                break;
              }
            }

            if (!needsFix) return;

            context.report({
              node,
              messageId: "wrongDestructure",
              fix(fixer) {
                const sortedText = sorted
                  .map((p) => sourceCode.getText(p))
                  .join(", ");

                return fixer.replaceText(node, `{ ${sortedText} }`);
              },
            });
          },

          FunctionDeclaration: handleParams,
          FunctionExpression: handleParams,
          ArrowFunctionExpression: handleParams,
        };
      },
    },
  },
};

export default sortObjectProps;
