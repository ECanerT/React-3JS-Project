import { useState,useEffect } from "react";
import { Col,ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import FormRange from "react-bootstrap/esm/FormRange";
import { SliderPicker, SketchPicker} from "react-color"
import Box from "./Box";



function Categories() {

    const [boxcolor,setBoxcolor] = useState("blue");
    const [boxsize,setBoxsize] = useState(2.5);
    const {colorpicker,setColorpicker} = useState("#fff");
    // const forInput= (color)=>{
    //   setColorpicker(color.hex)
    // }

  return (
    <div className="boxchoice">
        <Row>
      <Col sm="3" xl="4">
        <ListGroup className="boxchoicelist">
          <ListGroupItem className="boxchoicelist" style={{color:'white',backgroundColor:'blue'}} action onClick={()=>setBoxcolor("blue")}> Mavi </ListGroupItem>
          <ListGroupItem className="boxchoicelist" style={{color:'white',backgroundColor:'red'}} action onClick={()=>setBoxcolor("red")}> Kırmızı </ListGroupItem>
          <ListGroupItem className="boxchoicelist" style={{color:'white',backgroundColor:'green'}} action onClick={()=>setBoxcolor("green")}> Yeşil </ListGroupItem>
          <ListGroupItem className="boxchoicelist" style={{color:'gray',backgroundColor:'yellow'}} action onClick={()=>setBoxcolor("yellow")}> Sarı </ListGroupItem>
          <ListGroupItem className="boxchoicelist"> <SliderPicker color={ boxcolor } onChangeComplete={ forInput=> setBoxcolor(forInput.hex) }/> 
            <h5 style={{margin:'20px',fontWeight:'bolder'}}>Renk Seç!</h5> </ListGroupItem>  {/*<SketchPicker color={ boxcolor } onChangeComplete={ forInput=> setBoxcolor(forInput.hex) }/> */}
            <ListGroupItem className="boxchoicelist"> <FormRange type="range" min={0.1} step={0.1} max={5} value={boxsize} onChange={sizeChange=>setBoxsize(sizeChange.target.value)}/>
            <h5 style={{margin:'15px',fontWeight:'bolder'}}>Boyut Seç! </h5>   </ListGroupItem>
        </ListGroup>
      </Col> {console.log("boxsize: "+boxsize)}
      <Col sm="9" xl="8" className="bg-ligh border">
        <Box color={boxcolor} size= {boxsize} />
        <Box color={boxcolor} />
      </Col></Row>
    </div>
  );
}

export default Categories;
