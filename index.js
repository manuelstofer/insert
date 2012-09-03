"use strict";

var domify = require('domify'),
    selectorfn = require('selectorfn'),
    each = require('each'),

    prepend = function (el, newEl) {
        el.insertBefore(newEl, el.firstChild);
    },

    append = function (el, newEl) {
        el.appendChild(newEl);
    },

    insertfn = function (fn) {
        return selectorfn(function (el, contents) {
            if (typeof contents === "string") {
                contents = domify('<ins>' + contents + '</ins>').childNodes;
            } else if (contents instanceof Element) {
                contents = [contents];
            }
            each(contents, function (newEl) {
                fn(el, newEl);
            });
        });
    };

module.exports = {
    prepend: insertfn(prepend),
    append: insertfn(append)
};

