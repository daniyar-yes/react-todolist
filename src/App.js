import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


const App = () => {

  const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor\'s appointment',
            day: 'Sept 15th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Swimming pool',
            day: 'Sept 17th at 2:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'SuperStore',
            day: 'Sept 20th at 11:30am',
            reminder: false,
        },
    ])


    //Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !==id))
    }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask}/> :
      'No Tasks To Show'}
    </div>
    

  );
}


export default App;
