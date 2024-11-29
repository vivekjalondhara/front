import React, { useState, useEffect } from "react";

const PageLoader = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative flex justify-center items-center w-20 h-20">
          <div className="absolute border-4 border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
