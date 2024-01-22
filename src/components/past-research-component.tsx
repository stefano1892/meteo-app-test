import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import CardPastResearch from "./card-past-research";
import { useSelector } from "react-redux";
import { AppSelector } from "../store/store";
import { ICity } from "../interfaces/ICity";

const PastResearchComponent = ({activateResearch}) => {

    const allCities = useSelector<AppSelector, ICity[]>((state) => state.pastResearch.searches)

    const mappedCities = useMemo(() => {
        const reversedCities = [...allCities].reverse()
        return reversedCities.map((city) => (
            <Col xs={12} sm={12} md={12} lg={2} xl={2} key={city.location.name}>
                <div className="past-search-col">
                    <CardPastResearch city={city} activateResearch={activateResearch}/>
                </div>
            </Col>
        ))
    }, [allCities])

    //const reversedCities = [...allCities].reverse();
 
    return (
        <>
            {mappedCities.length !== 0 ? (<>
                <div className="my-3 mx-3">
                    <h3>Ricerche passate</h3>
                    <Row className="w-100 m-0">
                        {mappedCities}
                    </Row>
                </div>
            </>) : null}
        </>
    );
}

export default PastResearchComponent;