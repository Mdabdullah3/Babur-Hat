import React from 'react';

const LoadingState = () => {
    return (
        <div className="w-full h-full flex items-center justify-center ">
        <div>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      </div>
    );
};

export default LoadingState;