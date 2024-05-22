import React, {  useState,useContext, useEffect } from 'react';
import  useScreen from '../../hooks/useScreen'  
import LocaleContext from '../../contexts/LocaleContext';
 import deepMerge from '@iorp/node-aid/src/object/deepMerge'; 
import useLocalStorage from '../../hooks/useLocalStorage';
// todo move to ioutil/src/components and document 


 
export const Locale = ({...props}) => {
  const { children } =props;
  const defaultOptions={
    current:null,
    available:[],
     
     
  }; 
  const {setLocalStorage,getLocalStorage}= useLocalStorage({encoded:false})
   const [options, setOptions] = useState(() => deepMerge(  {
    available: ['en'],
    default:'en'
   },props.options ||{},{mergeArrays:false}));

   let browserLanguage = navigator.language || navigator.userLanguage; 
   if(typeof browserLanguage==='string') browserLanguage =browserLanguage.substring(0,2); 
   if(!options.available.includes(browserLanguage)) browserLanguage = null;
   console.log(333,browserLanguage)
   const localeLocalStorage = getLocalStorage(process.env.REACT_APP_BASENAME+'locale');


  const [locale, setLocale] = useState({
    current:  ((localeLocalStorage && localeLocalStorage.current)||browserLanguage ||options.default),
    available:options.available,
    strings:{},
    rules:options.rules
  });
  
 
  useEffect(() => {
    if(locale)
     setLocalStorage(process.env.REACT_APP_BASENAME+'locale',{...localeLocalStorage,current:locale.current});
 
  }, [locale]);
   
  return (
    <LocaleContext.Provider value={{ locale,setLocale,options,setOptions }}>
      {children}
    </LocaleContext.Provider>
  );

  
}; 

export default Locale