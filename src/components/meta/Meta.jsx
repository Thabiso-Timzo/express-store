import React from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async';

const Meta = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
      </Helmet>
    </HelmetProvider>
  )
}

export default Meta
