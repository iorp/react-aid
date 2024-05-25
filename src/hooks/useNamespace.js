import React, { createRef, useContext } from 'react';

import NamespaceContext from '../contexts/NamespaceContext' 
 

const useNamespace= ()=>{    
    const {layout,setLayout,data,setData,options,setOptions,args}= useContext(NamespaceContext); 
    const setRefs =(refs,merge=false)=>{
      let resultRefs={};
      
      if(Array.isArray(refs)){
        refs.forEach((key) => {
          resultRefs[key] = createRef();
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
   
  
    return { 
      layout,
      setLayout,
      refs:layout.refs,
      setRefs,
      data,
      setData,
      options,
      setOptions,
      args
    };
  }

export default useNamespace;