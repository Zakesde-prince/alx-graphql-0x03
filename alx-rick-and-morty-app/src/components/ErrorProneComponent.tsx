import React, { useEffect, useState } from "react";

const ErrorProneComponent: React.FC = () => {
  const [throwError, setThrowError] = useState(false);

  // Only throw error on client-side, after component mounts
  useEffect(() => {
    setThrowError(true);
  }, []);

  if (throwError) {
    throw new Error("This is a test error!");
  }

  return <div>Component loaded safely. ErrorBoundary can catch errors.</div>;
};

export default ErrorProneComponent;
