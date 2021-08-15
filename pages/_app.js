import "tailwindcss/tailwind.css";
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
      <div dir="rtl">
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
