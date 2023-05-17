import React, {useState} from 'react'
import {useSpeechSynthesis} from 'react-speech-kit'
import './SpeechtoText.css'

function SpeechtoText() {

  const {speak}= useSpeechSynthesis();

  const [value,setValue] = useState("");

  return (
    <div>
      <div className='speech-textarea' style={{margin:'15px 0px'}}>

        <textarea rows={10} value={value} onChange={(e)=> setValue(e.target.value) } className='' style={{width:'1200px',height:'75px',fontSize:'22px', 
        backgroundColor:'rgb(245, 242, 218)',border:'5px inset purple'}}></textarea>
      </div>
        <div className='speech-button'>
        <button className='speech-to-button' onClick={()=>speak({text:value})}
        style={{ margin:'0px 20px',width:'180px', height:'60px',borderRadius:'15%',
                 backgroundColor:'red',color:'white',fontSize:'18px' }}> YAZIYI ÇEVİR </button>
      </div>

    </div>
  )
}

export default SpeechtoText