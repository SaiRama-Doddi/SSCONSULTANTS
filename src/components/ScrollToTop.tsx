import { useEffect } from "react";

interface Props {
  dependency: any;
}

const ScrollToTop: React.FC<Props> = ({ dependency }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dependency]);

  return null;
};

export default ScrollToTop;
