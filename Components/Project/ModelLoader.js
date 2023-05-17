import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import {ListGroup,ListGroupItem} from 'react-bootstrap'
import FormRange from 'react-bootstrap/esm/FormRange.js';
import {SliderPicker} from 'react-color'
import Face from './Face.js';
import './ModelLoader.css';



export default function ModelLoader(props) {
  const [skinColor,setSkinColor] = useState('#E7B493');
  const [eyeColor,setEyeColor]=useState('dodgerblue');
  const [hairColor,setHairColor]=useState('rgb(75, 62, 62)')
  const [position,setPosition]= useState({x:0.80,y:0.55,z:1})
  const [positionx,setPositionx]= useState(0.30);
  const [positiony,setPositiony]= useState(0.55);
  const [positionz,setPositionz]= useState(0.75);

  return (
    <div className="modelLoad">
      <div className='Modelbox' style={{float:'left'}}>
      <Canvas className='canvas' style={{ height:'600px',width:'1000px',background: "#171717" }}>
        <Suspense fallback={null}>
            <OrbitControls/>
        <ambientLight intensity={0.35}/>
        <pointLight intensity={0.8} position={[0, 10, 10]}/>
          <Face
          hairColor={hairColor} 
          skinColor={skinColor} 
          eyeColor={eyeColor} 
          position={position}
          positionx={positionx}
          positiony={positiony}
          positionz={positionz}
          action={props.action}
          setAction={props.setAction}
          />
        </Suspense>
      </Canvas>
      </div>

      {/* --------------------------------------------OPTION BOXES------------------------------------------------ */}
    
    <div className='modelOptions' style={{float:'right',margin:'10px 10px',height:'575px',backgroundColor:'#f6f9ff',borderRadius:'5%'}}>

        <div className='colorOptions' style={{marginLeft:'0%'}}>
            <div className='eyeColorPicker' style={{width:'200px', float:'left', margin:'2% 20px',border:'1px solid'}}>
                <p style={{marginTop:'2%',backgroundColor:'Highlight'}}>
                  Ten Rengi
                </p>
                <SliderPicker color={ skinColor } onChangeComplete={ forInput=> setSkinColor(forInput.hex) }/>
            </div>
            <div className='eyeColorPicker' style={{width:'200px', float:'left', margin:'2% 20px',border:'1px solid'}}>
                <p style={{marginTop:'2%',backgroundColor:'Highlight'}}>
                  Göz Rengi
                </p>
                <SliderPicker color={ eyeColor } onChangeComplete={ forInput=> setEyeColor(forInput.hex) }/>
            </div>
          
            {/* <div>
              <button onClick={setSkinColor('#E7B49333')}></button>
            </div> */}
        </div>
        
        <div className='positionOptions' style={{margin:'8%'}}>
              {/* <FormRange type="range" min={-5} step={0.1} max={5} value={position.x} onChange={a=>setPosition({x:a.target.value})}/>
              <FormRange type="range" min={-5} step={0.1} max={5} value={position.y} onChange={b=>setPosition({y:b.target.value})}/>
              <FormRange type="range" min={-5} step={0.1} max={5} value={position.z} onChange={c=>setPosition({z:c.target.value})}/> */}
            <div className='positionZ' style={{float:'right'}}>
                <FormRange type="range" min={-7} step={0.1} max={5} value={positionz} onChange={e=>setPositionz(e.target.value)}/>
                <p style={{fontSize:'15px',textAlign:'center',borderTop:'1px solid white',color:'#282c34'}}>
                  Z : {positionz}
                </p>
            </div>
        
            <div className='positionY' style={{float:'right',textAlign:'center',borderRight:'0.1px solid gray'}}>
                <FormRange type="range" min={-3} step={0.05} max={3} value={positiony} onChange={e=>setPositiony(e.target.value)}/>
                <p style={{fontSize:'15px',borderTop:'1px solid white',color:'#282c34'}}> 
                  Y : {positiony}
                </p>
            </div>

            <div className='positionX' style={{float:'right',textAlign:'center',borderRight:'0.1px solid gray'}}>
                <FormRange type="range" min={-7} step={0.1} max={7} value={positionx} onChange={e=>setPositionx(e.target.value)}/>
                <p style={{fontSize:'15px',borderTop:'1px solid white',color:'#282c34'}}>
                  X : {positionx}
                </p>
            </div>

        
        </div>
        <div className='hairColorPicker' style={{width:'200px', float:'left', margin:'2% 20px',border:'1px solid'}}>
                <p style={{marginTop:'2%',backgroundColor:'Highlight'}}>
                  Saç Rengi
                </p>
                <SliderPicker color={ hairColor } onChangeComplete={ forInput=> setHairColor(forInput.hex) }/>
            </div>

    </div>



    </div>
  )
}