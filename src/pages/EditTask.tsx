import { useEffect } from "react";
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom";
// import { useState } from "react";
// import taskStore from "../stores/TaskStore"
// import TaskTable from "../components/TaskTable"
// import TaskForm from "../components/TaskForm"
// import DeleteModal from "../components/DeleteModal"

const EditTask = observer(({ allValues, unselect }: { allValues: any, unselect: any }) => {

    useEffect(() => {
        console.log(allValues);
    }, [])

    return <>
        <main className="flex-space-between">
            <h1>Edit <span>task</span></h1>
            <Link to='/'><button onClick={()=> {unselect()}}>main</button></Link>
        </main>
    </>
})
export default EditTask;