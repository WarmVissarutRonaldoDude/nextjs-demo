import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        <Link href="/ssrDemo" prefetch>
          <a>SSR</a>
        </Link>
      </li>
      <li>
        <Link href="/ssgDemo">
          <a>SSG</a>
        </Link>
      </li>
      <li>
        <Link href="/csrDemo">
          <a>CSR</a>
        </Link>
      </li>
      <li>
        <a href="/ssgDemo">SSG - without next/link</a>
      </li>
    </ul>
  );
}

export default Home;
