import React from "react";
import { motion, useAnimation } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Arrow: React.FC = () => {
  const pathControls = useAnimation();
  const circleControls = useAnimation();

  React.useEffect(() => {
    gsap.to("#pathPrecision", {
      scrollTrigger: {
        trigger: "#precisionSvg",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      // transform: "rotateY(-180deg)",
      rotationY: 180,
    });
    gsap.to("#circlePrecision", {
      scrollTrigger: {
        trigger: "#precisionSvg",
        start: "top center",
        toggleActions: "play none none reverse",
      },
      y: 85,
      x: -32,
    });
  }, []);

  const handleActive = () => {
    pathControls.start({ rotateY: -180 });
    circleControls.start({ y: 85, x: -32 });
  };

  const handleInactive = () => {
    pathControls.start({ rotateY: 0 });
    circleControls.start({ y: 0, x: 0 });
  };

  return (
    <div className="cursor-pointer">
      <motion.svg
        id="precisionSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 73.67 140.5"
        width="150"
        height="150"
        onTapStart={handleActive}
        onTapCancel={handleInactive}
        onHoverStart={handleActive}
        onHoverEnd={handleInactive}
      >
        <motion.path
          id="pathPrecision"
          d="M38.7,17.51v107L18,103.83"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth="1.5"
          // style={{ originX: 1 }}
          // transition={{ duration: 0.5 }}
          // animate={pathControls}
        />
        <motion.path
          d="M38.7,17.51v107L18"
          fill="none"
          stroke="#000"
          strokeMiterlimit={10}
          strokeWidth="1.5"
        />
        <motion.circle
          id="circlePrecision"
          cx="51.17"
          cy="20.47"
          r="4.5"
          transition={{ duration: 0.5 }}
          animate={circleControls}
        />
      </motion.svg>
    </div>
  );
};

export default Arrow;