import { IRenderIfType } from "@/shared/models";

const RenderIf: React.FC<IRenderIfType> = ({ children, conditions = true, renderelse = "" }) => {
    if (conditions) return children
    return renderelse;
};

export default RenderIf;