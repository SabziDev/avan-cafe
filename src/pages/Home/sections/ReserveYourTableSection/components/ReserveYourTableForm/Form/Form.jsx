import NumInput from "@/components/NumInput/NumInput";
import reserveYourTableSectionFormFields from "@/data/features/form-fields/pages/home/reserve-your-table-section";

import Input from "./components/Input/Input";
import Selectbox from "./components/Selectbox/Selectbox";
import Textarea from "./components/Textarea/Textarea";

const renderInputField = (inputField) => {
  switch (inputField.type) {
    case "textarea": {
      return <Textarea key={inputField.id} inputField={inputField} />;
    }

    case "select": {
      return <Selectbox key={inputField.id} inputField={inputField} />;
    }

    case "number": {
      return (
        <NumInput
          key={inputField.id}
          name={inputField.name}
          placeholder={inputField.name}
          autoComplete={inputField.name}
          {...inputField}
        />
      );
    }

    default: {
      return <Input key={inputField.id} inputField={inputField} />;
    }
  }
};

const Form = () => {
  return (
    <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {reserveYourTableSectionFormFields.map((inputField) =>
        renderInputField(inputField),
      )}
    </div>
  );
};

export default Form;
