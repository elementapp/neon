/**
 * @flow
 */

import React from 'react';

import {CommentsHeader} from './CommentsHeader';
import {CommentThread} from './CommentThread';
import type {CommentThreadProps} from './types';

import css from './CommentSection.scss';


type Props = {
  commentThreads: Array<CommentThreadProps>,
};

export class CommentSection extends React.PureComponent<Props, void> {
  render() {
    return (
      <div className={css.root}>
        <CommentsHeader />
        {this.props.commentThreads.map((commentThread, idx) => (
          <CommentThread
            key={idx}
            replies={commentThread.replies}
            rootComment={commentThread.rootComment}
          />
        ))}
      </div>
    );
  }
}
