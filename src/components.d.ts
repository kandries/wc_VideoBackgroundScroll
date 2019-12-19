/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface CrnVideoBackground {
    'videoSource': string;
  }
}

declare global {


  interface HTMLCrnVideoBackgroundElement extends Components.CrnVideoBackground, HTMLStencilElement {}
  var HTMLCrnVideoBackgroundElement: {
    prototype: HTMLCrnVideoBackgroundElement;
    new (): HTMLCrnVideoBackgroundElement;
  };
  interface HTMLElementTagNameMap {
    'crn-video-background': HTMLCrnVideoBackgroundElement;
  }
}

declare namespace LocalJSX {
  interface CrnVideoBackground {
    'videoSource'?: string;
  }

  interface IntrinsicElements {
    'crn-video-background': CrnVideoBackground;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'crn-video-background': LocalJSX.CrnVideoBackground & JSXBase.HTMLAttributes<HTMLCrnVideoBackgroundElement>;
    }
  }
}


