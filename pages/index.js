import Head from "next/head";
import MainBlog from "../components/MainBlog";
import MainSlider from "../components/MainSlider";

export default function Home() {
  return (
    <section className="flex justify-end  container mx-auto">
      <Head>
        <title>bloge ziba</title>
        <link rel="icon" href="/bz-logo.png" />
      </Head>

      <div className="w-full flex flex-col lg:flex-row h-[5000px] lg:h-[100vh] items-center justify-center">

        <div className="lg:fixed lg:right-24">
          <MainSlider/>
        </div>

        <div className="w-[50%] hidden lg:block"></div>

        <MainBlog />

      </div>
    </section>
  );
}
