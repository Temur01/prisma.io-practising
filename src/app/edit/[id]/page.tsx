"use client";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

const PostEditPage = () => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log("🚀 ~ file: page.tsx:7 ~ CreatePage ~ data:", data);
  };
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit post</h1>
      <FormPost submit={handleEditPost} isEditing={true} />
    </div>
  );
};

export default PostEditPage;
