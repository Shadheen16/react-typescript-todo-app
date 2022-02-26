import React, { FC, Fragment, useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

interface ITodo {
  id: number;
  task: string;
  deadline: string;
}

const App: FC = () => {
  const taskRef = useRef<HTMLInputElement>(null);
  const deadlineRef = useRef<HTMLInputElement>(null);
  const [newTodo, setNewTodo] = useState<ITodo>({} as ITodo);
  const [todos, setTodos] = useState<ITodo[]>([]);

  //get todo list from local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(todos);
  }, []);

  //create new todo
  const createNewTodo = () => {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;

    setNewTodo({
      id: newId,
      task: taskRef.current!.value,
      deadline: deadlineRef.current!.value
    });
    taskRef.current!.value = "";
    deadlineRef.current!.value = "";
    setTodos([...todos, newTodo]);

  //save new todo to local storage
    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log(todos);


  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
    //remove todo from local storage
    localStorage.removeItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
    
  };  

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <Container>
          <Header>TODO APP</Header>
          <AddTask>
            <AddTaskInput name="task" placeholder="Add a task" type="text" ref={taskRef} />
            <AddTaskInput name="deadline" placeholder="Add a date" type="date" ref={deadlineRef} />
            <AddTaskButton onClick={createNewTodo}>Add</AddTaskButton>
          </AddTask>
          <DisplayTodos>
            {todos.map((todo: ITodo) => (
              <Todo key={todo.id}>
                <div>
                  <TodoTask>{todo.task}</TodoTask>
                  <TodoDeadline>{todo.deadline}</TodoDeadline>
                </div>
                <div>
                  <TodoButton onClick={()=>deleteTodo(todo.id)}>Delete</TodoButton>
                </div>
              </Todo>
            ))}
          </DisplayTodos>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-align: center;
  }  
`

const Wrapper = styled.div`
  height: 100vh;
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  display: flex;
  justify-content: center;
  padding-top: 5rem;
`
const Container = styled.div`
  min-width: 320px;
  max-height:80vh;
  overflow-y: auto;
  padding: 1.5rem;
  background-image: linear-gradient(to bottom, #ffffff 0%, #ffffff2d 100%);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`
const Header = styled.h1`
  font-size: 2rem;
  color:#f6d365;
  font-weight: 900;
  -webkit-text-stroke: 1px black;
  -moz-text-stroke: 1px black;
`

const AddTask = styled.div`
  display: flex;
  flex-direction: column;
`
const AddTaskInput = styled.input`
  display: inline-block;
  width: 100%;
  padding: 0.25rem;
  border:none;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
  cursor: pointer
`
const AddTaskButton = styled.button`
  display: inline-block;
  width: 100%;
  padding: 0.25rem;
  background-image: linear-gradient(to right,#000 0%,#f6d365 100%);
  border:none;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
`
const DisplayTodos = styled.div`
  margin:1rem 0;
  padding-top: 1rem;
`
const Todo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: .25rem;
  padding: 0.25rem 0.25rem;
  background-image: linear-gradient(to bottom, #ffffff 0%, #ffffff2d 100%);
`
const TodoTask = styled.p`
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
`
const TodoDeadline = styled.p`
  text-align: left;
  font-size: 0.75rem;
`

const TodoButton = styled.button`
  color:red;
  border:none;
  padding: 0.25rem;
  border-radius: 0.25rem;
  drop-shadow: 0px 0px 10px rgba(187, 30, 30, 0.822);

`