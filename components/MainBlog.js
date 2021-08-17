import posts from "../db/posts.json";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";


const data = posts.items;

export default function MainBlog() {
  return (
    <div className="w-full lg:w-[50%] h-full">
      <Masonry
        breakpointCols={{ default: 2, 800: 1 }}
        columnClassName="my-masonry-grid_column"
        className="my-masonry-grid text-white"
      >
        <h3 className="font-black text-4xl mt-8">مقالات</h3>
        {data.map((post, index) => (
          <div key={index} className="w-[360px] h-[390px] m-auto relative p-3">
            <Image
              className="object-cover"
              src={`https:${post.fields.image.fields.file.url}`}
              width="360px"
              height="390px"
            />
            <Link href={post.fields.slug} className="z-10">
              <a className="w-[315px] h-auto absolute top-80 bg-gray-700 bg-opacity-60 backdrop-filter backdrop-blur-lg p-4 opacity-1 right-[50%] transform translate-x-[50%]">
                <h3 className="text-xl">{post.fields.title}</h3>
                <div className="w-full flex justify-between my-3 font-extralight">
                  <span>{post.fields.author}</span>
                  <span>{post.fields.category}</span>
                  <span>
                    {new Date(post.sys.createdAt).toLocaleDateString("en-US")}
                  </span>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </Masonry>
    </div>
  );
}
