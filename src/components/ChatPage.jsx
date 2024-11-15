import { useEffect, useState } from "react";
import { connectToWebSocket, sendMessage, disconnectWebSocket } from "../redux/actions/chatActions";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const username = useSelector((state) => state.utente.utente.username);
  console.log(username);

  useEffect(() => {
    connectToWebSocket((message) => {
      console.log("New message received:", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      disconnectWebSocket();
    };
  }, []);

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      sendMessage(input, username);
      setInput("");
    }
  };

  return (
    <div className="main">
      <h1 className="text-center mt-3 mb-5 text-white">• ChatPage •</h1>
      <div className="chatLines">
        {messages.map((msg, index) => (
          <h2 key={index}>
            {msg.sender}: {msg.content}
          </h2>
        ))}
      </div>
      <InputGroup className="mt-3 px-5">
        <Form.Control
          placeholder="Type a message..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage();
            }
          }}
        />
        <Button variant="warning" onClick={handleSendMessage}>
          Send
        </Button>
      </InputGroup>
    </div>
  );
};

export default ChatPage;
