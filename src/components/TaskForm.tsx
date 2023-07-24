import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { taskFormSt } from '../stores/TaskFormStore'
import InputTxt from './InputTxt'
import '../styles/components/taskForm.scss'

const TaskForm: React.FC = observer(() => {
    return <aside>
        <form onSubmit={e => e.preventDefault()}>
            <InputTxt
                name={'activity'}
                value={taskFormSt.activity}
                onchange={(e: React.ChangeEvent<HTMLInputElement>) => { taskFormSt.setActivity(e.target.value) }}
                star={<>&#42;</>}
                error={taskFormSt.actReq}
            />
            <InputTxt
                name={'frequency'}
                value={taskFormSt.frequency}
                onchange={(e: React.ChangeEvent<HTMLInputElement>) => { taskFormSt.setFrequency(e.target.value) }}
                star={''}
                error={''}
            />
            <InputTxt
                name={'resources'}
                value={taskFormSt.resources}
                onchange={(e: React.ChangeEvent<HTMLInputElement>) => { taskFormSt.setResources(e.target.value) }}
                star={''}
                error={''}
            />
            <InputTxt
                name={'price'}
                value={taskFormSt.price}
                onchange={(e: React.ChangeEvent<HTMLInputElement>) => { taskFormSt.setPrice(e.target.value) }}
                star={''}
                error={''}
            />
            <fieldset className="stars">
                <input type="radio" name="il" id="il5" value="5" onChange={e => taskFormSt.setImpLvl(+e.target.value)} />
                <label htmlFor="il5"></label>
                <input type="radio" name="il" id="il4" value="4" onChange={e => taskFormSt.setImpLvl(+e.target.value)} />
                <label htmlFor="il4"></label>
                <input type="radio" name="il" id="il3" value="3" onChange={e => taskFormSt.setImpLvl(+e.target.value)} />
                <label htmlFor="il3"></label>
                <input type="radio" name="il" id="il2" value="2" onChange={e => taskFormSt.setImpLvl(+e.target.value)} />
                <label htmlFor="il2"></label>
                <input type="radio" name="il" id="il1" value="1" onChange={e => taskFormSt.setImpLvl(+e.target.value)} />
                <label htmlFor="il1"></label>
                <h6>Inportance level &#42;</h6>
                <p>{taskFormSt.ILReq}</p>
            </fieldset>
            <fieldset className="stars">
                <input type="radio" name="ul" id="ul5" value="5" onChange={e => taskFormSt.setUrgLvl(+e.target.value)} />
                <label htmlFor="ul5"></label>
                <input type="radio" name="ul" id="ul4" value="4" onChange={e => taskFormSt.setUrgLvl(+e.target.value)} />
                <label htmlFor="ul4"></label>
                <input type="radio" name="ul" id="ul3" value="3" onChange={e => taskFormSt.setUrgLvl(+e.target.value)} />
                <label htmlFor="ul3"></label>
                <input type="radio" name="ul" id="ul2" value="2" onChange={e => taskFormSt.setUrgLvl(+e.target.value)} />
                <label htmlFor="ul2"></label>
                <input type="radio" name="ul" id="ul1" value="1" onChange={e => taskFormSt.setUrgLvl(+e.target.value)} />
                <label htmlFor="ul1"></label>
                <h6>Urgency level &#42;</h6>
                <p>{taskFormSt.ULReq}</p>
            </fieldset>
            <div className="btn-zone center-fl">
                <button className="btn-add pointer" onClick={e => taskFormSt.handleAdd(e)}>add task<i></i></button>
            </div>
            <div className="btn-zone center-fl">
                <button className="btn-edit"><Link to='edit'>edit<i></i></Link></button>
            </div>
            <div className="btn-zone center-fl">
                <button className="btn-delete" onClick={e => taskFormSt.handleDelete(e)}>delete<i></i></button>
            </div>
        </form>
    </aside>
})
export default TaskForm;