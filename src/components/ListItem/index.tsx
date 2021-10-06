import { useState } from 'react';
import * as C from './style';
import {Item} from '../../types/item';

type Props = {
    Item: Item 
}

export const ListItem = ({Item}: Props) =>{

const [isChecked, setIsChecked] = useState(Item.done);
    return(
        <C.Container done={isChecked}>
            <input 
                type="checkbox"
                checked = {isChecked}
                onChange = {e => setIsChecked(e.target.checked)}
            />
            <label>{Item.name}</label>
        </C.Container>
    )
}
