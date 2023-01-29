import Link from 'next/link';
import React from 'react'
import { AiFillDashboard, AiOutlineArrowDown } from 'react-icons/ai/';
import { FaUserShield } from 'react-icons/fa/';
import { useRouter } from 'next/router';


function Sidebar() {
    const router = useRouter()  
  return (
    <div>
          <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">                          
                            <div className="sb-sidenav-menu-heading"></div>
                            <Link href='/admin'>
                            <a className="nav-link"id={router.pathname == "/admin" ? 'active-link' : ''}>
                                <div className="sb-nav-link-icon"><AiFillDashboard style={{fontSize:'1.6em'}}id={router.pathname == "/admin" ? 'active-link' : ''}/></div>
                                Dashboard
                            </a>
                            </Link>                        
                           
                            <div className="sb-sidenav-menu-heading"></div>

                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts"id={router.pathname == "/admin/manageAdmin" || router.pathname == "/admin/createAdmin" ? 'active-link' : ''}>
                                <div className="sb-nav-link-icon"id={router.pathname == "/admin/manageAdmin" || router.pathname == "/admin/createAdmin" ? 'active-link' : ''}><FaUserShield style={{fontSize:'1.6em'}}/></div>
                                Admins
                                <div className="sb-sidenav-collapse-arrow"><AiOutlineArrowDown style={{fontSize:'1.1em'}}/></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                <Link href='/admin/manageAdmin'>
                                <a className="nav-link">Manage-Admins</a>                         
                                </Link>   
                                <Link href='/admin/createAdmin/'>
                                <a className="nav-link" href="layout-sidenav-light.html">Create-New-Admins</a>
                                </Link>                        
                                   
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayout" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><AiFillDashboard style={{fontSize:'1.6em'}}/></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><AiOutlineArrowDown style={{fontSize:'1.1em'}}/></div>
                            </a>
                            <div className="collapse" id="collapseLayout" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                <Link href='/test'>
                                <a className="nav-link">Static Navigation</a>                         
                                </Link>
                        
                                    
                                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                      
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Admin
                    </div>
                </nav>
            </div>    
    </div>
  )
}

export default Sidebar
