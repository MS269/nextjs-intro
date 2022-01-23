import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/about">
            <a className={router.pathname === "/about" ? "active" : ""}>
              About
            </a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }

        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  );
}
