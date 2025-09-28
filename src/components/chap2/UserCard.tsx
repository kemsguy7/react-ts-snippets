import React, { useState } from 'react';
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
interface User {
  age: number;
  name: string;
}

// interface UserCardProps {
//   user: User;
//   onClick: (id: number) => void;
// }

const UserCard: React.FC = () => {
  const [user, setUser] = useState<User>({ name: 'John', age: 25 });

  const updateUserAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <h2> {user.name} </h2>
      <p> Age: {user.age}</p>
      <button onClick={updateUserAge}>Select User </button>
    </div>
  );
};

export default UserCard;
