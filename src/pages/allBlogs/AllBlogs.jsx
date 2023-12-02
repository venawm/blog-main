import React, { useContext, useEffect, useState } from "react";
import myContext from "../../context/data/myContext";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router";

function AllBlogs() {
  const context = useContext(myContext);
  const { mode, getAllBlog } = context;
  const navigate = useNavigate();

  const [id, setId] = useState("");

  useEffect(() => {
    // Set id from the first item in getAllBlog when it changes
    if (getAllBlog.length > 0) {
      setId(getAllBlog[0].id);
    }
  }, [getAllBlog]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto max-w-7xl ">
          <div className="mb-5">
            <h1
              className="text-center text-2xl font-bold"
              style={{ color: mode === "dark" ? "white" : "black" }}
            >
              All Blogs
            </h1>
          </div>
          <div className="flex flex-wrap justify-center -m-4 mb-5">
            {getAllBlog.length > 0 ? (
              <>
                {getAllBlog.map((item) => {
                  const { thumbnail, date, id } = item;
                  return (
                    <div key={id} className="p-4 md:w-1/3">
                      <div
                        onClick={() => navigate(`/bloginfo/${id}`)}
                        style={{
                          background:
                            mode === "dark" ? "rgb(30, 41, 59)" : "#F0ECE5",
                          borderBottom:
                            mode === "dark"
                              ? " 4px solid rgb(226, 232, 240)"
                              : " 4px solid rgb(30, 41, 59)",
                        }}
                        className={`h-full shadow-lg hover:-translate-y-1 cursor-pointer hover:shadow-gray-400
                                        ${
                                          mode === "dark"
                                            ? "shadow-gray-700"
                                            : "shadow-xl"
                                        } 
                                        rounded-xl overflow-hidden`}
                      >
                        <img
                          onClick={() => navigate(`/bloginfo/${id}`)}
                          className="w-full"
                          src={thumbnail}
                          alt="blog"
                        />
                        <div className="p-6">
                          <h2
                            className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                            style={{
                              color:
                                mode === "dark"
                                  ? "rgb(226, 232, 240)"
                                  : " rgb(30, 41, 59)",
                            }}
                          >
                            {date}
                          </h2>
                          <h1
                            className="title-font text-lg font-bold text-gray-900 mb-3"
                            style={{
                              color:
                                mode === "dark"
                                  ? "rgb(226, 232, 240)"
                                  : " rgb(30, 41, 59)",
                            }}
                          >
                            {item.blogs.title}
                          </h1>
                          <p
                            className="leading-relaxed mb-3"
                            style={{
                              color:
                                mode === "dark"
                                  ? "rgb(226, 232, 240)"
                                  : " rgb(30, 41, 59)",
                            }}
                          >
                            {item.blogs.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <h1>Not Found</h1>
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AllBlogs;
