import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { useCallback, useContext, useEffect, useState } from "react";
import style from "./index.m.css";
import { UserContext } from "../../context/user";
import { BASE_URL, imageUrl, postRequest } from "../../apis";
import { Avatar } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const BlogPage = () => {
  const { blogId } = useParams();

  const [author, setAuthor] = useState(null);
  const [blog, setBlog] = useState(null);
  const { loggedInUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedInUser != null && !loggedInUser && blogId) {
      navigate(`/signin?blog=${blogId}`);
    } else {
      fetchBlogPost();
    }
  }, [loggedInUser, blogId]);

  const fetchBlogPost = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/posts/${blogId}`);
      const checkView = await postRequest(
        `${BASE_URL}/api/posts/${blogId}/increase-views`
      );
      if (response.ok) {
        const { data } = await response.json();
        setBlog(data?.post ?? {});
        setAuthor(data?.author);
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  }, [blogId]);

  return (
    <MainLayout>
      <div className={"read-more-page"}>
        {!blog ? (
          "Loading..."
        ) : (
          <>
            <h2 className={"blog-title"}>{blog.title}</h2>
            <div className="author-info">
              <div className="d-flex gap-1 align-items-center me-2">
                <Avatar
                  src={`${imageUrl}${author.profilePhoto}`}
                  alt={author.name}
                  sx={{ width: 20, height: 20 }}
                />
                <div className="author-details">
                  <p className="author-name">{author.name}</p>
                </div>
              </div>{" "}
              <div className="author-social-links">
                <a
                  href={author.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </a>
                <a
                  href={author.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            {blog.subtitle && (
              <p className={"blog-subtitle"}>{blog.subtitle}</p>
            )}
            <div
              className={"blog-content"}
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
          </>
        )}
      </div>
    </MainLayout>
  );
};

export default BlogPage;
