/**
 * @flow
 */

import React from 'react';

import type {CommentProps} from './types';

import {Comment} from './Comment';

import css from './CommentReply.scss';


type Props = {};

export class CommentReply extends React.PureComponent<Props & CommentProps, void> {
  render() {
    return (
      <div className={css.root}>
        <Comment {...this.props} />
      </div>
    );
  }
}
