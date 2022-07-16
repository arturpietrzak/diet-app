import type { NextPage } from "next";
import Link from "next/link";

const Diets: NextPage = () => {
  return (
    <>
      <h1>Diets page</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export default Diets;
