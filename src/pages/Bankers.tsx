import InputTable from "../components/BankersAlgo/InputTable";
import OutPutTable from "../components/BankersAlgo/OutPutTable";
import Header from "../components/Utilities/Header";
import Wrapper from "../components/Utilities/Wrapper";
import StateProvider from '../GlobalState/Bankers/Index'

const Bankers = () => {
  return (
    <StateProvider>
      <Header />
      <Wrapper  width="100vw" margin="18vh 0 0 20vw" column={true} alignItems="flex-start">
        <InputTable/>
        <OutPutTable/>
      </Wrapper>
    </StateProvider>
  );
};

export default Bankers;
