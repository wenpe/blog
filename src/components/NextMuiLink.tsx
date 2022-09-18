import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import MuiLink from '@mui/material/Link';
import { css } from '@mui/styled-engine';

const linkStyle = css`
  color: white;
  text-decoration: none;
`;

type LinkProps = {
  href: NextLinkProps['href'];
  target?: string;
  children?: React.ReactNode;
};

export const NextMuiLink: React.FC<LinkProps> = (props) => (
  <NextLink href={props.href} passHref>
    <MuiLink target={props.target || '_self'} rel='noopener noreferrer' css={linkStyle}>
      {props.children}
    </MuiLink>
  </NextLink>
);
