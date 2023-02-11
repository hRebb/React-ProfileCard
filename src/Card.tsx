import React, { useState } from 'react';

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
    <div>
      <img src="https://via.placeholder.com/150" alt="Profile" />
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div>{name}</div>
          <div>{status}</div>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Card;

