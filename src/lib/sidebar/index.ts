import type { Snippet } from 'svelte';
import type { HTMLAttributes } from "svelte/elements";

interface SidebarProps extends HTMLAttributes<HTMLElement>{
    children : Snippet;
    wrapperClass:String
}

interface SidebarItems {
    item : String;
    itemClass:String;
    navigate:String
}
export {type SidebarProps , type SidebarItems};