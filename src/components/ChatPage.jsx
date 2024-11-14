import { useEffect, useState } from "react";
import { connectToWebSocket, sendMessage, disconnectWebSocket } from "../redux/actions/chatActions";
import { Button, Form, InputGroup } from "react-bootstrap";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    connectToWebSocket((message) => {
      console.log("New message received:", message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup per disconnettere il WebSocket quando il componente viene smontato
    return () => {
      disconnectWebSocket();
    };
  }, []);

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="main">
      <h1 className="text-center mt-3 mb-5 text-white">• ChatPage •</h1>
      <div className="chatLines">
        {messages.map((msg, index) => (
          <h5 key={index}>{msg.content}</h5>
        ))}
      </div>
      <InputGroup className="mb-3 px-5">
        <Form.Control
          placeholder="Type a message..."
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="warning" onClick={handleSendMessage}>
          Send
        </Button>
      </InputGroup>
    </div>
  );
};

export default ChatPage;
