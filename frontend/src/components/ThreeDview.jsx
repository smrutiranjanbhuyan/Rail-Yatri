import React from 'react';
import {useSelector} from 'react-redux'
const ThreeDview = () => {
  const routesUrl=useSelector((state)=>state.routesUrl.url)
  return (
    <div className=" flex justify-center items-center h-screen w-screen bg-gray-100">
      <iframe
        title="Railway Station"
        className="w-full h-full border-0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src={routesUrl}
      ></iframe>
    </div>
  );
};

export default ThreeDview;