import React from "react";
// import React, { useRef, useState, useEffect } from "react";
// import playButton from "../assets/images/play.png";
import videoImage from "../assets/images/video-image.png";
// import rebelVideo from "../assets/rebel-intro.mp4";

const VideoSection = () => {
  // const videoRef = useRef(null);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const handlePlayPause = () => {
  //   const video = videoRef.current;
  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
  // };

  // useEffect(() => {
  //   const video = videoRef.current;
  //   const handleVideoStateChange = () => {
  //     setIsPlaying(!video.paused);
  //   };
  //   video.addEventListener("play", handleVideoStateChange);
  //   video.addEventListener("pause", handleVideoStateChange);
  //   return () => {
  //     video.removeEventListener("play", handleVideoStateChange);
  //     video.removeEventListener("pause", handleVideoStateChange);
  //   };
  // }, []);

  return (
    <div className="">
      {/* <div className="px-6 md:px-12 lg:px-16 pt-48 md:pt-40 lg:pt-32 xl:pt-0 2xl:pt-0 pb-12 lg:pb-12 homepage-container mx-auto">
        <div style={{ position: "relative" }}>
          <video
            className="rounded-[10px]"
            ref={videoRef}
            src={`${rebelVideo}#t=0.1`}
            type="video/mp4"
            controls
            width="100%"
          />
          {(!isPlaying && (
            <button
              onClick={handlePlayPause}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              <img
                src={playButton}
                alt="play"
                className="w-[24px] md:w-[40px] lg:w-[50px] h-auto -mt-4 md:-mt-6 lg:mt-0"
              />
            </button>
          )) || (
            <button
              onClick={handlePlayPause}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              <div className="cursor-pointer">{""}</div>
            </button>
          )}
        </div>
      </div> */}
      <div className="px-6 md:px-12 lg:px-16 py-16 homepage-container mx-auto">
        <img
          src={videoImage}
          alt="video"
          className="w-[100%] lg:w-[70%] mx-auto"
        />
      </div>
    </div>
  );
};

export default VideoSection;
