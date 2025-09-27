import React from 'react';
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  onClick: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  return (
    <div>
      <h2> {user.name} </h2>
      <p> Email: {user.email}</p>
      <button onClick={() => onClick(user.id)}>Select User </button>
    </div>
  );
};

export default UserCard;
