import React from "react";
import styled from "styled-components";
import setColor from "../../Utilities/setColor";

//Types
type PropsType = {
  processId: string;
  startTime: number;
  stopTime: number;
};
type ProcessContainerType = {
  width: number;
  color: string;
};
type MainContainerProps = {
  width: number;
};

//styled components
const MainContainer = styled.div<MainContainerProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : 40)}px;
`;
const ProcessContainer = styled.div<ProcessContainerType>`
  width: ${(props) => props.width}px;
  height: 50px;
  text-align: center;
  background: ${(props) => props.color};
`;
const TimeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Gantt: React.FC<PropsType> = ({ processId, startTime, stopTime }) => {
  const timeDifference = stopTime - startTime;
  let [ganttColor, ganttWidth] = setColor(timeDifference);

  return (
    <MainContainer width={Number(ganttWidth)}>
      <ProcessContainer
        color={ganttColor.toString()}
        width={Number(ganttWidth)}
      >
        <p>{processId}</p>
      </ProcessContainer>
      <TimeContainer>
        <p>{startTime}</p>
        <p>{stopTime}</p>
      </TimeContainer>
    </MainContainer>
  );
};

export default Gantt;
