import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Form, Button } from 'react-bootstrap'
import React, { useCallback, useEffect, useState } from 'react';
import { getWeather } from './api/getCityWeather';
import { useDispatch } from 'react-redux';
import { addResearch } from './store/weatherSlice';
import { changeDegree } from './store/degreeSlice';
import { ErrorBoundary} from "react-error-boundary";

import FormComponent from './components/form-component';
import ActiveResultComponent from './components/active-result-component';
import PastResearchComponent from './components/past-research-component';
import NavbarComponent from './components/navbar-component';
import FooterComponent from './components/footer-component';
import { ICity } from './interfaces/ICity';

function App() {

  const dispatch = useDispatch()

  const [city, setCity] = useState<string>('')
  const [cityResult , setCityResult] = useState<ICity>()
  const [isError, setIsError] = useState<boolean>(false) 

  const getWeatherCallback = useCallback((city: string): Promise<ICity> => {
    return getWeather(city)
      .then(data => {
        setCityResult(data)
        setIsError(false)
        return data
      })
      .catch((error) => {
        setIsError(true)
        throw error
      })
  }, [])

  useEffect(() => {
    /*const asyncFunction = async (): Promise<void> => {
      try {
        const citySelected: ICity = await getWeather('rome');
        setCityResult(citySelected);
        setIsError(false)
      } catch (error) {
        setIsError(true)
      }
    };
    asyncFunction();*/
    getWeatherCallback('rome')
  }, []);

  const errorFallbackClick = useCallback(() => {
    setIsError(false)
    setCity('');
    window.location.reload()}, [])

  const ErrorFallback = () => {
    return (
      <div className='text-center mt-5'>
        <h2>Ops! La città selezionata non esiste.</h2>
        <Button className='btn btn-primary' onClick={errorFallbackClick}>Riprova</Button>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    /*try {
      const citySelected: ICity = await getWeather(city);
      setCityResult(citySelected);
      dispatch(addResearch(citySelected));
      setCity('');
    } catch (error) {
      setIsError(true)
    }*/
    getWeatherCallback(city)
      .then(addResearch)
      .then(dispatch)
      .then(() => setCity(''))
    //   .then((citySelected) => {
    //     dispatch(addResearch(citySelected))
    //     setCity('')
    // })
  }

  const handleChangeDegree = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeDegree(e.target.value))
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} >
      <div className="App">
        <NavbarComponent />
        <Row className='m-0 w-100 mt-3'>
          <Col md={6} className='form-col'>
            <div className="d-flex">
              <FormComponent 
                handleInputChange = {handleInputChange}
                handleSubmit = {handleSubmit}
                city={city}
              />
            </div>
          </Col>
          <Col md={6}>
            <div className='degree-select-container'>
              <Form.Select className='degree-select' onChange={handleChangeDegree}>
                <option>Celsius</option>
                <option>Farenheit</option>
              </Form.Select>
            </div>
          </Col>
        </Row>
        {isError ? (
          <>
            <ErrorFallback />
          </>
        ) : (<>
          <ActiveResultComponent 
            city={cityResult}
          />
          <PastResearchComponent 
            activateResearch={setCityResult}
          />
        </>)}
        <footer>
          <FooterComponent/>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
