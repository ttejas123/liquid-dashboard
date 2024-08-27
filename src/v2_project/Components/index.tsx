import { d } from './Layout';
import BasicTable, { BasicTableState } from "./Tables/BasicTable";

export default {
    "Table": {
        "BasicTable": {
            "Component": BasicTable,
            "State": BasicTableState
        }
    },
    "Layout": {
        DashboardLayout: {
            "Component": d.DashboardLayout.c,
            "State": d.DashboardLayout.s
        },
        GalleryLayout: {
            "Component": d.GalleryLayout.c,
            "State": d.GalleryLayout.s
        },
        GridLayout: {
            "Component": d.GridLayout.c,
            "State": d.GridLayout.s
        },
        SidebarLayout: {
            "Component": d.SidebarLayout.c,
            "State": d.SidebarLayout.s
        },
        SplitLayout: {
            "Component": d.SplitLayout.c,
            "State": d.SplitLayout.s
        },
        StackedLayout: {
            "Component": d.StackedLayout.c,
            "State": d.StackedLayout.s
        },
        TabbedLayout: {
            "Component": d.TabbedLayout.c,
            "State": d.TabbedLayout.s
        },
        TimelineLayout: {
            "Component": d.TimelineLayout.c,
            "State": d.TimelineLayout.s
        
    }
    }
}