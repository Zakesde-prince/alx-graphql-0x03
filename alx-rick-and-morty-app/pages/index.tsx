import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import ErrorProneComponent from "../components/ErrorProneComponent";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      {/* Wrap the component in ErrorBoundary */}
      <ErrorBoundary>
        <ErrorProneComponent />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
