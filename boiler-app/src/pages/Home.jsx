import React, { useEffect, useState } from 'react'

function Home() {
    console.info('Home -> call')

    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.info('fetch -> call')

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data.slice(0, 5)))
            .catch((error) => console.error('error fetching posts:', error))
    }, [])

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold">Posts</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className="border-b p-2">
                        <h3 className="font-semibold">{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
