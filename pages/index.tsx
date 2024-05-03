import Head from "next/head";
// import Board from "@/components/board";
// import Score from "@/components/score";
//import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Play 2048</title>
        <meta
          name="description"
          content="Fully-functional 2048 game built in NextJS and TypeScript. Including animations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon16.png" />
      </Head>
      <header>
        <h1>2048</h1>
        {/* <Score /> */}
      </header>
      <main>{/* <Board /> */}</main>
      <div>
        <h2>
          🚀 <span>Learn React 18 & Next.js</span>
        </h2>
        <p>
          Join my and learn React & Next.js by creating your own 2048 game from
          scratch.
        </p>
      </div>
      <footer>
        <div></div>
        <div>Made with ❤️ by Matéush</div>
      </footer>
    </div>
  );
}
