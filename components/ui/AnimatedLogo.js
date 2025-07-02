"use client";
import React, { useEffect, useRef } from "react";
import "./AnimatedLogo.css";

const AnimatedLogo = ({ size = 200 }) => {
  const poly1Ref = useRef(null);
  const poly2Ref = useRef(null);

  useEffect(() => {
    const poly1 = poly1Ref.current;
    const poly2 = poly2Ref.current;
    // Only run if both polygons exist and are visible
    if (
      poly1 &&
      poly2 &&
      poly1.getBoundingClientRect().width > 0 &&
      poly1.getBoundingClientRect().height > 0
    ) {
      const length1 = poly1.getTotalLength();
      const length2 = poly2.getTotalLength();
      poly1.style.strokeDasharray = length1;
      poly1.style.strokeDashoffset = length1;
      poly2.style.strokeDasharray = length2;
      poly2.style.strokeDashoffset = length2;
      // Trigger reflow for animation
      void poly1.offsetWidth;
      void poly2.offsetWidth;
      poly1.classList.add("draw");
      setTimeout(() => {
        poly2.classList.add("draw");
      }, 400); // Stagger second polygon
      setTimeout(() => {
        poly1.classList.add("filled");
        poly2.classList.add("filled");
      }, 1200); // After both outlines are drawn
    }
  }, []);

  return (
    <svg
      viewBox="0 0 640 467"
      width={size}
      height="auto"
      className="animated-logo-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        ref={poly1Ref}
        className="logo-outline"
        points="363.54,-0.14 188.78,-0.14 -0.16,329.54 378.68,329.54 451.61,222.04 362.58,222.04 336.18,261.21 116.98,261.21 228.73,67.59 335.66,67.15 386.29,119.76 479.27,119.76 "
      />
      <polygon
        ref={poly2Ref}
        className="logo-outline"
        points="276.3,466.6 451.07,466.6 640,136.93 261.16,136.93 188.23,244.42 277.26,244.42 303.66,205.25 522.87,205.25 411.11,398.88 304.18,399.31 253.55,346.7 160.58,346.7 "
      />
    </svg>
  );
};

export default AnimatedLogo;
