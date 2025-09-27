import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container"
import Input from "./components/input.tsx";
import Form from "./components/Form.tsx";

function App() {

  return (
    <main>
    <Form>
     <Input  type="text" label="Name" id="name" />
     <Input  type="number" label="Age" id="age" />
     <p>
      <Button type="submit">Save</Button>
     </p>
    </Form>
   </main>
  )
}

export default App;
