import { p as promiseResolve, b as bootstrapLazy } from './index-169cdb2d.js';
export { s as setNonce } from './index-169cdb2d.js';

/*
 Stencil Client Patch Browser v4.9.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["marks-button_5",[[1,"marks-integration",{"isLoading":[32],"data":[32],"drivers":[32]}],[1,"marks-modal",{"isopen":[1540],"closeIcon":[1,"close-icon"],"header":[1],"appearance":[1],"buttons":[1],"_buttons":[32]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1],"data":[32],"verseRef":[32],"verse":[32],"isLoading":[32]}],[1,"marks-button",{"text":[1],"appearance":[1],"loader":[4]}],[0,"marks-spinner",{"type":[8],"color":[8]}]]]], options);
});

//# sourceMappingURL=marks-design-system.js.map