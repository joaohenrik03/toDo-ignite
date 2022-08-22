import { FormEvent, useState } from "react";
import { Header } from "./components/Header/Header";
import { Task } from "./components/Task/Task";

import Clipboard from './assets/clipboard.png';
import PlusIcon from './assets/plus.svg';

import styles from './App.module.css';

export function App() {
  const [toDoList, setToDoList] = useState<string[]>(['12', '2']);

  const [newTaskText, setNewTaskText] = useState('');

  function handleAddNewTaskToList(event: FormEvent) {
    event.preventDefault();

    const newTodoList = [...toDoList, newTaskText];
    setToDoList(newTodoList);
  };

  return (
    <>
      <Header />

      <main className={styles.main}>
        <form 
          onSubmit={handleAddNewTaskToList} 
          className={styles.form}
        >
          <input 
            type="text" 
            placeholder='Adicione uma nova tarefa'
            required
            onChange={(event) => setNewTaskText(event.target.value)}
            value={newTaskText}
          />

          <button type='submit'>
            Criar
            <img 
              src={PlusIcon} 
              alt="+" 
            />
          </button>
        </form>  

        <section>
          <header className={styles.header}>
            <div className={styles.createdTasks}>
              <strong>
                Tarefas criadas 
                <span>0</span>
              </strong>
            </div>

            <div className={styles.completeTasks}>
              <strong>
                Concluídas 
                <span>0 de 0</span>
              </strong>
            </div>
          </header>   
          
          <div className={styles.taskListContainer}>
            {
              toDoList.length === 0 ? (
                <div className={styles.noTaskOnTheList}>
                  <img src={Clipboard} alt="Lista vazia" />

                  <div>
                    <strong>
                      Você ainda não tem tarefas cadastradas
                    </strong>
                    <span>
                      Crie tarefas e organize seus itens a fazer
                    </span>
                  </div>
                </div>
              ) : (
                toDoList.map(task => {
                  return (
                    <Task 
                      task={task}
                    />
                  )
                })  
              )
            }
          </div>
        </section>
      </main>
    </>
  )
}
