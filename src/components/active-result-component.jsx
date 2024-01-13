import { Row, Col } from 'react-bootstrap';
import LocationResultComponent from './location-result-component';
import CurrentResultComponent from './current-result-component';

const ActiveResultComponent = ({ city }) => {

    const imgLocation = () => {
        if (!city || !city.location || !city.location.name) {
            return null;
        }
        const location = city.location.name.toLowerCase();
        switch (location) {
            case 'milan':
                return require('../img/milano.jpg');
            case 'dubai':
                return require('../img/dubai.jpg');
            case 'london':
                return require('../img/londra.jpeg');
            case 'new york':
                return require('../img/newyork.jpg');
            case 'rome':
                return require('../img/colosseo.jpg');
            default:
                return null;
        }
    };

    return (
        <>
            {imgLocation() && <div className='image-container mt-5'><img className='image-component' alt="" src={imgLocation()} /></div>}

            <div className='active-result-container'>
                <Row className='m-0 w-100'>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className='main-container'>
                            <LocationResultComponent 
                                city={city}
                            />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className='main-container responsive-item'>
                            <CurrentResultComponent 
                                city={city}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
            
        </>
    );
}
 
export default ActiveResultComponent;
