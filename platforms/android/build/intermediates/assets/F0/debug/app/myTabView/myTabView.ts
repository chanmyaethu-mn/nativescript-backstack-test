import {TabView, TabViewItem ,SelectedIndexChangedEventData} from 'ui/tab-view'; 
import {View} from 'ui/core/view'; 
import {EventData} from "data/observable";
import { Page } from 'ui/page';

let page: Page;

export function onPageLoaded(args: EventData) {
    page = <Page>args.object;
    console.log("Parent onPageLoaded");

    console.log(page.parent.className);
}