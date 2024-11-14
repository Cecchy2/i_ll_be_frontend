import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectWebSocket, sendMessage } from "../../src/redux/actions/chatActions";

const ChatPage = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    dispatch(connectWebSocket());
  }, [dispatch]);

  const handleSendMessage = () => {
    const message = { content: "Hello from React!" };
    dispatch(sendMessage(message));
  };

  return (
    <div className="main">
      <h1 className="text-center mt-3 mb-5 text-white">•ChatPage•</h1>
      <button onClick={handleSendMessage}>Send Message</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatPage;
