"use client";

import axios from "axios";
import { FC } from "react";
import { FormInputPost } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { Tag } from "@prisma/client";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();
  const {
    data: dataTags,
    isLoading: isLoadingTags,
    error: tagsError,
  } = useQuery<Tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      try {
        const response = await axios.get("/api/tags");
        return response.data;
      } catch (error) {
        console.error("Error fetching tags:", error);
        throw error; // Rethrow the error for React Query to handle
      }
    },
  });
  console.log("🚀 ~ file: FormPost.tsx:22 ~ dataTags:", dataTags);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-4 mt-10"
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Post title..."
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        className="textarea textarea-bordered w-full max-w-lg"
        {...register("content", { required: true })}
        placeholder="Post content..."
      ></textarea>
      {isLoadingTags ? (
        <select
          className="select select-bordered w-full max-w-lg"
          defaultValue={""}
          {...register("tag", { required: true })}
        >
          <option disabled value={""}>
            Select tags
          </option>
          {/* {dataTags?.map((item: any) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))} */}
        </select>
      ) : (
        "Loading..."
      )}
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
