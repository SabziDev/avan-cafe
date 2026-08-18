/* eslint-disable unicorn/no-nested-ternary */

import reserveYourTableSectionFormFields from "@/data/form-fields/pages/home/reserve-your-table-section";

import Input from "./components/Input/Input";
import NumInput from "./components/NumInput/NumInput";
import Selectbox from "./components/Selectbox/Selectbox";
import Textarea from "./components/Textarea/Textarea";

const Form = () => {
  return (
    <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {reserveYourTableSectionFormFields.map((inputField) =>
        inputField.type === "textarea" ? (
          <Textarea key={inputField.id} inputField={inputField} />
        ) : inputField.type === "select" ? (
          <Selectbox key={inputField.id} inputField={inputField} />
        ) : inputField.type === "number" ? (
          <NumInput
            key={inputField.id}
            placeholder={inputField.placeholder}
            className="h-10 rounded-xl bg-cream px-4 py-1 placeholder:text-sm placeholder:text-primary/40"
          />
        ) : (
          <Input key={inputField.id} inputField={inputField} />
        ),
      )}
    </div>
  );
};

export default Form;
