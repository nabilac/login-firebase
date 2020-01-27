import React from 'react';

const MhsContext = React.createContext([]);

export const MhsProvider = MhsContext.Provider
export const MhsConsumer = MhsContext.Consumer

export default MhsContext;