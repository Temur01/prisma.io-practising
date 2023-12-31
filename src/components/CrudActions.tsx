import { Pencil, Trash } from "lucide-react";
import Link from "next/link";

const CrudActions = () => {
  return (
    <div>
      <Link href={"/edit/1"} className="btn mr-2">
        <Pencil />
        Edit
      </Link>
      <button className="btn btn-error">
        <Trash />
        Delete
      </button>
    </div>
  );
};

export default CrudActions;
