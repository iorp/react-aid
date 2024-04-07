import React, {  useState,useContext, useEffect } from 'react';
import  useScreen from '../../hooks/useScreen'  
import LocaleContext from './contexts/LocaleContext';
// import {deepMerge} from '@ioutil/ node/lib/common/objects'; 
import deepMerge from '@iorp/node-aid/src/object/deepMerge';
// todo move to ioutil/src/components and document 


 
export const Locale = (props) => {
  const { children } =props;
  const defaultOptions={current:'es',available:['en','es']}; 
   const [options, setOptions] = useState(() => deepMerge( defaultOptions,props.options || {}));

  const [locale, setLocale] = useState({
    current:typeof options.current =='function' ? options.current(locale.current):options.current,
    available:typeof options.current =='function' ? options.available(locale.available):options.available, 
    strings:{}
  });
  
 
  const useLocale= ()=>{
  
    const setLanguage=(language)=>{
      setLocale(p => {return {...p,current:language};  });  
    } 
  
    const setStrings=(newStrObj)=>{
      const strings = locale.strings||{};
         // remove the hash keys (comments)
      newStrObj = JSON.parse(JSON.stringify(newStrObj, (key, value) => key.startsWith('#') ? undefined : value));
   
  
      for (const language in newStrObj) {
    
        
        if (strings.hasOwnProperty(language)) {
          strings[language] = {...strings[language],...newStrObj[language]}
        }else{
          strings[language] = newStrObj[language];
        }
  
          setLocale(p => {return {...p,strings:strings};  })
      }
      
      //setLocale(p => {return {...p,locale:{...p.locale,strings:{...p.locale.strings,...strObj}}};  });  
    }
    const getString = (key,nullValue="")=>{ 
   console.log(33,key,locale.strings||{})
      return (locale && locale.strings && locale.strings[locale.current] && locale.strings[locale.current][key])||nullValue;
    }

    return {
      locale,
      setLocale,
      setLanguage,
      setStrings,
      getString,
      L : getString,
    };
  }

 
 
  const LocaleContextValue = {  
    locale,setLocale,useLocale, 
 
};
  return (
    <LocaleContext.Provider value={LocaleContextValue}>
      {children}
    </LocaleContext.Provider>
  );

  
}; 

export default Locale