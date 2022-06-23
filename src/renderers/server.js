import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { App } from 'components/App';

export async function serverRenderer() {
  const initialData = {
    appName: 'Star Match Game',
  };

  const pageData = {
    title: `Hello  Player`,
  };

  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />,
    ),
    pageData,
  });
}
