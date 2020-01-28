import React,{useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { NavLink } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import './sidebarMenu.css';
import { ReactComponent as HamMenu } from '../../assets/img/hamburger.svg'
import { ReactComponent as OutIcon } from '../../assets/img/log-out.svg'
import { ReactComponent as SatIcon } from '../../assets/img/lightIcons/satelite.svg'
import { ReactComponent as TerrIcon } from '../../assets/img/lightIcons/terrain.svg'
import { ReactComponent as CarIcon } from '../../assets/img/lightIcons/light-car.svg'
import { ReactComponent as MapIcon } from '../../assets/img/darkIcons/savedroute.svg'
import { ReactComponent as SettingsIcon } from '../../assets/img/lightIcons/settings (1).svg'
import { logout } from '../../store/actions/'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Vehicles from "../vehicleForm/Vehicles"


const SidebarMenu = (props) => {
    const [show,setShow] = useState({ on:false,
      });  

    const toggle = () =>{
        setShow({
            on:!show.on
        })
    }

    console.log("side bar menu",props)
    return (
        <>
        <div className="toggle-parent">
            {show.on && 
                <Vehicles show={show}/>
            }
        </div>
        <Dropdown as={ButtonGroup} className='dropdown'>

            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className="hamcolor">
                <div className='hamend'>RV WAY </div>
                <HamMenu className='hammenu' />
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropdownmenu'>
                {/* <div className='dropdownitem1' to="/"> */}
                    <div className="hamburger-options-parent">
                        <div className='navlinkclass'>
                           
                             <h5 className="map-view">Map Views</h5>
                        </div>
                        <div className='navlinkclass'>
                            <SatIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1'> Satellite</Dropdown.Item>
                        </div>
                        <div className='navlinkclassBorder '>
                            <TerrIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1'> Terrain</Dropdown.Item>
                        </div>
                        <div className='navlinkclass'>
                                          {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <h5>Routing Preferences</h5>
                        </div>
                        <div className='navlinkclass'>
                            <CarIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1' onClick={toggle} > My Vehicles</Dropdown.Item>
                        </div>
                        <div className='navlinkclass'>
                            <MapIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1' > Saved Routes</Dropdown.Item>
                        </div>
                        <div className='navlinkclassBorder'>
                            <SettingsIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1' > Routing Options</Dropdown.Item>
                        </div>
                        <div className='navlinkclass'>
                            <OutIcon className='logoutclass' />              {/* Below is a callback function to logout from firebase & local user and push to /login -Noor */}
                            <Dropdown.Item className='dropdownitem1' onClick={() => { props.logout(); props.history.push('/login') }} > Logout</Dropdown.Item>
                        </div>
                    </div>
                {/* </div> */}
            </Dropdown.Menu>
        </Dropdown></>
    )
    
}

const mapStateToProps = state => ({})

export default withRouter(connect(
    mapStateToProps, { logout }
)(SidebarMenu))

// export default SidebarMenu