import "./TaskCard.css";

interface TaskCardProps {
    title:string,
    completedAtDate?:string,
    dueDate?:string,
    assigneeName:string
}


const TaskCard = (props:TaskCardProps) => {

    return (
        <div className="TaskItem">
            <h2 className="text-xl font-bold ">{props.title}</h2>
            <p>{props.completedAtDate?`Completed on: ${props.completedAtDate}`:`Due on: ${props.dueDate}`}</p>
            <p>Assignee: {props.assigneeName}</p>
        </div>
    )
}

export default TaskCard;