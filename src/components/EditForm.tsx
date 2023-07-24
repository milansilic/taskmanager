import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'
import { httpClient, objectModel } from '../stores/HttpClient'
import { selectStore } from '../stores/SelectStore'
import Unselect from '../services/unselect'
import '../styles/components/editForm.scss'

interface EditFormModel {
   selectedRow: objectModel,
}

const EditForm: React.FC<EditFormModel> = observer(({selectedRow}) => {   
   const navigate = useNavigate();
   const back = () => {
      Unselect.unselect();
      navigate('/');
   }

   const executeEdit = () => {
      if (!selectedRow.activity) alert('field "activity" is required')
      else if (!selectedRow.importanceLevel || selectedRow.importanceLevel === 0) alert('field "Importance Level" is required')
      else if (selectedRow.importanceLevel > 5 || selectedRow.importanceLevel < 1) alert('"Importance Level" must be a number from 1 to 5!')
      else if (!selectedRow.urgencyLevel || selectedRow.urgencyLevel === 0) alert('field "urgency Level" is required')
      else if (selectedRow.urgencyLevel > 5 || selectedRow.urgencyLevel < 1) alert('"Urgency Level" must be a number from 1 to 5!')
      else {
         httpClient.editTask(
            selectedRow.id, 
            selectedRow.activity, 
            selectedRow.frequency, 
            selectedRow.resources, 
            selectedRow.price, 
            selectedRow.importanceLevel, 
            selectedRow.urgencyLevel
         );
         setTimeout(() => {back()}, 0);
      }
   }

   return <>
      <main className="edit-form flex-space-between">
         <h1>Edit <span>task</span></h1>
         <form action="">
            <fieldset>
               <label htmlFor="act">Activity</label>
               <input id="act" type="text" value={selectedRow.activity} onChange={e => selectStore.setActivity(e.target.value)} />
            </fieldset>
            <fieldset>
               <label htmlFor="act">Frequency</label>
               <input id="act" type="text" value={selectedRow.frequency} onChange={e => selectStore.setFrequency(e.target.value)} />
            </fieldset>
            <fieldset>
               <label htmlFor="act">Resources</label>
               <input id="act" type="text" value={selectedRow.resources} onChange={e => selectStore.setResources(e.target.value)} />
            </fieldset>
            <fieldset>
               <label htmlFor="act">Price</label>
               <input id="act" type="text" value={selectedRow.price} onChange={e => selectStore.setPrice(e.target.value)} />
            </fieldset>
            <fieldset>
               <label htmlFor="act">Importance level</label>
               <input id="act" type="number" min="1" max="5" value={selectedRow.importanceLevel} onChange={e => selectStore.setImpLvl(e.target.valueAsNumber)} />
            </fieldset>
            <fieldset>
               <label htmlFor="act">Urgency level</label>
               <input id="act" type="number" min="1" max="5" value={selectedRow.urgencyLevel} onChange={e => selectStore.setUrgLvl(e.target.valueAsNumber)} />
            </fieldset>
         </form>
         <aside>
               <div className="center-fl btn-zone">
                  <button className="btn-edit pointer" onClick={() => executeEdit()}>edit task<i></i></button>
               </div>
               <div className="center-fl btn-zone">
                  <button className="btn-cancel pointer" onClick={() => back()}>cancel<i></i></button>
               </div>
         </aside>
      </main>
   </>
})
export default EditForm;