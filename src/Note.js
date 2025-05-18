import React  from "react";
import "./style1.css";

function Note(props){
    function handleClick(){
        props.onDelete(props.id)
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <h2>{props.content}</h2>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
}

export default Note;