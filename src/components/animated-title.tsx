import gsap from "gsap";
import { PropsWithChildren, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  containerClass?: string;
}

export const AnimatedTitle = ({
  children,
  containerClass,
}: PropsWithChildren<AnimatedTitleProps>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={cn("animated-title", containerClass)}>
      {children
        ?.toString()
        .split("<br />")
        .map((line) => (
          <h1
            key={line}
            className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          >
            {line.split(" ").map((word) => (
              <span
                key={`${line}-${word}`}
                className="animated-word"
                dangerouslySetInnerHTML={{ __html: word }}
              />
            ))}
          </h1>
        ))}
    </div>
  );
};
