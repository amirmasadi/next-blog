import Head from "next/head";
import MainBlog from "../components/MainBlog";
import MainSlider from "../components/MainSlider";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";


export async function getStaticProps() {
  const CFSpace = process.env.CONTENTFUL_SPACE_ID
  const CFToken = process.env.CONTENTFUL_ACCESS_KEY

  const client = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${CFSpace}/?access_token=${CFToken}`,
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      query blogs {
        blogsCollection {
          items {
            title
            slug
            author
            category
            sys {
              publishedAt
            }
            image {
              url
            }
          }
        }
      }
    `,
  });
  return {
    props: { blog: data.blogsCollection.items },
    revalidate: 300,
  };
}

export default function Home({ blog }) {

  return (
    <section className="flex justify-end  container mx-auto" >

      <Head>
        <title>bloge ziba</title>
        <link rel="icon" href="/bz-logo.png" />
      </Head>

      <div className="w-full flex flex-col lg:flex-row  lg:h-[100vh] items-center lg:justify-center">
        <div className="lg:fixed lg:right-24">
          <MainSlider />
        </div>

        <div className="w-[50%] hidden lg:block"></div>

        <MainBlog blog={blog} />
      </div>
    </section>
  );
}
