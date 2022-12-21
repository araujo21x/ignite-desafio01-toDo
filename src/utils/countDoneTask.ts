import { IToDo } from "../interface/IToDo";

export function countDoneTask(toDos: IToDo[]): string {
  if (toDos.length === 0) return "0 de 0";
  const doneItems = toDos.filter((item: IToDo) => item.done);

  return `${doneItems.length} de ${toDos.length}`;
}