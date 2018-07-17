/**
 * @flow
 */

import React from 'react';

import css from './TextField.scss';


type Props = {};

export const TextField = (props: Props) => <input className={css.field} {...props} />;
