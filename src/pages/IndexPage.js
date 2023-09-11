import { useEffect, useState } from "react";
import Post from "../Post";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/blog").then((response) => {
      response.json().then((posts) => {
        setPosts(posts.data);
      });
    });
  }, []);

  console.log(posts);

  return <>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</>;
}
