import styled from "styled-components";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

const Head = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6vh;
`;

const Header = () => {
  const style = {
    color: "white",
    marginRight: "10px",
    marginLeft: "10px",
  };
  
  let headerName = window.location.pathname;
  
  return (
    <Head>
      <Wrapper alignItems="center" justifyContent="">  
        <Link to="/" style={style}>
          <i className="fas fa-arrow-left fa-lg"></i>
        </Link>
        <h2>{headerName.replace("/", " ")}</h2>
      </Wrapper>
      <hr/>
    </Head>
  );
};

export default Header;
