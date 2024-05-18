import { FC, PropsWithChildren } from "react";
import { themeBase } from "../../styles";

export const SignUpInCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className={themeBase}>
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        {children}
      </div>
    </section>
  );
};
