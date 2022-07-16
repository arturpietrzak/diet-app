import type { NextPage } from "next";
import Link from "next/link";

const Account: NextPage = () => {
  return (
    <>
      <h1>Account</h1>
      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export default Account;
