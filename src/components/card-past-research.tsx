import { Col, Row } from "react-bootstrap";
import { useTemperature } from '../hooks/useTemperature';
import { ICity } from "../interfaces/ICity";

interface CardPastResearchProps {
    city?: ICity,
    activateResearch?: (city: ICity) => void  
} 

const CardPastResearch = ({city, activateResearch}: CardPastResearchProps) => {
    const temperature = useTemperature(city)

    return (
        <>
            {city ? (<>
                <div className="card-past-container" onClick={() => activateResearch?.(city)}>
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