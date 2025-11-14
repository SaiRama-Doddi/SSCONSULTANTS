import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollBottomToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  // Show button only when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 z-50
            bg-[#fd5d14] text-white p-3 rounded-full shadow-lg
            hover:bg-[#e65110] transition-all duration-300
          "
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default ScrollBottomToTop;
