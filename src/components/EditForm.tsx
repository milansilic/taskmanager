import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { httpClient, objectModel } from '../stores/HttpClient'
import Unselect from '../services/unselect'

import '../styles/components/editForm.scss'

interface EditFormModel {
   selectedRow: objectModel,
   nav: Function
}

const EditForm: React.FC<EditFormModel> = observer(({ selectedRow, nav }) => {   
   const [editedActivity, setEditedActivity] = useState(selectedRow.activity);
   const [editedFrequency, setEditedFrequency] = useState(selectedRow.frequency);
   const [editedResources, setEditedResources] = useState(selectedRow.resources);
   const [editedPrice, setEditedPrice] = useState(selectedRow.price);
   const [editedImportanceLevel, setEditedImportanceLevel] = useState(selectedRow.importanceLevel);
   const [editedUrgencyLevel, setEditedUrgencyLevel] = useState(selectedRow.urgencyLevel);

   const back = () => {
      Unselect.unselect();
      nav('/', {replace: true});
   }

   const executeEdit = () => {
      if (!editedActivity) alert('field "activity" is required')
      else if (!editedImportanceLevel || editedImportanceLevel === 0) alert('field "Importance Level" is required')
      else if (!editedUrgencyLevel || editedUrgencyLevel === 0) alert('field "urgency Level" is required')
      else if (editedImportanceLevel > 5 || editedImportanceLevel < 1) alert('"Importance Level" must be a number from 1 to 5!')
      else if (editedUrgencyLevel > 5 || editedUrgencyLevel < 1) alert('"Urgency Level" must be a number from 1 to 5!')
      else {
         httpClient.editTask(selectedRow.id, editedActivity, editedFrequency, editedResources, editedPrice, editedImportanceLevel, editedUrgencyLevel);
         setTimeout(() => {back()}, 0);
      }
   }

   onkeydown = e => {
      switch (e.key) {
         case "Escape": back();
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
               <input id="act" type="number" min="1" max="5" value={editedImportanceLevel} onChange={e => setEditedImportanceLevel(e.target.valueAsNumber)} />
            </fieldset>
            <fieldset>
               <label htmlFor="act">Urgency level</label>
               <input id="act" type="number" min="1" max="5" value={editedUrgencyLevel} onChange={e => setEditedUrgencyLevel(e.target.valueAsNumber)} />
            </fieldset>
         </form>
         <aside>
            <footer>
               <div className="center-fl">
                  <button className="btn-edit pointer" onClick={() => executeEdit()}>edit task<i></i></button>
               </div>
               <div className="center-fl">
                  <button className="btn-cancel pointer" onClick={() => back()}>cancel<i></i></button>
               </div>
            </footer>
         </aside>
      </main>
   </>
})
export default EditForm;