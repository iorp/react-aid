 

  // Import necessary dependencies from the React library
  import React, {  forwardRef } from 'react';  
  import useNamespace from '@iorp/react-aid/lib/components/Namespace/hooks/useNamespace';
   
   
  const Link = forwardRef((props, ref) => {
  const {options}=useNamespace();
  

  
    return (
      <a {...props} href={(options.root||"")+props.href} >{props.children}</a>
    );
  });
   
 
export default Link;