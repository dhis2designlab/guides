---
index: 5
path: styling
title: Styling in React
description: Learn about approaches to styling in React.
---

# Styling in React

This guide will introduce you to various approaches to styling when you use React.

## Inline styles

```js
const headingStyle = {
  color: 'red';
  fontSize: 30;
}

const Hello = () => (
  <h1 style={headingStyle}>Hello</h1>
)
```

It's possible to use the `style` prop to apply styles. Note that keys must be camelCased. We use `fontSize` and not `font-size`. `px` is added to *most* (exceptions can be found [here][pixel-string]) numerical values, thus the font-size will `30px`.

Note that it is not recommended to use inline styles due to poorer performance compared to other approaches and lack of automatic support of older browsers.

## Plain CSS

```css
/* style.css */

h1 {
  color: red;
  font-size: 30px;
}

.blue {
  color: blue;
}
```

```js{1,6}
import './style.css'

const Hello = () => <h1>Hello</h1>

const Hi = () => (
  <span className={blue}>hi</span>
)
```

You can import CSS files in JavaScript files. Notice that we use `className` and not `class`.

## styled-components

[styled-components][styled-components] is one of several libraries created for styling in React. Other popular alternatives include [Emotion][emotion] and [Styled JSX][styled-jsx].

### Creating components

You can create React components by using `styled`. The syntax is exactly the same as if you were to write CSS. The CSS rules are scoped within the component, which means that for the below example, any other `h1` elements will not be affected. The CSS rules are also automatically vendor-prefixed, meaning that rules are created to work in different browsers. 

```js
import styled from 'styled-components'

const Heading = styled.h1`
  color: red;
  font-size: 30px;
`

const Hello = () => <Heading>Hello</Heading>
```

### Applying styles to components

You can also apply styles _to_ any React component that apply the `className` prop. Notice how we use `styled()` for components, and not `styled.` as we did with `h1`.

```js
import styled from 'styled-components'

const BlueHello = styled(Hello)`
  color: red;
  font-size: 30px;
`

const Hello = ({ className }) => (
  <h1 className={className}>Hello</h1>
)
```

### Styling DHIS2 components

The components in [@dhis2/ui-core][ui-core] and [@dhis2/ui-widgets][ui-widgets] accept the `className` prop, meaning you can use styled-components.

```js
import styled from 'styled-components'
import { HeaderBar } from '@dhis2/ui-widgets'

const FixedHeaderBar = styled(HeaderBar)`
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
`
```

Note that you have to use `!important` when you want to override CSS rules already set by a component.

```js
import styled from 'styled-components'
import { Card } from '@dhis2/ui-core'

const FixedHeaderBar = styled(Card)`
  width: 50% !important;
`
```

### Props

The components accept props.

```js
import styled from 'styled-components'

const ColoredSpan = styled.span`
  color: ${props => props.color};
`

const RedHi = () => (
  <ColoredSpan color="red">Hi</ColoredSpan>
)
```

### Global style
If you want to create a globally scoped style, then you can use `createGlobalStyle`. You should then add `<GlobalStyle />` to your top-level component.

```js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const App = () => (
  <>
    <GlobalStyle />
    {/* other components */}
  </>
)
```


[pixel-string]: https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59
[cra]: ..react#create-react-app
[styled-components]: https://www.styled-components.com/
[emotion]: https://emotion.sh/docs/introduction
[styled-jsx]: https://github.com/zeit/styled-jsx
[ui-core]: https://www.npmjs.com/package/@dhis2/ui-core
[ui-widgets]: https://www.npmjs.com/package/@dhis2/ui-widgets
