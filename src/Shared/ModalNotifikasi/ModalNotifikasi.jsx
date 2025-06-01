import { useEffect, useState } from 'react';

const ModalNotifikasi = ({ isOpen, onClose, message }) => {
  const [showModal, setShowModal] = useState(false);

  // Handle ESC key and auto-close
  useEffect(() => {
    if (isOpen) {
      setShowModal(true);

      const timeout = setTimeout(() => {
        handleClose();
      }, 10000); // auto-close in 3 seconds

      const handleEscape = (event) => {
        if (event.key === 'Escape') {
          handleClose();
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => {
        clearTimeout(timeout);
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      setShowModal(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setShowModal(false);
    setTimeout(onClose, 300); // wait for animation to finish
  };

  if (!isOpen && !showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 transition-opacity duration-300">
      <div
        className={`bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative transform transition-all duration-300 ${
          showModal ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
          onClick={handleClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Notification
        </h3>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default ModalNotifikasi;
