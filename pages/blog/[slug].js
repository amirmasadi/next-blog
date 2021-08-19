import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";
import Link from "next/link";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/007s9spfg1xf/?access_token=XzqsDRL9fI3JNlIFo2vlVlgAlsslLpbM7K0AYH3WfEI",
  cache: new InMemoryCache(),
});

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      {
        blogsCollection {
          items {
            slug
          }
        }
      }
    `,
  });
  console.log(data.blogsCollection.items);
  const paths = data.blogsCollection.items.map((item) => {
    return {
      params: { slug: item.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const pageSlug = context.params.slug;
  const { data } = await client.query({
    query: gql`
      query {
        blogsCollection(where: { slug: "${pageSlug}" }) {
          items {
            title
            author
            category
            image{
              url
            }
            content{
              json
            }
          }
          
        }
      }
    `,
  });

  return {
    props: {
      content: data.blogsCollection.items[0],
    },
    revalidate: 300
  };
}

export default function slug({ content }) {
  return (
    <section
      className="flex flex-col lg:flex-row w-full justify-between items-center px-2 lg:px-0"
    >
      <motion.div
        initial={{ right: "600px", bottom: "100px", opacity: 0.5, scale: 0.5 }}
        animate={{ right: "0px", bottom: "0px", opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-[100vh] overflow-hidden relative lg:w-[45%]"
      >
        <motion.div
          initial={{ scale: 3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="lg:absolute z-30 text-white lg:text-gray-600 lg:top-20 lg:right-20 transform text-center lg:text-right"
        >
          <p>{content.category}</p>
          <h3 className="text-3xl lg:text-6xl font-black lg:my-10 lg:pl-20">
            {content.title}
          </h3>
          <p>{content.author}</p>
        </motion.div>
        <Image
          src={content.image.url}
          width="800px"
          height="1000px"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="rich-text lg:p-16 lg:w-[55%]"
      >
        <Link href="/">
          <a className="text-blue-300 hover:text-blue-200">بازگشت به خانه</a>
        </Link>
        {documentToReactComponents(content.content.json)}
      </motion.div>
    </section>
  );
}
