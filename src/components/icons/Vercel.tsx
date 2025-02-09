import { Tooltip } from '@heroui/react';
import * as React from 'react';
import type { SVGProps } from 'react';
const VercelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 222"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path fill="#fff" d="m128 0 128 221.705H0z" />
  </svg>
);
export const Vercel = (): React.JSX.Element => (
  <Tooltip key={'bottom'} content={'Vercel'} placement={'bottom'}>
    <VercelIcon />
  </Tooltip>
);
