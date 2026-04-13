import React from 'react';

const page = async ({params}) => {
 const {userId} = await params;
const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
const userData = await user.json();



    return (
        <div>
            <h1>{userData.name}</h1>
            <p>{userData.email}</p> 
                <p>{userData.phone}</p>
                <p>{userData.website}</p>
                
        </div>
    );
};

export default page;