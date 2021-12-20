# Development

## Code conventions

based on vscode

- editorconfig: see [editorconfig](../.editorconfig)
- prettier: see [prettierrc](../.prettierrc)
- eslint: see [eslintrc](../.eslintrc.json), [next/core-web-vitals](https://nextjs.org/docs/basic-features/eslint)

## 프로젝트 구조

폴더구조

- assets: image, fonts, video, ...etc
- components: reusable components
- hooks: business logic & api
- lib: common library
- pages: nextjs pages
- store: recoil store
- styles: css with stitches.js

config

- eslintrc.json: nextjs presets(react, typescript, ...)
- .prettierrc: prettier
- .editorconfig: editorconfig
- global.d.ts: global type for app
- next.config.js: nextjs config
- stitches.config.ts: stitches theme config

## components

다음 4가지 생각을 가지고 진행합니다.

- 재사용 생각
- 공통 생각
- 페이지 생각
- SoC 생각: UI / business logic

## primitives

useful for something

- [ReplacedTexts](../src/components/primitives/ReplacedTexts.tsx): animated text through chainging texts
- [Texlider](../src/components/primitives/Texlider.tsx): clone of [yourhome.fb.com](https://yourhome.fb.com/)'s welcome page
- [ThemeButton](../src/components/primitives/ThemeButton.tsx): button with a theme having a animated svg(clone of [joshwcomeau](https://www.joshwcomeau.com/))

## styles

based on [stitches](https://stitches.dev/) + [radix](https://radix-ui.com/)

- stitches: see [stitches.config.ts](../stitches.config.ts)
- colors: see [radix/colors](https://www.radix-ui.com/colors)
- animation: see [animation.ts](../src/styles/animation.ts)
- react-spring: see [react-spring](https://react-spring.io/)

## Reference

helpful links

### Offical document sites

- [nextjs](https://nextjs.org)
- [stitches](https://stitches.dev/)
- [radix](https://www.radix-ui.com/)
- [react-spring](https://react-spring.io/)

### Useful sites

- [yourhome.fb.com](https://yourhome.fb.com/)
- [joshwcomeau](https://www.joshwcomeau.com/)
