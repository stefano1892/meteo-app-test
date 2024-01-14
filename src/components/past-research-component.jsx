import { Col, Row } from "react-bootstrap";
import CardPastResearch from "./card-past-research";
import { useSelector } from "react-redux";

const PastResearchComponent = ({activateResearch}) => {

    const allCities = useSelector((state) => state.pastResearch.searches)
    const reversedCities = [...allCities].reverse();
 
    return (
        <>
            {reversedCities.length !== 0 ? (<>
                <div className="my-3 mx-3">
                    <h3>Ricerche passate</h3>
                    <Row className="w-100 m-0">
                        {reversedCities.map((city, index) => (
                            <Col xs={12} sm={12} md={12} lg={2} xl={2} key={index}>
                                <div className="past-search-col">
                                    <CardPastResearch city={city} activateResearch={activateResearch}/>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </>) : null}
        </>
    );
}

export default PastResearchComponent;