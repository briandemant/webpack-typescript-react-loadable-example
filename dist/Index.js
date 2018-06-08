import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as Loadable from 'react-loadable';
export const LoadableHello = Loadable({
    loader: () => {
        console.log('loader');
        return /* webpackChunkName: "hello" */ import('./Hello');
    },
    loading: () => {
        console.log('loading');
        return (React.createElement("div", null, "loading ..."));
    },
});
const Hest = () => React.createElement("div", null, "hest");
if (typeof window !== 'undefined') {
    ReactDom.render(React.createElement(LoadableHello, { target: "qwe" }), document.getElementById('app'));
}
else {
    console.log(import('./Hello'));
}
//# sourceMappingURL=Index.js.map