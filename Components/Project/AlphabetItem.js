import React,{useState} from 'react'
import Face from './Face';

function AlphabetItem(props) {
    
    function letterClick(){
        props.text.set(props.item)
        props.setAction(props.item+"Sound")
    }
    return(
        <div>

    <button 
    onClick={()=>{letterClick()}}  className='alphabet-A'> 

    {props.item}
    {/* {console.log(action)} */}
    </button>
    
        </div>
    
    );
  
}

export default AlphabetItem