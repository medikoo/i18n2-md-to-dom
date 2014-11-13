'use strict';

var i18n2 = require('i18n2');

module.exports = function (t, a) {
	var _ = i18n2({ foo: 'bar' }), md = t(document), result;

	a.h1("Plain text");
	result = md(_('razdwa'));
	a(result.nodeName, 'P');
	a(result.childNodes.length, 1);
	a(result.firstChild.data, 'razdwa');

	a.h1("Mixed");
	result = md(_('raz __elo__ dwa'));
	a(result.nodeName, 'P');
	a(result.childNodes.length, 3);
	a(result.childNodes[0].data, 'raz ');
	a(result.childNodes[1].nodeName, 'STRONG');
	a(result.childNodes[1].firstChild.data, 'elo');
	a(result.childNodes[2].data, ' dwa');

	a.h1("Plain with variables");
	result = md(_('marko ${ miszel } zagalo', { miszel: 'fura' }));
	a(result.nodeName, 'P');
	a(result.childNodes.length, 3);
	a(result.childNodes[0].data, 'marko ');
	a(result.childNodes[1].data, 'fura');
	a(result.childNodes[2].data, ' zagalo');

	a.h1("Mixed with varabiles");
	result = md(_('marko __marek ${ miszel } zegarek__ zagalo ${ fuszka }', {
		miszel: 'fura',
		fuszka: {
			toDOM: function (document) {
				var el = document.createElement('p');
				el.innerHTML = 'razdwa';
				return el;
			}
		}
	}));
	a(result.nodeName, 'P');
	a(result.childNodes.length, 4);
	a(result.childNodes[0].data, 'marko ');
	a(result.childNodes[1].nodeName, 'STRONG');
	a(result.childNodes[1].childNodes.length, 3);
	a(result.childNodes[1].childNodes[0].data, 'marek ');
	a(result.childNodes[1].childNodes[1].data, 'fura');
	a(result.childNodes[1].childNodes[2].data, ' zegarek');
	a(result.childNodes[2].data, ' zagalo ');
	a(result.childNodes[3].nodeName, 'P');
	a(result.childNodes[3].childNodes.length, 1);
	a(result.childNodes[3].childNodes[0].data, 'razdwa');
};
