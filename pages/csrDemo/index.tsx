import useSWR from "swr";

const fetcher = async (...args: any[]) => {
  // @ts-ignore
  const res = await fetch(...args);

  // fake delay 2s
  await (async () => new Promise((resolve) => setTimeout(resolve, 2000)))();

  return res.json();
};

const CsrDemo = () => {
  const { data, error } = useSWR("/api/hello", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <div>hello {data.name}!</div>;
};

export default CsrDemo;
