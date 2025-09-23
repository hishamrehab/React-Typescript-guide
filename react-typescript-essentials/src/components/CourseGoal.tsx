import { type PropsWithChildren } from "react";

// interface CourseGoalProps { title : string, children: ReactNode };

type CourseGoalProps =
 PropsWithChildren<{
     id: number;
    title : string ;
     onDelete: (id:number) => void}
     >;

    //  const CourseGoal : FC<CourseGoalProps> = ({ title , children }) => {
// return (
//       <article>
//         <div>
//             <h2>{title}</h2>
//               {children}
//         </div>
//        <button>Delate</button>
//        </article>
// )
// }


// export default CourseGoal;



export default function CourseGoal({title , children , onDelete , id } :CourseGoalProps) {
    return(
        <article>
            <div>
                <h2>{title}</h2>
                {children}
            </div>
            <button onClick={() => onDelete(id)}>Delate</button>
        </article>
    )
}

