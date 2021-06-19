import styled from 'styled-components'

type inputType ={
    border?:string
    width?:string
    height?:string
    margin?:string
    borderRadius?:string
    label?:string
    type?:string
    textAlign?:string
    placeholder?:string
    onChange?:(e:any)=>void
    id?:string
    name?:string
}

const InputComp=styled.input<inputType>`
  outline: none;
  font-size: larger;
  padding:6px;
  text-align: ${props=>props.textAlign ? props.textAlign : "center"};
  background-color: transparent;
  color: white;
  height: ${props=>props.height ? props.height : "40px"};
  border: ${props=>props.border ? props.border : "none"};
  width: ${props=>props.width ? props.width : "100%"};
  margin: ${props=>props.margin ? props.margin : "none"};
  border-radius:${props=>props.borderRadius ? props.borderRadius : "none"};
`

const Input: React.FC<inputType>=({id,
  border,
  borderRadius,
  width,
  margin,
  height,
  type,
  label,
  placeholder,
  name,
  textAlign,
  onChange})=>{
  return (
      <>
        <label htmlFor="">{label}</label>
        <InputComp 
          autoComplete="off"
          width={width}
          height={height}
          border={border}
          borderRadius={borderRadius}
          margin={margin}
          type={type}
          placeholder={placeholder}
          textAlign={textAlign}
          onChange={onChange}
          id={id}
          name={name}
        />
      </>
  )
}

export default Input