import React from "react";

type User = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function UsersPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!response.ok) return <div>{response.statusText}</div>;

  const user: User = await response.json();

  return (
    <div>
      <div>User info</div>
      <ul>
        <li>{user.title}</li>
        <li>{user.completed + ""}</li>
      </ul>
    </div>
  );
}
