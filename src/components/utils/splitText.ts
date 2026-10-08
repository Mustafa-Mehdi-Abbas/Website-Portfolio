import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

function clearSplit(el: ParaElement) {
  el.anim?.scrollTrigger?.kill();
  el.anim?.kill();
  el.anim = undefined;
  el.split?.revert();
  el.split = undefined;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  paras.forEach(clearSplit);

  if (window.innerWidth < 900) {
    titles.forEach(clearSplit);
    return;
  }

  titles.forEach((title: ParaElement) => {
    clearSplit(title);
    title.split = new SplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    title.anim = gsap.fromTo(
      title.split.chars,
      { autoAlpha: 0, y: 18 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.015,
        immediateRender: true,
        scrollTrigger: {
          trigger: title,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}
