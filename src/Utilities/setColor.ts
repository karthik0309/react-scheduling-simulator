import { colors } from "../constants/constants";

const setColor = (timeDifference: number) => {

  let ganttColor, ganttWidth;
  ganttWidth = timeDifference * 25;
  
  if (timeDifference <= 1) {
    ganttColor = colors[3];
    ganttWidth = 40;
  } else if (timeDifference <= 2) {
    ganttColor = colors[0];
  } else if (timeDifference <= 5) {
    ganttColor = colors[1];
  } else {
    ganttColor = colors[2];
  }
  return [ganttColor, ganttWidth];
};

export default setColor;
