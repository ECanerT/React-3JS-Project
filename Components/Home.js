import React from 'react'
import { Card, CardImg, Carousel, CarouselItem, Col, Container, ListGroup,ListGroupItem, Row } from 'react-bootstrap'
import Courses from './stajcourse.json'
import img1 from './img/blender2.JPG'
import img2 from './img/blender4.JPG'
import img3 from './img/blenderbone.JPG'
import img4 from './img/blender5.JPG'

function Home() {
  return (
    <div className='Home'>

        <Card>
            <CardImg src=''>
                
            </CardImg>
        </Card>
        <Container style={{marginTop:'20px'}}>
        <Carousel className='border' style={{marginTop:'20px'}} variant='dark'>
            <CarouselItem >
            <img
          className="d-block w-100"
          src={img1}
          alt="First slide"/>
          <Carousel.Caption style={{ backgroundColor:'rgba(255, 255, 255, 0.5)',borderRadius:'35%'}}>
            <h3>Blender Yüz Modeli</h3>
          <p>Blender kullanılarak projede kullanılacak yüz modellendi. Yüzü modellemek için Blender'ın Sculptor modu kullanıldı.</p>
          </Carousel.Caption>
            </CarouselItem>
            
          <CarouselItem>
            <img
          className="d-block w-100"
          src={img2}
          alt="First slide"/>
          <Carousel.Caption style={{ backgroundColor:'rgba(255, 255, 255, 0.5)',borderRadius:'35%'}}>
            <h3>Blender Yüz Doku Kaplama</h3>
          <p>Blender ile modellenmiş yüz modelinin doku kaplamaları eklenerek bir materyal oluşturuldu ve yüze renk verildi. 
            Bu sayede React üzerinden yüzün rengini belirleyebiliyoruz.</p>
          </Carousel.Caption>
            </CarouselItem>
            <CarouselItem >
            <img
          className="d-block w-100"
          src={img3}
          alt="First slide"/>
          <Carousel.Caption style={{ backgroundColor:'rgba(255, 255, 255, 0.5)',borderRadius:'35%'}}>
            <h3>Blender Yüz Rig'i</h3>
          <p>Ağız hareketlerini yapmak için Yüz modeline Rig eklemek gerekir. Rig Eklemek için blender'dan ağız bölgesine kemikler eklendi.
            Keyframe'ler de eklenerek ağız hareketleri için temel oluşturuldu.
          </p>
          </Carousel.Caption>
            </CarouselItem>
            <CarouselItem >
            <img
          className="d-block w-100"
          src={img4}
          alt="First slide"/>
          <Carousel.Caption style={{ backgroundColor:'rgba(255, 255, 255, 0.5)',borderRadius:'35%'}}>
            <h3>Blender Yüz Son hali</h3>
          <p>Blender'da oluşturulmuş Yüz modeline saç ve tıpkı yüzdeki gibi saça da doku eklendi.</p>
          </Carousel.Caption>
            </CarouselItem>  
          
        </Carousel>
        
        <h1 style={{marginBottom:'20px',fontWeight:'bolder'}}>Emin Caner Taşkın</h1>
        <h5 style={{fontStyle:'italic'}}> React JS ile yazdığım ve yaptığım projeleri tuttuğum Sayfama Hoşgeldiniz!</h5>

        <h2 style={{margin:'50px',fontWeight:'bold',textAlign:'left'}}>Projeler ve Çalışmalar:</h2>
        <Row>
          <Col>
          <ListGroup>
            {Courses.courses.map(course=>(
              <div id="divc" className="stajCourse" key={course.id}>
                <ListGroupItem action href={course.link}>
                  <Col xs='3'><h5>{course.day} :</h5></Col>
                  <Col ><h4>{course.title}</h4></Col>
                  <h6 style={{fontStyle:'italic',fontWeight:'lighter'}}> {course.topic}</h6>
                </ListGroupItem>
              </div> ))}
          </ListGroup>
          </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Home