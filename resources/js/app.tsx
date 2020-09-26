/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
//* global require */

// require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Types from './types';
import store from './store';
import App from './components/App';

const app = document.getElementById('app');

if (app) {
	const items = JSON.parse(app.dataset.items || '') as Array<Types.IItem>;
	const zones = JSON.parse(app.dataset.zones || '') as Types.IZones;

	ReactDOM.render(
		<React.StrictMode>
			<Provider store={store}>
				<App items={items} zones={zones} root={app.dataset.root || ''}/>
			</Provider>
		</React.StrictMode>, app
	);
}
