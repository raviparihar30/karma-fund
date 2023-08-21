import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { useCallback, useContext, useEffect, useState } from "react";
import style from "./index.m.css";
import { UserContext } from "../../context/user";
import { BASE_URL } from "../../apis";

const BlogPage = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const { loggedInUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedInUser && blogId) {
      navigate(`/signin?blog=${blogId}`);
    }
  }, [loggedInUser, blogId]);

  const fetchBlogPost = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/posts/${blogId}`);
      if (response.ok) {
        const { data } = await response.json();
        setBlog(data ?? {});
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  }, [blogId]);

  useEffect(() => {
    fetchBlogPost();
  }, [fetchBlogPost]);

  return (
    <MainLayout>
      <div className={"read-more-page"}>
        {!blog ? (
          "Loading..."
        ) : (
          <>
            <h2 className={"blog-title"}>{blog.title}</h2>
            <p className={"blog-subtitle"}>{blog.subtitle}</p>
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
