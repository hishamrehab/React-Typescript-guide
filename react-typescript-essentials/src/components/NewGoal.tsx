import { useRef, type FormEvent } from "react";


type NewGoalProps = {
  onAddGoal: (goal: string ,summary: string) => void;
};


 const NewGoal = ({onAddGoal}: NewGoalProps) => {
 const goal = useRef<HTMLInputElement>(null);
 const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event : FormEvent<HTMLFormElement>) {
    event.preventDefault(); 

    const enteredGoal = goal.current!.value;
    const enterdSummary = summary.current!.value;
    
    onAddGoal(enteredGoal , enterdSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your Goal</label>
            <input id="goal" type="text" ref={goal}/>
      </p>
           <p>
            <label htmlFor="summary">Short Summary</label>
            <input id="summary" type="text" ref={summary}/>
        </p>
        <p>
            <button type="submit">Add Goal</button>
        </p>
    </form>
  )
}
 
export default NewGoal