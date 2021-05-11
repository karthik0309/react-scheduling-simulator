import InputTable from "../components/BankersAlgo/InputTable";
import OutPutTable from "../components/BankersAlgo/OutPutTable";
import Header from "../components/Utilities/Header";
import Modal from "../components/Utilities/Modal";
import Wrapper from "../components/Utilities/Wrapper";
import StateProvider from '../GlobalState/Bankers/Index'
import {BankersMssg} from '../constants/constants'

const Heading="Bankers Algorithm"

const Bankers = () => {
  return (
    <StateProvider>
      <Header />
      <Modal heading={Heading} message={BankersMssg} margin="0 0 0 20vw"/>
      <Wrapper  width="100vw" 
      margin="18vh 0 0 20vw" 
      column={true} 
      alignItems="flex-start"
      mediaMargin="18vh 0 0 8vw"
      >
        <InputTable/>
        <OutPutTable/>
      </Wrapper>
    </StateProvider>
  );
};

export default Bankers;
