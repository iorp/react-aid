 
import React, { useState, useEffect } from 'react';
 
const Router = ({basename,routes}) => {

  const [currentPath, setCurrentPath] = useState(getCurrentPath());


 const NotFound = (props) => (
     <div>
       <h1>404 - Not Found</h1>
       <p>path: {props.currentPath}</p>
       <p>base: {props.basename}</p>
       <p>Sorry, the page you are looking for does not exist.</p>
     </div>
   ); 


    
 




 useEffect(() => {
   const handlePopstate = () => {
     setCurrentPath(getCurrentPath());
   };

   window.addEventListener('popstate', handlePopstate);

   return () => {
     window.removeEventListener('popstate', handlePopstate);
   };
 }, []);

 function getCurrentPath() {
   const pathname = window.location.pathname;
   // const basename = '/TrueGrains/template-super-router-react/build'; // Replace with your basename
   let trimmedPath = pathname.startsWith(basename) ? pathname.slice(basename.length) : pathname;

    trimmedPath = ( trimmedPath )|| '/';
   trimmedPath =trimmedPath.startsWith('/')? trimmedPath :'/'+trimmedPath;
  return trimmedPath
 } 
 // automatically remove last / if it endswith  @todo review this and take ? possible parameteris in count
if(currentPath.length>1 && currentPath.endsWith('/')) setCurrentPath(currentPath.substring(0,currentPath.length-1));
 
 const currentRoute = routes.find(route => route.path === currentPath);

 const ElementToRender = currentRoute ? currentRoute.element : NotFound;

 return (
   <div>
     <ElementToRender basename={basename}  currentPath={currentPath}   />
   </div>
 );
};
export default Router; 