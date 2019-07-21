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
  color: red;
  fontSize: 30;
}

const Hello = () => (
  <h1 style={headingStyle}>Hello</h1>
)
```

It's possible use the `style` prop to apply styles. Notice that we use `fontSize` and not `font-size`. Keys must be camelCased. `px` is added to _most_ (exceptions can be found [here][pixel-string]) numerical values, thus the font-size will `30px`.

Note that it is not recommended to use inline styles due to poor performance and lack of automatic support of older browsers.

## Plain css

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

```js{2,7}
import React from 'react'
import './style.css'

const Hello = () => <h1>Hello</h1>

const Hi = () => <span className={blue}>hi</span>
```

You can import css files in JavaScript files. Notice that we use `className` and not `class`.

## styled-components

[styled-components][styled-components] is one of several libraries created for styling in React. Other popular alternatives include [Emotion][emotion] and [Styled SJX][styled-jsx].

### Creating components

You can create React components with CSS in JS.

```js
import styled from 'styled-components'

const Heading = styled.h1`
  color: red;
  font-size: 30px;
`

const Hello = () => <Heading>Hello</Heading>
```

### Applying styles to components

You can also apply styles _to_ any React component that apply the `className` prop. Notice how we use `styled()` for components, and not `styled.`.

```js
import styled from 'styled-components'

const BlueHello = styled(Hello)`
  color: red;
  font-size: 30px;
`

const Hello = ({ className }) => <h1 className={className}>Hello</h1>
```

### Styling DHIS2 components

The components in [@dhis2/ui-core][ui-core] and [@dhis2/ui-widgets][ui-widgets] accept the `className`, meaning you can use styled-components.

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

### Props

The components accept props.

```js
import styled from 'styled-components'

const ColoredSpan = styled.span`
  color: ${props => props.color};
`

const RedHi = () => <ColoredSpan color="red">Hi</ColoredSpan>
```

### Global style
The styles that styled-components applies are scoped within the component. If you want create globally scoped style, then you can use `createGlobalStyle`. You should then add `<GlobalStyle />` to your top level component.

```js
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
```

[pixel-string]: https://github.com/facebook/react/blob/4131af3e4bf52f3a003537ec95a1655147c81270/src/renderers/dom/shared/CSSProperty.js#L15-L59
[cra]: ..react#create-react-app
[styled-components]: https://www.styled-components.com/
[emotion]: https://emotion.sh/docs/introduction
[styled-jsx]: https://github.com/zeit/styled-jsx
[ui-core]: https://www.npmjs.com/package/@dhis2/ui-core
[ui-widgets]: https://www.npmjs.com/package/@dhis2/ui-widgets
