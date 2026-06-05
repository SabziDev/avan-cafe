/* eslint-disable unicorn/consistent-function-scoping */

const sortJsxProps = {
  rules: {
    "sort-jsx-props": {
      meta: {
        type: "suggestion",
        fixable: "code",
        messages: {
          wrongOrder: "Props should be ordered!",
        },
      },

      create(context) {
        const firstGroupOrder = [
          "key",
          "ref",
          "id",
          "type",
          "src",
          "alt",
          "href",
          "target",
          "rel",
          "loading",
        ];
        const firstGroupSet = new Set(firstGroupOrder);
        const { sourceCode } = context;

        const isEventHandler = (attrName) => /^on[A-Z]/.test(attrName);

        return {
          JSXOpeningElement(node) {
            const allAttrs = node.attributes;

            const spreads = allAttrs.filter(
              (attr) => attr.type === "JSXSpreadAttribute",
            );

            const normalAttrs = allAttrs.filter(
              (attr) => attr.type === "JSXAttribute",
            );

            if (normalAttrs.length === 0 && spreads.length === 0) return;

            const firstGroup = firstGroupOrder.flatMap((name) =>
              normalAttrs.filter((attr) => attr.name.name === name),
            );

            const eventHandlers = normalAttrs.filter((attr) =>
              isEventHandler(attr.name.name),
            );

            const classStyle = normalAttrs.filter((attr) =>
              ["className", "style"].includes(attr.name.name),
            );

            const otherProps = normalAttrs.filter((attr) => {
              const { name } = attr.name;
              return (
                !firstGroupSet.has(name) &&
                !isEventHandler(name) &&
                !["className", "style"].includes(name)
              );
            });

            const sortedNormal = [
              ...firstGroup,
              ...otherProps,
              ...eventHandlers,
              ...classStyle,
              ...spreads,
            ];

            let needsFix = false;

            const currentOrder = [];

            for (const attr of allAttrs) {
              if (attr.type === "JSXAttribute") {
                currentOrder.push(attr);
              } else if (attr.type === "JSXSpreadAttribute") {
                currentOrder.push(attr);
              }
            }

            if (currentOrder.length === sortedNormal.length) {
              for (const [i, element] of currentOrder.entries()) {
                if (element !== sortedNormal[i]) {
                  needsFix = true;
                  break;
                }
              }
            } else {
              needsFix = true;
            }

            if (!needsFix) return;

            const opening = `<${sourceCode.getText(node.name)} ${sortedNormal
              .map((attr) => sourceCode.getText(attr))
              .join(" ")}${node.selfClosing ? " />" : ">"}`;

            context.report({
              node,
              messageId: "wrongOrder",
              fix(fixer) {
                return fixer.replaceTextRange(
                  [node.range[0], node.range[1]],
                  opening,
                );
              },
            });
          },
        };
      },
    },
  },
};

export default sortJsxProps;
