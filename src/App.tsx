import './global.css';
import styles from './App.module.css';

import { useState } from 'react';

import { IToDo } from './interface/IToDo';

import { Header } from './components/Header';
import { FormToDo } from './components/FormToDo';
import { ListToDos } from './components/ListToDos';

export function App() {
  const [toDos, setToDos] = useState<IToDo[]>([]);

  function addToDo(newToDo: IToDo) {
    setToDos([...toDos, newToDo])
  }

  function removeToDo(id: string) {
    const newToDos: IToDo[] = toDos.filter((toDo: IToDo) => toDo.id !== id)

    setToDos(newToDos)
  }

  function updateToDo(id: string) {
    const updatedToDos = toDos.map((toDo: IToDo) => {
      if (toDo.id === id) toDo.done = !toDo.done ? true : false;
      
      return toDo
    })
    setToDos(updatedToDos)
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.wrapper}>
        <FormToDo onAddToDo={addToDo} />
        <ListToDos
          toDos={toDos}
          onRemoveToDo={removeToDo}
          onUpdateToDo={updateToDo}
        />
      </div>

    </div>
  )
}