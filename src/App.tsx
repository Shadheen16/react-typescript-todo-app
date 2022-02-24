import React, { FC, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const App: FC = () => {

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <Container>
          <Header>TODO APP</Header>
          <AddTask>
            <AddTaskInput placeholder="Add a task" type="text" />
            <AddTaskInput placeholder="Add a date"  type="date"/>
            <AddTaskButton>Add</AddTaskButton>
          </AddTask>
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
const AddTaskButton = styled.input`

`