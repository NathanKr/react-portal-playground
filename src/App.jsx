import React from "react";
import "./App.css";
import Modal from "./components/ModalClassBased";

// The Modal component is a normal React component, so we can
// render it wherever we like without needing to know that it's
// implemented with portals.
class App extends React.Component {
  state = { showModal: false };

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleHide = () => {
    this.setState({ showModal: false });
  };

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <p>
            With a portal, we can render content into a different part of the
            DOM, as if it were any other React child.
          </p>
          <p>
            This is being rendered inside the modal container div : modal-root.
          </p>

          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow}>Show modal</button>
        {modal}
      </div>
    );
  }
}

export default App;
