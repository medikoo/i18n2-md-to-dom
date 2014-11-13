# i18n2-md-to-dom

### Installation

	$ npm install medikoo/i18n2-md-to-dom

### Usage

Converts [i18n2](https://github.com/medikoo/i18n2#i18n2) message, supposedly written with markdown format into DOM


```javascript
var _ = require('i18n2')(locale);
var md2dom = require(i18n2-md-to-dom);

var dom = md2Dom(_("Some text with __important__ content."));
// dom reflects: <p>Some text with <strong>important</strong> content.</p>

// Inserts are fully supported
dom = md2Dom(_("My name is __${ fullName }__.", {
  fullName: "John Smith"
}));
// dom reflects: <p>My name is <strong>John Smith</strong>.</p>
```

Behind the scenes it uses [Remarkable](https://github.com/jonschlinkert/remarkable#remarkable) markdown parser

### Tests [![Build Status](https://travis-ci.org/medikoo/i18n2-md-to-dom.svg)](https://travis-ci.org/medikoo/i18n2-md-to-dom)

	$ npm test
