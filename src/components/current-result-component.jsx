import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const CurrentResultComponent = ({city}) => {

    const degreeSelected = useSelector((state) => state.degreeSelection.degree)

    const checkDegreeMeter = () => {
        if(degreeSelected === 'Celsius') {
            return '°C'
        } else {
            return '°F'
        }
    }

    const checkTemperature = () => {
        if(degreeSelected === 'Celsius') {
            return city.current.temperature
        } else {
            const temperatureToInt = parseInt(city.current.temperature)
            const newTemperature = temperatureToInt+32
            return newTemperature
        }
    }

    return (
        <>
        {city ? (<>
            <Row className='m-0 w-100'>
                <div className='location-header'>
                    <b>Situazione metereologica</b>
                </div>
            </Row>
            <Row className='m-0 w-100 mt-5'>
                <Col>
                    <div className='location-list-container'>
                        <ul className='location-list'>
                            <li>
                                Ora attuale: {city.current.observation_time}
                            </li>
                            <li>
                                Temperatura: {checkTemperature()} {checkDegreeMeter()}
                            </li>
                            <li>
                                Velocità vento: {city.current.wind_speed}
                            </li>
                            <li>
                                Direzione del vento: {city.current.wind_dir}
                            </li>
                            <li>
                                Pressione: {city.current.pressure}
                            </li>
                            <li>
                                Precipitazioni: {city.current.precip}
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className='location-list-container'>
                        <ul className='location-list'>
                            <li>
                                Umidità: {city.current.humidity}
                            </li>
                            <li>
                                Nuvolosità: {city.current.cloudcover}
                            </li>
                            <li>
                                Temp. Percepita: {city.current.feelslike}
                            </li>
                            <li>
                                Visibilità: {city.current.visibility}
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
            </>) : null}
        </>
    );
}
 
export default CurrentResultComponent;