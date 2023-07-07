import { Link } from "react-router-dom";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import taskStore from "../stores/TaskStore";
import '../styles/components/editForm.scss';

const EditForm = observer(({ allValues, unselect }: { allValues: any, unselect: any }) => {
    const [editedActivity, setEditedActivity]: any = useState(allValues.activity);
    const [editedFrequency, setEditedFrequency]: any = useState(allValues.frequency);
    const [editedResources, setEditedResources]: any = useState(allValues.resources);
    const [editedPrice, setEditedPrice]: any = useState(allValues.price);
    const [editedImportanceLevel, setEditedImportanceLevel]: any = useState(allValues.importanceLevel);
    const [editedUrgencyLevel, setEditedUrgencyLevel]: any = useState(allValues.urgencyLevel);

    const editTask = () => {
        const toMainBtn = document.getElementById('cancel-edit');
        taskStore.editTasks(allValues.id, editedActivity, editedFrequency, editedResources, editedPrice, editedImportanceLevel, editedUrgencyLevel, toMainBtn);
    }

    onkeydown = e => {
        switch (e.key) {
            case "Escape": document.getElementById('cancel-edit')?.click();
                break;
        }
    }

    return <>
        <main className="edit-form flex-space-between">
            <h1>Edit <span>task</span></h1>
            <form action="">
                <fieldset>
                    <label htmlFor="act">Activity</label>
                    <input id="act" type="text" value={editedActivity} onChange={e => setEditedActivity(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="act">Frequency</label>
                    <input id="act" type="text" value={editedFrequency} onChange={e => setEditedFrequency(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="act">Resources</label>
                    <input id="act" type="text" value={editedResources} onChange={e => setEditedResources(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="act">Price</label>
                    <input id="act" type="text" value={editedPrice} onChange={e => setEditedPrice(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="act">Importance level</label>
                    <input id="act" type="text" value={editedImportanceLevel} onChange={e => setEditedImportanceLevel(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="act">Urgency level</label>
                    <input id="act" type="text" value={editedUrgencyLevel} onChange={e => setEditedUrgencyLevel(e.target.value)} />
                </fieldset>
            </form>
            <aside>
                <footer>
                    <div className="center-fl">
                        <button className="btn-edit pointer" onClick={() => {
                            if (!editedActivity) alert('field "activity" is required')
                            else if (!editedImportanceLevel) alert('field "Importance Level" is required')
                            editTask()
                        }}>edit task<i></i></button>
                    </div>
                    <div className="center-fl">
                        <Link to='/'>
                            <button className="btn-cancel pointer" id="cancel-edit" onClick={() => { unselect() }}>cancel<i></i></button>
                        </Link>
                    </div>
                </footer>
            </aside>
        </main>
    </>
})
export default EditForm;