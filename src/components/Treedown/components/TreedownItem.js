
import React, {useState,useEffect,createContext,forwardRef,useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown"; 
  
/**
 * TreedownItem Component
 *
 * @component
 * @param {Object} props - Component properties
 * @param {React.Ref} ref - Forwarded ref for external access
 * @returns {React.Component} - TreedownItem component
 */
  const TreedownItem = forwardRef((props, ref) => {
  // Create a ref if not provided
  ref = ref ? ref : React.createRef(ref);

  // Render a Dropdown.Item with the provided title
  return (
    <Dropdown.Item ref={ref} {...props}>
      {props.title}
    </Dropdown.Item>
  );
});
 
 
 export default TreedownItem;