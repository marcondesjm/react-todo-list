/* eslint-disable no-unused-vars */
import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import { Container, ContainerFlex, ContainerItems, ListBox, InputButton, Input, Button, ListItem, Footer, Trash, Check } from './styles'


function App() {

  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  const inputChange = event => {
    setTask(event.target.value)
  }

  const buttonClicked = () => {

    if (task) {
      setList([...list, { id: uuid(), task, finished: false }])
    }
  }

  const finishTask = id => {

    const taskComplete = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(taskComplete)
  }

  const removeTask = id => {

    const taskRemoved = list.filter(item => item.id !== id)

    setList(taskRemoved)
  }

  return (

    <Container>
      <ContainerFlex>

        <ContainerItems>
          <ListBox>

            <InputButton>
              <Input onChange={inputChange} type="text" placeholder="What should I do today?" />
              <Button onClick={buttonClicked} >+</Button>
            </InputButton>

            <ul>
              {
                list.length > 0 ? (


                  list.map(item => (
                    <ListItem isFinished={item.finished} key={item.id}>
                      <Check onClick={() => finishTask(item.id)} />
                      <li>{item.task}</li>
                      <Trash onClick={() => removeTask(item.id)} />
                    </ListItem>
                  ))
                ) : (
                  <h4>There are no tasks on the list.</h4>
                )
              }
            </ul>
          </ListBox>
        </ContainerItems>

        <Footer>
          <div className='my-name'>Developed by Camila Sobral</div>
          <div className='link-container'>
            <a href='https://www.linkedin.com/in/camilarsobral/'>linkedin</a>
            <a href='https://github.com/camilarsobral'>github</a>
            <a href='https://github.com/camilarsobral'>portfolio</a>
          </div>
        </Footer>

      </ContainerFlex>
    </Container>
  )
}

export default App
