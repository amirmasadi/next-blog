import Link from "next/link"

export default function NotFound() {
    return (
        <div className="w-full h-screen text-white font-extralight flex flex-col items-center justify-center">
            <p className="text-[200px] ">404</p>
            <p className="text-2xl">یافت نشد  :( بازگشت به <Link href="/"><a className="underline">خانه.</a></Link></p>
        </div>
    )
}
