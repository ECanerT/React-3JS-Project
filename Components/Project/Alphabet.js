import React,{useState,useEffect} from 'react'
import {useSpeechSynthesis} from 'react-speech-kit'
import './Alphabet.css'
import AlphabetItem from './AlphabetItem';

function Alphabet(props) {

    const {speak}= useSpeechSynthesis();
    const letters=[
        'A','B','C','Ç','D','E','F','G','H','I','İ','J','K','L','M','N','O','Ö','P','R','S','Ş','T','U','Ü','V','Y','Z'
    ];
    const [value,setValue] = useState("");

    useEffect(()=>{
        if(value!=='')
        {setTimeout(()=>speak({text:value}),400) 
        console.log(value[0][0])
        }
    },[value]);

  return (
    <div className='Alphabet'>
        
        <div className='abc-area'>
        {letters.map((item,i)=>(
            <AlphabetItem action={props.action} setAction={props.setAction} text={{text:value,set:setValue}} key={i} item={item}/>
        ))}
        </div>
        
    </div>
  )
}

export default Alphabet