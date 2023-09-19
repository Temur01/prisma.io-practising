"use client";

import { FormInputPost } from "@/types";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}
const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

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
      <select
        className="select select-bordered w-full max-w-lg"
        defaultValue={""}
        {...register("tag", { required: true })}
      >
        <option disabled value={""}>
          Select tags
        </option>
        <option>Sport</option>
        <option>Technology</option>
        <option>Social</option>
      </select>
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
