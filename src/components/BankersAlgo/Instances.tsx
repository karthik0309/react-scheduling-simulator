import Input from '../Utilities/Input'
import Wrapper from '../Utilities/Wrapper'
const initialValues={
    A:0,
    B:0,
    C:0
}

const Instances = () => {
    return (
        <Wrapper >
            {Object.keys(initialValues).map((ele,index)=>(
                <div key={index}>
                    <label htmlFor="">Instance {ele}:</label>
                    <Input
                    type="number"
                    width="50px"
                    height="30px"
                    border="1px solid white"
                    borderRadius="20px"
                    margin="10px"
                    />
                    
                </div>
            ))}
        </Wrapper>
    )
}

export default Instances
