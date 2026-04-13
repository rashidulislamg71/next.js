
import Link from 'next/link';
import React from 'react';




const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 '>
            {
                users.map(user => (
                    <div key={user.id}>
                        <div className="card w-96 bg-base-100 card-xs shadow-sm">
                            <div className="card-body">
                                <h2 className="card-title">{user.name}</h2>
                                <p>{user.email}</p>
                                <div className="justify-end card-actions">
                                    <Link href={`/users/${user.id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default UsersPage;