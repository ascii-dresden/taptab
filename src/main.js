import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		selectedTap: null,
		newTapName: null,

		taps: {
			// hendrik: [
			// 	{ name: 'coffee', price: 0.80 },
			// 	{ name: 'mate', price: 1.30 },
			// 	{ name: 'PremiumCola', price: 1.30 },
			// ],
			// kilian: [
			// 	{ name: 'Kolle Mate', price: 1.30 },
			// ]
		},

		catalogue: [
			 { name: "Kaffee", price: .80 },
			 { name: "Milchkaffee", price: 1.00 },
			 { name: "Großer Latte", price: 1.20 },
			 { name: "Hackerbrause", price: 1.50 },
			 { name: "Limo", price: 1.10 },
			 { name: "Riegel", price: .80 },
			 { name: "Riegel", price: .60 },
			 { name: "Riegel", price: .50 },
			 { name: "Riegel", price: .30 },
			 { name: "Bagel", price: 2.30 },
			 { name: "Brötchen", price: 1.40 },
			 { name: "Muffin", price: 1.20 },
			 { name: "Kuchen", price: 1.00 },
		],

		newCatalogueItem: {
			name: null,
			price: null
		},

	}
});

window.app = app;

export default app;
