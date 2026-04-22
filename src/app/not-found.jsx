import Link from 'next/link'
import React from 'react'

function NotFoundPage() {
  return (
    <div className='flex justify-center items-center flex-col h-[80vh] '>

        <h1 className='text-5xl font-bold'>404</h1>
        <h3 className='text-2xl'>Not Found this page. Please go to home!</h3>
        <Link href={"/"}>
        <button className='btn bg-blue-600 text-bs mt-4 text-white'>Go to Home</button>
        </Link>
    </div>
  )
}

export default NotFoundPage