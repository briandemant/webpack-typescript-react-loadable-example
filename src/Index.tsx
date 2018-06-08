import * as React from 'react'
import * as ReactDom from 'react-dom'
import * as Loadable from 'react-loadable'

export const LoadableHello = Loadable({
	loader: () => {
		console.log('loader')
		return /* webpackChunkName: "hello" */ import('./Hello')
	},
	loading: () => {
		console.log('loading')
		return (<div>loading ...</div>)
	},
})

const Hest = () => <div>hest</div>

if (typeof window !== 'undefined') {
	ReactDom.render(<LoadableHello target="qwe"/>, document.getElementById('app'))
} else {
	console.log(import('./Hello'))
}