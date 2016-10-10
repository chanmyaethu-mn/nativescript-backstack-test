"use strict";
//leftTab.ts (TypeScript)
var tab_view_1 = require('ui/tab-view');
var app = require("application");
var THIS_TAB_IDX = 0; //index at which this tab resides 
var tabView;
var isThisTabSelected = false;
var newIndex;
function onTabChanged(evt) {
    newIndex = evt.newIndex;
}
function onViewLoaded(args) {
    //args.object is the reference to the <stack-layout> view in leftTab.xml
    var thisView = args.object;
    tabView = thisView.parent;
    isThisTabSelected = tabView.selectedIndex === THIS_TAB_IDX;
    tabView.on(tab_view_1.TabView.selectedIndexChangedEvent, onTabChanged);
    // android back button event registration
    if (app.android) {
        app.android.on(app.AndroidApplication.activityBackPressedEvent, backEvent);
    }
}
exports.onViewLoaded = onViewLoaded;
function onViewUnloaded(args) {
    if (app.android) {
        app.android.on(app.AndroidApplication.activityBackPressedEvent, backEvent);
    }
}
exports.onViewUnloaded = onViewUnloaded;
function backEvent(args) {
    // If tabView is navigated which is not in tab index zero, set selected tab index by zero.
    if (newIndex !== undefined && newIndex !== 0) {
        tabView.selectedIndex = 0;
        args.cancel = true;
    }
}
//# sourceMappingURL=leftTab.js.map