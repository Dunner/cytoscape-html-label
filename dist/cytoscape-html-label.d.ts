declare type IHAlign = "left" | "center" | "right";
declare type IVAlign = "top" | "center" | "bottom";
declare type IEAlign = "source" | "midpoint" | "target";
declare var module: any;
declare var define: any;
declare var cytoscape: any;
interface CytoscapeHtmlParams {
    query?: string;
    halign?: IHAlign;
    valign?: IVAlign;
    ealign?: IEAlign;
    autorotate?: boolean;
    halignBox?: IHAlign;
    valignBox?: IVAlign;
    cssClass?: string;
    tpl?: (d: any) => string;
}
