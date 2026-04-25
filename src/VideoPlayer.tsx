import { useEffect, useRef } from "react";
import { socket } from "./socket";
// npm install socket.io-client
const ROOM_ID = "room123";

export default function VideoPlayer() {
  useEffect(() => {
    const callServer = () => {
      fetch("https://simple-watchparty-server.onrender.com/")
        .then(res => res.json())
        .then(data => {
          console.log("Server response:", data);
        })
        .catch(err => {
          console.error("Error calling server:", err);
        });
    };

    // call immediately once
    callServer();

    // then repeat every 2 minutes (120000 ms)
    const interval = setInterval(callServer, 120000);

    // cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  const isSyncing = useRef(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    socket.emit("join_room", ROOM_ID);

    socket.on("video_event", ({ action, time }) => {
      const video = videoRef.current;
      if (!video) return;

      isSyncing.current = true;

      if (action === "play") {
        video.currentTime = time;
        video.play();
      }

      if (action === "pause") {
        video.currentTime = time;
        video.pause();
      }

      if (action === "seek") {
        video.currentTime = time;
      }

      setTimeout(() => {
        isSyncing.current = false;
      }, 100);
    });

    socket.on("sync_state", ({ action, time }) => {
      const video = videoRef.current;
      if (!video) return;

      isSyncing.current = true;

      video.currentTime = time;
      if (action === "play") video.play();
      else video.pause();

      setTimeout(() => {
        isSyncing.current = false;
      }, 100);
    });
  }, []);

  const sendEvent = (action: string) => {
    if (isSyncing.current) return; 

    const video = videoRef.current;
    if (!video) return;

    socket.emit("video_event", {
      roomId: ROOM_ID,
      action,
      time: video.currentTime,
    });
  };

  return (
    <video
      ref={videoRef}
      style={{ width: "100%", maxWidth: "100%" }}
      controls
      onPlay={() => sendEvent("play")}
      onPause={() => sendEvent("pause")}
      onSeeked={() => sendEvent("seek")}
    >
      <source src="/video.mp4" type="video/mp4" />
    </video>
  );
}