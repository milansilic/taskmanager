import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { httpClient } from '../stores/HttpClient'
import { inputStore } from '../stores/InputStore'
import Unselect from '../services/unselect'
import '../styles/components/taskForm.scss'

const TaskForm: React.FC = observer(() => {
    return <aside>
        <form action="">
            <fieldset className="txt">
                <input id="act" type="text" value={inputStore.activity} onChange={e => inputStore.setActivity(e.target.value)} required />
                <label htmlFor="act">Activity &#42;</label>
                <span></span>
            </fieldset>
            <fieldset className="txt">
                <input id="fre" type="text" value={inputStore.frequency} onChange={e => inputStore.setFrequency(e.target.value)} required />
                <label htmlFor="fre">Frequency</label>
                <span></span>
            </fieldset>
            <fieldset className="txt">
                <input id="res" type="text" value={inputStore.resources} onChange={e => inputStore.setResources(e.target.value)} required />
                <label htmlFor="res">Resources</label>
                <span></span>
            </fieldset>
            <fieldset className="txt">
                <input id="pri" type="text" value={inputStore.price} onChange={e => inputStore.setPrice(e.target.value)} required />
                <label htmlFor="pri">Price</label>
                <span></span>
            </fieldset>
            <fieldset className="stars">
                <input type="radio" name="il" id="il5" value="5" onChange={e => inputStore.setImpLvl(+e.target.value)} />
                <label htmlFor="il5"></label>
                <input type="radio" name="il" id="il4" value="4" onChange={e => inputStore.setImpLvl(+e.target.value)} />
                <label htmlFor="il4"></label>
                <input type="radio" name="il" id="il3" value="3" onChange={e => inputStore.setImpLvl(+e.target.value)} />
                <label htmlFor="il3"></label>
                <input type="radio" name="il" id="il2" value="2" onChange={e => inputStore.setImpLvl(+e.target.value)} />
                <label htmlFor="il2"></label>
                <input type="radio" name="il" id="il1" value="1" onChange={e => inputStore.setImpLvl(+e.target.value)} />
                <label htmlFor="il1"></label>
                <h6>Inportance level &#42;</h6>
            </fieldset>
            <fieldset className="stars">
                <input type="radio" name="ul" id="ul5" value="5" onChange={e => inputStore.setUrgLvl(+e.target.value)} />
                <label htmlFor="ul5"></label>
                <input type="radio" name="ul" id="ul4" value="4" onChange={e => inputStore.setUrgLvl(+e.target.value)} />
                <label htmlFor="ul4"></label>
                <input type="radio" name="ul" id="ul3" value="3" onChange={e => inputStore.setUrgLvl(+e.target.value)} />
                <label htmlFor="ul3"></label>
                <input type="radio" name="ul" id="ul2" value="2" onChange={e => inputStore.setUrgLvl(+e.target.value)} />
                <label htmlFor="ul2"></label>
                <input type="radio" name="ul" id="ul1" value="1" onChange={e => inputStore.setUrgLvl(+e.target.value)} />
                <label htmlFor="ul1"></label>
                <h6>Urgency level &#42;</h6>
            </fieldset>
        </form>
        <footer>
            <div className="center-fl">
                <button className="btn-add pointer" onClick={() => {
                    if (!inputStore.activity) alert('field "Activity" is required')
                    else if (inputStore.importanceLevel === 0) alert('field "Importance level" is required')
                    else if (inputStore.urgencyLevel === 0) alert('field "Urgency level" is required')
                    else {
                        httpClient.postTask(inputStore.activity, inputStore.frequency, inputStore.resources, inputStore.price, inputStore.importanceLevel, inputStore.urgencyLevel);
                        inputStore.inputReset()
                        let ele = [...document.querySelectorAll("[name=il], [name=ul]")];
                        ele.forEach((elm: any) => elm.checked = false);
                        Unselect.unselect();
                    }
                }}>add task<i></i></button>
            </div>
            <div className="center-fl">
                <Link to='edit'><button className="btn-edit pointer">edit<i></i></button></Link>
            </div>
            <div className="center-fl">
                <button className="btn-delete pointer" onClick={(e) => {
                    document.body.classList.add('delete-check');
                    e.currentTarget.blur();
                }}>delete<i></i></button>
            </div>
        </footer>
    </aside>
})
export default TaskForm;