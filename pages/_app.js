import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import "../styles/global.css";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [Load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoad(false), 4000);
  }, []);

  return (
    <div dir="rtl">
      {Load && (
        <div className="fixed top-0 right-0 w-screen h-screen bg-gray-700 z-50 flex justify-center items-center">
          <Loading />
        </div>
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
