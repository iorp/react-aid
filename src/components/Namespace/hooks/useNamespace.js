import React, {  useContext } from 'react';

import NamespaceContext from '../contexts/NamespaceContext' 
import FSON from '@iorp/node-aid/src/plugin/fson';
const useNamespace= ()=>{   
 
    const {layout,setLayout,data,setData,options,setOptions}= useContext(NamespaceContext); 
    const setRefs =(refs,merge=false)=>{
      let resultRefs={};
      
      if(Array.isArray(refs)){
        refs.forEach((key) => {
          resultRefs[key] = React.createRef();
        });
      }else{
        resultRefs=refs;
      }  
        if(merge){
          setLayout(p => {    return {...p||{},ready:false,...{refs:{...p.refs||{},...resultRefs}}};  });  
    
        }else{
          setLayout(p => {    return {...p||{},ready:false,...{refs:resultRefs}};  });  
        }
        
    }
    const getParams=()=>{ 
      let args = {}
       if(window.location.search && window.location.search.startsWith('?') && window.location.search.length>1){
       
        args = FSON.parse(`(${window.location.search.trim().substring(1)})`)
      
       }
       return args
      }
  

  
    return {
      getParams,
      layout,
      setLayout,
      refs:layout.refs,
      setRefs,
      data,
      setData,
      options,
      setOptions
    };
  }
  export default useNamespace;