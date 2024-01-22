import React, { useMemo } from 'react';
import { Row, Col } from 'react-bootstrap';
import LocationResultComponent from './location-result-component';
import CurrentResultComponent from './current-result-component';
import { ICity } from '../interfaces/ICity';

interface ActiveResultComponentProps {
    city?: ICity
}

const imagesLocations: Record<string, string> = {
    milan: require('../img/milano.jpg'),
    dubai: require('../img/dubai.jpg'),
    london: require('../img/londra.jpeg'),
    'new york': require('../img/newyork.jpg'),
    rome: require('../img/colosseo.jpg')
}

const ActiveResultComponent = ({ city }: ActiveResultComponentProps) => {

    const imgLocation = useMemo(() => {
        const location = city?.location?.name?.toLowerCase();
        return location ? imagesLocations[location] || null : null
    }, [city])

    return (
        <>
            {imgLocation && <div className='image-container mt-5'><img className='image-component' alt="" src={imgLocation} /></div>}

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
