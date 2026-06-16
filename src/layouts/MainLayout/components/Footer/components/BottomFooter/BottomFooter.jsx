import DeveloperSignature from "@/components/DeveloperSignature/DeveloperSignature";

const BottomFooter = () => {
  return (
    <div className="-mx-6 -mt-10 flex flex-col bg-primary px-6 pt-4 pb-8 text-white/70 max-lg:gap-4 lg:flex-row lg:items-center lg:justify-between">
      <span>تمام حقوق اين وب‌سايت متعلق به کافه آوان می باشد.</span>
      <DeveloperSignature />
    </div>
  );
};

export default BottomFooter;
