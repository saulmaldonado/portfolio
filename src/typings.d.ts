declare module '*.gif';

declare module '*.png' {
  const pngUrl: string;

  export default pngUrl;
}

declare module '*.webm';

export {};
