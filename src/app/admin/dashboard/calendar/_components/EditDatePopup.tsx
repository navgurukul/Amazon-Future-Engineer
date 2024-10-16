{/* 
import React from "react";

interface EditDatePopupProps {
  onEditThisDate: () => void;
  onEditAllThursdays: () => void;
  onClose: () => void;
  style?: React.CSSProperties;
}

const EditDatePopup: React.FC<EditDatePopupProps> = ({ 
  onEditThisDate, 
  onEditAllThursdays, 
  onClose, 
  style 
}) => {
  return (
    <div style={{ ...style, zIndex: 100 }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: '8px',
        border: '1px solid var(--Grey-300, #DEDEDE)',
        background: 'var(--bg-surface-default, #FFF)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 8px 12px 0px rgba(0, 0, 0, 0.04), 0px 4px 24px 0px rgba(0, 0, 0, 0.08)',
        padding: '10px', // Optional: Add padding for better spacing
      }}>
        <button onClick={onEditThisDate}>Edit this date</button>
        <button onClick={onEditAllThursdays}>Edit for all Thursdays</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EditDatePopup; 

*/}



import React from 'react';

// Define the props interface for EditDatePopup
interface EditDatePopupProps {
    selectedDayName: string; // Prop to receive the day name
    onEditThisDate: () => void;
    onEditAllThursdays: () => void;
    onClose: () => void;
    style: React.CSSProperties; // Type for style prop
}

// EditDatePopup functional component
const EditDatePopup: React.FC<EditDatePopupProps> = ({
    selectedDayName,
    onEditThisDate,
    onEditAllThursdays,
    onClose,
    style
}) => {
    return (
        <div style={style}>
            <button 
                onClick={onClose} 
                style={{
                    position: 'absolute', 
                    top: '0.1px', 
                    right: '10px', 
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    lineHeight: '1',
                    color: '#333'
                }}
            >
                &times; {/* This is the X character */}
            </button>
            <button onClick={onEditThisDate}>Edit this date</button>
            <button onClick={onEditAllThursdays}>Edit for all {selectedDayName}s</button>
            {/* <button onClick={onClose}>Close</button> */}
            <style jsx>{`
                div {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    border-radius: 8px;
                    border: 1px solid var(--Grey-300, #DEDEDE);
                    background: var(--bg-surface-default, #FFF);
                    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.06), 
                                0px 8px 12px 0px rgba(0, 0, 0, 0.04), 
                                0px 4px 24px 0px rgba(0, 0, 0, 0.08);
                    padding: 10px;
                    z-index: 1000; // Ensure it's on top
                }
                button {
                    margin: 5px 0;
                }
            `}</style>
        </div>
    );
};

export default EditDatePopup;
