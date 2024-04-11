import React, { useState, useEffect, forwardRef, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup } from 'react-bootstrap';
//import useExpose from '@ioutil/ react/lib/hooks/useExpose';
import useExpose from "../../hooks/useExpose";
// import { deepClone, deepMerge } from '@ioutil/ node/lib/common/objects';
import deepMerge from '@iorp/node-aid/src/object/deepMerge';
import deepClone from '@iorp/node-aid/src/object/deepClone';

import TreeviewContext from './TreeviewContext';
// import set from '@ioutil/ node/lib/common/arrays/set';
// import get from '@ioutil/ node/lib/common/arrays/get';

//import recurse from '@ioutil/ node/lib/common/arrays/recurse';

import arec from '@iorp/node-aid/src/array/arec'; 
import aset from '@iorp/node-aid/src/array/aset';
import aget from '@iorp/node-aid/src/array/aget';



require('./style.css');

/**
 * TreeviewNode Component
 * Represents a node in the treeview hierarchy.
 *
 * @param {Object} props - The properties for the TreeviewNode component.
 * @param {React.Ref} ref - The reference for the component.
 * @returns {React.Component} - The TreeviewNode component.
 */
const TreeviewNode = forwardRef((props, ref) => {
  const { name, title, children, open } = props;
  ref = ref ? ref : React.createRef(ref);

  // Extracting options, data, and toggleNode function from TreeviewContext
  const { options, data, toggleNode } = useContext(TreeviewContext);
  const [nodeProps, setNodeProps] = useState({});

  // Exposing the ref using useExpose
  useExpose(ref, {
    self: {},
  });

  // Warning if name is missing (used for external control)
  useEffect(() => {
    if (!name) console.warn('TreeNode requires a name if you want to control it externally.');
  }, []);

  /**
   * Retrieves the properties for the node from the data state based on the path.
   *
   * @returns {Object} - The properties for the node.
   */
  const getNodeProps = () => {
    const dataProps = aget(data, aget(props, '_.path'));
    return dataProps;
  };

  // Effect to update nodeProps when data changes
  useEffect(() => {
    setNodeProps(getNodeProps());
  }, [data]);

  /**
   * Renders the TreeviewNode component.
   *
   * @returns {React.Component|null} - The rendered component or null.
   */
  return (
    nodeProps && (
      <div ref={ref}>
        {options.model.Node(
          { ...nodeProps },
          React.Children.map(children, (child, index) => React.cloneElement(child, { key: index })),
          () => {
            toggleNode(nodeProps._.path);
          },
          nodeProps._ && nodeProps._.open
        )}
      </div>
    )
  );
});

/**
 * Treeview Component
 * Represents a treeview hierarchy with expandable/collapsible nodes.
 *
 * @param {Object} props - The properties for the Treeview component.
 * @param {React.Ref} ref - The reference for the component.
 * @returns {React.Component} - The Treeview component.
 */
const Treeview = forwardRef((props, ref) => {
  ref = ref ? ref : React.createRef(ref);

  // Default options for Treeview component
  const defaultOptions = {
    model: {
      Node: (props, children, toggle, isOpen) => {
        return (
          <div {...props}>
            <a onClick={toggle}>{isOpen ? '[-]' : '[+]'}</a>
            {props.title}
            {isOpen && children && <div style={{ marginLeft: '20px' }}>{children}</div>}
          </div>
        );
      },
    },
  };

  // State for options, data, children, and ready
  const [options, setOptions] = useState(() => deepMerge(defaultOptions, props.options || {}));
  const [data, setData] = useState(props.data || []);
  const [children, setChildren] = useState([]);
  const [ready, setReady] = useState();

  /**
   * Applies additional information to each item in the data.
   *
   * @param {Array} data - The data array.
   * @returns {Array} - The modified data array.
   */
  const applyDataParametry = (data) => {
    return arec(
      data,
      (item, itemPath) => {
        return {
          ...item,
          key: item.name,
          _: {
            ...item._,
            level: itemPath.length - 1,
            path: itemPath,
          },
        };
      },
      { idKey: 'name' }
    );
  };

  /**
   * Converts data into TreeviewNode components.
   *
   * @param {Array} data - The data array.
   * @param {number} [level=0] - The level of the current data.
   * @returns {Array} - The array of TreeviewNode components.
   */
  const childrenFromData = (data, level = 0) => {
    return data.map((item) => (
      <TreeviewNode {...item} key={item.name} title={item.title || item.name} path={[item.key]} level={level}>
        {item.children && childrenFromData(item.children, level + 1)}
      </TreeviewNode>
    ));
  };

  /**
   * Converts children into data.
   *
   * @param {React.Children} children - The children to be converted.
   * @returns {Array} - The array of data.
   */
  const dataFromChildren = (children) => {
    if (!children || children.length === 0) {
      return [];
    }

    return React.Children.map(children, (child) => {
      const { children: nestedChildren, ...rest } = child.props;
      const newData = { ...rest, children: dataFromChildren(nestedChildren) };
      return newData;
    });
  };

  /**
   * Writes a value to a specific node in the data.
   *
   * @param {Array} path - The path to the node in the data.
   * @param {*} value - The value to be written.
   */
  const writeNode = (path, value) => {
    aset(data, path, value);
    setData(deepClone(data));
  };

  /**
   * Reads the value of a specific node in the data.
   *
   * @param {Array} path - The path to the node in the data.
   * @returns {*} - The value of the node.
   */
  const readNode = (path) => {
    return aget(data, path);
  };

  /**
   * Expands or collapses a specific node in the data.
   *
   * @param {Array|string} path - The path to the node in the data or the key of the node.
   * @param {boolean|string} [value=true] - The value to set for the "open" property or 'toggle' to toggle the current value.
   */
  const expandNode = (path, value = true) => {
    if (value == 'toggle') {
      return toggleNode(path);
    }
    if (typeof path === 'string') path = path.split('.');

    if (value == true) {
      for (let i = 0; i < path.length; i++) {
        var ancestorPath = path.slice(0, i + 1);
        ancestorPath = [...ancestorPath, '_', 'open'];
        writeNode(ancestorPath, value);
      }
    } else {
      path = [...path, '_', 'open'];
      writeNode(path, value);
    }
  };

  /**
   * Toggles the "open" property of a specific node in the data.
   *
   * @param {Array|string} path - The path to the node in the data or the key of the node.
   */
  const toggleNode = (path) => {
    if (typeof path === 'string') path = path.split('.');
    path = [...path, '_', 'open'];
    aset(data, path, !aget(data, path));
    setData(deepClone(data));
  };

  // const toggleNode = (path) => {
  //   expandNode(path,!get(path))
  // };


  /**
   * Expands or collapses all nodes in the data.
   *
   * @param {boolean|string} [value=true] - The value to set for the "open" property of all nodes or 'toggle' to toggle the current values.
  //  * @param {function|null} [onChange=null] - The callback receives the status so it can manage icons when using toggle  
   */
  const expandAll = (value = true) => { // ,onChange=null
    if (value == 'toggle') {
      var anyClosed = false;
      arec(data, (item, itemPath) => {
        if (!item._.open) anyClosed = true;
      }); 
      value = anyClosed ? true : false;

    }
    const newData = arec(data, (item, itemPath) => {
      return { ...item, _: { ...item._, open: value } };
    });
    setData(deepClone(newData));

 //   if( typeof onChange == 'function')  onChange(value);
  };

  // Exposing methods and state using useExpose
  useExpose(ref, {
    self: {
      options,
      setOptions,
      data,
      setData,
    },
    writeNode,
    readNode,
    expandNode,
    toggleNode,
    expandAll,
  });

  // Effect to load data and children when the component mounts or when data/children props change
  useEffect(() => {
    if (props.data && props.data.length > 0) {
      const newData = applyDataParametry(props.data);
      setData(newData);
      setChildren(childrenFromData(newData));
    } else if (props.children) {
      const childrenData = dataFromChildren(props.children);
      const newData = applyDataParametry(childrenData);
      setData(newData);
      setChildren(childrenFromData(newData));
    }
    setReady(true);
  }, [props.children, props.data]);

  // Rendering the Treeview component
  return (
    ready && (
      <div ref={ref} {...props}>
        <TreeviewContext.Provider value={{ options, setOptions, data, setData, ready, toggleNode }}>
          {children}
        </TreeviewContext.Provider>
      </div>
    )
  );
});

// Display name for the Treeview component
Treeview.displayName = 'Treeview';

// Exporting the Treeview component
export default Object.assign(Treeview, {
  Node: TreeviewNode,
});
