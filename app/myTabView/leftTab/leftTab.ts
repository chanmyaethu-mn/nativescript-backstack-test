//leftTab.ts (TypeScript)
import {TabView, TabViewItem ,SelectedIndexChangedEventData} from 'ui/tab-view'; 
import {View} from 'ui/core/view'; 
import {EventData} from "data/observable";
import { Page } from 'ui/page';
import app = require("application");
import * as frameModule from "ui/frame";

const THIS_TAB_IDX: number = 0; //index at which this tab resides 
let tabView: TabView;
var isThisTabSelected: boolean = false;
var newIndex;

function onTabChanged(evt: SelectedIndexChangedEventData) { 
    newIndex = evt.newIndex;
}

export function onViewLoaded(args: EventData) {

  //args.object is the reference to the <stack-layout> view in leftTab.xml
  let thisView = <View>args.object;
  tabView = <TabView>thisView.parent;
  isThisTabSelected = tabView.selectedIndex === THIS_TAB_IDX;
  tabView.on(TabView.selectedIndexChangedEvent, onTabChanged);

  // android back button event registration
    if (app.android) {
        app.android.on(app.AndroidApplication.activityBackPressedEvent, backEvent);
    }
  
}

export function onViewUnloaded(args: EventData) { 
  if (app.android) {
      app.android.on(app.AndroidApplication.activityBackPressedEvent, backEvent);
  }
}

function backEvent(args:app.AndroidActivityBackPressedEventData) {

    // If tabView is navigated which is not in tab index zero, set selected tab index by zero.
    if (newIndex !== undefined && newIndex !== 0) {
        tabView.selectedIndex = 0;
        args.cancel = true; 
    }
}