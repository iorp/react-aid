  import React from 'react';

  import oget from '@iorp/node-aid/lib/object/oget'
   
     import FSON from '@iorp/node-aid/src/plugin/fson'; 
     import deepMerge from '@iorp/node-aid/lib/object/deepMerge'; 
   import useBase64 from './useBase64';
   
const useUrl = (options) => {
    options=deepMerge({ 
       encoded:false,
       allowAll:false
    },options);

    const {encode,decode} = useBase64();
 


     const getUrlArgs=(key=null)=>{ 
        
          const {encoded,allowAll} = options;
         let args = {}
         let argsStr;

         const questionMarkIndex = window.location.href.indexOf('?');
          if (questionMarkIndex !== -1) {
            argsStr =  window.location.href.substring(questionMarkIndex + 1).split('#')[0];
    
               
          } 
           
         if(argsStr){
           
   
          if(encoded) {
          try{
          argsStr = decode(argsStr)
     
         }catch(err){
           if(!allowAll) {
             // return no args 
              return {};
           }
         }
           // this will read also not encoded 
         }
          args = FSON.parse(`(${argsStr})`)
          if(!key) {
           return args;
          }else{
           return oget(args,key);
          }
         }
         return args
       };
     const setUrlArgs=(obj)=>{
         const {encoded} = options;
         const regex = /^(.*?)(?:\?(.*?))?(?:#(.*))?$/;
         const match = window.location.href.match(regex);
      
         // Extract base, args, and fragment from the match
         const [, base, args, fragment] = match || [];
         if(typeof obj=="function") obj=obj(getUrlArgs());  
         if(typeof obj!="object" || Array.isArray(obj)) obj={};  
         let argsStr=FSON.stringify(obj).slice(1, -1).trim();
      
         if(encoded)  argsStr = encode(argsStr) 
      
      
         let urlStr = base +((argsStr.length>0)?'?'+argsStr:"") +((fragment!=null)?'#'+fragment:"");
       
       //  window.history.pushState(null,null,urlStr);
          window.history.replaceState(obj,null,urlStr);
        //  console.log(urlStr)
      
      
       };
    
       return {
         getUrlArgs,
         setUrlArgs
       }
   };
   
  export default useUrl;
   // ... 
   //  const {setUrlArgs,getUrlArgs}= useUrl({
   //  options 
   // });
   // ...
    
   //  // overwrite 
   //  setUrlArgs({k:'6F3E',hello:'hellow'});
   //  //  // merge
   //    setUrlArgs((prev)=>{return {...prev,...{hello:'hola'}};});
    
   //   console.log(  getUrlArgs())
    
   
   
   
      