import map from './media/map.png';
import building from './media/building.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hours from './components/Hours';
import Gallery from './components/Gallery';
import NavBarDesign from './components/NavBarDesign';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <NavBarDesign />

        <Container fluid>
          <Row className="App-Banner">
            <Col sm={3}></Col>
            <Col sm={6} className="App-Center-Statement">
              <h1>
                Grand Opening in Boyle Heights
              </h1>

              <h2>
                <a className="App-Banner-Link" href="#home">See Our Menu</a>
              </h2>
            </Col>
            <Col sm={3}></Col>
          </Row>
        </Container>

        <div className="App-Flags" />

        <div className="App-About">
          <div>
            <h5 className="App-About-Heading">Lorem Ipsum Eternum</h5>
            <p className="App-About-Text"> lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse.
              Videsne quam sit magna dissensio? Duo Reges: constructio interrete. Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim.
              Illa argumenta propria videamus, cur omnia sint paria peccata.</p>

            <p className="App-About-Text"> lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse.
              Videsne quam sit magna dissensio? Duo Reges: constructio interrete. Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim.
              Illa argumenta propria videamus, cur omnia sint paria peccata.</p>

          </div>
        </div>

        <Container fluid>
          <Row className="App-Restaurant-Attributes">
            <Col sm={4}>
              No Masks Required
            </Col>

            <Col sm={4}>
              Outdoor Seating
            </Col>
            <Col sm={4}>
              Takeout Available
            </Col>
            <Col sm={4}>
              Credit Card Accepted
            </Col>

            <Col sm={4}>
              Free Wifi
            </Col>
            <Col sm={4}>
              Catering Available
            </Col>
          </Row>


          <Gallery />

          <Row className="App-Location">
            <Col>
              <Hours />
            </Col>

            <Col>
              <img src={building} className="App-Col" alt="building" />
            </Col>

            <Col>
              <img src={map} className="App-Col" alt="map" />
              <div className="App-Map-Caption">Map sourced from Google ©2022</div>
            </Col>
          </Row>

        </Container>
      </>

    </div >
  );
}

export default App;
