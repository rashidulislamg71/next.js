
import Link from 'next/link'
import React from 'react'

function DashboardLayout({ children }) {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <main>
                        {children}
                    </main>
                    <label htmlFor="my-drawer-3" className="btn drawer-button lg:hidden">
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><Link href={"/dashboard/array/"}>JS Array & Methods</Link></li>
                        <li><Link href={"/dashboard/object"}>JS Object & Methods</Link></li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default DashboardLayout