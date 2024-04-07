 
import React, { useState, useEffect } from 'react';
 
const Router = ({basename,routes}) => {
 const NotFound = () => (
     <div>
       <h1>404 - Not Found</h1>
       <p>Sorry, the page you are looking for does not exist.</p>
     </div>
   ); 


    
 const [currentPath, setCurrentPath] = useState(getCurrentPath());

 




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
   const trimmedPath = pathname.startsWith(basename) ? pathname.slice(basename.length) : pathname;
   return trimmedPath || '/';
 } 
 const currentRoute = routes.find(route => route.path === currentPath);
 const ElementToRender = currentRoute ? currentRoute.element : NotFound;

 return (
   <div>
     <ElementToRender />
   </div>
 );
};
export default Router; 