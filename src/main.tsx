// Nob Yuasys
import { render } from "solid-js/web";
import { createSignal } from "solid-js";

function Counter() {
  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);

  return (
    <>
      <h2>はじめて書いたSolidJSコードです</h2>
      <button type="button" onClick={increment}>
        {count()}
      </button>
      <p>ボタンの下に、この文章を書いてみました。</p>
    </>
  );
}

render(() => <Counter />, document.getElementById("app")!);
