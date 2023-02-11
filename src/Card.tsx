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
  const [nameError, setNameError] = useState('');
  const [statusError, setStatusError] = useState('');

  const handleSave = () => {
    if (!name) {
        setNameError('Name is required');
        return;
    }

    if(/\d/.test(name)) {
        setNameError('Name cannot contain numbers');
        return;
    }

    if(!status) {
        setStatusError('Status is required');
        return;
    }

    setIsEditing(false);
    setNameError('');
    setStatusError('');
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
            onChange={(event) => {
                setNameError('');
                setName(event.target.value);
            }}
          />
          <input
            type="text"
            className='input secondaryInput'
            value={status}
            placeholder="What's your situation?"
            onChange={(event) => {
                setStatusError('');
                setStatus(event.target.value);
            }}
          />
          {nameError && <div className="error">{nameError}</div>}
          {statusError && <div className="error">{statusError}</div>}
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

