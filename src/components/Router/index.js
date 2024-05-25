 
import React, { useState, useEffect } from 'react';
 /**
 * Router Component
 * 
 * @param {Object} props - The properties object.
 * @param {string} props.basename - The base path of the application.
 * @param {Array} props.routes - The array of route objects.
 * @param {Function} [props.ErrorPage] - Optional custom error page component.
 * 
 * @example
 * const routes = [
 *   { path: '/', element: HomePage },
 *   { path: '/about', element: AboutPage },
 *   // other routes
 * ];
 * 
 * <Router basename="/myapp" routes={routes} ErrorPage={CustomErrorPage} />
 */

const Router = ({ basename, routes, ErrorPage }) => {
  const [currentPath, setCurrentPath] = useState(getCurrentPath()); // Initialize state with the current path

  // Default error page component
  const ErrorPageDefault = ({ error }) => {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center">
              <h1 className="display-1">{error.code}</h1>
              <h2 className="mb-4">{error.exception}</h2>
              <p className="lead">{error.message}</p>
              {/* optionals */}
              {/* <p className="text-muted">Pathname: {window.location.pathname}</p> */}
              {/* <a href="/" className="btn btn-primary mt-4">Go to Homepage</a> */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Default error details
  const notFoundError = { code: '404', exception: "Not found.", message: "Ooops! Wrong url." };

  // Effect to handle browser's back/forward navigation
  useEffect(() => {
    const handlePopstate = () => {
      setCurrentPath(getCurrentPath());
    };

    window.addEventListener('popstate', handlePopstate); // Add event listener for popstate

    return () => {
      window.removeEventListener('popstate', handlePopstate); // Clean up event listener on component unmount
    };
  }, []);

  // Function to get the current path
  function getCurrentPath() {
    const pathname = window.location.pathname;
    let trimmedPath = pathname.startsWith(basename) ? pathname.slice(basename.length) : pathname;
    trimmedPath = (trimmedPath) || '/';
    trimmedPath = trimmedPath.startsWith('/') ? trimmedPath : '/' + trimmedPath;
    return trimmedPath;
  }

  // Remove trailing slash if present and path length is greater than 1
  if (currentPath.length > 1 && currentPath.endsWith('/')) setCurrentPath(currentPath.substring(0, currentPath.length - 1));

  // Find the route that matches the current path
  const currentRoute = routes.find(route => route.path === currentPath);

  // Determine the component to render based on the current route
  const ElementToRender = currentRoute ? currentRoute.element :
    ErrorPage ? () => (<ErrorPage error={notFoundError} />) :
      () => (<ErrorPageDefault error={notFoundError} />);

  // Render the determined component
  return (
    <div>
      <ElementToRender basename={basename} currentPath={currentPath} />
    </div>
  );
};

export default Router; 

 