import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, useState, FormEvent } from 'react';
import { IFormToDoProps } from '../interface/IFormToDoProps';
import createToDo from '../utils/createToDo';
import styles from './FormToDo.module.css';

export function FormToDo({ onAddToDo }: IFormToDoProps) {
  const [newContent, setContentToDo] = useState<string>('');
  const isContentEmpty = newContent.length === 0;

  function handleContentToDo(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setContentToDo(event.target.value);
  }

  function addToDoInList(event: FormEvent) {
    event.preventDefault();
    onAddToDo(createToDo(newContent));
    setContentToDo('')
  }


  return (
    <form className={styles.formToDo} onSubmit={addToDoInList}>
      <textarea
        name='toDoText'
        placeholder='Adicione uma nova tarefa'
        value={newContent}
        onChange={handleContentToDo}
        required
      />

      <button type='submit' disabled={isContentEmpty}>
        Criar <PlusCircle weight='bold' size={16} />
      </button>

    </form>
  )
}