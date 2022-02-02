import { useEffect } from "react";
import { createPortal } from "react-dom";

// Let's create a Modal component that is an abstraction around
// the portal API.
function Modal(props) {
  useEffect(() => {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modalRoot.appendChild(el);

    return () => modalRoot.removeChild(el);
  }, []);

  // Create a div that we'll render the modal into. Because each
  // Modal component has its own element, we can render multiple
  // modal components into the modal container.
  let el = document.createElement("div");
  let modalRoot = document.getElementById("modal-root");

  return createPortal(
    // Any valid React child: JSX, strings, arrays, etc.
    props.children,
    // A DOM element
    el
  );
}

export default Modal;
