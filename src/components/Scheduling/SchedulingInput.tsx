import React, { useState } from "react";
import { useGlobalState } from "../../GlobalState/Scheduler/Index";

import TableHead from "../Utilities/TableHead";
import Button from "../Utilities/Button";
import Input from '../Utilities/Input'
import Wrapper from "../Utilities/Wrapper";
import Paragraph from "../Utilities/Paragraph";
import {Table,Tr} from '../Utilities/Table'

import { inputTableHead } from "../../constants/constants";


const SchedulingInput: React.FC = () => {
  //Global state
  const { dispatch } = useGlobalState();

  //state
  const [times, setTimes] = useState({
    arrivalTime: [0],
    burstTime: [0],
    priority: [0],
    timeQuantum: 0,
  });
  const [errors,setErrors]=useState('')

  //Destructuring
  const { arrivalTime, burstTime, priority, timeQuantum } = times;

  //Event handlers
  const handleArrivalTime = (event: React.ChangeEvent<HTMLInputElement>,index: number) => {
    let updatedArrival = [...arrivalTime];
    updatedArrival[index] = parseInt(event.target.value);
    setTimes({ ...times, arrivalTime: updatedArrival });
  };

  const handleBurstTime = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let updatedBurst = [...burstTime];
    updatedBurst[index] = parseInt(event.target.value);
    setTimes({ ...times, burstTime: updatedBurst });
  };

  const handlePriority = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let updatedPriority = [...priority];
    updatedPriority[index] = parseInt(event.target.value);
    setTimes({ ...times, priority: updatedPriority });
  };

  const handleTimeQuantum = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTimes({ ...times, timeQuantum: parseInt(event.target.value) });
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
    <div>
      <Paragraph>{errors}</Paragraph>
      <Table>
        <TableHead tableHead={inputTableHead} />
        <tbody>
          {arrivalTime.map((ele, index) => (
            <Tr key={index}>
              <td>
                <p>P[{index + 1}]</p>
              </td>
              <td>
                <Input
                  type="number"
                  placeholder="enter arrival time"
                  onChange={(event) => handleArrivalTime(event, index)}
                />
              </td>
              <td>
                <Input
                  type="number"
                  placeholder="enter burst time"
                  onChange={(event) => handleBurstTime(event, index)}
                />
              </td>
              <td>
                <Input
                  type="number"
                  placeholder="enter priority"
                  onChange={(event) => handlePriority(event, index)}
                />
              </td>
            </Tr>
          ))}
        </tbody>
      </Table>
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
    </div>
  );
};

export default SchedulingInput;
