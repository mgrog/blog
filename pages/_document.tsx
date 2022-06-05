import {getCssText} from '~/stitches.config';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&family=Indie+Flower&display=swap'
            rel='stylesheet'
          />
          <style id='stitches' dangerouslySetInnerHTML={{__html: getCssText()}} />
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
