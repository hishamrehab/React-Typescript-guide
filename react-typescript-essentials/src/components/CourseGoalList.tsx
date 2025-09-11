import CourseGoal from "./CourseGoal.tsx";
import { CourseGoal as CGoal } from "../App.tsx"


type CourseGoalListProps = {
    goals: CGoal[];
    onDeleteGoal: (id : number) => void;
};


const CourseGoalList = ({goals , onDeleteGoal }: CourseGoalListProps) => {
  return (
   <ul>
      {goals.map((goal)=> {
        return <li key={goal.id}>
          <CourseGoal
           id={goal.id}
            key={goal.id}
            title={goal.title}
            onDelete={onDeleteGoal}
            >
        <p>{goal.description}</p>
         </CourseGoal>
        </li>
      })}
      </ul>
   
  )
}

export default CourseGoalList