import { Link } from "react-router-dom";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import taskStore from "../stores/TaskStore";
import '../styles/components/taskForm.scss';

const TaskForm = observer(({ unselect }: { unselect: Function }) => {
    const [activity, setActivity]: any = useState('');
    const [frequency, setFrequency]: any = useState('');
    const [resources, setResources]: any = useState('');
    const [price, setPrice]: any = useState('');
    const [importanceLevel, setImportanceLevel]: any = useState(0);
    const [urgencyLevel, setUrgencyLevel]: any = useState(0);
    const allSets = [setActivity, setFrequency, setResources, setPrice, setImportanceLevel, setUrgencyLevel];

    const addTask = () => {
        const lastPageBtn: HTMLElement | null = document.getElementById('last-page');        
        taskStore.postTasks(activity, frequency, resources, price, importanceLevel, urgencyLevel, lastPageBtn);
        allSets.map(set => set(''));
        let ele = [...document.querySelectorAll("[name=il], [name=ul]")];    
        ele.forEach((elm: any) => elm.checked = false);
    }

    onkeydown = e => {
        switch (e.key) {
            case "Escape": unselect();
                break;
        }
    }

    return <aside>
        <form action="">
            <fieldset className="txt">
                <input id="act" type="text" value={activity} onChange={e => setActivity(e.target.value)} required />
                <label htmlFor="act">Activity &#42;</label>
                <span></span>
            </fieldset>
            <fieldset className="txt">
                <input id="fre" type="text" value={frequency} onChange={e => setFrequency(e.target.value)} required />
                <label htmlFor="fre">Frequency</label>
                <span></span>
            </fieldset>
            <fieldset className="txt">
                <input id="res" type="text" value={resources} onChange={e => setResources(e.target.value)} required />
                <label htmlFor="res">Resources</label>
                <span></span>
            </fieldset>
            <fieldset className="txt">
                <input id="pri" type="text" value={price} onChange={e => setPrice(e.target.value)} required />
                <label htmlFor="pri">Price</label>
                <span></span>
            </fieldset>
            <fieldset className="stars">
                <input type="radio" name="il" id="il5" value="5" onChange={e => setImportanceLevel(e.target.value)}/>
                <label htmlFor="il5"></label>
                <input type="radio" name="il" id="il4" value="4" onChange={e => setImportanceLevel(e.target.value)}/>
                <label htmlFor="il4"></label>
                <input type="radio" name="il" id="il3" value="3" onChange={e => setImportanceLevel(e.target.value)}/>
                <label htmlFor="il3"></label>
                <input type="radio" name="il" id="il2" value="2" onChange={e => setImportanceLevel(e.target.value)}/>
                <label htmlFor="il2"></label>
                <input type="radio" name="il" id="il1" value="1" onChange={e => setImportanceLevel(e.target.value)}/>
                <label htmlFor="il1"></label>
                <h6>Inportance level &#42;</h6>
            </fieldset>
            <fieldset className="stars">
                <input type="radio" name="ul" id="ul5" value="5" onChange={e => setUrgencyLevel(e.target.value)}/>
                <label htmlFor="ul5"></label>
                <input type="radio" name="ul" id="ul4" value="4" onChange={e => setUrgencyLevel(e.target.value)}/>
                <label htmlFor="ul4"></label>
                <input type="radio" name="ul" id="ul3" value="3" onChange={e => setUrgencyLevel(e.target.value)}/>
                <label htmlFor="ul3"></label>
                <input type="radio" name="ul" id="ul2" value="2" onChange={e => setUrgencyLevel(e.target.value)}/>
                <label htmlFor="ul2"></label>
                <input type="radio" name="ul" id="ul1" value="1" onChange={e => setUrgencyLevel(e.target.value)}/>
                <label htmlFor="ul1"></label>
                <h6>Urgency level &#42;</h6>
            </fieldset>
        </form>
        <footer>
            <div className="center-fl">
                <button className="btn-add pointer" onClick={() => {
                    if (!activity) alert('field "Activity" is required')
                    else if (!importanceLevel) alert('field "Importance level" is required')
                    else if (!urgencyLevel) alert('field "Urgency level" is required')
                    else {
                        addTask();
                        unselect();
                    }
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