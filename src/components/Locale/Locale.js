import React, {  useState,useContext, useEffect } from 'react';
import  useScreen from '../../hooks/useScreen'  
import LocaleContext from './contexts/LocaleContext';
// import {deepMerge} from '@ioutil/ node/lib/common/objects'; 
import deepMerge from '@iorp/node-aid/src/object/deepMerge';
// todo move to ioutil/src/components and document 


 
export const Locale = (props) => {
  const { children } =props;
  const defaultOptions={
    current:null,
    available:[],
    rules:{
      
    whenStringMissingTryDefaultLanguage:true,
    whenStringMissingWarnInPlace:true,
    }
     
  }; 
   const [options, setOptions] = useState(() => deepMerge( defaultOptions,props.options || {}));

  const [locale, setLocale] = useState({
    current:typeof options.current =='function' ? options.current(locale.current):options.current,
    available:typeof options.current =='function' ? options.available(locale.available):  [...new Set(options.available)], 
    strings:{},
    rules:options.rules
  });
  
 
 
   
  return (
    <LocaleContext.Provider value={{ locale,setLocale }}>
      {children}
    </LocaleContext.Provider>
  );

  
}; 

export default Locale