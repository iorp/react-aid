import React, {  useState,useContext, useEffect } from 'react';
import  useScreen from '../../hooks/useScreen'  
import LocaleContext from './contexts/LocaleContext';
 import deepMerge from '@iorp/node-aid/src/object/deepMerge';
 import readLocalStorageObject from "./../../plugins/localstorage/readLocalStorageObject";
 import writeLocalStorageObject from "./../../plugins/localstorage/writeLocalStorageObject";
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
   const [options, setOptions] = useState(() => deepMerge( defaultOptions,props.options || {
    available:typeof defaultOptions.available =='function' ? defaultOptions.available():  [defaultOptions.default], 
    default:'en'
   }));

   
   const localeLocalStorage = readLocalStorageObject(process.env.REACT_APP_BASENAME+'locale');
  const [locale, setLocale] = useState({
    current:localeLocalStorage.current||options.default,
    available:options.available,
    strings:{},
    rules:options.rules
  });
  
 
  useEffect(() => {
 
     writeLocalStorageObject(process.env.REACT_APP_BASENAME+'locale',{...localeLocalStorage,current:locale.current});
 
  }, [locale]);
   
  return (
    <LocaleContext.Provider value={{ locale,setLocale,options,setOptions }}>
      {children}
    </LocaleContext.Provider>
  );

  
}; 

export default Locale