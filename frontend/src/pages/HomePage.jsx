import React from "react";

const HomePage = () => {
  const ButtonClicked = () => {
    console.log('Clicked the button in the homePage');
    
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-base-100 text-base-content">
      <button className="btn btn-primary" onClick={ButtonClicked}>
        Button
      </button>
    </div>
  );
};

export default HomePage;
