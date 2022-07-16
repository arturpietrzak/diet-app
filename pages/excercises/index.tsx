import type { NextPage } from "next";
import Link from "next/link";

const Excercises: NextPage = () => {
  return (
    <>
      <h1>Excercises</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export default Excercises;
