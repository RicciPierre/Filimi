import axios from "axios";
import React from "react";

const baseURL = "https://api.trakt.tv/movies/trending";

export function Fetch() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          "Content-Type": "application/json",
          "trakt-api-version": "2",
          "trakt-api-key":
            "c5c44e51fbfa6b8beaf355c7cc1151e4c37545a6bef1143ea51cdd8ac45052d3",
        },
      })
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.year}</p>
    </div>
  );
}
