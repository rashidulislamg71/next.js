import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className="bg-gray-800 text-white  p-4">
                <div className="navbar shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/contact">Contact</Link></li>
                                <li><Link href="/developer">Developer</Link></li>
                                <li><Link href="/blogs">Blogs</Link></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">NextLerner</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/about/developer">Developer</Link></li>
                            <li><Link href="/blogs">Blogs</Link></li>


                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar