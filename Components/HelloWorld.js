import React, { Component } from 'react'

export class HelloWorld extends Component {
  render() {
    return (
      <div className='HelloWorld'>
        <h1 className='HelloWorldText' style={{paddingTop:'15%',textAlign:'center'}}>
        Hello World! 
        <h6 className='HelloWorldText' style={{fontSize:'xx-small',paddingTop:'3%',textAlign:'center '}}> I am Caner Taşkın </h6>
        </h1>
        
        </div>
    )
  }
}

export default HelloWorld