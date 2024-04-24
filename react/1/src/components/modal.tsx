import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  open: boolean;
  disableGlobalScroll?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal = ({
  open,
  disableGlobalScroll,
  onClose,
  children,
}: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (open && disableGlobalScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open, disableGlobalScroll]);

  if (!isMounted) return null;

  return open
    ? ReactDOM.createPortal(
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            {children}
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Закрити
            </button>
          </div>
        </div>,
        document.body
      )
    : null;
};
