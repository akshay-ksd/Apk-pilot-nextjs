import React from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed bottom-0 w-1/3 left-2/4 right-0 ${
        isOpen ? 'h-3/4' : 'h-0'
      } transition-transform transform ease-in-out duration-300 overflow-hidden bg-lightGray rounded-t-lg shadow-lg`}
    >
      <div className="p-4">{children}</div>
      <div className="p-4 flex justify-end">
        <button
        //   onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BottomSheet;
