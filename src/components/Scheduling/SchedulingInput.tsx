import React, { useState } from "react";
import TableHead from "../Utilities/TableHead";
import Button from "../Utilities/Button";
import {Table,Tr} from '../Utilities/Table'
import Input from '../Utilities/Input'
import { inputTableHead } from "../../constants/constants";
import { useGlobalState } from "../../GlobalState/Index";
import styled from "styled-components";


const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

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

  //Destructuring
  const { arrivalTime, burstTime, priority, timeQuantum } = times;

  //Event handlers
  const handleArrivalTime = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
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
  const handleSubmit = () => {
    if (arrivalTime.length <= 3) {
      alert("Input more then three rows");
      return;
    }
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
                  min="0"
                  placeholder="enter arrival time"
                  onChange={(event) => handleArrivalTime(event, index)}
                  required
                />
              </td>
              <td>
                <Input
                  type="number"
                  min="0"
                  placeholder="enter burst time"
                  onChange={(event) => handleBurstTime(event, index)}
                  required
                />
              </td>
              <td>
                <Input
                  type="number"
                  min="0"
                  placeholder="enter priority"
                  onChange={(event) => handlePriority(event, index)}
                  required

                />
              </td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <ButtonDiv>
        <Button clickHandler={handleRows}>Add row</Button>
        <Button clickHandler={handleDelete}>Delete</Button>
      </ButtonDiv>
      <div>
        <label htmlFor="timeQuant">Time Quantum:</label>
        <Input
          type="number"
          id="timeQuant"
          required
          onChange={(event) => handleTimeQuantum(event)}
          width="50px"
          height="30px"
          border="1px solid white"
          borderRadius="20px"
          margin="4px"
        />
      </div>
      <ButtonDiv>
        <Button clickHandler={handleSubmit}>Submit</Button>
      </ButtonDiv>
    </div>
  );
};

export default SchedulingInput;
