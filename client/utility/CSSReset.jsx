/**
 * @flow
 */

import React, {type Node} from 'react';

import css from './CSSReset.scss';


type Props = {
  children?: Node,
}

export class CSSReset extends React.PureComponent<Props, void> {
  render() {
    return (
      <div className={css.reset}>
        {this.props.children}
      </div>
    );
  }
}
