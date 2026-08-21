import { Link } from "react-router";

const NotFoundBtn = () => {
  return (
    <Link
      to="/"
      className="z-10 rounded-lg bg-white/90 p-3 font-medium text-black/60 shadow-xl hover:shadow-2xl active:scale-[0.96]"
    >
      بازگشت به صفحه اصلی
    </Link>
  );
};

export default NotFoundBtn;
