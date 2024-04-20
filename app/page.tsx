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
    const res = fetch("https://jsonplaceholder.typicode.com/posts" ,{cache:"no-cache"});
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
    <div>
      <h1>Home Page</h1>
        { data.map((post: post) => (<div key={ post.id }>
      <Suspense fallback={ <LoadingPost/>} >
          <h1 className="text-red-400">{ post.title }</h1>
          <h2>{ post.body }</h2>
      </Suspense>
        </div>)) }
      {/* <div>
        { session ? <div className="flex justify-between bg-slate-700 items-center px-10">
          <h1>{ session?.user?.name }</h1>
          <Image
            src={ session.user?.image as string }
            alt="this profile image"
            width={ 100 }
            height={ 120 }
            className="w-20 rounded-full shadow-md"
          />
          <p>{ session.user?.email as string }</p>
        </div> : <Signin /> }
        { session && <Signout/> }
      </div> */}
      <Link replace  href="/posts">posts</Link>
    </div>
  );
}

export default page;
