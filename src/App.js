import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Row, Col, Form, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react';
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

function App() {

  const dispatch = useDispatch()

  const [city, setCity] = useState('')
  const [cityResult , setCityResult] = useState()
  const [isError, setIsError] = useState(false) 

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        const citySelected = await getWeather('rome');
        setCityResult(citySelected);
      } catch (error) {
        setIsError(true)
      }
    };
    asyncFunction();
  }, []);

  const ErrorFallback = () => {
    return (
      <div className='text-center mt-5'>
        <h2>Ops! La città selezionata non esiste.</h2>
        <Button className='btn btn-primary' onClick={() => {
          setIsError(false)
          setCity('');
          window.location.reload()}}>Riprova</Button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const citySelected = await getWeather(city);
      setCityResult(citySelected);
      dispatch(addResearch(citySelected));
      setCity('');
    } catch (error) {
      setIsError(true)
    }
  }

  const activateResearch = (city) => {
    setCityResult(city)
  }

  const handleChangeDegree = (e) => {
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
            activateResearch={activateResearch}
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
