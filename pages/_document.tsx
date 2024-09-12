import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='eng'>
        <Head>
          <meta name='description' content="Mike Grogan's Blog" />
          <meta name='author' content='Mike Grogan' />
          <meta
            name='keywords'
            content='Mike Grogan, Michael Grogan, Typescript, Rust, Frontend, CSS'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&family=Indie+Flower&family=Montserrat&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
