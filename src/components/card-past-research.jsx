import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CardPastResearch = ({city, activateResearch}) => {

    const degreeSelected = useSelector((state) => state.degreeSelection.degree)

    const handleActivateResearch = () => {
        activateResearch(city)
    }

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
                <div className="card-past-container" onClick={handleActivateResearch}>
                    {/*city.location.name*/}
                    <Row className="w-100 m-0">
                        <Col>
                            <div className="past-location">
                                {city.location.name}
                            </div>
                        </Col>
                    </Row>
                    <Row className="w-100 m-0">
                        <Col>
                            Temperatura: {checkTemperature()} {checkDegreeMeter()}
                        </Col>
                    </Row>
                </div>
            </>) : null}
        </>
        
    );
}
 
export default CardPastResearch;