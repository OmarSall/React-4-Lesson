import {useEffect, useCallback, useState} from "react";

export default function PostsListCallback({limit = 10, userId}) {
    const [posts, setPosts] = useState([]);

    const fetchPosts = useCallback(async () => {
        const params = {
            _limit: limit,
            _sort: "title",
        };

        if (userId) {
            params.userId = userId;
        }

        const searchParams = new URLSearchParams(params);
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?${searchParams.toString()}`
        );
        return response.json();
    }, [limit, userId]);

    useEffect(() => {
        const fetchAndSetPosts = async () => {
            try {
                const newPosts = await fetchPosts();
                setPosts(newPosts);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }
        fetchAndSetPosts();
    }, [fetchPosts]);
    
    return (
        <div>
            {posts.map(({title, body, id}) => (
                <div key={id}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            ))}
        </div>
    );
}