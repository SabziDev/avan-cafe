import DeveloperSignature from "@/components/DeveloperSignature/DeveloperSignature";

const BottomFooter = () => {
  return (
    <div className="-mx-6 -mt-10 bg-primary px-6 pt-4 pb-8 text-white/70">
      <div className="mb-6">
        تمام حقوق اين وب‌سايت متعلق به کافه آوان می باشد.
      </div>
      <DeveloperSignature />
    </div>
  );
};

export default BottomFooter;
