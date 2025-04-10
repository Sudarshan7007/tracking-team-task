import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
    return (
        <div id="tasklist" className="flex overflow-x-auto items-center justify-start gap-10 h-[55%] flex-nowrap w-full py-5 mt-5 ">
           {data.tasks.map((elem, idx) => {
            if(elem.active){
                return<AcceptTask key={idx} data= {elem} />
            }
            if(elem.newTask){
                return <NewTask key={idx} data= {elem} />
            }
            if(elem.completed){
                return <CompleteTask key={idx} data= {elem} />
            }
            if(elem.failed) {
                return <FailedTask key={idx} data= {elem} />
            }
           })}
        </div>
    )
}

export default TaskList