import React from "react";
import { inputTableHead, outputTableHead } from "../../constants/constants";
import { useGlobalState } from "../../GlobalState/Index";
import {Table,Tr} from '../Utilities/Table'
import TableHead from "../Utilities/TableHead";


const SchedulingOutPut: React.FC = () => {
  let { state } = useGlobalState();

  const {
    arrivalTime,
    burstTime,
    completionTime,
    waitingTime,
    timeQunatum,
    Pid,
    priority,
    turnAroundTime,
    schedulingType,
  } = state; // Destructuring the state

  let temp = inputTableHead.concat(outputTableHead);
  if (schedulingType !== "PRIORITY") {
    temp.splice(temp.indexOf("Priority"), 1);
  }

  return (
    <div>
      <h3>Scheduling Output</h3>
      {schedulingType === "ROUNDROBIN" && (
        <p>For TimeQuantum : {timeQunatum} </p>
      )}
      <Table>
        <TableHead tableHead={temp} />
        <tbody>
          {arrivalTime.map((ele, index) => (
            <Tr key={index}>
              <td>P[{Pid[index]}]</td>
              <td>{ele}</td>
              <td>{burstTime[index]}</td>
              {schedulingType === "PRIORITY" && <td>{priority[index]}</td>}
              <td>{completionTime[index]}</td>
              <td>{turnAroundTime[index]}</td>
              <td>{waitingTime[index]}</td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SchedulingOutPut;
