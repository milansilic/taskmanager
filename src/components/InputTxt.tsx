import { observer } from 'mobx-react-lite'
import Unselect from '../services/unselect'

interface InputTxtModel {
    name: string,
    value: string,
    onchange: any, // <<< sorry about this, couldn't find a type
    star: any, // <<< sorry about this, couldn't find a type
    error: string,
}

const InputTxt: React.FC<InputTxtModel> = observer(({name, value, onchange, star, error}) => {
    return <fieldset className="txt">
        <input 
            id={name} 
            type="text" 
            value={value} 
            onFocus={() => Unselect.unselect()} 
            onChange={onchange} 
            required 
        />
        <label htmlFor={name}>{name} {star}</label>
        <span></span>
        <p>{error}</p>
    </fieldset>
})
export default InputTxt;