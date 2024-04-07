
import React, {useState,useEffect,forwardRef,useContext} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
//import { deepMerge, deepClone } from "@ioutil/ node/lib/common/objects"; 
import deepMerge from '@iorp/node-aid/src/object/deepMerge';  
 
// import useScreen, { shouldExpand } from "@ioutil/react/lib/hooks/useScreen";
// import useExpose from "@ioutil/react/lib//hooks/useExpose";


import useScreen, { shouldExpand } from "../../hooks/useScreen";
import useExpose from "../../hooks/useExpose";
  
import { Offcanvas } from "react-bootstrap";


import TreedownContext  from "./TreedownContext";
import TreedownItem  from "./components/TreedownItem";
import TreedownButton  from "./components/TreedownButton";

require("./Treedown.css");
 
/**
 * DrawerWrapper Component (internal)
 *
 * @component
 * @param {Object} props - Component properties
 * @param {string} props.title - Title for the drawer
 * @param {React.ReactNode} props.children - Child components to be rendered in the drawer
 * @param {React.Ref} ref - Forwarded ref for external access
 * @returns {React.Component} - DrawerWrapper component
 */
const DrawerWrapper = forwardRef(({ title, children }, ref) => {
  // Create a ref if not provided
  ref = ref ? ref : React.createRef(ref);

  // Access relevant context values from TreedownContext
  const { options, drawerExpanded, collapseDrawer } = useContext(
    TreedownContext
  );

  // Extract drawerProps from options
  const props = options.drawerProps;

  // Render an Offcanvas component with the provided children
  return (
    <Offcanvas
      show={drawerExpanded}
      onHide={collapseDrawer}
      ref={ref}
      {...props}
      className={`ioutil-treedown-drawer ${props.className || ""}`}
    >
      {/* Render the Drawer content using options.model.Drawer */}
      {options.model.Drawer(
        title,
        // Render a TreedownButton with hidden title and provided children
        <TreedownButton
          show={true}
          title="hidden"
          className={`ioutil-treedown ${props.className || ""}`}
        >
          {children}
        </TreedownButton>
      )}
    </Offcanvas>
  );
});

/**
 * Treedown Component
 *
 * @component
 * @param {Object} props - Component properties
 * @param {React.Ref} ref - Forwarded ref for external access
 * @returns {React.Component} - Treedown component
 */
export const Treedown = forwardRef((props, ref) => {
  // Create a ref if not provided
  ref = ref ? ref : React.createRef();

  // Default options for the Treedown component
  const defaultOptions = {
    title: props.title , // Default expansion size
    expand: props.expand || "sm", // Default expansion size
    defaultMenuDrop: "end", // Default dropdown menu drop direction
    drawerMenuDrop: "bottom", // Drawer menu drop direction
    drawerProps: {
      style: { left: 0, right: 0 }, // Drawer styles
      className: "", // Drawer class
    },
    // Treedown Node and Item templates
    model: {
      // Function to render an element for each node
      Element: (item) => {
        return (
          <>
            {item.children ? (
              // If node has children, render TreedownButton
              <TreedownButton title={item.key}>{item.children}</TreedownButton>
            ) : (
              // If node has no children, render Dropdown.Item
              <Dropdown.Item>{item.key}</Dropdown.Item>
              // <TreedownItem title={item.key}/> Also valid
            )}
          </>
        );
      },
      // Function to render the Drawer
      Drawer: (title, treedownNode) => {
        return (
          <>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>{treedownNode}</Offcanvas.Body>
          </>
        );
      },
    },
  };

  // State to manage options and data for the component
  const [options, setOptions] = useState(() =>
    deepMerge(defaultOptions, props.options || {})
  );

  
  const [data, setData] = useState( props.data);
  // State to manage children, screen size, and drawer visibility
  const [children, setChildren] = useState([]);
  const screen = useScreen();
  const [drawerExpanded, setDrawerExpanded] = useState(false);
  const [drawerEnabled, setDrawerEnabled] = useState(false);

  // Functions to control drawer visibility
  const collapseDrawer = () => setDrawerExpanded(false);
  const expandDrawer = () => setDrawerExpanded(true);
  const toggleDrawer = () => setDrawerExpanded((p) => !p);

  // Functions to initialize drawer and dropdown behaviors
  const initializeDrawer = () => {
    expandDrawer();
    setOptions((p) => ({ ...p, behaviour: "drawer" }));
  };
  const initializeDropdown = () => {
    setOptions((p) => ({ ...p, behaviour: "default" }));
  };

  const setTitle = (value) => {
    setOptions((p) => ({ ...p, title: value }));
  };
  // Expose functions and state to external components using the ref
  useExpose(ref, {
    self: {
      data,
      setData,
      options,
      setOptions 
    },
    setTitle,
    title:options.title,
    collapseDrawer,
    expandDrawer,
    toggleDrawer,
  });

  // Generate children based on provided data
  const generateDataChildren = (data) => {
    if (!data) {
      return null;
    }

    return data.map((item, index) => {
      // Check if the item has children
      const hasChildren =
        Array.isArray(item.children) && item.children.length > 0;

      // Render the element for each item
      return (
        <React.Fragment key={index}>
          {options.model.Element({
            ...item,
            children: hasChildren ? generateDataChildren(item.children) : null,
          })}
        </React.Fragment>
      );
    });
  };

  // Title check
  useEffect(() => {
    if(!props.title){
      console.error("Treedown requires a title prop.")
    }
  }, [props]);
  // Determine if drawer is enabled based on screen size
  useEffect(() => {
    if (screen && screen.size) {
      setDrawerEnabled(!shouldExpand(screen, options.expand));
    }
  }, [screen && screen.size]);

  // Set children based on provided data or children prop
  useEffect(() => {
    if (props.data) {
      setChildren(generateDataChildren(props.data));
    } else if (props.children) {
      setChildren(props.children);
    }
  }, [props.children, props.data]);

  // Render Treedown components based on conditions
  return ( 
    <TreedownContext.Provider
    
      value={{
        options,
        setOptions,
        data,
        setData,
        collapseDrawer,
        drawerExpanded,
      }}
    >
      {/* Render TreedownButton for default behavior */}
      {children && !drawerEnabled && (
        <TreedownButton
          root={"true"}
          onClick={initializeDropdown}
            ref={ref}
          {...props}
          title={options.title}
          className={`ioutil-treedown ${props.className || ""}`}
        >
          {children}
        </TreedownButton>
      )}

      {/* Render TreedownButton for drawer behavior */}
      {children && drawerEnabled && (
        <TreedownButton
          root={"true"}
          onClick={initializeDrawer}
          ref={ref}
          {...props}
          title={options.title}
          className={`ioutil-treedown ioutil-treedown-hidemenu ${
            props.className || ""
          }`}
        />
      )}

      {/* Render DrawerWrapper */}
      <DrawerWrapper title={props.title}>{children}</DrawerWrapper>
    </TreedownContext.Provider>
    
  );
});

 
  
  Treedown.displayName = 'Treedown';
export default Object.assign(Treedown, {
   Button: TreedownButton,
   Item: TreedownItem,
   Context:TreedownContext
});
 
 