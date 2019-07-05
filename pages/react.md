---
index: 0
title: React
description: Learn to use React.
---

# React
[React](https://reactjs.org) is a free and open-source JavaScript library created by Facebook. This guide is a brief introduction to React. The [React Docs](https://reactjs.org/docs/getting-started.html) provide a more comprehensive overview.

## Create React App
[Create React App (CRA)](https://facebook.github.io/create-react-app/docs/getting-started) is a tool to create a React apps. To use CRA you need either [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/en/docs/install). The choice is yours, but our guides will use npm.

### Creating a new app
```bash
npx create-react-app my-app
cd my-app
```

A new app is created in the *my-app* directory.

### Running the app
```bash
npm start
```

The app should now be available at [http://localhost:3000](http://localhost:3000). Any changes you make to the code should be reflected in your browser.

### Installing app dependencies
```bash
npm install
```

### Adding dependecies
```bash
npm install @dhis2/ui-core
npm install @dhis2/cli-style -D
```

The above packages are only used as examples. The *-D* flag installs a package in devDependencies, and should be used for packages that are not used in production by end users. The [@dhis2/ui-core](https://github.com/dhis2/ui-core) package contains a [DHIS2 UI library](../ui). The [@dhis2/cli-style](https://github.com/dhis2/cli-style) package may be used to standardize the formatting of code and git commit messages.


### Building
```bash
npm run build
```

This creates an optimized build of the app. You will find it in the *build* directory.

## Entry point
```html
<!-- public/index.html -->

<div id="root"></div>
```

```js
// src/index.js

import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

```js
// src/App.js

import React from 'react'

export const App = () => <p>Hello world!</p>
```

The three above files have been simplified for this guide to explain what is going on. `index.js` inserts the `App` component in the `div` with the id *root*.

## JSX
```js
const element = <p>Hello world!</p>
```

This may look like HTML, but it is JSX. The syntax is similar, but not equal.

### JS in JSX
```js
const name = 'John'
const element = <p>Hello {name}</p>
```

JS expressions inside JSX must be inside curly braces.

### Attributes
```js
const element =
  <button onClick={someFunction}>Click me</button>
```

Attributes are camel cased, thus we use `onClick` and not `onclick`. In some cases the JSX equivalent of HTML attributes differ in other ways (e.g. `className` in JSX and `class` in HTML).

### Closing tags
```js
const element = <div />
const element = <div></div>
```

All tags tags must be closed. Both above variants are valid, though `<div>` alone would be invalid.

### Fragment
Components can only return a single element. If you want to return an array of elements you may be tempted to wrap them in a `<div></div>`. A better option is to use `<></>`, as you avoid polluting the DOM. `<></>` is shorthand for `<React.Fragment><React.Fragment/>`.

```js {2,6}
const element = (
  <>
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </>
)
```

## Props
```js {2,11}
const Greeting = props => (
  <p>Hello {props.user} from {props.origin}</p>
)

const Content = () => {
  const name = 'John'
  const country = 'Norway'

  return (
    <section>
      <Greeting user={name} origin={country} />
    </section>
  )
}
```

The `Greeting` component now allows us to customize what is returned. By adding the two attributes, `Greeting` will receive `{ user: 'John', origin: 'Norway' }` in the `props` object. Let's greet some more poeple.

```js {16}
const Greeting = props => (
  <p>Hello {props.user} from {props.origin}</p>
)

const Content = () => {
  const persons = [
    { name: 'John', country: 'Norway' },
    { name: 'Nelson', country: 'South Africa' },
    { name: 'Mahatma', country: 'India' },
  ]

  return (
    <section>
      {persons.map(person => (
        <Greeting
          key={person.name}
          user={person.name}
          origin={person.country}
        />
      ))}
    </section>
  )
}
```

Now we can render a section containing three different greetings. Notice the `key` attribute. This is necessary for React to handle changes to elements rendered from a collection. The key needs to be unique among siblings. If we introduces a second John, using the name attribute as key would not be valid.

## State
```js {4,5}
import React, { useState } from 'react'

const Example = () => {
  const [count, setCount] = useState(0)

  const onButtonClick = () => setCount(count + 1)

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={onButtonClick}>
        Click me
      </button>
    </>
  )
}
```

We have initialized the count variable to 0. `useState` returns a tuple with the variable and the function to update the variable.

Be careful when mutating a state consisting of an object or array. New items in the below code will not render, as React will not know that `items` has changed, due to it's reference being the same.

```js {5}
const Example = () => {
  const [items, setItems] = useState([1])

  const onButtonClick = () => {
    items.push(items[items.length - 1] + 1)
    setItems(items)
  }

  return (
    <>
      <button onClick={onButtonClick}>Click me</button>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}
```

We can avoid mutation by passing a new array to `setItems`.

```js
const onButtonClick = () =>
  setItems([...items, items[items.length - 1] + 1])
```

## useEffect
`useEffect` is to function components what life cycle methods are for class components. It takes a function which can perform operations. Often this will be API calls to get data.

```js {6-8}
import React, { useState, useEffect } from 'react'
// import functionToGetData and ComponentToShowData

const Example = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(functionToGetData())
  })

  if (!data) return null

  return <ComponentToShowData data={data} />
}
```

The anonomous function passed to `useEffect` will run on every render. There's a few issues with this code. Assuming that `functionToGetData` is asynchronous, we have to wait for the promise to resolve. We can accomplish this with `await`. However, `useEffect` does not accept asynchronous function. We can get around this by creating an asynchronous function inside it.

```js
const [data, setData] = useState(null)

useEffect(() => {
  const getAndSetData = async () => {
    const response = await functionToGetData()
    setData(response)
  }
  
  getAndSetData()
})
```

Another issue is that we will get the data on every render. We can avoid this by passing an empty array to `useEffect`. This will make it run only on the first render.

```js {10}
const [data, setData] = useState(null)

useEffect(() => {
  const getAndSetData = async () => {
    const response = await functionToGetData()
    setData(response)
  }
  
  getAndSetData()
}, [])
```

If we add something to the array we can run it in certain situation. In the example below, it will run anytime `props.id` changes.

```js {3}
  useEffect(() => {
    // Do something
  }, [props.id])
```

You can add any number of variables to the array. You can also have multiple `useEffect` in a single component.

```js {3,7}
  useEffect(() => {
    // Do something on first render
  }, [])

  useEffect(() => {
    // Do something when any of the props changes
  }, [props.id, props.value])
```
