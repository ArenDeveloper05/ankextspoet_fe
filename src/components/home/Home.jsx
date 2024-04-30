import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { useEffect } from "react";
import { getAllPosts, getFromLocalStorage } from "../../api/api";

import PostCard from "./postcard/PostCard";
import ReactPaginate from "react-paginate";
import TopPosts from "./top-posts/TopPosts";

import "./Home.scss";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [pageCount, setPageCount] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  const getAllPostsFunction = useCallback(async () => {
    try {
      const { data } = await getAllPosts(
        getFromLocalStorage("accessToken"),
        currentPage
      );
      console.log(data);
      setPosts(data.data);
      setPageCount(Math.ceil(data.total / 5));
    } catch (error) {
      console.log(error.message);
    }
  }, [currentPage]);

  useEffect(() => {
    console.log(currentPage);
    getAllPostsFunction();
  }, [currentPage, getAllPostsFunction]);

  const handlePageChange = (selectedObject) => {
    setCurrentPage(selectedObject.selected + 1);
    window.scrollTo({ top: 600, behavior: "smooth" });
  };

  return (
    <section className="home">
      <TopPosts />
      <div className="home-content">
        <div className="home-content-posts">
          {posts &&
            posts.map(
              ({
                title,
                id,
                description,
                likes,
                username,
                comments,
                is_liked,
                authorId,
              }) => {
                return (
                  <PostCard
                    title={title}
                    key={id}
                    id={id}
                    description={description}
                    likes={likes}
                    username={username}
                    comments={comments}
                    getAllPostsFunction={getAllPostsFunction}
                    is_liked={is_liked}
                    authorId={authorId}
                  />
                );
              }
            )}
        </div>
        {posts.length !== 0 && pageCount !== null ? (
          <ReactPaginate
            pageCount={pageCount}
            pageRange={2}
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName={"home-content-pagination"}
            previousLinkClassName={""}
            breakClassName={"page"}
            nextLinkClassName={""}
            pageClassName={"page"}
            disabledClassNae={"disabled"}
            activeClassName={"active"}
          />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <aside className="home-poets">
        <h1>Թոփ Պոետներ</h1>
        <div className="home-poets-list">
          <div className="home-poets-list-poet">
            <div className="home-poets-list-poet-image">
              <img
                src="https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
                alt="poetImage"
              />
            </div>
            <h2 className="home-poets-list-poet-fullname">
              <Link to={""}>Poet Poetyan</Link>
            </h2>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Home;
