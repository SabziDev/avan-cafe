import Btn from "@/components/Btn/Btn";

import Form from "./Form/Form";

const ReserveYourTableForm = () => {
  return (
    <div className="w-full rounded-2xl px-8 py-6 shadow-2xl lg:h-106 xl:w-160">
      <h3 className="text-lg font-bold">
        منتظر دیدنت هستیم، برای رزرو میز فرم زیر را تکمیل کن.
      </h3>

      <Form />

      <div className="mt-2 flex-end">
        <Btn svgSrc="/images/icons/icons.svg#arrow-medium">رزرو کن</Btn>
      </div>
    </div>
  );
};

export default ReserveYourTableForm;
