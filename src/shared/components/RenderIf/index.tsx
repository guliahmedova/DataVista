import { FC } from "react";
import { RenderIfType } from "src/shared/types/RenderIfType";

const RenderIf: FC<RenderIfType> = ({ children, conditions, renderelse = "" }) => {
    if (conditions) return children
    return renderelse;
};

export default RenderIf;