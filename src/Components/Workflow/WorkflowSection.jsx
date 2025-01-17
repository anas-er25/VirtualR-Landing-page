import codeImg from "../../assets/code.jpg";
import { checklistItems } from "../../constants";
import Checklist from "./Checklist";
const WorkflowSection = () => {
  return (
    <div className="mt-20" id="workflow">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          code Workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="code" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((checklist, index) => (
            <Checklist key={index} checklist={checklist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
