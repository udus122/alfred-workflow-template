export namespace meta {
  const name: string;
  const version: string;
  const uid: string;
  const bundleId: string;
}
export namespace alfred {
  const version_1: string;
  export { version_1 as version };
  export const theme: string;
  // TODO: ここTemplateリテラル使ったらうまくかけるかも
  export const themeBackground: string;
  export const themeSelectionBackground: string;
  export const themeSubtext: number;
  export const data: string;
  export const cache: string;
  export const preferences: string;
  export const preferencesLocalHash: string;
}
export var input: string;
export function output(
  items: {
    uid?: string;
    title: string;
    subtitle?: string;
    arg?: string;
    icon: {
      type?: string;
      path: string;
    };
    valid?: boolean;
    match?: string;
    autocomplete?: string;
    type?: 'default' | 'file' | 'file:skipcheck';
    mods?: any;
    text?: {
      copy: string;
      largetype: string;
    };
    quicklookurl?: string;
  }[],
  options?: {
    rerunInterval: number;
  }
): void;
export function matches(
  input: string,
  list: string[] | { [key: string]: string },
  item: string | Function
): string[] | { [key: string]: string };
export function inputMatches(
  list: string[] | { [key: string]: string },
  item: string | Function
): string[] | { [key: string]: string };
export function log(value: any): void;
export function error(error: Error | string): void;
export var config: {};
export var cache: {};
export function fetch(url: string, options: {}): Promise<any>;
export var debug: boolean;
export namespace icon {
  export { getIcon as get };
  export const info: string;
  export const warning: string;
  export const error: string;
  export const alert: string;
  export const like: string;
  const _delete: string;
  export { _delete as delete };
}
declare function getIcon(name: any): string;
export {};
