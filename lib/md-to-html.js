'use strict';

var MarkdownIt = require('markdown-it')

  , md = new MarkdownIt();

module.exports = function (mdText) { return md.render(mdText).trim(); };
