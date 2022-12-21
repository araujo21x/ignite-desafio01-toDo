import { IToDo } from './IToDo'
export interface IListToDosProps {
  toDos: IToDo[];
  onUpdateToDo: (id: string) => void;
  onRemoveToDo: (id: string) => void;
}