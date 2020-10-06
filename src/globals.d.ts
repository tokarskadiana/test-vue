declare const CONNECTOR_URL: string | undefined;
declare const ENV: string | undefined;
declare const DEV_API_KEY: string | undefined;

declare module "*.svg" {
  import Vue, { VueConstructor } from "vue";
  const content: VueConstructor<Vue>;
  export default content;
}

declare module "vue2-daterange-picker" {}
