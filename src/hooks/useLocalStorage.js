
 import { useState } from 'react';

   import deepMerge from '@iorp/node-aid/lib/object/deepMerge';
  
   const useLocalStorage = (options) => {
    options=deepMerge({ 
      encoded:false, 
      allowAll:true
   },options);
    const setLocalStorage = (key, value) => {
      const {encoded,allowAll} = options;
      let dataStr = JSON.stringify(value);
      if(encoded)  dataStr = btoa(dataStr) 
      localStorage.setItem(key,dataStr);
    };
  
    const getLocalStorage = (key) => {
      const {encoded,allowAll} = options;
      let  dataStr = localStorage.getItem(key);
  
      if(encoded) {
        try{
        dataStr = atob(dataStr)
       }catch(err){
         if(!allowAll) {
           // return no args 
            return {};
         }
       }

       }
       let parsed ;
       try{
        parsed = JSON.parse(dataStr) ;
       }catch(e){
        parsed = null;
       }
                // dataStr shows that it will read also not encoded 
      return parsed || null;
    };
  
    return { setLocalStorage, getLocalStorage };
  };
  
export default useLocalStorage;
  
