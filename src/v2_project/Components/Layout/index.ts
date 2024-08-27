import DashboardLayout, { DashboardLayoutState } from './Dashboard/DashboardLayout'
import GalleryLayout, { GalleryLayoutState } from './Gallery/GalleryLayout'
import GridLayout, { GridLayoutState } from './Grid/GridLayout'
import SidebarLayout, { SidebarLayoutState } from './Sidebar/SidebarLayout'
import SplitLayout, { SplitViewLayoutState } from './Split/SplitLayout'
import StackedLayout, { StackedLayoutState } from './Stack/StackedLayout'
import TabbedLayout, { TabbedLayoutState } from './Tabbed/TabbedLayout'
import TimelineLayout, { TimelineLayoutState } from './Timeline/TimelineLayout'
const d = {DashboardLayout: {
    c: DashboardLayout,
    s: DashboardLayoutState
},
GalleryLayout: {
    c: GalleryLayout,
    s: GalleryLayoutState
},
GridLayout: {
    c: GridLayout,
    s: GridLayoutState
},
SidebarLayout: {
    c: SidebarLayout,
    s: SidebarLayoutState
},
SplitLayout: {
    c: SplitLayout,
    s: SplitViewLayoutState
},
StackedLayout: {
    c: StackedLayout,
    s: StackedLayoutState
},
TabbedLayout: {
    c: TabbedLayout,
    s: TabbedLayoutState
},
TimelineLayout: {
    c: TimelineLayout,
    s: TimelineLayoutState
}}
export {
    d
}
