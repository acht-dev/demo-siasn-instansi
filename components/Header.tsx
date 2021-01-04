import {
  Dropdown,
  Accordion,
  Card,
  ListGroup,
  Navbar,
  Nav,
} from "react-bootstrap";
import { useKeycloak } from "@react-keycloak/ssr";
import type { KeycloakInstance } from "keycloak-js";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Cookies from "js-cookie";
import listMenu from "./../data/listMenu.json";
import Sidebar from './Sidebar';

export const Header: React.FC = (props) => {
  let filterSidebar;
  const roleCookie = Cookies.get('roles');
  const { keycloak } = useKeycloak<KeycloakInstance>();
  function openNav() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("main").style.marginLeft = "0";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  if (roleCookie === 'operator') {
    filterSidebar = listMenu
    .filter(({role}) => role.includes(roleCookie))
    .map((data) => ({
      parentMenu: data.parentMenu,
      label: data.label,
      items: data.items,
      eventKey: data.eventKey
    }));
  }

  return (
    <>
      <div className='header'>
        <Navbar bg='light' expand='lg' id='main' className='dokuDigital'>
          <Navbar.Brand>
            <button className='btn-bars btn btn-flat' onClick={openNav}>
              <img src='/img/sidebar-icon-instansi.png' alt='logo bars' />
            </button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto align-items-center'>
              <Link href='/'>
                <Navbar.Brand>
                  <img src='/img/new-logo_2.png' width='150' height='60' />
                </Navbar.Brand>
              </Link>
              <Navbar.Brand className='navbarText'>
                SI-ASN INSTANSI
              </Navbar.Brand>
            </Nav>
            <ul className='navbar-nav'>
              <div className='img-profile d-none d-lg-block'>
                <p className='text-white text-center'>F1</p>
              </div>
              <li className='nav-item mx-auto'>
                <Dropdown>
                  <Dropdown.Toggle
                    variant='transparent'
                    className='nav-link ml-3'
                    id='dropdown-basic'>
                    Helmi Agustiawan
                    {/* <img src='/img/logo-drop.png' className='ml-4' /> */}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        if (keycloak) {
                          Cookies.remove("token", { path: "/" });
                          window.location.href = keycloak.createLogoutUrl();
                        }
                      }}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div id='mySidebar' className='sidebar'>
        <div className='row'>
          <div className='col-lg-4 col-11 box-left px-0'>
            <a href={void 0} className='closebtn' onClick={closeNav}>
              ×
            </a>

            {/* Accordion */}
            <Accordion>
              <Card>
                {filterSidebar !== undefined ? (filterSidebar.map((sidebarItem, index) => {
                  return <Sidebar {...sidebarItem} index={index}/>
                })) : null}
              </Card>
            </Accordion>
          </div>

          <div className='col-lg-8 col-1 box-right'>
            <div className='box-transparent'></div>
          </div>
        </div>
      </div>
    </>
  );
};


