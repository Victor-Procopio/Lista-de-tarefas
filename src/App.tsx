import {useState} from 'react';
import * as C from './App.style';
import {Item} from './types/item';
import {ListItem} from './components/ListItem'
import { AddArea } from './components/AddArea';

const App = () =>{
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Lavar louça', done: false },
    { id: 2, name: 'Fazer café', done: false }
  ]);

const handleAddtask = (taskName: string) => {
  let newList = [...list];
  newList.push({
    id: list.length + 1,
    name: taskName,
    done: false
  });
setList(newList);
} 

  return(
    <C.Container>
      <C.area>
        <C.Header>Lista de Tarefas</C.Header>

      <AddArea onEnter = {handleAddtask} />

      {list.map((item, index)=>(
        <ListItem key={index} Item={item}/>
      ))}
      </C.area>
    </C.Container>
  );
    
}

export default App;