# moveable-react

## [live demo](https://jyoketsu.github.io/moveable-react/)

## Installation

```bash
yarn add moveable-react
```

or

```
npm i moveable-react
```

<br/>

## Props

| Name              | Type    |
| ----------------- | ------- |
| rightClickToStart | boolean |
| scrollable        | boolean |
| style             | Object  |

<br/>

## Usage

```jsx
import { Moveable } from 'moveable-react';

const MyComp = () => (
  <Moveable>
    <ChildComp />
  </Moveable>
);
```
