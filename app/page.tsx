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
    <div className="mt-3 flex gap-2 flex-wrap mx-auto justify-center">
      { data.map((post: post) => (<div key={ post.id }>
          <div className="p-4 bg-slate-300 rounded-sm mb-3 w-96">
            <h1 className="text-red-400">{ post.title }</h1>
            <h2>{ post.body }</h2>
          </div>
      </div>)) }
      <Link replace href="/posts">posts</Link>
    </div>
  );
}

export default page;
