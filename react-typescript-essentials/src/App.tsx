import CourseGoal from "./components/CourseGoal.tsx";
import goalsImg from "./assets/goals.png"; 
import Header from "./components/Header.tsx";
import { useState } from "react";

type CourserGoal = {
  title: string;
  description: string;
  id: number
}


export default function App() {
  const [ goals , setGoals ] = useState<CourserGoal[]>([]);

  function handleAddGoal() {
        setGoals();
  }
  return (
     <main>
      <Header image={{src: goalsImg , alt: "Goals"}} >
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>
        Add Goal
      </button>
       <CourseGoal
        title="Learn React + TS">
        <p>Learn React + TS From the ground up</p>
         </CourseGoal>
     </main>
  )
};
