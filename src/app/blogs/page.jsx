import Link from 'next/link'
import React from 'react'

function BlogPage() {
    const blogsData = [

        {
            id: 1,
            title: "Getting Started with Next.js",
            slug: "getting-started-nextjs",
            author: "Rashidul Islam",
            date: "2026-04-10",
            category: "Next.js",
            image: "https://via.placeholder.com/600x400",
            excerpt: "Learn the basics of Next.js and how to build fast web applications.",
            content: "Next.js is a powerful React framework that enables server-side rendering and static site generation."
        },
        {
            id: 2,
            title: "Understanding React Hooks",
            slug: "react-hooks-guide",
            author: "Rashidul Islam",
            date: "2026-04-08",
            category: "React",
            image: "https://via.placeholder.com/600x400",
            excerpt: "A complete guide to React hooks like useState and useEffect.",
            content: "React hooks allow you to use state and lifecycle features in functional components."
        },
        {
            id: 3,
            title: "Tailwind CSS Tips and Tricks",
            slug: "tailwind-css-tips",
            author: "Rashidul Islam",
            date: "2026-04-06",
            category: "CSS",
            image: "https://via.placeholder.com/600x400",
            excerpt: "Improve your UI design with these Tailwind CSS tips.",
            content: "Tailwind CSS is a utility-first CSS framework for building modern user interfaces quickly."
        },
        {
            id: 4,
            title: "JavaScript ES6 Features",
            slug: "javascript-es6",
            author: "Rashidul Islam",
            date: "2026-04-05",
            category: "JavaScript",
            image: "https://via.placeholder.com/600x400",
            excerpt: "Explore modern JavaScript features introduced in ES6.",
            content: "ES6 introduced arrow functions, destructuring, modules, and many more features."
        },
        {
            id: 5,
            title: "Build Responsive UI with DaisyUI",
            slug: "daisyui-guide",
            author: "Rashidul Islam",
            date: "2026-04-03",
            category: "UI",
            image: "https://via.placeholder.com/600x400",
            excerpt: "Learn how to use DaisyUI components with Tailwind CSS.",
            content: "DaisyUI provides pre-built UI components to speed up development with Tailwind CSS."
        },
        {
            id: 6,
            title: "Understanding Async JavaScript",
            slug: "async-javascript",
            author: "Rashidul Islam",
            date: "2026-04-01",
            category: "JavaScript",
            image: "https://via.placeholder.com/600x400",
            excerpt: "Learn about promises, async/await, and handling asynchronous code.",
            content: "Async JavaScript helps manage operations like API calls using promises and async/await."
        }

    ]

    return (
        <div>
            {
                blogsData.map(blog => (

                    <div key={blog.id}>
                        <h2 className=''>{blog.title}</h2>
                        <p className='text-gray-600'>{blog.excerpt}</p>
                        <Link href={`/blogs/${blog.id}`} className='btn btn-primary'>Read More</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogPage