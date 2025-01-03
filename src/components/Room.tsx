// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { YouTubePlayer } from "./YouTubePlayer";
// import { ScrollArea } from "@/components/ui/scroll-area";

// interface QueueItem {
//   id: string;
//   title: string;
//   url: string;
// }

// export function Room() {
//   const { roomId } = useParams();
//   const [queue, setQueue] = useState<QueueItem[]>([]);
//   const [currentUrl, setCurrentUrl] = useState("");
//   const [messages, setMessages] = useState<string[]>([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [newSong, setNewSong] = useState("");

//   const addToQueue = async () => {
//     if (newSong.trim()) {
//       const videoId = extractVideoId(newSong);
//       if (videoId) {
//         const videoTitle = await fetchVideoTitle(videoId);
//         const newItem: QueueItem = {
//           id: videoId,
//           title: videoTitle || `Song ${queue.length + 1}`,
//           url: newSong,
//         };

//         setQueue((prevQueue) => [...prevQueue, newItem]);
//         setNewSong("");

//         if (!currentUrl) {
//           setCurrentUrl(newItem.url);
//         }
//       } else {
//         console.error("Invalid YouTube URL");
//       }
//     }
//   };

//   const extractVideoId = (url: string): string | null => {
//     try {
//       const urlObj = new URL(url);

//       if (urlObj.hostname.includes("youtube.com")) {
//         return urlObj.searchParams.get("v");
//       } else if (urlObj.hostname.includes("youtu.be")) {
//         return urlObj.pathname.slice(1);
//       } else if (urlObj.hostname.includes("youtube-nocookie.com")) {
//         return urlObj.pathname.split("/").pop();
//       }

//       return null;
//     } catch (err) {
//       console.error("Invalid URL:", err);
//       return null;
//     }
//   };

//   const fetchVideoTitle = async (videoId: string): Promise<string | null> => {
//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=YOUR_YOUTUBE_API_KEY`
//       );
//       const data = await response.json();
//       console.log(data);
//       return data.items?.[0]?.snippet?.title || null;
//     } catch (error) {
//       console.error("Failed to fetch video title:", error);
//       return null;
//     }
//   };

//   const sendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, `User: ${newMessage}`]);
//       setNewMessage("");
//     }
//   };

//   const onVideoEnd = () => {
//     if (queue.length > 1) {
//       const newQueue = queue.slice(1);
//       setQueue(newQueue);
//       setCurrentUrl(newQueue[0].url);
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-1 flex flex-col md:flex-row gap-4 p-4">
//         <div className="flex-1">
//           <div className="rounded-lg overflow-hidden bg-black aspect-video">
//             {currentUrl && (
//               <YouTubePlayer url={currentUrl} onEnded={onVideoEnd} />
//             )}
//           </div>
//           <div className="mt-4 flex gap-2">
//             <Input
//               type="text"
//               placeholder="Paste YouTube URL"
//               value={newSong}
//               onChange={(e) => setNewSong(e.target.value)}
//             />
//             <Button onClick={addToQueue}>Add to Queue</Button>
//           </div>
//         </div>

//         <div className="w-full md:w-80 flex flex-col gap-4">
//           <div className="flex-1 bg-muted rounded-lg p-4">
//             <h3 className="font-bold mb-2">Queue</h3>
//             <ScrollArea className="h-[200px]">
//               {queue.map((item, index) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center gap-2 p-2 hover:bg-accent rounded"
//                 >
//                   <span className="text-sm text-muted-foreground">
//                     {index + 1}.
//                   </span>
//                   <span className="flex-1 truncate">{item.title}</span>
//                 </div>
//               ))}
//             </ScrollArea>
//           </div>

//           <div className="flex-1 bg-muted rounded-lg p-4">
//             <h3 className="font-bold mb-2">Chat</h3>
//             <ScrollArea className="h-[200px] mb-4">
//               {messages.map((msg, i) => (
//                 <div key={i} className="p-2">
//                   {msg}
//                 </div>
//               ))}
//             </ScrollArea>
//             <div className="flex gap-2">
//               <Input
//                 type="text"
//                 placeholder="Type a message"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <Button onClick={sendMessage}>Send</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { YouTubePlayer } from "./YouTubePlayer";
// import { ScrollArea } from "@/components/ui/scroll-area";

// interface QueueItem {
//   id: string;
//   title: string;
//   url: string;
// }

// export function Room() {
//   const { roomId } = useParams();
//   const [queue, setQueue] = useState<QueueItem[]>([]);
//   const [currentUrl, setCurrentUrl] = useState("");
//   const [messages, setMessages] = useState<string[]>([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [newSong, setNewSong] = useState("");

//   const addToQueue = async () => {
//     if (newSong.trim()) {
//       const videoId = extractVideoId(newSong);
//       if (videoId) {
//         const videoTitle = await fetchVideoTitle(videoId);
//         const newItem: QueueItem = {
//           id: videoId,
//           title: videoTitle || `Song ${queue.length + 1}`,
//           url: newSong,
//         };

//         setQueue((prevQueue) => [...prevQueue, newItem]);
//         setNewSong("");

//         if (!currentUrl) {
//           setCurrentUrl(newItem.url);
//         }
//       } else {
//         console.error("Invalid YouTube URL");
//       }
//     }
//   };

//   const extractVideoId = (url: string): string | null => {
//     try {
//       const urlObj = new URL(url);

//       if (urlObj.hostname.includes("youtube.com")) {
//         return urlObj.searchParams.get("v");
//       } else if (urlObj.hostname.includes("youtu.be")) {
//         return urlObj.pathname.slice(1);
//       } else if (urlObj.hostname.includes("youtube-nocookie.com")) {
//         return urlObj.pathname.split("/").pop();
//       }

//       return null;
//     } catch (err) {
//       console.error("Invalid URL:", err);
//       return null;
//     }
//   };

//   const fetchVideoTitle = async (videoId: string): Promise<string | null> => {
//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=YOUR_YOUTUBE_API_KEY`
//       );
//       const data = await response.json();
//       return data.items?.[0]?.snippet?.title || null;
//     } catch (error) {
//       console.error("Failed to fetch video title:", error);
//       return null;
//     }
//   };

//   const sendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, `User: ${newMessage}`]);
//       setNewMessage("");
//     }
//   };

//   const onVideoEnd = () => {
//     if (queue.length > 1) {
//       const newQueue = queue.slice(1); // Remove the first video
//       setQueue(newQueue); // Update the queue
//       setCurrentUrl(newQueue[0].url); // Play the next video in the queue
//     } else {
//       setCurrentUrl(""); // If no videos are left, clear the current video
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-1 flex flex-col md:flex-row gap-4 p-4">
//         <div className="flex-1">
//           <div className="rounded-lg overflow-hidden bg-black aspect-video">
//             {currentUrl && (
//               <YouTubePlayer url={currentUrl} onEnded={onVideoEnd} />
//             )}
//           </div>
//           <div className="mt-4 flex gap-2">
//             <Input
//               type="text"
//               placeholder="Paste YouTube URL"
//               value={newSong}
//               onChange={(e) => setNewSong(e.target.value)}
//             />
//             <Button onClick={addToQueue}>Add to Queue</Button>
//           </div>
//         </div>

//         <div className="w-full md:w-80 flex flex-col gap-4">
//           <div className="flex-1 bg-muted rounded-lg p-4">
//             <h3 className="font-bold mb-2">Queue</h3>
//             <ScrollArea className="h-[200px]">
//               {queue.map((item, index) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center gap-2 p-2 hover:bg-accent rounded"
//                 >
//                   <span className="text-sm text-muted-foreground">
//                     {index + 1}.
//                   </span>
//                   <span className="flex-1 truncate">{item.title}</span>
//                 </div>
//               ))}
//             </ScrollArea>
//           </div>

//           <div className="flex-1 bg-muted rounded-lg p-4">
//             <h3 className="font-bold mb-2">Chat</h3>
//             <ScrollArea className="h-[200px] mb-4">
//               {messages.map((msg, i) => (
//                 <div key={i} className="p-2">
//                   {msg}
//                 </div>
//               ))}
//             </ScrollArea>
//             <div className="flex gap-2">
//               <Input
//                 type="text"
//                 placeholder="Type a message"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <Button onClick={sendMessage}>Send</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { YouTubePlayer } from "./YouTubePlayer";
// import { ScrollArea } from "@/components/ui/scroll-area";

// interface QueueItem {
//   id: string;
//   title: string;
//   url: string;
// }

// export function Room() {
//   const { roomId } = useParams();
//   const [queue, setQueue] = useState<QueueItem[]>([]);
//   const [currentUrl, setCurrentUrl] = useState<string | null>(null);
//   const [messages, setMessages] = useState<string[]>([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [newSong, setNewSong] = useState("");

//   const addToQueue = async () => {
//     if (newSong.trim()) {
//       const videoId = extractVideoId(newSong);
//       if (videoId) {
//         const videoTitle = await fetchVideoTitle(videoId);
//         const newItem: QueueItem = {
//           id: videoId,
//           title: videoTitle || `Song ${queue.length + 1}`,
//           url: newSong,
//         };

//         setQueue((prevQueue) => [...prevQueue, newItem]);
//         setNewSong("");

//         if (!currentUrl) {
//           setCurrentUrl(newItem.url);
//         }
//       } else {
//         console.error("Invalid YouTube URL");
//       }
//     }
//   };

//   const extractVideoId = (url: string): string | null => {
//     try {
//       const urlObj = new URL(url);

//       if (urlObj.hostname.includes("youtube.com")) {
//         return urlObj.searchParams.get("v");
//       } else if (urlObj.hostname.includes("youtu.be")) {
//         return urlObj.pathname.slice(1);
//       } else if (urlObj.hostname.includes("youtube-nocookie.com")) {
//         return urlObj.pathname.split("/").pop();
//       }

//       return null;
//     } catch (err) {
//       console.error("Invalid URL:", err);
//       return null;
//     }
//   };

//   const fetchVideoTitle = async (videoId: string): Promise<string | null> => {
//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=YOUR_YOUTUBE_API_KEY`
//       );
//       const data = await response.json();
//       return data.items?.[0]?.snippet?.title || null;
//     } catch (error) {
//       console.error("Failed to fetch video title:", error);
//       return null;
//     }
//   };

//   const sendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, `User: ${newMessage}`]);
//       setNewMessage("");
//     }
//   };

//   const onVideoEnd = () => {
//     setQueue((prevQueue) => {
//       const newQueue = prevQueue.slice(1); // Remove the first video
//       if (newQueue.length > 0) {
//         setCurrentUrl(newQueue[0].url); // Play the next video in the queue
//       } else {
//         setCurrentUrl(null); // Clear the player if the queue is empty
//       }
//       return newQueue;
//     });
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-1 flex flex-col md:flex-row gap-4 p-4">
//         <div className="flex-1">
//           <div className="rounded-lg overflow-hidden bg-black aspect-video">
//             {currentUrl ? (
//               <YouTubePlayer url={currentUrl} onEnded={onVideoEnd} />
//             ) : (
//               <div className="flex items-center justify-center h-full text-white">
//                 No video playing
//               </div>
//             )}
//           </div>
//           <div className="mt-4 flex gap-2">
//             <Input
//               type="text"
//               placeholder="Paste YouTube URL"
//               value={newSong}
//               onChange={(e) => setNewSong(e.target.value)}
//             />
//             <Button onClick={addToQueue}>Add to Queue</Button>
//           </div>
//         </div>

//         <div className="w-full md:w-80 flex flex-col gap-4">
//           <div className="flex-1 bg-muted rounded-lg p-4">
//             <h3 className="font-bold mb-2">Queue</h3>
//             <ScrollArea className="h-[200px]">
//               {queue.map((item, index) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center gap-2 p-2 hover:bg-accent rounded"
//                 >
//                   <span className="text-sm text-muted-foreground">
//                     {index + 1}.
//                   </span>
//                   <span className="flex-1 truncate">{item.title}</span>
//                 </div>
//               ))}
//             </ScrollArea>
//           </div>

//           <div className="flex-1 bg-muted rounded-lg p-4">
//             <h3 className="font-bold mb-2">Chat</h3>
//             <ScrollArea className="h-[200px] mb-4">
//               {messages.map((msg, i) => (
//                 <div key={i} className="p-2">
//                   {msg}
//                 </div>
//               ))}
//             </ScrollArea>
//             <div className="flex gap-2">
//               <Input
//                 type="text"
//                 placeholder="Type a message"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <Button onClick={sendMessage}>Send</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { YouTubePlayer } from "./YouTubePlayer";
// import { ScrollArea } from "@/components/ui/scroll-area";

// interface QueueItem {
//   id: string;
//   title: string;
//   url: string;
// }

// export function Room() {
//   const { roomId } = useParams();
//   const navigate = useNavigate();

//   const [queue, setQueue] = useState<QueueItem[]>([]);
//   const [currentUrl, setCurrentUrl] = useState<string | null>(null);
//   const [messages, setMessages] = useState<string[]>([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [newSong, setNewSong] = useState("");

//   // Load queue from localStorage if exists
//   useEffect(() => {
//     const savedQueue = localStorage.getItem(`queue_${roomId}`);
//     if (savedQueue) {
//       setQueue(JSON.parse(savedQueue));
//       setCurrentUrl(JSON.parse(savedQueue)[0]?.url || null);
//     }
//   }, [roomId]);

//   // Save queue to localStorage whenever it changes
//   useEffect(() => {
//     if (roomId) {
//       localStorage.setItem(`queue_${roomId}`, JSON.stringify(queue));
//     }
//   }, [queue, roomId]);

//   const addToQueue = async () => {
//     if (newSong.trim()) {
//       const videoId = extractVideoId(newSong);
//       if (videoId) {
//         const videoTitle = await fetchVideoTitle(videoId);
//         const newItem: QueueItem = {
//           id: videoId,
//           title: videoTitle || `Song ${queue.length + 1}`,
//           url: newSong,
//         };

//         setQueue((prevQueue) => [...prevQueue, newItem]);
//         setNewSong("");

//         if (!currentUrl) {
//           setCurrentUrl(newItem.url);
//         }
//       } else {
//         console.error("Invalid YouTube URL");
//       }
//     }
//   };

//   const extractVideoId = (url: string): string | null => {
//     try {
//       const urlObj = new URL(url);

//       if (urlObj.hostname.includes("youtube.com")) {
//         return urlObj.searchParams.get("v");
//       } else if (urlObj.hostname.includes("youtu.be")) {
//         return urlObj.pathname.slice(1);
//       } else if (urlObj.hostname.includes("youtube-nocookie.com")) {
//         return urlObj.pathname.split("/").pop();
//       }

//       return null;
//     } catch (err) {
//       console.error("Invalid URL:", err);
//       return null;
//     }
//   };

//   const fetchVideoTitle = async (videoId: string): Promise<string | null> => {
//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=YOUR_YOUTUBE_API_KEY`
//       );
//       const data = await response.json();
//       return data.items?.[0]?.snippet?.title || null;
//     } catch (error) {
//       console.error("Failed to fetch video title:", error);
//       return null;
//     }
//   };

//   const sendMessage = () => {
//     if (newMessage.trim()) {
//       setMessages([...messages, `User: ${newMessage}`]);
//       setNewMessage("");
//     }
//   };

//   const onVideoEnd = () => {
//     setQueue((prevQueue) => {
//       const newQueue = prevQueue.slice(1); // Remove the first video
//       if (newQueue.length > 0) {
//         setCurrentUrl(newQueue[0].url); // Play the next video in the queue
//       } else {
//         setCurrentUrl(null); // Clear the player if the queue is empty
//       }
//       return newQueue;
//     });
//   };

//   const generateShareableLink = () => {
//     // Generate a unique link to share
//     const shareableUrl = `${window.location.origin}/room/${roomId}?queue=${encodeURIComponent(JSON.stringify(queue))}`;
//     return shareableUrl;
//   };

//   const shareQueue = () => {
//     const shareableLink = generateShareableLink();
//     navigator.clipboard.writeText(shareableLink).then(() => {
//       alert("Queue link copied to clipboard!");
//     });
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-1 flex flex-col md:flex-row gap-4 p-4">
//         <div className="flex-1">
//           <div className="rounded-lg overflow-hidden bg-black aspect-video">
//             {currentUrl ? (
//               <YouTubePlayer url={currentUrl} onEnded={onVideoEnd} />
//             ) : (
//               <div className="flex items-center justify-center h-full text-white">
//                 No video playing
//               </div>
//             )}
//           </div>
//           <div className="mt-4 flex gap-2">
//             <Input
//               type="text"
//               placeholder="Paste YouTube URL"
//               value={newSong}
//               onChange={(e) => setNewSong(e.target.value)}
//             />
//             <Button onClick={addToQueue}>Add to Queue</Button>
//           </div>
//         </div>

//         <div className="w-full md:w-80 flex flex-col gap-4">
//           <div className="flex-1 bg-muted rounded-lg p-4">
//             <h3 className="font-bold mb-2">Queue</h3>
//             <ScrollArea className="h-[200px]">
//               {queue.map((item, index) => (
//                 <div
//                   key={item.id}
//                   className="flex items-center gap-2 p-2 hover:bg-accent rounded"
//                 >
//                   <span className="text-sm text-muted-foreground">
//                     {index + 1}.
//                   </span>
//                   <span className="flex-1 truncate">{item.title}</span>
//                 </div>
//               ))}
//             </ScrollArea>
//             <Button onClick={shareQueue} className="mt-4">
//               Share Queue
//             </Button>
//           </div>

//           <div className="flex-1 bg-muted rounded-lg p-4">
//             <h3 className="font-bold mb-2">Chat</h3>
//             <ScrollArea className="h-[200px] mb-4">
//               {messages.map((msg, i) => (
//                 <div key={i} className="p-2">
//                   {msg}
//                 </div>
//               ))}
//             </ScrollArea>
//             <div className="flex gap-2">
//               <Input
//                 type="text"
//                 placeholder="Type a message"
//                 value={newMessage}
//                 onChange={(e) => setNewMessage(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && sendMessage()}
//               />
//               <Button onClick={sendMessage}>Send</Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { YouTubePlayer } from "./YouTubePlayer";
import { ScrollArea } from "@/components/ui/scroll-area";

interface QueueItem {
  id: string;
  title: string;
  url: string;
}

export function Room() {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const [queue, setQueue] = useState<QueueItem[]>([]);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [newSong, setNewSong] = useState("");

  // Load queue from localStorage if exists
  useEffect(() => {
    const savedQueue = localStorage.getItem(`queue_${roomId}`);
    if (savedQueue) {
      setQueue(JSON.parse(savedQueue));
      setCurrentUrl(JSON.parse(savedQueue)[0]?.url || null);
    }
  }, [roomId]);

  // Save queue to localStorage whenever it changes
  useEffect(() => {
    if (roomId) {
      localStorage.setItem(`queue_${roomId}`, JSON.stringify(queue));
    }
  }, [queue, roomId]);

  const addToQueue = async () => {
    if (newSong.trim()) {
      const videoId = extractVideoId(newSong);
      if (videoId) {
        const videoTitle = await fetchVideoTitle(videoId);
        const newItem: QueueItem = {
          id: videoId,
          title: videoTitle || `Song ${queue.length + 1}`,
          url: newSong,
        };

        setQueue((prevQueue) => [...prevQueue, newItem]);
        setNewSong("");

        if (!currentUrl) {
          setCurrentUrl(newItem.url);
        }
      } else {
        console.error("Invalid YouTube URL");
      }
    }
  };

  const extractVideoId = (url: string): string | null => {
    try {
      const urlObj = new URL(url);

      if (urlObj.hostname.includes("youtube.com")) {
        return urlObj.searchParams.get("v");
      } else if (urlObj.hostname.includes("youtu.be")) {
        return urlObj.pathname.slice(1);
      } else if (urlObj.hostname.includes("youtube-nocookie.com")) {
        return urlObj.pathname.split("/").pop();
      }

      return null;
    } catch (err) {
      console.error("Invalid URL:", err);
      return null;
    }
  };

  const fetchVideoTitle = async (videoId: string): Promise<string | null> => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=YOUR_YOUTUBE_API_KEY`
      );
      const data = await response.json();
      return data.items?.[0]?.snippet?.title || null;
    } catch (error) {
      console.error("Failed to fetch video title:", error);
      return null;
    }
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, `User: ${newMessage}`]);
      setNewMessage("");
    }
  };

  const onVideoEnd = () => {
    setQueue((prevQueue) => {
      const newQueue = prevQueue.slice(1); // Remove the first video
      if (newQueue.length > 0) {
        setCurrentUrl(newQueue[0].url); // Play the next video in the queue
      } else {
        setCurrentUrl(null); // Clear the player if the queue is empty
      }
      return newQueue;
    });
  };

  const generateShareableLink = () => {
    // Generate a unique link to share
    const shareableUrl = `${window.location.origin}/room/${roomId}?queue=${encodeURIComponent(JSON.stringify(queue))}`;
    return shareableUrl;
  };

  const shareQueue = () => {
    const shareableLink = generateShareableLink();
    navigator.clipboard.writeText(shareableLink).then(() => {
      alert("Queue link copied to clipboard!");
    });
  };

  const playSongFromQueue = (url: string) => {
    setCurrentUrl(url); // Update the current URL to the clicked song's URL
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col md:flex-row gap-4 p-4">
        <div className="flex-1">
          <div className="rounded-lg overflow-hidden bg-black aspect-video">
            {currentUrl ? (
              <YouTubePlayer url={currentUrl} onEnded={onVideoEnd} />
            ) : (
              <div className="flex items-center justify-center h-full text-white">
                No video playing
              </div>
            )}
          </div>
          <div className="mt-4 flex gap-2">
            <Input
              type="text"
              placeholder="Paste YouTube URL"
              value={newSong}
              onChange={(e) => setNewSong(e.target.value)}
            />
            <Button onClick={addToQueue}>Add to Queue</Button>
          </div>
        </div>

        <div className="w-full md:w-80 flex flex-col gap-4">
          <div className="flex-1 bg-muted rounded-lg p-4">
            <h3 className="font-bold mb-2">Queue</h3>
            <ScrollArea className="h-[200px]">
              {queue.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 p-2 hover:bg-accent rounded cursor-pointer"
                  onClick={() => playSongFromQueue(item.url)} // Handle song click
                >
                  <span className="text-sm text-muted-foreground">
                    {index + 1}.
                  </span>
                  <span className="flex-1 truncate">{item.title}</span>
                </div>
              ))}
            </ScrollArea>
            <Button onClick={shareQueue} className="mt-4">
              Share Queue
            </Button>
          </div>

          <div className="flex-1 bg-muted rounded-lg p-4">
            <h3 className="font-bold mb-2">Chat</h3>
            <ScrollArea className="h-[200px] mb-4">
              {messages.map((msg, i) => (
                <div key={i} className="p-2">
                  {msg}
                </div>
              ))}
            </ScrollArea>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Type a message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              />
              <Button onClick={sendMessage}>Send</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
