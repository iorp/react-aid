import React, {  useState,useContext, useEffect } from 'react';
  
import NamespaceContext from '../../contexts/NamespaceContext';
// import {deepMerge} from '@ioutil/ node/lib/common/objects';
import deepMerge from '@iorp/node-aid/src/object/deepMerge';

import useUrl from '../../hooks/useUrl';

//todo bring to node .comon.objectsd



export const Namespace = (props) => {
 const { children } =props;
 const defaultOptions={ 
  location:"", // the 'root folder' of the namespace, useful if it is not the host root 
 }  


 // built in options state generally for instance options 
  const [options, setOptions] = useState(() => deepMerge( defaultOptions,props.options || {}));
 // built in data state generally for any kind of data 
  const [data, setData] = useState({});

  const {getUrlArgs} = useUrl({encoded:true,allowAll:true}); // todo pass in options
 
  const args = getUrlArgs();
 
   // built in layout state, used by useNamespace functions 
  const [layout, setLayout] = useState({refs:null});
  
  const namespaceContextValue = { 
    data,  setData,
    layout,setLayout,
    options,setOptions, 
     args
};
useEffect(() => {
  // options

  }, [ ]);
  return (
   options && <NamespaceContext.Provider value={namespaceContextValue}>
    {children}
    </NamespaceContext.Provider>
  );

  
}; 

export default Namespace