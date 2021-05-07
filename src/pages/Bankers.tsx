import Instances from "../components/BankersAlgo/Instances";
import Header from "../components/Utilities/Header";
import Wrapper from "../components/Utilities/Wrapper";

const Bankers = () => {
  return (
    <>
      <Header />
      <Wrapper 
      width="100vw" 
      margin="18vh 0 0 20vw" 
      column={true}
      alignItems="flex-start">
        <Instances/>
      </Wrapper>
    </>
  );
};

export default Bankers;
