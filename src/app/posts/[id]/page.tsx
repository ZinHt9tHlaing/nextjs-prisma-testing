type PostDetailProps = {
  params: { id: string };
};

const PostDetail = ({ params }: PostDetailProps) => {
  return (
    <div>
      <h1>Post id - {params.id}</h1>
      <p className="text-red-600 font-semibold">{Date.now()}</p>
    </div>
  );
};

export default PostDetail;
