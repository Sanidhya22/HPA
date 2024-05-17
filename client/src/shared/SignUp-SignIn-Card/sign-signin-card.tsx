import { FC, PropsWithChildren } from "react";

export const SignUpInCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        {children}
      </div>
    </section>
  );
};
