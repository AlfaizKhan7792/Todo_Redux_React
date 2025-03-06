import React from 'react'
import ListItem from './ListItem'
import { useSelector } from 'react-redux'

const ListGroup = () => {

    const {AllTodos} = useSelector((state) => state.Todos)

    if(AllTodos.length === 0){
        return <h1 className="text-center fw-bold mt-5">No Longer Yet</h1>
    }

  return (
    <ol className='list-group mt-5'>
      {
        AllTodos.map((Todo) => <ListItem key={Todo.id} Todo={Todo} />)
      }
    </ol>
  )
}

export default ListGroup
