import React, { useEffect } from 'react';

/**
 * useExpose - A custom effect to enhance functional components by combining a static node object
 * with additional exposed elements.
 * NOTE: be careful not to overwrite components default attributes or internal keys, for example style
 *
 * @param {React.RefObject} ref - Reference object of the component.
 * @param {Object} exposed - Additional elements to be exposed on the component.
 */
const useExpose = (ref, exposed={}) => {
  useEffect(() => {
    /**
     * applyExposedProperties - Applies additional exposed properties to the component's static node.
     */
    const applyExposedProperties = () => {
      if (ref && ref.current) {
        // Get the component's base props
        const baseProperties = Object.values(ref.current)[0].stateNode;
        //  baseProperties.props = Object.values(ref.current)[1];

        // Additional exposed properties
        for (const key in exposed) {
          if (exposed.hasOwnProperty(key)) {
            baseProperties[key] = exposed[key];
          }
        }

        // Set the combined properties on ref.current
        
        ref.current = baseProperties;
      }
    };

    // Apply the exposed properties
    applyExposedProperties();

    // Cleanup logic (if needed)
    return () => {
      // Cleanup logic
   //   console.log('Cleanup function executed');
    };
  }, [ref, exposed]);
};

export default useExpose;
// // Usage example in a functional component
// const MyComponent = () => {
//   const myRef = React.useRef(null);

//   // Exposed properties
//   const exposed = {
//     a: () => {
//       console.log(1);
//     },
//   };

//   // Apply the useExpose effect
//   useExpose(myRef, exposed);

//   return (
//     <div>
//       {/* Your component JSX here */}
//     </div>
//   );
// };

// export default MyComponent;
