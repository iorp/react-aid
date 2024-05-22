  
 // Import necessary dependencies from the React library
 import React, { useRef, useEffect, forwardRef, useState, useImperativeHandle, useContext, createRef } from 'react';
 import useNamespace from '@iorp/react-aid/lib/hooks/useNamespace'; 
 import useLocale from '@iorp/react-aid/lib/components/useLocale';  
 import LanguageSwitcher from '../LanguageSwitcher'
 import {Button,Container,Nav} from 'react-bootstrap';
 import Navbar from '@iorp/react-aid/lib/components/Navbar'; 
import deepMerge from '@iorp/node-aid/lib/object/deepMerge'
 // Import Bootstrap styling
 import 'bootstrap/dist/css/bootstrap.min.css';
 import './style.css';
 
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {faBars,faXmark } from '@fortawesome/free-solid-svg-icons';  



 

const EdgeBars=forwardRef((props, ref) => {


  ref =useRef(ref);

  // useEffect(() => {
  //   // Get the current component element
  //   const component = ref.current;

  //   // Get the bounding rectangle of the current component
  //   const boundingRect = component.getBoundingClientRect();

  //   // Add 38 pixels to the top position of the component
  //   const newTop = boundingRect.top + 38;

  //   // Set the new top position of the component
  //   component.style.top = `${newTop}px`;
  // }, []);
  const style = {...props.style,top:(props.style.top||0)+38}
  return (
 
  <div ref={ref} {...props} style={style}className={'aid-edgebars '+ (props.className||'')}>
    {React.Children.map(props.children, (child, index) => {
        // Check if the child has a specific className
           // Add a new className if the condition is met
          return React.cloneElement(child, {key:index,...child.props});
        
      })}
  
  </div>);
});
// EdgeBars.Main=forwardRef((props, ref) => {
//   ref = useRef();
//   return (<div {...props}  className={'aid-edgebars-main '+ (props.className||'')}>
//     {React.Children.map(props.children, (child, index) => {
//         // Check if the child has a specific className
//            // Add a new className if the condition is met
//           return React.cloneElement(child, { className:'aid-edgebars-item '+(child.props.className||'') });
        
//       })}
//   </div>);
//  });
 

EdgeBars.Item=forwardRef((props, ref) => {
  ref = useRef();
  // orientation, top, end,bottom,start

  const [k,setK]=useState(deepMerge({
 
    x:0, // horizontal
    y:1, // vertical
    d:'e', // deploy direction,
    m:2,// item margin
    w:38,// item width
    h:38,// item height
  },props.k));
// useEffect(() => {
//   console.log(k);
// }, [k]);



 


          

              let style =k.d=='e'? {flexDirection: 'row'}:
              k.d=='s'? {flexDirection: 'row-reverse'}: 
              k.d=='b'? {flexDirection: 'column'}: 
              k.d=='t'? {flexDirection: 'column-reverse'}: 
              {flexDirection: 'row'};
           
              //  switch(k.d){
              //   case 'e':   style = {...style,left:k.w*(k.x)};  break;
              //   case 's':   style = {...style,right:(k.w*(k.x))+k.w};  break; 
              //   case 'b':   style = {...style,top:(k.h*(-k.y)) };  break; 
              //   case 't':   style = {...style,bottom:k.h*(-k.y)+k.h};  break; 
              //  }
                
           
        
        
 
                  if(k.x<0){
                    style = {...style,right:(k.w*(k.x)) +k.w}  
                    
                  }else{
                    style = {...style,left:k.w*(k.x)}  
                  }

                  if(k.y<0){
                    style = {...style,top:(k.h*(k.y))+k.h }  
                    
                  }else{
                    style = {...style,bottom:k.h*(k.y)}  
                  }
            
      const menuToggle=(event)=>{
        // lookup for the itemp
        const item = event.target.closest('.aid-edgebars-link');
       // console.log(item)
        if(item){
          const menu = item.nextElementSibling;
          if(menu){
            menu.classList.toggle('show');
            event.stopPropagation()
          }
        }
        
         
      }
  return (

  <div ref={ref} {...props} style={{...props.style,...style} } className={'aid-edgebars-item '+(props.className||'')}>
    {React.Children.map(props.children, (child, index) => {
        // Check if the child has a specific className
           // Add a new className if the condition is met
          return React.cloneElement(child, { onClick:menuToggle ,className:'aid-edgebars-link '+(child.props.className||'') });
        
      })}
     
  </div>);
});
EdgeBars.Menu=forwardRef((props, ref) => {
  ref = useRef();
  let style = {top:38};
                           
  return (

  <div {...props} style={{...props.style,...style} }className={'aid-edgebars-menu '+(props.className||'').replace('aid-edgebars-link ','')}>
    {props.children}
     
  </div>);
});
export default EdgeBars;
 



 //  <div className='aid-cmn aid-cmn-fixed '>

//  <button className={'btn btn-dark d-block d-bar-block d-drawer-none'} variant="dark"   >
//  <FontAwesomeIcon icon={faXmark} /> 
//  </button>

// <div  className='aid-cmn-v' >
//  <button className={'btn btn-dark d-block d-bar-block d-drawer-none'} variant="dark"   
//   onClick={() => {refs.leftbar && refs.leftbar.current.toggleDrawer()}}  >
//  <FontAwesomeIcon icon={faXmark} />
//  </button>

//  <button className={'btn btn-dark d-block d-bar-block d-drawer-none'} variant="dark"   >
//  <FontAwesomeIcon icon={faXmark} />
//  </button>
// {/*  
//   <LanguageSwitcher className="d-drawer-none"  drop={'down'} align={'end'} /> */}
//  </div>
 
//  <div  className='aid-cmn-h' >
//  <button className={'btn btn-dark d-block d-bar-block d-drawer-none'} variant="dark"   
//   onClick={() => {refs.leftbar && refs.leftbar.current.toggleDrawer()}}  >
//  <FontAwesomeIcon icon={faXmark} />
//  </button>

//  <button className={'btn btn-dark d-block d-bar-block d-drawer-none'} variant="dark"   >
//  <FontAwesomeIcon icon={faXmark} />
//  </button>
// {/*  
//   <LanguageSwitcher className="d-drawer-none"  drop={'down'} align={'end'} /> */}
//  </div>
      
//       </div>