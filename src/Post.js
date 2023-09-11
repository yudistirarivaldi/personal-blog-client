import { format } from "date-fns";
import { Link } from "react-router-dom";

export default function Post({
  title,
  summary,
  cover,
  author,
  publication,
  id
}) {
  return (
    <div className="post">
      <div className="image">
        <Link to={`/blog/${id}`}>
          <img src={"http://localhost:4000/" + cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/blog/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author}</a>
          <time>{format(new Date(publication), "MMM d, yyyy")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}
