import React from "react";
import { useGlobalState } from "../../GlobalState/Index";
import Wrapper from "../Utilities/Wrapper";

const GanttChart: React.FC = () => {
  
  let { state } = useGlobalState();

  return (
    <>
      <h3>Gantt chart</h3>
      <Wrapper width="80vw" margin="0 0 10vh 0" overflow="scroll">
        {state.ganttChart.map((ele, index) => (
          <div key={index} style={{margin:"1px"}}>{ele}</div>
        ))}
      </Wrapper>
    </>
  );
};

export default GanttChart;
