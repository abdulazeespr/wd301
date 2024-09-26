import TaskCard from "./TaskCard"

function App() {

  return (
    <div >
      <div className="grid grid-cols-4  w-full">
     
      <div className="flex  flex-col   col-start-2">
        <div>
        <h1  className=" text-black-600 text-4xl font-mono">Smarter Tasks</h1>
        </div>
        <div className="flex">
        <p className="text-slate-600 font-medium">Project:</p><p className="text-slate-500 font-small">Graduation Final Year Project (Revamp college website)</p>
       </div>
       </div>
      </div>
      <div className="flex justify-around">
      <div className="border-2 px-2 py-3 border-slate-500 rounded-lg ">
        <h1 className="text-center text-slate-600 text-2xl font-mono">Pending</h1>
        <TaskCard title="Build the website with static content "  dueDate="10th April" assigneeName="Rohit S" done={false} />
        <TaskCard title="Add a blog "  dueDate="22nd March" assigneeName="Rohit MS" done={false}/>
        
      </div>

      <div className="border-2 px-2 py-3 border-slate-500 rounded-lg" >
        <h1 className="text-center text-slate-600 text-2xl font-mono">Done</h1>
        <TaskCard title="Design the mockup" completedAtDate="10th April"  assigneeName="Rohit M"  done={true}/>
        <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S" done={true} />
        
      </div>
      </div>
    </div >
  )
}



export default App
