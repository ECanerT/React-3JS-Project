import './Project.css';
import {useState} from 'react'
import Alphabet from './Project/Alphabet';
import ModelLoader from './Project/ModelLoader.js'
import SpeechtoText from './Project/SpeechtoText';

function Project() {
  const [action,setAction] = useState("Base");
  return (
    <div className="Project">
      <p style={{textAlign:'center',fontWeight:'bolder', fontSize:'22px', backgroundColor:'#282c34',color:'white'}}> DUDAK OKUMA PROJESİ</p>
      <header className="App-header">
        <div className='appModel' style={{float:'right'}}>
         <div className='appAlphabet' style={{float:'left'}}>
          <Alphabet
          action={action} 
          setAction={setAction}/>
        </div>
         <ModelLoader 
         action={action} 
         setAction={setAction}>
         </ModelLoader>
        </div>
        <div className='appSpeech' style={{float:'left'}} >
          <SpeechtoText/>
        </div>
      </header>
    </div>
  );
}

export default Project;
