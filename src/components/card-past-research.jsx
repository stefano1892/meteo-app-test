import { Col, Row } from "react-bootstrap";
import { useTemperature } from '../hooks/useTemperature';

const CardPastResearch = ({city, activateResearch}) => {
    const handleActivateResearch = () => {
        activateResearch(city)
    }

    const temperature = useTemperature(city)

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
                            Temperatura: {temperature}
                        </Col>
                    </Row>
                </div>
            </>) : null}
        </>
        
    );
}
 
export default CardPastResearch;