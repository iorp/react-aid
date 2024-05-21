import React, { useState, useEffect } from 'react';

/**
 * HotImporter component dynamically imports elements and scripts into the document.
 * @param {Object} props - The props of the component.
 * @param {Array} props.elements - The elements to be imported.
 * @param {function} props.onReady - Optional callback when last script has loaded.
 * @param {*} props.children - The children components.
 * @returns {*} The rendered component.
 */
function HotImport({ elements,onReady, children }) {
  const [scriptsReady, setScriptsReady] = useState(false);
 
  useEffect(() => {
    const addElement = (parent, element) => {
      const newElement = document.createElement(element.tag);
      Object.entries(element).forEach(([key, value]) => {
        if (key !== 'tag') {
          newElement.setAttribute(key, value);
        }
      });
      if (parent === 'head') {
        document.head.appendChild(newElement);
      } else if (parent === 'body') {
        document.body.appendChild(newElement);
      }
    };
 
    const loadHeadElements = () => {
      elements.head.forEach(element => addElement('head', element));
    };
 
    const loadBodyScripts = async () => {
      let loadedScriptCounter = 0 ; 
    if ((elements.body||[]).length==0) {
      setScriptsReady(true);
      if(typeof onReady=='function')  onReady();
    }
     
      for (const element of elements.body) {
        if (element.tag === 'script') {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = element.src;
            script.onload = (e) => {
              resolve();
              loadedScriptCounter++;
              // when last 
             //  console.log(loadedScriptCounter,(elements.body||[]).length)
              if (loadedScriptCounter==(elements.body||[]).length){
                // setTimeout(() => {
                setScriptsReady(true)
              if(typeof onReady=='function')  onReady();
       
            // }, 1);
              }
              // also run the onload
              if(typeof element.onload=='function'){
                element.onload(e);
              }
             };
            script.onerror = () => {
              console.error('Failed to load script:', element.src);
              reject();
            };
            document.body.appendChild(script);
          });
        } else {
          addElement('body', element);
        }
      }
    };
 
    loadHeadElements();
    loadBodyScripts();
 
    return () => {
      
      // Cleanup function
      // elements.head.forEach(element => {
      //   const existingElement = document.querySelector(element.tag);
      //   if (existingElement) {
      //     existingElement.remove();
      //   }
      // });
      // elements.body.forEach(element => {
      //   const existingElement = document.querySelector(element.tag);
      //   if (existingElement) {
      //     existingElement.remove();
      //   }
      // });
    };
  }, [elements]);
 
  return  children ;
   return scriptsReady ? children : null;
 }
 

export default HotImport;
