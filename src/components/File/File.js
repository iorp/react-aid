import React from 'react';
import useFile from '../../hooks/useFile'; // Assuming the hook file is named useFile.js

function File({src}) {
  const { fileContent, fileUrl, isLoading, error } = useFile(src);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {/* <h2>File Content:</h2> */}
      {/* Render the file content preserving line breaks */}
      <pre style={{ whiteSpace: 'pre-wrap' }}>{fileContent}</pre>
      {/* Render the file URL */}
      <p>File URL: {fileUrl}</p>
    </div>
  );
}

export default File;