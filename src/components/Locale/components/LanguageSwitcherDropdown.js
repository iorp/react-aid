  
 // Import necessary dependencies from the React library
 import React, { createRef, useEffect, forwardRef, useState, useImperativeHandle, useContext } from 'react';
//  import Locale from '@iorp/react-aid/lib/components/Locale';
 import useLocale from '@iorp/react-aid/lib/hooks/useLocale';  
 // Import Bootstrap styling
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 
  
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
 