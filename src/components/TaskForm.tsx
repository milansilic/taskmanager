import { Link } from "react-router-dom";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import taskStore from "../stores/TaskStore";
import '../styles/components/taskForm.scss';

const TaskForm = observer(({ unselect }: { unselect: any }) => {
    const [activity, setActivity]: any = useState('');
    const [frequency, setFrequency]: any = useState('');
    const [resources, setResources]: any = useState('');
    const [price, setPrice]: any = useState('');
    const [importanceLevel, setImportanceLevel]: any = useState('');
    const [urgencyLevel, setUrgencyLevel]: any = useState('');
    const allSets = [setActivity, setFrequency, setResources, setPrice, setImportanceLevel, setUrgencyLevel];

    const addTask = () => {
        const lastPageBtn = document.getElementById('last-page');
        taskStore.postTasks(activity, frequency, resources, price, importanceLevel, urgencyLevel, lastPageBtn);
        allSets.map(set => set(''));
    }

    onkeydown = e => {
        switch (e.key) {
            case "Escape": unselect()
                break;
        }
    }

    return <aside>
        <form action="">
            <fieldset>
                <input id="act" type="text" value={activity} onChange={e => setActivity(e.target.value)} required />
                <label htmlFor="act">Activity</label>
                <span></span>
            </fieldset>
            <fieldset>
                <input id="fre" type="text" value={frequency} onChange={e => setFrequency(e.target.value)} required />
                <label htmlFor="fre">Frequency</label>
                <span></span>
            </fieldset>
            <fieldset>
                <input id="res" type="text" value={resources} onChange={e => setResources(e.target.value)} required />
                <label htmlFor="res">Resources</label>
                <span></span>
            </fieldset>
            <fieldset>
                <input id="pri" type="text" value={price} onChange={e => setPrice(e.target.value)} required />
                <label htmlFor="pri">Price</label>
                <span></span>
            </fieldset>
            <fieldset>
                <input id="ilv" type="text" value={importanceLevel} onChange={e => setImportanceLevel(e.target.value)} required />
                <label htmlFor="ilv">Importance Level</label>
                <span></span>
            </fieldset>
            <fieldset>
                <input id="ulv" type="text" value={urgencyLevel} onChange={e => setUrgencyLevel(e.target.value)} required />
                <label htmlFor="ulv">Urgency Level</label>
                <span></span>
            </fieldset>
        </form>
        <footer>
            <div className="center-fl">
                <button className="btn-add pointer" onClick={() => {
                    if (!activity) alert('field "activity" is required')
                    else if (!importanceLevel) alert('field "Importance Level" is required') 
                    else unselect(), addTask()
                }}>add task<i></i></button>
            </div>
            <div className="center-fl">
                <Link to='edit'><button className="btn-edit pointer">edit<i></i></button></Link>
            </div>
            <div className="center-fl">
                <button className="btn-delete pointer" onClick={() => {
                    document.body.classList.add('delete-check');
                }}>delete<i></i></button>
            </div>
        </footer>
    </aside>
})
export default TaskForm;