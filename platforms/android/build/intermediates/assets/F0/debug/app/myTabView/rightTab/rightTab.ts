import {EventData} from "data/observable";
import {TabView, TabViewItem ,SelectedIndexChangedEventData} from 'ui/tab-view'; 
import {View} from 'ui/core/view';

var thisView: View;

export function onViewLoaded(args: EventData) {
    console.log("RightTab onViewLoaded");
}