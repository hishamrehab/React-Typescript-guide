import CourseGoal from "./CourseGoal.tsx";
import { CourseGoal as CGoal } from "../App.tsx"
import InfoBox from "./InfoBox.tsx";
import { type ReactNode } from "react";

type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id : number) => void;
};


const CourseGoalList = ({goals , onDeleteGoal }: CourseGoalListProps) => {
 if(goals.length === 0) {
  return <InfoBox mode="hint">
    You have no course goals yet.start adding some!
  </InfoBox>
 }

let warningBox:ReactNode;
 if(goals.length >= 4) {
   warningBox = <InfoBox mode="warning" severity="medium"> 
    you're collectiong a lot of goals.Don't put too much on your plate! 
   </InfoBox>
 }


  return (
  <>
  {warningBox}
   <ul>
      {goals.map((goal)=> {
        return (
          <li key={goal.id}>
          <CourseGoal
           id={goal.id}
            key={goal.id}
            title={goal.title}
            onDelete={onDeleteGoal}
            >
        <p>{goal.description}</p>
         </CourseGoal>
        </li>
        )
      })}
      </ul>
  </>
   
  )
}

export default CourseGoalList