import * as C from './style'
import { useState, KeyboardEvent } from 'react'
import { type } from 'os';

type Props = {
    onEnter: (taskName:string) => void;
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter (inputText);
            setInputText('');
        }
        if(e.code === 'NumpadEnter' && inputText !== ''){
            onEnter (inputText);
            setInputText('');
        }
    } 

    return (
        <C.Container>
           <div className="image">➕</div>
           <input 
                type="text"
                placeholder = "Adicione uma tárefa"
                value = {inputText}
                onChange = {e=>setInputText(e.target.value)}
                onKeyUp = {handleKeyUp}
            />
        </C.Container>
    )
}