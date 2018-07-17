/**
 * @flow
 */

import React, {type Node} from 'react';

import css from './Page.scss';


type Props = {
  children?: Node,
}

export class Page extends React.PureComponent<Props, void> {
  render() {
    return (
      <div className={css.container}>
        <div className={css.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
