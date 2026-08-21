import { Link } from "react-router";

const NotFoundBtn = () => {
  return (
    // TODO NotFound-Page Btn-Text
    <Link
      to="/"
      className="shadow-xl hover:shadow-2xl z-10 rounded-lg bg-white/90 p-3 font-medium text-black/60 active:scale-[0.96]"
    >
      بازگشت به صفحه اصلی
      {/* Return Home */}
    </Link>
  );
};

export default NotFoundBtn;
