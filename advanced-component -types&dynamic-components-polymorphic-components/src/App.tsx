import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container"
import Input from "./components/input.tsx";

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
   <Input label="Test" id="test" ref={input}/>
  </main>
  )
}

export default App;
