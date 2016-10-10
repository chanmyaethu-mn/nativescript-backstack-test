//leftTab.ts (TypeScript)
import {TabView, TabViewItem ,SelectedIndexChangedEventData} from 'ui/tab-view'; 
import {View} from 'ui/core/view'; 
import {EventData} from "data/observable";
//
const THIS_TAB_IDX: number = 0; //index at which this tab resides 
var thisView: View; 
var isThisTabSelected: boolean = false;

function onTabChanged(evt: SelectedIndexChangedEventData) { 
  //isThisTabSelected = evt.newIndex === THIS_TAB_IDX;
//   let tabView: TabView = <TabView>thisView.parent,
//       selectedTabViewItem: TabViewItem = tabView.items[evt.newIndex];
//   isThisTabSelected = selectedTabViewItem.view === thisView;
//   console.log(selectedTabViewItem);
    console.log("onTabChanged" + thisView);
}

export function onViewLoaded(args: EventData) {
    console.log("leftTab -> onViewLoaded") 
  //args.object is the reference to the <stack-layout> view in leftTab.xml
  let thisView = <View>args.object;
  let tabView: TabView = <TabView>thisView.parent;
  isThisTabSelected = tabView.selectedIndex === THIS_TAB_IDX;
  tabView.on(TabView.selectedIndexChangedEvent, onTabChanged);
  //console.log("onViewLoaded");
  //console.log(thisView);
  
}

export function onViewUnloaded(args: EventData) { 
  //TabView's items' views get loaded/unloaded as user navigates, so clean up handlers, etc...
  let tabView: TabView = <TabView>thisView.parent;
  tabView.off(TabView.selectedIndexChangedEvent, onTabChanged);
  console.log("onViewUnloaded");
}