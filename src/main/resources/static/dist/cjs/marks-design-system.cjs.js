'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-fd4446c3.js');

/*
 Stencil Client Patch Browser v4.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('marks-design-system.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["marks-button_5.cjs",[[1,"marks-integration",{"isLoading":[32],"data":[32],"drivers":[32]}],[1,"marks-modal",{"isopen":[1540],"closeIcon":[1,"close-icon"],"header":[1],"appearance":[1],"buttons":[1],"_buttons":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1],"data":[32],"verseRef":[32],"verse":[32],"isLoading":[32]}],[1,"marks-button",{"text":[1],"appearance":[1],"loader":[4]}],[0,"marks-spinner",{"type":[8],"color":[8]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=marks-design-system.cjs.js.map