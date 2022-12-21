import { IToDo } from './IToDo'
export interface IFormToDoProps {
  onAddToDo: (newToDo: IToDo) => void
}