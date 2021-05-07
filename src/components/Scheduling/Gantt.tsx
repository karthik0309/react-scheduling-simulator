import React from "react";
import setColor from "../../Utilities/setColor";
import Wrapper from "../Utilities/Wrapper";

//Types
type PropsType = {
  processId: string;
  startTime: number;
  stopTime: number;
};


const Gantt: React.FC<PropsType> = ({ processId, startTime, stopTime }) => {
 
  const timeDifference = stopTime - startTime;
  let [ganttColor, ganttWidth] = setColor(timeDifference);

  return (
    <Wrapper width={`${ganttWidth}px`}>
      
      <Wrapper
        color={ganttColor.toString()}
        width={`${ganttWidth}px`}
      >
        <p>{processId}</p>
      </Wrapper>
      
      <Wrapper justifyContent="space-between" width="100%">
        <p>{startTime}</p>
        <p>{stopTime}</p>
      </Wrapper>
    
    </Wrapper>
  );
};

export default Gantt;
