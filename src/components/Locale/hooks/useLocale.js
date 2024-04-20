import React, {  useContext } from 'react';

import LocaleContext from '../contexts/LocaleContext';

 
const useLocale= ()=>{
  const {locale,setLocale}= useContext(LocaleContext);  
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
    const getString = (key,defaultValue=null)=>{ 
      let res =   (locale && locale.strings && locale.strings[locale.current] && locale.strings[locale.current][key])||defaultValue;
      if(!res) res = `${locale.current}.${key}`;
      return res;
    
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
  export default useLocale;