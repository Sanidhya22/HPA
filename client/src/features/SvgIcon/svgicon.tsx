import { getPath } from "./icons";

export const SVGIcon = ({ name = "" }) => {
  return <> {getPath(name)}</>;
};
