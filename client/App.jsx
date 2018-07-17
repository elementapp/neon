/**
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';

import {Page} from 'shared/Page';
import {getStore} from 'store/getStore';
import {CSSReset} from 'utility/CSSReset';
import {Video} from 'video/Video';


const store = getStore();

const MOCK_DATA = {
  commentThreads: [
    {
      rootComment: {
        authorId: 'phou',
        comment: 'The angle of the bear here is very unclear.',
        createdAt: '2018-06-01 14:46:35',
        videoTimestamp: '0:03',
      },
      replies: [
        {
          'authorId': 'swap',
          'comment': 'Test reply',
          'createdAt': '2018-06-01 16:30:12',
        },
      ],
    },
    {
      rootComment: {
        authorId: 'andrew',
        comment: 'This video sucks',
        createdAt: '2018-06-03 16:33:02',
      },
      replies: [
        {
          'authorId': 'swap',
          'comment': 'Test reply',
          'createdAt': '2018-06-03 19:00:47',
        },
        {
          'authorId': 'phou',
          'comment': 'Test reply',
          'createdAt': '2018-06-03 20:15:42',
        },
      ],
    },
  ],
};

export class App extends React.Component<void> {
  render() {
    return (
      <Provider store={store}>
        <CSSReset>
          <Page>
            <Video {...MOCK_DATA} />
          </Page>
        </CSSReset>
      </Provider>
    );
  }
}
