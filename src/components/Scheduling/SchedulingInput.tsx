import React, { useState } from "react";
import { useGlobalState } from "../../GlobalState/Scheduler/Index";
import Button from "../Utilities/Button";
import Input from '../Utilities/Input'
import Wrapper from "../Utilities/Wrapper";
import Paragraph from "../Utilities/Paragraph";
import {TableInput} from '../Utilities/Table'

import { inputTableHead } from "../../constants/constants";

const columns=["arrivalTime","burstTime","priority"]

const initialValues={
  arrivalTime:[0],
  burstTime:[0],
  priority:[0]
}

const SchedulingInput: React.FC = () => {
  
  const { dispatch } = useGlobalState();

  const [times, setTimes] = useState(initialValues);
  const [errors,setErrors]=useState('')
  const [timeQuantum,setTimeQuantum]=useState(0)

  const { arrivalTime, burstTime, priority } = times;

  const handleTime = (event: React.ChangeEvent<HTMLInputElement>,index: number) => {
    const {value,name}=event.target
    let updatedArrival:any = {...times};
    updatedArrival[name][index] = parseInt(value);
    setTimes(updatedArrival);
  };

  const handleTimeQuantum = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimeQuantum(parseInt(event.target.value));
  };

  const handleRows = () => {
    setTimes({
      ...times,
      arrivalTime: [...arrivalTime, 0],
      burstTime: [...burstTime, 0],
      priority: [...priority, 0],
    });
  };

  const handleDelete = () => {
    if (arrivalTime.length <= 1) {
      alert("Minimum of one input row required");
      return;
    }
    let updatedArrival = [...arrivalTime];
    let updatedBurst = [...burstTime];
    let updatedPriority = [...priority];
    updatedArrival.splice(-1);
    updatedBurst.splice(-1);
    updatedPriority.splice(-1);
    setTimes({
      ...times,
      arrivalTime: updatedArrival,
      burstTime: updatedBurst,
      priority: updatedPriority,
    });
  };

  const allEqual=(array:number[])=>{
    return array.every(val => val === array[0]);
  }

  const handleSubmit = () => {
    if (arrivalTime.length <= 3) {
      setErrors("Error: Input more then three rows");
      return;
    }
    for(let i=0;i<arrivalTime.length;i++){
      if(arrivalTime[i]<0 || burstTime[i]<0 || priority[i]<0 || timeQuantum<0){
        setErrors("Error: No input should be negative")
        return;
      }
      if(allEqual(arrivalTime) || allEqual(burstTime) || allEqual(priority)){
        setErrors("Error: Input all fields or All the inputs are Equal")
        return;
      }
    }
    setErrors('')
    dispatch({
      type: "SETDATA",
      arrivalTime,
      burstTime,
      priority,
      timeQuantum,
    });
  };

  return (
    <React.Fragment>
        <Paragraph>{errors}</Paragraph>
        <TableInput 
        thead={inputTableHead}
        rows={arrivalTime} 
        columns={columns} 
        handleChange={handleTime} 
        minWidth="400px"
        width="80vw"
        placeHolder={columns}/>
        <Wrapper justifyContent="center">
          <Button clickHandler={handleRows}>Add row</Button>
          <Button clickHandler={handleDelete}>Delete</Button>
        </Wrapper>
        <div>
          <Input
          type="number"
          id="timeQuant"
          onChange={(event) => handleTimeQuantum(event)}
          width="50px"
          height="30px"
          border="1px solid white"
          borderRadius="20px"
          margin="4px"
          label="Time Quantum:"
          />
        </div>
        <Wrapper justifyContent="center">
          <Button clickHandler={handleSubmit}>Submit</Button>
        </Wrapper>
    </React.Fragment>
  );
};

export default SchedulingInput;
