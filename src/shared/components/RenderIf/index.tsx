import { IRenderIfType } from "@/shared/models";

const RenderIf: React.FC<IRenderIfType> = ({ children, conditions, renderelse = "" }) => {
    if (conditions) return children
    return renderelse;
};

export default RenderIf;