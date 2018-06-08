"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDom = require("react-dom");
const Loadable = require("react-loadable");
exports.LoadableHello = Loadable({
    loader: () => {
        console.log('loader');
        return /* webpackChunkName: "hello" */ Promise.resolve().then(() => require('./Hello'));
    },
    loading: () => {
        console.log('loading');
        return (React.createElement("div", null, "loading ..."));
    },
});
const Hest = () => React.createElement("div", null, "hest");
if (typeof window !== 'undefined') {
    ReactDom.render(React.createElement(exports.LoadableHello, { target: "qwe" }), document.getElementById('app'));
}
else {
    console.log(Promise.resolve().then(() => require('./Hello')));
}
//# sourceMappingURL=Index.js.map