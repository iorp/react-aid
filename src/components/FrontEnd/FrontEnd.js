import React, {  useState,useContext, useEffect } from 'react';
  
import FrontEndContext from './contexts/FrontEndContext';
// import {deepMerge} from '@ioutil/ node/lib/common/objects';
import deepMerge from '@iorp/node-aid/src/object/deepMerge';


//todo bring to node .comon.objectsd



export const FrontEnd = (props) => {
 const { children } =props;
 const defaultOptions={ 
 
 }
  const [data, setData] = useState(null);

  const [options, setOptions] = useState(() => deepMerge( defaultOptions,props.options || {}));
  
  const [layout, setLayout] = useState({refs:null});
    useEffect(() => {
    // options
    }, [options]);
  const FrontEndContextValue = { 
    data,  setData,
    layout,setLayout,
    options,setOptions
     
};

  return (
   options && <FrontEndContext.Provider value={FrontEndContextValue}>
    {children}
    </FrontEndContext.Provider>
  );

  
}; 

export default FrontEnd