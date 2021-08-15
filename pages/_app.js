import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
      <div dir="rtl">
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </div>
  );
}

export default MyApp;
