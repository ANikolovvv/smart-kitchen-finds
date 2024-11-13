import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};
///PageWrapper
const Title: FC<Props> = ({ children }) => {
  return (
    <h1
      id="page-title"
      className="text-lg font-serif sm:text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold mb-2"
    >
      {children}
    </h1>
  );
};
export default memo(Title);
