import Link from "next/link"
import Blogs from "./blogs/page"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Blogs/>
    </main>
  )
}
