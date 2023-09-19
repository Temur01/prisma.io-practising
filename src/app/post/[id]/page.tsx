import BackButton from "@/components/BackButton";
import CrudActions from "@/components/CrudActions";

const PostDetailPage = () => {
  return (
    <div className="">
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post One</h2>
        <CrudActions />
      </div>
      <p className="text-slate-700">Post One Content</p>
    </div>
  );
};

export default PostDetailPage;
