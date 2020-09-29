import React from 'react';

import { Break, Column, Container, Link, Row, Text, Title } from './footer.styles';

export const Footer = ({ children, ...restProps }) => <Container {...restProps}>{children}</Container>;

const FooterRow = ({ children, ...restProps }) => <Row {...restProps}>{children}</Row>;
const FooterColumn = ({ children, ...restProps }) => <Column {...restProps}>{children}</Column>;
const FooterLink = ({ children, ...restProps }) => <Link {...restProps}>{children}</Link>;
const FooterTitle = ({ children, ...restProps }) => <Title {...restProps}>{children}</Title>;
const FooterText = ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>;
const FooterBreak = ({ ...restProps }) => <Break {...restProps} />;

Footer.Row = FooterRow;
Footer.Column = FooterColumn;
Footer.Link = FooterLink;
Footer.Title = FooterTitle;
Footer.Text = FooterText;
Footer.Break = FooterBreak;

export default Footer;
