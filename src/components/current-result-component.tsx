import React, { useMemo } from 'react';

import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { ICity } from '../interfaces/ICity';
import {AppSelector} from '../store/store';

interface CurrentResultComponentProps {
    city?: ICity
}

const CurrentResultComponent = ({city}: CurrentResultComponentProps) => {

    const degreeSelected = useSelector<AppSelector>((state) => state.degreeSelection.degree)

    const temperature = useMemo(() => {
        if(!city) return ''

        return degreeSelected === 'Celsius' ? `${city.current.temperature}°C` : `${city.current.temperature + 32}°F`
    }, [degreeSelected, city])

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
                                Temperatura: {temperature}
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