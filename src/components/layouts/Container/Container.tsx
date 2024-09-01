import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <div className="px-[80px] pt-[40px] md:pt-[100px] pb-[130px] md:pb-0">
      {children}
    </div>
  );
}

export default Container;
