
import React, { createContext, useState, forwardRef, useContext, useEffect,createRef, useRef } from 'react';
 
 
import useExpose from '../../../hooks/useExpose';

  
 
const FlexDivider = forwardRef(({ style, ...props }, ref) => {
  // const dividerRef = useRef(null);
  const [dragging, setDragging] = useState(false);


  const [startPosition, setStartPosition] = useState(0);
  const [startSize, setStartSize] = useState(0);
  const [previousSize, setPreviousSize] = useState(0); 
 
 const direction =  props.parentNode.current.self.state.direction
  const getStartSize = (sourceVector) => {
    if (ref.current && ref.current.previousSibling) {
      setStartSize(ref.current.previousSibling[sourceVector]);
      setPreviousSize(ref.current.previousSibling[sourceVector]);
    }
  };

  const handleMouseDown = (e) => {

    getStartSize(direction=='row'?'clientWidth':'clientHeight');
    setDragging(true);
    setStartPosition(direction=='row'?e.clientX:e.clientY); 
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const positionValue =  direction=='row'?e.clientX:e.clientY;
      const deltaPosition = positionValue - startPosition;
      const newPreviousSize = startSize + deltaPosition;
      //const newNextSize = startSize - deltaPosition;

      setPreviousSize(newPreviousSize);

      const previousElement = ref.current.previousSibling;
      if (previousElement) {
        previousElement.style[direction=='row'?'width':'height'] = `${newPreviousSize}px`;
      }


   
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // useEffect(() => {
     
  //  console.log(' Divider has detected a change in the direction ',props.parentNode.current.self.state.direction)
 
  // },[props.parentNode.current,props.parentNode.current.self.state.direction]);

  useEffect(() => {
     
    console.log(' Divider has detected a change in the direction ',props.parentNode.current.self.state.direction)
  
   },[ref.current,props.parentNode.current,props.parentNode.current.self.state.direction]);

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);


  useEffect(() => {
    const parent = ref.current.parentNode;
    // accesing parent if necessary
    // console.log('dividerRef',dividerRef)
    // console.log('dividerRef parent',parent)
  }, [ref]);
  return (
    <div
      ref={(node) => {
        ref.current = node;
      }}
      style={{ ...style, cursor: direction=='row'?'col-resize':'row-resize', [direction=='row'?'width':'height']: '4px', backgroundColor: 'gray' }}
      onMouseDown={handleMouseDown}
     
      {...Object.fromEntries(Object.entries(props).filter(([key]) => key === key.toLowerCase()))} 
    />
  );
});
export default FlexDivider;
