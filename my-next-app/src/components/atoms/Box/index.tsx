import React, { FC, HTMLAttributes, memo } from "react";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export type BoxProps = ContainerProps & {
  as?: React.ElementType;
  children?: React.ReactNode;
  href?: string;
  htmlFor?: string;
  name?: string;
  ref?: any;
  rel?: string;
  target?: string;
  type?: string;
  value?: string | number | readonly string[] | undefined;
  role?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
};

const Box: FC<BoxProps> = ({
  as: Component = "div",
  children,
  className,

  ...props
}) => {
  return (
    <Component className={`${className}`} {...props}>
      {children}
    </Component>
  );
};

export default memo(Box);
