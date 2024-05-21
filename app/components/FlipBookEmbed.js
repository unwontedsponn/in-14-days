'use client';
import { useEffect } from "react";

const FlipBookEmbed = ({ src, width, height, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="relative bg-white rounded-lg border-4" style={{ width: '80%', height: '80%' }}>
          <button
            onClick={onClose}
            className="absolute z-10 top-0 right-0 p-2 text-5xl font-semibold text-gray-600 hover:text-gray-900 transition-colors"
            style={{ lineHeight: '1rem' }}
          >
            &times; {/* Unicode multiplication sign used as close icon */}
          </button>
          <iframe src={src} width={width} height={height} className="w-full h-full" />
        </div>
      </div>
    )
  );
};

export default FlipBookEmbed;
