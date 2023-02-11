import React, { useState } from 'react';
import './App.css';

interface Props {
  initialName: string;
  initialStatus: string;
}

const Card: React.FC<Props> = ({ initialName, initialStatus }) => {
  const [name, setName] = useState(initialName);
  const [status, setStatus] = useState(initialStatus);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className='formBox'>
      {isEditing ? (
        <>
          <input
            type="text"
            className='input'
            value={name}
            placeholder="Enter your name"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            className='input secondaryInput'
            value={status}
            placeholder="What's your situation?"
            onChange={(event) => setStatus(event.target.value)}
          />
          <button className='myButton' onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div>{name}</div>
          <div>{status}</div>
          <button className='myButton' onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Card;

