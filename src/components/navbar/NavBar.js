import { Menu, Avatar } from 'antd';
import {LogoutOutlined, ProfileOutlined} from '@ant-design/icons';
import React, {useState} from "react";
import {useAuth0} from "../../react-auth0-spa";
import paths from "../../utilities/paths";
import { withRouter } from 'react-router-dom';
import './navbar.scss';
import LocalInfo from "../../services/LocalInfo";
import logoPath from "../../assets/img/rovebusSVGWhite.svg";

const { SubMenu } = Menu;

const NavBar = (props) => {
    const [current, setCurrent] = useState('accounts');
    const { isAuthenticated, logout } = useAuth0();
    const {history} = props;

    const handleClick = e => {
        setCurrent(e.key);
    };

    const routeTo = (path) => {
        history.push(path);
    };

    if (!isAuthenticated && window.location.hash !== '#/') {
        logout();
    }

    /*
    if (window.location.hash !== '#/' && current !== window.location.hash.replace('#/', '').split('/')[0]) {
      setCurrent(window.location.replace('#/', '').split('/')[0]);
    }
    */

    /*
    const currentPathElements = window.location.hash.replace("#",'').split('/');
    const resourceNames = resources.map(r => r.resource);
    for (let m = currentPathElements.length - 1; m >= 0; m--) {
      const existingPathElement = resourceNames.find(rn => rn === currentPathElements[m])
      if (existingPathElement) {
        console.log(existingPathElement);
        setCurrent(existingPathElement);
        break;
      }
    }
    */

    return (
        <Menu id="navbar-area" onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{visibility: isAuthenticated ? 'visible' : 'hidden'}} >
            <Menu.Item key="home" style={{fontSize: '20px'}} onClick={() => routeTo('/')} className='home-nav-item'>
                <img src={logoPath} />
            </Menu.Item>
            <Menu.Item key="users" style={{fontSize: '20px'}} onClick={() => routeTo(paths.trips)} className='nav-item'>
                Trips
            </Menu.Item>
            <Menu.Item key="suppliers" style={{fontSize: '20px'}} onClick={() => routeTo(paths.companies)} className='nav-item'>
                Companies
            </Menu.Item>
            <Menu.Item key="countries" style={{fontSize: '20px'}} onClick={() => routeTo(paths.countries)} className='nav-item'>
                Location Metadata
            </Menu.Item>
            <SubMenu
                className='nav-item'
                title={
                    <span className="submenu-title-wrapper">
                <Avatar className={'user-avatar'} size={"large"} src={LocalInfo.userPicture} />
              </span>
                }
            >
                <Menu.Item key="profile" className='nav-sub-item'><ProfileOutlined />Profile</Menu.Item>
                <Menu.Item key="logout" className='nav-sub-item' onClick={() => logout({})}><LogoutOutlined />Logout</Menu.Item>
            </SubMenu>
        </Menu>
    );
};

export default withRouter(NavBar);


