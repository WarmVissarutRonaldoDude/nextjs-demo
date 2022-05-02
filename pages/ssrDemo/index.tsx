import type { PropsWithChildren, ReactElement } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Layout from "../../components/layout";

const Hello = dynamic(() => import("../../components/hello"));

type Props = {
  text: string;
};

const SsrDemo = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>SSR DEMO</title>
        <meta name="description" content="This is for demo purpose!" />
        <meta property="og:title" content="SSR DEMO!" />
      </Head>
      <div>{props.text}</div>
      <Hello />
    </>
  );
};

export async function getServerSideProps(): Promise<{ props: Partial<Props> }> {
  const res = await fetch(`http://localhost:3000/api/ssr-demo`);
  const { data } = await res.json();

  console.debug("This is run on server!", data);
  return { props: { text: data } };
}

SsrDemo.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default SsrDemo;
