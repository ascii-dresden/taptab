import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		name: 'TapTap',

		selectedTap: null,
		newTapName: null,

		taps: {
			hendrik: [
				{ name: 'coffee', price: 0.80 },
				{ name: 'mate', price: 1.30 },
			],
			kilian: [
				{ name: 'Kolle Mate', price: 1.30 },
			]
		}

	}
});

window.app = app;

export default app;