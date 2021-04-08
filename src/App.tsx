import SchedulingInput from './components/SchedulingInput'
import Header from './components/Header'
import SchedulingType from './components/SchedulingType'
import SchedulingOutPut from './components/SchedulingOutPut'
import StateProvider from './GlobalState/Index'
import './App.css'
import GanttChart from './components/GanttChart'
const App = () => {
  return (
    <StateProvider>
      <Header/>
      <SchedulingInput/>
      <SchedulingType/>
      <SchedulingOutPut/>
      <GanttChart/>
    </StateProvider>
  )
}

export default App
