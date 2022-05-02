import type { FC } from "react";

type Props = {
  text: string;
};

const SsgDemo: FC<Props> = (props) => {
  return <div>{props.text}</div>;
};

// getStaticProps
export async function getStaticProps() {
  // run business logic / fetching data on "build" time.
  const res = await fetch(`http://localhost:3000/api/hello`);
  const { name } = await res.json();

  console.debug("This is run on server on build time!", name);

  // revalidate every 10 seconds. (Incremental Static Regeneration - ISG)
  return { props: { text: name }, revalidate: 60 };
}

export default SsgDemo;
