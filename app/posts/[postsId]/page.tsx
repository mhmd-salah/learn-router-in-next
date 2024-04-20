import { Metadata } from "next"
type Props = {
  params: {
    postsId:string
  }
}

export const generatMetadata = ({ params }: Props): Metadata => {
  return {
    title: `post : ${params.postsId}`
  };
};


function PostsId({params}:Props) {
  return (
    <div>
      posts id : { params.postsId }
    </div>
  )
}

export default PostsId
