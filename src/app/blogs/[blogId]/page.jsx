import React from 'react'

const blogData = [
    {
        id: 1,
        title: "Next.js-এর নতুন ফিচারসমূহ",
        author: "আনিসুর রহমান",
        category: "Web Development",
        date: "2024-03-10",
        tags: ["Next.js", "React", "Frontend"],
        content: "Next.js-এর লেটেস্ট আপডেটে অ্যাপ রাউটিং এবং সার্ভার কম্পোনেন্টস নিয়ে অনেক পরিবর্তন এসেছে..."
    },
    {
        id: 2,
        "title": "জাভাস্ক্রিপ্ট অ্যারে মেথড কি এবং কেন?",
        author: "সুমাইয়া খান",
        category: "JavaScript",
        date: "2024-03-12",
        tags: ["JS", "Programming", "Basics"],
        content: "মডার্ন জাভাস্ক্রিপ্টে map, filter এবং reduce মেথডগুলো কোডকে অনেক ক্লিন করে ফেলে..."
    },
    {
        id: 3,
        title: "পাইথন ডিকশনারি টিউটোরিয়াল",
        author: "রাকিব হাসান",
        category: "Python",
        date: "2024-03-15",
        tags: ["Python", "Data Structure", "Backend"],
        content: "ডিকশনারির ভেতর কীভাবে লিস্ট এবং টাপল ব্যবহার করে জটিল ডেটা স্ট্রাকচার তৈরি করা যায়..."
    },
    {
        id: 4,
        title: "রিঅ্যাক্ট প্রোটোটাইপ ইনহেরিটেন্স",
        author: "আরিফ বিল্লাহ",
        category: "Frontend",
        date: "2024-03-18",
        tags: ["React", "JS", "Architecture"],
        content: "জাভাস্ক্রিপ্ট অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিংয়ের মূলে রয়েছে প্রোটোটাইপ চেইন..."
    },
    {
        id: 5,
        title: "CSS গ্রিড বনাম ফ্লেক্সবক্স",
        author: "ফাতেমা তুজ জোহরা",
        category: "Design",
        date: "2024-03-20",
        tags: ["CSS", "Layout", "UI/UX"],
        content: "লেআউট ডিজাইনের ক্ষেত্রে কখন গ্রিড এবং কখন ফ্লেক্সবক্স ব্যবহার করা উচিত তা নিয়ে বিস্তারিত..."
    },
    {
        id: 6,
        title: "নোড জেএস (Node.js) এর ফিউচার",
        author: "তানভীর আহমেদ",
        category: "Backend",
        date: "2024-03-22",
        tags: ["NodeJS", "Runtime", "Server"],
        content: "ব্যাকএন্ড ডেভেলপমেন্টে ডেনো এবং বানের আগমনে নোড জেএস-এর অবস্থান এখন কোথায়?"
    },
    {
        id: 7,
        title: "মেশিন লার্নিংয়ের হাতেখড়ি",
        author: "নাসির উদ্দিন",
        category: "AI",
        date: "2024-03-25",
        tags: ["ML", "Python", "Data Science"],
        content: "ডেটা সায়েন্স এবং মেশিন লার্নিং শিখতে চাইলে গণিত ও পাইথনের গুরুত্ব অপরিসীম..."
    },
    {
        id: 8,
        title: "টাইপস্ক্রিপ্ট কেন শিখবেন?",
        author: "মেহেদী হাসান",
        category: "JavaScript",
        date: "2024-03-28",
        tags: ["TypeScript", "JS", "Type Safety"],
        content: "জাভাস্ক্রিপ্ট প্রোজেক্ট বড় হওয়ার সাথে সাথে টাইপ সেফটি নিশ্চিত করতে টাইপস্ক্রিপ্ট সেরা..."
    },
    {
        id: 9,
        title: "সাইবার সিকিউরিটি ও হ্যাকিং",
        author: "জাহিদ হাসান",
        category: "Security",
        date: "2024-04-01",
        tags: ["Security", "Web", "Hacking"],
        content: "বর্তমান যুগে ওয়েব অ্যাপ্লিকেশনের নিরাপত্তা নিশ্চিত করার ৫টি কার্যকরী উপায়..."
    },
    {
        id: 10,
        title: "গিট ও গিটহাব মাস্টারি",
        author: "তৌহিদুর রহমান",
        category: "DevOps",
        date: "2024-04-05",
        tags: ["Git", "GitHub", "Workflow"],
        content: "টিমওয়ার্কের জন্য গিট ব্রাঞ্চিং এবং পুল রিকোয়েস্ট বোঝার সহজ গাইড..."
    }
];

async function BlogDetail({ params }) {

    const { blogId } = await params;
    
    const expectedBlog = blogData?.find(blog => blog.id === parseInt(blogId));

    return (
        <div className='border rounded-2xl p-5 shadow m-auto space-y-5'>
            <h2 className='font-bold text-3xl'>{expectedBlog?.title}</h2>
            <p className='px-2 border rounded-full  bg-gray-300 w-fit'>{expectedBlog?.category}</p>
            <p className=''>{expectedBlog?.content}</p>
            <div className='border-t pt-5 flex justify-between items-center mt-5 '>
                <p className='font-bold'>{expectedBlog?.author}</p>
            <p className=''>{expectedBlog?.date}</p>
            </div>
        </div>
    )
}

export default BlogDetail