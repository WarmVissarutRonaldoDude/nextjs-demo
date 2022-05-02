import type { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren<{}>) => {
  return (
    <>
      {/* Ex. adding AppBar/Footer */}
      <div>Mock Layout!</div>
      <main>
        <div>{props.children}</div>
      </main>
    </>
  );
};

export default Layout;
