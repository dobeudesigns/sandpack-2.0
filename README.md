# Sandpack 2.0

<img style="width:100%" src="https://user-images.githubusercontent.com/4838076/163777661-a44ec0a9-ee7c-483a-bdbb-7898ba665f68.gif" alt="Component toolkit for live running code editing experiences" />

# Sandpack

Sandpack is a component toolkit for creating your own live running code editing experience powered by CodeSandbox.

From Sandpack 2.0 onwards, you can also run Node.js in any browser, thanks to our Nodebox runtime.

[Learn more about Sandpack](https://sandpack.codesandbox.io/)

## Getting Started

To play around with this template, go to [App.tsx](./src/App.tsx) and experiment all the Node.js examples you can run in Sandpack 2.0.

## Sandpack Client

This is a small foundation package that sits on top of the bundler. It is
framework agnostic and facilitates the handshake between your context and the bundler iframe.

[Read more](https://sandpack.codesandbox.io/docs/advanced-usage/client)

## Sandpack React

React components that give you the power of editable sandboxes that run in the browser.

```jsx
import { Sandpack } from "@codesandbox/sandpack-react";

<Sandpack template="node" />;
```

[Read more](https://sandpack.codesandbox.io/docs/advanced-usage/components)

## Sandpack Themes

A list of themes to customize your Sandpack components.

```jsx
import { githubLight } from "@codesandbox/sandpack-themes";

<Sandpack theme={githubLight} />;
```

[Read more](https://sandpack.codesandbox.io/docs/getting-started/themes)
