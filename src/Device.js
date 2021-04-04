import { OverlayTrigger, Tooltip } from 'react-bootstrap'
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
        <div>
            <div class="d-flex flex-row bd-highlight mb-1 justify-content-between device-row ml-2 mr-2">
                <div class="p-2 bd-highlight">
                    {
                        platform === 'android' ?
                            <FontAwesomeIcon icon={faAndroid} color='green' /> :
                            <FontAwesomeIcon icon={faApple} />
                    }
                </div>
                <div class="p-2 bd-highlight flex-fill">
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
                </div>
                <div class="p-2 bd-highlight">
                    {
                        busy ?
                            <div>
                                <FontAwesomeIcon icon={faMobileAlt} color='red' />
                                &nbsp;Busy
                            </div>
                            :
                            <div>
                                <FontAwesomeIcon icon={faMobileAlt} color='green' />
                                &nbsp;Free
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Device;