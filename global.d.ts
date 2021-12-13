declare module '*.svg' {
  // @see webpack config in next.config.js
  const url: string
  interface SvgrComponent
    extends React.FunctionComponent<React.SVGAttributes<SVGElement>> {}

  export default url
  export const ReactComponent: SvgrComponent
}
