// src/index.tsx
import React, { type FC } from 'react';

interface Props {
  /**
   * @description 属性描述
   * @default "默认值"
   */
  title?: string;
}

export const Boo: FC<Props> = ({ title = 'defalut' }) => <h1>{title}</h1>;

export default Boo;
