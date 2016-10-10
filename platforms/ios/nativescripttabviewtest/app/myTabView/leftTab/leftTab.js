"use strict";
//leftTab.ts (TypeScript)
var tab_view_1 = require('ui/tab-view');
//
var THIS_TAB_IDX = 0; //index at which this tab resides 
var thisView;
var isThisTabSelected = false;
function onTabChanged(evt) {
    //isThisTabSelected = evt.newIndex === THIS_TAB_IDX;
    //   let tabView: TabView = <TabView>thisView.parent,
    //       selectedTabViewItem: TabViewItem = tabView.items[evt.newIndex];
    //   isThisTabSelected = selectedTabViewItem.view === thisView;
    //   console.log(selectedTabViewItem);
    console.log("onTabChanged" + thisView);
}
function onViewLoaded(args) {
    console.log("leftTab -> onViewLoaded");
    //args.object is the reference to the <stack-layout> view in leftTab.xml
    var thisView = args.object;
    var tabView = thisView.parent;
    isThisTabSelected = tabView.selectedIndex === THIS_TAB_IDX;
    tabView.on(tab_view_1.TabView.selectedIndexChangedEvent, onTabChanged);
    //console.log("onViewLoaded");
    //console.log(thisView);
}
exports.onViewLoaded = onViewLoaded;
function onViewUnloaded(args) {
    //TabView's items' views get loaded/unloaded as user navigates, so clean up handlers, etc...
    var tabView = thisView.parent;
    tabView.off(tab_view_1.TabView.selectedIndexChangedEvent, onTabChanged);
    console.log("onViewUnloaded");
}
exports.onViewUnloaded = onViewUnloaded;
//# sourceMappingURL=leftTab.js.map