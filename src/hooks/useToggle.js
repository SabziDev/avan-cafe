// const [STATE, toggleState] = useToggle(DEFAULT_VALUE);
// toggleState();

import { useState } from "react";

const useToggle = (defaultValue) => {
  const [toggle, setToggle] = useState(defaultValue);

  const toggler = () => setToggle(!toggle);

  return [toggle, toggler];
};

export default useToggle;
