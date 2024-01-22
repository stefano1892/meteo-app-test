import { Row, Col } from 'react-bootstrap'

/*

const test = () => {
    return 42
}

const test = () => 42

*/

const LocationResultComponent = ({city}) => (
    <>
        {city ? ( <>
            <Row className='m-0 w-100'>
                <div className='location-header'>
                    <b>Posizione</b>
                </div>
            </Row>
            <Row className='m-0 w-100 mt-5'>
                <Col>
                    <div className='location-name'>
                        {city.location.name}
                    </div>
                </Col>
                <Col>
                    <div className='text-center'>
                        <img src={`${city.current.weather_icons}`} alt=""/>
                    </div>
                </Col>
            </Row>
            <Row className='m-0 w-100 mt-5'>
                <Col>
                    <div className='location-list-container'>
                        <ul className='location-list'>
                            <li>
                                Paese: {city.location.country}
                            </li>
                            <li>
                                Regione: {city.location.region}
                            </li>
                            <li>
                                Latitudine: {city.location.lat}
                            </li>
                            <li>
                                Longitudine: {city.location.lon}
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className='location-list-container'>
                        <ul className='location-list'>
                            <li>
                                Timezone: {city.location.timezone_id}
                            </li>
                            <li>
                                Data e ora: {city.location.localtime}
                            </li>
                            <li>
                                Fuso orario: {city.location.utc_offset}
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </>) : null}
    </>
    
)
 
export default LocationResultComponent;