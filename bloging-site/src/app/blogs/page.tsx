"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const getBlogs = async()=>{
    const response = await fetch("https://api.slingacademy.com/v1/sample-data/blog-posts");
    if(!response.ok){
        throw new Error("Could not retrieve blog posts");
    }
    return await response.json();
}
async function Blogs(){
    const Blog = await getBlogs();
    return(
        <div className="flex min-h-screen flex-col items-center justify-between p-12">
                
                {Blog.blogs.length > 0 ? 
                (<div className="flex gap-5 flex-wrap justify-center">
                    {Blog.blogs.map((post:any)=>(
                        <Card className="w-[400px] m-4 flex" >
                            <Image className="rounded-sm" src={post.photo_url} width={150} height ={100} alt="Blog image"/>
                        <Link 
                            href={`/blogs/${post.id}`} 
                            key={post.id} 
                        > 
                          
                            <div>
                                <CardHeader>
                                    <CardTitle>{post.title}</CardTitle>
                                    <CardDescription>{post.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm">Post Category : {post.category}</p>
                                    <p className="text-sm">Created at : {post.created_at.split("T")[0]}</p>
                                </CardContent>
                                
                            </div>
                        </Link>
                        </Card>
                    ))}
                </div>
                ) : 
                (
                    <div>
                        No Blog Found
                    </div>
                )}       
        </div>
               
        
    )
};
export default Blogs;