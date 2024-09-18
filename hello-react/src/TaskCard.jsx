import "./TaskCard.css";

const TaskCard = ({ title,completedAtDate,dueDate,assigneeName,done}) => {
 
  

    return (
        <div className="TaskItem">
            <h2 className="text-xl font-bold ">{title}</h2>
            <p>{done===true?`Completed on: ${completedAtDate}`:`Due on: ${dueDate}`}</p>
            <p>Assignee:{assigneeName}</p>
        </div>
    )
}

export default TaskCard;