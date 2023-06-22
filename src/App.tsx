import "./App.css";
import { Sandpack } from "@codesandbox/sandpack-react";

function App() {
  /**
   * 🔥 Welcome to Sandpack 2.0
   * @see: https://sandpack.codesandbox.io/docs
   *
   * You can play around by changing the `template`
   * constant below to one of the following examples:
   *  - node
   *  - nextjs
   *  - vite
   *  - vite-react
   *  - vite-vue
   *  - vite-svelte
   *  - astro
   */
  const template = "nextjs";

  return (
    <div className="App">
      <Sandpack
        template={template}
        key={template}
        options={{ showConsole: true, showConsoleButton: true }}
      />
    </div>
  );
}

export default App;
