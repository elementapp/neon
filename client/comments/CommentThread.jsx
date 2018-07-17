/**
 * @flow
 */

import React from 'react';

import {Comment} from './Comment';
import {CommentReply} from './CommentReply';
import type {CommentThreadProps} from './types';

import css from './CommentThread.scss';


type Props = {};

export class CommentThread extends React.PureComponent<Props & CommentThreadProps, void> {
  render() {
    return (
      <div className={css.root}>
        <Comment {...this.props.rootComment} />
        {this.props.replies.map((reply, idx) => <CommentReply key={idx} {...reply} />)}
      </div>
    );
  }
}
