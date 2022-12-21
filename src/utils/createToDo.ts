import { IToDo } from "../interface/IToDo";
import { v4 as uuidv4 } from 'uuid';

export default function createToDo(content: string): IToDo {
  return {
    id: uuidv4(),
    content,
    done: false,
    createdAt: new Date()
  }
}