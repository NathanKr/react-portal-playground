import { useEffect } from "react";
import { createPortal } from "react-dom";

// Let's create a Modal component that is an abstraction around
// the portal API.
function Modal() {
  useEffect(() => {
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    el = document.createElement("div");
    modalRoot = document.getElementById("modal-root");
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modalRoot.appendChild(el);

    return () => modalRoot.removeChild(el);
  }, []);

  // Use a portal to render the children into the element
  return createPortal(
    // Any valid React child: JSX, strings, arrays, etc.
    this.props.children,
    // A DOM element
    this.el
  );
}

export default Modal;
