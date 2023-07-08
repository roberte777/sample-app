"use client";
import { useState } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";

export default function Home() {
  const [messageHistory, setMessageHistory] = useState<string[]>([]);
  const [url, _setUrl] = useState("ws://localhost:3001/ws");
  const { sendMessage } = useWebSocket(url, {
    onMessage: (data) => {
      setMessageHistory((prev) => prev.concat(data.data));
    },
  });
  return (
    <main>
      <div className="flex ">
        <div className="basis-1/2">
          <h2 className="text-2xl font-bold">Websocket Messages</h2>
          {messageHistory.map((message, idx) => (
            <div key={idx}>{message}</div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-bold">Sample Buttons</h2>
          <div className="flex space-x-4 p-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => sendMessage("Start")}
            >
              Start
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => sendMessage("Stop")}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
