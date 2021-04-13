import React, { useState } from "react";
import TableHead from "../Utilities/TableHead";
import Button from "../Utilities/Button";
import { inputTableHead } from "../../constants/constants";
import { useGlobalState } from "../../GlobalState/Index";
import styled from "styled-components";

const Table = styled.table`
  width: 80vw;
  border-collapse: collapse;
  margin-top: 18vh;
  color: white;
`;
const Tr = styled.tr`
  text-align: center;
  border: 1px solid transparent;
  &:nth-child(odd) {
    background-color: rgb(45, 52, 69);
  }
  &:nth-child(even) {
    background-color: rgb(53, 60, 76);
  }
`;

const Input = styled.input`
  width: 50px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid white;
  margin: 4px;
`;
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
    if (arrivalTime.length <= 1) {
      alert("Input more then one row");
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
                <input
                  type="number"
                  placeholder="enter arrival time"
                  onChange={(event) => handleArrivalTime(event, index)}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="enter burst time"
                  onChange={(event) => handleBurstTime(event, index)}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
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
        />
      </div>
      <ButtonDiv>
        <Button clickHandler={handleSubmit}>Submit</Button>
      </ButtonDiv>
    </div>
  );
};

export default SchedulingInput;
