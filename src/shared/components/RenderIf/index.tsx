import { RenderIfType } from "types/RenderIfType";

const RenderIf: React.FC<RenderIfType> = ({ children, conditions, renderelse = "" }) => {
    if (conditions) return children
    return renderelse;
};

export default RenderIf;