import { Row, Col, Container, OverlayTrigger, Tooltip } from 'react-bootstrap'
import './Device.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'

const Device = ({ device }) => {
    const {
        platform, name, udid, busy
    } = device
    return (
        <Container className="device-container">
            <Row className="device-row d-flex justify-content-between">
                <Col>
                    {
                        platform === 'android' ?
                            <FontAwesomeIcon icon={faAndroid} color='green' /> :
                            <FontAwesomeIcon icon={faApple} />
                    }
                </Col>
                <Col>
                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>
                                {udid}
                            </Tooltip>
                        }>
                        <div>
                            {name ? name : udid}
                        </div>
                    </OverlayTrigger>
                </Col>
                <Col>
                    {
                        busy ? <FontAwesomeIcon icon={faMobileAlt} color='red' /> :
                            <FontAwesomeIcon icon={faMobileAlt} color='green' />
                    }
                </Col>
            </Row>
        </Container >
    )
}

export default Device;