import './stile.css';

export const Message=(props)=>{

   return (<h1 key={props.teext.id} className="message">autor:{props.teext.autor} post: {props.teext.post} </h1>)
}

