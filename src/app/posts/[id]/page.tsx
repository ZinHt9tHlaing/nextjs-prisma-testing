type PostDetailProps = {
  params: { id: string };
};

const PostDetail = ({ params }: PostDetailProps) => {
  return <div>Post id - {params.id}</div>;
};

export default PostDetail;
