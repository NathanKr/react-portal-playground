import "./App.css";
import Modal from "./components/Modal";
import { useState } from "react";

// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleHide = () => {
    setShowModal(false);
  };

  // Show a Modal on click.
  // (In a real app, don't forget to use ARIA attributes
  // for accessibility!)
  const modal = showModal ? (
    <Modal>
      <div className="modal">
        <p>
          With a portal, we can render content into a different part of the DOM,
          as if it were any other React child.
        </p>
        <p>
          This is being rendered inside the modal container div : modal-root.
        </p>
        <button onClick={handleHide}>Hide modal</button>
      </div>
    </Modal>
  ) : null;

  return (
    <div className="app">
      This div has overflow: hidden.
      <button onClick={handleShow}>Show modal</button>
      {modal}
    </div>
  );
}

export default App;
