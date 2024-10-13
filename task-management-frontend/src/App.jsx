import { useState } from 'react'
import TaskList from './components/tasklist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TaskList />
  )
}

export default App
