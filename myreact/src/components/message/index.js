import './stile.css';
export const Message=(props)=>{
 console.log(props)
   return (<h1 className="message">My {props.text} {props.react}</h1>)
}
