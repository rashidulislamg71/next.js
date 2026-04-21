

import Link from 'next/link';
import { Suspense } from 'react';

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div>
      <h1>This is users List</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {users.map(user => (
          <div key={user.id}>
              <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                  <h2 className="card-title">Card Title</h2>
                  <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                  <div className="card-actions justify-end">
                    <Link href={`/users/${user.id}`} className="btn btn-primary">Buy Now</Link>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}