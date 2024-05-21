import React, {  useContext } from 'react';

import LocaleContext from '../contexts/LocaleContext';
import oget from '@iorp/node-aid/lib/object/oget'
 
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
    // const getString = (key,defaultValue=null)=>{ 
    //   let res =   (locale && locale.strings && locale.strings[locale.current] && locale.strings[locale.current][key])||defaultValue;
    //   if(!res) res = `${locale.current}.${key}`;
    //   return res;
    
    // }
    // new getString using oget so the strings are now nestable
    const getString=(key)=>{
      let res;
      
        if(locale)
          if(locale.strings){
            try{
            res = oget(locale.strings[locale.current],key);
          }catch(e){
            return `${locale.current}.${key}`; // if not set return warning 
          }
          if(res){
                return res; // return language data string
              }else{
                return `${locale.current}.${key}`; // if not set return warning 
              }
          }
    
      return '';// return empty if not loaded yet
      
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