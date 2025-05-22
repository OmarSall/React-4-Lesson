import { useEffect, useMemo, useState } from "react";

export default function PostsList({ limit= 10, userId }) {
    const [posts, setPosts] = useState([]);

    const configuration = useMemo(() => {
        const config = {
            _limit: limit,
            _sort: "title",
        };
        if (userId) {
            config.userId = userId;
        }
        return config;
    }, [limit, userId]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const searchParams = new URLSearchParams(configuration);
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${searchParams.toString()}`);
                const newPosts = await response.json();
                setPosts(newPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }

        fetchPosts();
    }, [configuration]);

    return (
        <div>
            {posts.map(({ title, body, id }) => (
                <div key={id}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            ))}
        </div>
    )
}