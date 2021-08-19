import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";

export default function MainBlog({ blog }) {
  return (
    <div className="w-full lg:w-[50%] h-full">
      <Masonry
        breakpointCols={{ default: 2, 800: 1 }}
        columnClassName="my-masonry-grid_column"
        className="my-masonry-grid text-white"
      >
        <h3 className="font-black text-4xl mt-8 text-center transform translate-y-20">
          مقالات
        </h3>
        {blog.map((post, index) => (
          <div key={index} className="w-[360px] h-[390px] m-auto relative p-3 group">
            <Image
              className="object-cover"
              src={post.image.url}
              width="360px"
              height="390px"
            />
            <Link href={"blog/" + post.slug} className="z-10">
              <a className="w-[315px] h-auto absolute top-80 bg-gray-700 bg-opacity-60 backdrop-filter backdrop-blur-lg p-4 opacity-1 right-[50%] transform translate-x-[50%]">
                <h3 className="text-xl">{post.title}</h3>
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
          </div>
        ))}
      </Masonry>
        <footer className="flex justify-center items-center h-20 my-28 bg-gray-600 text-white rounded-t-md filter hue-rotate-15">
          <p>
            به اصطلاح فوتر
          </p>
        </footer>
    </div>
  );
}
