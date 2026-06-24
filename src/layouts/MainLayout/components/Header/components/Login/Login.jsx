import { Link } from "react-router";

import Icon from "@/components/Icon/Icon";

const Login = () => (
  <Link
    to="#"
    className="group relative hidden h-11 w-40 rounded-full bg-secondary lg:flex-center"
  >
    <span className="absolute inset-1 left-10 flex-center rounded-full bg-white p-2 transition-all duration-300 group-hover:left-1">
      ورود | ثبت نام
    </span>
    <Icon id="login" className="absolute left-2 size-6 text-white" />
  </Link>
);

export default Login;
