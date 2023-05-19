import React, { useRef, useState, useEffect } from "react";
import playButton from "../assets/images/play.png";
import rebelVideo from "../assets/videos/showrealcommercial.mp4";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const handleVideoStateChange = () => {
      setIsPlaying(!video.paused);
    };
    video.addEventListener("play", handleVideoStateChange);
    video.addEventListener("pause", handleVideoStateChange);
    return () => {
      video.removeEventListener("play", handleVideoStateChange);
      video.removeEventListener("pause", handleVideoStateChange);
    };
  }, []);

  return (
    <div className="px-6 md:px-20 lg:px-40 lg:px-60 pt-24 md:pt-28 lg:pt-20 xl:pt-10 2xl:pt-0 pb-12 lg:pb-12 homepage-container mx-auto">
      <div style={{ position: "relative" }}>
        <video
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
              className="w-[16px] md:w-[25px] lg:w-[35px] h-auto -mt-4 md:-mt-6 lg:mt-0"
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
    </div>
  );
};

export default VideoSection;
