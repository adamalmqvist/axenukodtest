import React from 'react';


class TextStore {
 text = 'Hello World'
}
const textStore = new TextStore();
export const StoreContext = React.createContext(textStore);
