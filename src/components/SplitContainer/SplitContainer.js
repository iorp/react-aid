import React, { createContext, useState, forwardRef, useContext, useEffect,createRef, useRef } from 'react';
 
 
import useExpose from '../../hooks/useExpose';
import FlexDivider from './src/FlexDivider';
import FlexPanel from './src/FlexPanel';
 

 

const  SplitContainer = forwardRef( (props, ref) => {
   const [state, setState] = useState({ 
    direction:props.direction||'column',
    style:{...props.style||{},...{
      display:'flex',
      flexDirection:props.direction||'column'
    }},
    panels:[],
    ready:false,
    ref:ref,
    refs:[]
   });  

  
   const setDirection=(direction)=>{ 
    setState((prev) => ({ ...prev,ready:false,direction:direction }));
        }
 
  const addPanels=(newPanels)=>{ 
    setState((prev) => ({ ...prev,ready:false,panels:[...prev.panels||[],...newPanels]  }));
        }
  const setPanelSize=(panelIndex,size)=>{
    state.refs.panels[panelIndex].current.style[state.direction=='row'?'width':'height']=size;
   }

  const removePanels = (panelsToRemove) => {
    setState((prev) => ({ ...prev,ready:false, panels: (prev.panels || []).filter((_, index) => !panelsToRemove.includes(index)) }));
  }

  const updateChildren=()=>{
    
          // console.log('children',props.children);
          const statePanels = state.panels; 
          const children =[]; 
          const refPanels =[];
          const refDividers =[]; 
          statePanels.forEach((panel,index) => {
            const panelRef = createRef() 
            panel  =<FlexPanel ref={panelRef} key={`p${index}`} {...panel.props} parentNode={ref}/> ;  


            
          refPanels.push(panelRef);
          
          children.push( panel  );
          if(index < statePanels.length - 1){
            const dividerRef = createRef() 
            let divider = <FlexDivider ref={dividerRef} key={`s${index}`} parentNode={ref}/> 
            refDividers.push(dividerRef);
            children.push(divider);
            
          }
                });
               // this adds over
               // setState((prev) => ({ ...prev, children:[...prev.children||[],...children],refs:{...prev.refs,...{panels:[...prev.refs.panels,...refPanels],dividers:[...prev.refs.dividers,...refDividers]}} }));
               // this puts., removes prev 
               setState((prev) => ({ ...prev,ready:true,children:children,refs:{panels:refPanels,dividers:refDividers}}));
              }

  // expose self
  useExpose(ref,{  
    self:{
      state:state,
      setState:setState
    }, 
      addPanels:addPanels,
      removePanels:removePanels,
       setDirection:setDirection,
       setPanelSize:setPanelSize
      }) 

  // put initial panels
  useEffect(() => {   
 
    addPanels(React.Children.toArray(props.children))  
  //  addPanels([...React.Children.toArray(props.children)||[],...[ <div key={'_0'}style={{backgroundColor:'blue'}}>child c</div>]])  
  
  }, []);

// update children when panels change
  useEffect(() => {   
     updateChildren() 
  }, [state.panels,state.direction]);


  useEffect(() => {
    if( state.initialized){
      setState((prev) => ({ ...prev,style:{...prev.style||{},flexDirection:state.direction}})); 
}
  },[state.ready,state.direction]);




  // onReady event
  useEffect(() => {
    if(state.children && state.children.length>0 && !state.initialized){
     // console.log('onReady',state); 
      if(typeof props.onReady === 'function') props.onReady(state,ref)
      setState((prev) => ({ ...prev,initialized:true}));
    }
  }, [state.children]);
  
 

  // onUpdateChildren event   
  useEffect(() => {
    if(state.ready && state.children && state.children.length>0 ){

    // console.log('onUpdateChildren',state); 
      if(typeof props.onUpdateChildren === 'function') props.onUpdateChildren(state,ref)
    }
  }, [state.ready,state.children]);

  return (
   
    <div ref={ref} style={state.style} {...Object.fromEntries(Object.entries(props).filter(([key]) => key === key.toLowerCase()))}  >
      {state.children} 
    </div>  );
} );
 
  

 
 

export default SplitContainer;
