import React, {  useEffect,  useState } from 'react';

export const breakpoints = {
  'xs':0,
  'sm':576,
  'md':768,
  'lg':992,
  'xl':1200,

}
// responsive value 
export const getResponsiveValue=(obj)=>{
  const w = window.innerWidth; 
  const breakpointKeys = Object.keys(breakpoints).reverse(); 
for (let i = 0; i < breakpointKeys.length; i++) {
const key = breakpointKeys[i];
// key or bigger  
if (obj[key] && w >= breakpoints[key]) {
  return obj[key]

}
if(obj['*']) return obj['*']
}



}
// alias 
export const R = getResponsiveValue;
// responsive size
export const  getResponsiveSize=()=>{
  const windowWidth = window.innerWidth;

    if (windowWidth < breakpoints.sm) { 
      return 'xs';
    } else if (windowWidth >= breakpoints.sm && windowWidth < breakpoints.md) {
      return 'sm';
    } else if (windowWidth >= breakpoints.md && windowWidth < breakpoints.lg) {
      return 'md';
    } else if (windowWidth >= breakpoints.lg && windowWidth < breakpoints.xl) {
      return 'lg';
    } else {
      return 'xl';
    }
}
 
export const useScreen = () => {
  const [screen, setScreen] = useState(); 
  const handleResize = () => { 
    setScreen(  {
      width:window.innerWidth,
      height:window.innerHeight,
      size:getResponsiveSize()
    }); 
  };

  useEffect(() => {
    // Initial screen size check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screen;
};


export const shouldExpand=(screen,expand)=>{
  if (!expand|| expand=='none') return false;
   const breakpoints =  ['xs',  'sm',  'md',  'lg',  'xl' ];  
   return  (breakpoints.slice(breakpoints.indexOf(expand)).includes(screen.size) ?true:false)
   
 } 

 



export default useScreen;





  // const useScreen = () => {
  //   const [screenSize, setScreenSize] = useState({pixels:0,grid:null});
  
  //   const handleResize = () => {
  //     const windowWidth = window.innerWidth;
  
  //     if (windowWidth < 576) {
  //       setScreenSize({pixels:windowWidth,grid:'xs'});
  //     } else if (windowWidth >= 576 && windowWidth < 768) {
  //       setScreenSize({pixels:windowWidth,grid:'sm'}); 
  //     } else if (windowWidth >= 768 && windowWidth < 992) {
  //       setScreenSize({pixels:windowWidth,grid:'md'}); 
  //     } else if (windowWidth >= 992 && windowWidth < 1200) {
  //       setScreenSize({pixels:windowWidth,grid:'lg'}); 
  //     } else {
  //       setScreenSize({pixels:windowWidth,grid:'xl'}); 
  //     }
  //   };
  
  //   useEffect(() => {
  //     // Initial screen size check
  //     handleResize();
  
  //     // Event listener for window resize
  //     window.addEventListener('resize', handleResize);
  
  //     // Cleanup the event listener on component unmount
  //     return () => {
  //       window.removeEventListener('resize', handleResize);
  //     };
  //   }, []);
  
  //   return screenSize;
  // };

  // export default useScreen;