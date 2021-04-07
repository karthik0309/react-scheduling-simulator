import SchedulingInput from './components/SchedulingInput'
import Header from './components/Header'
import SchedulingType from './components/SchedulingType'
import SchedulingOutPut from './components/SchedulingOutPut'
import StateProvider from './GlobalState/Index'
import Ganttchart from './components/GanttChart'
import './App.css'
const App = () => {
  return (
    <StateProvider>
      <Header/>
      <SchedulingInput/>
      <SchedulingType/>
      <SchedulingOutPut/>
    </StateProvider>
  )
}

export default App
