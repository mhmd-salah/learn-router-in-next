import { Session, getServerSession } from "next-auth";
import { authOption } from "./lib/nextAuth";
import Signin from "./_components/Signin";
import Signout from "./_components/Signout";
import Image from "next/image";
import "./globals.css";
import { error } from "console";
import { Suspense } from "react";
import Link from "next/link";
import LoadingPost from "./_components/LoadingPost";

async function page () {
  // const session = await getServerSession(authOption)
  async function getData () {
    const res = fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-cache" });
    if (!res) {
      throw new Error("filed fetch data");
    }
    return (await res).json();
  }
  type post = {
    userId: number,
    id: number,
    title: string,
    body: string;
  };
  const data: post[] = await getData();
  return (
    <>
        <Link href={ "/order-product" }
          className="self-start  w-fit text-center px-2 py-1 bg-[#f7f7f7] hover:bg-[#e3e3e3] transition m-3 block"
        >order products</Link>
      <Link
        href="/posts"
        className="self-start  w-fit text-center px-2 py-1 bg-[#f7f7f7] hover:bg-[#e3e3e3] transition m-3 block"
      >posts</Link>
      <div className="mt-3 flex gap-2 flex-wrap mx-auto justify-center items-stretch">
        { data.map((post: post) => (<div key={ post.id }>
          <div className="p-4 post rounded-sm mb-3 w-96 h-[200px]">
            <h1 className="font-bold">{ post.title }</h1>
            <h2>{ post.body }</h2>
          </div>
        </div>)) }
      </div>
    </>
  );
}

export default page;
