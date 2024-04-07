
import React, { createContext, useState, forwardRef, useContext, useEffect,createRef, useRef } from 'react';
 
 
import useExpose from '../../../hooks/useExpose';

 
const FlexPanel = forwardRef(({ ...props }, ref) => { 

 const direction =  props.parentNode.current.self.state.direction
 
// useEffect(() => {     
//   console.log(' Panel has detected a change in the direction ',props.parentNode.current.self.state.direction)
    
//   },[ref,props.parentNode.current,props.parentNode.current.self.state.direction]);



return (<div ref={ref}   {...Object.fromEntries(Object.entries(props).filter(([key]) => key === key.toLowerCase()))}  style={{...props.style}}/> ); 
});
export default FlexPanel;
