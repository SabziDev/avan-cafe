import { Link } from "react-router";

import Head from "@/layouts/components/Head";

const NotFound = () => (
  <>
    <Head />

    <div
      className="fixed inset-0 z-9999 flex-center flex-col overflow-hidden px-4 text-center select-none"
      style={{
        background:
          "radial-gradient(circle at top right, #000041, #004162, #89a0ae)",
      }}
    >
      <span
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 2px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 70%)",
        }}
      />

      <h1 className="mb-4 text-8xl font-bold text-white">404</h1>

      {/* TODO NotFound-page Title */}
      <h2 className="mb-2 text-3xl font-bold text-white">صفحه پیدا نشد</h2>
      {/* <h2 className="mb-2 text-3xl font-bold text-white">Page Not Found</h2> */}

      {/* TODO NotFound-page Desc */}
      <p className="mb-8 max-w-md text-lg text-gray-300">
        صفحه ای که به دنبال آن هستید وجود ندارد یا منتقل شده است. لطفا آدرس را
        بررسی کنید یا به صفحه خانه بروید.
      </p>
      <p className="mb-8 max-w-md text-lg text-gray-300">
        The page you are looking for does not exist or has been moved. Please
        check the address or go to the home page.
      </p>

      <Link
        to="/"
        className="z-10 rounded-lg bg-white/90 p-3 font-medium text-black/60 shadow-xl hover:shadow-2xl active:scale-[0.96]"
      >
        {/* TODO NotFound-Page Btn-Text */}
        بازگشت به صفحه اصلی
        {/* Return Home */}
      </Link>
    </div>
  </>
);

export default NotFound;
