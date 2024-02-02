// ImageViewer.js
import React from 'react';
import Modal from 'react-modal';

const ImageViewer = ({ imageUrl, onClose }) => {
  return (
    <Modal
      isOpen={!!imageUrl}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
        content: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          background: 'none',
        },
      }}
    >
      <img src={imageUrl} alt="Preview" className="max-w-full max-h-full" />
    </Modal>
  );
};

export default ImageViewer;
