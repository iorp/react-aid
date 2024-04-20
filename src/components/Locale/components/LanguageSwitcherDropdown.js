  
 // Import necessary dependencies from the React library
 import React, { createRef, useEffect, forwardRef, useState, useImperativeHandle, useContext } from 'react';
//  import Locale from '@iorp/react-aid/lib/components/Locale';
 import useLocale from '@iorp/react-aid/lib/components/Locale/hooks/useLocale';  
 // Import Bootstrap styling
 import 'bootstrap/dist/css/bootstrap.min.css';
//  import {Button,Container,Form,Nav,NavDropdown,Offcanvas} from 'react-bootstrap';  
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//  import { faSearch,faXmark,faBars, faChevronDown,faChevronRight,faChevronUp } from '@fortawesome/free-solid-svg-icons'; 
 
//  import {brand,title,localeOptions} from './config'
 
 
 
//  import Navbar from '@iorp/react-aid/lib/components/Navbar'; 
  
 
  
//   import Sidebar from '@iorp/react-aid/lib/components/Sidebar';
//   import useExopse from '@iorp/react-aid/lib/hooks/useExpose'; 
//   import useScreen, {R} from '@iorp/react-aid/lib/hooks/useScreen';
//   import useExpose from '@iorp/react-aid/lib/hooks/useExpose';
 
//   import Treeview from '@iorp/react-aid/lib/components/Treeview'
  
     
//    import useNamespace from '@iorp/react-aid/lib/components/Namespace/hooks/useNamespace';
//  import { deepMerge } from '@iorp/react-aid/lib/deepMerge-c3f17a9c';
    
 
  
 import Dropdown from 'react-bootstrap/Dropdown';

  
 // @todo improve flagicons
   require('../assets/flags/css/flag-icons.css');
 


const LanguageSwitcherDropdown = forwardRef((props, ref) => {
  
    const {locale,L,setLanguage,setStrings,getString} = useLocale()
     
    const Model =typeof props.model=='function' ? props.model  :(props)=>{
        return (
            <>
            <Dropdown.Toggle className={'btn-dark dropdown-menu-end'}    >
            
            <i className={`fi fi-${locale.current}  me-2`}></i> 
            {locale.current}
        </Dropdown.Toggle> 
        <Dropdown.Menu >
        {locale.available.map((language, index) => ( 
            <Dropdown.Item key={index} onClick={()=>{setLanguage(language)}}  className={(locale.current==language)? ' active' : ''} >
        
        <i className={`fi fi-${language} me-2` }></i> 
            {language} 
            </Dropdown.Item>
        ))} 
            
        </Dropdown.Menu>
        </>
);    
}
       
    

      return ( 
        <Dropdown  {...props}> 
             <Model/>
          {/* <Dropdown.Toggle className={'btn-dark dropdown-menu-end'}    >
          
            <i className={`fi fi-${locale.current}  me-2`}></i> 
            {locale.current}
          </Dropdown.Toggle> 
          <Dropdown.Menu >
          {locale.available.map((language, index) => ( 
            <Dropdown.Item key={index} onClick={()=>{setLanguage(language)}}  className={(locale.current==language)? ' active' : ''} >
           
          <i className={`fi fi-${language} me-2` }></i> 
             {language} 
            </Dropdown.Item>
          ))} 

          </Dropdown.Menu> */}
        </Dropdown>
      );
     
  });


  export default LanguageSwitcherDropdown;
 