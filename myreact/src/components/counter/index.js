
import { useState } from "react";
import { useEffect } from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// export const Counter = () => {
//     let test = 2
//     const [count, setCount] = useState(test);
//     const updateCount = () => {
//         setCount((revCoun) => revCoun + 1);  
//       }
//     return (
//         <div>
//             <h1>{count}</h1>

//             <button className="counter-button" onClick={updateCount}>+1</button>
//         </div>
//     )
// }
export function Count({ onSubmit }) {

  const [value, setValue] = useState({});
  const [counter, setCounter]=useState(0)

  useEffect(() => {

  }, [counter])

  const handleChange = (event) => {

    setValue({
      id:counter,
      autor:"user",
    post:event.target.value})
    console.log(value)

  };
   const  handlesubmit=(event)=>{
    event.preventDefault()
        setCounter((revcounter=>revcounter+Date.now()));
    onSubmit(value)

   }

  return (
    
<form onSubmit={handlesubmit} >
  <TextField size="small" className="button" label="Outlined" variant="outlined"  
    onChange={handleChange} />
     <Button variant="contained" type="submit">отправить</Button>
</form>
  );
};






export function Btn(props) {
  console.log("btn", props)
  const [value, setValue] = useState({
    as: "атор",
    d: "сообщение"
  });
  const HBZ = () => props.onClick(value);


  return (
    <button onClick={HBZ}>click</button>
  );


}
