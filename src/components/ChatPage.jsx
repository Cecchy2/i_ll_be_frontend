import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, InputGroup, ListGroup, Modal } from "react-bootstrap";
import { fetchMessaggi, inviaMessaggio } from "../redux/actions/messaggiActions";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [activeChat, setActiveChat] = useState(null);

  const dispatch = useDispatch();
  const username = useSelector((state) => state.utente.utente.username);
  const amici = useSelector((state) => state.amicizie.amici);
  const messaggiSalvati = useSelector((state) => state.messaggi.messaggi);

  useEffect(() => {
    if (activeChat) {
      dispatch(fetchMessaggi(activeChat.id));
    }
  }, [activeChat, dispatch]);

  useEffect(() => {
    setMessages(messaggiSalvati);
  }, [messaggiSalvati]);

  const handleSendMessage = () => {
    if (input.trim() !== "" && activeChat) {
      dispatch(inviaMessaggio(activeChat.id, username, input));
      setInput("");
    }
  };

  const startPrivateChat = (friend) => {
    setActiveChat({
      id: `chat_${username}_${friend.username}`,
      participant: friend.username,
    });
    setShowModal(false);
  };

  return (
    <div className="main">
      <div className="d-flex justify-content-between align-items-center mt-3 mb-5">
        <h1 className="text-white">• ChatPage •</h1>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Nuova Chat Privata
        </Button>
      </div>

      {activeChat && <h4 className="text-white mb-3">Chat con: {activeChat.participant}</h4>}

      <div className="chatLines">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === username ? "text-end" : "text-start"}`}>
            <h2>
              {msg.sender}: {msg.content}
            </h2>
          </div>
        ))}
      </div>

      <InputGroup className="mt-3 px-5">
        <Form.Control
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSendMessage();
          }}
        />
        <Button variant="warning" onClick={handleSendMessage}>
          Send
        </Button>
      </InputGroup>

      {/* Modal per selezionare l'amico per la chat privata */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Seleziona un amico per la chat privata</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {amici.map((amico) => (
              <ListGroup.Item key={amico.id} action onClick={() => startPrivateChat(amico)}>
                {amico.username}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ChatPage;
