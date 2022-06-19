import React, {PropsWithChildren} from 'react';

declare global {
  type ReactFCC<T> = React.FC<PropsWithChildren<T>>;
}

export {};
