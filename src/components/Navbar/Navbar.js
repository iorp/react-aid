 
 // Import necessary dependencies from the React library
 import React, { createRef, useEffect, forwardRef, useState, useImperativeHandle, useContext } from 'react';

 // Import Bootstrap styling
 import 'bootstrap/dist/css/bootstrap.min.css';
 import {Navbar as BootstrapNavbar,Offcanvas} from 'react-bootstrap';  
   
 //import  useExpose  from '@ioutil/ react/lib/hooks/useExpose'; 
 import  useExpose  from '../../hooks/useExpose'; 
     
  require('./style.css');
  
 
 const Navbar = forwardRef((props,ref) => {
  const {
   children,
   // expand='lg',
   drawerPlacement='end'
 }=props;
 
 const [drawerExpanded, setDrawerExpanded] = useState(false);
 
 const collapseDrawer = () => setDrawerExpanded(false);
 const expandDrawer = () => setDrawerExpanded(true);
 const toggleDrawer = () => setDrawerExpanded((p)=>!p);
 
 
 useExpose(ref,{     
   toggleDrawer, 
   collapseDrawer,
   expandDrawer
  } )
  
  
 
   return <>  
    <BootstrapNavbar ref={ref}  
    {...Object.fromEntries(Object.entries(props).filter(([key]) => key === key.toLowerCase()))}
     className={`ioutil-navbar ${props.className||""}`} >
             
    <div className='ioutil-navbar-bar'>  
         {children}
    </div>
         <Offcanvas placement={drawerPlacement} show={drawerExpanded} onHide={collapseDrawer}   
          style={{top:0,bottom:0}}> 
         <Offcanvas.Body   className='ioutil-navbar-drawer' >  
          {children}
         </Offcanvas.Body>
       </Offcanvas>  
 </BootstrapNavbar> 
 </>
 });
   
 export default Navbar;