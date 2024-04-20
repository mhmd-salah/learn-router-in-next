import {  Session, getServerSession } from "next-auth";
import { authOption } from "./lib/nextAuth";
import Signin from "./_components/Signin";
import Signout from "./_components/Signout";
import Image from "next/image";

async function page () {
  const session = await getServerSession(authOption)
  console.log(session)
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        { session ? <div>
          <h1>{ session?.user?.name }</h1>
          <Image
            src={ session.user?.image as string }
            alt="this profile image"
            width={ 100 }
            height={120}
          />
          <p>{ session.user?.email as string }</p>
        </div> : <Signin /> }
        { session && <Signout/> }
      </div>
    </div>
  )
}

export default page
