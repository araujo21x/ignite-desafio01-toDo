import styles from './ListToDos.module.css';
import { IListToDosProps } from "../interface/IListToDoProps";
import { countDoneTask } from "../utils/countDoneTask";
import { IToDo } from '../interface/IToDo';
import { CheckCircle, Circle, Trash } from 'phosphor-react';
import clipboard from '../assets/clipboard.svg';

export function ListToDos({ toDos, onRemoveToDo, onUpdateToDo }: IListToDosProps) {
  function showCheckIcon(toDo: IToDo) {
    if (toDo.done) {
      return (<CheckCircle
        onClick={() => { onUpdateToDo(toDo.id) }}
        className={styles.checkIcon}
        size={22}
      />)
    }

    return (
      <Circle
        onClick={() => { onUpdateToDo(toDo.id) }}
        className={styles.circleIcon}
        size={22}
      />
    )

  }

  function showContent(toDo: IToDo) {
    if (toDo.done) return <p className={styles.contentDone}>{toDo.content}</p>
    return <p className={styles.content}>{toDo.content}</p>
  }

  function showMain(toDos: IToDo[]) {
    if (toDos.length === 0) {
      return (
        <div className={styles.boxWithoutContent}>
          <img src={clipboard} alt=' Ícone de planilha com lista' />
          <p className={styles.withoutContentTitle}>Você ainda não tem tarefas cadastradas</p>
          <p className={styles.withoutContentSubTitle}>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )
    }
    return (
      toDos.map((toDo: IToDo) => {
        return (
          <div className={styles.boxToDo} key={toDo.id}>
            <div className={styles.boxContent}>
              {showCheckIcon(toDo)}
              {showContent(toDo)}
            </div>

            <Trash
              onClick={() => { onRemoveToDo(toDo.id) }}
              className={styles.trashIcon}
              size={18}
            />
          </div>
        )
      })
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerToDos}>
        <p className={styles.pCreatedTasks}>Tarefas criadas <span>{toDos.length}</span></p>
        <p className={styles.pDone}>Concluídas <span>{countDoneTask(toDos)}</span></p>
      </div>

      <main className={styles.containerBoxToDo}>
        {showMain(toDos)}
      </main>
    </div>
  )
}