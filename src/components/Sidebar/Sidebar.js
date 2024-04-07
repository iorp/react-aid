import React, { useRef, useEffect, forwardRef, useState, useContext } from 'react';
 
import  useScreen  from '../../hooks/useScreen';
import useExpose from '../../hooks/useExpose'
import { Offcanvas} from 'react-bootstrap'; 
 // Import Bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
  
 
require('./style.css');

const Sidebar = forwardRef((props, ref) => {
  const {    
   expands='lg',
   side='left', 
   onMutate=null,
    children}=props;

  
   const screen = useScreen(); 
 
 const shouldBarExpand=(expands)=>{
  if (expands=='none') return false;
   const breakpoints =  ['xs',  'sm',  'md',  'lg',  'xl' ];  
   return  (breakpoints.slice(breakpoints.indexOf(expands)).includes(screen.size) ?true:false)
   
 } 
 const [barExpanded,setBarExpanded] = useState(false) ;
 const [drawerExpanded, setDrawerExpanded] = useState(false);

 const [ style, setStyle ] = useState({
   ...props.style
    });
 
      
  useEffect(() => {  
   if(screen && screen.size){
  if(expands!='none') setBarExpanded(shouldBarExpand(expands)) 
}
}, [screen && screen.size]);
   
       useEffect(() => {    
         if(barExpanded){
           expandBar();
         }else{
           collapseBar()
         }
          }, [barExpanded]);


useEffect(() => {   
 
  if(typeof onMutate === 'function') onMutate(style,ref)
 
}, [style]);



  const expandBar = ()=>{ 
   setStyle(p => { return {...p||{},...{[side]:0}};  });  
  }
  const collapseBar = ()=>{  
   if(barExpanded) setBarExpanded(false);
   setStyle(prevStyle => {    return {...prevStyle||{},...{[side]:-props.style.width}};  });  
  }
  const toggleBar=  () => {
   if(style.left==0){
     collapseBar()
   }else{
     expandBar()
   }
 } 

 
const collapseDrawer = () => setDrawerExpanded(false);
const expandDrawer = () => setDrawerExpanded(true);
const toggleDrawer = () => setDrawerExpanded((p)=>!p);

const expand = () => {
if(shouldBarExpand(expands)){
  expandBar();
}else{
  expandDrawer();
}
} 
const collapse = () => {
  collapseBar();
  collapseDrawer();
   
  }

const toggle = () => {
  if(shouldBarExpand(expands)){
  setBarExpanded((p)=>!p);
  }else{
  setDrawerExpanded((p)=>!p);
} 
    } 



useExpose(ref,{    
 collapseBar: () => {  collapseBar();},
 expandBar: () => { expandBar();},
 toggleBar: () => { toggleBar();}, 
 expandDrawer: () => { expandDrawer();}, 
 collapseDrawer: () => { collapseDrawer();}, 
 toggleDrawer: () => { toggleDrawer();}, 
 expand:expand,
 collapse:collapse,
 toggle:toggle
} )



 return (
   
   <aside ref={ref} {...Object.fromEntries(Object.entries(props).filter(([key]) => key === key.toLowerCase()))} className={`ioutil-sidebar ${props.className||""}`}   style={style}>  
   <div className='ioutil-sidebar-bar'>
   {children} 
   </div>
   <Offcanvas show={drawerExpanded} onHide={collapseDrawer}  className={`ioutil-sidebar-drawer ${props.className||""}`}  style={{top:0,bottom:0}}>
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header> */}
        <Offcanvas.Body > 
         {children}
        </Offcanvas.Body>
      </Offcanvas> 
   </aside>
   
   
       
 );
});
 
export default Sidebar;