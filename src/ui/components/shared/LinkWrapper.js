import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom';

// Adapted from https://tds.telus.com/components/index.html#/Links?id=link
const LinkWrapper = ({ TDSLink, hasIcon, children, ...rest }) => (
  <TDSLink {...rest} reactRouterLinkComponent={rest.to ? ReactRouterLink : undefined}>
    {children}
  </TDSLink>
)

export default LinkWrapper