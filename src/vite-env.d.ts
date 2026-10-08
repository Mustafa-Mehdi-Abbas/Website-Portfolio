/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    lines: HTMLElement[];
    words: HTMLElement[];
    constructor(
      target: string | Element | Array<string | Element> | NodeList,
      vars?: { type?: string; linesClass?: string }
    );
    revert(): void;
  }
}
