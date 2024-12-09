import { create } from "zustand";

export const useToDoStore = create((set, get) => ({
  todoList: [],
  addTask: (newTask) => {
    const allToDo = get().todoList;
    set({ todoList: [...allToDo, newTask] });
  },
  deleteItem: (idForDelete) => {
    const allToDo = get().todoList;
    const itemsAfterRemoving = allToDo.filter(
      (todo) => todo.id !== idForDelete
    );
    set({ todoList: itemsAfterRemoving });
  },
  marktodoAsComplited: (idMarkAsComplited) => {
    const allToDo = get().todoList;
    const markedTodos = allToDo.map((todo) =>
      todo.id === idMarkAsComplited
        ? { ...todo, isComplited: !todo.isComplited }
        : todo
    );
    set({ todoList: markedTodos });
  },
}));
