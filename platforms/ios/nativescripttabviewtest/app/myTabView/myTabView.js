"use strict";
var page;
function onPageLoaded(args) {
    page = args.object;
    console.log("Parent onPageLoaded");
    console.log(page.parent.className);
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=myTabView.js.map