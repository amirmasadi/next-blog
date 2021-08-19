import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Image from "next/image"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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
  };
}

export default function slug({ content }) {
  return(
  <section className="flex flex-col lg:flex-row w-full justify-between items-center px-2 lg:px-0">
    
    <div className="h-[100vh] overflow-hidden relative lg:w-[45%]">
      <div className="lg:absolute z-30 text-white lg:text-gray-600 lg:top-20 lg:right-20 transform text-center lg:text-right">
        <p>{content.category}</p>
        <h3 className="text-3xl lg:text-6xl font-black lg:my-10 lg:pl-20">{content.title}</h3>
        <p>{content.author}</p>
      </div>
      <Image src={content.image.url} width="800px" height="1000px"  className="object-cover"/>
    </div>

    <div className="rich-text lg:p-16 lg:w-[55%]">
        {documentToReactComponents(content.content.json) }
    </div>
  </section>
  )
}
