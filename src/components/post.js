import { Link } from "react-router-dom";
import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

function Post(props) {
  const {
    author,
    createdAt,
    title,
    description,
    slug,
    favoritesCount,
    tagList,
  } = props;

  return (
    <>
      {/* <article className="article">
        <header className="flex align-center">
          <div className="article-img">
            <Link to="/profile">
              <img src={author.image} alt={author.username} />
            </Link>
          </div>
          <div className="author">
            <Link
              style={{ textDecoration: 'none' }}
              to={`/profile/${author.username}`}
            >
              <p>{author.username}</p>
            </Link>
            <time dateTime="">
              {moment(createdAt).format('ddd MMM D YYYY')}
            </time>
          </div>
        </header>
        <Link style={{ textDecoration: 'none' }} to={`/article/${slug}`}>
          <div className="article-tilte">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </Link>
        <footer>
          <Link
            style={{ textDecoration: 'none' }}
            to={`/article/${slug}`}
            className="read-more-btn"
          >
            Read More ...
          </Link>
        </footer>
      </article> */}
      <article >
        <div className="parent-div flex justify-between align-center">
          <div className="flex align-center padding-top">
            <figure>
              <img src={author.image} alt="img" className="user-img" />
            </figure>
            <div>
              <NavLink
                to={`/profile/${author.username}`}
                style={{ textDecoration: "none" }}
              >
                <p className="arti-username">{author.username}</p>
              </NavLink>

              <p>{moment(createdAt).format("dd-MM-YYYY")}</p>
            </div>
          </div>
          <button className="fav-count">{favoritesCount}</button>
        </div>
        <p className="arti-title">{title}</p>
        <p className="arti-des">{description}</p>
        <div className="article-tag flex justify-between">
          <NavLink
            to={`/article/${slug}`}
            style={{
              color: "gray",
              textDecoration: "none",
              marginBottom: "20px",
              display: "inline-block",
            }}
          >
            Read More ...
          </NavLink>
          <div>
            {tagList.map((p) => {
              return <button className="tag">{p}</button>;
            })}
          </div>
        </div>
      </article>
    </>
  );
}

export default Post;
