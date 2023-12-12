import React from "react";


export default class TodoItem extends React.Component{
    constructor(){
        super()
    }

    render(){
        console.log("props:", this.props)
        let {e,i,deleteItem,updateItem,buttonStyle} = this.props;
        return (<div key={i}>
            <input type="text" onChange={(event)=>{
              updateItem(event.target.value , i);
            }} value={e} />
            <button style={buttonStyle} onClick={(i)=>{
              deleteItem(i);
            }}>DELETE</button>
            </div>)
    }
}