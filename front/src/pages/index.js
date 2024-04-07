// front/src/pages/index.js
import Link from "next/link";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Bienvenue sur gBlog</h1>
      <p>
        Des articles sur différents sujets.
      </p>

      <nav>
        <ul>
          <li>
            <Link href="/articles" legacyBehavior>
              <a>Voir tous les articles</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>À propos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
