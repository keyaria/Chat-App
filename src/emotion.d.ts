// import "@emotion/react";
import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends Record<string, any> { }
}