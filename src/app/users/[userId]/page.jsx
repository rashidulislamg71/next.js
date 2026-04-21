import React from 'react';

async function UserDetail({ params }) {
  const { userId } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const data = await res.json();

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}

export default UserDetail;