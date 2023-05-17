import React from "react";
import {
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarText,
  NavLink,
  Collapse,
  NavbarToggler,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  Popover,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <Button id="giris" type="button" color="danger">
          Giriş
        </Button>
        <UncontrolledPopover placement="bottom" target="giris" trigger="focus">
          <PopoverHeader>Giriş Şartı</PopoverHeader>
          <PopoverBody>
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="E-Posta"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="Şifre"
                      type="password"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </PopoverBody>
        </UncontrolledPopover>
        <Button id="kayit" type="button" color="warning">
          Kayıt Ol
        </Button>
        <UncontrolledPopover placement="bottom" target="kayit" trigger="focus">
          <PopoverHeader>Kayıt Şartı</PopoverHeader>
          <PopoverBody>
            Asla geçmişte yaşama ama daima geçmişten ders al! Acı, acıyla
            iyileşir. Aşk ise daha büyük bir aşkla. Üzülme herkes ölür kimi
            toprağa gömülür, kimi yüreğe. Dost acı söyleyen değildir. Acıyı
            tatlı söyleyebilendir. Dürüstlük pahalı bir mülktür. Ucuz insanlarda
            bulunmaz. Dua kapı çalmaktır. Gerisine karışmak haddi aşmaktır.
            Üzülme cancağızım. Her bir yaradan haberdardır Yaradan. Kalp deniz,
            dil kıyıdır. Denizde ne varsa kıyıya o vurur. Güzeli güzel yapan
            ‘edep’tir, edep ise güzeli sevmeye sebeptir. İşin başında sonunu gör
            de ceza gününde pişman olma. -Mevlana
          </PopoverBody>
        </UncontrolledPopover>
        <Button color="success" onClick={function noRefCheck() {}}>
          --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </Button>
        <div>
          <Navbar color="success" dark expand="md" fixed="bottom">
            <NavbarBrand href="/">Zeytinyağlılar Mutfağı</NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="#">Sitemiz</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.youtube.com/c/Do%C3%A7DrDursunAkaslan">
                    Youtube
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown inNavbar nav>
                  <DropdownToggle caret nav>
                    Seçenekler
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Pilav</DropdownItem>
                    <DropdownItem>Sarma</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Diğer</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                {/* <Form inNavbar nav>
                    <Row>
                        <Col>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
                    </FormGroup>
                    </Col>
                    <Col><FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                      />
                    </FormGroup></Col>
                    </Row>
                  </Form> */}
              </Nav>
              <NavbarText>Hakkımızda</NavbarText>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
