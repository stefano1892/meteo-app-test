import { Col, Row } from "react-bootstrap";

const FooterComponent = () => {
    return (
        <>
            <div className='w-100 mt-3 footer-containter'>
                <Row className="w-100 m-0">
                    <Col>
                        <div className="footer-links-container text-center">
                            <b className="footer-link-title">Link utili</b>
                            <div className="mt-3">
                                <a href="#" className="footer-link">Home</a>
                            </div>
                            <div>
                                <a href="#" className="footer-link">Previsioni</a>
                            </div>
                            <div>
                                <a href="#" className="footer-link">Situazione</a>
                            </div>
                            <div>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-links-container text-center">
                            <b className="footer-link-title">Novità</b>
                            <div className="mt-3">
                                <a href="#" className="footer-link">Webcam</a>
                            </div>
                            <div>
                                <a href="#" className="footer-link">News</a>
                            </div>
                            <div>
                                <a href="#" className="footer-link">Viabilità</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="footer-links-container text-center">
                            <b className="footer-link-title">Contatti</b>
                            <div className="mt-3">
                                <a href="#" className="footer-link">Contatti</a>
                            </div>
                            <div>
                                <a href="#" className="footer-link">Business</a>
                            </div>
                            <div>
                                <a href="#" className="footer-link">Lavora con noi</a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='registered-mark'>
                    © 2024 Copyright: Brandname.com
                </div>
            </div>
        </>
    );
}
 
export default FooterComponent;