import React, { useState, useEffect } from 'react';

function useFile(src) {
  const [fileContent, setFileContent] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFile() {
      try {
        setIsLoading(true);
        // Fetch the text file using the provided URL
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error('Failed to fetch file');
        }
        // Get the text content
        const text = await response.text();
        // Set the content to state
        setFileContent(text);
        // Set the file URL
        setFileUrl(response.url);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    // Call the fetchFile function when the component mounts
    fetchFile();

    // Cleanup function (optional)
    return () => {
      // Cleanup tasks, if any
    };
  }, [src]); // Include 'url' in the dependency array to fetch when it changes

  return { fileContent, fileUrl, isLoading, error };
}

export default useFile;
