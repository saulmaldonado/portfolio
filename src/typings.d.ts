declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: SvgrComponent;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare module '*.png' {
  const pngUrl: string;

  export default pngUrl;
}

declare module '*.webm' {
  const webmUrl: string;

  export default webmUrl;
}
