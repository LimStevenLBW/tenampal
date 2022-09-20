import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MenuItem from '../components/MenuItem'

function Menu() {
    return (
        <>
            <Container fluid className="Menu-Banner">
                <div className="Menu">
                    <div className="Menu-Shadow">
                        <h3>HANDHELDS</h3>
                        <Row>
                            <Col md={6} className="">
                                <MenuItem
                                    itemName={"*SMASHBURGER*"}
                                    description={"cheddar.pickles carmelized onion.iceberg burnt onion spread papas"}
                                    price={10}
                                />
                            </Col>
                            <Col md={6} className="">
                                <MenuItem
                                    itemName={"*TORTA DE LENGUA FRITA*"}
                                    description={"verdolaga	roasted xitomate.birote papas"}
                                    price={14}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} className="">
                                <MenuItem
                                    itemName={"*BREAKFAST BURRITO*"}
                                    description={"chorizo con huevo	roasted bell peppers frijol refrito.oaxaca"}
                                    price={11}
                                />
                            </Col>
                            <Col md={6} className="">
                                <MenuItem
                                    itemName={"*BURRITO DE REZ*"}
                                    description={"roasted bell peppers poblano frijol refrito"}
                                    price={12}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} className="">
                                <MenuItem
                                    itemName={"*TACOS DORADOS*"}
                                    description={"pollo.aguamole.queso fresco ensalada de repollo"}
                                    price={10}
                                />
                            </Col>
                            <Col md={6} className="">
                                <MenuItem
                                    itemName={"*EGG & HAM SANDWICH*"}
                                    description={"serrano.roasted xitomate gruyere papas"}
                                    price={10}
                                />
                            </Col>
                        </Row>

                        <h3>SPOON, FORK, & KNIFE</h3>

                        <Row>
                            <Col md={6} className="">
                                <MenuItem
                                    itemName={" *CHILAQUILLES*"}
                                    description={"verdes.xitomate.mole huevo.crema.cotija"}
                                    price={12}
                                />
                            </Col>

                            <Col md={6} className="">
                                <MenuItem
                                    itemName={"*HUARACHES*"}
                                    description={"rez tiernito.frijol refrito xitomate.oaxaca"}
                                    price={12}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} className="">
                                <MenuItem
                                    itemName={"*HUEVOS RANCHEROS*"}
                                    description={"salsa de pimiento bravo frijoles refritos.papas"}
                                    price={10}
                                />
                            </Col>


                            <Col md={6} className="">
                                <MenuItem
                                    itemName={"*CHORIZO con PAPAS*"}
                                    description={"bell peppers.cebolla carmelizada poblano lime crema.eggs"}
                                    price={12}
                                />

                            </Col>
                        </Row>

                        <Row>
                            <Col md={6} className="">
                                <MenuItem
                                    itemName={"*CARNE con PAPAS*"}
                                    description={"poblano.carrot tatemada roasted xitomate eggs"}
                                    price={13}
                                />
                            </Col>

                            <Col md={6} className="">
                                <MenuItem
                                    itemName={"*ENCHILADAS de POLLO*"}
                                    description={" verdes.guajillo.mole crema.tres quesos arroz.frijol"}
                                    price={15}
                                />
                            </Col>
                        </Row>
                        *most items can be made vegetarian.
                        *TENAMPAL prides itself in being a scratch kitchen.
                    </div>
                </div >

            </Container>
            <div className="App-Flags" />
        </>
    );
}

export default Menu;
