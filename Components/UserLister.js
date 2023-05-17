import React, {Component} from "react"
import UserList from "./Users/UserList"
import {Container, Row} from "reactstrap"
import UserHeader from "./Users/UserHeader"

class UserLister extends Component {

    render() {

    return (
        <div>
            <Container>
                <Row><UserHeader /></Row>
                <Row><UserList/></Row>
            </Container>
            
            
        </div>
        
    )

    }

}

export default UserLister;