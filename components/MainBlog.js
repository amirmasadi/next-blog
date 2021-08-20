import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";

const postShow = {
  initial: {
    opacity: 0,
    bottom: "-100px",
  },
  animate: {
    opacity: 1,
    bottom: "0px",
  },
  transition: {
    duration: 0.5,
  },
};

export default function MainBlog({ blog }) {

  return (

    <motion.div
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.1 }}
      className="w-full lg:w-[50%] h-full"
    >
      <Masonry
        breakpointCols={{ default: 2, 800: 1 }}
        columnClassName="my-masonry-grid_column"
        className="my-masonry-grid text-white"
      >
        <h3 className="font-black text-4xl mt-8 text-center transform translate-y-20">
          مقالات
        </h3>
        {blog.map((post, index) => (
          <motion.div
            variants={postShow}
            key={index}
            className="w-[360px] h-[390px] m-auto relative p-3 group"
          >
            <div>
              <Image
                className="object-cover"
                src={post.image.url}
                width="360px"
                height="390px"
              />
            </div>
            <Link href={`blog/${post.slug}`} className="z-10">
              <a
                className="w-[315px] h-auto absolute top-80 bg-gray-700 bg-opacity-60 backdrop-filter backdrop-blur-lg p-4 opacity-1 right-[50%] transform translate-x-[50%] transition ease-in duration-200
              group-hover:scale-110"
              >
                <h3 className="text-xl transition duration-300 hover:text-gray-400">
                  {post.title}
                </h3>
                <div className="w-full flex justify-between my-3 font-extralight">
                  <span>{post.author}</span>
                  <span>{post.category}</span>
                  {
                    <span>
                      {new Date(post.sys.publishedAt).toLocaleDateString(
                        "en-US"
                      )}
                    </span>
                  }
                </div>
              </a>
            </Link>
          </motion.div>
        ))}
      </Masonry>
      <footer className="bottom-0 flex justify-center items-center h-20 mt-32 bg-gray-600 text-white rounded-t-md filter hue-rotate-15">
        <p>به اصطلاح فوتر</p>
      </footer>
    </motion.div>

  );
}
