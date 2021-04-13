import React from "react";
import { useGlobalState } from "../../GlobalState/Index";
import styled from "styled-components";

//Styled Components
const OuterDiv = styled.div`
  display: flex;
  margin-bottom: 10vh;
`;
const InnerDiv = styled.div`
  margin: 1px;
`;

const GanttChart: React.FC = () => {
  let { state } = useGlobalState();

  return (
    <>
      <h3>Gantt chart</h3>
      <OuterDiv>
        {state.ganttChart.map((ele, index) => (
          <InnerDiv key={index}>{ele}</InnerDiv>
        ))}
      </OuterDiv>
    </>
  );
};

export default GanttChart;
