import React, {  useContext } from 'react';

import FrontEndContext from '../contexts/FrontEndContext'

const useLayout= ()=>{   
    const {layout,setLayout}= useContext(FrontEndContext); 
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
   
   
  
    return {
      layout,
      setLayout,
      refs:layout.refs,
      setRefs,
      // useReady,
      // useGlobalId,
    //   screen
    };
  }
  export default useLayout;