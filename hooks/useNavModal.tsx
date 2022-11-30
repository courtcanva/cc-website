import { useEffect, useState } from "react";
import { mdWidth } from "../constants";

const useNavModal = () => {
  const [state, setState] = useState<boolean>(false);
  const open = () => setState(true);
  const close = () => setState(false);

  const resizeUpdate = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= mdWidth) close();
  };

  // screen resize listener
  useEffect(() => {
    window.addEventListener("resize", resizeUpdate);
    return () => window.removeEventListener("resize", resizeUpdate);
  }, []);

  return {
    open,
    close,
    state,
  };
};

export default useNavModal;
