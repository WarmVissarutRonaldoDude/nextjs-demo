import type { FC } from "react";
import { useRouter } from "next/router";

type Props = {
  text: string;
};

const SsgDemo: FC<Props> = (props) => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{props.text} - with url slugs {id}</div>;
};

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/hello/${params.id}`);
  const { name } = await res.json();

  console.debug("This is run on server on build time!", name);

  // revalidate every 10 seconds. (Incremental Static Regeneration - ISG)
  return { props: { text: name }, revalidate: 1 };
}

// This function gets called at build time
export async function getStaticPaths() {
   // call API to get available list (carpenters/plumbers)

  // the paths we want to pre-render
  const paths = [
    {
      params: { id: `1` },
    },
  ];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export default SsgDemo;
