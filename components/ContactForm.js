import { useForm } from "@formspree/react";


export default function ContactForm() {
    const [state, handleSubmit] = useForm("xknkpoqy");

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">نام</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block w-full bg-transparent outline-none border border-opacity-25 focus:border-opacity-100 p-1 rounded-lg"
            />
            <label htmlFor="name">ایمیل</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full bg-transparent outline-none border border-opacity-25 focus:border-opacity-100 p-1 rounded-lg"
            />
            <textarea
              id="message"
              name="message"
              placeholder="پیام"
              required
              rows="3"
              className="w-full my-8 bg-transparent outline-none border border-opacity-25 focus:border-opacity-100  px-5 py-2 rounded-lg"
            />
            <button
              type="submit"
              disabled={state.submitting}
              className={` border border-opacity-25 px-5 py-1 rounded-md hover:bg-white hover:text-gray-700 transition ease duration-500 
              ${
                state.succeeded
                  ? "text-green-500 border-green-500 pointer-events-none"
                  : ""
              }`}
            >
              {state.succeeded ? "ارسال موفق" : "ارسال"}
            </button>
          </form>
    )
}
