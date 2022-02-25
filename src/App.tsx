import React, { FC, Fragment, useRef, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

interface ITodo {
  id: number;
  task: string;
  deadline: string;
}

const App: FC = () => {
  const taskRef = useRef<HTMLInputElement>(null);
  const deadlineRef = useRef<HTMLInputElement>(null);
  const [newTodo, setNewTodo] = useState<ITodo>({ id: 0, task: "", deadline: "" });
  const [todos, setTodos] = useState<ITodo[]>([]);

  const saveTodo = () => {
    const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
    setNewTodo({
      id: newId,
      task: taskRef.current!.value,
      deadline: deadlineRef.current!.value
    });
    taskRef.current!.value = "";
    deadlineRef.current!.value = "";
    setTodos([...todos, newTodo]);
    console.log(todos);


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
            <AddTaskButton onClick={saveTodo}>Add</AddTaskButton>
          </AddTask>
          <DisplayTodos>
            {todos.map((todo: ITodo) => (
              <Todo key={todo.id}>
                <TodoTask>{todo.task}</TodoTask>
                <TodoDeadline>{todo.deadline}</TodoDeadline>
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
  place-items: center;
`
const Container = styled.div`
  min-width: 320px;
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

`
const AddTaskInput = styled.input`

`
const AddTaskButton = styled.button`

`
const DisplayTodos = styled.div`
`
const Todo = styled.div``
const TodoTask = styled.p``
const TodoDeadline = styled.p``