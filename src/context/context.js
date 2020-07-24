import React from 'react';

const PortfolioContext = React.createContext({
  //   title: 'Lawrence',
  //   name: 'Lawrence',
  //   subtitle: '',
  //   cta: '',
});

export const PortfolioProvider = PortfolioContext.Provider;
export const PortfolioConsumer = PortfolioContext.Consumer;

export default PortfolioContext;
