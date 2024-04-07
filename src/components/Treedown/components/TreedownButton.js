
import React, {useState,useEffect,forwardRef,useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 
import DropdownButton from "react-bootstrap/DropdownButton"; 
import TreedownContext  from "../TreedownContext";

 
/**
 * TreedownButton Component
 *
 * @component
 * @param {Object} props - Component properties
 * @param {React.Ref} ref - Forwarded ref for external access
 * @returns {React.Component} - TreedownButton component
 */
  const TreedownButton = forwardRef((props, ref) => {
  // Create a ref if not provided
  ref = ref ? ref : React.createRef(ref);

  // Access options from the TreedownContext
  const { options } = useContext(TreedownContext);

  // State to manage the dropdown direction
  const [drop, setDrop] = useState(props.drop || "bottom");

  // Set the dropdown direction based on options and props
  useEffect(() => {
    if (options && options.behaviour && ref && ref.current) {
      if (props.root === "true") {
        setDrop(props.drop);
      } else {
        if (options.behaviour === "drawer") {
          setDrop(options.drawerMenuDrop);
        } else {
          setDrop(options.defaultMenuDrop);
        }
      }
    }
  }, [options, ref && ref.current]);

  // Render a DropdownButton with the determined dropdown direction
  return (
    drop && (
      <DropdownButton
        ref={ref}
        drop={drop}
        {...props}
        className={`${props.className || ""} ioutil-treedown-node`}
      >
        {props.children}
      </DropdownButton>
    )
  );
});
 
export default TreedownButton;