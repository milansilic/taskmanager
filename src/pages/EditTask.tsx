import { useEffect } from "react";
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom";
// import { useState } from "react";
// import taskStore from "../stores/TaskStore"
// import TaskTable from "../components/TaskTable"
// import TaskForm from "../components/TaskForm"
// import DeleteModal from "../components/DeleteModal"

const EditTask = observer(({ allValues }: { allValues: any }) => {

    useEffect(() => {
        console.log(allValues);
    }, [])


    return <>
        <h1>edit</h1>
        <Link to='/'><button>main</button></Link>
    </>
})
export default EditTask;