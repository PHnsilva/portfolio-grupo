import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Tag({ children }: Props) {
  return <span className="tag">{children}</span>;
}
