import React from "react";
import Image from "next/image";
const getBlogData = async (id: number) => {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );
  if (!res.ok) {
    throw new Error("Could not retrieve blog posts");
  }
  return await res.json();
}; 
async function blog_detail({params}:any){
  const {blog} = await getBlogData(params.id);
  return(
    <div className="px-24 py-10 flex flex-col gap-5">
      <Image src={blog.photo_url} width={600} height={600} alt= "BLog image"/>
      <h1 className="text-bold text-4xl">{blog.title}</h1>
      <p>{blog.description}</p>
      <p>{blog.content_text}</p>
    </div>
  )
}
export default blog_detail;