import { CheckCircle2 } from "lucide-react";

const Checklist = ({ checklist }) => {
  return (
    <div className="flex mb-12">
      <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
        <CheckCircle2 />
      </div>
      <div>
        <h5 className="mt-1 mb-2 text-xl">{checklist.title}</h5>
        <p className="text-md text-neutral-500">{checklist.description}</p>
      </div>
    </div>
  );
};

export default Checklist;