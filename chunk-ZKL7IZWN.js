import{a as Ct}from"./chunk-OIBUMB3M.js";import{a as ut,b as Et}from"./chunk-WII7WVCA.js";import{a as ce,b as se,c as pe,d as M,e as ne,f as oe,h as Pt}from"./chunk-QJXTTPZ6.js";import"./chunk-734MJPRR.js";import"./chunk-2HOHXGKY.js";import{a as Tt}from"./chunk-D7X3QAHI.js";import{$ as p,$a as Je,$c as Ae,Ac as Te,Af as gt,Bd as P,Be as be,Ce as le,Da as x,Db as b,Ea as Ee,Eb as f,Fb as h,Ff as he,Gc as dt,Ge as qe,Gf as ve,Ia as L,Jb as Ye,Ka as We,Kb as J,La as Ue,Lf as me,Mb as Pe,Na as s,Nb as et,Nc as mt,Nd as _e,Nf as yt,Pc as I,Rc as G,Rd as $,Sc as ae,Sd as z,Tc as B,U as Qe,Ua as H,Ub as tt,Uc as we,V as ue,Vb as it,Vc as S,Wa as Ke,Wc as U,X as Be,Xa as $e,Xc as re,Ya as i,Yf as te,Za as t,Zc as st,Zd as St,_a as o,_b as Z,_c as De,_d as W,a as O,aa as c,ab as Ze,b as Q,cb as F,cc as nt,cd as pt,dd as ct,eg as ie,fg as N,ib as g,ig as ge,ja as Y,jb as u,jf as ke,kb as ee,kc as ot,kf as fe,lb as w,lc as at,lg as Ie,mb as Ce,mc as Se,oe as bt,pa as He,qb as D,rb as A,re as ye,sa as m,sb as _,se as ft,sf as ht,tc as rt,te as v,uf as vt,vd as xt,wb as K,wf as de,xa as R,xb as e,xc as lt,xd as Re,yb as xe,zb as Xe,zf as Fe}from"./chunk-YIHTU4FF.js";var Vi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","templates-before",""]],[["","templates-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],zi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[enums-before]","[enums-after]","[templates-before]","[templates-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],wt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let y=E.querySelector(".po-tab-button-label");y&&y?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(Y))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-grid"]],viewQuery:function(r,n){if(r&1&&(D(N,5),D(z,5)),r&2){let l;A(l=_())&&(n.tabs=l.first),A(l=_())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:zi,decls:8292,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Function"],[1,"language-html"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","/guides/icons"],[1,"language-typescript"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfAggregateConfig"],["pan","",1,"docs-api-property-type","Array<ThfAggregateDescriptor>"],["p-type","success","p-value","since 19.19.0"],["pan","",1,"docs-api-property-type","Array<ThfGridColumn>"],[1,"docs-api-deprecated-marker"],["p-type","success","p-value","since 19.8.0"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"],["pan","",1,"docs-api-property-type","{","[key:","string]:","TemplateRef<any>;","}"],["pan","",1,"docs-api-property-type","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicSearchFilters>"],["pan","",1,"docs-api-property-type","Array<ThfFilterByColumn>"],["pan","",1,"docs-api-property-type","'basic'"],["pan","",1,"docs-api-property-type","'service'"],["pan","",1,"docs-api-property-type","ThfGridRowActions"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","null"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","ThfGridLiterals"],["pan","",1,"docs-api-property-type","(()","=>","ThfGridOptions)"],["pan","",1,"docs-api-property-type","Array<ThfGridOptionPaging>"],[1,"language-json"],["pan","",1,"docs-api-property-type","ThfGridDeleteService"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<ThfGridColumnSort>"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["href","https://tdn.totvs.com/pages/releaseview.action?pageId=871520382"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type","('active'"],["pan","",1,"docs-api-property-type","'removed')"],["p-label","Interfaces"],["p-label","ThfTableAction"],["href","https://po-ui.io/icons"],["p-label","ThfAggregateDescriptor"],["pan","",1,"docs-api-property-type","'sum'"],["pan","",1,"docs-api-property-type","'average'"],["pan","",1,"docs-api-property-type","'count'"],["pan","",1,"docs-api-property-type","'min'"],["pan","",1,"docs-api-property-type","'max'"],["p-label","ThfAggregateConfig"],["pan","",1,"docs-api-property-type","'right'"],["pan","",1,"docs-api-property-type","'defaultColumn'"],["p-label","ThfGridColumnSort"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["p-label","ThfGridColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["pan","",1,"docs-api-property-type","CustomEditProperties"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["href","/documentation/po-table-cell-template"],["href","/documentation/po-table-column-template"],["p-label","CustomEditProperties"],["href","https://po-ui.io/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","'input'"],["pan","",1,"docs-api-property-type","'number'"],["pan","",1,"docs-api-property-type","'select'"],["pan","",1,"docs-api-property-type","'datepicker'"],["pan","",1,"docs-api-property-type","'switch'"],["pan","",1,"docs-api-property-type","'combo'"],["pan","",1,"docs-api-property-type","'multiselect'"],["pan","",1,"docs-api-property-type","'decimal'"],["pan","",1,"docs-api-property-type","'checkbox'"],["pan","",1,"docs-api-property-type","'lookup'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["pan","",1,"docs-api-property-type","((rowData:","any,","column?:","ThfGridColumn)","=>","boolean)"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","(value:","any)","=>","void"],["pan","",1,"docs-api-property-type","(model:","any)","=>","void"],["pan","",1,"docs-api-property-type","(error:","HttpErrorResponse)","=>","void"],["pan","",1,"docs-api-property-type","(selection:","any"],["pan","",1,"docs-api-property-type","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","'sm'"],["pan","",1,"docs-api-property-type","'md'"],["pan","",1,"docs-api-property-type","'lg'"],["pan","",1,"docs-api-property-type","'xl'"],["pan","",1,"docs-api-property-type","'auto'"],["p-label","ThfGridDeleteService"],["p-label","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","(param:","any)","=>","FormGroup"],["pan","",1,"docs-api-property-type","(data:","any,","columnProperty:","string)","=>","FormGroup"],["p-label","ThfFilterByColumn"],["pan","",1,"docs-api-property-type","any"],["p-label","ThfGridLiterals"],["p-label","ThfGridOptionPaging"],["p-label","ThfGridOptions"],["p-label","ThfGridRowActions"],["pan","",1,"docs-api-property-type","(param:","any,","mode:","'edit'"],["pan","",1,"docs-api-property-type","'include')","=>","FormGroup"],["pan","",1,"docs-api-property-type","Observable<FormGroup>"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","Observable<boolean>"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRows:","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","Array<ThfGridEditModeActionType>"],["pan","",1,"docs-api-property-type","(updatedField:","any,","columnProperty:","string)","=>","boolean"],["p-label","Enums"],["p-label","ThfColumnSpacing"],["p-label","ThfGridEditModeActionType"],["p-label","Templates"],["p-label","ThfGridCellTemplateDirective"],["p-label","ThfGridColumnTemplateDirective"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(ee(Vi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),w(4),t(),i(5,"po-tab",4),w(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfGridComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`O grid foi criado para que voc\xEA tenha um controle de alto desempenho, oferecendo uma performance extremamente r\xE1pida,
integrando-se perfeitamente ao seu aplicativo e sendo altamente personaliz\xE1vel.`),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Grid"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfGridComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-grid
  t-action-delete="boolean"
  t-action-edit="Function"
  t-action-excel="boolean"
  t-action-pdf="boolean"
  t-actions-right="boolean"
  t-actions="Array<ThfTableAction>"
  t-actions-filter="boolean"
  (t-delete-items)="EventEmitter"
  t-aggregates-config="ThfAggregateConfig"
  t-aggregates="Array<ThfAggregateDescriptor>"
  t-allow-batch-delete="boolean"
  t-auto-size="boolean"
  t-auto-size-on-scroll="boolean"
  (t-change-aggregates)="EventEmitter"
  (t-change-filter-by-column)="EventEmitter"
  (t-change-fixed-columns)="EventEmitter"
  (t-change-options-column-manager)="EventEmitter"
  (t-change-row-state-filter)="EventEmitter"
  (t-change-visible-columns)="EventEmitter"
  (t-changed-density)="EventEmitter"
  (t-changed-items)="EventEmitter"
  (t-restore-column-manager)="EventEmitter"
  t-columns="Array<ThfGridColumn>"
  (t-columns-selected)="EventEmitter"
  t-components-size="string"
  t-container="boolean"
  t-custom-actions="Array<PoDropdownAction>"
  (t-custom-filter)="EventEmitter"
  t-custom-templates="{
    [key: string]: TemplateRef<any>;
}"
  (t-delete-item)="EventEmitter"
  t-disabled-include-button="boolean"
  t-draggable="boolean"
  t-edit-properties="ThfGridEditProperties"
  (t-change-page-size)="EventEmitter"
  t-fields="Array<PoPageDynamicSearchFilters>"
  t-filter-column-properties="Array<ThfFilterByColumn>"
  t-filter-input-mode="'basic' | 'service'"
  t-grid-row-actions="ThfGridRowActions"
  t-group="Array<string>"
  t-groupable="boolean | GroupableSettings"
  t-header-template="TemplateRef<void>"
  t-headline-fixed="boolean"
  t-height="number | string | null"
  t-hide-action-fixed-columns="boolean"
  t-hide-batch-actions="boolean"
  t-hide-columns-manager="boolean"
  t-hide-select-all="boolean"
  t-hide-table-search="boolean"
  t-loading="boolean"
  t-items="Array<any>"
  (t-items-after-get)="EventEmitter"
  t-literals="ThfGridLiterals"
  t-max-columns="number"
  t-max-height="number | string | null"
  t-max-resizable-width="number"
  t-min-height="number | string | null"
  t-min-resizable-width="number"
  (t-change-group)="EventEmitter"
  t-load="string | (() => ThfGridOptions)"
  t-options-paging="Array<ThfGridOptionPaging>"
  (t-change-order-column)="EventEmitter"
  t-page-size="number"
  t-page-size-virtual="number"
  t-pageable="boolean"
  t-param-delete-api="string"
  t-resizable="boolean"
  t-row-height="number"
  (t-rows-selected)="EventEmitter"
  t-selectable="boolean"
  t-selectable-entire-line="boolean"
  t-selectable-removed="boolean"
  (t-selected)="EventEmitter"
  (t-all-selected)="EventEmitter"
  t-service-delete-api="string | ThfGridDeleteService"
  t-service-api="string"
  t-show-densification-configuration="boolean"
  t-show-draggable-icon="boolean"
  t-show-footer-aggregates="boolean"
  (t-show-more)="EventEmitter"
  t-show-more-disabled="boolean"
  t-show-more-visible="boolean"
  t-single-select="boolean"
  t-sort="Array<ThfGridColumnSort>"
  (t-change-sort-column)="EventEmitter"
  t-sortable="boolean"
  t-spacing="string"
  t-striped="boolean"
  t-text-wrap="boolean"
  (t-unselected)="EventEmitter"
  (t-all-unselected)="EventEmitter"
  t-virtual-columns="boolean"
  t-virtual-scroll="boolean" >
</thf-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48,"t-action-delete"),o(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"boolean"),t()(),i(53,"td",25)(54,"p")(55,"code"),e(56,"false"),t()()(),i(57,"td",26)(58,"em")(59,"strong"),e(60,"(opcional)"),t()(),i(61,"p"),e(62,"Exibe o bot\xE3o de Excluir. Requer que a propriedade "),i(63,"strong"),e(64,"t-selectable"),t(),e(65," esteja habilitada."),t()()(),i(66,"tr",19)(67,"td",20)(68,"div",21)(69,"span",22),e(70,"t-action-edit"),o(71,"br"),t()()(),i(72,"td",23)(73,"code",27),e(74,"Function"),t()(),i(75,"td",25),e(76,"-"),t(),i(77,"td",26)(78,"em")(79,"strong"),e(80,"(opcional)"),t()(),i(81,"p"),e(82,`Exibe o bot\xE3o de Editar e executa a fun\xE7\xE3o definida ao clicar.
Requer que a propriedade `),i(83,"strong"),e(84,"t-selectable"),t(),e(85," esteja habilitada."),t(),i(86,"pre")(87,"code",28),e(88,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-action-edit]="myFunction.bind(this)"
 [t-selectable]-true
></thf-grid>`),t()()()(),i(89,"tr",19)(90,"td",20)(91,"div",21)(92,"span",22),e(93,"t-action-excel"),o(94,"br"),t()()(),i(95,"td",23)(96,"code",24),e(97,"boolean"),t()(),i(98,"td",25)(99,"p")(100,"code"),e(101,"false"),t()()(),i(102,"td",26)(103,"em")(104,"strong"),e(105,"(opcional)"),t()(),i(106,"p"),e(107,"Exibe o bot\xE3o de Exportar. Requer que a propriedade "),i(108,"strong"),e(109,"t-selectable"),t(),e(110,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(111,"code"),e(112,".xlsx"),t(),e(113,"."),t()()(),i(114,"tr",19)(115,"td",20)(116,"div",21)(117,"span",22),e(118,"t-action-pdf"),o(119,"br"),t()()(),i(120,"td",23)(121,"code",24),e(122,"boolean"),t()(),i(123,"td",25)(124,"p")(125,"code"),e(126,"false"),t()()(),i(127,"td",26)(128,"em")(129,"strong"),e(130,"(opcional)"),t()(),i(131,"p"),e(132,"Exibe o bot\xE3o de Download. Requer que a propriedade "),i(133,"strong"),e(134,"t-selectable"),t(),e(135,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(136,"code"),e(137,"PDF"),t(),e(138,"."),t(),i(139,"blockquote")(140,"p"),e(141,"Todos os dados exportados para PDF utilizar\xE3o a fonte 'Lato', garantindo compatibilidade com a tabela de caracteres ASCII estendida."),t()()()(),i(142,"tr",19)(143,"td",20)(144,"div",21)(145,"span",22),e(146," t-actions-right"),o(147,"br"),t()()(),i(148,"td",23)(149,"code",24),e(150,"boolean"),t()(),i(151,"td",25)(152,"p")(153,"code"),e(154,"false"),t()()(),i(155,"td",26)(156,"em")(157,"strong"),e(158,"(opcional)"),t()(),i(159,"p"),e(160,"Posiciona a coluna de a\xE7\xF5es ("),i(161,"strong"),e(162,"t-actions"),t(),e(163,") \xE0 direita."),t()()(),i(164,"tr",19)(165,"td",20)(166,"div",21)(167,"span",22),e(168,"t-actions"),o(169,"br"),t()()(),i(170,"td",23)(171,"code",29),e(172,"Array<ThfTableAction>"),t()(),i(173,"td",25),e(174,"-"),t(),i(175,"td",26)(176,"em")(177,"strong"),e(178,"(opcional)"),t()(),i(179,"p"),e(180,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(181,"strong"),e(182,"ThfTableAction"),t(),e(183,`, adicionando uma coluna
ao grid. Se houver apenas uma a\xE7\xE3o v\xE1lida, ela ser\xE1 exibida diretamente na coluna, caso contr\xE1rio, o componente
se encarrega de agrupar m\xFAltiplas a\xE7\xF5es e exibe o \xEDcone `),i(184,"a",30)(185,"strong"),e(186,"an an-caret-circle-right"),t()(),e(187,`. Ao
pressionar o \xEDcone, todas as a\xE7\xF5es ser\xE3o listadas.`),t(),i(188,"p")(189,"strong"),e(190,"A coluna n\xE3o ser\xE1 exibida se:"),t()(),i(191,"ul")(192,"li"),e(193,"a lista contiver valores inv\xE1lidos ou indefinidos;"),t(),i(194,"li"),e(195,"houver apenas uma a\xE7\xE3o e a mesma n\xE3o for vis\xEDvel."),t()(),i(196,"pre")(197,"code",28),e(198,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-actions]="actionsGrid"
></thf-grid>`),t()(),i(199,"pre")(200,"code",31),e(201,`actionsGrid: Array<ThfTableAction> = [
 {
   label: '',
   action: (e: any) => {
     this.poNotification.information(\`\${e.id} - \${e.name} \`);
   },
   icon: 'ICON_MENU_OPEN',
   fixed: true
 },
];

constructor(private poNotification: PoNotificationService) {}`),t()()()(),i(202,"tr",19)(203,"td",20)(204,"div",21)(205,"span",22),e(206,"t-actions-filter"),o(207,"br"),t()()(),i(208,"td",23)(209,"code",24),e(210,"boolean"),t()(),i(211,"td",25)(212,"p")(213,"code"),e(214,"true"),t()()(),i(215,"td",26)(216,"em")(217,"strong"),e(218,"(opcional)"),t()(),i(219,"p"),e(220,`Exibe o bot\xE3o de Filtros.
Habilita um modal com op\xE7\xF5es adicionais de filtro, caso o output `),i(221,"strong"),e(222,"t-custom-filter"),t(),e(223," n\xE3o esteja em uso."),t()()(),i(224,"tr",19)(225,"td",20)(226,"div",32)(227,"span",33),e(228," (t-delete-items)"),o(229,"br"),t()()(),i(230,"td",23)(231,"code",34),e(232,"EventEmitter"),t()(),i(233,"td",25),e(234,"-"),t(),i(235,"td",26)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),i(239,"p"),e(240,`Evento disparado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado.
Retorna os itens que permanecem dispon\xEDveis.`),t()()(),i(241,"tr",19)(242,"td",20)(243,"div",21)(244,"span",22),e(245," t-aggregates-config"),o(246,"br"),t()()(),i(247,"td",23)(248,"code",35),e(249,"ThfAggregateConfig"),t()(),i(250,"td",25),e(251,"-"),t(),i(252,"td",26)(253,"em")(254,"strong"),e(255,"(opcional)"),t()(),i(256,"p"),e(257,"Objeto de configura\xE7\xE3o para definir as "),i(258,"strong"),e(259,"op\xE7\xF5es de comportamento e apresenta\xE7\xE3o"),t(),e(260,`
dos totalizadores/agregados (aggregates) da grid.`),t()()(),i(261,"tr",19)(262,"td",20)(263,"div",21)(264,"span",22),e(265," t-aggregates"),o(266,"br"),t()()(),i(267,"td",23)(268,"code",36),e(269,"Array<ThfAggregateDescriptor>"),t()(),i(270,"td",25)(271,"p")(272,"code"),e(273,"[]"),t()()(),i(274,"td",26)(275,"em")(276,"strong"),e(277,"(opcional)"),t()(),i(278,"p"),e(279,`Possibilita apresentar totalizadores de uma ou mais colunas ao utilizar o recurso de agrupamento de colunas.
Esta propriedade recebe um array com a lista de objetos com formato da interface `),i(280,"code"),e(281,"ThfAggregateDescriptor"),t(),e(282,"."),t()()(),i(283,"tr",19)(284,"td",20)(285,"div",21)(286,"span",22),e(287," t-allow-batch-delete"),o(288,"br"),t(),o(289,"po-tag",37),t()(),i(290,"td",23)(291,"code",24),e(292,"boolean"),t()(),i(293,"td",25)(294,"p")(295,"code"),e(296,"false"),t()()(),i(297,"td",26)(298,"em")(299,"strong"),e(300,"(opcional)"),t()(),i(301,"p"),e(302,`Habilita a exclus\xE3o em lote dos itens selecionados na grid. Quando ativado, permite que m\xFAltiplos itens sejam exclu\xEDdos de uma vez
ao utilizar `),i(303,"strong"),e(304,"t-service-api"),t(),e(305," e/ou "),i(306,"strong"),e(307,"t-service-delete-api"),t(),e(308,", desde que o servi\xE7o implemente o m\xE9todo "),i(309,"code"),e(310,"deleteBatchItems"),t(),e(311," da interface "),i(312,"code"),e(313,"ThfGridDeleteService"),t(),e(314,"."),t()()(),i(315,"tr",19)(316,"td",20)(317,"div",21)(318,"span",22),e(319,"t-auto-size"),o(320,"br"),t()()(),i(321,"td",23)(322,"code",24),e(323,"boolean"),t()(),i(324,"td",25)(325,"p")(326,"code"),e(327,"false"),t()()(),i(328,"td",26)(329,"em")(330,"strong"),e(331,"(opcional)"),t()(),i(332,"p"),e(333,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(334,"strong"),e(335,"t-resizable"),t(),e(336," esteja habilitada."),t(),i(337,"blockquote")(338,"p"),e(339,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.
Esta propriedade \xE9 incompat\xEDvel quando t-grid-row-actions est\xE1 habilitado.`),t()()()(),i(340,"tr",19)(341,"td",20)(342,"div",21)(343,"span",22),e(344,"t-auto-size-on-scroll"),o(345,"br"),t()()(),i(346,"td",23)(347,"code",24),e(348,"boolean"),t()(),i(349,"td",25)(350,"p")(351,"code"),e(352,"false"),t()()(),i(353,"td",26)(354,"em")(355,"strong"),e(356,"(opcional)"),t()(),i(357,"p"),e(358,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(359,"p"),e(360,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(361,"p"),e(362,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(363,"code"),e(364,"t-page-size-virtual"),t(),e(365," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(366,"blockquote")(367,"p")(368,"strong"),e(369,"Pr\xE9-requisitos"),t(),e(370,": Requer que as propriedades "),i(371,"code"),e(372,"t-auto-size"),t(),e(373,", "),i(374,"code"),e(375,"t-resizable"),t(),e(376,`
e `),i(377,"code"),e(378,"t-virtual-scroll"),t(),e(379," (ou altura fixa via "),i(380,"code"),e(381,"[t-height]"),t(),e(382,") estejam habilitadas."),t()(),i(383,"blockquote")(384,"p")(385,"strong"),e(386,"Incompatibilidade"),t(),e(387,": N\xE3o funciona com "),i(388,"code"),e(389,"t-grid-row-actions"),t(),e(390," habilitado;"),t()(),i(391,"p")(392,"strong"),e(393,"Exemplo de uso:"),t()(),i(394,"pre")(395,"code",28),e(396,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(397,"tr",19)(398,"td",20)(399,"div",32)(400,"span",33),e(401," (t-change-aggregates)"),o(402,"br"),t()()(),i(403,"td",23)(404,"code",34),e(405,"EventEmitter"),t()(),i(406,"td",25),e(407,"-"),t(),i(408,"td",26)(409,"p"),e(410,"Evento disparado ap\xF3s alterar os "),i(411,"code"),e(412,"aggregates"),t(),e(413,"."),t()()(),i(414,"tr",19)(415,"td",20)(416,"div",32)(417,"span",33),e(418," (t-change-filter-by-column)"),o(419,"br"),t()()(),i(420,"td",23)(421,"code",34),e(422,"EventEmitter"),t()(),i(423,"td",25),e(424,"-"),t(),i(425,"td",26)(426,"em")(427,"strong"),e(428,"(opcional)"),t()(),i(429,"p"),e(430,`Evento disparado ao alterar um filtro por coluna.
Retorna um array de `),i(431,"code"),e(432,"ThfFilterByColumn"),t(),e(433," com as colunas que possuem filtros aplicados."),t()()(),i(434,"tr",19)(435,"td",20)(436,"div",32)(437,"span",33),e(438," (t-change-fixed-columns)"),o(439,"br"),t()()(),i(440,"td",23)(441,"code",34),e(442,"EventEmitter"),t()(),i(443,"td",25),e(444,"-"),t(),i(445,"td",26)(446,"em")(447,"strong"),e(448,"(opcional)"),t()(),i(449,"p"),e(450,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas fixas.
Retorna um array de strings com as colunas fixas atualizadas.`),t()()(),i(451,"tr",19)(452,"td",20)(453,"div",32)(454,"span",33),e(455," (t-change-options-column-manager)"),o(456,"br"),t()()(),i(457,"td",23)(458,"code",34),e(459,"EventEmitter"),t()(),i(460,"td",25),e(461,"-"),t(),i(462,"td",26)(463,"em")(464,"strong"),e(465,"(opcional)"),t()(),i(466,"p"),e(467,`Evento disparado ao selecionar a op\xE7\xE3o draggable ou groupable no Gerenciar Tabela.
Retorna um array de strings contendo as a\xE7\xF5es habilitadas.`),t()()(),i(468,"tr",19)(469,"td",20)(470,"div",32)(471,"span",33),e(472," (t-change-row-state-filter)"),o(473,"br"),t()()(),i(474,"td",23)(475,"code",34),e(476,"EventEmitter"),t()(),i(477,"td",25),e(478,"-"),t(),i(479,"td",26)(480,"em")(481,"strong"),e(482,"(opcional)"),t()(),i(483,"p"),e(484,"Evento disparado quando h\xE1 altera\xE7\xE3o no estado de um filtro de linha."),t()()(),i(485,"tr",19)(486,"td",20)(487,"div",32)(488,"span",33),e(489," (t-change-visible-columns)"),o(490,"br"),t()()(),i(491,"td",23)(492,"code",34),e(493,"EventEmitter"),t()(),i(494,"td",25),e(495,"-"),t(),i(496,"td",26)(497,"em")(498,"strong"),e(499,"(opcional)"),t()(),i(500,"p"),e(501,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas vis\xEDveis.
Retorna um array de strings com as colunas vis\xEDveis atualizadas.`),t()()(),i(502,"tr",19)(503,"td",20)(504,"div",32)(505,"span",33),e(506," (t-changed-density)"),o(507,"br"),t()()(),i(508,"td",23)(509,"code",34),e(510,"EventEmitter"),t()(),i(511,"td",25),e(512,"-"),t(),i(513,"td",26)(514,"em")(515,"strong"),e(516,"(opcional)"),t()(),i(517,"p"),e(518,"Evento disparado ao selecionar o tipo de densidade no Gerenciar Tabela. Retorna a densidade aplicada."),t()()(),i(519,"tr",19)(520,"td",20)(521,"div",32)(522,"span",33),e(523," (t-changed-items)"),o(524,"br"),t()()(),i(525,"td",23)(526,"code",34),e(527,"EventEmitter"),t()(),i(528,"td",25),e(529,"-"),t(),i(530,"td",26)(531,"em")(532,"strong"),e(533,"(opcional)"),t()(),i(534,"p"),e(535,"Evento emitido quando ocorre uma altera\xE7\xE3o em alguma linha da grid."),t()()(),i(536,"tr",19)(537,"td",20)(538,"div",32)(539,"span",33),e(540," (t-restore-column-manager)"),o(541,"br"),t()()(),i(542,"td",23)(543,"code",34),e(544,"EventEmitter"),t()(),i(545,"td",25),e(546,"-"),t(),i(547,"td",26)(548,"em")(549,"strong"),e(550,"(opcional)"),t()(),i(551,"p"),e(552,`Evento disparado quando pressionado o bot\xE3o 'Restaurar padr\xE3o' no Gerenciar Tabela.
Retorna um array de strings com as colunas vis\xEDveis por padr\xE3o.`),t()()(),i(553,"tr",19)(554,"td",20)(555,"div",21)(556,"span",22),e(557,"t-columns"),o(558,"br"),t()()(),i(559,"td",23)(560,"code",38),e(561,"Array<ThfGridColumn>"),t()(),i(562,"td",25),e(563,"-"),t(),i(564,"td",26)(565,"em")(566,"strong"),e(567,"(opcional)"),t()(),i(568,"p"),e(569,"Permite definir e configurar as colunas do grid que implementam a interface "),i(570,"strong"),e(571,"ThfGridColumn"),t(),e(572,"."),t(),i(573,"pre")(574,"code",28),e(575,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-columns]="columns"
></thf-grid>`),t()(),i(576,"pre")(577,"code",31),e(578,`columns: Array<ThfGridColumn> = [
 { property: 'id', visible: false },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(579,"tr",19)(580,"td",20)(581,"div",32)(582,"span",33),e(583," (t-columns-selected)"),o(584,"br"),t()(),i(585,"div",39),e(586,"Deprecated"),t()(),i(587,"td",23)(588,"code",34),e(589,"EventEmitter"),t()(),i(590,"td",25),e(591,"-"),t(),i(592,"td",26)(593,"p"),e(594,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t(),i(595,"blockquote")(596,"p")(597,"strong"),e(598,"Nota"),t(),e(599,`: Este evento est\xE1 depreciado e ser\xE1 removido na vers\xE3o 21. Recomendamos
utilizar o evento `),i(600,"code"),e(601,"t-rows-selected"),t(),e(602,", que j\xE1 est\xE1 dispon\xEDvel e oferece a mesma funcionalidade."),t()()()(),i(603,"tr",19)(604,"td",20)(605,"div",21)(606,"span",22),e(607,"t-components-size"),o(608,"br"),t(),o(609,"po-tag",40),t()(),i(610,"td",23)(611,"code",41),e(612,"string"),t()(),i(613,"td",25)(614,"p")(615,"code"),e(616,"medium"),t()()(),i(617,"td",26)(618,"em")(619,"strong"),e(620,"(opcional)"),t()(),i(621,"p"),e(622,"Define o tamanho dos componentes de formul\xE1rio no grid:"),t(),i(623,"ul")(624,"li")(625,"code"),e(626,"small"),t(),e(627,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(628,"li")(629,"code"),e(630,"medium"),t(),e(631,": aplica a medida medium de cada componente."),t()(),i(632,"blockquote")(633,"p"),e(634,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(635,"code"),e(636,"medium"),t(),e(637,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(638,"a",42),e(639,"po-theme"),t(),e(640,"."),t()()()(),i(641,"tr",19)(642,"td",20)(643,"div",21)(644,"span",22),e(645,"t-container"),o(646,"br"),t()()(),i(647,"td",23)(648,"code",24),e(649,"boolean"),t()(),i(650,"td",25)(651,"p")(652,"code"),e(653,"true"),t()()(),i(654,"td",26)(655,"em")(656,"strong"),e(657,"(opcional)"),t()(),i(658,"p"),e(659,"Adiciona um contorno arredondado ao "),i(660,"code"),e(661,"thf-grid"),t(),e(662,"."),t()()(),i(663,"tr",19)(664,"td",20)(665,"div",21)(666,"span",22),e(667,"t-custom-actions"),o(668,"br"),t()()(),i(669,"td",23)(670,"code",43),e(671,"Array<PoDropdownAction>"),t()(),i(672,"td",25),e(673,"-"),t(),i(674,"td",26)(675,"em")(676,"strong"),e(677,"(opcional)"),t()(),i(678,"p"),e(679,"Permite adicionar a\xE7\xF5es customizadas que implementam a interface "),i(680,"strong"),e(681,"PoDropdownAction"),t(),e(682,`.
Essas a\xE7\xF5es ser\xE3o exibidas no dropdown 'Mais a\xE7\xF5es' ao selecionar um item.
Requer que a propriedade `),i(683,"strong"),e(684,"t-selectable"),t(),e(685," esteja habilitada."),t(),i(686,"pre")(687,"code",28),e(688,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-custom-actions]="customActions"
 [t-selectable]="true"></thf-grid>`),t()(),i(689,"pre")(690,"code",31),e(691,`customActions: Array<PoDropdownAction> = [
 { label: 'Hist\xF3rico', action: this.myAction.bind(this) }];

myAction() {
 window.alert('voce clicou em hist\xF3rico!');
}`),t()()()(),i(692,"tr",19)(693,"td",20)(694,"div",32)(695,"span",33),e(696," (t-custom-filter)"),o(697,"br"),t()()(),i(698,"td",23)(699,"code",34),e(700,"EventEmitter"),t()(),i(701,"td",25),e(702,"-"),t(),i(703,"td",26)(704,"em")(705,"strong"),e(706,"(opcional)"),t()(),i(707,"p"),e(708,"Evento disparado ao clicar no menu Filtros."),t()()(),i(709,"tr",19)(710,"td",20)(711,"div",21)(712,"span",22),e(713,"t-custom-templates"),o(714,"br"),t()()(),i(715,"td",23)(716,"code",44),e(717,`{ [key: string]: TemplateRef<any>;
}`),t()(),i(718,"td",25),e(719,"-"),t(),i(720,"td",26)(721,"em")(722,"strong"),e(723,"(opcional)"),t()(),i(724,"p"),e(725,"Permite a cria\xE7\xE3o de templates customizados para a edi\xE7\xE3o flu\xEDda da grid, como por exemplo:"),t(),i(726,"pre")(727,"code",28),e(728,`// Exemplo de uso:
<thf-grid
 ...
[t-custom-templates]="{ name: customTemplate }"
></thf-grid>
<ng-template #customTemplate let-formControl="formControl">
  <po-input [formControl]="formControl" p-placeholder="CPF" [p-required]="true"></po-input>
</ng-template>`),t()(),i(729,"p"),e(730,"\xC9 obrigat\xF3rio passar o formControl como par\xE2metro do template."),t(),i(731,"p"),e(732,`Os eventos de validate, keydown, blur, additional-help, onChangeModel e change n\xE3o s\xE3o emitidos com o uso de templates customizados,
sendo necess\xE1rio o controle desses eventos dentro do pr\xF3prio componente.`),t(),i(733,"p"),e(734,`Caso utilize a propriedade controlValueWithLabel,
\xE9 necess\xE1rio continuar passando no editProperties em columns, em conjunto com fieldLabel, fieldValue e options caso esteja utilizando.`),t(),i(735,"p"),e(736,"Caso o template n\xE3o seja passado, o componente ser\xE1 renderizado de forma padr\xE3o."),t(),i(737,"p"),e(738,"Caso esteja utilizando o componente po-decimal e esteja configurando a propriedade "),i(739,"code"),e(740,"p-decimals-length"),t(),e(741,`, \xE9 necess\xE1rio continuar
enviando via columns em editProperties.`),t(),i(742,"p"),e(743,'Para que o grid exiba a label "(Obrigat\xF3rio)" na coluna, defina em '),i(744,"code"),e(745,"editProperties"),t(),e(746," a propriedade "),i(747,"code"),e(748,"required"),t(),e(749," como "),i(750,"code"),e(751,"true"),t(),e(752,"."),t(),i(753,"blockquote")(754,"p"),e(755,"Para mais detalhes, consulte o exemplo na aba Overview - Edi\xE7\xE3o flu\xEDda."),t()()()(),i(756,"tr",19)(757,"td",20)(758,"div",32)(759,"span",33),e(760," (t-delete-item)"),o(761,"br"),t()()(),i(762,"td",23)(763,"code",34),e(764,"EventEmitter"),t()(),i(765,"td",25),e(766,"-"),t(),i(767,"td",26)(768,"em")(769,"strong"),e(770,"(opcional)"),t()(),i(771,"p"),e(772,"Evento disparado ao excluir um item. Retorna o item exclu\xEDdo."),t()()(),i(773,"tr",19)(774,"td",20)(775,"div",21)(776,"span",22),e(777,"t-disabled-include-button"),o(778,"br"),t()()(),i(779,"td",23)(780,"code",24),e(781,"boolean"),t()(),i(782,"td",25)(783,"p")(784,"code"),e(785,"false"),t()()(),i(786,"td",26)(787,"em")(788,"strong"),e(789,"(opcional)"),t()(),i(790,"p"),e(791,`Desabilita o bot\xE3o de Incluir. Ao definir como true, o bot\xE3o ser\xE1 desabilitado.
Ideal para cen\xE1rios onde a inclus\xE3o de novas linhas deve ser restrita.`),t()()(),i(792,"tr",19)(793,"td",20)(794,"div",21)(795,"span",22),e(796,"t-draggable"),o(797,"br"),t()()(),i(798,"td",23)(799,"code",24),e(800,"boolean"),t()(),i(801,"td",25)(802,"p")(803,"code"),e(804,"false"),t()()(),i(805,"td",26)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),i(809,"p"),e(810,"Habilita o Drag and Drop nas colunas."),t()()(),i(811,"tr",19)(812,"td",20)(813,"div",21)(814,"span",22),e(815,"t-edit-properties"),o(816,"br"),t()()(),i(817,"td",23)(818,"code",45),e(819,"ThfGridEditProperties"),t()(),i(820,"td",25),e(821,"-"),t(),i(822,"td",26)(823,"em")(824,"strong"),e(825,"(opcional)"),t()(),i(826,"p"),e(827,"Permite configurar a edi\xE7\xE3o em linha, implementando a interface "),i(828,"strong"),e(829,"ThfGridEditProperties"),t(),e(830,`.
Exemplo de uso na aba Interfaces >> ThfGridEditProperties.`),t(),i(831,"blockquote")(832,"p"),e(833,"Para garantir o correto funcionamento da conclus\xE3o da edi\xE7\xE3o dos dados, \xE9 necess\xE1rio que os dados contenham uma coluna de ID ou que pelo menos uma coluna tenha a propriedade KEY definida como true."),t()()()(),i(834,"tr",19)(835,"td",20)(836,"div",32)(837,"span",33),e(838," (t-change-page-size)"),o(839,"br"),t()()(),i(840,"td",23)(841,"code",34),e(842,"EventEmitter"),t()(),i(843,"td",25),e(844,"-"),t(),i(845,"td",26)(846,"em")(847,"strong"),e(848,"(opcional)"),t()(),i(849,"p"),e(850,"Evento disparado ao alterar a quantidade de itens por p\xE1gina. Retorna um objeto com o page-size atual."),t()()(),i(851,"tr",19)(852,"td",20)(853,"div",21)(854,"span",22),e(855,"t-fields"),o(856,"br"),t()()(),i(857,"td",23)(858,"code",46),e(859,"Array<PoPageDynamicSearchFilters>"),t()(),i(860,"td",25),e(861,"-"),t(),i(862,"td",26)(863,"em")(864,"strong"),e(865,"(opcional)"),t()(),i(866,"p"),e(867,"Permite definir os campos filtr\xE1veis na janela 'Filtros', implementando a interface "),i(868,"strong"),e(869,"PoPageDynamicSearchFilters"),t(),e(870,"."),t(),i(871,"pre")(872,"code",28),e(873,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-fields]="customFields"
></thf-grid>`),t()(),i(874,"pre")(875,"code",31),e(876,"customFields: Array<PoPageDynamicSearchFilters> = [{ property: 'name', required: true, showRequired: true }]"),t()()()(),i(877,"tr",19)(878,"td",20)(879,"div",21)(880,"span",22),e(881,"t-filter-column-properties"),o(882,"br"),t()()(),i(883,"td",23)(884,"code",47),e(885,"Array<ThfFilterByColumn>"),t()(),i(886,"td",25),e(887,"-"),t(),i(888,"td",26)(889,"em")(890,"strong"),e(891,"(opcional)"),t()(),i(892,"p"),e(893,"Permite definir filtros por coluna logo na inicializa\xE7\xE3o, deixando o grid j\xE1 filtrado ao ser carregado."),t(),i(894,"pre")(895,"code",31),e(896,`filterColumnProperties = [
  {
    property: 'name',
    operator1: 'contains',
    value1: 'Ana'
  },
  {
    property: 'age',
    operator1: 'gte',
    value1: 18
  }
];`),t()()()(),i(897,"tr",19)(898,"td",20)(899,"div",21)(900,"span",22),e(901,"t-filter-input-mode"),o(902,"br"),t()()(),i(903,"td",23)(904,"code",48),e(905,"'basic' "),t(),i(906,"code",49),e(907," 'service'"),t()(),i(908,"td",25)(909,"p")(910,"code"),e(911,"basic"),t()()(),i(912,"td",26)(913,"em")(914,"strong"),e(915,"(opcional)"),t()(),i(916,"p"),e(917,"Define o modo do filtro para o input de pesquisa."),t()()(),i(918,"tr",19)(919,"td",20)(920,"div",21)(921,"span",22),e(922,"t-grid-row-actions"),o(923,"br"),t()()(),i(924,"td",23)(925,"code",50),e(926,"ThfGridRowActions"),t()(),i(927,"td",25),e(928,"-"),t(),i(929,"td",26)(930,"em")(931,"strong"),e(932,"(opcional)"),t()(),i(933,"p"),e(934,"Configura a edi\xE7\xE3o flu\xEDda, implementando a interface "),i(935,"strong"),e(936,"ThfGridRowActions"),t(),e(937,`.
Permite manipular o comportamento das a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o de itens.
\xC9 poss\xEDvel definir fun\xE7\xF5es espec\xEDficas para controlar as a\xE7\xF5es antes e depois das opera\xE7\xF5es.
Fundamental para implementar um fluxo de manipula\xE7\xE3o de dados totalmente personalizado.`),t(),i(938,"blockquote")(939,"p"),e(940,`Ao habilitar t-grid-row-actions a propriedade t-auto-size \xE9 desabilitada para manter a padroniza\xE7\xE3o das larguras das colunas edit\xE1veis.
Quando o t-grid-row-actions \xE9 habilitado, a propriedade t-resizable \xE9 ativada automaticamente.`),t()()()(),i(941,"tr",19)(942,"td",20)(943,"div",21)(944,"span",22),e(945," t-group"),o(946,"br"),t()()(),i(947,"td",23)(948,"code",51),e(949,"Array<string>"),t()(),i(950,"td",25),e(951,"-"),t(),i(952,"td",26)(953,"em")(954,"strong"),e(955,"(opcional)"),t()(),i(956,"p"),e(957,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(958,"strong"),e(959,"t-groupable"),t(),e(960," esteja habilitada."),t()()(),i(961,"tr",19)(962,"td",20)(963,"div",21)(964,"span",22),e(965,"t-groupable"),o(966,"br"),t()()(),i(967,"td",23)(968,"code",24),e(969,"boolean "),t(),i(970,"code",52),e(971," GroupableSettings"),t()(),i(972,"td",25)(973,"p")(974,"code"),e(975,"false"),t()()(),i(976,"td",26)(977,"em")(978,"strong"),e(979,"(opcional)"),t()(),i(980,"p"),e(981,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(982,"tr",19)(983,"td",20)(984,"div",21)(985,"span",22),e(986,"t-header-template"),o(987,"br"),t()()(),i(988,"td",23)(989,"code",53),e(990,"TemplateRef<void>"),t()(),i(991,"td",25),e(992,"-"),t(),i(993,"td",26)(994,"em")(995,"strong"),e(996,"(opcional)"),t()(),i(997,"p"),e(998,"Container aberto para adicionar conte\xFAdo entre o cabe\xE7alho de a\xE7\xF5es e a lista do grid."),t(),i(999,"pre")(1e3,"code",28),e(1001,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-header-template]="template"
></thf-grid>

<ng-template #template>
 <div style="display: flex; gap: 8px; align-items: center;">
   <po-tag [p-type]="tagTypeDanger" p-value="Remover todos"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="Brasil"> </po-tag>
   <po-tag [p-type]="tagTypeInfo" [p-removable]="true" p-value="College"> </po-tag>
 </div>
</ng-template>`),t()()()(),i(1002,"tr",19)(1003,"td",20)(1004,"div",21)(1005,"span",22),e(1006,"t-headline-fixed"),o(1007,"br"),t()()(),i(1008,"td",23)(1009,"code",24),e(1010,"boolean"),t()(),i(1011,"td",25)(1012,"p")(1013,"code"),e(1014,"false"),t()()(),i(1015,"td",26)(1016,"em")(1017,"strong"),e(1018,"(opcional)"),t()(),i(1019,"p"),e(1020,"Define o cabe\xE7alho do grid como fixo, desde que a altura ("),i(1021,"strong"),e(1022,"t-height"),t(),e(1023,") n\xE3o esteja definida."),t()()(),i(1024,"tr",19)(1025,"td",20)(1026,"div",21)(1027,"span",22),e(1028,"t-height"),o(1029,"br"),t()()(),i(1030,"td",23)(1031,"code",54),e(1032,"number "),t(),i(1033,"code",41),e(1034," string "),t(),i(1035,"code",55),e(1036," null"),t()(),i(1037,"td",25)(1038,"p"),e(1039,"100%"),t()(),i(1040,"td",26)(1041,"em")(1042,"strong"),e(1043,"(opcional)"),t()(),i(1044,"p"),e(1045,"Define a altura da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1046,"code"),e(1047,'"<n\xFAmero>%"'),t(),e(1048,")."),t(),i(1049,"ul")(1050,"li"),e(1051,"Se "),i(1052,"strong"),e(1053,"n\xE3o informado"),t(),e(1054,", a altura da tabela ser\xE1 ajustada automaticamente pela quantidade de itens."),t(),i(1055,"li"),e(1056,"Caso seja informado um valor inv\xE1lido, ser\xE1 aplicado "),i(1057,"strong"),e(1058,"100%"),t(),e(1059," como padr\xE3o."),t(),i(1060,"li"),e(1061,"Se "),i(1062,"code"),e(1063,"t-height"),t(),e(1064," for menor que "),i(1065,"code"),e(1066,"t-min-height"),t(),e(1067,", a altura m\xEDnima ser\xE1 aplicada."),t(),i(1068,"li"),e(1069,"Se "),i(1070,"code"),e(1071,"t-height"),t(),e(1072," for maior que "),i(1073,"code"),e(1074,"t-max-height"),t(),e(1075,", a altura m\xE1xima ser\xE1 aplicada."),t()(),i(1076,"blockquote")(1077,"p")(1078,"strong"),e(1079,"Observa\xE7\xE3o:"),t(),e(1080," Quando definido, o "),i(1081,"strong"),e(1082,"virtual scroll"),t(),e(1083," ser\xE1 ativado automaticamente. Consulte a documenta\xE7\xE3o da propriedade "),i(1084,"strong"),e(1085,"t-virtual-scroll"),t(),e(1086," para mais detalhes."),t()()()(),i(1087,"tr",19)(1088,"td",20)(1089,"div",21)(1090,"span",22),e(1091,"t-hide-action-fixed-columns"),o(1092,"br"),t()()(),i(1093,"td",23)(1094,"code",24),e(1095,"boolean"),t()(),i(1096,"td",25)(1097,"p")(1098,"code"),e(1099,"false"),t()()(),i(1100,"td",26)(1101,"em")(1102,"strong"),e(1103,"(opcional)"),t()(),i(1104,"p"),e(1105,`Controla a visibilidade da op\xE7\xE3o de fixar colunas no Gerenciar Tabela.
Se alguma coluna j\xE1 estiver fixa quando essa propriedade for habilitada,
ela permanecer\xE1 fixa, garantindo que ocultar as op\xE7\xF5es de fixar n\xE3o afete o estado das colunas j\xE1 fixadas.`),t()()(),i(1106,"tr",19)(1107,"td",20)(1108,"div",21)(1109,"span",22),e(1110," t-hide-batch-actions"),o(1111,"br"),t()()(),i(1112,"td",23)(1113,"code",24),e(1114,"boolean"),t()(),i(1115,"td",25)(1116,"p")(1117,"code"),e(1118,"false"),t()()(),i(1119,"td",26)(1120,"em")(1121,"strong"),e(1122,"(opcional)"),t()(),i(1123,"p"),e(1124,"Permite ocultar as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens."),t()()(),i(1125,"tr",19)(1126,"td",20)(1127,"div",21)(1128,"span",22),e(1129,"t-hide-columns-manager"),o(1130,"br"),t()()(),i(1131,"td",23)(1132,"code",24),e(1133,"boolean"),t()(),i(1134,"td",25)(1135,"p")(1136,"code"),e(1137,"false"),t()()(),i(1138,"td",26)(1139,"em")(1140,"strong"),e(1141,"(opcional)"),t()(),i(1142,"p"),e(1143,"Permite ocultar o bot\xE3o Gerenciar Tabela."),t()()(),i(1144,"tr",19)(1145,"td",20)(1146,"div",21)(1147,"span",22),e(1148,"t-hide-select-all"),o(1149,"br"),t()()(),i(1150,"td",23)(1151,"code",24),e(1152,"boolean"),t()(),i(1153,"td",25)(1154,"p")(1155,"code"),e(1156,"false"),t()()(),i(1157,"td",26)(1158,"em")(1159,"strong"),e(1160,"(opcional)"),t()(),i(1161,"p"),e(1162,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1163,"tr",19)(1164,"td",20)(1165,"div",21)(1166,"span",22),e(1167,"t-hide-table-search"),o(1168,"br"),t()()(),i(1169,"td",23)(1170,"code",24),e(1171,"boolean"),t()(),i(1172,"td",25)(1173,"p")(1174,"code"),e(1175,"false"),t()()(),i(1176,"td",26)(1177,"em")(1178,"strong"),e(1179,"(opcional)"),t()(),i(1180,"p"),e(1181,"Permite ocultar o campo de pesquisa."),t()()(),i(1182,"tr",19)(1183,"td",20)(1184,"div",21)(1185,"span",22),e(1186," t-loading"),o(1187,"br"),t()()(),i(1188,"td",23)(1189,"code",24),e(1190,"boolean"),t()(),i(1191,"td",25)(1192,"p")(1193,"code"),e(1194,"false"),t()()(),i(1195,"td",26)(1196,"em")(1197,"strong"),e(1198,"(opcional)"),t()(),i(1199,"p"),e(1200,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados do grid."),t()()(),i(1201,"tr",19)(1202,"td",20)(1203,"div",21)(1204,"span",22),e(1205,"t-items"),o(1206,"br"),t()()(),i(1207,"td",23)(1208,"code",56),e(1209,"Array<any>"),t()(),i(1210,"td",25),e(1211,"-"),t(),i(1212,"td",26)(1213,"em")(1214,"strong"),e(1215,"(opcional)"),t()(),i(1216,"p"),e(1217,`Permite listar os itens no grid.
Cada item do array representa uma linha no grid e deve conter as propriedades
que correspondem \xE0s colunas definidas no grid.`),t(),i(1218,"pre")(1219,"code",28),e(1220,`// Exemplo de uso:
<thf-grid
 [t-items]="[{ name: 'M\xF4nica'}, { name: 'Cebolinha'}]"
></thf-grid>`),t()()()(),i(1221,"tr",19)(1222,"td",20)(1223,"div",32)(1224,"span",33),e(1225," (t-items-after-get)"),o(1226,"br"),t()()(),i(1227,"td",23)(1228,"code",34),e(1229,"EventEmitter"),t()(),i(1230,"td",25),e(1231,"-"),t(),i(1232,"td",26)(1233,"em")(1234,"strong"),e(1235,"(opcional)"),t()(),i(1236,"p"),e(1237,`Evento disparado ap\xF3s finaliza\xE7\xE3o das requisi\xE7\xF5es de GET.
Dispara no GET inicial caso esteja utilizando `),i(1238,"strong"),e(1239,"t-service-api"),t(),e(1240,`.
Dispara tamb\xE9m no GET de filtros caso esteja utilizando a propriedade `),i(1241,"strong"),e(1242,"t-actions-filter"),t(),e(1243,`
ou no GET do input de pesquisa quando a propriedade `),i(1244,"strong"),e(1245,"t-filter-input-mode"),t(),e(1246," estiver como "),i(1247,"code"),e(1248,"service"),t(),e(1249,`.
Retorna os itens atuais da tabela, o total de itens, n\xFAmero da p\xE1gina atual e pageSize.`),t()()(),i(1250,"tr",19)(1251,"td",20)(1252,"div",21)(1253,"span",22),e(1254,"t-literals"),o(1255,"br"),t()()(),i(1256,"td",23)(1257,"code",57),e(1258,"ThfGridLiterals"),t()(),i(1259,"td",25),e(1260,"-"),t(),i(1261,"td",26)(1262,"em")(1263,"strong"),e(1264,"(opcional)"),t()(),i(1265,"p"),e(1266,"Permite definir literais personalizados para o componente, conforme a interface "),i(1267,"strong"),e(1268,"ThfGridLiterals"),t(),e(1269,"."),t(),i(1270,"pre")(1271,"code",28),e(1272,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-literals]="customLiterals"
></thf-grid>`),t()(),i(1273,"pre")(1274,"code",31),e(1275,"customLiterals: ThfGridLiterals = { advancedSearch: 'Mais filtros' };"),t()()()(),i(1276,"tr",19)(1277,"td",20)(1278,"div",21)(1279,"span",22),e(1280,"t-max-columns"),o(1281,"br"),t()()(),i(1282,"td",23)(1283,"code",54),e(1284,"number"),t()(),i(1285,"td",25),e(1286,"-"),t(),i(1287,"td",26)(1288,"em")(1289,"strong"),e(1290,"(opcional)"),t()(),i(1291,"p"),e(1292,`Define a quantidade m\xE1xima de colunas que ser\xE3o exibidas no grid.
Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o desabilitadas e
caso houver mais colunas vis\xEDveis do que o permitido, as excedentes ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),t()()(),i(1293,"tr",19)(1294,"td",20)(1295,"div",21)(1296,"span",22),e(1297," t-max-height"),o(1298,"br"),t()()(),i(1299,"td",23)(1300,"code",54),e(1301,"number "),t(),i(1302,"code",41),e(1303," string "),t(),i(1304,"code",55),e(1305," null"),t()(),i(1306,"td",25),e(1307,"-"),t(),i(1308,"td",26)(1309,"em")(1310,"strong"),e(1311,"(opcional)"),t()(),i(1312,"p"),e(1313,"Define a "),i(1314,"strong"),e(1315,"altura m\xE1xima"),t(),e(1316," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1317,"code"),e(1318,'"<n\xFAmero>%"'),t(),e(1319,")."),t(),i(1320,"ul")(1321,"li"),e(1322,"Se "),i(1323,"strong"),e(1324,"n\xE3o informado"),t(),e(1325,", a altura m\xE1xima ser\xE1 definida pela propriedade "),i(1326,"code"),e(1327,"t-height"),t(),e(1328,", se existir."),t(),i(1329,"li"),e(1330,"Caso "),i(1331,"code"),e(1332,"t-height"),t(),e(1333," seja "),i(1334,"strong"),e(1335,"maior"),t(),e(1336," que "),i(1337,"code"),e(1338,"t-max-height"),t(),e(1339,", o grid usar\xE1 "),i(1340,"code"),e(1341,"t-max-height"),t(),e(1342," como limite superior."),t(),i(1343,"li"),e(1344,"Caso o valor passado seja inv\xE1lido, "),i(1345,"strong"),e(1346,"nenhuma altura m\xE1xima ser\xE1 aplicada"),t(),e(1347,"."),t()()()(),i(1348,"tr",19)(1349,"td",20)(1350,"div",21)(1351,"span",22),e(1352,"t-max-resizable-width"),o(1353,"br"),t()()(),i(1354,"td",23)(1355,"code",54),e(1356,"number"),t()(),i(1357,"td",25),e(1358,"-"),t(),i(1359,"td",26)(1360,"em")(1361,"strong"),e(1362,"(opcional)"),t()(),i(1363,"p"),e(1364,"Define a largura m\xE1xima para redimensionar uma coluna. Requer que a propriedade "),i(1365,"strong"),e(1366,"t-resizable"),t(),e(1367," esteja habilitada."),t()()(),i(1368,"tr",19)(1369,"td",20)(1370,"div",21)(1371,"span",22),e(1372," t-min-height"),o(1373,"br"),t()()(),i(1374,"td",23)(1375,"code",54),e(1376,"number "),t(),i(1377,"code",41),e(1378," string "),t(),i(1379,"code",55),e(1380," null"),t()(),i(1381,"td",25),e(1382,"-"),t(),i(1383,"td",26)(1384,"em")(1385,"strong"),e(1386,"(opcional)"),t()(),i(1387,"p"),e(1388,"Define a "),i(1389,"strong"),e(1390,"altura m\xEDnima"),t(),e(1391," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1392,"code"),e(1393,'"<n\xFAmero>%"'),t(),e(1394,")."),t(),i(1395,"ul")(1396,"li"),e(1397,"Se "),i(1398,"strong"),e(1399,"n\xE3o informado"),t(),e(1400,", a altura m\xEDnima ser\xE1 definida pela propriedade "),i(1401,"code"),e(1402,"t-height"),t(),e(1403,", se existir."),t(),i(1404,"li"),e(1405,"Caso "),i(1406,"code"),e(1407,"t-height"),t(),e(1408," seja "),i(1409,"strong"),e(1410,"menor"),t(),e(1411," que "),i(1412,"code"),e(1413,"t-min-height"),t(),e(1414,", o grid usar\xE1 "),i(1415,"code"),e(1416,"t-min-height"),t(),e(1417," como limite inferior."),t(),i(1418,"li"),e(1419,"Caso o valor passado seja inv\xE1lido, "),i(1420,"strong"),e(1421,"nenhuma altura m\xEDnima ser\xE1 aplicada"),t(),e(1422,"."),t()()()(),i(1423,"tr",19)(1424,"td",20)(1425,"div",21)(1426,"span",22),e(1427,"t-min-resizable-width"),o(1428,"br"),t()()(),i(1429,"td",23)(1430,"code",54),e(1431,"number"),t()(),i(1432,"td",25)(1433,"p")(1434,"code"),e(1435,"10"),t()()(),i(1436,"td",26)(1437,"em")(1438,"strong"),e(1439,"(opcional)"),t()(),i(1440,"p"),e(1441,"Define a largura m\xEDnima para redimensionar uma coluna. Requer que a propriedade "),i(1442,"strong"),e(1443,"t-resizable"),t(),e(1444," esteja habilitada."),t()()(),i(1445,"tr",19)(1446,"td",20)(1447,"div",32)(1448,"span",33),e(1449," (t-change-group)"),o(1450,"br"),t()()(),i(1451,"td",23)(1452,"code",34),e(1453,"EventEmitter"),t()(),i(1454,"td",25),e(1455,"-"),t(),i(1456,"td",26)(1457,"em")(1458,"strong"),e(1459,"(opcional)"),t()(),i(1460,"p"),e(1461,"Evento disparado quando ocorre o agrupamento no grid. Retorna um array de strings das colunas agrupadas."),t()()(),i(1462,"tr",19)(1463,"td",20)(1464,"div",21)(1465,"span",22),e(1466," t-load"),o(1467,"br"),t()()(),i(1468,"td",23)(1469,"code",41),e(1470,"string "),t(),i(1471,"code",58),e(1472," (() => ThfGridOptions)"),t()(),i(1473,"td",25),e(1474,"-"),t(),i(1475,"td",26)(1476,"em")(1477,"strong"),e(1478,"(opcional)"),t()(),i(1479,"p"),e(1480,`Define dinamicamente as colunas e a\xE7\xF5es do grid ap\xF3s o carregamento inicial dos dados.
Pode ser uma URL que retorna a configura\xE7\xE3o via GET ou uma fun\xE7\xE3o que retorna a configura\xE7\xE3o diretamente.
Quando fun\xE7\xE3o, a propriedade deve implementar a interface `),i(1481,"strong"),e(1482,"ThfGridOptions"),t(),e(1483,"."),t()()(),i(1484,"tr",19)(1485,"td",20)(1486,"div",21)(1487,"span",22),e(1488,"t-options-paging"),o(1489,"br"),t()()(),i(1490,"td",23)(1491,"code",59),e(1492,"Array<ThfGridOptionPaging>"),t()(),i(1493,"td",25),e(1494,"-"),t(),i(1495,"td",26)(1496,"em")(1497,"strong"),e(1498,"(opcional)"),t()(),i(1499,"p"),e(1500,"Define as op\xE7\xF5es de itens por p\xE1gina, implementando a interface "),i(1501,"strong"),e(1502,"ThfGridOptionPaging"),t(),e(1503,`.
Requer que a propriedade `),i(1504,"strong"),e(1505,"t-pageable"),t(),e(1506," esteja habilitada."),t()()(),i(1507,"tr",19)(1508,"td",20)(1509,"div",32)(1510,"span",33),e(1511," (t-change-order-column)"),o(1512,"br"),t()()(),i(1513,"td",23)(1514,"code",34),e(1515,"EventEmitter"),t()(),i(1516,"td",25),e(1517,"-"),t(),i(1518,"td",26)(1519,"em")(1520,"strong"),e(1521,"(opcional)"),t()(),i(1522,"p"),e(1523,`Evento disparado quando a ordem das colunas \xE9 alterada atrav\xE9s do Gerenciar Tabela ou pelo Draggable.
Retorna um array de strings.`),t()()(),i(1524,"tr",19)(1525,"td",20)(1526,"div",21)(1527,"span",22),e(1528,"t-page-size"),o(1529,"br"),t()()(),i(1530,"td",23)(1531,"code",54),e(1532,"number"),t()(),i(1533,"td",25)(1534,"p")(1535,"code"),e(1536,"10"),t()()(),i(1537,"td",26)(1538,"em")(1539,"strong"),e(1540,"(opcional)"),t()(),i(1541,"p"),e(1542,"Define a quantidade de itens default na p\xE1gina. Requer que a propriedade "),i(1543,"strong"),e(1544,"t-pageable"),t(),e(1545," esteja habilitada."),t()()(),i(1546,"tr",19)(1547,"td",20)(1548,"div",21)(1549,"span",22),e(1550,"t-page-size-virtual"),o(1551,"br"),t()()(),i(1552,"td",23)(1553,"code",54),e(1554,"number"),t()(),i(1555,"td",25)(1556,"p")(1557,"code"),e(1558,"60"),t()()(),i(1559,"td",26)(1560,"em")(1561,"strong"),e(1562,"(opcional)"),t()(),i(1563,"p"),e(1564,`Necess\xE1rio quando o virtual scroll est\xE1 habilitado para evitar comportamentos inesperados durante a rolagem.
Recomenda-se que o valor seja pelo menos 3 vezes o n\xFAmero de itens vis\xEDveis no grid.`),t()()(),i(1565,"tr",19)(1566,"td",20)(1567,"div",21)(1568,"span",22),e(1569,"t-pageable"),o(1570,"br"),t()()(),i(1571,"td",23)(1572,"code",24),e(1573,"boolean"),t()(),i(1574,"td",25)(1575,"p")(1576,"code"),e(1577,"false"),t()()(),i(1578,"td",26)(1579,"em")(1580,"strong"),e(1581,"(opcional)"),t()(),i(1582,"p"),e(1583,"Exibe o bot\xE3o 'Carregar mais resultados' e habilita a pagina\xE7\xE3o no Gerenciar Tabela."),t()()(),i(1584,"tr",19)(1585,"td",20)(1586,"div",21)(1587,"span",22),e(1588,"t-param-delete-api"),o(1589,"br"),t()()(),i(1590,"td",23)(1591,"code",41),e(1592,"string"),t()(),i(1593,"td",25),e(1594,"-"),t(),i(1595,"td",26)(1596,"em")(1597,"strong"),e(1598,"(opcional)"),t()(),i(1599,"p"),e(1600,"Define o par\xE2metro para a requisi\xE7\xE3o de DELETE ou POST(caso a propriedade "),i(1601,"code"),e(1602,"t-allow-batch-delete"),t(),e(1603," seja definida)."),t(),i(1604,"p"),e(1605,"Quando "),i(1606,"strong"),e(1607,"t-service-delete-api"),t(),e(1608," estiver configurado e o valor de "),i(1609,"strong"),e(1610,"t-param-delete-api"),t(),e(1611,` n\xE3o for informado,
por padr\xE3o, ser\xE1 enviado `),i(1612,"code"),e(1613,"key"),t(),e(1614," (definido ao usar "),i(1615,"strong"),e(1616,"ThfGridColumn"),t(),e(1617,") ou, na aus\xEAncia, "),i(1618,"code"),e(1619,"id"),t(),e(1620,`. Caso
`),i(1621,"strong"),e(1622,"t-service-delete-api"),t(),e(1623," n\xE3o esteja definido, ser\xE1 considerada a URL de "),i(1624,"strong"),e(1625,"t-service-api"),t(),e(1626,"."),t(),i(1627,"blockquote")(1628,"p"),e(1629,"Durante a exclus\xE3o de um \xFAnico item, ele ser\xE1 enviado como par\xE2metro na URL, conforme o exemplo abaixo:"),t(),i(1630,"pre")(1631,"code"),e(1632,`// Considerando t-param-delete-api="email"
DELETE /items?email=email1@example.com`),t()(),i(1633,"p"),e(1634,"Caso o valor n\xE3o seja uma propriedade v\xE1lida do item, o grid ir\xE1 considerar as keys definidas na coluna"),t(),i(1635,"pre")(1636,"code"),e(1637,`// Considerando t-param-delete-api="propriedadeInexistente" e as colunas "id" e "email" com keys definidas
DELETE /items?propriedadeInexistente=1|email1@example.com`),t()(),i(1638,"p"),e(1639,"Na aus\xEAncia do t-param-delete-api e das keys, o grid ir\xE1 considerar o id do item e enviar diretamente como par\xE2metro na URL:"),t(),i(1640,"pre")(1641,"code"),e(1642,`// Considerando t-param-delete-api="email" e sem keys definidas
DELETE /items/1`),t()()(),i(1643,"blockquote")(1644,"p"),e(1645,"Durante a exclus\xE3o em lote, ele ser\xE1 enviado no corpo da requisi\xE7\xE3o POST como o \xEDndice "),i(1646,"code"),e(1647,"paramDelete"),t(),e(1648,", conforme o exemplo abaixo:"),t(),i(1649,"pre")(1650,"code",60),e(1651,`// Considerando t-param-delete-api="email"
{
  items: [
    { id: '1', email: 'email1@example.com' },
    { id: '2', email: 'email2@example.com' }
  ],
  keys: ['email1@example.com', 'email2@example.com'],
  total: 2,
  paramDelete: "email"
}`),t()()()()(),i(1652,"tr",19)(1653,"td",20)(1654,"div",21)(1655,"span",22),e(1656,"t-resizable"),o(1657,"br"),t()()(),i(1658,"td",23)(1659,"code",24),e(1660,"boolean"),t()(),i(1661,"td",25)(1662,"p")(1663,"code"),e(1664,"false"),t()()(),i(1665,"td",26)(1666,"em")(1667,"strong"),e(1668,"(opcional)"),t()(),i(1669,"p"),e(1670,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1671,"tr",19)(1672,"td",20)(1673,"div",21)(1674,"span",22),e(1675,"t-row-height"),o(1676,"br"),t()()(),i(1677,"td",23)(1678,"code",54),e(1679,"number"),t()(),i(1680,"td",25),e(1681,"-"),t(),i(1682,"td",26)(1683,"em")(1684,"strong"),e(1685,"(opcional)"),t()(),i(1686,"p"),e(1687,`Define a altura da linha quando o virtual scroll est\xE1 habilitado.
Necess\xE1ria para calcular corretamente o n\xFAmero de itens vis\xEDveis e evitar comportamentos inesperados durante a rolagem.
Recomenda-se o uso dessa propriedade ao utilizar colunas com templates personalizados
(`),i(1688,"code"),e(1689,"columnTemplate"),t(),e(1690," e "),i(1691,"code"),e(1692,"cellTemplate"),t(),e(1693,")."),t()()(),i(1694,"tr",19)(1695,"td",20)(1696,"div",32)(1697,"span",33),e(1698," (t-rows-selected)"),o(1699,"br"),t()()(),i(1700,"td",23)(1701,"code",34),e(1702,"EventEmitter"),t()(),i(1703,"td",25),e(1704,"-"),t(),i(1705,"td",26)(1706,"p"),e(1707,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t()()(),i(1708,"tr",19)(1709,"td",20)(1710,"div",21)(1711,"span",22),e(1712,"t-selectable"),o(1713,"br"),t()()(),i(1714,"td",23)(1715,"code",24),e(1716,"boolean"),t()(),i(1717,"td",25)(1718,"p")(1719,"code"),e(1720,"false"),t()()(),i(1721,"td",26)(1722,"em")(1723,"strong"),e(1724,"(opcional)"),t()(),i(1725,"p"),e(1726,`Habilita a sele\xE7\xE3o de itens, adicionando uma coluna com checkbox.
A sele\xE7\xE3o padr\xE3o \xE9 m\xFAltipla, permitindo selecionar v\xE1rios itens ao mesmo tempo.`),t()()(),i(1727,"tr",19)(1728,"td",20)(1729,"div",21)(1730,"span",22),e(1731,"t-selectable-entire-line"),o(1732,"br"),t()()(),i(1733,"td",23)(1734,"code",24),e(1735,"boolean"),t()(),i(1736,"td",25)(1737,"p")(1738,"code"),e(1739,"true"),t()()(),i(1740,"td",26)(1741,"em")(1742,"strong"),e(1743,"(opcional)"),t()(),i(1744,"p"),e(1745,"Permite selecionar o item ao clicar na linha. Requer que a propriedade "),i(1746,"strong"),e(1747,"t-selectable"),t(),e(1748," esteja habilitada."),t()()(),i(1749,"tr",19)(1750,"td",20)(1751,"div",21)(1752,"span",22),e(1753,"t-selectable-removed"),o(1754,"br"),t()()(),i(1755,"td",23)(1756,"code",24),e(1757,"boolean"),t()(),i(1758,"td",25)(1759,"p")(1760,"code"),e(1761,"false"),t()()(),i(1762,"td",26)(1763,"em")(1764,"strong"),e(1765,"(opcional)"),t()(),i(1766,"p"),e(1767,"Controla se os itens exibidos quando o filtro de estado estiver em 'removed' poder\xE3o ser selecionados."),t()()(),i(1768,"tr",19)(1769,"td",20)(1770,"div",32)(1771,"span",33),e(1772," (t-selected)"),o(1773,"br"),t()()(),i(1774,"td",23)(1775,"code",34),e(1776,"EventEmitter"),t()(),i(1777,"td",25),e(1778,"-"),t(),i(1779,"td",26)(1780,"em")(1781,"strong"),e(1782,"(opcional)"),t()(),i(1783,"p"),e(1784,"Evento disparado quando selecionado um item. Retorna o item selecionado."),t()()(),i(1785,"tr",19)(1786,"td",20)(1787,"div",32)(1788,"span",33),e(1789," (t-all-selected)"),o(1790,"br"),t()()(),i(1791,"td",23)(1792,"code",34),e(1793,"EventEmitter"),t()(),i(1794,"td",25),e(1795,"-"),t(),i(1796,"td",26)(1797,"em")(1798,"strong"),e(1799,"(opcional)"),t()(),i(1800,"p"),e(1801,"Evento disparado quando selecionado todos os itens. Retorna todos os itens selecionados."),t()()(),i(1802,"tr",19)(1803,"td",20)(1804,"div",21)(1805,"span",22),e(1806,"t-service-delete-api"),o(1807,"br"),t()()(),i(1808,"td",23)(1809,"code",41),e(1810,"string "),t(),i(1811,"code",61),e(1812," ThfGridDeleteService"),t()(),i(1813,"td",25),e(1814,"-"),t(),i(1815,"td",26)(1816,"em")(1817,"strong"),e(1818,"(opcional)"),t()(),i(1819,"p"),e(1820,`Respons\xE1vel por excluir o item. Aceita um servi\xE7o que implementa a interface
`),i(1821,"strong"),e(1822,"ThfGridDeleteService"),t(),e(1823," ou uma URL."),t(),i(1824,"p"),e(1825,`Ao selecionar o bot\xE3o de excluir, essa URL ou servi\xE7o ser\xE1 chamado, enviando o par\xE2metro definido na propriedade
`),i(1826,"strong"),e(1827,"t-param-delete-api"),t(),e(1828,". Se configurado e "),i(1829,"strong"),e(1830,"t-param-delete-api"),t(),e(1831," n\xE3o for informado, ser\xE1 enviado "),i(1832,"code"),e(1833,"key"),t(),e(1834,`
(definido ao usar `),i(1835,"strong"),e(1836,"ThfGridColumn"),t(),e(1837,") ou, na aus\xEAncia, "),i(1838,"code"),e(1839,"id"),t(),e(1840,"."),t(),i(1841,"p"),e(1842,"Por padr\xE3o, a exclus\xE3o \xE9 feita item a item. No entanto, ao habilitar a propriedade "),i(1843,"strong"),e(1844,"t-allow-batch-delete"),t(),e(1845,` e utilizar
um servi\xE7o com o m\xE9todo `),i(1846,"code"),e(1847,"deleteBatchItems"),t(),e(1848,", a exclus\xE3o em lote ser\xE1 permitida."),t(),i(1849,"blockquote")(1850,"p"),e(1851,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(1852,"a",62),e(1853,"API do PO UI"),t()()(),i(1854,"blockquote")(1855,"p"),e(1856,"Caso utilize um servi\xE7o "),i(1857,"strong"),e(1858,"ThfGridDeleteService"),t(),e(1859,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(1860,"tr",19)(1861,"td",20)(1862,"div",21)(1863,"span",22),e(1864," t-service-api"),o(1865,"br"),t()()(),i(1866,"td",23)(1867,"code",41),e(1868,"string"),t()(),i(1869,"td",25),e(1870,"-"),t(),i(1871,"td",26)(1872,"em")(1873,"strong"),e(1874,"(opcional)"),t()(),i(1875,"p"),e(1876,"Define a rota da "),i(1877,"code"),e(1878,"API"),t(),e(1879,` para realizar o GET dos itens e popular o grid.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(1880,"code"),e(1881,"API"),t(),e(1882,` esteja preparada para receber uma ou
mais `),i(1883,"code"),e(1884,"keys"),t(),e(1885," concatenadas para identifica\xE7\xE3o do registro. Caso n\xE3o haja "),i(1886,"code"),e(1887,"keys"),t(),e(1888,`,
que implementa a interface `),i(1889,"strong"),e(1890,"ThfGridColumn"),t(),e(1891,", a requisi\xE7\xE3o de exclus\xE3o ocorrer\xE1 pelo "),i(1892,"code"),e(1893,"id"),t(),e(1894,"."),t()()(),i(1895,"tr",19)(1896,"td",20)(1897,"div",21)(1898,"span",22),e(1899,"t-show-densification-configuration"),o(1900,"br"),t()()(),i(1901,"td",23)(1902,"code",24),e(1903,"boolean"),t()(),i(1904,"td",25)(1905,"p")(1906,"code"),e(1907,"false"),t()()(),i(1908,"td",26)(1909,"em")(1910,"strong"),e(1911,"(opcional)"),t()(),i(1912,"p"),e(1913,"Habilita um atalho para alternar o espa\xE7amento das linhas do grid entre os modos "),i(1914,"code"),e(1915,"Compacto"),t(),e(1916," e "),i(1917,"code"),e(1918,"Espa\xE7oso"),t(),e(1919,` no
Gerenciar Tabela.`),t(),i(1920,"blockquote")(1921,"p"),e(1922,"Em n\xEDvel de acessibilidade "),i(1923,"strong"),e(1924,"AA"),t(),e(1925,", a op\xE7\xE3o "),i(1926,"code"),e(1927,"Extra Compacto"),t(),e(1928," tamb\xE9m \xE9 exibida."),t()()()(),i(1929,"tr",19)(1930,"td",20)(1931,"div",21)(1932,"span",22),e(1933,"t-show-draggable-icon"),o(1934,"br"),t()()(),i(1935,"td",23)(1936,"code",24),e(1937,"boolean"),t()(),i(1938,"td",25)(1939,"p")(1940,"code"),e(1941,"false"),t()()(),i(1942,"td",26)(1943,"em")(1944,"strong"),e(1945,"(opcional)"),t()(),i(1946,"p"),e(1947,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1948,"tr",19)(1949,"td",20)(1950,"div",21)(1951,"span",22),e(1952," t-show-footer-aggregates"),o(1953,"br"),t()()(),i(1954,"td",23)(1955,"code",24),e(1956,"boolean"),t()(),i(1957,"td",25)(1958,"p")(1959,"code"),e(1960,"false"),t()()(),i(1961,"td",26)(1962,"em")(1963,"strong"),e(1964,"(opcional)"),t()(),i(1965,"p"),e(1966,"Quando definido true, exibir\xE1 no rodap\xE9 da tabela os totalizadores que foram definidos na propriedade "),i(1967,"code"),e(1968,"t-aggregates"),t(),e(1969,"."),t()()(),i(1970,"tr",19)(1971,"td",20)(1972,"div",32)(1973,"span",33),e(1974," (t-show-more)"),o(1975,"br"),t()()(),i(1976,"td",23)(1977,"code",34),e(1978,"EventEmitter"),t()(),i(1979,"td",25),e(1980,"-"),t(),i(1981,"td",26)(1982,"em")(1983,"strong"),e(1984,"(opcional)"),t()(),i(1985,"p"),e(1986,"Evento disparado quando pressionado o bot\xE3o 'Carregar mais'. Retorna um array do tipo "),i(1987,"strong"),e(1988,"ThfGridColumnSort"),t(),e(1989,`,
caso existam colunas ordenadas definidas.`),t(),i(1990,"blockquote")(1991,"p"),e(1992,"Caso "),i(1993,"strong"),e(1994,"t-items"),t(),e(1995," esteja definido, o uso desse evento se torna obrigat\xF3rio caso queira exibir o bot\xE3o 'Carregar mais'."),t()()()(),i(1996,"tr",19)(1997,"td",20)(1998,"div",21)(1999,"span",22),e(2e3,"t-show-more-disabled"),o(2001,"br"),t()()(),i(2002,"td",23)(2003,"code",24),e(2004,"boolean"),t()(),i(2005,"td",25)(2006,"p")(2007,"code"),e(2008,"false"),t()()(),i(2009,"td",26)(2010,"em")(2011,"strong"),e(2012,"(opcional)"),t()(),i(2013,"p"),e(2014,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(2015,"tr",19)(2016,"td",20)(2017,"div",21)(2018,"span",22),e(2019,"t-show-more-visible"),o(2020,"br"),t()()(),i(2021,"td",23)(2022,"code",24),e(2023,"boolean"),t()(),i(2024,"td",25)(2025,"p")(2026,"code"),e(2027,"true"),t()()(),i(2028,"td",26)(2029,"em")(2030,"strong"),e(2031,"(opcional)"),t()(),i(2032,"p"),e(2033,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(2034,"strong"),e(2035,"t-pageable"),t(),e(2036," esteja habilitada, ou seja utilizado o evento "),i(2037,"code"),e(2038,"t-show-more"),t(),e(2039," em conjunto com a propriedade "),i(2040,"strong"),e(2041,"t-items"),t(),e(2042,"."),t(),i(2043,"blockquote")(2044,"p"),e(2045,"Caso seja utilizado em conjunto com "),i(2046,"strong"),e(2047,"t-show-more-disabled"),t(),e(2048,", a propriedade "),i(2049,"strong"),e(2050,"t-show-more-visible"),t(),e(2051," ter\xE1 prioridade."),t()()()(),i(2052,"tr",19)(2053,"td",20)(2054,"div",21)(2055,"span",22),e(2056,"t-single-select"),o(2057,"br"),t()()(),i(2058,"td",23)(2059,"code",24),e(2060,"boolean"),t()(),i(2061,"td",25)(2062,"p")(2063,"code"),e(2064,"false"),t()()(),i(2065,"td",26)(2066,"em")(2067,"strong"),e(2068,"(opcional)"),t()(),i(2069,"p"),e(2070,"Define a sele\xE7\xE3o \xFAnica. Requer que a propriedade "),i(2071,"strong"),e(2072,"t-selectable"),t(),e(2073," esteja habilitada."),t()()(),i(2074,"tr",19)(2075,"td",20)(2076,"div",21)(2077,"span",22),e(2078,"t-sort"),o(2079,"br"),t()()(),i(2080,"td",23)(2081,"code",63),e(2082,"Array<ThfGridColumnSort>"),t()(),i(2083,"td",25),e(2084,"-"),t(),i(2085,"td",26)(2086,"em")(2087,"strong"),e(2088,"(opcional)"),t()(),i(2089,"p"),e(2090,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(2091,"pre")(2092,"code",28),e(2093,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-sort]="sortColumns"
></thf-grid>`),t()(),i(2094,"pre")(2095,"code",31),e(2096,"sortColumns: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(2097,"tr",19)(2098,"td",20)(2099,"div",32)(2100,"span",33),e(2101," (t-change-sort-column)"),o(2102,"br"),t()()(),i(2103,"td",23)(2104,"code",34),e(2105,"EventEmitter"),t()(),i(2106,"td",25),e(2107,"-"),t(),i(2108,"td",26)(2109,"em")(2110,"strong"),e(2111,"(opcional)"),t()(),i(2112,"p"),e(2113,`Evento disparado ao alterar o sort da coluna.
Retorna um array do tipo `),i(2114,"strong"),e(2115,"ThfGridColumnSort"),t(),e(2116," com a regra de sortable e a coluna aplicada."),t()()(),i(2117,"tr",19)(2118,"td",20)(2119,"div",21)(2120,"span",22),e(2121,"t-sortable"),o(2122,"br"),t()()(),i(2123,"td",23)(2124,"code",24),e(2125,"boolean"),t()(),i(2126,"td",25)(2127,"p")(2128,"code"),e(2129,"true"),t()()(),i(2130,"td",26)(2131,"em")(2132,"strong"),e(2133,"(opcional)"),t()(),i(2134,"p"),e(2135,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2136,"tr",19)(2137,"td",20)(2138,"div",21)(2139,"span",22),e(2140,"t-spacing"),o(2141,"br"),t()()(),i(2142,"td",23)(2143,"code",41),e(2144,"string"),t()(),i(2145,"td",25)(2146,"p")(2147,"code"),e(2148,"medium"),t()()(),i(2149,"td",26)(2150,"em")(2151,"strong"),e(2152,"(opcional)"),t()(),i(2153,"p"),e(2154,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2155,"strong"),e(2156,"ThfColumnSpacing"),t(),e(2157,"."),t(),i(2158,"blockquote")(2159,"p"),e(2160,"Em n\xEDvel de acessibilidade "),i(2161,"strong"),e(2162,"AA"),t(),e(2163,", caso o valor de "),i(2164,"code"),e(2165,"t-spacing"),t(),e(2166," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(2167,"code"),e(2168,"extraSmall"),t(),e(2169,`
nos seguintes cen\xE1rios:`),t(),i(2170,"ul")(2171,"li"),e(2172,"Quando o valor de "),i(2173,"code"),e(2174,"t-components-size"),t(),e(2175," for "),i(2176,"code"),e(2177,"small"),t(),e(2178,";"),t(),i(2179,"li"),e(2180,"Quando o valor padr\xE3o dos componentes for configurado como "),i(2181,"code"),e(2182,"small"),t(),e(2183,` no
`),i(2184,"a",42),e(2185,"servi\xE7o de tema"),t(),e(2186,"."),t()()()()(),i(2187,"tr",19)(2188,"td",20)(2189,"div",21)(2190,"span",22),e(2191,"t-striped"),o(2192,"br"),t()()(),i(2193,"td",23)(2194,"code",24),e(2195,"boolean"),t()(),i(2196,"td",25)(2197,"p")(2198,"code"),e(2199,"true"),t()()(),i(2200,"td",26)(2201,"em")(2202,"strong"),e(2203,"(opcional)"),t()(),i(2204,"p"),e(2205,"Define o estilo listrado no grid (striped)."),t()()(),i(2206,"tr",19)(2207,"td",20)(2208,"div",21)(2209,"span",22),e(2210,"t-text-wrap"),o(2211,"br"),t()()(),i(2212,"td",23)(2213,"code",24),e(2214,"boolean"),t()(),i(2215,"td",25)(2216,"p")(2217,"code"),e(2218,"false"),t()()(),i(2219,"td",26)(2220,"em")(2221,"strong"),e(2222,"(opcional)"),t()(),i(2223,"p"),e(2224,`Define a quebra autom\xE1tica de texto. Quando ativada, o texto que excede o espa\xE7o dispon\xEDvel \xE9 transferido para a
pr\xF3xima linha em pontos apropriados para uma leitura clara.`),t(),i(2225,"blockquote")(2226,"p"),e(2227,"Propriedade incompat\xEDvel quando "),i(2228,"strong"),e(2229,"t-virtual-scroll"),t(),e(2230," est\xE1 habilitado."),t()()()(),i(2231,"tr",19)(2232,"td",20)(2233,"div",32)(2234,"span",33),e(2235," (t-unselected)"),o(2236,"br"),t()()(),i(2237,"td",23)(2238,"code",34),e(2239,"EventEmitter"),t()(),i(2240,"td",25),e(2241,"-"),t(),i(2242,"td",26)(2243,"em")(2244,"strong"),e(2245,"(opcional)"),t()(),i(2246,"p"),e(2247,"Evento disparado quando desselecionado um item. Retorna o item desselecionado."),t()()(),i(2248,"tr",19)(2249,"td",20)(2250,"div",32)(2251,"span",33),e(2252," (t-all-unselected)"),o(2253,"br"),t()()(),i(2254,"td",23)(2255,"code",34),e(2256,"EventEmitter"),t()(),i(2257,"td",25),e(2258,"-"),t(),i(2259,"td",26)(2260,"em")(2261,"strong"),e(2262,"(opcional)"),t()(),i(2263,"p"),e(2264,"Evento disparado quando desselecionado todos os itens. Retorna um array com todos os itens desselecionados."),t()()(),i(2265,"tr",19)(2266,"td",20)(2267,"div",21)(2268,"span",22),e(2269,"t-virtual-columns"),o(2270,"br"),t()()(),i(2271,"td",23)(2272,"code",24),e(2273,"boolean"),t()(),i(2274,"td",25)(2275,"p")(2276,"code"),e(2277,"false"),t()()(),i(2278,"td",26)(2279,"em")(2280,"strong"),e(2281,"(opcional)"),t()(),i(2282,"p"),e(2283,`Define o uso do virtual columns no grid para melhorar a performance com grande volume de colunas.
Recomendamos a utiliza\xE7\xE3o dessa propriedade somente em caso de perda de performance com grande quantidade de colunas.
Existe incompatibilidade com a propriedade `),i(2284,"strong"),e(2285,"t-auto-size"),t(),e(2286," e m\xE9todo "),i(2287,"strong"),e(2288,"autoFitColumns()"),t(),e(2289,`.
Caso a grid tenha mais de 50 colunas o virtual-columns \xE9 ativado.`),t()()(),i(2290,"tr",19)(2291,"td",20)(2292,"div",21)(2293,"span",22),e(2294,"t-virtual-scroll"),o(2295,"br"),t()()(),i(2296,"td",23)(2297,"code",24),e(2298,"boolean"),t()(),i(2299,"td",25)(2300,"p")(2301,"code"),e(2302,"true"),t()()(),i(2303,"td",26)(2304,"em")(2305,"strong"),e(2306,"(opcional)"),t()(),i(2307,"p"),e(2308,`Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados.
Requer que a propriedade `),i(2309,"strong"),e(2310,"t-height"),t(),e(2311," esteja definida."),t(),i(2312,"blockquote")(2313,"p"),e(2314,"Verificar a documenta\xE7\xE3o das seguintes propriedades: "),i(2315,"strong"),e(2316,"t-text-wrap"),t(),e(2317,", "),i(2318,"strong"),e(2319,"t-row-height"),t(),e(2320," e "),i(2321,"strong"),e(2322,"t-page-size-virtual"),t(),e(2323,"."),t()()()()()(),i(2324,"po-accordion-item",64)(2325,"table",65)(2326,"tr",19)(2327,"th",66)(2328,"div",21)(2329,"h4")(2330,"span",22),e(2331," autoFitColumns "),t()()()()(),i(2332,"tr",26)(2333,"td",26)(2334,"p"),e(2335,"Ajusta automaticamente a largura das colunas com base no conte\xFAdo atual das c\xE9lulas."),t(),i(2336,"p"),e(2337,`Este m\xE9todo calcula a largura ideal para cada coluna considerando o conte\xFAdo textual das c\xE9lulas vis\xEDveis,
cabe\xE7alhos das colunas e configura\xE7\xF5es de redimensionamento e tamanho fixo`),t(),i(2338,"p")(2339,"strong"),e(2340,"Exemplo de uso:"),t()(),i(2341,"pre")(2342,"code",31),e(2343,`// Ajusta colunas e mant\xE9m largura total da tabela
this.gridComponent.autoFitColumns(true);

// Ajusta colunas e permite redimensionamento fluido
this.gridComponent.autoFitColumns();`),t()(),i(2344,"blockquote")(2345,"p"),e(2346,"Este m\xE9todo \xE9 chamado automaticamente quando:"),t(),i(2347,"ul")(2348,"li"),e(2349,"A propriedade "),i(2350,"code"),e(2351,"t-auto-size"),t(),e(2352," \xE9 habilitada"),t(),i(2353,"li"),e(2354,"O evento "),i(2355,"code"),e(2356,"t-auto-size-on-scroll"),t(),e(2357," \xE9 disparado durante scroll virtual"),t()()()()()(),i(2358,"h5")(2359,"b"),e(2360,"Par\xE2metros"),t()(),i(2361,"table",16)(2362,"tr",17)(2363,"th",18),e(2364,"Nome"),t(),i(2365,"th",18),e(2366,"Tipo"),t(),i(2367,"th",18),e(2368,"Descri\xE7\xE3o"),t()(),i(2369,"tr",19)(2370,"td",20),e(2371," recalculate"),t(),i(2372,"td",23)(2373,"code",67),e(2374," boolean "),t()(),i(2375,"td",26)(2376,"p"),e(2377,"Quando "),i(2378,"code"),e(2379,"true"),t(),e(2380,`, mant\xE9m a largura total da tabela ap\xF3s o ajuste.
Quando `),i(2381,"code"),e(2382,"false"),t(),e(2383," ou omitido, limpa a largura fixa da tabela para permitir redimensionamento fluido."),t()()()(),o(2384,"br"),i(2385,"table",65)(2386,"tr",19)(2387,"th",66)(2388,"div",21)(2389,"h4")(2390,"span",22),e(2391," cleanRowActionsMode "),t()()()()(),i(2392,"tr",26)(2393,"td",26)(2394,"p"),e(2395,"Aplica o estado default aos itens editados, inclu\xEDdos e removidos do grid."),t(),i(2396,"p"),e(2397,`Usado para aplicar as altera\xE7\xF5es realizadas nos registros do grid, e tamb\xE9m
para remover os itens marcados para exclus\xE3o, de acordo com os par\xE2metros fornecidos.`),t(),i(2398,"pre")(2399,"code"),e(2400,`// Aplica o estado de edi\xE7\xE3o e inclus\xE3o, removendo os itens com $removed
this.cleanRowActionsMode();

// Aplica apenas as edi\xE7\xF5es, sem alterar as inclus\xF5es e exclus\xF5es
this.cleanRowActionsMode(true, false, false);

// Remove apenas os itens com $removed, sem aplicar edi\xE7\xF5es e inclus\xF5es
this.cleanRowActionsMode(false, false, true);`),t()(),i(2401,"p"),e(2402,`Exemplo de uso:
Se voc\xEA precisa aplicar o estado de todas as a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e
remo\xE7\xE3o, basta chamar esta fun\xE7\xE3o. Por exemplo, se houver uma a\xE7\xE3o de aplicar o grid ao
salvar os dados, voc\xEA pode us\xE1-lo da seguinte forma:`),t(),i(2403,"pre")(2404,"code",31),e(2405,`// Ap\xF3s salvar os dados na API, voc\xEA pode limpar todos os estados de a\xE7\xE3o de linha
this.myService.saveData(this.thfGrid.getChangedItems()).subscribe(() => {
  this.thfGrid.cleanRowActionsMode(); // Limpa todas as a\xE7\xF5es de linha ap\xF3s salvar
  console.log('A\xE7\xF5es de linha limpas.');
});`),t()()()()(),i(2406,"h5")(2407,"b"),e(2408,"Par\xE2metros"),t()(),i(2409,"table",16)(2410,"tr",17)(2411,"th",18),e(2412,"Nome"),t(),i(2413,"th",18),e(2414,"Tipo"),t(),i(2415,"th",18),e(2416,"Descri\xE7\xE3o"),t()(),i(2417,"tr",19)(2418,"td",20),e(2419," edit"),t(),i(2420,"td",23)(2421,"code",67),e(2422," boolean "),t()(),i(2423,"td",26)(2424,"p"),e(2425,"Indica se deve aplicar as edi\xE7\xF5es realizadas nas linhas."),t()()(),i(2426,"tr",19)(2427,"td",20),e(2428," include"),t(),i(2429,"td",23)(2430,"code",67),e(2431," boolean "),t()(),i(2432,"td",26)(2433,"p"),e(2434,"Indica se deve aplicar as inclus\xF5es de novas linhas."),t()()(),i(2435,"tr",19)(2436,"td",20),e(2437," del"),t(),i(2438,"td",23)(2439,"code",67),e(2440," boolean "),t()(),i(2441,"td",26)(2442,"p"),e(2443,"Indica se deve remover as linhas marcadas para exclus\xE3o."),t()()()(),o(2444,"br"),i(2445,"table",65)(2446,"tr",19)(2447,"th",66)(2448,"div",21)(2449,"h4")(2450,"span",22),e(2451," deleteItems "),t()()()()(),i(2452,"tr",26)(2453,"td",26)(2454,"p"),e(2455,"Respons\xE1vel pela exclus\xE3o de itens selecionados."),t(),i(2456,"p"),e(2457,"Quando "),i(2458,"strong"),e(2459,"t-items"),t(),e(2460,` est\xE1 definido, a remo\xE7\xE3o pode ser feita em lote, excluindo todas as linhas selecionadas localmente.
Se utilizado com um servi\xE7o (`),i(2461,"strong"),e(2462,"t-service-api"),t(),e(2463," e/ou "),i(2464,"strong"),e(2465,"t-service-delete-api"),t(),e(2466,"), a exclus\xE3o permitida \xE9 de um item por vez."),t(),i(2467,"blockquote")(2468,"p"),e(2469,'Caso utilizado com a "edi\xE7\xE3o flu\xEDda offline via formul\xE1rio (propriedade '),i(2470,"strong"),e(2471,"t-grid-row-actions"),t(),e(2472,`)" remove localmente
as linhas sinalizadas com `),i(2473,"code"),e(2474,"$removed"),t(),e(2475,"."),t()(),i(2476,"blockquote")(2477,"p"),e(2478,"\xC9 poss\xEDvel habilitar a exclus\xE3o em lote com servi\xE7os remotos utilizando a propriedade "),i(2479,"strong"),e(2480,"t-allow-batch-delete"),t(),e(2481," em conjunto com "),i(2482,"strong"),e(2483,"t-service-api"),t(),e(2484," e/ou "),i(2485,"strong"),e(2486,"t-service-delete-api"),t(),e(2487,"."),t()()()()(),o(2488,"br"),i(2489,"table",65)(2490,"tr",19)(2491,"th",66)(2492,"div",21)(2493,"h4")(2494,"span",22),e(2495," getChangedItems "),t()()()()(),i(2496,"tr",26)(2497,"td",26)(2498,"p"),e(2499,"Retorna uma lista dos itens que foram modificados no grid, com a propriedade "),i(2500,"code"),e(2501,"op"),t(),e(2502,` indicando
a a\xE7\xE3o executada sobre cada item, podendo ser 'remove', 'add' ou 'replace'.`),t(),i(2503,"pre")(2504,"code"),e(2505,`// Exemplo de uso:
const changedItems = this.getChangedItems();
console.log(changedItems);
// Sa\xEDda esperada: [{ id: 1, name: 'Item 1', op: 'replace' }, { id: 2, name: 'Item 2', op: 'remove' }]`),t()()()()(),i(2506,"h5")(2507,"b"),e(2508,"Retorno"),t()(),i(2509,"table",16)(2510,"tr",17)(2511,"th",18),e(2512,"Tipo"),t(),i(2513,"th",18),e(2514,"Descri\xE7\xE3o"),t()(),i(2515,"tr",19)(2516,"td",23)(2517,"code",67),e(2518,"Array<any>"),t()(),i(2519,"td",26)(2520,"p"),e(2521,"Uma lista de objetos representando os itens modificados. Cada objeto ter\xE1 a propriedade "),i(2522,"code"),e(2523,"op"),t(),e(2524," que indica a a\xE7\xE3o realizada"),t()()()(),o(2525,"br"),i(2526,"table",65)(2527,"tr",19)(2528,"th",66)(2529,"div",21)(2530,"h4")(2531,"span",22),e(2532," getSelectedRows "),t()()()()(),i(2533,"tr",26)(2534,"td",26)(2535,"p"),e(2536,"Respons\xE1vel por retornar os itens do grid que est\xE3o selecionadas."),t()()()(),o(2537,"br"),i(2538,"table",65)(2539,"tr",19)(2540,"th",66)(2541,"div",21)(2542,"h4")(2543,"span",22),e(2544," showAdditionalHelp "),t()()()()(),i(2545,"tr",26)(2546,"td",26)(2547,"p"),e(2548,"Exibe o conte\xFAdo da propriedade "),i(2549,"code"),e(2550,"helper"),t(),e(2551," durante a edi\xE7\xE3o ("),i(2552,"code"),e(2553,"t-edit-properties"),t(),e(2554," ou "),i(2555,"code"),e(2556,"t-grid-row-actions"),t(),e(2557,`) do grid.
Para isso, ser\xE1 necess\xE1rio ter uma inst\xE2ncia do componente no DOM e configurar uma tecla de atalho utilizando o evento `),i(2558,"code"),e(2559,"t-keydown"),t(),e(2560,"."),t(),i(2561,"pre")(2562,"code"),e(2563,`import { ThfGridComponent } from '@totvs/thf-components';
...
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

columns: Array<ThfGridColumn> = [
 ...
 {
   property: 'name',
   label: 'Nome',
   editProperties: {
     componentEditable: 'input',
     helper: 'Nome completo',
     keydown: this.onkeydown.bind(this, 'name')
    }
 },
]

onkeydown(property: string, event: KeyboardEvent): void {
 if (event.code === 'F9') {
   this.thfGrid.showAdditionalHelp(property);
 }
}`),t()(),i(2564,"blockquote")(2565,"p"),e(2566,`Com t-grid-row-actions: Alguns atalhos j\xE1 est\xE3o em uso, ent\xE3o, evite sobrescrev\xEA-los. Para mais detalhes,
consulte o `),i(2567,"a",68),e(2568,"TDN"),t(),e(2569,"."),t()()()()(),i(2570,"h5")(2571,"b"),e(2572,"Par\xE2metros"),t()(),i(2573,"table",16)(2574,"tr",17)(2575,"th",18),e(2576,"Nome"),t(),i(2577,"th",18),e(2578,"Tipo"),t(),i(2579,"th",18),e(2580,"Descri\xE7\xE3o"),t()(),i(2581,"tr",19)(2582,"td",20),e(2583," property"),t(),i(2584,"td",23)(2585,"code",67),e(2586," string "),t()(),i(2587,"td",26)(2588,"p"),e(2589,"Identificador da coluna."),t()()()(),o(2590,"br"),i(2591,"table",65)(2592,"tr",19)(2593,"th",66)(2594,"div",21)(2595,"h4")(2596,"span",22),e(2597," selectRowItem "),t()()()()(),i(2598,"tr",26)(2599,"td",26)(2600,"p"),e(2601,"Seleciona um item do grid."),t()()()(),i(2602,"h5")(2603,"b"),e(2604,"Par\xE2metros"),t()(),i(2605,"table",16)(2606,"tr",17)(2607,"th",18),e(2608,"Nome"),t(),i(2609,"th",18),e(2610,"Tipo"),t(),i(2611,"th",18),e(2612,"Descri\xE7\xE3o"),t()(),i(2613,"tr",19)(2614,"td",20),e(2615," item"),t(),i(2616,"td",23)(2617,"code",69),e(2618," { key: value } "),t(),i(2619,"code",27),e(2620," Function "),t()(),i(2621,"td",26)(2622,"p"),e(2623,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2624,"br"),i(2625,"table",65)(2626,"tr",19)(2627,"th",66)(2628,"div",21)(2629,"h4")(2630,"span",22),e(2631," unselectRowItem "),t()()()()(),i(2632,"tr",26)(2633,"td",26)(2634,"p"),e(2635,"Desmarca o item que est\xE1 selecionado."),t()()()(),i(2636,"h5")(2637,"b"),e(2638,"Par\xE2metros"),t()(),i(2639,"table",16)(2640,"tr",17)(2641,"th",18),e(2642,"Nome"),t(),i(2643,"th",18),e(2644,"Tipo"),t(),i(2645,"th",18),e(2646,"Descri\xE7\xE3o"),t()(),i(2647,"tr",19)(2648,"td",20),e(2649," item"),t(),i(2650,"td",23)(2651,"code",69),e(2652," { key: value } "),t(),i(2653,"code",27),e(2654," Function "),t()(),i(2655,"td",26)(2656,"p"),e(2657,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),o(2658,"br"),i(2659,"table",65)(2660,"tr",19)(2661,"th",66)(2662,"div",21)(2663,"h4")(2664,"span",22),e(2665," applyFilters "),t()()()()(),i(2666,"tr",26)(2667,"td",26)(2668,"p"),e(2669,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza o grid."),t(),i(2670,"p"),e(2671,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),t(),i(2672,"pre")(2673,"code"),e(2674,"url + ?page=1&pageSize=10"),t()(),i(2675,"blockquote")(2676,"p"),e(2677,"Obs: os par\xE2metros "),i(2678,"code"),e(2679,"page"),t(),e(2680," e "),i(2681,"code"),e(2682,"pageSize"),t(),e(2683," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),t()(),i(2684,"p"),e(2685,"Caso sejam informados os par\xE2metros "),i(2686,"code"),e(2687,"{ name: 'JOHN', age: '23' }"),t(),e(2688,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),t(),i(2689,"pre")(2690,"code"),e(2691,"url + ?page=1&pageSize=10&name=JOHN&age=23"),t()()()()(),i(2692,"h5")(2693,"b"),e(2694,"Par\xE2metros"),t()(),i(2695,"table",16)(2696,"tr",17)(2697,"th",18),e(2698,"Nome"),t(),i(2699,"th",18),e(2700,"Tipo"),t(),i(2701,"th",18),e(2702,"Descri\xE7\xE3o"),t()(),i(2703,"tr",19)(2704,"td",20),e(2705," queryParams"),t(),i(2706,"td",23)(2707,"code",69),e(2708," { key: value } "),t()(),i(2709,"td",26)(2710,"p"),e(2711,"Formato do objeto a ser enviado."),t(),i(2712,"blockquote")(2713,"p"),e(2714,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),t()()()()(),o(2715,"br"),i(2716,"table",65)(2717,"tr",19)(2718,"th",66)(2719,"div",21)(2720,"h4")(2721,"span",22),e(2722," calculateHeightDynamically "),t()()()()(),i(2723,"tr",26)(2724,"td",26)(2725,"p"),e(2726,"Mant\xE9m compatibilidade com vers\xF5es anteriores, chamando "),i(2727,"code"),e(2728,"calculateDynamicSize"),t(),e(2729," com a propriedade "),i(2730,"code"),e(2731,"'height'"),t(),e(2732,"."),t()()()(),i(2733,"h5")(2734,"b"),e(2735,"Par\xE2metros"),t()(),i(2736,"table",16)(2737,"tr",17)(2738,"th",18),e(2739,"Nome"),t(),i(2740,"th",18),e(2741,"Tipo"),t(),i(2742,"th",18),e(2743,"Descri\xE7\xE3o"),t()(),i(2744,"tr",19)(2745,"td",20),e(2746," callRowHeight"),t(),o(2747,"td",23),i(2748,"td",26)(2749,"p"),e(2750,"Define se o "),i(2751,"code"),e(2752,"calculateRowHeight"),t(),e(2753," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2754,"br"),i(2755,"table",65)(2756,"tr",19)(2757,"th",66)(2758,"div",21)(2759,"h4")(2760,"span",22),e(2761," removeItem "),t()()()()(),i(2762,"tr",26)(2763,"td",26)(2764,"p"),e(2765,"Remove um item localmente do grid."),t()()()(),i(2766,"h5")(2767,"b"),e(2768,"Par\xE2metros"),t()(),i(2769,"table",16)(2770,"tr",17)(2771,"th",18),e(2772,"Nome"),t(),i(2773,"th",18),e(2774,"Tipo"),t(),i(2775,"th",18),e(2776,"Descri\xE7\xE3o"),t()(),i(2777,"tr",19)(2778,"td",20),e(2779," item"),t(),i(2780,"td",23)(2781,"code",54),e(2782," number "),t(),i(2783,"code",69),e(2784," { key: value } "),t()(),i(2785,"td",26)(2786,"p"),e(2787,"\xCDndice ou item que ser\xE1 removido."),t(),i(2788,"blockquote")(2789,"p"),e(2790,"Ao remover o item, a linha que o representa ser\xE1 removida do grid."),t()()()()(),o(2791,"br"),i(2792,"table",65)(2793,"tr",19)(2794,"th",66)(2795,"div",21)(2796,"h4")(2797,"span",22),e(2798," unselectRows "),t()()()()(),i(2799,"tr",26)(2800,"td",26)(2801,"p"),e(2802,"M\xE9todo respons\xE1vel por desmarcar as linhas que est\xE3o selecionadas."),t()()()(),o(2803,"br"),i(2804,"table",65)(2805,"tr",19)(2806,"th",66)(2807,"div",21)(2808,"h4")(2809,"span",22),e(2810," getInfoProperties "),t()()()()(),i(2811,"tr",26)(2812,"td",26)(2813,"p"),e(2814,"M\xE9todo que retorna informa\xE7\xF5es sobre os itens atuais da tabela."),t(),i(2815,"p"),e(2816,"Inclui:"),t(),i(2817,"ul")(2818,"li")(2819,"code"),e(2820,"items"),t(),e(2821,": lista de itens atualmente carregados na tabela."),t(),i(2822,"li")(2823,"code"),e(2824,"total"),t(),e(2825,": total de itens informado pela API atrav\xE9s da propriedade "),i(2826,"code"),e(2827,"total"),t(),e(2828,"; pode ser "),i(2829,"code"),e(2830,"undefined"),t(),e(2831," caso a API n\xE3o informe."),t(),i(2832,"li")(2833,"code"),e(2834,"page"),t(),e(2835,": n\xFAmero da p\xE1gina atual informado pela API ("),i(2836,"code"),e(2837,"itemsByApi.page"),t(),e(2838,"); se n\xE3o existir, utiliza a propriedade local "),i(2839,"code"),e(2840,"page"),t(),e(2841,"."),t(),i(2842,"li")(2843,"code"),e(2844,"pageSize"),t(),e(2845,": quantidade de itens por p\xE1gina informada pela API ("),i(2846,"code"),e(2847,"itemsByApi.pageSize"),t(),e(2848,"); se n\xE3o existir, utiliza a propriedade local "),i(2849,"code"),e(2850,"pageSize"),t(),e(2851,"."),t()()()()(),o(2852,"br"),i(2853,"table",65)(2854,"tr",19)(2855,"th",66)(2856,"div",21)(2857,"h4")(2858,"span",22),e(2859," updateItem "),t()()()()(),i(2860,"tr",26)(2861,"td",26)(2862,"p"),e(2863,"Atualiza um item do grid quando utilizado "),i(2864,"strong"),e(2865,"t-itens"),t(),e(2866,"."),t()()()(),i(2867,"h5")(2868,"b"),e(2869,"Par\xE2metros"),t()(),i(2870,"table",16)(2871,"tr",17)(2872,"th",18),e(2873,"Nome"),t(),i(2874,"th",18),e(2875,"Tipo"),t(),i(2876,"th",18),e(2877,"Descri\xE7\xE3o"),t()(),i(2878,"tr",19)(2879,"td",20),e(2880," item"),t(),i(2881,"td",23)(2882,"code",54),e(2883," number "),t(),i(2884,"code",69),e(2885," { key: value } "),t()(),i(2886,"td",26)(2887,"p"),e(2888,"\xCDndice ou o item que ser\xE1 atualizado."),t()()(),i(2889,"tr",19)(2890,"td",20),e(2891," updatedItem"),t(),i(2892,"td",23)(2893,"code",69),e(2894," { key: value } "),t()(),i(2895,"td",26)(2896,"p"),e(2897,"Item que foi atualizado."),t(),i(2898,"blockquote")(2899,"p"),e(2900,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada no grid."),t()()()()(),o(2901,"br"),i(2902,"table",65)(2903,"tr",19)(2904,"th",66)(2905,"div",21)(2906,"h4")(2907,"span",22),e(2908," calculateDynamicSize "),t()()()()(),i(2909,"tr",26)(2910,"td",26)(2911,"p"),e(2912,"calcula dinamicamente o tamanho da grid com base na porcentagem definida nas propriedades "),i(2913,"strong"),e(2914,"t-height"),t(),e(2915,`,
`),i(2916,"strong"),e(2917,"t-min-height"),t(),e(2918," e "),i(2919,"strong"),e(2920,"t-max-height"),t(),e(2921,"."),t(),i(2922,"p"),e(2923,`Caso a grid esteja dentro de um componente ou elemento que altere sua visibilidade,
\xE9 necess\xE1rio chamar esta fun\xE7\xE3o para garantir um c\xE1lculo correto. Exemplo:`),t(),i(2924,"pre")(2925,"code",28),e(2926,`<po-tabs>
 <po-tab (p-click)="emitClickTab()" p-label="PO Tabs">
   <thf-grid #thfGrid> </thf-grid>
 </po-tab>
</po-tabs>`),t()(),i(2927,"pre")(2928,"code",31),e(2929,`@ViewChild('thfGrid') thfGrid: ThfGridComponent;

emitClickTab() {
 // Time-out necess\xE1rio para garantir que o DOM foi atualizado antes do c\xE1lculo da altura.
 setTimeout(() => {
   this.thfGrid.calculateDynamicSize('height', true);
 }, 100);
}`),t()()()()(),i(2930,"h5")(2931,"b"),e(2932,"Par\xE2metros"),t()(),i(2933,"table",16)(2934,"tr",17)(2935,"th",18),e(2936,"Nome"),t(),i(2937,"th",18),e(2938,"Tipo"),t(),i(2939,"th",18),e(2940,"Descri\xE7\xE3o"),t()(),i(2941,"tr",19)(2942,"td",20),e(2943," property"),t(),o(2944,"td",23),i(2945,"td",26)(2946,"p"),e(2947,"Define qual propriedade ser\xE1 calculada: "),i(2948,"code"),e(2949,"'height'"),t(),e(2950,", "),i(2951,"code"),e(2952,"'minHeight'"),t(),e(2953," ou "),i(2954,"code"),e(2955,"'maxHeight'"),t(),e(2956,"."),t()()(),i(2957,"tr",19)(2958,"td",20),e(2959," callRowHeight"),t(),o(2960,"td",23),i(2961,"td",26)(2962,"p"),e(2963,"Define se o m\xE9todo "),i(2964,"code"),e(2965,"calculateRowHeight"),t(),e(2966," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),o(2967,"br"),i(2968,"table",65)(2969,"tr",19)(2970,"th",66)(2971,"div",21)(2972,"h4")(2973,"span",22),e(2974," isColumnRequired "),t()()()()(),i(2975,"tr",26)(2976,"td",26)(2977,"p"),e(2978,"Verifica se uma coluna \xE9 obrigat\xF3ria na propriedade "),i(2979,"code"),e(2980,"editProperties"),t(),e(2981," ou no "),i(2982,"code"),e(2983,"formGroupIntern"),t()()()()(),o(2984,"br"),i(2985,"table",65)(2986,"tr",19)(2987,"th",66)(2988,"div",21)(2989,"h4")(2990,"span",22),e(2991," setRowStateFilter "),t()()()()(),i(2992,"tr",26)(2993,"td",26)(2994,"p"),e(2995,"Define o filtro de estado das linhas a ser aplicado na exibi\xE7\xE3o da grid."),t(),i(2996,"p"),e(2997,`Este m\xE9todo permite alternar entre a visualiza\xE7\xE3o de itens ativos (n\xE3o removidos) e itens removidos,
filtrando a grid com base na propriedade `),i(2998,"code"),e(2999,"$removed"),t(),e(3e3,` dos itens. \xC9 utilizado principalmente em conjunto
com o recurso de edi\xE7\xE3o fluida offline (`),i(3001,"strong"),e(3002,"t-grid-row-actions"),t(),e(3003,")."),t(),i(3004,"p"),e(3005,"Quando o filtro \xE9 alterado:"),t(),i(3006,"ul")(3007,"li"),e(3008,"A grid \xE9 filtrada para exibir apenas os itens que correspondem ao estado selecionado"),t(),i(3009,"li"),e(3010,"A pagina\xE7\xE3o \xE9 reiniciada ("),i(3011,"code"),e(3012,"skip = 0"),t(),e(3013,")"),t(),i(3014,"li"),e(3015,"O label do filtro \xE9 atualizado"),t(),i(3016,"li"),e(3017,"Os agregados totais s\xE3o recalculados"),t(),i(3018,"li"),e(3019,"A sele\xE7\xE3o pode ser desabilitada (no caso de itens removidos)"),t()(),i(3020,"pre")(3021,"code",31),e(3022,`// Exibe apenas itens ativos (n\xE3o removidos)
this.thfGrid.setRowStateFilter('active');

// Exibe apenas itens removidos, for\xE7ando recarregamento da grid
this.thfGrid.setRowStateFilter('removed', true);

// Exibe apenas itens ativos (n\xE3o removidos), sem emitir evento
this.thfGrid.setRowStateFilter('active', false, false);`),t()(),i(3023,"blockquote")(3024,"p"),e(3025,"Quando o filtro \xE9 alterado para "),i(3026,"code"),e(3027,"'removed'"),t(),e(3028,", a sele\xE7\xE3o de linhas \xE9 desabilitada automaticamente."),t(),i(3029,"p"),e(3030,"Ao retornar para "),i(3031,"code"),e(3032,"'active'"),t(),e(3033,", a sele\xE7\xE3o \xE9 restaurada ao seu estado inicial."),t()()()()(),i(3034,"h5")(3035,"b"),e(3036,"Par\xE2metros"),t()(),i(3037,"table",16)(3038,"tr",17)(3039,"th",18),e(3040,"Nome"),t(),i(3041,"th",18),e(3042,"Tipo"),t(),i(3043,"th",18),e(3044,"Descri\xE7\xE3o"),t()(),i(3045,"tr",19)(3046,"td",20),e(3047," filter"),t(),i(3048,"td",23)(3049,"code",70),e(3050," ('active' "),t(),i(3051,"code",71),e(3052," 'removed') "),t()(),i(3053,"td",26)(3054,"p"),e(3055,"Define qual filtro ser\xE1 aplicado:"),t(),i(3056,"ul")(3057,"li")(3058,"code"),e(3059,"'active'"),t(),e(3060,": Exibe apenas itens n\xE3o removidos ("),i(3061,"code"),e(3062,"$removed !== true"),t(),e(3063,")"),t(),i(3064,"li")(3065,"code"),e(3066,"'removed'"),t(),e(3067,": Exibe apenas itens marcados para remo\xE7\xE3o ("),i(3068,"code"),e(3069,"$removed === true"),t(),e(3070,")"),t()()()(),i(3071,"tr",19)(3072,"td",20),e(3073," reloadGrid"),t(),i(3074,"td",23)(3075,"code",67),e(3076," boolean "),t()(),i(3077,"td",26)(3078,"p"),e(3079,"Indica se a grid deve ser recarregada visualmente:"),t(),i(3080,"ul")(3081,"li"),e(3082,"Quando "),i(3083,"code"),e(3084,"true"),t(),e(3085,", desmarca todas as sele\xE7\xF5es, limpa itens selecionados e for\xE7a uma renderiza\xE7\xE3o completa da grid"),t(),i(3086,"li"),e(3087,"Quando "),i(3088,"code"),e(3089,"false"),t(),e(3090,", apenas aplica o filtro sem recarregar a grid"),t()()()(),i(3091,"tr",19)(3092,"td",20),e(3093," emitEvent"),t(),i(3094,"td",23)(3095,"code",67),e(3096," boolean "),t()(),i(3097,"td",26)(3098,"p"),e(3099,"Indica se o evento "),i(3100,"code"),e(3101,"changeRowStateFilter"),t(),e(3102," deve ser emitido ap\xF3s a altera\xE7\xE3o do filtro:"),t(),i(3103,"ul")(3104,"li"),e(3105,"Quando "),i(3106,"code"),e(3107,"true"),t(),e(3108,", o evento \xE9 emitido com o novo valor do filtro"),t(),i(3109,"li"),e(3110,"Quando "),i(3111,"code"),e(3112,"false"),t(),e(3113,", o evento n\xE3o \xE9 emitido"),t()()()()(),o(3114,"br"),i(3115,"table",65)(3116,"tr",19)(3117,"th",66)(3118,"div",21)(3119,"h4")(3120,"span",22),e(3121," getDestructiveModalTitle "),t()()()()(),i(3122,"tr",26)(3123,"td",26)(3124,"p"),e(3125,"Retorna o t\xEDtulo do modal destrutivo com base no tipo de a\xE7\xE3o"),t()()()(),o(3126,"br"),i(3127,"table",65)(3128,"tr",19)(3129,"th",66)(3130,"div",21)(3131,"h4")(3132,"span",22),e(3133," applyFilterByColumnProps "),t()()()()(),i(3134,"tr",26)(3135,"td",26)(3136,"p"),e(3137,"Aplica filtro por coluna com base no par\xE2metro fornecido."),t(),i(3138,"pre")(3139,"code",31),e(3140,`// Aplica filtro na coluna 'email' para exibir itens cujo e-mail:
// - cont\xE9m 'gmail'
// - e n\xE3o cont\xE9m 'teste'

const filter: Array<ThfFilterByColumn> = [
  {
    property: 'email',
    logic: 'and',
    operator1: 'contains',
    value1: 'gmail',
    operator2: 'doesnotcontain',
    value2: 'teste'
  }
];
this.gridComponent.applyFilterByColumnProps(filter);`),t()()()()(),i(3141,"h5")(3142,"b"),e(3143,"Par\xE2metros"),t()(),i(3144,"table",16)(3145,"tr",17)(3146,"th",18),e(3147,"Nome"),t(),i(3148,"th",18),e(3149,"Tipo"),t(),i(3150,"th",18),e(3151,"Descri\xE7\xE3o"),t()(),i(3152,"tr",19)(3153,"td",20),e(3154," filterColumnProps"),t(),i(3155,"td",23)(3156,"code",47),e(3157," Array<ThfFilterByColumn> "),t()(),i(3158,"td",26)(3159,"p"),e(3160,"Lista de filtros a serem aplicados."),t()()()(),o(3161,"br"),t()()(),w(3162,2),t(),i(3163,"po-tab",72),w(3164,3),i(3165,"po-container",5)(3166,"po-accordion",6)(3167,"po-accordion-item",73)(3168,"h4",9)(3169,"code"),e(3170,"ThfTableAction"),t()(),i(3171,"div",10)(3172,"p"),e(3173," Interface para configura\xE7\xE3o das a\xE7\xF5es."),t()(),i(3174,"h4",15),e(3175,"Propriedades"),t(),i(3176,"table",16)(3177,"tr",17)(3178,"th",18),e(3179,"Nome"),t(),i(3180,"th",18),e(3181,"Tipo"),t(),i(3182,"th",18),e(3183,"Descri\xE7\xE3o"),t()(),i(3184,"tr",19)(3185,"td",20)(3186,"div",21)(3187,"span",22),e(3188," action"),o(3189,"br"),t()()(),i(3190,"td",23)(3191,"code",27),e(3192,"Function"),t()(),i(3193,"td",26)(3194,"em")(3195,"strong"),e(3196,"(opcional)"),t()(),i(3197,"p"),e(3198,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(3199,"p"),e(3200,"No componente "),i(3201,"code"),e(3202,"po-dropdown"),t(),e(3203,", a action tamb\xE9m pode ser executada para o agrupador de subitens."),t(),i(3204,"blockquote")(3205,"p"),e(3206,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(3207,"em"),e(3208,"bind"),t(),e(3209,"."),t()(),i(3210,"p"),e(3211,"Exemplo: "),i(3212,"code"),e(3213,"action: this.myFunction.bind(this)"),t()()()(),i(3214,"tr",19)(3215,"td",20)(3216,"div",21)(3217,"span",22),e(3218," disabled"),o(3219,"br"),t()()(),i(3220,"td",23)(3221,"code",24),e(3222,"boolean "),t(),i(3223,"code",27),e(3224," Function"),t()(),i(3225,"td",26)(3226,"em")(3227,"strong"),e(3228,"(opcional)"),t()(),i(3229,"p"),e(3230,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(3231,"p"),e(3232,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(3233,"tr",19)(3234,"td",20)(3235,"div",21)(3236,"span",22),e(3237," fixed"),o(3238,"br"),t()()(),i(3239,"td",23)(3240,"code",24),e(3241,"boolean"),t()(),i(3242,"td",26)(3243,"em")(3244,"strong"),e(3245,"(opcional)"),t()(),i(3246,"p"),e(3247,"Propriedade para fixar a a\xE7\xE3o"),t()()(),i(3248,"tr",19)(3249,"td",20)(3250,"div",21)(3251,"span",22),e(3252," icon"),o(3253,"br"),t()()(),i(3254,"td",23)(3255,"code",41),e(3256,"string "),t(),i(3257,"code",53),e(3258," TemplateRef<void>"),t()(),i(3259,"td",26)(3260,"em")(3261,"strong"),e(3262,"(opcional)"),t()(),i(3263,"p"),e(3264,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(3265,"p"),e(3266,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(3267,"a",74),e(3268,"Biblioteca de \xEDcones"),t(),e(3269,". conforme exemplo abaixo:"),t(),i(3270,"pre")(3271,"code"),e(3272,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),t()(),i(3273,"p"),e(3274,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(3275,"pre")(3276,"code"),e(3277,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),t()(),i(3278,"p"),e(3279,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(3280,"code"),e(3281,"TemplateRef"),t(),e(3282,`, conforme exemplo abaixo:
component.html:`),t(),i(3283,"pre")(3284,"code"),e(3285,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),t()(),i(3286,"p"),e(3287,"component.ts:"),t(),i(3288,"pre")(3289,"code"),e(3290,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),t()()()(),i(3291,"tr",19)(3292,"td",20)(3293,"div",21)(3294,"span",22),e(3295," label"),o(3296,"br"),t()()(),i(3297,"td",23)(3298,"code",41),e(3299,"string"),t()(),i(3300,"td",26)(3301,"p"),e(3302,"R\xF3tulo da a\xE7\xE3o."),t(),i(3303,"p"),e(3304,"No componente "),i(3305,"code"),e(3306,"po-dropdown"),t(),e(3307,", a label tamb\xE9m pode representar o agrupador de subitens."),t()()(),i(3308,"tr",19)(3309,"td",20)(3310,"div",21)(3311,"span",22),e(3312," selected"),o(3313,"br"),t()()(),i(3314,"td",23)(3315,"code",24),e(3316,"boolean"),t()(),i(3317,"td",26)(3318,"em")(3319,"strong"),e(3320,"(opcional)"),t()(),i(3321,"p"),e(3322,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(3323,"tr",19)(3324,"td",20)(3325,"div",21)(3326,"span",22),e(3327," separator"),o(3328,"br"),t()()(),i(3329,"td",23)(3330,"code",24),e(3331,"boolean"),t()(),i(3332,"td",26)(3333,"em")(3334,"strong"),e(3335,"(opcional)"),t()(),i(3336,"p"),e(3337,"Atribui uma linha separadora acima do item."),t()()(),i(3338,"tr",19)(3339,"td",20)(3340,"div",21)(3341,"span",22),e(3342," type"),o(3343,"br"),t()()(),i(3344,"td",23)(3345,"code",41),e(3346,"string"),t()(),i(3347,"td",26)(3348,"em")(3349,"strong"),e(3350,"(opcional)"),t()(),i(3351,"p"),e(3352,"Define a cor do item, sendo "),i(3353,"code"),e(3354,"default"),t(),e(3355," o padr\xE3o."),t(),i(3356,"p"),e(3357,"Valores v\xE1lidos:"),t(),i(3358,"ul")(3359,"li")(3360,"code"),e(3361,"default"),t()(),i(3362,"li")(3363,"code"),e(3364,"danger"),t(),e(3365," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(3366,"tr",19)(3367,"td",20)(3368,"div",21)(3369,"span",22),e(3370," url"),o(3371,"br"),t()()(),i(3372,"td",23)(3373,"code",41),e(3374,"string"),t()(),i(3375,"td",26)(3376,"em")(3377,"strong"),e(3378,"(opcional)"),t()(),i(3379,"p"),e(3380,"URL utilizada para redirecionamento das p\xE1ginas."),t(),i(3381,"p"),e(3382,"No componente "),i(3383,"code"),e(3384,"po-dropdown"),t(),e(3385,`, a url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),i(3386,"code"),e(3387,"url"),t(),e(3388," \xE9 informada em um agrupador, o clique "),i(3389,"strong"),e(3390,"n\xE3o abrir\xE1 os subitens"),t(),e(3391,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t()()(),i(3392,"tr",19)(3393,"td",20)(3394,"div",21)(3395,"span",22),e(3396," visible"),o(3397,"br"),t()()(),i(3398,"td",23)(3399,"code",24),e(3400,"boolean "),t(),i(3401,"code",27),e(3402," Function"),t()(),i(3403,"td",26)(3404,"em")(3405,"strong"),e(3406,"(opcional)"),t()(),i(3407,"p"),e(3408,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(3409,"blockquote")(3410,"p"),e(3411,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(3412,"p"),e(3413,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(3414,"ul")(3415,"li")(3416,"p"),e(3417,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(3418,"li")(3419,"p"),e(3420,"Informar diretamente um valor booleano."),t()()()()()()(),i(3421,"po-accordion-item",75)(3422,"h4",9)(3423,"code"),e(3424,"ThfAggregateDescriptor"),t()(),i(3425,"div",10)(3426,"p"),e(3427,"Recebe um objeto contendo a coluna, uma label e a fun\xE7\xE3o que ser\xE1 aplicada para o c\xE1lculo do totalizador."),t()(),i(3428,"h4",15),e(3429,"Propriedades"),t(),i(3430,"table",16)(3431,"tr",17)(3432,"th",18),e(3433,"Nome"),t(),i(3434,"th",18),e(3435,"Tipo"),t(),i(3436,"th",18),e(3437,"Descri\xE7\xE3o"),t()(),i(3438,"tr",19)(3439,"td",20)(3440,"div",21)(3441,"span",22),e(3442," aggregate"),o(3443,"br"),t()()(),i(3444,"td",23)(3445,"code",76),e(3446,"'sum' "),t(),i(3447,"code",77),e(3448," 'average' "),t(),i(3449,"code",78),e(3450," 'count' "),t(),i(3451,"code",79),e(3452," 'min' "),t(),i(3453,"code",80),e(3454," 'max'"),t()(),i(3455,"td",26)(3456,"p"),e(3457,"Fun\xE7\xE3o de agrega\xE7\xE3o a ser aplicada inicialmente: 'sum', 'average', 'count', 'min', ou 'max'."),t()()(),i(3458,"tr",19)(3459,"td",20)(3460,"div",21)(3461,"span",22),e(3462," field"),o(3463,"br"),t()()(),i(3464,"td",23)(3465,"code",41),e(3466,"string"),t()(),i(3467,"td",26)(3468,"p"),e(3469,"Coluna que ser\xE1 utilizada pelo totalizador."),t()()(),i(3470,"tr",19)(3471,"td",20)(3472,"div",21)(3473,"span",22),e(3474," label"),o(3475,"br"),t()()(),i(3476,"td",23)(3477,"code",41),e(3478,"string"),t()(),i(3479,"td",26)(3480,"em")(3481,"strong"),e(3482,"(opcional)"),t()(),i(3483,"p"),e(3484,"Texto exibido ao lado do resultado da agrega\xE7\xE3o no agrupamento."),t()()()()(),i(3485,"po-accordion-item",81)(3486,"h4",9)(3487,"code"),e(3488,"ThfAggregateConfig"),t()(),i(3489,"div",10)(3490,"p"),e(3491,"Interface para configura\xE7\xE3o do "),i(3492,"code"),e(3493,"Aggregate"),t(),e(3494,"."),t()(),i(3495,"h4",15),e(3496,"Propriedades"),t(),i(3497,"table",16)(3498,"tr",17)(3499,"th",18),e(3500,"Nome"),t(),i(3501,"th",18),e(3502,"Tipo"),t(),i(3503,"th",18),e(3504,"Descri\xE7\xE3o"),t()(),i(3505,"tr",19)(3506,"td",20)(3507,"div",21)(3508,"span",22),e(3509," aggregateAlign"),o(3510,"br"),t()()(),i(3511,"td",23)(3512,"code",82),e(3513,"'right' "),t(),i(3514,"code",83),e(3515," 'defaultColumn'"),t()(),i(3516,"td",26)(3517,"em")(3518,"strong"),e(3519,"(opcional)"),t()(),i(3520,"p"),e(3521,"Define o alinhamento horizontal dos valores dos totalizadores."),t(),i(3522,"ul")(3523,"li")(3524,"strong"),e(3525,"Valores aceitos:"),t()(),i(3526,"li")(3527,"code"),e(3528,"'right'"),t(),e(3529,": Alinha os valores \xE0 direita (comportamento padr\xE3o)."),t(),i(3530,"li")(3531,"code"),e(3532,"'defaultColumn'"),t(),e(3533,": Alinha o valor no mesmo alinhamento da sua coluna de origem."),t()()()(),i(3534,"tr",19)(3535,"td",20)(3536,"div",21)(3537,"span",22),e(3538," disabled"),o(3539,"br"),t()()(),i(3540,"td",23)(3541,"code",51),e(3542,"Array<string>"),t()(),i(3543,"td",26)(3544,"em")(3545,"strong"),e(3546,"(opcional)"),t()(),i(3547,"p"),e(3548,"Define a lista das propriedades (colunas) que devem ter a sele\xE7\xE3o dos aggregates desabilitada no rodap\xE9 da grid."),t()()(),i(3549,"tr",19)(3550,"td",20)(3551,"div",21)(3552,"span",22),e(3553," visible"),o(3554,"br"),t()()(),i(3555,"td",23)(3556,"code",51),e(3557,"Array<string>"),t()(),i(3558,"td",26)(3559,"em")(3560,"strong"),e(3561,"(opcional)"),t()(),i(3562,"p"),e(3563,"Define a lista das propriedades (colunas) que devem exibir a sele\xE7\xE3o de aggregates no rodap\xE9 da grid."),t()()()()(),i(3564,"po-accordion-item",84)(3565,"h4",9)(3566,"code"),e(3567,"ThfGridColumnSort"),t()(),i(3568,"div",10)(3569,"p"),e(3570,"Interface para definir a ordena\xE7\xE3o das colunas ("),i(3571,"strong"),e(3572,"t-sort"),t(),e(3573,")."),t()(),i(3574,"h4",15),e(3575,"Propriedades"),t(),i(3576,"table",16)(3577,"tr",17)(3578,"th",18),e(3579,"Nome"),t(),i(3580,"th",18),e(3581,"Tipo"),t(),i(3582,"th",18),e(3583,"Descri\xE7\xE3o"),t()(),i(3584,"tr",19)(3585,"td",20)(3586,"div",21)(3587,"span",22),e(3588," dir"),o(3589,"br"),t()()(),i(3590,"td",23)(3591,"code",85),e(3592,"'asc' "),t(),i(3593,"code",86),e(3594," 'desc'"),t()(),i(3595,"td",26)(3596,"em")(3597,"strong"),e(3598,"(opcional)"),t()(),i(3599,"p"),e(3600,"Dire\xE7\xE3o da coluna:"),t(),i(3601,"ul")(3602,"li")(3603,"code"),e(3604,"asc"),t()(),i(3605,"li")(3606,"code"),e(3607,"desc"),t()()()()(),i(3608,"tr",19)(3609,"td",20)(3610,"div",21)(3611,"span",22),e(3612," field"),o(3613,"br"),t()()(),i(3614,"td",23)(3615,"code",41),e(3616,"string"),t()(),i(3617,"td",26)(3618,"p"),e(3619,"Coluna"),t()()()()(),i(3620,"po-accordion-item",87)(3621,"h4",9)(3622,"code"),e(3623,"ThfGridColumn"),t()(),i(3624,"div",10)(3625,"p"),e(3626,"Interface para configura\xE7\xE3o das colunas ("),i(3627,"strong"),e(3628,"t-columns"),t(),e(3629,")."),t()(),i(3630,"h4",15),e(3631,"Propriedades"),t(),i(3632,"table",16)(3633,"tr",17)(3634,"th",18),e(3635,"Nome"),t(),i(3636,"th",18),e(3637,"Tipo"),t(),i(3638,"th",18),e(3639,"Descri\xE7\xE3o"),t()(),i(3640,"tr",19)(3641,"td",20)(3642,"div",21)(3643,"span",22),e(3644," action"),o(3645,"br"),t()()(),i(3646,"td",23)(3647,"code",27),e(3648,"Function"),t()(),i(3649,"td",26)(3650,"em")(3651,"strong"),e(3652,"(opcional)"),t()(),i(3653,"p"),e(3654,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),i(3655,"code"),e(3656,"link"),t(),e(3657," ou "),i(3658,"code"),e(3659,"icon"),t(),e(3660,"."),t(),i(3661,"blockquote")(3662,"p"),e(3663,"Quando for do tipo "),i(3664,"code"),e(3665,"link"),t(),e(3666,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),t()(),i(3667,"blockquote")(3668,"p"),e(3669,"Quando for do tipo "),i(3670,"code"),e(3671,"icon"),t(),e(3672," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),t()()()(),i(3673,"tr",19)(3674,"td",20)(3675,"div",21)(3676,"span",22),e(3677," boolean"),o(3678,"br"),t()()(),i(3679,"td",23)(3680,"code",88),e(3681,"PoTableBoolean"),t()(),i(3682,"td",26)(3683,"em")(3684,"strong"),e(3685,"(opcional)"),t()(),i(3686,"p"),e(3687,"Define um objeto do tipo "),i(3688,"code"),e(3689,"PoTableBoolean"),t(),e(3690," para as colunas do tipo "),i(3691,"em"),e(3692,"boolean"),t(),e(3693,". Por exemplo:"),t(),i(3694,"pre")(3695,"code"),e(3696,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(3697,"blockquote")(3698,"p"),e(3699,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(3700,"em"),e(3701,"boolean"),t(),e(3702,`,
esta exibir\xE1 por padr\xE3o `),i(3703,"code"),e(3704,"Sim"),t(),e(3705," e "),i(3706,"code"),e(3707,"N\xE3o"),t(),e(3708," de acordo com os valores "),i(3709,"em"),e(3710,"booleanos"),t(),e(3711,"."),t()()()(),i(3712,"tr",19)(3713,"td",20)(3714,"div",21)(3715,"span",22),e(3716," booleanFalse"),o(3717,"br"),t()()(),i(3718,"td",23)(3719,"code",41),e(3720,"string"),t()(),i(3721,"td",26)(3722,"em")(3723,"strong"),e(3724,"(opcional)"),t()(),i(3725,"p"),e(3726,"Texto exibido quando o valor da coluna for "),i(3727,"em"),e(3728,"false"),t(),e(3729,"."),t()()(),i(3730,"tr",19)(3731,"td",20)(3732,"div",21)(3733,"span",22),e(3734," booleanTrue"),o(3735,"br"),t()()(),i(3736,"td",23)(3737,"code",41),e(3738,"string"),t()(),i(3739,"td",26)(3740,"em")(3741,"strong"),e(3742,"(opcional)"),t()(),i(3743,"p"),e(3744,"Texto exibido quando o valor da coluna for "),i(3745,"em"),e(3746,"true"),t(),e(3747,"."),t()()(),i(3748,"tr",19)(3749,"td",20)(3750,"div",21)(3751,"span",22),e(3752," color"),o(3753,"br"),t()()(),i(3754,"td",23)(3755,"code",41),e(3756,"string "),t(),i(3757,"code",27),e(3758," Function"),t()(),i(3759,"td",26)(3760,"em")(3761,"strong"),e(3762,"(opcional)"),t()(),i(3763,"p"),e(3764,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),t(),i(3765,"p"),e(3766,"Valores v\xE1lidos:"),t(),i(3767,"ul")(3768,"li"),o(3769,"span",89),i(3770,"code"),e(3771,"color-01"),t()(),i(3772,"li"),o(3773,"span",90),i(3774,"code"),e(3775,"color-02"),t()(),i(3776,"li"),o(3777,"span",91),i(3778,"code"),e(3779,"color-03"),t()(),i(3780,"li"),o(3781,"span",92),i(3782,"code"),e(3783,"color-04"),t()(),i(3784,"li"),o(3785,"span",93),i(3786,"code"),e(3787,"color-05"),t()(),i(3788,"li"),o(3789,"span",94),i(3790,"code"),e(3791,"color-06"),t()(),i(3792,"li"),o(3793,"span",95),i(3794,"code"),e(3795,"color-07"),t()(),i(3796,"li"),o(3797,"span",96),i(3798,"code"),e(3799,"color-08"),t()(),i(3800,"li"),o(3801,"span",97),i(3802,"code"),e(3803,"color-09"),t()(),i(3804,"li"),o(3805,"span",98),i(3806,"code"),e(3807,"color-10"),t()(),i(3808,"li"),o(3809,"span",99),i(3810,"code"),e(3811,"color-11"),t()(),i(3812,"li"),o(3813,"span",100),i(3814,"code"),e(3815,"color-12"),t()()(),i(3816,"blockquote")(3817,"p"),e(3818,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),t()(),i(3819,"pre")(3820,"code"),e(3821,"(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }"),t()(),i(3822,"blockquote")(3823,"p"),e(3824,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),i(3825,"code"),e(3826,"icons"),t(),e(3827,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),t()(),i(3828,"pre")(3829,"code"),e(3830,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},`),t()()()(),i(3831,"tr",19)(3832,"td",20)(3833,"div",21)(3834,"span",22),e(3835," detail"),o(3836,"br"),t()()(),i(3837,"td",23)(3838,"code",101),e(3839,"PoTableDetail"),t()(),i(3840,"td",26)(3841,"em")(3842,"strong"),e(3843,"(opcional)"),t()(),i(3844,"p"),e(3845,"Define um objeto que segue a interface "),i(3846,"code"),e(3847,"PoTableDetail"),t(),e(3848,", para as colunas de detalhes. Por exemplo:"),t(),i(3849,"pre")(3850,"code"),e(3851,"{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }"),t()()()(),i(3852,"tr",19)(3853,"td",20)(3854,"div",21)(3855,"span",22),e(3856," disabled"),o(3857,"br"),t()()(),i(3858,"td",23)(3859,"code",27),e(3860,"Function"),t()(),i(3861,"td",26)(3862,"em")(3863,"strong"),e(3864,"(opcional)"),t()(),i(3865,"p"),e(3866,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(3867,"em"),e(3868,"link"),t(),e(3869," e sua a\xE7\xE3o."),t(),i(3870,"blockquote")(3871,"p"),e(3872,"Propriedade dispon\xEDvel nas colunas do tipo "),i(3873,"code"),e(3874,"link"),t(),e(3875,"."),t()()()(),i(3876,"tr",19)(3877,"td",20)(3878,"div",21)(3879,"span",22),e(3880," editProperties"),o(3881,"br"),t()()(),i(3882,"td",23)(3883,"code",102),e(3884,"CustomEditProperties"),t()(),i(3885,"td",26)(3886,"em")(3887,"strong"),e(3888,"(opcional)"),t()(),i(3889,"p"),e(3890,"Propriedade para customizar as colunas edit\xE1veis"),t()()(),i(3891,"tr",19)(3892,"td",20)(3893,"div",21)(3894,"span",22),e(3895," filter"),o(3896,"br"),t()()(),i(3897,"td",23)(3898,"code",24),e(3899,"boolean"),t()(),i(3900,"td",26)(3901,"em")(3902,"strong"),e(3903,"(opcional)"),t()(),i(3904,"p"),e(3905,"Habilita o filtro por coluna."),t(),i(3906,"p"),e(3907,`Quando ativado, exibe um \xEDcone de filtro no cabe\xE7alho da coluna e permite que o usu\xE1rio aplique filtros diretamente
no grid.`),t(),i(3908,"p"),e(3909,"O filtro n\xE3o realiza requisi\xE7\xF5es \xE0 API, toda a filtragem ocorre localmente sobre os dados j\xE1 carregados."),t(),i(3910,"p"),e(3911,"O tipo do filtro \xE9 determinado pelo "),i(3912,"code"),e(3913,"type"),t(),e(3914," definido na coluna. Cada tipo renderiza um componente espec\xEDfico:"),t(),i(3915,"ul")(3916,"li"),e(3917,"string: "),i(3918,"code"),e(3919,"input"),t()(),i(3920,"li"),e(3921,"number, currency: "),i(3922,"code"),e(3923,"number"),t()(),i(3924,"li"),e(3925,"date: "),i(3926,"code"),e(3927,"datepicker"),t()(),i(3928,"li"),e(3929,"boolean: "),i(3930,"code"),e(3931,"checkbox"),t()()(),i(3932,"p"),e(3933,"Caso o "),i(3934,"code"),e(3935,"type"),t(),e(3936," da coluna n\xE3o seja um desses ou n\xE3o seja informado, o filtro assume o tipo "),i(3937,"code"),e(3938,"string"),t(),e(3939," como padr\xE3o."),t(),i(3940,"blockquote")(3941,"p"),e(3942,`Para conhecer todos os operadores dispon\xEDveis para cada tipo de coluna, consulte tamb\xE9m a interface
`),i(3943,"strong"),e(3944,"ThfFilterByColumn"),t(),e(3945,"."),t()()()(),i(3946,"tr",19)(3947,"td",20)(3948,"div",21)(3949,"span",22),e(3950," fixed"),o(3951,"br"),t()()(),i(3952,"td",23)(3953,"code",24),e(3954,"boolean"),t()(),i(3955,"td",26)(3956,"em")(3957,"strong"),e(3958,"(opcional)"),t()(),i(3959,"p"),e(3960,"Propriedade para fixar a coluna inicialmente."),t(),i(3961,"blockquote")(3962,"p"),e(3963,`No momento, \xE9 poss\xEDvel fixar apenas 2 colunas e garantir o funcionamento correto.
Caso a coluna de a\xE7\xF5es esteja fixa, \xE9 poss\xEDvel fixar somente 1 coluna corretamente.`),t()()()(),i(3964,"tr",19)(3965,"td",20)(3966,"div",21)(3967,"span",22),e(3968," format"),o(3969,"br"),t()()(),i(3970,"td",23)(3971,"code",41),e(3972,"string"),t()(),i(3973,"td",26)(3974,"em")(3975,"strong"),e(3976,"(opcional)"),t()(),i(3977,"p"),e(3978,"Formato de exibi\xE7\xE3o do valor da coluna."),t(),i(3979,"table")(3980,"thead")(3981,"tr")(3982,"th"),e(3983,"Formata\xE7\xE3o"),t(),i(3984,"th"),e(3985,"Type da Coluna"),t(),i(3986,"th"),e(3987,"Descri\xE7\xE3o"),t(),i(3988,"th"),e(3989,"Exemplos"),t()()(),i(3990,"tbody")(3991,"tr")(3992,"td"),e(3993,"Monet\xE1rio"),t(),i(3994,"td")(3995,"code"),e(3996,"currency"),t()(),i(3997,"td"),e(3998,"Formato para valores monet\xE1rios. Espera um c\xF3digo de moeda no padr\xE3o ISO 4217, e caso n\xE3o informado, ser\xE1 utilizado "),i(3999,"code"),e(4e3,"'USD'"),t(),e(4001," por padr\xE3o"),t(),i(4002,"td")(4003,"code"),e(4004,"'BRL'"),t(),e(4005,", "),i(4006,"code"),e(4007,"'USD'"),t(),e(4008,", "),i(4009,"code"),e(4010,"'EUR'"),t(),e(4011,", "),i(4012,"code"),e(4013,"'RUB'"),t()()(),i(4014,"tr")(4015,"td"),e(4016,"Data"),t(),i(4017,"td")(4018,"code"),e(4019,"date"),t()(),i(4020,"td"),e(4021,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),t(),i(4022,"td")(4023,"code"),e(4024,"'dd/MM/yyyy'"),t(),e(4025,", "),i(4026,"code"),e(4027,"'dd-MM-yy'"),t(),e(4028,", "),i(4029,"code"),e(4030,"'mm/dd/yyyy'"),t()()(),i(4031,"tr")(4032,"td"),e(4033,"Hora"),t(),i(4034,"td")(4035,"code"),e(4036,"time"),t()(),i(4037,"td"),e(4038,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),t(),i(4039,"td")(4040,"code"),e(4041,"'HH:mm'"),t(),e(4042,", "),i(4043,"code"),e(4044,"'HH:mm:ss.ffffff'"),t(),e(4045,", "),i(4046,"code"),e(4047,"'HH:mm:ss.ff'"),t(),e(4048,", "),i(4049,"code"),e(4050,"'mm:ss.fff'"),t()()(),i(4051,"tr")(4052,"td"),e(4053,"N\xFAmero"),t(),i(4054,"td")(4055,"code"),e(4056,"number"),t()(),i(4057,"td"),e(4058,"Aceita um valor seguindo o padr\xE3o "),i(4059,"a",103)(4060,"strong"),e(4061,"DecimalPipe"),t()(),e(4062," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),t(),i(4063,"td")(4064,"code"),e(4065,"'1.2-5'"),t(),e(4066," (ex.: "),i(4067,"code"),e(4068,"50"),t(),e(4069," \u2192 "),i(4070,"code"),e(4071,"50.00"),t(),e(4072,")"),t()()()(),i(4073,"p"),e(4074,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),t(),i(4075,"blockquote")(4076,"p"),e(4077,`Na formata\xE7\xE3o do tipo currency, caso o valor informado seja diferente do padr\xE3o ISO 4217, ser\xE1 exibido o alerta "Currency formatting failed. Using fallback." no console do navegador.
Exemplos de formato inv\xE1lido: 'ABCD', '123'.`),t()()()(),i(4078,"tr",19)(4079,"td",20)(4080,"div",21)(4081,"span",22),e(4082," icons"),o(4083,"br"),t()()(),i(4084,"td",23)(4085,"code",104),e(4086,"Array<PoTableColumnIcon>"),t()(),i(4087,"td",26)(4088,"em")(4089,"strong"),e(4090,"(opcional)"),t()(),i(4091,"p"),e(4092,"Define um "),i(4093,"em"),e(4094,"array"),t(),e(4095," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),i(4096,"code"),e(4097,"action"),t(),e(4098," e "),i(4099,"code"),e(4100,"color"),t(),e(4101,`
definidos na coluna, \xE0 partir do `),i(4102,"em"),e(4103,"value"),t(),e(4104," da "),i(4105,"a",105)(4106,"code"),e(4107,"PoTableColumnIcon"),t()(),e(4108,", por exemplo:"),t(),i(4109,"pre")(4110,"code"),e(4111,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},`),t()(),i(4112,"pre")(4113,"code"),e(4114,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...`),t()()()(),i(4115,"tr",19)(4116,"td",20)(4117,"div",21)(4118,"span",22),e(4119," key"),o(4120,"br"),t()()(),i(4121,"td",23)(4122,"code",24),e(4123,"boolean "),t(),i(4124,"code",54),e(4125," number"),t()(),i(4126,"td",26)(4127,"em")(4128,"strong"),e(4129,"(opcional)"),t()(),i(4130,"p"),e(4131,`Indica se a coluna faz parte da chave composta para exclus\xE3o de registros.
Pode ser do tipo num\xE9rico ou booleano. Os valores num\xE9ricos sempre ser\xE3o priorizados em rela\xE7\xE3o aos booleanos.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(4132,"code"),e(4133,"API"),t(),e(4134," esteja preparada para receber uma ou mais "),i(4135,"code"),e(4136,"keys"),t(),e(4137," concatenadas com pipe '|' para identifica\xE7\xE3o do registro. ex.: DELETE {end-point}/{keys}"),t(),i(4138,"blockquote")(4139,"p"),e(4140,`Exemplo de keys: [{ property: 'id', key: 1 }, { property: 'name', key: true }, { property: 'email', key: 2 }].
Resposta do exemplo: 'valor de id|valor de email|valor de name'`),t()()()(),i(4141,"tr",19)(4142,"td",20)(4143,"div",21)(4144,"span",22),e(4145," label"),o(4146,"br"),t()()(),i(4147,"td",23)(4148,"code",41),e(4149,"string"),t()(),i(4150,"td",26)(4151,"em")(4152,"strong"),e(4153,"(opcional)"),t()(),i(4154,"p"),e(4155,"Texto para t\xEDtulo da coluna."),t(),i(4156,"p"),e(4157,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(4158,"em"),e(4159,"label"),t(),e(4160," o valor da propriedade "),i(4161,"em"),e(4162,"property"),t(),e(4163," com a primeira letra em mai\xFAsculo."),t()()(),i(4164,"tr",19)(4165,"td",20)(4166,"div",21)(4167,"span",22),e(4168," labels"),o(4169,"br"),t()()(),i(4170,"td",23)(4171,"code",106),e(4172,"Array<PoTableColumnLabel>"),t()(),i(4173,"td",26)(4174,"em")(4175,"strong"),e(4176,"(opcional)"),t()(),i(4177,"p"),e(4178,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(4179,"code"),e(4180,"PoTableColumnLabel"),t(),e(4181," na qual devem ser definidas os labels. Por exemplo:"),t(),i(4182,"pre")(4183,"code"),e(4184,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(4185,"tr",19)(4186,"td",20)(4187,"div",21)(4188,"span",22),e(4189," link"),o(4190,"br"),t()()(),i(4191,"td",23)(4192,"code",41),e(4193,"string"),t()(),i(4194,"td",26)(4195,"em")(4196,"strong"),e(4197,"(opcional)"),t()(),i(4198,"p"),e(4199,"Define o nome da propriedade que conter\xE1 o "),i(4200,"code"),e(4201,"link"),t(),e(4202," a ser redirecionado."),t()()(),i(4203,"tr",19)(4204,"td",20)(4205,"div",21)(4206,"span",22),e(4207," locale"),o(4208,"br"),t()()(),i(4209,"td",23)(4210,"code",41),e(4211,"string"),t()(),i(4212,"td",26)(4213,"em")(4214,"strong"),e(4215,"(opcional)"),t()(),i(4216,"p"),e(4217,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o e edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(4218,"a",107)(4219,"code"),e(4220,"I18n"),t()()(),i(4221,"p"),e(4222,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(4223,"pre")(4224,"code"),e(4225,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(4226,"blockquote")(4227,"p"),e(4228,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(4229,"p"),e(4230,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(4231,"p"),e(4232,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(4233,"a",107)(4234,"code"),e(4235,"I18n"),t()()()(),i(4236,"p"),e(4237,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(4238,"pre")(4239,"code"),e(4240,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(4241,"blockquote")(4242,"p"),e(4243,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(4244,"code"),e(4245,"number"),t(),e(4246," e "),i(4247,"code"),e(4248,"currency"),t(),e(4249,"."),t()(),i(4250,"blockquote")(4251,"p"),e(4252,"No modo edi\xE7\xE3o, a propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4253,"p")(4254,"strong"),e(4255,"Componentes compat\xEDveis"),t(),e(4256,": "),i(4257,"code"),e(4258,"decimal"),t()()()()(),i(4259,"tr",19)(4260,"td",20)(4261,"div",21)(4262,"span",22),e(4263," mask"),o(4264,"br"),t()()(),i(4265,"td",23)(4266,"code",41),e(4267,"string"),t()(),i(4268,"td",26)(4269,"em")(4270,"strong"),e(4271,"(opcional)"),t()(),i(4272,"p"),e(4273,`Indica uma m\xE1scara para a coluna
Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
Aplic\xE1vel nas colunas do tipo `),i(4274,"code"),e(4275,"number"),t(),e(4276," e "),i(4277,"code"),e(4278,"string"),t(),e(4279,`
Nas colunas do tipo `),i(4280,"code"),e(4281,"number"),t(),e(4282," a propriedade "),i(4283,"code"),e(4284,"mask"),t(),e(4285," ter\xE1 prioridade sob "),i(4286,"code"),e(4287,"format"),t()()()(),i(4288,"tr",19)(4289,"td",20)(4290,"div",21)(4291,"span",22),e(4292," property"),o(4293,"br"),t()()(),i(4294,"td",23)(4295,"code",41),e(4296,"string"),t()(),i(4297,"td",26)(4298,"p"),e(4299,"Identificador da coluna."),t()()(),i(4300,"tr",19)(4301,"td",20)(4302,"div",21)(4303,"span",22),e(4304," resizable"),o(4305,"br"),t()()(),i(4306,"td",23)(4307,"code",24),e(4308,"boolean"),t()(),i(4309,"td",26)(4310,"em")(4311,"strong"),e(4312,"(opcional)"),t()(),i(4313,"p"),e(4314,"Define se a coluna pode ser redimensionada pelo usu\xE1rio."),t()()(),i(4315,"tr",19)(4316,"td",20)(4317,"div",21)(4318,"span",22),e(4319," sortable"),o(4320,"br"),t()()(),i(4321,"td",23)(4322,"code",24),e(4323,"boolean"),t()(),i(4324,"td",26)(4325,"em")(4326,"strong"),e(4327,"(opcional)"),t()(),i(4328,"p"),e(4329,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),t()()(),i(4330,"tr",19)(4331,"td",20)(4332,"div",21)(4333,"span",22),e(4334," subtitles"),o(4335,"br"),t()()(),i(4336,"td",23)(4337,"code",108),e(4338,"Array<PoTableSubtitleColumn>"),t()(),i(4339,"td",26)(4340,"em")(4341,"strong"),e(4342,"(opcional)"),t()(),i(4343,"p"),e(4344,"Define um array de objetos para as colunas de legenda. Onde, "),i(4345,"code"),e(4346,"subtitles"),t(),e(4347,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),t(),i(4348,"pre")(4349,"code"),e(4350,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}`),t()(),i(4351,"p"),e(4352,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),t()()(),i(4353,"tr",19)(4354,"td",20)(4355,"div",21)(4356,"span",22),e(4357," tooltip"),o(4358,"br"),t()()(),i(4359,"td",23)(4360,"code",41),e(4361,"string"),t()(),i(4362,"td",26)(4363,"em")(4364,"strong"),e(4365,"(opcional)"),t()(),i(4366,"p"),e(4367,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),i(4368,"em"),e(4369,"mouse"),t(),e(4370," sobre um texto."),t(),i(4371,"blockquote")(4372,"p"),e(4373,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),i(4374,"em"),e(4375,"link"),t(),e(4376,"."),t()(),i(4377,"blockquote")(4378,"p"),e(4379,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),i(4380,"em"),e(4381,"tooltip"),t(),e(4382," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),t()()()(),i(4383,"tr",19)(4384,"td",20)(4385,"div",21)(4386,"span",22),e(4387," type"),o(4388,"br"),t()()(),i(4389,"td",23)(4390,"code",41),e(4391,"string"),t()(),i(4392,"td",26)(4393,"em")(4394,"strong"),e(4395,"(opcional)"),t()(),i(4396,"p"),e(4397,"Tipo da coluna."),t(),i(4398,"p"),e(4399,"Valores v\xE1lidos:"),t(),i(4400,"ul")(4401,"li")(4402,"p")(4403,"code"),e(4404,"boolean"),t(),e(4405,": Exibir\xE1 por padr\xE3o "),i(4406,"code"),e(4407,"Sim"),t(),e(4408," e "),i(4409,"code"),e(4410,"N\xE3o"),t(),e(4411," de acordo com os valores "),i(4412,"em"),e(4413,"booleanos"),t(),e(4414,"."),t(),i(4415,"blockquote")(4416,"p"),e(4417,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),i(4418,"code"),e(4419,"boolean"),t(),e(4420," desta interface."),t()()(),i(4421,"li")(4422,"p")(4423,"code"),e(4424,"currency"),t(),e(4425,": valores monet\xE1rios."),t()(),i(4426,"li")(4427,"p")(4428,"code"),e(4429,"date"),t(),e(4430,": valor de datas."),t(),i(4431,"ul")(4432,"li"),e(4433,"Aceita os tipos "),i(4434,"em"),e(4435,"string"),t(),e(4436," e "),i(4437,"em"),e(4438,"Date"),t(),e(4439,` padr\xE3o do Javascript,
por exemplo: `),i(4440,"code"),e(4441,"'2017-11-28'"),t(),e(4442," ou "),i(4443,"code"),e(4444,"new Date(2017, 10, 28)"),t(),e(4445,"."),t()()(),i(4446,"li")(4447,"p")(4448,"code"),e(4449,"dateTime"),t(),e(4450,": valor de data com hor\xE1rio."),t(),i(4451,"ul")(4452,"li"),e(4453,"Aceita o tipo "),i(4454,"em"),e(4455,"string"),t(),e(4456," no formato "),i(4457,"strong"),e(4458,"ISO-8601"),t(),e(4459," extendido "),i(4460,"strong"),e(4461,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4462,`
e o tipo `),i(4463,"em"),e(4464,"Date"),t(),e(4465," padr\xE3o do Javascript, por exemplo: "),i(4466,"code"),e(4467,"'2017-11-28T00:00:00-02:00'"),t(),e(4468," ou "),i(4469,"code"),e(4470,"new Date(2017, 10, 28)"),t(),e(4471,"."),t()()(),i(4472,"li")(4473,"p")(4474,"code"),e(4475,"detail"),t(),e(4476,": array de objetos para o master-detail."),t(),i(4477,"ul")(4478,"li"),e(4479,"Incompat\xEDvel com "),i(4480,"code"),e(4481,"virtual-scroll"),t(),e(4482,", que requer altura fixa nas linhas."),t()()(),i(4483,"li")(4484,"p")(4485,"code"),e(4486,"icon"),t(),e(4487,": "),i(4488,"em"),e(4489,"array"),t(),e(4490," de "),i(4491,"em"),e(4492,"string"),t(),e(4493," ou objetos para a coluna de \xEDcones."),t()(),i(4494,"li")(4495,"p")(4496,"code"),e(4497,"label"),t(),e(4498,": texto com destaque."),t()(),i(4499,"li")(4500,"p")(4501,"code"),e(4502,"link"),t(),e(4503,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),t()(),i(4504,"li")(4505,"p")(4506,"code"),e(4507,"number"),t(),e(4508,": valores num\xE9ricos."),t()(),i(4509,"li")(4510,"p")(4511,"code"),e(4512,"string"),t(),e(4513,": textos."),t()(),i(4514,"li")(4515,"p")(4516,"code"),e(4517,"subtitle"),t(),e(4518,": array de objetos para a coluna de legenda."),t()(),i(4519,"li")(4520,"p")(4521,"code"),e(4522,"time"),t(),e(4523,": valor de hor\xE1rio."),t(),i(4524,"ul")(4525,"li"),e(4526,"Aceita o tipo "),i(4527,"em"),e(4528,"string"),t(),e(4529," nos formatos "),i(4530,"strong"),e(4531,"'HH:mm:ss'"),t(),e(4532," ou "),i(4533,"strong"),e(4534,"'HH:mm:ss.ffffff'"),t(),e(4535,", por exemplo: "),i(4536,"code"),e(4537,"'23:12:45'"),t(),e(4538,"."),t()()(),i(4539,"li")(4540,"p")(4541,"code"),e(4542,"cellTemplate"),t(),e(4543,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4544,"a",109),e(4545,"PoTableCellTemplate"),t(),e(4546,"."),t()(),i(4547,"li")(4548,"p")(4549,"code"),e(4550,"columnTemplate"),t(),e(4551,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4552,"a",110),e(4553,"PoTableColumnTemplate"),t(),e(4554,"."),t()()()()(),i(4555,"tr",19)(4556,"td",20)(4557,"div",21)(4558,"span",22),e(4559," visible"),o(4560,"br"),t()()(),i(4561,"td",23)(4562,"code",24),e(4563,"boolean"),t()(),i(4564,"td",26)(4565,"em")(4566,"strong"),e(4567,"(opcional)"),t()(),i(4568,"p"),e(4569,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(4570,"strong"),e(4571,"gerenciador de colunas"),t(),e(4572,"."),t(),i(4573,"blockquote")(4574,"p"),e(4575,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(4576,"code"),e(4577,"p-max-columns"),t(),e(4578,"."),t()()()(),i(4579,"tr",19)(4580,"td",20)(4581,"div",21)(4582,"span",22),e(4583," width"),o(4584,"br"),t()()(),i(4585,"td",23)(4586,"code",54),e(4587,"number "),t(),i(4588,"code",41),e(4589," string"),t()(),i(4590,"td",26)(4591,"em")(4592,"strong"),e(4593,"(opcional)"),t()(),i(4594,"p"),e(4595,"Caso seja passado o formato "),i(4596,"code"),e(4597,"number"),t(),e(4598,`, ser\xE1 aplicado em pixels.
A largura da coluna pode ser informada em pixels ou porcentagem.`),t(),i(4599,"blockquote")(4600,"p"),e(4601,`Exemplo Pixel: 100.
Exemplo Porcentagem: '100%'.
Apesar de atribuir largura as colunas da grid \xE9 importante ressaltar
que o componente recalcula as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis na grid,
podendo alterar as dimens\xF5es passadas proporcionalmente.`),t()()()()()(),i(4602,"po-accordion-item",111)(4603,"h4",9)(4604,"code"),e(4605,"CustomEditProperties"),t()(),i(4606,"div",10)(4607,"p"),e(4608,"Interface para configura\xE7\xE3o das colunas edit\xE1veis ("),i(4609,"strong"),e(4610,"editProperties"),t(),e(4611,`).
Al\xE9m dessas propriedades, herda as defini\xE7\xF5es da interface
`),i(4612,"a",112),e(4613,"PoDynamicFormField"),t(),e(4614,`,
permitindo definir campos de entrada que ser\xE3o criados dinamicamente.`),t()(),i(4615,"h4",15),e(4616,"Propriedades"),t(),i(4617,"table",16)(4618,"tr",17)(4619,"th",18),e(4620,"Nome"),t(),i(4621,"th",18),e(4622,"Tipo"),t(),i(4623,"th",18),e(4624,"Descri\xE7\xE3o"),t()(),i(4625,"tr",19)(4626,"td",20)(4627,"div",21)(4628,"span",22),e(4629," componentEditable"),o(4630,"br"),t()()(),i(4631,"td",23)(4632,"code",113),e(4633,"'input' "),t(),i(4634,"code",114),e(4635," 'number' "),t(),i(4636,"code",115),e(4637," 'select' "),t(),i(4638,"code",116),e(4639," 'datepicker' "),t(),i(4640,"code",117),e(4641," 'switch' "),t(),i(4642,"code",118),e(4643," 'combo' "),t(),i(4644,"code",119),e(4645," 'multiselect' "),t(),i(4646,"code",120),e(4647," 'decimal' "),t(),i(4648,"code",121),e(4649," 'checkbox' "),t(),i(4650,"code",122),e(4651," 'lookup'"),t()(),i(4652,"td",26)(4653,"em")(4654,"strong"),e(4655,"(opcional)"),t()(),i(4656,"p"),e(4657,"Propriedade para escolher qual componente ser\xE1 exibido para editar."),t(),i(4658,"blockquote")(4659,"p"),e(4660,"O valor padr\xE3o \xE9 "),i(4661,"code"),e(4662,"input"),t(),e(4663,"."),t()()()(),i(4664,"tr",19)(4665,"td",20)(4666,"div",21)(4667,"span",22),e(4668," componentSize"),o(4669,"br"),t()()(),i(4670,"td",23)(4671,"code",123),e(4672,"'small' "),t(),i(4673,"code",124),e(4674," 'medium' "),t(),i(4675,"code",125),e(4676," 'large'"),t()(),i(4677,"td",26)(4678,"em")(4679,"strong"),e(4680,"(opcional)"),t()(),i(4681,"p"),e(4682,"Define o tamanho dos componentes de formul\xE1rio no grid conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4683,"ul")(4684,"li")(4685,"code"),e(4686,"small"),t(),e(4687,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4688,"li")(4689,"code"),e(4690,"medium"),t(),e(4691,": aplica a medida medium de cada componente."),t(),i(4692,"li")(4693,"code"),e(4694,"large"),t(),e(4695,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4696,"code"),e(4697,"po-checkbox"),t(),e(4698," e "),i(4699,"code"),e(4700,"po-radio-group"),t(),e(4701,")."),i(4702,"blockquote")(4703,"p"),e(4704,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4705,"code"),e(4706,"medium"),t(),e(4707,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4708,"a",42),e(4709,"po-theme"),t(),e(4710,"."),t()()()()()(),i(4711,"tr",19)(4712,"td",20)(4713,"div",21)(4714,"span",22),e(4715," controlValueWithLabel"),o(4716,"br"),t()()(),i(4717,"td",23)(4718,"code",24),e(4719,"boolean"),t()(),i(4720,"td",26)(4721,"em")(4722,"strong"),e(4723,"(opcional)"),t()(),i(4724,"p"),e(4725,"Determina se os componentes "),i(4726,"code"),e(4727,"select"),t(),e(4728,", "),i(4729,"code"),e(4730,"combo"),t(),e(4731,", "),i(4732,"code"),e(4733,"multiselect"),t(),e(4734," e "),i(4735,"code"),e(4736,"thf-lookup"),t(),e(4737,`
devem exibir o `),i(4738,"code"),e(4739,"label"),t(),e(4740," ao inv\xE9s de "),i(4741,"code"),e(4742,"value"),t(),e(4743," na grid"),t()()(),i(4744,"tr",19)(4745,"td",20)(4746,"div",21)(4747,"span",22),e(4748," customItems"),o(4749,"br"),t()()(),i(4750,"td",23)(4751,"code",56),e(4752,"Array<any>"),t()(),i(4753,"td",26)(4754,"em")(4755,"strong"),e(4756,"(opcional)"),t()(),i(4757,"p"),e(4758,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t(),i(4759,"blockquote")(4760,"p")(4761,"strong"),e(4762,"Componente compat\xEDvel"),t(),e(4763,": "),i(4764,"code"),e(4765,"thf-lookup"),t()()()()(),i(4766,"tr",19)(4767,"td",20)(4768,"div",21)(4769,"span",22),e(4770," disabled"),o(4771,"br"),t()()(),i(4772,"td",23)(4773,"code",24),e(4774,"boolean "),t(),i(4775,"code",126),e(4776," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4777,"td",26)(4778,"em")(4779,"strong"),e(4780,"(opcional)"),t()(),i(4781,"p"),e(4782,`Desabilita o campo. Pode ser um valor booleano fixo ou uma fun\xE7\xE3o din\xE2mica
que recebe os dados da linha e retorna um booleano`),t()()(),i(4783,"tr",19)(4784,"td",20)(4785,"div",21)(4786,"span",22),e(4787," fieldFormat"),o(4788,"br"),t()()(),i(4789,"td",23)(4790,"code",51),e(4791,"Array<string> "),t(),i(4792,"code",127),e(4793," ((item: any) => string)"),t()(),i(4794,"td",26)(4795,"em")(4796,"strong"),e(4797,"(opcional)"),t()(),i(4798,"p"),e(4799,"Formato de exibi\xE7\xE3o do campo."),t(),i(4800,"p"),e(4801,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(4802,"em"),e(4803,"string"),t(),e(4804," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(4805,"pre")(4806,"code",31),e(4807,`fieldFormat(obj) {
  return \`\${obj.id} (\${obj.name})\`;
}


Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado \` - \` como separador, por exemplo:

\`\`\`typescript
 fieldFormat]="['id','nickname']"`),t()(),i(4808,"blockquote")(4809,"p"),e(4810,"Componente compat\xEDvel: "),i(4811,"code"),e(4812,"thf-lookup"),t(),e(4813,"."),t()()()(),i(4814,"tr",19)(4815,"td",20)(4816,"div",21)(4817,"span",22),e(4818," filterSearchSelect"),o(4819,"br"),t()()(),i(4820,"td",23)(4821,"code",128),e(4822,"Array<ThfLookupFilterSearchSelect>"),t()(),i(4823,"td",26)(4824,"em")(4825,"strong"),e(4826,"(opcional)"),t()(),i(4827,"p"),e(4828,"Propriedade para listar as op\xE7\xF5es de filtro do po-search no modal."),t(),i(4829,"blockquote")(4830,"p"),e(4831,"Componente compat\xEDvel: "),i(4832,"code"),e(4833,"thf-lookup"),t(),e(4834,"."),t()()()(),i(4835,"tr",19)(4836,"td",20)(4837,"div",21)(4838,"span",22),e(4839," keysLabel"),o(4840,"br"),t()()(),i(4841,"td",23)(4842,"code",129),e(4843,"Array<ThfLookupKeysLabel>"),t()(),i(4844,"td",26)(4845,"em")(4846,"strong"),e(4847,"(opcional)"),t()(),i(4848,"p"),e(4849,"Propriedade para exibir at\xE9 3 propriedades por valor no listbox."),t(),i(4850,"blockquote")(4851,"p"),e(4852,"Componente compat\xEDvel: "),i(4853,"code"),e(4854,"thf-lookup"),t(),e(4855,"."),t()()()(),i(4856,"tr",19)(4857,"td",20)(4858,"div",21)(4859,"span",22),e(4860," locale"),o(4861,"br"),t()()(),i(4862,"td",23)(4863,"code",41),e(4864,"string"),t()(),i(4865,"td",26)(4866,"em")(4867,"strong"),e(4868,"(opcional)"),t()(),i(4869,"p"),e(4870,`Define a localidade a ser utilizada no modo de edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(4871,"a",107)(4872,"code"),e(4873,"I18n"),t()()(),i(4874,"p"),e(4875,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(4876,"pre")(4877,"code"),e(4878,`columnWithItems: Array<ThfGridColumn> = [
 {
   property: 'currency',
   type: 'currency',
   editProperties: {
     componentEditable: 'decimal',
     locale: 'en'
   },
},`),t()(),i(4879,"blockquote")(4880,"p"),e(4881,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(4882,"p"),e(4883,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(4884,"p"),e(4885,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(4886,"a",107)(4887,"code"),e(4888,"I18n"),t()()()(),i(4889,"p"),e(4890,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(4891,"pre")(4892,"code"),e(4893,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(4894,"blockquote")(4895,"p"),e(4896,"A propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4897,"p")(4898,"strong"),e(4899,"Componentes compat\xEDveis"),t(),e(4900,": "),i(4901,"code"),e(4902,"decimal"),t()()(),i(4903,"blockquote")(4904,"p"),e(4905,"Caso seja definida em conjunto com a propriedade "),i(4906,"code"),e(4907,"locale"),t(),e(4908," da coluna, o "),i(4909,"code"),e(4910,"editProperties.locale"),t(),e(4911," ter\xE1 prioridade ao habilitar a edi\xE7\xE3o de uma linha e o "),i(4912,"code"),e(4913,"locale"),t(),e(4914," da coluna ser\xE1 utilizado apenas para exibi\xE7\xE3o."),t()()()(),i(4915,"tr",19)(4916,"td",20)(4917,"div",21)(4918,"span",22),e(4919," lookupGridProperties"),o(4920,"br"),t()()(),i(4921,"td",23)(4922,"code",130),e(4923,"ThfLookupGridProperties"),t()(),i(4924,"td",26)(4925,"em")(4926,"strong"),e(4927,"(opcional)"),t()(),i(4928,"p"),e(4929,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(4930,"blockquote")(4931,"p")(4932,"strong"),e(4933,"Componentes compat\xEDveis"),t(),e(4934,": thf-lookup`"),t()()()(),i(4935,"tr",19)(4936,"td",20)(4937,"div",21)(4938,"span",22),e(4939," onBlur"),o(4940,"br"),t()()(),i(4941,"td",23)(4942,"code",27),e(4943,"Function"),t()(),i(4944,"td",26)(4945,"em")(4946,"strong"),e(4947,"(opcional)"),t()(),i(4948,"p"),e(4949,"Evento disparado ao sair do campo."),t(),i(4950,"blockquote")(4951,"p")(4952,"strong"),e(4953,"Componentes compat\xEDveis"),t(),e(4954,": "),i(4955,"code"),e(4956,"po-input"),t(),e(4957,", "),i(4958,"code"),e(4959,"po-number"),t(),e(4960,", "),i(4961,"code"),e(4962,"po-decimal"),t(),e(4963,", "),i(4964,"code"),e(4965,"po-datepicker"),t(),e(4966,", "),i(4967,"code"),e(4968,"po-select"),t(),e(4969,", "),i(4970,"code"),e(4971,"po-combo"),t(),e(4972,", "),i(4973,"code"),e(4974,"po-multiselect"),t(),e(4975,", "),i(4976,"code"),e(4977,"po-checkbox"),t()()()()(),i(4978,"tr",19)(4979,"td",20)(4980,"div",21)(4981,"span",22),e(4982," onChange"),o(4983,"br"),t()()(),i(4984,"td",23)(4985,"code",131),e(4986,"(value: any) => void"),t()(),i(4987,"td",26)(4988,"em")(4989,"strong"),e(4990,"(opcional)"),t()(),i(4991,"p"),e(4992,"Evento disparado ao alterar valor e deixar o campo."),t(),i(4993,"blockquote")(4994,"p")(4995,"strong"),e(4996,"Componentes compat\xEDveis"),t(),e(4997,": "),i(4998,"code"),e(4999,"po-input"),t(),e(5e3,", "),i(5001,"code"),e(5002,"po-number"),t(),e(5003,", "),i(5004,"code"),e(5005,"po-decimal"),t(),e(5006,", "),i(5007,"code"),e(5008,"po-datepicker"),t(),e(5009,", "),i(5010,"code"),e(5011,"po-select"),t(),e(5012,", "),i(5013,"code"),e(5014,"po-switch"),t(),e(5015,", "),i(5016,"code"),e(5017,"po-combo"),t(),e(5018,", "),i(5019,"code"),e(5020,"po-multiselect"),t(),e(5021,", "),i(5022,"code"),e(5023,"po-checkbox"),t(),e(5024,", "),i(5025,"code"),e(5026,"thf-lookup"),t()()()()(),i(5027,"tr",19)(5028,"td",20)(5029,"div",21)(5030,"span",22),e(5031," onChangeModel"),o(5032,"br"),t()()(),i(5033,"td",23)(5034,"code",132),e(5035,"(model: any) => void"),t()(),i(5036,"td",26)(5037,"em")(5038,"strong"),e(5039,"(opcional)"),t()(),i(5040,"p"),e(5041,"Evento disparado ao alterar valor do model."),t(),i(5042,"blockquote")(5043,"p")(5044,"strong"),e(5045,"Componentes compat\xEDveis"),t(),e(5046,": "),i(5047,"code"),e(5048,"po-input"),t(),e(5049,", "),i(5050,"code"),e(5051,"po-number"),t(),e(5052,", "),i(5053,"code"),e(5054,"po-decimal"),t(),e(5055,", "),i(5056,"code"),e(5057,"po-select"),t(),e(5058,", "),i(5059,"code"),e(5060,"po-combo"),t(),e(5061,", "),i(5062,"code"),e(5063,"thf-lookup"),t()()()()(),i(5064,"tr",19)(5065,"td",20)(5066,"div",21)(5067,"span",22),e(5068," onEnter"),o(5069,"br"),t()()(),i(5070,"td",23)(5071,"code",27),e(5072,"Function"),t()(),i(5073,"td",26)(5074,"em")(5075,"strong"),e(5076,"(opcional)"),t()(),i(5077,"p"),e(5078,"Evento disparado ao entrar no campo."),t(),i(5079,"blockquote")(5080,"p")(5081,"strong"),e(5082,"Componentes compat\xEDveis"),t(),e(5083,": "),i(5084,"code"),e(5085,"po-input"),t(),e(5086,", "),i(5087,"code"),e(5088,"po-number"),t(),e(5089,", "),i(5090,"code"),e(5091,"po-decimal"),t()()()()(),i(5092,"tr",19)(5093,"td",20)(5094,"div",21)(5095,"span",22),e(5096," onError"),o(5097,"br"),t()()(),i(5098,"td",23)(5099,"code",133),e(5100,"(error: HttpErrorResponse) => void"),t()(),i(5101,"td",26)(5102,"em")(5103,"strong"),e(5104,"(opcional)"),t()(),i(5105,"p"),e(5106,"Callback disparado quando ocorre erro na requisi\xE7\xE3o de busca."),t(),i(5107,"blockquote")(5108,"p")(5109,"strong"),e(5110,"Componente compat\xEDvel"),t(),e(5111,": "),i(5112,"code"),e(5113,"thf-lookup"),t()()()()(),i(5114,"tr",19)(5115,"td",20)(5116,"div",21)(5117,"span",22),e(5118," onFocus"),o(5119,"br"),t()()(),i(5120,"td",23)(5121,"code",27),e(5122,"Function"),t()(),i(5123,"td",26)(5124,"em")(5125,"strong"),e(5126,"(opcional)"),t()(),i(5127,"p"),e(5128,"Callback disparado quando o campo recebe foco."),t(),i(5129,"blockquote")(5130,"p")(5131,"strong"),e(5132,"Componente compat\xEDvel"),t(),e(5133,": "),i(5134,"code"),e(5135,"thf-lookup"),t()()()()(),i(5136,"tr",19)(5137,"td",20)(5138,"div",21)(5139,"span",22),e(5140," onInputChange"),o(5141,"br"),t()()(),i(5142,"td",23)(5143,"code",131),e(5144,"(value: any) => void"),t()(),i(5145,"td",26)(5146,"em")(5147,"strong"),e(5148,"(opcional)"),t()(),i(5149,"p"),e(5150,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no campo de busca do componente. A fun\xE7\xE3o receber\xE1 como argumento o valor modificado."),t(),i(5151,"blockquote")(5152,"p")(5153,"strong"),e(5154,"Componente compat\xEDvel"),t(),e(5155,": "),i(5156,"code"),e(5157,"po-combo"),t()()()()(),i(5158,"tr",19)(5159,"td",20)(5160,"div",21)(5161,"span",22),e(5162," onSelected"),o(5163,"br"),t()()(),i(5164,"td",23)(5165,"code",134),e(5166,"(selection: any "),t(),i(5167,"code",135),e(5168," Array<any>) => void"),t()(),i(5169,"td",26)(5170,"em")(5171,"strong"),e(5172,"(opcional)"),t()(),i(5173,"p"),e(5174,"Callback disparado ao selecionar item(s)."),t(),i(5175,"blockquote")(5176,"p")(5177,"strong"),e(5178,"Componente compat\xEDvel"),t(),e(5179,": "),i(5180,"code"),e(5181,"thf-lookup"),t()()()()(),i(5182,"tr",19)(5183,"td",20)(5184,"div",21)(5185,"span",22),e(5186," readonly"),o(5187,"br"),t()()(),i(5188,"td",23)(5189,"code",24),e(5190,"boolean "),t(),i(5191,"code",126),e(5192," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(5193,"td",26)(5194,"em")(5195,"strong"),e(5196,"(opcional)"),t()(),i(5197,"p"),e(5198,`Indica que o campo ser\xE1 somente leitura. Pode ser um valor booleano fixo
ou uma fun\xE7\xE3o din\xE2mica que recebe os dados da linha e retorna um booleano`),t()()(),i(5199,"tr",19)(5200,"td",20)(5201,"div",21)(5202,"span",22),e(5203," required"),o(5204,"br"),t()()(),i(5205,"td",23)(5206,"code",24),e(5207,"boolean"),t()(),i(5208,"td",26)(5209,"em")(5210,"strong"),e(5211,"(opcional)"),t()(),i(5212,"p"),e(5213,"Define a obrigatoriedade do campo."),t(),i(5214,"blockquote")(5215,"p"),e(5216,"Caso seja definido como "),i(5217,"code"),e(5218,"true"),t(),e(5219,', exibe a label "(Obrigat\xF3rio)" na coluna.'),t()()()(),i(5220,"tr",19)(5221,"td",20)(5222,"div",21)(5223,"span",22),e(5224," size"),o(5225,"br"),t()()(),i(5226,"td",23)(5227,"code",136),e(5228,"'sm' "),t(),i(5229,"code",137),e(5230," 'md' "),t(),i(5231,"code",138),e(5232," 'lg' "),t(),i(5233,"code",139),e(5234," 'xl' "),t(),i(5235,"code",140),e(5236," 'auto'"),t()(),i(5237,"td",26)(5238,"em")(5239,"strong"),e(5240,"(opcional)"),t()(),i(5241,"p"),e(5242,"Propriedade para definir o tamanho do modal."),t(),i(5243,"blockquote")(5244,"p"),e(5245,"Componente compat\xEDvel: "),i(5246,"code"),e(5247,"thf-lookup"),t(),e(5248,"."),t()()()()()(),i(5249,"po-accordion-item",141)(5250,"h4",9)(5251,"code"),e(5252,"ThfGridDeleteService"),t()(),i(5253,"div",10)(5254,"p"),e(5255,"Interface para excluir algum item via servi\xE7o."),t()(),i(5256,"table",65)(5257,"tr",19)(5258,"th",66)(5259,"div",21)(5260,"h4")(5261,"span",22),e(5262," deleteItem "),t()()()()(),i(5263,"tr",26)(5264,"td",26)(5265,"p"),e(5266,`M\xE9todo que ser\xE1 disparado ao excluir algum item, deve-se retornar
um `),i(5267,"em"),e(5268,"Observable"),t(),e(5269,"."),t()()()(),i(5270,"h5")(5271,"b"),e(5272,"Par\xE2metros"),t()(),i(5273,"table",16)(5274,"tr",17)(5275,"th",18),e(5276,"Nome"),t(),i(5277,"th",18),e(5278,"Tipo"),t(),i(5279,"th",18),e(5280,"Descri\xE7\xE3o"),t()(),i(5281,"tr",19)(5282,"td",20),e(5283," selectedRow"),t(),i(5284,"td",23)(5285,"code",67),e(5286," any "),t()(),i(5287,"td",26)(5288,"p"),e(5289,"Par\xE2metro com o valor do atual item selecionado."),t()()(),i(5290,"tr",19)(5291,"td",20),e(5292," filterParams"),t(),i(5293,"td",23)(5294,"code",67),e(5295," any "),t()(),i(5296,"td",26)(5297,"p"),e(5298,"Valor informado atrav\xE9s da propriedade "),i(5299,"code"),e(5300,"t-param-delete-api"),t(),e(5301,"."),t()()(),i(5302,"tr",19)(5303,"td",20),e(5304," keyValue"),t(),i(5305,"td",23)(5306,"code",67),e(5307," string "),t()(),i(5308,"td",26)(5309,"p"),e(5310,"Valor informado caso tenha alguma coluna com a propriedade "),i(5311,"code"),e(5312,"key"),t(),e(5313," ativa ou o valor da propriedade "),i(5314,"code"),e(5315,"id"),t(),e(5316,"."),t()()()(),o(5317,"br"),i(5318,"table",65)(5319,"tr",19)(5320,"th",66)(5321,"div",21)(5322,"h4")(5323,"span",22),e(5324," deleteBatchItems "),t()()()()(),i(5325,"tr",26)(5326,"td",26)(5327,"p"),e(5328,"M\xE9todo que ser\xE1 disparado ao excluir itens quando o THF-GRID estiver com a propriedade "),i(5329,"code"),e(5330,"t-allow-batch-delete"),t(),e(5331,` habilitada, deve-se retornar
um `),i(5332,"em"),e(5333,"Observable"),t(),e(5334,"."),t(),i(5335,"p"),e(5336,"Ao habilitar a propriedade "),i(5337,"code"),e(5338,"t-allow-batch-delete"),t(),e(5339,", este m\xE9todo sempre ser\xE1 chamado, exluindo um ou v\xE1rios itens."),t()()()(),i(5340,"h5")(5341,"b"),e(5342,"Par\xE2metros"),t()(),i(5343,"table",16)(5344,"tr",17)(5345,"th",18),e(5346,"Nome"),t(),i(5347,"th",18),e(5348,"Tipo"),t(),i(5349,"th",18),e(5350,"Descri\xE7\xE3o"),t()(),i(5351,"tr",19)(5352,"td",20),e(5353," selectedRows"),t(),i(5354,"td",23)(5355,"code",67),e(5356," any "),t()(),i(5357,"td",26)(5358,"p"),e(5359,"Par\xE2metro com os valores dos itens selecionados."),t()()(),i(5360,"tr",19)(5361,"td",20),e(5362," paramDelete"),t(),i(5363,"td",23)(5364,"code",67),e(5365," any "),t()(),i(5366,"td",26)(5367,"p"),e(5368,"Valor informado atrav\xE9s da propriedade "),i(5369,"code"),e(5370,"t-param-delete-api"),t(),e(5371,"."),t()()(),i(5372,"tr",19)(5373,"td",20),e(5374," keys"),t(),i(5375,"td",23)(5376,"code",67),e(5377," string "),t()(),i(5378,"td",26)(5379,"p"),e(5380,"Valor informado caso tenha alguma coluna com a propriedade "),i(5381,"code"),e(5382,"key"),t(),e(5383," ativa ou o valor da propriedade "),i(5384,"code"),e(5385,"id"),t(),e(5386,"."),t()()()(),o(5387,"br"),t(),i(5388,"po-accordion-item",142)(5389,"h4",9)(5390,"code"),e(5391,"ThfGridEditProperties"),t()(),i(5392,"div",10)(5393,"p"),e(5394,"Interface para configura\xE7\xE3o da edi\xE7\xE3o em linha ("),i(5395,"strong"),e(5396,"t-edit-properties"),t(),e(5397,")."),t()(),i(5398,"h4",15),e(5399,"Propriedades"),t(),i(5400,"table",16)(5401,"tr",17)(5402,"th",18),e(5403,"Nome"),t(),i(5404,"th",18),e(5405,"Tipo"),t(),i(5406,"th",18),e(5407,"Descri\xE7\xE3o"),t()(),i(5408,"tr",19)(5409,"td",20)(5410,"div",21)(5411,"span",22),e(5412," actionEdit"),o(5413,"br"),t()()(),i(5414,"td",23)(5415,"code",143),e(5416,"(param: any) => FormGroup"),t()(),i(5417,"td",26)(5418,"p"),e(5419,`M\xE9todo executado ao iniciar o modo edi\xE7\xE3o.
\xC9 passado um par\xE2metro com os valores respectivos de cada coluna.
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5420,"code"),e(5421,"property"),t(),e(5422," da coluna desejada."),t(),i(5423,"p"),e(5424,"Exemplo de envio para a API:"),t(),i(5425,"pre")(5426,"code",28),e(5427,`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-columns]="columns"
  [t-edit-properties]="editProperties"
>
</thf-grid>`),t()(),i(5428,"pre")(5429,"code",31),e(5430,`form: FormGroup;
editProperties: ThfGridEditProperties;

ngOnInit() {
  this.editProperties = {
    actionEdit: this.setFormGroup.bind(this),
    validate: this.changeValueForm.bind(this) // PROPRIEDADE OPCIONAL
  };
}

setFormGroup(dataItem) {
  const genreDescription = this.columns1.find(column => column.property === 'genreDescription');
  genreDescription.editProperties.disabled = true;
  genreDescription.editProperties.options = this.appService.getCity(dataItem.genre);
  this.form = new FormGroup({
    id: new FormControl(dataItem.id, [Validators.required]) // ID \xC9 OBRIGAT\xD3RIO,
    city: new FormControl(dataItem.city),
    email: new FormControl(dataItem.email),
    birthdate: new FormControl(dataItem.birthdate),
    genre: new FormControl(dataItem.genre),
    status: new FormControl(dataItem.status),
    genreDescription: new FormControl(dataItem.genreDescription, [Validators.required])
  });
  return this.form;
};`),t()()()(),i(5431,"tr",19)(5432,"td",20)(5433,"div",21)(5434,"span",22),e(5435," validate"),o(5436,"br"),t()()(),i(5437,"td",23)(5438,"code",144),e(5439,"(data: any, columnProperty: string) => FormGroup"),t()(),i(5440,"td",26)(5441,"em")(5442,"strong"),e(5443,"(opcional)"),t()(),i(5444,"p"),e(5445,`M\xE9todo executado ao alterar o valor de algum campo do formul\xE1rio.
O primeiro par\xE2metro s\xE3o os valores respectivos de cada coluna.
O segundo par\xE2metro \xE9 indicando a `),i(5446,"code"),e(5447,"property"),t(),e(5448,` da coluna que teve o valor alterado
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5449,"code"),e(5450,"property"),t(),e(5451," da coluna desejada."),t()()()()(),i(5452,"po-accordion-item",145)(5453,"h4",9)(5454,"code"),e(5455,"ThfFilterByColumn"),t()(),i(5456,"div",10)(5457,"p"),e(5458,"Interface que define as condi\xE7\xF5es utilizadas no filtro por coluna."),t(),i(5459,"p"),e(5460,"Cada filtro pode conter "),i(5461,"strong"),e(5462,"at\xE9 duas condi\xE7\xF5es"),t(),e(5463,", combinadas pela l\xF3gica "),i(5464,"code"),e(5465,"and"),t(),e(5466," ou "),i(5467,"code"),e(5468,"or"),t(),e(5469,"."),t(),i(5470,"p"),e(5471,"Os operadores dispon\xEDveis e o tipo de valor aceito variam conforme o "),i(5472,"code"),e(5473,"type"),t(),e(5474,`
configurado na coluna (string, number, currency, date ou boolean).`),t(),i(5475,"p"),e(5476,"Para a lista completa de operadores permitidos por tipo, consulte as propriedades "),i(5477,"code"),e(5478,"operator1"),t(),e(5479," e "),i(5480,"code"),e(5481,"operator2"),t(),e(5482,"."),t()(),i(5483,"h4",15),e(5484,"Propriedades"),t(),i(5485,"table",16)(5486,"tr",17)(5487,"th",18),e(5488,"Nome"),t(),i(5489,"th",18),e(5490,"Tipo"),t(),i(5491,"th",18),e(5492,"Descri\xE7\xE3o"),t()(),i(5493,"tr",19)(5494,"td",20)(5495,"div",21)(5496,"span",22),e(5497," logic"),o(5498,"br"),t()()(),i(5499,"td",23)(5500,"code",41),e(5501,"string"),t()(),i(5502,"td",26)(5503,"em")(5504,"strong"),e(5505,"(opcional)"),t()(),i(5506,"p"),e(5507,"L\xF3gica entre as duas condi\xE7\xF5es do filtro."),t(),i(5508,"p"),e(5509,"Valores v\xE1lidos: "),i(5510,"code"),e(5511,"and"),t(),e(5512," | "),i(5513,"code"),e(5514,"or"),t(),e(5515,"."),t(),i(5516,"p"),e(5517,"Para filtros do tipo "),i(5518,"code"),e(5519,"boolean"),t(),e(5520,", a l\xF3gica ainda pode ser usada:"),t(),i(5521,"ul")(5522,"li")(5523,"code"),e(5524,"and"),t(),e(5525,": exige que ambos os checkboxes marcados sejam verdadeiros no item"),t(),i(5526,"li")(5527,"code"),e(5528,"or"),t(),e(5529,": aceita qualquer item que corresponda a um dos valores marcados"),t()()()(),i(5530,"tr",19)(5531,"td",20)(5532,"div",21)(5533,"span",22),e(5534," operator1"),o(5535,"br"),t()()(),i(5536,"td",23)(5537,"code",41),e(5538,"string"),t()(),i(5539,"td",26)(5540,"em")(5541,"strong"),e(5542,"(opcional)"),t()(),i(5543,"p"),e(5544,"Operador da primeira condi\xE7\xE3o do filtro."),t(),i(5545,"p"),e(5546,"Operadores dispon\xEDveis, dependendo do tipo da coluna:"),t(),i(5547,"p")(5548,"strong"),e(5549,"Para colunas do tipo "),i(5550,"code"),e(5551,"string"),t(),e(5552,":"),t()(),i(5553,"ul")(5554,"li")(5555,"code"),e(5556,"contains"),t(),e(5557," \u2014 cont\xE9m."),t(),i(5558,"li")(5559,"code"),e(5560,"doesnotcontain"),t(),e(5561," \u2014 n\xE3o cont\xE9m."),t(),i(5562,"li")(5563,"code"),e(5564,"eq"),t(),e(5565," \u2014 igual."),t(),i(5566,"li")(5567,"code"),e(5568,"neq"),t(),e(5569," \u2014 diferente."),t(),i(5570,"li")(5571,"code"),e(5572,"startswith"),t(),e(5573," \u2014 come\xE7a com."),t(),i(5574,"li")(5575,"code"),e(5576,"endswith"),t(),e(5577," \u2014 termina com."),t(),i(5578,"li")(5579,"code"),e(5580,"isnull"),t(),e(5581," \u2014 \xE9 nulo."),t(),i(5582,"li")(5583,"code"),e(5584,"isnotnull"),t(),e(5585," \u2014 n\xE3o \xE9 nulo."),t(),i(5586,"li")(5587,"code"),e(5588,"isempty"),t(),e(5589," \u2014 vazio ("),i(5590,"code"),e(5591,"''"),t(),e(5592,")."),t(),i(5593,"li")(5594,"code"),e(5595,"isnotempty"),t(),e(5596," \u2014 n\xE3o vazio."),t()(),i(5597,"p")(5598,"strong"),e(5599,"Para colunas "),i(5600,"code"),e(5601,"number"),t(),e(5602,", "),i(5603,"code"),e(5604,"currency"),t(),e(5605," e "),i(5606,"code"),e(5607,"date"),t(),e(5608,":"),t()(),i(5609,"ul")(5610,"li")(5611,"code"),e(5612,"eq"),t(),e(5613," \u2014 igual."),t(),i(5614,"li")(5615,"code"),e(5616,"neq"),t(),e(5617," \u2014 diferente."),t(),i(5618,"li")(5619,"code"),e(5620,"gte"),t(),e(5621," \u2014 maior ou igual."),t(),i(5622,"li")(5623,"code"),e(5624,"gt"),t(),e(5625," \u2014 maior que."),t(),i(5626,"li")(5627,"code"),e(5628,"lte"),t(),e(5629," \u2014 menor ou igual."),t(),i(5630,"li")(5631,"code"),e(5632,"lt"),t(),e(5633," \u2014 menor que."),t(),i(5634,"li")(5635,"code"),e(5636,"isnull"),t(),e(5637," \u2014 nulo."),t(),i(5638,"li")(5639,"code"),e(5640,"isnotnull"),t(),e(5641," \u2014 n\xE3o nulo."),t()(),i(5642,"p")(5643,"strong"),e(5644,"Para colunas do tipo "),i(5645,"code"),e(5646,"boolean"),t(),e(5647,", esta propriedade \xE9 ignorada."),t()()()(),i(5648,"tr",19)(5649,"td",20)(5650,"div",21)(5651,"span",22),e(5652," operator2"),o(5653,"br"),t()()(),i(5654,"td",23)(5655,"code",41),e(5656,"string"),t()(),i(5657,"td",26)(5658,"em")(5659,"strong"),e(5660,"(opcional)"),t()(),i(5661,"p"),e(5662,"Operador da segunda condi\xE7\xE3o do filtro."),t(),i(5663,"p"),e(5664,"Funciona exatamente como "),i(5665,"code"),e(5666,"operator1"),t(),e(5667,`, respeitando os operadores v\xE1lidos para o tipo
da coluna.`),t(),i(5668,"p"),e(5669,"Ignorado para filtros do tipo "),i(5670,"code"),e(5671,"boolean"),t(),e(5672,"."),t()()(),i(5673,"tr",19)(5674,"td",20)(5675,"div",21)(5676,"span",22),e(5677," property"),o(5678,"br"),t()()(),i(5679,"td",23)(5680,"code",41),e(5681,"string"),t()(),i(5682,"td",26)(5683,"p"),e(5684,"Nome da propriedade da coluna que ter\xE1 o filtro aplicado."),t()()(),i(5685,"tr",19)(5686,"td",20)(5687,"div",21)(5688,"span",22),e(5689," value1"),o(5690,"br"),t()()(),i(5691,"td",23)(5692,"code",146),e(5693,"any"),t()(),i(5694,"td",26)(5695,"p"),e(5696,"Valor comparado na primeira condi\xE7\xE3o do filtro."),t(),i(5697,"ul")(5698,"li"),e(5699,"Para "),i(5700,"code"),e(5701,"string"),t(),e(5702,", "),i(5703,"code"),e(5704,"number"),t(),e(5705,", "),i(5706,"code"),e(5707,"currency"),t(),e(5708," e "),i(5709,"code"),e(5710,"date"),t(),e(5711,", corresponde ao valor informado no campo."),t(),i(5712,"li"),e(5713,"Para "),i(5714,"code"),e(5715,"boolean"),t(),e(5716,", deve ser "),i(5717,"code"),e(5718,"true"),t(),e(5719," ou "),i(5720,"code"),e(5721,"false"),t(),e(5722,", representando o estado do checkbox."),t()()()(),i(5723,"tr",19)(5724,"td",20)(5725,"div",21)(5726,"span",22),e(5727," value2"),o(5728,"br"),t()()(),i(5729,"td",23)(5730,"code",146),e(5731,"any"),t()(),i(5732,"td",26)(5733,"em")(5734,"strong"),e(5735,"(opcional)"),t()(),i(5736,"p"),e(5737,"Valor comparado na segunda condi\xE7\xE3o do filtro."),t(),i(5738,"ul")(5739,"li"),e(5740,"Para "),i(5741,"code"),e(5742,"string"),t(),e(5743,", "),i(5744,"code"),e(5745,"number"),t(),e(5746,", "),i(5747,"code"),e(5748,"currency"),t(),e(5749," e "),i(5750,"code"),e(5751,"date"),t(),e(5752,", \xE9 o valor informado na segunda entrada."),t(),i(5753,"li"),e(5754,"Para "),i(5755,"code"),e(5756,"boolean"),t(),e(5757,", \xE9 o valor associado ao segundo checkbox ("),i(5758,"code"),e(5759,"true"),t(),e(5760," ou "),i(5761,"code"),e(5762,"false"),t(),e(5763,")."),t()()()()()(),i(5764,"po-accordion-item",147)(5765,"h4",9)(5766,"code"),e(5767,"ThfGridLiterals"),t()(),i(5768,"div",10)(5769,"p"),e(5770,"Interface para customizar literais ("),i(5771,"strong"),e(5772,"t-literals"),t(),e(5773,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(5774,"h4",15),e(5775,"Propriedades"),t(),i(5776,"table",16)(5777,"tr",17)(5778,"th",18),e(5779,"Nome"),t(),i(5780,"th",18),e(5781,"Tipo"),t(),i(5782,"th",18),e(5783,"Descri\xE7\xE3o"),t()(),i(5784,"tr",19)(5785,"td",20)(5786,"div",21)(5787,"span",22),e(5788," advancedSearch"),o(5789,"br"),t()()(),i(5790,"td",23)(5791,"code",41),e(5792,"string"),t()(),i(5793,"td",26)(5794,"em")(5795,"strong"),e(5796,"(opcional)"),t()(),i(5797,"p"),e(5798,"T\xEDtulo do modal Filtros"),t()()(),i(5799,"tr",19)(5800,"td",20)(5801,"div",21)(5802,"span",22),e(5803," and"),o(5804,"br"),t()()(),i(5805,"td",23)(5806,"code",41),e(5807,"string"),t()(),i(5808,"td",26)(5809,"em")(5810,"strong"),e(5811,"(opcional)"),t()(),i(5812,"p"),e(5813,"Op\xE7\xE3o E, filtro por coluna."),t()()(),i(5814,"tr",19)(5815,"td",20)(5816,"div",21)(5817,"span",22),e(5818," averageAggregate"),o(5819,"br"),t()()(),i(5820,"td",23)(5821,"code",41),e(5822,"string"),t()(),i(5823,"td",26)(5824,"em")(5825,"strong"),e(5826,"(opcional)"),t()(),i(5827,"p"),e(5828,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(5829,"strong"),e(5830,"M\xE9dia"),t(),e(5831," (Average)"),t()()(),i(5832,"tr",19)(5833,"td",20)(5834,"div",21)(5835,"span",22),e(5836," bodyDelete"),o(5837,"br"),t()()(),i(5838,"td",23)(5839,"code",41),e(5840,"string"),t()(),i(5841,"td",26)(5842,"em")(5843,"strong"),e(5844,"(opcional)"),t()(),i(5845,"p"),e(5846,"Conte\xFAdo do modal Excluir"),t()()(),i(5847,"tr",19)(5848,"td",20)(5849,"div",21)(5850,"span",22),e(5851," bodyDeleteBatch"),o(5852,"br"),t()()(),i(5853,"td",23)(5854,"code",41),e(5855,"string"),t()(),i(5856,"td",26)(5857,"em")(5858,"strong"),e(5859,"(opcional)"),t()(),i(5860,"p"),e(5861,"Conte\xFAdo do modal Excluir configurado para excluir em lote"),t()()(),i(5862,"tr",19)(5863,"td",20)(5864,"div",21)(5865,"span",22),e(5866," cancel"),o(5867,"br"),t()()(),i(5868,"td",23)(5869,"code",41),e(5870,"string"),t()(),i(5871,"td",26)(5872,"em")(5873,"strong"),e(5874,"(opcional)"),t()(),i(5875,"p"),e(5876,"Label do bot\xE3o Cancelar"),t()()(),i(5877,"tr",19)(5878,"td",20)(5879,"div",21)(5880,"span",22),e(5881," checkFalse"),o(5882,"br"),t()()(),i(5883,"td",23)(5884,"code",41),e(5885,"string"),t()(),i(5886,"td",26)(5887,"em")(5888,"strong"),e(5889,"(opcional)"),t()(),i(5890,"p"),e(5891,"Checkbox n\xE3o, filtro por coluna."),t()()(),i(5892,"tr",19)(5893,"td",20)(5894,"div",21)(5895,"span",22),e(5896," checkTrue"),o(5897,"br"),t()()(),i(5898,"td",23)(5899,"code",41),e(5900,"string"),t()(),i(5901,"td",26)(5902,"em")(5903,"strong"),e(5904,"(opcional)"),t()(),i(5905,"p"),e(5906,"Checkbox sim, filtro por coluna."),t()()(),i(5907,"tr",19)(5908,"td",20)(5909,"div",21)(5910,"span",22),e(5911," columnsManager"),o(5912,"br"),t()()(),i(5913,"td",23)(5914,"code",41),e(5915,"string"),t()(),i(5916,"td",26)(5917,"em")(5918,"strong"),e(5919,"(opcional)"),t()(),i(5920,"p"),e(5921,"T\xEDtulo do page-slide Gerenciar Tabela"),t()()(),i(5922,"tr",19)(5923,"td",20)(5924,"div",21)(5925,"span",22),e(5926," compact"),o(5927,"br"),t()()(),i(5928,"td",23)(5929,"code",41),e(5930,"string"),t()(),i(5931,"td",26)(5932,"em")(5933,"strong"),e(5934,"(opcional)"),t()(),i(5935,"p"),e(5936,"Label do radio de densidade Compacto no Gerenciar Tabela"),t()()(),i(5937,"tr",19)(5938,"td",20)(5939,"div",21)(5940,"span",22),e(5941," confirm"),o(5942,"br"),t()()(),i(5943,"td",23)(5944,"code",41),e(5945,"string"),t()(),i(5946,"td",26)(5947,"em")(5948,"strong"),e(5949,"(opcional)"),t()(),i(5950,"p"),e(5951,"Label do bot\xE3o Confirmar"),t()()(),i(5952,"tr",19)(5953,"td",20)(5954,"div",21)(5955,"span",22),e(5956," contains"),o(5957,"br"),t()()(),i(5958,"td",23)(5959,"code",41),e(5960,"string"),t()(),i(5961,"td",26)(5962,"em")(5963,"strong"),e(5964,"(opcional)"),t()(),i(5965,"p"),e(5966,"Op\xE7\xE3o cont\xE9m, filtro por coluna."),t()()(),i(5967,"tr",19)(5968,"td",20)(5969,"div",21)(5970,"span",22),e(5971," countAggregate"),o(5972,"br"),t()()(),i(5973,"td",23)(5974,"code",41),e(5975,"string"),t()(),i(5976,"td",26)(5977,"em")(5978,"strong"),e(5979,"(opcional)"),t()(),i(5980,"p"),e(5981,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(5982,"strong"),e(5983,"Contagem"),t(),e(5984," (Count)"),t()()(),i(5985,"tr",19)(5986,"td",20)(5987,"div",21)(5988,"span",22),e(5989," default"),o(5990,"br"),t()()(),i(5991,"td",23)(5992,"code",41),e(5993,"string"),t()(),i(5994,"td",26)(5995,"em")(5996,"strong"),e(5997,"(opcional)"),t()(),i(5998,"p"),e(5999,"Label do radio de densidade Espa\xE7oso no Gerenciar Tabela"),t()()(),i(6e3,"tr",19)(6001,"td",20)(6002,"div",21)(6003,"span",22),e(6004," delete"),o(6005,"br"),t()()(),i(6006,"td",23)(6007,"code",41),e(6008,"string"),t()(),i(6009,"td",26)(6010,"em")(6011,"strong"),e(6012,"(opcional)"),t()(),i(6013,"p"),e(6014,"Label do bot\xE3o Excluir"),t()()(),i(6015,"tr",19)(6016,"td",20)(6017,"div",21)(6018,"span",22),e(6019," deleteApiError"),o(6020,"br"),t()()(),i(6021,"td",23)(6022,"code",41),e(6023,"string"),t()(),i(6024,"td",26)(6025,"em")(6026,"strong"),e(6027,"(opcional)"),t()(),i(6028,"p"),e(6029,"Resposta de erro da requisi\xE7\xE3o delete no popup"),t()()(),i(6030,"tr",19)(6031,"td",20)(6032,"div",21)(6033,"span",22),e(6034," deleteItem"),o(6035,"br"),t()()(),i(6036,"td",23)(6037,"code",41),e(6038,"string"),t()(),i(6039,"td",26)(6040,"em")(6041,"strong"),e(6042,"(opcional)"),t()(),i(6043,"p"),e(6044,"T\xEDtulo do modal Excluir"),t()()(),i(6045,"tr",19)(6046,"td",20)(6047,"div",21)(6048,"span",22),e(6049," density"),o(6050,"br"),t()()(),i(6051,"td",23)(6052,"code",41),e(6053,"string"),t()(),i(6054,"td",26)(6055,"em")(6056,"strong"),e(6057,"(opcional)"),t()(),i(6058,"p"),e(6059,'T\xEDtulo da sess\xE3o "Densidade" no Gerenciar Tabela'),t()()(),i(6060,"tr",19)(6061,"td",20)(6062,"div",21)(6063,"span",22),e(6064," doesntContain"),o(6065,"br"),t()()(),i(6066,"td",23)(6067,"code",41),e(6068,"string"),t()(),i(6069,"td",26)(6070,"em")(6071,"strong"),e(6072,"(opcional)"),t()(),i(6073,"p"),e(6074,"Op\xE7\xE3o n\xE3o cont\xE9m, filtro por coluna."),t()()(),i(6075,"tr",19)(6076,"td",20)(6077,"div",21)(6078,"span",22),e(6079," draggable"),o(6080,"br"),t()()(),i(6081,"td",23)(6082,"code",41),e(6083,"string"),t()(),i(6084,"td",26)(6085,"em")(6086,"strong"),e(6087,"(opcional)"),t()(),i(6088,"p"),e(6089,'Label da op\xE7\xE3o "Draggable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6090,"tr",19)(6091,"td",20)(6092,"div",21)(6093,"span",22),e(6094," edit"),o(6095,"br"),t()()(),i(6096,"td",23)(6097,"code",41),e(6098,"string"),t()(),i(6099,"td",26)(6100,"em")(6101,"strong"),e(6102,"(opcional)"),t()(),i(6103,"p"),e(6104,"Label do bot\xE3o Editar"),t()()(),i(6105,"tr",19)(6106,"td",20)(6107,"div",21)(6108,"span",22),e(6109," editRow"),o(6110,"br"),t()()(),i(6111,"td",23)(6112,"code",41),e(6113,"string"),t()(),i(6114,"td",26)(6115,"em")(6116,"strong"),e(6117,"(opcional)"),t()(),i(6118,"p"),e(6119,"T\xEDtulo das a\xE7\xF5es quando Edi\xE7\xE3o em linha."),t()()(),i(6120,"tr",19)(6121,"td",20)(6122,"div",21)(6123,"span",22),e(6124," endsWith"),o(6125,"br"),t()()(),i(6126,"td",23)(6127,"code",41),e(6128,"string"),t()(),i(6129,"td",26)(6130,"em")(6131,"strong"),e(6132,"(opcional)"),t()(),i(6133,"p"),e(6134,"Op\xE7\xE3o Termina com, filtro por coluna."),t()()(),i(6135,"tr",19)(6136,"td",20)(6137,"div",21)(6138,"span",22),e(6139," export"),o(6140,"br"),t()()(),i(6141,"td",23)(6142,"code",41),e(6143,"string"),t()(),i(6144,"td",26)(6145,"em")(6146,"strong"),e(6147,"(opcional)"),t()(),i(6148,"p"),e(6149,"Label do bot\xE3o Exportar"),t()()(),i(6150,"tr",19)(6151,"td",20)(6152,"div",21)(6153,"span",22),e(6154," exportExcel"),o(6155,"br"),t()()(),i(6156,"td",23)(6157,"code",41),e(6158,"string"),t()(),i(6159,"td",26)(6160,"em")(6161,"strong"),e(6162,"(opcional)"),t()(),i(6163,"p"),e(6164,"Label do bot\xE3o Exportar Excel"),t()()(),i(6165,"tr",19)(6166,"td",20)(6167,"div",21)(6168,"span",22),e(6169," exportPDF"),o(6170,"br"),t()()(),i(6171,"td",23)(6172,"code",41),e(6173,"string"),t()(),i(6174,"td",26)(6175,"em")(6176,"strong"),e(6177,"(opcional)"),t()(),i(6178,"p"),e(6179,"Label do bot\xE3o Exportar PDF"),t()()(),i(6180,"tr",19)(6181,"td",20)(6182,"div",21)(6183,"span",22),e(6184," extraCompact"),o(6185,"br"),t()()(),i(6186,"td",23)(6187,"code",41),e(6188,"string"),t()(),i(6189,"td",26)(6190,"em")(6191,"strong"),e(6192,"(opcional)"),t()(),i(6193,"p"),e(6194,"Label do radio de densidade Extra Compacto no Gerenciar Tabela"),t()()(),i(6195,"tr",19)(6196,"td",20)(6197,"div",21)(6198,"span",22),e(6199," filterButton"),o(6200,"br"),t()()(),i(6201,"td",23)(6202,"code",41),e(6203,"string"),t()(),i(6204,"td",26)(6205,"em")(6206,"strong"),e(6207,"(opcional)"),t()(),i(6208,"p"),e(6209,"Bot\xE3o de filtrar por coluna."),t()()(),i(6210,"tr",19)(6211,"td",20)(6212,"div",21)(6213,"span",22),e(6214," filterByColumn"),o(6215,"br"),t()()(),i(6216,"td",23)(6217,"code",41),e(6218,"string"),t()(),i(6219,"td",26)(6220,"em")(6221,"strong"),e(6222,"(opcional)"),t()(),i(6223,"p"),e(6224,"Filtros, filtro por coluna."),t()()(),i(6225,"tr",19)(6226,"td",20)(6227,"div",21)(6228,"span",22),e(6229," filters"),o(6230,"br"),t()()(),i(6231,"td",23)(6232,"code",41),e(6233,"string"),t()(),i(6234,"td",26)(6235,"em")(6236,"strong"),e(6237,"(opcional)"),t()(),i(6238,"p"),e(6239,"Label do bot\xE3o Filtros"),t()()(),i(6240,"tr",19)(6241,"td",20)(6242,"div",21)(6243,"span",22),e(6244," fixed"),o(6245,"br"),t()()(),i(6246,"td",23)(6247,"code",41),e(6248,"string"),t()(),i(6249,"td",26)(6250,"em")(6251,"strong"),e(6252,"(opcional)"),t()(),i(6253,"p"),e(6254,'T\xEDtulo da sess\xE3o "Fixo" no Gerenciar Tabela'),t()()(),i(6255,"tr",19)(6256,"td",20)(6257,"div",21)(6258,"span",22),e(6259," gridRowActionsConfirmAddCancelButton"),o(6260,"br"),t()()(),i(6261,"td",23)(6262,"code",41),e(6263,"string"),t()(),i(6264,"td",26)(6265,"em")(6266,"strong"),e(6267,"(opcional)"),t()(),i(6268,"p"),e(6269,'Label do bot\xE3o "Cancelar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6270,"tr",19)(6271,"td",20)(6272,"div",21)(6273,"span",22),e(6274," gridRowActionsConfirmAddConfirmButton"),o(6275,"br"),t()()(),i(6276,"td",23)(6277,"code",41),e(6278,"string"),t()(),i(6279,"td",26)(6280,"em")(6281,"strong"),e(6282,"(opcional)"),t()(),i(6283,"p"),e(6284,'Label do bot\xE3o "Confirmar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6285,"tr",19)(6286,"td",20)(6287,"div",21)(6288,"span",22),e(6289," gridRowActionsConfirmAddTitle"),o(6290,"br"),t()()(),i(6291,"td",23)(6292,"code",41),e(6293,"string"),t()(),i(6294,"td",26)(6295,"em")(6296,"strong"),e(6297,"(opcional)"),t()(),i(6298,"p"),e(6299,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6300,"tr",19)(6301,"td",20)(6302,"div",21)(6303,"span",22),e(6304," gridRowActionsConfirmEditTitle"),o(6305,"br"),t()()(),i(6306,"td",23)(6307,"code",41),e(6308,"string"),t()(),i(6309,"td",26)(6310,"em")(6311,"strong"),e(6312,"(opcional)"),t()(),i(6313,"p"),e(6314,'T\xEDtulo do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(6315,"tr",19)(6316,"td",20)(6317,"div",21)(6318,"span",22),e(6319," gridRowActionsConfirmRemoveAttention"),o(6320,"br"),t()()(),i(6321,"td",23)(6322,"code",41),e(6323,"string"),t()(),i(6324,"td",26)(6325,"em")(6326,"strong"),e(6327,"(opcional)"),t()(),i(6328,"p"),e(6329,'Texto de "Aten\xE7\xE3o:" do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6330,"tr",19)(6331,"td",20)(6332,"div",21)(6333,"span",22),e(6334," gridRowActionsConfirmRemoveConfirmButton"),o(6335,"br"),t()()(),i(6336,"td",23)(6337,"code",41),e(6338,"string"),t()(),i(6339,"td",26)(6340,"em")(6341,"strong"),e(6342,"(opcional)"),t()(),i(6343,"p"),e(6344,'Label do bot\xE3o "Excluir" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6345,"tr",19)(6346,"td",20)(6347,"div",21)(6348,"span",22),e(6349," gridRowActionsConfirmRemoveDescription"),o(6350,"br"),t()()(),i(6351,"td",23)(6352,"code",41),e(6353,"string"),t()(),i(6354,"td",26)(6355,"em")(6356,"strong"),e(6357,"(opcional)"),t()(),i(6358,"p"),e(6359,'Descri\xE7\xE3o do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6360,"tr",19)(6361,"td",20)(6362,"div",21)(6363,"span",22),e(6364," gridRowActionsConfirmRemoveTitle"),o(6365,"br"),t()()(),i(6366,"td",23)(6367,"code",41),e(6368,"string"),t()(),i(6369,"td",26)(6370,"em")(6371,"strong"),e(6372,"(opcional)"),t()(),i(6373,"p"),e(6374,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(6375,"tr",19)(6376,"td",20)(6377,"div",21)(6378,"span",22),e(6379," gridRowActionsRestoreSuccessful"),o(6380,"br"),t()()(),i(6381,"td",23)(6382,"code",41),e(6383,"string"),t()(),i(6384,"td",26)(6385,"em")(6386,"strong"),e(6387,"(opcional)"),t()(),i(6388,"p"),e(6389,"Texto exibido ao restaurar um item exclu\xEDdo."),t()()(),i(6390,"tr",19)(6391,"td",20)(6392,"div",21)(6393,"span",22),e(6394," groupable"),o(6395,"br"),t()()(),i(6396,"td",23)(6397,"code",41),e(6398,"string"),t()(),i(6399,"td",26)(6400,"em")(6401,"strong"),e(6402,"(opcional)"),t()(),i(6403,"p"),e(6404,'Label da op\xE7\xE3o "Groupable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6405,"tr",19)(6406,"td",20)(6407,"div",21)(6408,"span",22),e(6409," groupableText"),o(6410,"br"),t()()(),i(6411,"td",23)(6412,"code",41),e(6413,"string"),t()(),i(6414,"td",26)(6415,"em")(6416,"strong"),e(6417,"(opcional)"),t()(),i(6418,"p"),e(6419,"Texto do cabe\xE7alho onde se deve soltar as colunas que devem ser agrupadas."),t()()(),i(6420,"tr",19)(6421,"td",20)(6422,"div",21)(6423,"span",22),e(6424," isAfter"),o(6425,"br"),t()()(),i(6426,"td",23)(6427,"code",41),e(6428,"string"),t()(),i(6429,"td",26)(6430,"em")(6431,"strong"),e(6432,"(opcional)"),t()(),i(6433,"p"),e(6434,"Op\xE7\xE3o \xC9 posterior que, filtro por coluna."),t()()(),i(6435,"tr",19)(6436,"td",20)(6437,"div",21)(6438,"span",22),e(6439," isAfterOrEqual"),o(6440,"br"),t()()(),i(6441,"td",23)(6442,"code",41),e(6443,"string"),t()(),i(6444,"td",26)(6445,"em")(6446,"strong"),e(6447,"(opcional)"),t()(),i(6448,"p"),e(6449,"Op\xE7\xE3o \xC9 posterior ou igual a, filtro por coluna."),t()()(),i(6450,"tr",19)(6451,"td",20)(6452,"div",21)(6453,"span",22),e(6454," isBefore"),o(6455,"br"),t()()(),i(6456,"td",23)(6457,"code",41),e(6458,"string"),t()(),i(6459,"td",26)(6460,"em")(6461,"strong"),e(6462,"(opcional)"),t()(),i(6463,"p"),e(6464,"Op\xE7\xE3o \xC9 anterior que, filtro por coluna."),t()()(),i(6465,"tr",19)(6466,"td",20)(6467,"div",21)(6468,"span",22),e(6469," isBeforeOrEqual"),o(6470,"br"),t()()(),i(6471,"td",23)(6472,"code",41),e(6473,"string"),t()(),i(6474,"td",26)(6475,"em")(6476,"strong"),e(6477,"(opcional)"),t()(),i(6478,"p"),e(6479,"Op\xE7\xE3o \xC9 anterior ou igual a, filtro por coluna."),t()()(),i(6480,"tr",19)(6481,"td",20)(6482,"div",21)(6483,"span",22),e(6484," isEmpty"),o(6485,"br"),t()()(),i(6486,"td",23)(6487,"code",41),e(6488,"string"),t()(),i(6489,"td",26)(6490,"em")(6491,"strong"),e(6492,"(opcional)"),t()(),i(6493,"p"),e(6494,"Op\xE7\xE3o \xC9 vazio, filtro por coluna."),t()()(),i(6495,"tr",19)(6496,"td",20)(6497,"div",21)(6498,"span",22),e(6499," isEqual"),o(6500,"br"),t()()(),i(6501,"td",23)(6502,"code",41),e(6503,"string"),t()(),i(6504,"td",26)(6505,"em")(6506,"strong"),e(6507,"(opcional)"),t()(),i(6508,"p"),e(6509,"Op\xE7\xE3o igual a, filtro por coluna."),t()()(),i(6510,"tr",19)(6511,"td",20)(6512,"div",21)(6513,"span",22),e(6514," isGreater"),o(6515,"br"),t()()(),i(6516,"td",23)(6517,"code",41),e(6518,"string"),t()(),i(6519,"td",26)(6520,"em")(6521,"strong"),e(6522,"(opcional)"),t()(),i(6523,"p"),e(6524,"Op\xE7\xE3o \xC9 maior que, filtro por coluna."),t()()(),i(6525,"tr",19)(6526,"td",20)(6527,"div",21)(6528,"span",22),e(6529," isGreaterOrEqual"),o(6530,"br"),t()()(),i(6531,"td",23)(6532,"code",41),e(6533,"string"),t()(),i(6534,"td",26)(6535,"em")(6536,"strong"),e(6537,"(opcional)"),t()(),i(6538,"p"),e(6539,"Op\xE7\xE3o \xC9 maior ou igual a, filtro por coluna."),t()()(),i(6540,"tr",19)(6541,"td",20)(6542,"div",21)(6543,"span",22),e(6544," isLess"),o(6545,"br"),t()()(),i(6546,"td",23)(6547,"code",41),e(6548,"string"),t()(),i(6549,"td",26)(6550,"em")(6551,"strong"),e(6552,"(opcional)"),t()(),i(6553,"p"),e(6554,"Op\xE7\xE3o \xC9 menor que, filtro por coluna."),t()()(),i(6555,"tr",19)(6556,"td",20)(6557,"div",21)(6558,"span",22),e(6559," isLessOrEqual"),o(6560,"br"),t()()(),i(6561,"td",23)(6562,"code",41),e(6563,"string"),t()(),i(6564,"td",26)(6565,"em")(6566,"strong"),e(6567,"(opcional)"),t()(),i(6568,"p"),e(6569,"Op\xE7\xE3o \xC9 menor ou igual que, filtro por coluna."),t()()(),i(6570,"tr",19)(6571,"td",20)(6572,"div",21)(6573,"span",22),e(6574," isNotEmpty"),o(6575,"br"),t()()(),i(6576,"td",23)(6577,"code",41),e(6578,"string"),t()(),i(6579,"td",26)(6580,"em")(6581,"strong"),e(6582,"(opcional)"),t()(),i(6583,"p"),e(6584,"Op\xE7\xE3o N\xE3o \xE9 vazio, filtro por coluna."),t()()(),i(6585,"tr",19)(6586,"td",20)(6587,"div",21)(6588,"span",22),e(6589," isNotEqual"),o(6590,"br"),t()()(),i(6591,"td",23)(6592,"code",41),e(6593,"string"),t()(),i(6594,"td",26)(6595,"em")(6596,"strong"),e(6597,"(opcional)"),t()(),i(6598,"p"),e(6599,"Op\xE7\xE3o n\xE3o igual, filtro por coluna."),t()()(),i(6600,"tr",19)(6601,"td",20)(6602,"div",21)(6603,"span",22),e(6604," isNotNull"),o(6605,"br"),t()()(),i(6606,"td",23)(6607,"code",41),e(6608,"string"),t()(),i(6609,"td",26)(6610,"em")(6611,"strong"),e(6612,"(opcional)"),t()(),i(6613,"p"),e(6614,"Op\xE7\xE3o N\xE3o \xE9 nulo, filtro por coluna."),t()()(),i(6615,"tr",19)(6616,"td",20)(6617,"div",21)(6618,"span",22),e(6619," isNull"),o(6620,"br"),t()()(),i(6621,"td",23)(6622,"code",41),e(6623,"string"),t()(),i(6624,"td",26)(6625,"em")(6626,"strong"),e(6627,"(opcional)"),t()(),i(6628,"p"),e(6629,"Op\xE7\xE3o \xC9 nulo, filtro por coluna."),t()()(),i(6630,"tr",19)(6631,"td",20)(6632,"div",21)(6633,"span",22),e(6634," legendListOptions"),o(6635,"br"),t()()(),i(6636,"td",23)(6637,"code",41),e(6638,"string"),t()(),i(6639,"td",26)(6640,"em")(6641,"strong"),e(6642,"(opcional)"),t()(),i(6643,"p"),e(6644,'T\xEDtulo da sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(6645,"tr",19)(6646,"td",20)(6647,"div",21)(6648,"span",22),e(6649," loadMoreData"),o(6650,"br"),t()()(),i(6651,"td",23)(6652,"code",41),e(6653,"string"),t()(),i(6654,"td",26)(6655,"em")(6656,"strong"),e(6657,"(opcional)"),t()(),i(6658,"p"),e(6659,"Label do bot\xE3o Carregar mais resultados"),t()()(),i(6660,"tr",19)(6661,"td",20)(6662,"div",21)(6663,"span",22),e(6664," loadingData"),o(6665,"br"),t()()(),i(6666,"td",23)(6667,"code",41),e(6668,"string"),t()(),i(6669,"td",26)(6670,"em")(6671,"strong"),e(6672,"(opcional)"),t()(),i(6673,"p"),e(6674,"Texto do modal Carregando..."),t()()(),i(6675,"tr",19)(6676,"td",20)(6677,"div",21)(6678,"span",22),e(6679," manageTable"),o(6680,"br"),t()()(),i(6681,"td",23)(6682,"code",41),e(6683,"string"),t()(),i(6684,"td",26)(6685,"em")(6686,"strong"),e(6687,"(opcional)"),t()(),i(6688,"p"),e(6689,"Label do bot\xE3o Gerenciar Tabela"),t()()(),i(6690,"tr",19)(6691,"td",20)(6692,"div",21)(6693,"span",22),e(6694," maxAggregate"),o(6695,"br"),t()()(),i(6696,"td",23)(6697,"code",41),e(6698,"string"),t()(),i(6699,"td",26)(6700,"em")(6701,"strong"),e(6702,"(opcional)"),t()(),i(6703,"p"),e(6704,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(6705,"strong"),e(6706,"M\xE1ximo"),t(),e(6707," (Max)"),t()()(),i(6708,"tr",19)(6709,"td",20)(6710,"div",21)(6711,"span",22),e(6712," minAggregate"),o(6713,"br"),t()()(),i(6714,"td",23)(6715,"code",41),e(6716,"string"),t()(),i(6717,"td",26)(6718,"em")(6719,"strong"),e(6720,"(opcional)"),t()(),i(6721,"p"),e(6722,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(6723,"strong"),e(6724,"M\xEDnimo"),t(),e(6725," (Min)"),t()()(),i(6726,"tr",19)(6727,"td",20)(6728,"div",21)(6729,"span",22),e(6730," moreActions"),o(6731,"br"),t()()(),i(6732,"td",23)(6733,"code",41),e(6734,"string"),t()(),i(6735,"td",26)(6736,"em")(6737,"strong"),e(6738,"(opcional)"),t()(),i(6739,"p"),e(6740,"Label do bot\xE3o Mais a\xE7\xF5es"),t()()(),i(6741,"tr",19)(6742,"td",20)(6743,"div",21)(6744,"span",22),e(6745," multipleItems"),o(6746,"br"),t()()(),i(6747,"td",23)(6748,"code",41),e(6749,"string"),t()(),i(6750,"td",26)(6751,"em")(6752,"strong"),e(6753,"(opcional)"),t()(),i(6754,"p"),e(6755,"Texto auxiliar ao selecionar muitos itens exibido nas a\xE7\xF5es em lote."),t()()(),i(6756,"tr",19)(6757,"td",20)(6758,"div",21)(6759,"span",22),e(6760," noColumns"),o(6761,"br"),t()()(),i(6762,"td",23)(6763,"code",41),e(6764,"string"),t()(),i(6765,"td",26)(6766,"em")(6767,"strong"),e(6768,"(opcional)"),t()(),i(6769,"p"),e(6770,"Mensagem exibida quando n\xE3o existem colunas definidas."),t()()(),i(6771,"tr",19)(6772,"td",20)(6773,"div",21)(6774,"span",22),e(6775," noData"),o(6776,"br"),t()()(),i(6777,"td",23)(6778,"code",41),e(6779,"string"),t()(),i(6780,"td",26)(6781,"em")(6782,"strong"),e(6783,"(opcional)"),t()(),i(6784,"p"),e(6785,"Mensagem exibida quando n\xE3o existem itens para serem exibidos."),t()()(),i(6786,"tr",19)(6787,"td",20)(6788,"div",21)(6789,"span",22),e(6790," noDataDescriptionRowStateFilterActive"),o(6791,"br"),t()()(),i(6792,"td",23)(6793,"code",41),e(6794,"string"),t()(),i(6795,"td",26)(6796,"em")(6797,"strong"),e(6798,"(opcional)"),t()(),i(6799,"p"),e(6800,"Descri\xE7\xE3o exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(6801,"tr",19)(6802,"td",20)(6803,"div",21)(6804,"span",22),e(6805," noDataDescriptionRowStateFilterRemoved"),o(6806,"br"),t()()(),i(6807,"td",23)(6808,"code",41),e(6809,"string"),t()(),i(6810,"td",26)(6811,"em")(6812,"strong"),e(6813,"(opcional)"),t()(),i(6814,"p"),e(6815,"Descri\xE7\xE3o exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(6816,"tr",19)(6817,"td",20)(6818,"div",21)(6819,"span",22),e(6820," noDataRowStateFilterActive"),o(6821,"br"),t()()(),i(6822,"td",23)(6823,"code",41),e(6824,"string"),t()(),i(6825,"td",26)(6826,"em")(6827,"strong"),e(6828,"(opcional)"),t()(),i(6829,"p"),e(6830,"Mensagem exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(6831,"tr",19)(6832,"td",20)(6833,"div",21)(6834,"span",22),e(6835," noDataRowStateFilterRemoved"),o(6836,"br"),t()()(),i(6837,"td",23)(6838,"code",41),e(6839,"string"),t()(),i(6840,"td",26)(6841,"em")(6842,"strong"),e(6843,"(opcional)"),t()(),i(6844,"p"),e(6845,"Mensagem exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(6846,"tr",19)(6847,"td",20)(6848,"div",21)(6849,"span",22),e(6850," noItem"),o(6851,"br"),t()()(),i(6852,"td",23)(6853,"code",41),e(6854,"string"),t()(),i(6855,"td",26)(6856,"em")(6857,"strong"),e(6858,"(opcional)"),t()(),i(6859,"p"),e(6860,"Mensagem exibida quando nenhum item est\xE1 selecionado."),t()()(),i(6861,"tr",19)(6862,"td",20)(6863,"div",21)(6864,"span",22),e(6865," noneAggregate"),o(6866,"br"),t()()(),i(6867,"td",23)(6868,"code",41),e(6869,"string"),t()(),i(6870,"td",26)(6871,"em")(6872,"strong"),e(6873,"(opcional)"),t()(),i(6874,"p"),e(6875,"Texto quando "),i(6876,"strong"),e(6877,"nenhuma"),t(),e(6878," opera\xE7\xE3o de agrega\xE7\xE3o estiver selecionada (None)"),t()()(),i(6879,"tr",19)(6880,"td",20)(6881,"div",21)(6882,"span",22),e(6883," oneItem"),o(6884,"br"),t()()(),i(6885,"td",23)(6886,"code",41),e(6887,"string"),t()(),i(6888,"td",26)(6889,"em")(6890,"strong"),e(6891,"(opcional)"),t()(),i(6892,"p"),e(6893,"Texto ao selecionar um \xFAnico item exibido nas a\xE7\xF5es em lote."),t()()(),i(6894,"tr",19)(6895,"td",20)(6896,"div",21)(6897,"span",22),e(6898," onlyRequiredFields"),o(6899,"br"),t()()(),i(6900,"td",23)(6901,"code",41),e(6902,"string"),t()(),i(6903,"td",26)(6904,"em")(6905,"strong"),e(6906,"(opcional)"),t()(),i(6907,"p"),e(6908,'Label do toggle "Apenas campos obrigat\xF3rios" na edi\xE7\xE3o flu\xEDda.'),t()()(),i(6909,"tr",19)(6910,"td",20)(6911,"div",21)(6912,"span",22),e(6913," or"),o(6914,"br"),t()()(),i(6915,"td",23)(6916,"code",41),e(6917,"string"),t()(),i(6918,"td",26)(6919,"em")(6920,"strong"),e(6921,"(opcional)"),t()(),i(6922,"p"),e(6923,"Op\xE7\xE3o OU, filtro por coluna."),t()()(),i(6924,"tr",19)(6925,"td",20)(6926,"div",21)(6927,"span",22),e(6928," orderAsc"),o(6929,"br"),t()()(),i(6930,"td",23)(6931,"code",41),e(6932,"string"),t()(),i(6933,"td",26)(6934,"em")(6935,"strong"),e(6936,"(opcional)"),t()(),i(6937,"p"),e(6938,"Ordenar ascendente, filtro por coluna."),t()()(),i(6939,"tr",19)(6940,"td",20)(6941,"div",21)(6942,"span",22),e(6943," orderDesc"),o(6944,"br"),t()()(),i(6945,"td",23)(6946,"code",41),e(6947,"string"),t()(),i(6948,"td",26)(6949,"em")(6950,"strong"),e(6951,"(opcional)"),t()(),i(6952,"p"),e(6953,"Ordenar descendente, filtro por coluna."),t()()(),i(6954,"tr",19)(6955,"td",20)(6956,"div",21)(6957,"span",22),e(6958," otherColumns"),o(6959,"br"),t()()(),i(6960,"td",23)(6961,"code",41),e(6962,"string"),t()(),i(6963,"td",26)(6964,"em")(6965,"strong"),e(6966,"(opcional)"),t()(),i(6967,"p"),e(6968,'T\xEDtulo da sess\xE3o "Outras colunas" no Gerenciar Tabela'),t()()(),i(6969,"tr",19)(6970,"td",20)(6971,"div",21)(6972,"span",22),e(6973," placeholderSearchInput"),o(6974,"br"),t()()(),i(6975,"td",23)(6976,"code",41),e(6977,"string"),t()(),i(6978,"td",26)(6979,"em")(6980,"strong"),e(6981,"(opcional)"),t()(),i(6982,"p"),e(6983,"Placeholder do campo Buscar na tabela"),t()()(),i(6984,"tr",19)(6985,"td",20)(6986,"div",21)(6987,"span",22),e(6988," remove"),o(6989,"br"),t()()(),i(6990,"td",23)(6991,"code",41),e(6992,"string"),t()(),i(6993,"td",26)(6994,"em")(6995,"strong"),e(6996,"(opcional)"),t()(),i(6997,"p"),e(6998,'R\xF3tulo do bot\xE3o "Limpar" exibido no painel de filtro por coluna enquanto o usu\xE1rio preenche os crit\xE9rios do filtro.'),t()()(),i(6999,"tr",19)(7e3,"td",20)(7001,"div",21)(7002,"span",22),e(7003," removeFilter"),o(7004,"br"),t()()(),i(7005,"td",23)(7006,"code",41),e(7007,"string"),t()(),i(7008,"td",26)(7009,"em")(7010,"strong"),e(7011,"(opcional)"),t()(),i(7012,"p"),e(7013,'R\xF3tulo do bot\xE3o "Limpar" exibido no pop-up do filtro por coluna.'),t()()(),i(7014,"tr",19)(7015,"td",20)(7016,"div",21)(7017,"span",22),e(7018," requiredFieldsToasterDisableActionLabel"),o(7019,"br"),t()()(),i(7020,"td",23)(7021,"code",41),e(7022,"string"),t()(),i(7023,"td",26)(7024,"em")(7025,"strong"),e(7026,"(opcional)"),t()(),i(7027,"p"),e(7028,"Label da a\xE7\xE3o exibida no Toaster para desativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(7029,"tr",19)(7030,"td",20)(7031,"div",21)(7032,"span",22),e(7033," requiredFieldsToasterEnableActionLabel"),o(7034,"br"),t()()(),i(7035,"td",23)(7036,"code",41),e(7037,"string"),t()(),i(7038,"td",26)(7039,"em")(7040,"strong"),e(7041,"(opcional)"),t()(),i(7042,"p"),e(7043,"Label da a\xE7\xE3o exibida no Toaster para ativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(7044,"tr",19)(7045,"td",20)(7046,"div",21)(7047,"span",22),e(7048," requiredFieldsToasterMessage"),o(7049,"br"),t()()(),i(7050,"td",23)(7051,"code",41),e(7052,"string"),t()(),i(7053,"td",26)(7054,"em")(7055,"strong"),e(7056,"(opcional)"),t()(),i(7057,"p"),e(7058,"Texto exibido no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(7059,"tr",19)(7060,"td",20)(7061,"div",21)(7062,"span",22),e(7063," requiredFieldsToasterSupportMessage"),o(7064,"br"),t()()(),i(7065,"td",23)(7066,"code",41),e(7067,"string"),t()(),i(7068,"td",26)(7069,"em")(7070,"strong"),e(7071,"(opcional)"),t()(),i(7072,"p"),e(7073,"Mensagem de suporte exibida no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(7074,"tr",19)(7075,"td",20)(7076,"div",21)(7077,"span",22),e(7078," restoreDefault"),o(7079,"br"),t()()(),i(7080,"td",23)(7081,"code",41),e(7082,"string"),t()(),i(7083,"td",26)(7084,"em")(7085,"strong"),e(7086,"(opcional)"),t()(),i(7087,"p"),e(7088,'Label do bot\xE3o "Restaurar padr\xE3o" no Gerenciar Tabela'),t()()(),i(7089,"tr",19)(7090,"td",20)(7091,"div",21)(7092,"span",22),e(7093," resultsByPage"),o(7094,"br"),t()()(),i(7095,"td",23)(7096,"code",41),e(7097,"string"),t()(),i(7098,"td",26)(7099,"em")(7100,"strong"),e(7101,"(opcional)"),t()(),i(7102,"p"),e(7103,'Label "Resultados por p\xE1gina" no Gerenciar Tabela.'),t()()(),i(7104,"tr",19)(7105,"td",20)(7106,"div",21)(7107,"span",22),e(7108," rowStateFilterActive"),o(7109,"br"),t()()(),i(7110,"td",23)(7111,"code",41),e(7112,"string"),t()(),i(7113,"td",26)(7114,"em")(7115,"strong"),e(7116,"(opcional)"),t()(),i(7117,"p"),e(7118,"Label do filtro para mostrar itens ativos"),t()()(),i(7119,"tr",19)(7120,"td",20)(7121,"div",21)(7122,"span",22),e(7123," rowStateFilterActiveLabel"),o(7124,"br"),t()()(),i(7125,"td",23)(7126,"code",41),e(7127,"string"),t()(),i(7128,"td",26)(7129,"em")(7130,"strong"),e(7131,"(opcional)"),t()(),i(7132,"p"),e(7133,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens ativos"),t()()(),i(7134,"tr",19)(7135,"td",20)(7136,"div",21)(7137,"span",22),e(7138," rowStateFilterRemoved"),o(7139,"br"),t()()(),i(7140,"td",23)(7141,"code",41),e(7142,"string"),t()(),i(7143,"td",26)(7144,"em")(7145,"strong"),e(7146,"(opcional)"),t()(),i(7147,"p"),e(7148,"Label do filtro para mostrar itens exclu\xEDdos"),t()()(),i(7149,"tr",19)(7150,"td",20)(7151,"div",21)(7152,"span",22),e(7153," rowStateFilterRemovedLabel"),o(7154,"br"),t()()(),i(7155,"td",23)(7156,"code",41),e(7157,"string"),t()(),i(7158,"td",26)(7159,"em")(7160,"strong"),e(7161,"(opcional)"),t()(),i(7162,"p"),e(7163,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens exclu\xEDdos"),t()()(),i(7164,"tr",19)(7165,"td",20)(7166,"div",21)(7167,"span",22),e(7168," save"),o(7169,"br"),t()()(),i(7170,"td",23)(7171,"code",41),e(7172,"string"),t()(),i(7173,"td",26)(7174,"em")(7175,"strong"),e(7176,"(opcional)"),t()(),i(7177,"p"),e(7178,"Label do bot\xE3o Salvar"),t()()(),i(7179,"tr",19)(7180,"td",20)(7181,"div",21)(7182,"span",22),e(7183," selectedItemsMultipleLabel"),o(7184,"br"),t()()(),i(7185,"td",23)(7186,"code",41),e(7187,"string"),t()(),i(7188,"td",26)(7189,"em")(7190,"strong"),e(7191,"(opcional)"),t()(),i(7192,"p"),e(7193,"Texto exibido ao selecionar m\xFAltiplos itens"),t()()(),i(7194,"tr",19)(7195,"td",20)(7196,"div",21)(7197,"span",22),e(7198," selectedItemsSingleLabel"),o(7199,"br"),t()()(),i(7200,"td",23)(7201,"code",41),e(7202,"string"),t()(),i(7203,"td",26)(7204,"em")(7205,"strong"),e(7206,"(opcional)"),t()(),i(7207,"p"),e(7208,"Texto exibido ao selecionar um \xFAnico item"),t()()(),i(7209,"tr",19)(7210,"td",20)(7211,"div",21)(7212,"span",22),e(7213," showOnlySelectedItemsTooltip"),o(7214,"br"),t()()(),i(7215,"td",23)(7216,"code",41),e(7217,"string"),t()(),i(7218,"td",26)(7219,"em")(7220,"strong"),e(7221,"(opcional)"),t()(),i(7222,"p"),e(7223,"Tooltip exibido ao passar o mouse sobre o switch que filtra itens selecionados"),t()()(),i(7224,"tr",19)(7225,"td",20)(7226,"div",21)(7227,"span",22),e(7228," startsWith"),o(7229,"br"),t()()(),i(7230,"td",23)(7231,"code",41),e(7232,"string"),t()(),i(7233,"td",26)(7234,"em")(7235,"strong"),e(7236,"(opcional)"),t()(),i(7237,"p"),e(7238,"Op\xE7\xE3o Inicia com, filtro por coluna."),t()()(),i(7239,"tr",19)(7240,"td",20)(7241,"div",21)(7242,"span",22),e(7243," sumAggregate"),o(7244,"br"),t()()(),i(7245,"td",23)(7246,"code",41),e(7247,"string"),t()(),i(7248,"td",26)(7249,"em")(7250,"strong"),e(7251,"(opcional)"),t()(),i(7252,"p"),e(7253,"Texto para a opera\xE7\xE3o de agrega\xE7\xE3o de "),i(7254,"strong"),e(7255,"Soma"),t(),e(7256," (Sum)"),t()()(),i(7257,"tr",19)(7258,"td",20)(7259,"div",21)(7260,"span",22),e(7261," warningAbandonEditing"),o(7262,"br"),t()()(),i(7263,"td",23)(7264,"code",41),e(7265,"string"),t()(),i(7266,"td",26)(7267,"em")(7268,"strong"),e(7269,"(opcional)"),t()(),i(7270,"p"),e(7271,'Mensagem do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(7272,"tr",19)(7273,"td",20)(7274,"div",21)(7275,"span",22),e(7276," warningColumnsRequired"),o(7277,"br"),t()()(),i(7278,"td",23)(7279,"code",41),e(7280,"string"),t()(),i(7281,"td",26)(7282,"em")(7283,"strong"),e(7284,"(opcional)"),t()(),i(7285,"p"),e(7286,'Mensagem do modal "Exclus\xE3o dos dados inseridos".'),t()()()()(),i(7287,"po-accordion-item",148)(7288,"h4",9)(7289,"code"),e(7290,"ThfGridOptionPaging"),t()(),i(7291,"div",10)(7292,"p"),e(7293,"Interface para configura\xE7\xE3o das op\xE7\xF5es de pagina\xE7\xE3o ("),i(7294,"strong"),e(7295,"t-options-paging"),t(),e(7296,")."),t()(),i(7297,"h4",15),e(7298,"Propriedades"),t(),i(7299,"table",16)(7300,"tr",17)(7301,"th",18),e(7302,"Nome"),t(),i(7303,"th",18),e(7304,"Tipo"),t(),i(7305,"th",18),e(7306,"Descri\xE7\xE3o"),t()(),i(7307,"tr",19)(7308,"td",20)(7309,"div",21)(7310,"span",22),e(7311," label"),o(7312,"br"),t()()(),i(7313,"td",23)(7314,"code",41),e(7315,"string"),t()(),i(7316,"td",26)(7317,"p"),e(7318,"Label correspondente a quantidade de itens"),t()()(),i(7319,"tr",19)(7320,"td",20)(7321,"div",21)(7322,"span",22),e(7323," value"),o(7324,"br"),t()()(),i(7325,"td",23)(7326,"code",54),e(7327,"number"),t()(),i(7328,"td",26)(7329,"p"),e(7330,"Quantidade de itens por p\xE1gina"),t()()()()(),i(7331,"po-accordion-item",149)(7332,"h4",9)(7333,"code"),e(7334,"ThfGridOptions"),t()(),i(7335,"div",10)(7336,"p"),e(7337,"Interface para as propriedades que permitem personalizar dinamicamente o comportamento do componente."),t()(),i(7338,"h4",15),e(7339,"Propriedades"),t(),i(7340,"table",16)(7341,"tr",17)(7342,"th",18),e(7343,"Nome"),t(),i(7344,"th",18),e(7345,"Tipo"),t(),i(7346,"th",18),e(7347,"Descri\xE7\xE3o"),t()(),i(7348,"tr",19)(7349,"td",20)(7350,"div",21)(7351,"span",22),e(7352," actions"),o(7353,"br"),t()()(),i(7354,"td",23)(7355,"code",29),e(7356,"Array<ThfTableAction>"),t()(),i(7357,"td",26)(7358,"em")(7359,"strong"),e(7360,"(opcional)"),t()(),i(7361,"p"),e(7362,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar no grid atrav\xE9s de bot\xF5es."),t()()(),i(7363,"tr",19)(7364,"td",20)(7365,"div",21)(7366,"span",22),e(7367," columns"),o(7368,"br"),t()()(),i(7369,"td",23)(7370,"code",38),e(7371,"Array<ThfGridColumn>"),t()(),i(7372,"td",26)(7373,"em")(7374,"strong"),e(7375,"(opcional)"),t()(),i(7376,"p"),e(7377,`Lista das colunas usadas no grid e busca avan\xE7ada.
Caso precise alterar uma coluna que j\xE1 exista deve ser passado o atributo `),i(7378,"code"),e(7379,"property"),t(),e(7380," com o mesmo conte\xFAdo do original."),t()()(),i(7381,"tr",19)(7382,"td",20)(7383,"div",21)(7384,"span",22),e(7385," customActions"),o(7386,"br"),t()()(),i(7387,"td",23)(7388,"code",43),e(7389,"Array<PoDropdownAction>"),t()(),i(7390,"td",26)(7391,"em")(7392,"strong"),e(7393,"(opcional)"),t()(),i(7394,"p"),e(7395,"Lista de a\xE7\xF5es customizadas do grid que ser\xE3o incorporadas \xE0s a\xE7\xF5es informadas atrav\xE9s da propriedade "),i(7396,"code"),e(7397,"actions"),t(),e(7398,"."),t(),i(7399,"pre")(7400,"code",31),e(7401,`// Exemplo de uso:
[
 { label: 'Apply Discount', action: this.applyDiscount.bind(this) },
 { label: 'Details', action: this.details.bind(this) }
];`),t()()()()()(),i(7402,"po-accordion-item",150)(7403,"h4",9)(7404,"code"),e(7405,"ThfGridRowActions"),t()(),i(7406,"div",10)(7407,"p"),e(7408,"Interface para configura\xE7\xE3o da edi\xE7\xE3o flu\xEDda ("),i(7409,"strong"),e(7410,"t-grid-row-actions"),t(),e(7411,`).
Essas a\xE7\xF5es permitem manipular o comportamento de edi\xE7\xE3o, inser\xE7\xE3o e remo\xE7\xE3o de dados no grid.`),t()(),i(7412,"h4",15),e(7413,"Propriedades"),t(),i(7414,"table",16)(7415,"tr",17)(7416,"th",18),e(7417,"Nome"),t(),i(7418,"th",18),e(7419,"Tipo"),t(),i(7420,"th",18),e(7421,"Descri\xE7\xE3o"),t()(),i(7422,"tr",19)(7423,"td",20)(7424,"div",21)(7425,"span",22),e(7426," actionEdit"),o(7427,"br"),t()()(),i(7428,"td",23)(7429,"code",151),e(7430,"(param: any, mode: 'edit' "),t(),i(7431,"code",152),e(7432," 'include') => FormGroup "),t(),i(7433,"code",153),e(7434," Observable<FormGroup>"),t()(),i(7435,"td",26)(7436,"p"),e(7437,`Fun\xE7\xE3o respons\xE1vel por iniciar o modo de edi\xE7\xE3o ou inclus\xE3o de uma linha no grid.
O m\xE9todo recebe os dados da linha selecionada ou um objeto vazio no modo de inclus\xE3o.
Deve retornar um `),i(7438,"code"),e(7439,"FormGroup"),t(),e(7440," que ser\xE1 utilizado para controlar os valores das colunas edit\xE1veis."),t(),i(7441,"pre")(7442,"code",31),e(7443,`// Exemplo de uso:

actionEdit: (param, mode) => new FormGroup({
  name: new FormControl(param.name),
  age: new FormControl(param.age)
})`),t()(),i(7444,"p"),e(7445,"ou"),t(),i(7446,"pre")(7447,"code",31),e(7448,`actionEdit: (dataItem, mode) => {
return this.appService
 .listItems('https://po-sample-api.onrender.com/v1/heroes', { name: 'Robert Bruce Banner' })
  .pipe(
     map(items => {
       return new FormGroup({
         name: new FormControl(items.name),
         age: new FormControl(items.age)
       })
     }
   )
 }`),t()()()(),i(7449,"tr",19)(7450,"td",20)(7451,"div",21)(7452,"span",22),e(7453," afterRemove"),o(7454,"br"),t()()(),i(7455,"td",23)(7456,"code",154),e(7457,"(row: any) => void"),t()(),i(7458,"td",26)(7459,"em")(7460,"strong"),e(7461,"(opcional)"),t()(),i(7462,"p"),e(7463,`Fun\xE7\xE3o opcional executada ap\xF3s a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(7464,"tr",19)(7465,"td",20)(7466,"div",21)(7467,"span",22),e(7468," afterSave"),o(7469,"br"),t()()(),i(7470,"td",23)(7471,"code",154),e(7472,"(row: any) => void"),t()(),i(7473,"td",26)(7474,"em")(7475,"strong"),e(7476,"(opcional)"),t()(),i(7477,"p"),e(7478,`Fun\xE7\xE3o opcional executada ap\xF3s o salvamento de uma linha editada.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a conclus\xE3o de uma edi\xE7\xE3o.`),t()()(),i(7479,"tr",19)(7480,"td",20)(7481,"div",21)(7482,"span",22),e(7483," afterUndoRemove"),o(7484,"br"),t()()(),i(7485,"td",23)(7486,"code",154),e(7487,"(row: any) => void"),t()(),i(7488,"td",26)(7489,"em")(7490,"strong"),e(7491,"(opcional)"),t()(),i(7492,"p"),e(7493,`Fun\xE7\xE3o opcional executada ap\xF3s desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s desfazer a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(7494,"tr",19)(7495,"td",20)(7496,"div",21)(7497,"span",22),e(7498," beforeInsert"),o(7499,"br"),t()()(),i(7500,"td",23)(7501,"code",155),e(7502,"(row: any) => boolean "),t(),i(7503,"code",156),e(7504," Observable<boolean>"),t()(),i(7505,"td",26)(7506,"em")(7507,"strong"),e(7508,"(opcional)"),t()(),i(7509,"p"),e(7510,`Fun\xE7\xE3o opcional executada antes de inserir uma nova linha no grid.
Pode ser usada para validar ou modificar os dados antes da inclus\xE3o.`),t()()(),i(7511,"tr",19)(7512,"td",20)(7513,"div",21)(7514,"span",22),e(7515," beforeRemove"),o(7516,"br"),t()()(),i(7517,"td",23)(7518,"code",155),e(7519,"(row: any) => boolean "),t(),i(7520,"code",156),e(7521," Observable<boolean>"),t()(),i(7522,"td",26)(7523,"em")(7524,"strong"),e(7525,"(opcional)"),t()(),i(7526,"p"),e(7527,`Fun\xE7\xE3o opcional executada antes de remover uma linha do grid.
Pode ser usada para validar ou confirmar a remo\xE7\xE3o da linha.`),t()()(),i(7528,"tr",19)(7529,"td",20)(7530,"div",21)(7531,"span",22),e(7532," beforeSave"),o(7533,"br"),t()()(),i(7534,"td",23)(7535,"code",157),e(7536,"(updatedRow: any, originalRow: any) => boolean "),t(),i(7537,"code",156),e(7538," Observable<boolean>"),t()(),i(7539,"td",26)(7540,"em")(7541,"strong"),e(7542,"(opcional)"),t()(),i(7543,"p"),e(7544,`Fun\xE7\xE3o opcional executada antes de salvar as altera\xE7\xF5es de uma linha editada.
Pode ser usada para validar ou modificar os dados antes de confirmar a edi\xE7\xE3o.`),t()()(),i(7545,"tr",19)(7546,"td",20)(7547,"div",21)(7548,"span",22),e(7549," beforeUndoRemove"),o(7550,"br"),t()()(),i(7551,"td",23)(7552,"code",155),e(7553,"(row: any) => boolean "),t(),i(7554,"code",156),e(7555," Observable<boolean>"),t()(),i(7556,"td",26)(7557,"em")(7558,"strong"),e(7559,"(opcional)"),t()(),i(7560,"p"),e(7561,`Fun\xE7\xE3o opcional executada antes de desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para validar ou confirmar o desfazer da remo\xE7\xE3o da linha.`),t()()(),i(7562,"tr",19)(7563,"td",20)(7564,"div",21)(7565,"span",22),e(7566," change"),o(7567,"br"),t()()(),i(7568,"td",23)(7569,"code",158),e(7570,"(updatedRows: Array<any>) => void"),t()(),i(7571,"td",26)(7572,"em")(7573,"strong"),e(7574,"(opcional)"),t()(),i(7575,"p"),e(7576,`Fun\xE7\xE3o opcional que retorna a lista atualizada sempre que ocorre edi\xE7\xE3o, inclus\xE3o ou remo\xE7\xE3o.
Facilita o monitoramento das mudan\xE7as feitas, permitindo que se veja rapidamente o que foi alterado no grid.
Ser\xE1 disparado apenas durante a\xE7\xF5es de edi\xE7\xE3o flu\xEDda, sem compatibilidade com outros eventos.`),t()()(),i(7577,"tr",19)(7578,"td",20)(7579,"div",21)(7580,"span",22),e(7581," hiddenGrid"),o(7582,"br"),t()()(),i(7583,"td",23)(7584,"code",24),e(7585,"boolean"),t()(),i(7586,"td",26)(7587,"em")(7588,"strong"),e(7589,"(opcional)"),t()(),i(7590,"p"),e(7591,"Propriedade opcional utilizada para determinar se a grid deve ser ocultada quando n\xE3o houver registros."),t()()(),i(7592,"tr",19)(7593,"td",20)(7594,"div",21)(7595,"span",22),e(7596," noPermission"),o(7597,"br"),t()()(),i(7598,"td",23)(7599,"code",159),e(7600,"Array<ThfGridEditModeActionType>"),t()(),i(7601,"td",26)(7602,"em")(7603,"strong"),e(7604,"(opcional)"),t()(),i(7605,"p"),e(7606,`Propriedade opcional que permite remover e desabilitar as a\xE7\xF5es no grid.
Os valores permitidos no array s\xE3o definidos pelo enum `),i(7607,"strong"),e(7608,"ThfGridEditModeActionType"),t(),e(7609,":"),t(),i(7610,"pre")(7611,"code",31),e(7612,`// Exemplo de uso:

gridRowActions: ThfGridRowActions = {
 noPermission: [
   ThfGridEditModeActionType.Replace,
   ThfGridEditModeActionType.Add,
   ThfGridEditModeActionType.Remove] // Desabilita edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o
  // outras a\xE7\xF5es...
};`),t()()()(),i(7613,"tr",19)(7614,"td",20)(7615,"div",21)(7616,"span",22),e(7617," title"),o(7618,"br"),t()()(),i(7619,"td",23)(7620,"code",41),e(7621,"string"),t()(),i(7622,"td",26)(7623,"em")(7624,"strong"),e(7625,"(opcional)"),t()(),i(7626,"p"),e(7627,"T\xEDtulo opcional que pode ser usado para exibir um cabe\xE7alho ou descri\xE7\xE3o na interface."),t()()(),i(7628,"tr",19)(7629,"td",20)(7630,"div",21)(7631,"span",22),e(7632," validateField"),o(7633,"br"),t()()(),i(7634,"td",23)(7635,"code",160),e(7636,"(updatedField: any, columnProperty: string) => boolean "),t(),i(7637,"code",156),e(7638," Observable<boolean>"),t()(),i(7639,"td",26)(7640,"em")(7641,"strong"),e(7642,"(opcional)"),t()(),i(7643,"p"),e(7644,`Fun\xE7\xE3o opcional executada quando algum campo \xE9 alterado.
Pode ser usada para validar ou modificar dados baseados no valor alterado.`),t(),i(7645,"pre")(7646,"code",31),e(7647,`// Exemplo de uso:

onValidate(updatedField, property) {

 if(property === 'pais') {
     this.myForm?.controls['capital'].setValue(null); // valor da capital modificado para nulo
     const valuePais = this.myForm.controls[property].value;
     const capital = this.columnWithItems.find(column => column.property === 'capital');
      if (valuePais === 'Brasil') {
         capital.editProperties.disabled = false;
         this.form?.controls['capital'].setValue('Brasilia'); // Modificado o valor do campo "capital" baseado no valor do campo "pais"
      } else if (valuePais === 'Portugal') {
          capital.editProperties.disabled = false;
          this.form?.controls['capital'].setValue('Lisboa');
      } else {
        capital.editProperties.disabled = true;
        this.form?.controls['capital'].setValue('');
     }

   return true;
 }
}`),t()()()()()()()(),w(7648,4),t(),i(7649,"po-tab",161),w(7650,5),i(7651,"po-container",5)(7652,"po-accordion",6)(7653,"po-accordion-item",162)(7654,"h4",9)(7655,"code"),e(7656,"ThfColumnSpacing"),t()(),i(7657,"h4",15),e(7658,"Propriedades"),t(),i(7659,"table",16)(7660,"tr",17)(7661,"th",18),e(7662,"Nome"),t(),i(7663,"th",18),e(7664,"Descri\xE7\xE3o"),t()(),i(7665,"tr",19)(7666,"td",20)(7667,"div",21)(7668,"span",22),e(7669," ExtraSmall"),o(7670,"br"),t()()(),i(7671,"td",26)(7672,"p"),e(7673,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(7674,"tr",19)(7675,"td",20)(7676,"div",21)(7677,"span",22),e(7678," Large"),o(7679,"br"),t()()(),i(7680,"td",26)(7681,"p"),e(7682,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()(),i(7683,"tr",19)(7684,"td",20)(7685,"div",21)(7686,"span",22),e(7687," Medium"),o(7688,"br"),t()()(),i(7689,"td",26)(7690,"p"),e(7691,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(7692,"tr",19)(7693,"td",20)(7694,"div",21)(7695,"span",22),e(7696," Small"),o(7697,"br"),t()()(),i(7698,"td",26)(7699,"p"),e(7700,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()()()(),i(7701,"po-accordion-item",163)(7702,"h4",9)(7703,"code"),e(7704,"ThfGridEditModeActionType"),t()(),i(7705,"h4",15),e(7706,"Propriedades"),t(),i(7707,"table",16)(7708,"tr",17)(7709,"th",18),e(7710,"Nome"),t(),i(7711,"th",18),e(7712,"Descri\xE7\xE3o"),t()(),i(7713,"tr",19)(7714,"td",20)(7715,"div",21)(7716,"span",22),e(7717," Add"),o(7718,"br"),t()()(),i(7719,"td",26)(7720,"p"),e(7721,"A\xE7\xE3o de inclus\xE3o"),t()()(),i(7722,"tr",19)(7723,"td",20)(7724,"div",21)(7725,"span",22),e(7726," Remove"),o(7727,"br"),t()()(),i(7728,"td",26)(7729,"p"),e(7730,"A\xE7\xE3o de remo\xE7\xE3o"),t()()(),i(7731,"tr",19)(7732,"td",20)(7733,"div",21)(7734,"span",22),e(7735," Replace"),o(7736,"br"),t()()(),i(7737,"td",26)(7738,"p"),e(7739,"A\xE7\xE3o de edi\xE7\xE3o"),t()()()()()()(),w(7740,6),t(),i(7741,"po-tab",164),w(7742,7),i(7743,"po-container",5)(7744,"po-accordion",6)(7745,"po-accordion-item",165)(7746,"h4",9)(7747,"code"),e(7748,"ThfGridCellTemplateDirective"),t()(),i(7749,"div",10)(7750,"p"),e(7751,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(7752,"p"),e(7753,"Em seu uso, deve-se apenas adicionar a diretiva "),i(7754,"strong"),e(7755,"t-grid-cell-template"),t(),e(7756," \xE0 tag "),i(7757,"code"),e(7758,"ng-template"),t(),e(7759,"."),t(),i(7760,"p"),e(7761,"Retorno:"),t(),i(7762,"ul")(7763,"li")(7764,"code"),e(7765,"column"),t(),e(7766,": conte\xFAdo da coluna corrente."),t(),i(7767,"li")(7768,"code"),e(7769,"row"),t(),e(7770,": conte\xFAdo da linha corrente"),t()(),i(7771,"p"),e(7772,"Modo de uso:"),t(),i(7773,"pre")(7774,"code"),e(7775,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com"
  >
    <ng-template t-grid-cell-template let-column="column" let-row="row">
     <div *ngIf="column.property === 'status' && row.status === 'CANCELED'">
       <h1 [style.background]="'red'">CANCELADA</h1>
       <span (click)="onClick()"><small>clique aqui</small></span>
     </div>
     <h1 *ngIf="column.property === 'status' && row.status === 'FINISHED'" [style.background]="'green'">FINALIZADA</h1>
     <h1 *ngIf="column.property === 'status' && row.status === 'OPENED'" [style.background]="'orange'">ABERTA</h1>
     <h1 *ngIf="column.property === 'status2'">Conte\xFAdo do status 2</h1>
     <h1 *ngIf="column.property === 'status3'">Conte\xFAdo do status 3</h1>
   </ng-template>
...`),t()(),i(7776,"blockquote")(7777,"p"),e(7778,"No exemplo acima, o usu\xE1rio tem como retorno "),i(7779,"code"),e(7780,"row"),t(),e(7781," e a "),i(7782,"code"),e(7783,"column"),t(),e(7784," corrente, neste caso ele tem total liberdade para manipular os objetos."),t()(),i(7785,"p"),e(7786,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(7787,"pre")(7788,"code"),e(7789,`...
export class AppComponent {

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...`),t()(),i(7790,"blockquote")(7791,"p"),e(7792,"Observa\xE7\xE3o: Sempre adicionar o "),i(7793,"strong"),e(7794,"type"),t(),e(7795," da coluna que deseja manipular com a directiva como "),i(7796,"code"),e(7797,"cellTemplate"),t()()()(),i(7798,"div",11)(7799,"h4",12),e(7800,"Seletor"),t(),i(7801,"pre",13),e(7802,`<[t-grid-cell-template] >
</[t-grid-cell-template]>
`),t()()(),i(7803,"po-accordion-item",166)(7804,"h4",9)(7805,"code"),e(7806,"ThfGridColumnTemplateDirective"),t()(),i(7807,"div",10)(7808,"p"),e(7809,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(7810,"p"),e(7811,"Em seu uso, deve-se utilizar como par\xE2metro de entrada o input "),i(7812,"strong"),e(7813,"[t-property]"),t(),e(7814,`, o qual \xE9 respons\xE1vel por informar ao THF-GRID qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),t(),i(7815,"p"),e(7816,"Retorno:"),t(),i(7817,"ul")(7818,"li"),e(7819,"value: valor referente ao conte\xFAdo da linha corrente."),t()(),i(7820,"p"),e(7821,"Modo de uso:"),t(),i(7822,"pre")(7823,"code",28),e(7824,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template t-grid-column-template [t-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(7825,"blockquote")(7826,"p"),e(7827,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),i(7828,"code"),e(7829,"status"),t(),e(7830," ter\xE3o o conte\xFAdo alterado para "),i(7831,"code"),e(7832,"<h1>${value}</h1>"),t(),e(7833,`,
sendo que `),i(7834,"code"),e(7835,"value"),t(),e(7836," refere-se ao conte\xFAdo da linha."),t()(),i(7837,"pre")(7838,"code",28),e(7839,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template  t-grid-column-template [t-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(7840,"blockquote")(7841,"p"),e(7842,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),t()(),i(7843,"p"),e(7844,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(7845,"pre")(7846,"code",31),e(7847,`...
export class AppComponent {

   targetProperty= 'status';

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...`),t()(),i(7848,"blockquote")(7849,"p"),e(7850,"Observa\xE7\xE3o: Sempre adicionar o "),i(7851,"strong"),e(7852,"type"),t(),e(7853," da coluna que deseja manipular com a directiva como "),i(7854,"code"),e(7855,"columnTemplate"),t()()()(),i(7856,"div",11)(7857,"h4",12),e(7858,"Seletor"),t(),i(7859,"pre",13),e(7860,`<[t-grid-column-template] >
</[t-grid-column-template]>
`),t()()()()(),w(7861,8),t(),i(7862,"po-tab",167)(7863,"po-container",5),w(7864,9),i(7865,"h3",168),e(7866,"Tokens customiz\xE1veis"),t(),i(7867,"p"),e(7868,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(7869,"blockquote")(7870,"p"),e(7871,"Para maiores informa\xE7\xF5es, acesse o guia "),i(7872,"a",169),e(7873,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(7874,"."),t()(),i(7875,"table")(7876,"thead")(7877,"tr")(7878,"th"),e(7879,"Propriedade"),t(),i(7880,"th"),e(7881,"Descri\xE7\xE3o"),t(),i(7882,"th"),e(7883,"Valor Padr\xE3o"),t()()(),i(7884,"tbody")(7885,"tr")(7886,"td")(7887,"strong"),e(7888,"Default Values"),t()(),o(7889,"td")(7890,"td"),t(),i(7891,"tr")(7892,"td")(7893,"code"),e(7894,"--font-family"),t()(),i(7895,"td"),e(7896,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(7897,"td")(7898,"code"),e(7899,"var(--font-family-theme)"),t()()(),i(7900,"tr")(7901,"td")(7902,"code"),e(7903,"--background-color"),t()(),i(7904,"td"),e(7905,"Cor de background"),t(),i(7906,"td")(7907,"code"),e(7908,"var(--color-neutral-light-00)"),t()()(),i(7909,"tr")(7910,"td")(7911,"code"),e(7912,"--color"),t()(),i(7913,"td"),e(7914,"Cor principal da table"),t(),i(7915,"td")(7916,"code"),e(7917,"var(--color-neutral-dark-95)"),t()()(),i(7918,"tr")(7919,"td")(7920,"code"),e(7921,"--background-striped-color"),t()(),i(7922,"td"),e(7923,"Cor do background quando striped"),t(),i(7924,"td")(7925,"code"),e(7926,"var(--color-neutral-light-05)"),t()()(),i(7927,"tr")(7928,"td")(7929,"code"),e(7930,"--color-line"),t()(),i(7931,"td"),e(7932,"Cor das linhas"),t(),i(7933,"td")(7934,"code"),e(7935,"var(--color-neutral-mid-40)"),t()()(),i(7936,"tr")(7937,"td")(7938,"code"),e(7939,"--border-color"),t()(),i(7940,"td"),e(7941,"Cor da borda"),t(),i(7942,"td")(7943,"code"),e(7944,"var(--color-neutral-light-10)"),t()()(),i(7945,"tr")(7946,"td")(7947,"code"),e(7948,"--border-radius"),t()(),i(7949,"td"),e(7950,"Raio da borda"),t(),i(7951,"td")(7952,"code"),e(7953,"var(--border-radius-lg)"),t()()(),i(7954,"tr")(7955,"td")(7956,"code"),e(7957,"--border-width"),t()(),i(7958,"td"),e(7959,"Largura da borda"),t(),i(7960,"td")(7961,"code"),e(7962,"var(--border-width-sm)"),t()()(),i(7963,"tr")(7964,"td")(7965,"code"),e(7966,"--background-color-edited"),t()(),i(7967,"td"),e(7968,"Cor de background da linha editada"),t(),i(7969,"td")(7970,"code"),e(7971,"var(--color-feedback-warning-lightest)"),t()()(),i(7972,"tr")(7973,"td")(7974,"code"),e(7975,"--border-color-edited"),t()(),i(7976,"td"),e(7977,"Cor da borda da linha editada"),t(),i(7978,"td")(7979,"code"),e(7980,"var(--color-feedback-warning-base)"),t()()(),i(7981,"tr")(7982,"td")(7983,"code"),e(7984,"--background-color-included"),t()(),i(7985,"td"),e(7986,"Cor de background da linha inclu\xEDda"),t(),i(7987,"td")(7988,"code"),e(7989,"var(--color-feedback-warning-lightest)"),t()()(),i(7990,"tr")(7991,"td")(7992,"code"),e(7993,"--border-color-included"),t()(),i(7994,"td"),e(7995,"Cor da borda da linha inclu\xEDda"),t(),i(7996,"td")(7997,"code"),e(7998,"var(--color-feedback-warning-base)"),t()()(),i(7999,"tr")(8e3,"td")(8001,"code"),e(8002,"--background-color-removed"),t()(),i(8003,"td"),e(8004,"Cor de background da linha removida"),t(),i(8005,"td"),e(8006,"-"),t()(),i(8007,"tr")(8008,"td")(8009,"strong"),e(8010,"Hover"),t()(),o(8011,"td")(8012,"td"),t(),i(8013,"tr")(8014,"td")(8015,"code"),e(8016,"--color-hover"),t()(),i(8017,"td"),e(8018,"Cor principal no estado hover"),t(),i(8019,"td")(8020,"code"),e(8021,"var(--color-action-hover)"),t()()(),i(8022,"tr")(8023,"td")(8024,"code"),e(8025,"--background-color-hover"),t()(),i(8026,"td"),e(8027,"Cor de background no estado hover"),t(),i(8028,"td")(8029,"code"),e(8030,"var(--color-brand-01-lighter)"),t()()(),i(8031,"tr")(8032,"td")(8033,"strong"),e(8034,"Focused"),t()(),o(8035,"td")(8036,"td"),t(),i(8037,"tr")(8038,"td")(8039,"code"),e(8040,"--outline-color-focused"),t()(),i(8041,"td"),e(8042,"Cor do outline do estado de focus"),t(),i(8043,"td")(8044,"code"),e(8045,"var(--color-action-focus)"),t()()(),i(8046,"tr")(8047,"td")(8048,"strong"),e(8049,"Disabled"),t()(),o(8050,"td")(8051,"td"),t(),i(8052,"tr")(8053,"td")(8054,"code"),e(8055,"--color-disabled"),t()(),i(8056,"td"),e(8057,"Cor principal no estado disabled"),t(),i(8058,"td")(8059,"code"),e(8060,"var(--color-neutral-mid-40)"),t()()(),i(8061,"tr")(8062,"td")(8063,"strong"),e(8064,"Headline"),t()(),o(8065,"td")(8066,"td"),t(),i(8067,"tr")(8068,"td")(8069,"code"),e(8070,"--background-color-headline"),t()(),i(8071,"td"),e(8072,"Cor do cabe\xE7alho"),t(),i(8073,"td")(8074,"code"),e(8075,"var(--color-neutral-light-10)"),t()()(),i(8076,"tr")(8077,"td")(8078,"code"),e(8079,"--font-weight-headline"),t()(),i(8080,"td"),e(8081,"Peso da fonte do cabe\xE7alho"),t(),i(8082,"td")(8083,"code"),e(8084,"var(--font-weight-bold)"),t()()(),i(8085,"tr")(8086,"td")(8087,"strong"),e(8088,"Selected"),t()(),o(8089,"td")(8090,"td"),t(),i(8091,"tr")(8092,"td")(8093,"code"),e(8094,"--background-color-selected"),t()(),i(8095,"td"),e(8096,"Cor de background no estado de selecionado"),t(),i(8097,"td")(8098,"code"),e(8099,"var(--color-brand-01-lightest)"),t()()(),i(8100,"tr")(8101,"td")(8102,"code"),e(8103,"--color-actived"),t()(),i(8104,"td"),e(8105,"Cor do texto no estado de selecionado"),t(),i(8106,"td")(8107,"code"),e(8108,"var(--color-neutral-dark-90)"),t()()(),i(8109,"tr")(8110,"td")(8111,"strong"),e(8112,"Pressed"),t()(),o(8113,"td")(8114,"td"),t(),i(8115,"tr")(8116,"td")(8117,"code"),e(8118,"--background-color-actived"),t()(),i(8119,"td"),e(8120,"Cor de background da a\xE7\xE3o quando pressionada"),t(),i(8121,"td")(8122,"code"),e(8123,"var(--color-brand-01-light)"),t()()(),i(8124,"tr"),o(8125,"td")(8126,"td")(8127,"td"),t(),i(8128,"tr")(8129,"td")(8130,"strong"),e(8131,"Toolbar"),t()(),o(8132,"td")(8133,"td"),t(),i(8134,"tr")(8135,"td")(8136,"code"),e(8137,"--background-color-toolbar"),t()(),i(8138,"td"),e(8139,"Cor de background da toolbar"),t(),i(8140,"td")(8141,"code"),e(8142,"var(--border-color)"),t()()(),i(8143,"tr")(8144,"td")(8145,"code"),e(8146,"--border-color-toolbar"),t()(),i(8147,"td"),e(8148,"Cor da borda da toolbar"),t(),i(8149,"td")(8150,"code"),e(8151,"var(--border-width-sm)"),t()()(),i(8152,"tr"),o(8153,"td")(8154,"td")(8155,"td"),t(),i(8156,"tr")(8157,"td")(8158,"strong"),e(8159,"Toolbar Title"),t()(),o(8160,"td")(8161,"td"),t(),i(8162,"tr")(8163,"td")(8164,"code"),e(8165,"--font-family-toolbar-title"),t()(),i(8166,"td"),e(8167,"Fam\xEDlia tipogr\xE1fica do Titulo da toolbar da Grid"),t(),i(8168,"td")(8169,"code"),e(8170,"var(--font-family)"),t()()(),i(8171,"tr")(8172,"td")(8173,"code"),e(8174,"--font-size-toolbar-title"),t()(),i(8175,"td"),e(8176,"Tamanho da fonte do Titulo da toolbar da Grid"),t(),i(8177,"td")(8178,"code"),e(8179,"var(--font-size-md)"),t()()(),i(8180,"tr")(8181,"td")(8182,"code"),e(8183,"--font-weight-toolbar-title"),t()(),i(8184,"td"),e(8185,"Peso da fonte do Titulo da toolbar da Grid"),t(),i(8186,"td")(8187,"code"),e(8188,"var(--font-weight-bold)"),t()()(),i(8189,"tr")(8190,"td")(8191,"code"),e(8192,"--letter-spacing-toolbar-title"),t()(),i(8193,"td"),e(8194,"Espa\xE7amento entre letras do Titulo da toolbar da Grid"),t(),i(8195,"td"),e(8196,"0.017rem"),t()(),i(8197,"tr"),o(8198,"td")(8199,"td")(8200,"td"),t(),i(8201,"tr")(8202,"td")(8203,"strong"),e(8204,"Aggregates"),t()(),o(8205,"td")(8206,"td"),t(),i(8207,"tr")(8208,"td")(8209,"code"),e(8210,"--border-color-aggregates"),t()(),i(8211,"td"),e(8212,"Cor da borda do aggregates"),t(),i(8213,"td")(8214,"code"),e(8215,"var(--border-color)"),t()()(),i(8216,"tr")(8217,"td")(8218,"code"),e(8219,"--border-width-aggregates"),t()(),i(8220,"td"),e(8221,"Largura da borda do aggregates"),t(),i(8222,"td")(8223,"code"),e(8224,"var(--border-width-sm)"),t()()(),i(8225,"tr"),o(8226,"td")(8227,"td")(8228,"td"),t(),i(8229,"tr")(8230,"td")(8231,"strong"),e(8232,"Empty State - Body"),t()(),o(8233,"td")(8234,"td"),t(),i(8235,"tr")(8236,"td")(8237,"code"),e(8238,"--font-family-empty-state-body-subtitle"),t()(),i(8239,"td"),e(8240,"Fam\xEDlia tipogr\xE1fica do subt\xEDtulo do estado vazio"),t(),i(8241,"td")(8242,"code"),e(8243,"var(--font-family)"),t()()(),i(8244,"tr")(8245,"td")(8246,"code"),e(8247,"--font-size-empty-state-body-subtitle"),t()(),i(8248,"td"),e(8249,"Tamanho da fonte do subt\xEDtulo do estado vazio"),t(),i(8250,"td")(8251,"code"),e(8252,"var(--font-size-md)"),t()()(),i(8253,"tr")(8254,"td")(8255,"code"),e(8256,"--font-weight-empty-state-body-subtitle"),t()(),i(8257,"td"),e(8258,"Peso da fonte do subt\xEDtulo do estado vazio"),t(),i(8259,"td")(8260,"code"),e(8261,"var(--font-weight-bold)"),t()()(),i(8262,"tr")(8263,"td")(8264,"code"),e(8265,"--font-family-empty-state-body-message"),t()(),i(8266,"td"),e(8267,"Fam\xEDlia tipogr\xE1fica da mensagem do estado vazio"),t(),i(8268,"td")(8269,"code"),e(8270,"var(--font-family)"),t()()(),i(8271,"tr")(8272,"td")(8273,"code"),e(8274,"--font-size-empty-state-body-message"),t()(),i(8275,"td"),e(8276,"Tamanho da fonte da mensagem do estado vazio"),t(),i(8277,"td")(8278,"code"),e(8279,"var(--font-size-default)"),t()()(),i(8280,"tr")(8281,"td")(8282,"code"),e(8283,"--font-weight-empty-state-body-message"),t()(),i(8284,"td"),e(8285,"Peso da fonte da mensagem do estado vazio"),t(),i(8286,"td")(8287,"code"),e(8288,"var(--font-weight-normal)"),t()()()()()(),w(8289,10),t(),i(8290,"po-tab",170),w(8291,11),t()()())},dependencies:[z,$,v,_e,ie,N],encapsulation:2})}}return d})();var Oi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Gi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Dt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let y=E.querySelector(".po-tab-button-label");y&&y?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(Y))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup"]],viewQuery:function(r,n){if(r&1&&(D(N,5),D(z,5)),r&2){let l;A(l=_())&&(n.tabs=l.first),A(l=_())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Gi,decls:2636,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupColumn>"],[1,"language-html"],[1,"language-typescript"],["p-type","success","p-value","since 19.8.0"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","'equal'"],["pan","",1,"docs-api-property-type","'include'"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupFilterSearchSelect"],["p-label","ThfLookupFilter"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","number"],["p-label","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupKeysLabel"],["p-label","ThfLookupLiterals"],["p-label","ThfLookupResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(ee(Oi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),w(4),t(),i(5,"po-tab",4),w(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`Componente utilizado para abrir um modal de busca com um grid que lista dados de um servi\xE7o.
Neste modal \xE9 poss\xEDvel buscar e selecionar um ou mais registros que ser\xE3o enviados para o campo.
O `),i(19,"code"),e(20,"thf-lookup"),t(),e(21," permite que o usu\xE1rio digite um valor e pressione a tecla TAB para buscar um registro."),t(),i(22,"p"),e(23,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(24,"code"),e(25,"THF-Lookup"),t(),e(26,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(27,"code"),e(28,"import { ThfLookupComponent } from '@totvs/thf-components';"),t()()(),i(29,"div",11)(30,"h4",12),e(31,"Seletor"),t(),i(32,"pre",13),e(33,`<thf-lookup
  t-additional-help="EventEmitter"
  t-additional-help-tooltip="string"
  t-append-in-body="boolean"
  t-auto-focus="boolean"
  t-auto-height="boolean"
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-clean="boolean"
  t-columns="Array<ThfLookupColumn>"
  t-size="string"
  t-custom-items="Array<any>"
  t-disabled="boolean"
  t-error-limit="boolean"
  t-field-error-message="string"
  t-field-format="Array<string> | ((item: any) => string)"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupFilterSearchSelect>"
  t-filter-service="ThfLookupFilter | string"
  t-grid-properties="ThfLookupGridProperties"
  t-help="string"
  (t-focus)="EventEmitter"
  t-key-last-search="string"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupKeysLabel>"
  t-label="string"
  t-label-text-wrap="boolean"
  t-literals="ThfLookupLiterals"
  t-loading="boolean"
  t-multiple="boolean"
  t-no-autocomplete="boolean"
  (t-error)="EventEmitter"
  t-optional="boolean"
  t-placeholder="string"
  t-helper="PoHelperOptions"
  t-required="boolean"
  t-search-on-enter="'equal' | 'include'"
  (t-selected)="EventEmitter"
  t-show-required="boolean"
  t-modal-size="string" >
</thf-lookup>
`),t()()(),i(34,"po-accordion-item",14)(35,"h4",15),e(36,"Propriedades"),t(),i(37,"table",16)(38,"tr",17)(39,"th",18),e(40,"Nome"),t(),i(41,"th",18),e(42,"Tipo"),t(),i(43,"th",18),e(44,"Padr\xE3o"),t(),i(45,"th",18),e(46,"Descri\xE7\xE3o"),t()(),i(47,"tr",19)(48,"td",20)(49,"div",21)(50,"span",22),e(51,"t-additional-help"),o(52,"br"),t()(),i(53,"div",23),e(54,"Deprecated"),t()(),i(55,"td",24)(56,"code",25),e(57,"EventEmitter"),t()(),i(58,"td",26),e(59,"-"),t(),i(60,"td",27)(61,"em")(62,"strong"),e(63,"(opcional)"),t()(),i(64,"p"),e(65,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(66,"blockquote")(67,"p"),e(68,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(69,"tr",19)(70,"td",20)(71,"div",21)(72,"span",22),e(73,"t-additional-help-tooltip"),o(74,"br"),t()(),i(75,"div",23),e(76,"Deprecated"),t()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"em")(84,"strong"),e(85,"(opcional)"),t()(),i(86,"p"),e(87,"Exibe um \xEDcone de ajuda adicional, om o texto desta propriedade sendo passado para o popover do componente "),i(88,"code"),e(89,"po-helper"),t(),e(90,`.
`),i(91,"strong"),e(92,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(93,"blockquote")(94,"p"),e(95,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(96,"blockquote")(97,"p"),e(98,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(99,"tr",19)(100,"td",20)(101,"div",21)(102,"span",22),e(103," t-append-in-body"),o(104,"br"),t()()(),i(105,"td",24)(106,"code",29),e(107,"boolean"),t()(),i(108,"td",26)(109,"p")(110,"code"),e(111,"false"),t()()(),i(112,"td",27)(113,"em")(114,"strong"),e(115,"(opcional)"),t()(),i(116,"p"),e(117,"Define que o "),i(118,"code"),e(119,"listbox"),t(),e(120," e/ou popover ("),i(121,"code"),e(122,"t-helper"),t(),e(123," e/ou "),i(124,"code"),e(125,"t-error-limit"),t(),e(126,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(127,"blockquote")(128,"p"),e(129,"Quando utilizado com "),i(130,"code"),e(131,"t-helper"),t(),e(132,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(133,"tr",19)(134,"td",20)(135,"div",21)(136,"span",22),e(137,"t-auto-focus"),o(138,"br"),t()()(),i(139,"td",24)(140,"code",29),e(141,"boolean"),t()(),i(142,"td",26)(143,"p")(144,"code"),e(145,"false"),t()()(),i(146,"td",27)(147,"em")(148,"strong"),e(149,"(opcional)"),t()(),i(150,"p"),e(151,"Aplica foco no elemento ao ser iniciado."),t(),i(152,"blockquote")(153,"p"),e(154,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(155,"tr",19)(156,"td",20)(157,"div",21)(158,"span",22),e(159,"t-auto-height"),o(160,"br"),t()()(),i(161,"td",24)(162,"code",29),e(163,"boolean"),t()(),i(164,"td",26)(165,"p")(166,"code"),e(167,"false"),t()()(),i(168,"td",27)(169,"em")(170,"strong"),e(171,"(opcional)"),t()(),i(172,"p"),e(173,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, com altura m\xEDnima fixa e altura m\xE1xima de acordo
com o n\xFAmero de itens selecionados, mantendo-os sempre vis\xEDveis.`),t()()(),i(174,"tr",19)(175,"td",20)(176,"div",30)(177,"span",31),e(178," (t-change)"),o(179,"br"),t()()(),i(180,"td",24)(181,"code",25),e(182,"EventEmitter"),t()(),i(183,"td",26),e(184,"-"),t(),i(185,"td",27)(186,"em")(187,"strong"),e(188,"(opcional)"),t()(),i(189,"p"),e(190,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(191,"tr",19)(192,"td",20)(193,"div",30)(194,"span",31),e(195," (t-change-model)"),o(196,"br"),t()()(),i(197,"td",24)(198,"code",25),e(199,"EventEmitter"),t()(),i(200,"td",26),e(201,"-"),t(),i(202,"td",27)(203,"em")(204,"strong"),e(205,"(opcional)"),t()(),i(206,"p"),e(207,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(208,"tr",19)(209,"td",20)(210,"div",21)(211,"span",22),e(212,"t-clean"),o(213,"br"),t()()(),i(214,"td",24)(215,"code",29),e(216,"boolean"),t()(),i(217,"td",26)(218,"p")(219,"code"),e(220,"false"),t()()(),i(221,"td",27)(222,"em")(223,"strong"),e(224,"(opcional)"),t()(),i(225,"p"),e(226,"Exibe um \xEDcone que permite limpar o campo. No caso de sele\xE7\xE3o m\xFAltipla, esta op\xE7\xE3o sempre ser\xE1 "),i(227,"code"),e(228,"true"),t(),e(229,"."),t()()(),i(230,"tr",19)(231,"td",20)(232,"div",21)(233,"span",22),e(234,"t-columns"),o(235,"br"),t()()(),i(236,"td",24)(237,"code",32),e(238,"Array<ThfLookupColumn>"),t()(),i(239,"td",26),e(240,"-"),t(),i(241,"td",27)(242,"em")(243,"strong"),e(244,"(opcional)"),t()(),i(245,"p"),e(246,"Permite definir e configurar as colunas do grid dentro do modal de busca avan\xE7ada por meio da interface "),i(247,"strong"),e(248,"ThfLookupColumn"),t(),e(249,"."),t(),i(250,"pre")(251,"code",33),e(252,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(253,"pre")(254,"code",34),e(255,`columns: Array<ThfLookupColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(256,"tr",19)(257,"td",20)(258,"div",21)(259,"span",22),e(260," t-size"),o(261,"br"),t(),o(262,"po-tag",35),t()(),i(263,"td",24)(264,"code",28),e(265,"string"),t()(),i(266,"td",26)(267,"p")(268,"code"),e(269,"medium"),t()()(),i(270,"td",27)(271,"em")(272,"strong"),e(273,"(opcional)"),t()(),i(274,"p"),e(275,"Define o tamanho do componente:"),t(),i(276,"ul")(277,"li")(278,"code"),e(279,"small"),t(),e(280,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(281,"li")(282,"code"),e(283,"medium"),t(),e(284,": altura do input como 44px."),t()(),i(285,"blockquote")(286,"p"),e(287,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(288,"code"),e(289,"medium"),t(),e(290,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(291,"a",36),e(292,"po-theme"),t(),e(293,"."),t()()()(),i(294,"tr",19)(295,"td",20)(296,"div",21)(297,"span",22),e(298,"t-custom-items"),o(299,"br"),t()()(),i(300,"td",24)(301,"code",37),e(302,"Array<any>"),t()(),i(303,"td",26)(304,"p")(305,"code"),e(306,"[]"),t()()(),i(307,"td",27)(308,"em")(309,"strong"),e(310,"(opcional)"),t()(),i(311,"p"),e(312,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(313,"tr",19)(314,"td",20)(315,"div",21)(316,"span",22),e(317,"t-disabled"),o(318,"br"),t()()(),i(319,"td",24)(320,"code",29),e(321,"boolean"),t()(),i(322,"td",26)(323,"p")(324,"code"),e(325,"false"),t()()(),i(326,"td",27)(327,"em")(328,"strong"),e(329,"(opcional)"),t()(),i(330,"p"),e(331,"Desabilita o campo."),t()()(),i(332,"tr",19)(333,"td",20)(334,"div",21)(335,"span",22),e(336,"t-error-limit"),o(337,"br"),t()()(),i(338,"td",24)(339,"code",29),e(340,"boolean"),t()(),i(341,"td",26)(342,"p")(343,"code"),e(344,"false"),t()()(),i(345,"td",27)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),i(349,"p"),e(350,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(351,"blockquote")(352,"p"),e(353,"Caso essa propriedade seja definida como "),i(354,"code"),e(355,"true"),t(),e(356,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(357,"tr",19)(358,"td",20)(359,"div",21)(360,"span",22),e(361,"t-field-error-message"),o(362,"br"),t()()(),i(363,"td",24)(364,"code",28),e(365,"string"),t()(),i(366,"td",26),e(367,"-"),t(),i(368,"td",27)(369,"em")(370,"strong"),e(371,"(opcional)"),t()(),i(372,"p"),e(373,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(374,"blockquote")(375,"p"),e(376,"Necess\xE1rio que a propriedade "),i(377,"code"),e(378,"t-required"),t(),e(379," esteja habilitada."),t()()()(),i(380,"tr",19)(381,"td",20)(382,"div",21)(383,"span",22),e(384," t-field-format"),o(385,"br"),t()()(),i(386,"td",24)(387,"code",38),e(388,"Array<string> "),t(),i(389,"code",39),e(390," ((item: any) => string)"),t()(),i(391,"td",26),e(392,"-"),t(),i(393,"td",27)(394,"em")(395,"strong"),e(396,"(opcional)"),t()(),i(397,"p"),e(398,"Formato de exibi\xE7\xE3o do campo."),t(),i(399,"p"),e(400,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(401,"em"),e(402,"string"),t(),e(403," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(404,"pre")(405,"code",34),e(406,"fieldFormat(obj) {\n  return `${obj.id} (${obj.name})`;\n}"),t()(),i(407,"pre")(408,"code",33),e(409,`<thf-lookup
  ...
  [t-field-format]="fieldFormat"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 (Goku)  -->`),t()(),i(410,"p"),e(411,`Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado `),i(412,"code"),e(413,"-"),t(),e(414,` como separador.
Por exemplo:`),t(),i(415,"pre")(416,"code",33),e(417,`<thf-lookup
  ...
  [t-field-format]="['id','nickname']"
  ...
></thf-lookup>
<!-- Apresenta\xE7\xE3o no campo: 123 - Goku  -->`),t()(),i(418,"blockquote")(419,"p"),e(420,"Esta propriedade sobrep\xF5e a "),i(421,"code"),e(422,"t-keys-label"),t(),e(423," como formata\xE7\xE3o do campo."),t()()()(),i(424,"tr",19)(425,"td",20)(426,"div",21)(427,"span",22),e(428,"t-field-label"),o(429,"br"),t()()(),i(430,"td",24)(431,"code",28),e(432,"string"),t()(),i(433,"td",26),e(434,"-"),t(),i(435,"td",27)(436,"p"),e(437,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e do filtro selecionado dentro do modal de busca avan\xE7ada.
Propriedade obrigat\xF3ria.`),t()()(),i(438,"tr",19)(439,"td",20)(440,"div",21)(441,"span",22),e(442,"t-field-value"),o(443,"br"),t()()(),i(444,"td",24)(445,"code",28),e(446,"string"),t()(),i(447,"td",26),e(448,"-"),t(),i(449,"td",27)(450,"p"),e(451,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(452,"blockquote")(453,"p"),e(454,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(455,"tr",19)(456,"td",20)(457,"div",21)(458,"span",22),e(459,"t-filter-params"),o(460,"br"),t()()(),i(461,"td",24)(462,"code",40),e(463,"any"),t()(),i(464,"td",26),e(465,"-"),t(),i(466,"td",27)(467,"em")(468,"strong"),e(469,"(opcional)"),t()(),i(470,"p"),e(471,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(472,"strong"),e(473,"ThfLookupFilter"),t(),e(474,"."),t()()(),i(475,"tr",19)(476,"td",20)(477,"div",21)(478,"span",22),e(479,"t-filter-search-select"),o(480,"br"),t()()(),i(481,"td",24)(482,"code",41),e(483,"Array<ThfLookupFilterSearchSelect>"),t()(),i(484,"td",26),e(485,"-"),t(),i(486,"td",27)(487,"em")(488,"strong"),e(489,"(opcional)"),t()(),i(490,"p"),e(491,`Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro dentro do modal de busca avan\xE7ada. Deve implementar a interface
`),i(492,"strong"),e(493,"ThfLookupFilterSearchSelect"),t(),e(494,"."),t(),i(495,"pre")(496,"code",33),e(497,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(498,"pre")(499,"code",34),e(500,`filterSelect: Array<ThfLookupFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(501,"tr",19)(502,"td",20)(503,"div",21)(504,"span",22),e(505,"t-filter-service"),o(506,"br"),t()()(),i(507,"td",24)(508,"code",42),e(509,"ThfLookupFilter "),t(),i(510,"code",28),e(511," string"),t()(),i(512,"td",26),e(513,"-"),t(),i(514,"td",27)(515,"p"),e(516,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(517,"strong"),e(518,"ThfLookupFilter"),t(),e(519," ou uma URL."),t(),i(520,"p"),e(521,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(522,"code"),e(523,"filter"),t(),e(524," com o valor da busca:"),t(),i(525,"pre")(526,"code"),e(527,"url + ?page=1&pageSize=20&filter=Peter"),t()(),i(528,"p"),e(529,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(530,"code"),e(531,"order"),t(),e(532,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(533,"pre")(534,"code"),e(535,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()(),i(536,"p"),e(537,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(538,"pre")(539,"code"),e(540,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()(),i(541,"p"),e(542,"Se definido "),i(543,"strong"),e(544,"t-filter-params"),t(),e(545,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(546,"code"),e(547,"{ age: 23 }"),t(),e(548,":"),t(),i(549,"pre")(550,"code"),e(551,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),i(552,"p"),e(553,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(554,"pre")(555,"code"),e(556,`model = 1234;

GET url/1234`),t()(),i(557,"p"),e(558,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(559,"pre")(560,"code"),e(561,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),i(562,"blockquote")(563,"p"),e(564,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(565,"a",43),e(566,"API do PO UI"),t(),e(567,` e utilizar
os valores definidos nas propriedades `),i(568,"strong"),e(569,"t-field-label"),t(),e(570," e "),i(571,"strong"),e(572,"t-field-value"),t(),e(573," para a constru\xE7\xE3o do "),i(574,"strong"),e(575,"thf-lookup"),t(),e(576,"."),t()(),i(577,"p"),e(578,"Caso a busca tenha ocorrido pressionando a tecla "),i(579,"em"),e(580,"TAB"),t(),e(581,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(582,"a",44),e(583,"encodeURIComponent"),t(),e(584,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(585,"pre")(586,"code"),e(587,"url/valor%20que%20se%20deseja%20filtrar"),t()(),i(588,"blockquote")(589,"p"),e(590,"Caso utilize um servi\xE7o "),i(591,"strong"),e(592,"ThfLookupFilter"),t(),e(593,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(594,"tr",19)(595,"td",20)(596,"div",21)(597,"span",22),e(598,"t-grid-properties"),o(599,"br"),t()()(),i(600,"td",24)(601,"code",45),e(602,"ThfLookupGridProperties"),t()(),i(603,"td",26),e(604,"-"),t(),i(605,"td",27)(606,"em")(607,"strong"),e(608,"(opcional)"),t()(),i(609,"p"),e(610,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(611,"p"),e(612,"// Exemplo de uso:"),t(),i(613,"pre")(614,"code",33),e(615,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>`),t()(),i(616,"pre")(617,"code",34),e(618,`gridProperties: ThfLookupGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}`),t()()()(),i(619,"tr",19)(620,"td",20)(621,"div",21)(622,"span",22),e(623,"t-help"),o(624,"br"),t()()(),i(625,"td",24)(626,"code",28),e(627,"string"),t()(),i(628,"td",26),e(629,"-"),t(),i(630,"td",27)(631,"em")(632,"strong"),e(633,"(opcional)"),t()(),i(634,"p"),e(635,"Texto de apoio do campo."),t()()(),i(636,"tr",19)(637,"td",20)(638,"div",30)(639,"span",31),e(640," (t-focus)"),o(641,"br"),t()()(),i(642,"td",24)(643,"code",25),e(644,"EventEmitter"),t()(),i(645,"td",26),e(646,"-"),t(),i(647,"td",27)(648,"em")(649,"strong"),e(650,"(opcional)"),t()(),i(651,"p"),e(652,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(653,"p"),e(654,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(655,"tr",19)(656,"td",20)(657,"div",21)(658,"span",22),e(659,"t-key-last-search"),o(660,"br"),t()()(),i(661,"td",24)(662,"code",28),e(663,"string"),t()(),i(664,"td",26),e(665,"-"),t(),i(666,"td",27)(667,"em")(668,"strong"),e(669,"(opcional)"),t()(),i(670,"p"),e(671,"Define um identificador \xFAnico para o campo. Marca\xE7\xE3o necess\xE1ria quando h\xE1 hist\xF3rico de \xFAltimas pesquisas."),t()()(),i(672,"tr",19)(673,"td",20)(674,"div",30)(675,"span",31),e(676," (t-keydown)"),o(677,"br"),t()()(),i(678,"td",24)(679,"code",25),e(680,"EventEmitter"),t()(),i(681,"td",26),e(682,"-"),t(),i(683,"td",27)(684,"em")(685,"strong"),e(686,"(opcional)"),t()(),i(687,"p"),e(688,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(689,"code"),e(690,"KeyboardEvent"),t(),e(691," com informa\xE7\xF5es sobre a tecla."),t()()(),i(692,"tr",19)(693,"td",20)(694,"div",21)(695,"span",22),e(696,"t-keys-label"),o(697,"br"),t()()(),i(698,"td",24)(699,"code",46),e(700,"Array<ThfLookupKeysLabel>"),t()(),i(701,"td",26),e(702,"-"),t(),i(703,"td",27)(704,"em")(705,"strong"),e(706,"(opcional)"),t()(),i(707,"p"),e(708,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no campo."),t(),i(709,"pre")(710,"code",33),e(711,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(712,"pre")(713,"code",34),e(714,`keysLabel: Array<ThfLookupKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(715,"pre")(716,"code"),e(717,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(718,"tr",19)(719,"td",20)(720,"div",21)(721,"span",22),e(722,"t-label"),o(723,"br"),t()()(),i(724,"td",24)(725,"code",28),e(726,"string"),t()(),i(727,"td",26),e(728,"-"),t(),i(729,"td",27)(730,"em")(731,"strong"),e(732,"(opcional)"),t()(),i(733,"p"),e(734,"Label do campo. Tamb\xE9m usado como t\xEDtulo do modal de busca avan\xE7ada, se "),i(735,"code"),e(736,"modalTitle"),t(),e(737," n\xE3o estiver definido em "),i(738,"strong"),e(739,"t-literals"),t(),e(740,"."),t()()(),i(741,"tr",19)(742,"td",20)(743,"div",21)(744,"span",22),e(745," t-label-text-wrap"),o(746,"br"),t()()(),i(747,"td",24)(748,"code",29),e(749,"boolean"),t()(),i(750,"td",26)(751,"p")(752,"code"),e(753,"false"),t()()(),i(754,"td",27)(755,"em")(756,"strong"),e(757,"(opcional)"),t()(),i(758,"p"),e(759,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(760,"code"),e(761,"t-label"),t(),e(762,". Quando "),i(763,"code"),e(764,"t-label-text-wrap"),t(),e(765,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(766,"tr",19)(767,"td",20)(768,"div",21)(769,"span",22),e(770,"t-literals"),o(771,"br"),t()()(),i(772,"td",24)(773,"code",47),e(774,"ThfLookupLiterals"),t()(),i(775,"td",26),e(776,"-"),t(),i(777,"td",27)(778,"em")(779,"strong"),e(780,"(opcional)"),t()(),i(781,"p"),e(782,"Permite definir literais personalizados para o componente, conforme a interface "),i(783,"strong"),e(784,"ThfLookupLiterals"),t(),e(785,"."),t(),i(786,"pre")(787,"code",33),e(788,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(789,"pre")(790,"code",34),e(791,"customLiterals: ThfLookupLiterals = { modalTitle: 'Busca avan\xE7ada' };"),t()()()(),i(792,"tr",19)(793,"td",20)(794,"div",21)(795,"span",22),e(796,"t-loading"),o(797,"br"),t()()(),i(798,"td",24)(799,"code",29),e(800,"boolean"),t()(),i(801,"td",26)(802,"p")(803,"code"),e(804,"false"),t()()(),i(805,"td",27)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),i(809,"p"),e(810,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),i(811,"tr",19)(812,"td",20)(813,"div",21)(814,"span",22),e(815,"t-multiple"),o(816,"br"),t()()(),i(817,"td",24)(818,"code",29),e(819,"boolean"),t()(),i(820,"td",26)(821,"p")(822,"code"),e(823,"false"),t()()(),i(824,"td",27)(825,"em")(826,"strong"),e(827,"(opcional)"),t()(),i(828,"p"),e(829,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(830,"blockquote")(831,"p"),e(832,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(833,"code"),e(834,"[ 12345, 67890 ]"),t()()()()(),i(835,"tr",19)(836,"td",20)(837,"div",21)(838,"span",22),e(839,"t-no-autocomplete"),o(840,"br"),t()()(),i(841,"td",24)(842,"code",29),e(843,"boolean"),t()(),i(844,"td",26)(845,"p")(846,"code"),e(847,"false"),t()()(),i(848,"td",27)(849,"em")(850,"strong"),e(851,"(opcional)"),t()(),i(852,"p"),e(853,"Desabilita o "),i(854,"code"),e(855,"autocomplete"),t(),e(856," (propriedade nativa) do campo."),t()()(),i(857,"tr",19)(858,"td",20)(859,"div",30)(860,"span",31),e(861," (t-error)"),o(862,"br"),t()()(),i(863,"td",24)(864,"code",25),e(865,"EventEmitter"),t()(),i(866,"td",26),e(867,"-"),t(),i(868,"td",27)(869,"em")(870,"strong"),e(871,"(opcional)"),t()(),i(872,"p"),e(873,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(874,"tr",19)(875,"td",20)(876,"div",21)(877,"span",22),e(878,"t-optional"),o(879,"br"),t()()(),i(880,"td",24)(881,"code",29),e(882,"boolean"),t()(),i(883,"td",26)(884,"p")(885,"code"),e(886,"false"),t()()(),i(887,"td",27)(888,"em")(889,"strong"),e(890,"(opcional)"),t()(),i(891,"p"),e(892,"Exibe um indicador opcional no campo. Requer que "),i(893,"strong"),e(894,"t-label"),t(),e(895," esteja definido e "),i(896,"strong"),e(897,"t-required"),t(),e(898," desabilitado."),t()()(),i(899,"tr",19)(900,"td",20)(901,"div",21)(902,"span",22),e(903,"t-placeholder"),o(904,"br"),t()()(),i(905,"td",24)(906,"code",28),e(907,"string"),t()(),i(908,"td",26),e(909,"-"),t(),i(910,"td",27)(911,"em")(912,"strong"),e(913,"(opcional)"),t()(),i(914,"p"),e(915,"Texto exibido enquanto o campo estiver vazio."),t()()(),i(916,"tr",19)(917,"td",20)(918,"div",21)(919,"span",22),e(920," t-helper"),o(921,"br"),t()()(),i(922,"td",24)(923,"code",48),e(924,"PoHelperOptions"),t()(),i(925,"td",26),e(926,"-"),t(),i(927,"td",27)(928,"em")(929,"strong"),e(930,"(opcional)"),t()(),i(931,"p"),e(932,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(933,"p"),e(934,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(935,"code"),e(936,"t-additional-help-tooltip"),t(),e(937," e "),i(938,"code"),e(939,"t-additional-help"),t(),e(940,") ser\xE1 ignorado."),t()()(),i(941,"tr",19)(942,"td",20)(943,"div",21)(944,"span",22),e(945,"t-required"),o(946,"br"),t()()(),i(947,"td",24)(948,"code",29),e(949,"boolean"),t()(),i(950,"td",26)(951,"p")(952,"code"),e(953,"false"),t()()(),i(954,"td",27)(955,"em")(956,"strong"),e(957,"(opcional)"),t()(),i(958,"p"),e(959,"Define o campo como obrigat\xF3rio. Caso "),i(960,"strong"),e(961,"t-disabled"),t(),e(962," esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(963,"tr",19)(964,"td",20)(965,"div",21)(966,"span",22),e(967,"t-search-on-enter"),o(968,"br"),t()()(),i(969,"td",24)(970,"code",49),e(971,"'equal' "),t(),i(972,"code",50),e(973," 'include'"),t()(),i(974,"td",26)(975,"p")(976,"code"),e(977,"equal"),t()()(),i(978,"td",27)(979,"em")(980,"strong"),e(981,"(opcional)"),t()(),i(982,"p"),e(983,"Realiza busca do item ao pressionar a tecla Enter."),t(),i(984,"blockquote")(985,"p"),e(986,"Caso essa propriedade seja definida como "),i(987,"code"),e(988,"equal"),t(),e(989,`, a busca ser\xE1 realizada quando o valor do campo for exatamente igual ao valor do item.
Caso seja definida como `),i(990,"code"),e(991,"include"),t(),e(992,", a busca retornar\xE1 o primeiro item que contenha o valor do campo."),t()()()(),i(993,"tr",19)(994,"td",20)(995,"div",30)(996,"span",31),e(997," (t-selected)"),o(998,"br"),t()()(),i(999,"td",24)(1e3,"code",25),e(1001,"EventEmitter"),t()(),i(1002,"td",26),e(1003,"-"),t(),i(1004,"td",27)(1005,"em")(1006,"strong"),e(1007,"(opcional)"),t()(),i(1008,"p"),e(1009,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(1010,"strong"),e(1011,"t-field-value"),t(),e(1012,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(1013,"tr",19)(1014,"td",20)(1015,"div",21)(1016,"span",22),e(1017,"t-show-required"),o(1018,"br"),t()()(),i(1019,"td",24)(1020,"code",29),e(1021,"boolean"),t()(),i(1022,"td",26)(1023,"p")(1024,"code"),e(1025,"false"),t()()(),i(1026,"td",27)(1027,"em")(1028,"strong"),e(1029,"(opcional)"),t()(),i(1030,"p"),e(1031,"Exibe um indicador de obrigatoriedade no campo. Requer que "),i(1032,"strong"),e(1033,"t-required"),t(),e(1034," esteja habilitado e "),i(1035,"strong"),e(1036,"t-label"),t(),e(1037," definido."),t()()(),i(1038,"tr",19)(1039,"td",20)(1040,"div",21)(1041,"span",22),e(1042," t-modal-size"),o(1043,"br"),t()()(),i(1044,"td",24)(1045,"code",28),e(1046,"string"),t()(),i(1047,"td",26)(1048,"p")(1049,"code"),e(1050,"lg"),t()()(),i(1051,"td",27)(1052,"em")(1053,"strong"),e(1054,"(opcional)"),t()(),i(1055,"p"),e(1056,"Define o tamanho do modal."),t(),i(1057,"p"),e(1058,"Valores v\xE1lidos:"),t(),i(1059,"ul")(1060,"li")(1061,"code"),e(1062,"sm"),t(),e(1063," (pequeno)"),t(),i(1064,"li")(1065,"code"),e(1066,"md"),t(),e(1067," (m\xE9dio)"),t(),i(1068,"li")(1069,"code"),e(1070,"lg"),t(),e(1071," (grande)"),t(),i(1072,"li")(1073,"code"),e(1074,"xl"),t(),e(1075," (extra grande)"),t(),i(1076,"li")(1077,"code"),e(1078,"auto"),t(),e(1079," (autom\xE1tico)"),t()(),i(1080,"blockquote")(1081,"p"),e(1082,"Quando informado "),i(1083,"code"),e(1084,"auto"),t(),e(1085,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
Caso n\xE3o seja informado um valor, a modal ter\xE1 o tamanho definido como `),i(1086,"code"),e(1087,"lg"),t(),e(1088,"."),t()()()()()(),i(1089,"po-accordion-item",51)(1090,"table",52)(1091,"tr",19)(1092,"th",53)(1093,"div",21)(1094,"h4")(1095,"span",22),e(1096," showAdditionalHelp "),t()()()()(),i(1097,"tr",27)(1098,"td",27)(1099,"p"),e(1100,"M\xE9todo que exibe "),i(1101,"code"),e(1102,"t-helper"),t(),e(1103," ou executa a a\xE7\xE3o definida em "),i(1104,"code"),e(1105,"t-helper{eventOnClick}"),t(),e(1106," ou em "),i(1107,"code"),e(1108,"t-additionalHelp"),t(),e(1109,`.
Para isso, ser\xE1 necess\xE1rio configurar uma tecla de atalho utilizando o evento `),i(1110,"code"),e(1111,"t-keydown"),t(),e(1112,"."),t(),i(1113,"pre")(1114,"code"),e(1115,`<thf-lookup
 #lookup
 ...
 t-helper="Mensagem de ajuda complementar"
 (t-keydown)="onKeyDown($event, lookup)"
></thf-lookup>`),t()(),i(1116,"pre")(1117,"code"),e(1118,`...
onKeyDown(event: KeyboardEvent, inp: ThfLookupComponent): void {
 if (event.code === 'F9') {
   inp.showAdditionalHelp();
 }
}`),t()()()()(),o(1119,"br"),t()()(),w(1120,2),t(),i(1121,"po-tab",54),w(1122,3),i(1123,"po-container",5)(1124,"po-accordion",6)(1125,"po-accordion-item",55)(1126,"h4",9)(1127,"code"),e(1128,"ThfLookupColumn"),t()(),i(1129,"div",10)(1130,"p"),e(1131,"Interface para configura\xE7\xE3o das colunas ("),i(1132,"strong"),e(1133,"t-columns"),t(),e(1134,")."),t()(),i(1135,"h4",15),e(1136,"Propriedades"),t(),i(1137,"table",16)(1138,"tr",17)(1139,"th",18),e(1140,"Nome"),t(),i(1141,"th",18),e(1142,"Tipo"),t(),i(1143,"th",18),e(1144,"Descri\xE7\xE3o"),t()(),i(1145,"tr",19)(1146,"td",20)(1147,"div",21)(1148,"span",22),e(1149," boolean"),o(1150,"br"),t()()(),i(1151,"td",24)(1152,"code",56),e(1153,"PoTableBoolean"),t()(),i(1154,"td",27)(1155,"em")(1156,"strong"),e(1157,"(opcional)"),t()(),i(1158,"p"),e(1159,"Define um objeto do tipo "),i(1160,"code"),e(1161,"PoTableBoolean"),t(),e(1162," para as colunas do tipo "),i(1163,"em"),e(1164,"boolean"),t(),e(1165,". Por exemplo:"),t(),i(1166,"pre")(1167,"code"),e(1168,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(1169,"blockquote")(1170,"p"),e(1171,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(1172,"em"),e(1173,"boolean"),t(),e(1174,`,
esta exibir\xE1 por padr\xE3o `),i(1175,"code"),e(1176,"Sim"),t(),e(1177," e "),i(1178,"code"),e(1179,"N\xE3o"),t(),e(1180," de acordo com os valores "),i(1181,"em"),e(1182,"booleanos"),t(),e(1183,"."),t()()()(),i(1184,"tr",19)(1185,"td",20)(1186,"div",21)(1187,"span",22),e(1188," booleanFalse"),o(1189,"br"),t()()(),i(1190,"td",24)(1191,"code",28),e(1192,"string"),t()(),i(1193,"td",27)(1194,"em")(1195,"strong"),e(1196,"(opcional)"),t()(),i(1197,"p"),e(1198,"Texto exibido quando o valor da coluna for "),i(1199,"em"),e(1200,"false"),t(),e(1201,"."),t()()(),i(1202,"tr",19)(1203,"td",20)(1204,"div",21)(1205,"span",22),e(1206," booleanTrue"),o(1207,"br"),t()()(),i(1208,"td",24)(1209,"code",28),e(1210,"string"),t()(),i(1211,"td",27)(1212,"em")(1213,"strong"),e(1214,"(opcional)"),t()(),i(1215,"p"),e(1216,"Texto exibido quando o valor da coluna for "),i(1217,"em"),e(1218,"true"),t(),e(1219,"."),t()()(),i(1220,"tr",19)(1221,"td",20)(1222,"div",21)(1223,"span",22),e(1224," disabled"),o(1225,"br"),t()()(),i(1226,"td",24)(1227,"code",57),e(1228,"Function"),t()(),i(1229,"td",27)(1230,"em")(1231,"strong"),e(1232,"(opcional)"),t()(),i(1233,"p"),e(1234,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(1235,"em"),e(1236,"link"),t(),e(1237," e sua a\xE7\xE3o."),t(),i(1238,"blockquote")(1239,"p"),e(1240,"Propriedade dispon\xEDvel nas colunas do tipo "),i(1241,"code"),e(1242,"link"),t(),e(1243,"."),t()()()(),i(1244,"tr",19)(1245,"td",20)(1246,"div",21)(1247,"span",22),e(1248," format"),o(1249,"br"),t()()(),i(1250,"td",24)(1251,"code",28),e(1252,"string"),t()(),i(1253,"td",27)(1254,"em")(1255,"strong"),e(1256,"(opcional)"),t()(),i(1257,"p"),e(1258,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(1259,"ul")(1260,"li"),e(1261,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(1262,"li"),e(1263,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(1264,"tr",19)(1265,"td",20)(1266,"div",21)(1267,"span",22),e(1268," label"),o(1269,"br"),t()()(),i(1270,"td",24)(1271,"code",28),e(1272,"string"),t()(),i(1273,"td",27)(1274,"em")(1275,"strong"),e(1276,"(opcional)"),t()(),i(1277,"p"),e(1278,"Texto para t\xEDtulo da coluna."),t(),i(1279,"p"),e(1280,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1281,"em"),e(1282,"label"),t(),e(1283," o valor da propriedade "),i(1284,"em"),e(1285,"property"),t(),e(1286," com a primeira letra em mai\xFAsculo."),t()()(),i(1287,"tr",19)(1288,"td",20)(1289,"div",21)(1290,"span",22),e(1291," labels"),o(1292,"br"),t()()(),i(1293,"td",24)(1294,"code",58),e(1295,"Array<PoTableColumnLabel>"),t()(),i(1296,"td",27)(1297,"em")(1298,"strong"),e(1299,"(opcional)"),t()(),i(1300,"p"),e(1301,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(1302,"code"),e(1303,"PoTableColumnLabel"),t(),e(1304," na qual devem ser definidas os labels. Por exemplo:"),t(),i(1305,"pre")(1306,"code"),e(1307,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(1308,"tr",19)(1309,"td",20)(1310,"div",21)(1311,"span",22),e(1312," locale"),o(1313,"br"),t()()(),i(1314,"td",24)(1315,"code",28),e(1316,"string"),t()(),i(1317,"td",27)(1318,"em")(1319,"strong"),e(1320,"(opcional)"),t()(),i(1321,"p"),e(1322,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(1323,"a",59)(1324,"code"),e(1325,"I18n"),t()()(),i(1326,"p"),e(1327,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(1328,"pre")(1329,"code"),e(1330,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(1331,"blockquote")(1332,"p"),e(1333,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(1334,"p"),e(1335,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(1336,"p"),e(1337,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(1338,"a",59)(1339,"code"),e(1340,"I18n"),t()()()(),i(1341,"p"),e(1342,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(1343,"pre")(1344,"code"),e(1345,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(1346,"blockquote")(1347,"p"),e(1348,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(1349,"code"),e(1350,"number"),t(),e(1351," e "),i(1352,"code"),e(1353,"currency"),t(),e(1354,"."),t()()()(),i(1355,"tr",19)(1356,"td",20)(1357,"div",21)(1358,"span",22),e(1359," property"),o(1360,"br"),t()()(),i(1361,"td",24)(1362,"code",28),e(1363,"string"),t()(),i(1364,"td",27)(1365,"em")(1366,"strong"),e(1367,"(opcional)"),t()(),i(1368,"p"),e(1369,"Nome identificador da coluna."),t()()(),i(1370,"tr",19)(1371,"td",20)(1372,"div",21)(1373,"span",22),e(1374," type"),o(1375,"br"),t()()(),i(1376,"td",24)(1377,"code",28),e(1378,"string"),t()(),i(1379,"td",27)(1380,"em")(1381,"strong"),e(1382,"(opcional)"),t()(),i(1383,"p"),e(1384,"Tipo da coluna:"),t(),i(1385,"ul")(1386,"li"),e(1387,"string (padr\xE3o): textos"),t(),i(1388,"li"),e(1389,"number: valores num\xE9ricos"),t(),i(1390,"li"),e(1391,"date: data"),t(),i(1392,"li"),e(1393,"currency: valores monet\xE1rios"),t(),i(1394,"li"),e(1395,"dateTime: data e hora"),t()()()(),i(1396,"tr",19)(1397,"td",20)(1398,"div",21)(1399,"span",22),e(1400," visible"),o(1401,"br"),t()()(),i(1402,"td",24)(1403,"code",29),e(1404,"boolean"),t()(),i(1405,"td",27)(1406,"em")(1407,"strong"),e(1408,"(opcional)"),t()(),i(1409,"p"),e(1410,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(1411,"strong"),e(1412,"gerenciador de colunas"),t(),e(1413,"."),t(),i(1414,"blockquote")(1415,"p"),e(1416,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(1417,"code"),e(1418,"p-max-columns"),t(),e(1419,"."),t()()()(),i(1420,"tr",19)(1421,"td",20)(1422,"div",21)(1423,"span",22),e(1424," width"),o(1425,"br"),t()()(),i(1426,"td",24)(1427,"code",28),e(1428,"string"),t()(),i(1429,"td",27)(1430,"em")(1431,"strong"),e(1432,"(opcional)"),t()(),i(1433,"p"),e(1434,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1435,"po-accordion-item",60)(1436,"h4",9)(1437,"code"),e(1438,"ThfLookupFilterSearchSelect"),t()(),i(1439,"div",10)(1440,"p"),e(1441,"Interface que define as colunas para busca ("),i(1442,"strong"),e(1443,"t-filter-search-select"),t(),e(1444,")"),t()(),i(1445,"h4",15),e(1446,"Propriedades"),t(),i(1447,"table",16)(1448,"tr",17)(1449,"th",18),e(1450,"Nome"),t(),i(1451,"th",18),e(1452,"Tipo"),t(),i(1453,"th",18),e(1454,"Descri\xE7\xE3o"),t()(),i(1455,"tr",19)(1456,"td",20)(1457,"div",21)(1458,"span",22),e(1459," label"),o(1460,"br"),t()()(),i(1461,"td",24)(1462,"code",28),e(1463,"string"),t()(),i(1464,"td",27)(1465,"p"),e(1466,"R\xF3tulo da coluna"),t()()(),i(1467,"tr",19)(1468,"td",20)(1469,"div",21)(1470,"span",22),e(1471," value"),o(1472,"br"),t()()(),i(1473,"td",24)(1474,"code",28),e(1475,"string"),t()(),i(1476,"td",27)(1477,"p"),e(1478,"Coluna"),t()()()()(),i(1479,"po-accordion-item",61)(1480,"h4",9)(1481,"code"),e(1482,"ThfLookupFilter"),t()(),i(1483,"div",10)(1484,"p"),e(1485,"Interface para definir o tipo de busca via servi\xE7o."),t()(),i(1486,"table",52)(1487,"tr",19)(1488,"th",53)(1489,"div",21)(1490,"h4")(1491,"span",22),e(1492," fetchItems "),t()()()()(),i(1493,"tr",27)(1494,"td",27)(1495,"p"),e(1496,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1497,"em"),e(1498,"Observable"),t(),e(1499," com a resposta da API no formato { items: [] }."),t()()()(),i(1500,"h5")(1501,"b"),e(1502,"Par\xE2metros"),t()(),i(1503,"table",16)(1504,"tr",17)(1505,"th",18),e(1506,"Nome"),t(),i(1507,"th",18),e(1508,"Tipo"),t(),i(1509,"th",18),e(1510,"Descri\xE7\xE3o"),t()(),i(1511,"tr",19)(1512,"td",20),e(1513," query"),t(),i(1514,"td",24)(1515,"code",62),e(1516," string "),t()(),i(1517,"td",27)(1518,"p"),e(1519,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1520,"tr",19)(1521,"td",20),e(1522," filterParams"),t(),i(1523,"td",24)(1524,"code",62),e(1525," any "),t()(),i(1526,"td",27)(1527,"p"),e(1528,"Valor informado atrav\xE9s da propriedade "),i(1529,"strong"),e(1530,"t-filter-params"),t(),e(1531,"."),t()()()(),o(1532,"br"),i(1533,"table",52)(1534,"tr",19)(1535,"th",53)(1536,"div",21)(1537,"h4")(1538,"span",22),e(1539," getFilteredItems "),t()()()()(),i(1540,"tr",27)(1541,"td",27)(1542,"p"),e(1543,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1544,"em"),e(1545,"Observable"),t(),e(1546," com a resposta da API no formato da interface "),i(1547,"strong"),e(1548,"ThfLookupResponseApi"),t(),e(1549,"."),t()()()(),i(1550,"h5")(1551,"b"),e(1552,"Par\xE2metros"),t()(),i(1553,"table",16)(1554,"tr",17)(1555,"th",18),e(1556,"Nome"),t(),i(1557,"th",18),e(1558,"Tipo"),t(),i(1559,"th",18),e(1560,"Descri\xE7\xE3o"),t()(),i(1561,"tr",19)(1562,"td",20),e(1563," params"),t(),i(1564,"td",24)(1565,"code",62),e(1566," ThfLookupFilteredItemsParams "),t()(),i(1567,"td",27)(1568,"p"),e(1569,"Objeto enviado por par\xE2metro que implementa a interface "),i(1570,"strong"),e(1571,"ThfLookupFilteredItemsParams"),t(),e(1572,"."),t()()()(),o(1573,"br"),i(1574,"table",52)(1575,"tr",19)(1576,"th",53)(1577,"div",21)(1578,"h4")(1579,"span",22),e(1580," getObjectByValue "),t()()()()(),i(1581,"tr",27)(1582,"td",27)(1583,"p"),e(1584,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1585,"p"),e(1586,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1587,"code"),e(1588,"value"),t(),e(1589,` ser\xE1 enviado como uma lista de valores
e o `),i(1590,"em"),e(1591,"Observable"),t(),e(1592," deve retornar uma lista de objetos."),t()()()(),i(1593,"h5")(1594,"b"),e(1595,"Par\xE2metros"),t()(),i(1596,"table",16)(1597,"tr",17)(1598,"th",18),e(1599,"Nome"),t(),i(1600,"th",18),e(1601,"Tipo"),t(),i(1602,"th",18),e(1603,"Descri\xE7\xE3o"),t()(),i(1604,"tr",19)(1605,"td",20),e(1606," value"),t(),i(1607,"td",24)(1608,"code",28),e(1609," string "),t(),i(1610,"code",37),e(1611," Array<any> "),t()(),i(1612,"td",27)(1613,"p"),e(1614,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1615,"tr",19)(1616,"td",20),e(1617," filterParams"),t(),i(1618,"td",24)(1619,"code",62),e(1620," any "),t()(),i(1621,"td",27)(1622,"p"),e(1623,"Valor informado atrav\xE9s da propriedade "),i(1624,"strong"),e(1625,"t-filter-params"),t(),e(1626,"."),t()()()(),o(1627,"br"),t(),i(1628,"po-accordion-item",63)(1629,"h4",9)(1630,"code"),e(1631,"ThfLookupFilteredItemsParams"),t()(),i(1632,"div",10)(1633,"p"),e(1634,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1635,"strong"),e(1636,"getFilteredItems"),t(),e(1637,"."),t()(),i(1638,"h4",15),e(1639,"Propriedades"),t(),i(1640,"table",16)(1641,"tr",17)(1642,"th",18),e(1643,"Nome"),t(),i(1644,"th",18),e(1645,"Tipo"),t(),i(1646,"th",18),e(1647,"Descri\xE7\xE3o"),t()(),i(1648,"tr",19)(1649,"td",20)(1650,"div",21)(1651,"span",22),e(1652," filter"),o(1653,"br"),t()()(),i(1654,"td",24)(1655,"code",64),e(1656,`{ [key: string]: any;
}`),t()(),i(1657,"td",27)(1658,"em")(1659,"strong"),e(1660,"(opcional)"),t()(),i(1661,"p"),e(1662,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1663,"tr",19)(1664,"td",20)(1665,"div",21)(1666,"span",22),e(1667," filterParams"),o(1668,"br"),t()()(),i(1669,"td",24)(1670,"code",40),e(1671,"any"),t()(),i(1672,"td",27)(1673,"em")(1674,"strong"),e(1675,"(opcional)"),t()(),i(1676,"p"),e(1677,"Valor informado atrav\xE9s da propriedade "),i(1678,"code"),e(1679,"t-filter-params"),t(),e(1680,"."),t()()(),i(1681,"tr",19)(1682,"td",20)(1683,"div",21)(1684,"span",22),e(1685," order"),o(1686,"br"),t()()(),i(1687,"td",24)(1688,"code",28),e(1689,"string"),t()(),i(1690,"td",27)(1691,"em")(1692,"strong"),e(1693,"(opcional)"),t()(),i(1694,"p"),e(1695,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1696,"ul")(1697,"li"),e(1698,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1699,"code"),e(1700,"-<colunaOrdenada>"),t(),e(1701,", por exemplo "),i(1702,"code"),e(1703,"-name"),t(),e(1704,"."),t(),i(1705,"li"),e(1706,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1707,"code"),e(1708,"<colunaOrdenada>"),t(),e(1709,", por exemplo "),i(1710,"code"),e(1711,"name"),t(),e(1712,"."),t()()()(),i(1713,"tr",19)(1714,"td",20)(1715,"div",21)(1716,"span",22),e(1717," page"),o(1718,"br"),t()()(),i(1719,"td",24)(1720,"code",65),e(1721,"number"),t()(),i(1722,"td",27)(1723,"em")(1724,"strong"),e(1725,"(opcional)"),t()(),i(1726,"p"),e(1727,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1728,"tr",19)(1729,"td",20)(1730,"div",21)(1731,"span",22),e(1732," pageSize"),o(1733,"br"),t()()(),i(1734,"td",24)(1735,"code",65),e(1736,"number"),t()(),i(1737,"td",27)(1738,"em")(1739,"strong"),e(1740,"(opcional)"),t()(),i(1741,"p"),e(1742,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1743,"po-accordion-item",66)(1744,"h4",9)(1745,"code"),e(1746,"ThfLookupGridProperties"),t()(),i(1747,"div",10)(1748,"p"),e(1749,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t()(),i(1750,"h4",15),e(1751,"Propriedades"),t(),i(1752,"table",16)(1753,"tr",17)(1754,"th",18),e(1755,"Nome"),t(),i(1756,"th",18),e(1757,"Tipo"),t(),i(1758,"th",18),e(1759,"Descri\xE7\xE3o"),t()(),i(1760,"tr",19)(1761,"td",20)(1762,"div",21)(1763,"span",22),e(1764," autoSize"),o(1765,"br"),t()()(),i(1766,"td",24)(1767,"code",29),e(1768,"boolean"),t()(),i(1769,"td",27)(1770,"em")(1771,"strong"),e(1772,"(opcional)"),t()(),i(1773,"p"),e(1774,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1775,"strong"),e(1776,"resizable"),t(),e(1777," esteja habilitada."),t(),i(1778,"blockquote")(1779,"p"),e(1780,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1781,"tr",19)(1782,"td",20)(1783,"div",21)(1784,"span",22),e(1785," autoSizeOnScroll"),o(1786,"br"),t()()(),i(1787,"td",24)(1788,"code",29),e(1789,"boolean"),t()(),i(1790,"td",27)(1791,"em")(1792,"strong"),e(1793,"(opcional)"),t()(),i(1794,"p"),e(1795,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1796,"p"),e(1797,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1798,"p"),e(1799,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1800,"code"),e(1801,"t-page-size-virtual"),t(),e(1802," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1803,"blockquote")(1804,"p")(1805,"strong"),e(1806,"Pr\xE9-requisitos"),t(),e(1807,": Requer que as propriedades "),i(1808,"code"),e(1809,"autoSize"),t(),e(1810,", "),i(1811,"code"),e(1812,"resizable"),t(),e(1813,`
e `),i(1814,"code"),e(1815,"virtualScroll"),t(),e(1816," estejam habilitadas."),t()(),i(1817,"blockquote")(1818,"p")(1819,"strong"),e(1820,"Incompatibilidade"),t(),e(1821,": N\xE3o funciona com "),i(1822,"code"),e(1823,"t-grid-row-actions"),t(),e(1824," habilitado;"),t()(),i(1825,"p")(1826,"strong"),e(1827,"Exemplo de uso:"),t()(),i(1828,"pre")(1829,"code",33),e(1830,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(1831,"tr",19)(1832,"td",20)(1833,"div",21)(1834,"span",22),e(1835," draggable"),o(1836,"br"),t()()(),i(1837,"td",24)(1838,"code",29),e(1839,"boolean"),t()(),i(1840,"td",27)(1841,"em")(1842,"strong"),e(1843,"(opcional)"),t()(),i(1844,"p"),e(1845,"Habilita o Drag and Drop nas colunas."),t()()(),i(1846,"tr",19)(1847,"td",20)(1848,"div",21)(1849,"span",22),e(1850," group"),o(1851,"br"),t()()(),i(1852,"td",24)(1853,"code",38),e(1854,"Array<string>"),t()(),i(1855,"td",27)(1856,"em")(1857,"strong"),e(1858,"(opcional)"),t()(),i(1859,"p"),e(1860,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1861,"strong"),e(1862,"groupable"),t(),e(1863," esteja habilitada."),t()()(),i(1864,"tr",19)(1865,"td",20)(1866,"div",21)(1867,"span",22),e(1868," groupable"),o(1869,"br"),t()()(),i(1870,"td",24)(1871,"code",29),e(1872,"boolean "),t(),i(1873,"code",67),e(1874," GroupableSettings"),t()(),i(1875,"td",27)(1876,"em")(1877,"strong"),e(1878,"(opcional)"),t()(),i(1879,"p"),e(1880,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1881,"tr",19)(1882,"td",20)(1883,"div",21)(1884,"span",22),e(1885," hideSelectAll"),o(1886,"br"),t()()(),i(1887,"td",24)(1888,"code",29),e(1889,"boolean"),t()(),i(1890,"td",27)(1891,"em")(1892,"strong"),e(1893,"(opcional)"),t()(),i(1894,"p"),e(1895,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1896,"tr",19)(1897,"td",20)(1898,"div",21)(1899,"span",22),e(1900," resizable"),o(1901,"br"),t()()(),i(1902,"td",24)(1903,"code",29),e(1904,"boolean"),t()(),i(1905,"td",27)(1906,"em")(1907,"strong"),e(1908,"(opcional)"),t()(),i(1909,"p"),e(1910,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1911,"tr",19)(1912,"td",20)(1913,"div",21)(1914,"span",22),e(1915," selectableEntireLine"),o(1916,"br"),t()()(),i(1917,"td",24)(1918,"code",29),e(1919,"boolean"),t()(),i(1920,"td",27)(1921,"em")(1922,"strong"),e(1923,"(opcional)"),t()(),i(1924,"p"),e(1925,"Permite selecionar o item ao clicar na linha."),t()()(),i(1926,"tr",19)(1927,"td",20)(1928,"div",21)(1929,"span",22),e(1930," showDraggableIcon"),o(1931,"br"),t()()(),i(1932,"td",24)(1933,"code",29),e(1934,"boolean"),t()(),i(1935,"td",27)(1936,"em")(1937,"strong"),e(1938,"(opcional)"),t()(),i(1939,"p"),e(1940,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1941,"tr",19)(1942,"td",20)(1943,"div",21)(1944,"span",22),e(1945," showMoreDisabled"),o(1946,"br"),t()()(),i(1947,"td",24)(1948,"code",29),e(1949,"boolean"),t()(),i(1950,"td",27)(1951,"em")(1952,"strong"),e(1953,"(opcional)"),t()(),i(1954,"p"),e(1955,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1956,"tr",19)(1957,"td",20)(1958,"div",21)(1959,"span",22),e(1960," showMoreVisible"),o(1961,"br"),t()()(),i(1962,"td",24)(1963,"code",29),e(1964,"boolean"),t()(),i(1965,"td",27)(1966,"em")(1967,"strong"),e(1968,"(opcional)"),t()(),i(1969,"p"),e(1970,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1971,"strong"),e(1972,"pageable"),t(),e(1973," esteja habilitada."),t(),i(1974,"blockquote")(1975,"p"),e(1976,"Caso seja utilizado em conjunto com "),i(1977,"strong"),e(1978,"showMoreDisabled"),t(),e(1979,", a propriedade "),i(1980,"strong"),e(1981,"showMoreVisible"),t(),e(1982," ter\xE1 prioridade."),t()()()(),i(1983,"tr",19)(1984,"td",20)(1985,"div",21)(1986,"span",22),e(1987," sort"),o(1988,"br"),t()()(),i(1989,"td",24)(1990,"code",68),e(1991,"Array<{ field: string; dir: 'asc' "),t(),i(1992,"code",69),e(1993,` 'desc';
}>`),t()(),i(1994,"td",27)(1995,"em")(1996,"strong"),e(1997,"(opcional)"),t()(),i(1998,"p"),e(1999,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(2e3,"pre")(2001,"code",34),e(2002,"sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(2003,"tr",19)(2004,"td",20)(2005,"div",21)(2006,"span",22),e(2007," sortable"),o(2008,"br"),t()()(),i(2009,"td",24)(2010,"code",29),e(2011,"boolean"),t()(),i(2012,"td",27)(2013,"em")(2014,"strong"),e(2015,"(opcional)"),t()(),i(2016,"p"),e(2017,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2018,"tr",19)(2019,"td",20)(2020,"div",21)(2021,"span",22),e(2022," spacing"),o(2023,"br"),t()()(),i(2024,"td",24)(2025,"code",70),e(2026,"'extraSmall' "),t(),i(2027,"code",71),e(2028," 'small' "),t(),i(2029,"code",72),e(2030," 'medium' "),t(),i(2031,"code",73),e(2032," 'large'"),t()(),i(2033,"td",27)(2034,"em")(2035,"strong"),e(2036,"(opcional)"),t()(),i(2037,"p"),e(2038,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2039,"strong"),e(2040,"ThfColumnSpacing"),t(),e(2041,"."),t()()(),i(2042,"tr",19)(2043,"td",20)(2044,"div",21)(2045,"span",22),e(2046," striped"),o(2047,"br"),t()()(),i(2048,"td",24)(2049,"code",29),e(2050,"boolean"),t()(),i(2051,"td",27)(2052,"em")(2053,"strong"),e(2054,"(opcional)"),t()(),i(2055,"p"),e(2056,"Define o estilo listrado no grid (striped)."),t()()(),i(2057,"tr",19)(2058,"td",20)(2059,"div",21)(2060,"span",22),e(2061," virtualScroll"),o(2062,"br"),t()()(),i(2063,"td",24)(2064,"code",29),e(2065,"boolean"),t()(),i(2066,"td",27)(2067,"em")(2068,"strong"),e(2069,"(opcional)"),t()(),i(2070,"p"),e(2071,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(2072,"po-accordion-item",74)(2073,"h4",9)(2074,"code"),e(2075,"ThfLookupKeysLabel"),t()(),i(2076,"div",10)(2077,"p"),e(2078,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(2079,"strong"),e(2080,"t-keys-label"),t(),e(2081,")."),t()(),i(2082,"h4",15),e(2083,"Propriedades"),t(),i(2084,"table",16)(2085,"tr",17)(2086,"th",18),e(2087,"Nome"),t(),i(2088,"th",18),e(2089,"Tipo"),t(),i(2090,"th",18),e(2091,"Descri\xE7\xE3o"),t()(),i(2092,"tr",19)(2093,"td",20)(2094,"div",21)(2095,"span",22),e(2096," label"),o(2097,"br"),t()()(),i(2098,"td",24)(2099,"code",28),e(2100,"string"),t()(),i(2101,"td",27)(2102,"p"),e(2103,"Texto exibido"),t()()(),i(2104,"tr",19)(2105,"td",20)(2106,"div",21)(2107,"span",22),e(2108," value"),o(2109,"br"),t()()(),i(2110,"td",24)(2111,"code",28),e(2112,"string"),t()(),i(2113,"td",27)(2114,"p"),e(2115,"Coluna"),t()()()()(),i(2116,"po-accordion-item",75)(2117,"h4",9)(2118,"code"),e(2119,"ThfLookupLiterals"),t()(),i(2120,"div",10)(2121,"p"),e(2122,"Interface para customizar literais ("),i(2123,"strong"),e(2124,"t-literals"),t(),e(2125,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(2126,"h4",15),e(2127,"Propriedades"),t(),i(2128,"table",16)(2129,"tr",17)(2130,"th",18),e(2131,"Nome"),t(),i(2132,"th",18),e(2133,"Tipo"),t(),i(2134,"th",18),e(2135,"Descri\xE7\xE3o"),t()(),i(2136,"tr",19)(2137,"td",20)(2138,"div",21)(2139,"span",22),e(2140," confirmBodyDelete"),o(2141,"br"),t()()(),i(2142,"td",24)(2143,"code",28),e(2144,"string"),t()(),i(2145,"td",27)(2146,"em")(2147,"strong"),e(2148,"(opcional)"),t()(),i(2149,"p"),e(2150,"Texto do corpo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2151,"tr",19)(2152,"td",20)(2153,"div",21)(2154,"span",22),e(2155," confirmCancelDelete"),o(2156,"br"),t()()(),i(2157,"td",24)(2158,"code",28),e(2159,"string"),t()(),i(2160,"td",27)(2161,"em")(2162,"strong"),e(2163,"(opcional)"),t()(),i(2164,"p"),e(2165,"Texto do bot\xE3o de cancelar do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2166,"tr",19)(2167,"td",20)(2168,"div",21)(2169,"span",22),e(2170," confirmRemoveDelete"),o(2171,"br"),t()()(),i(2172,"td",24)(2173,"code",28),e(2174,"string"),t()(),i(2175,"td",27)(2176,"em")(2177,"strong"),e(2178,"(opcional)"),t()(),i(2179,"p"),e(2180,"Texto do bot\xE3o de remover do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2181,"tr",19)(2182,"td",20)(2183,"div",21)(2184,"span",22),e(2185," confirmTitleDelete"),o(2186,"br"),t()()(),i(2187,"td",24)(2188,"code",28),e(2189,"string"),t()(),i(2190,"td",27)(2191,"em")(2192,"strong"),e(2193,"(opcional)"),t()(),i(2194,"p"),e(2195,"T\xEDtulo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2196,"tr",19)(2197,"td",20)(2198,"div",21)(2199,"span",22),e(2200," lastSearch"),o(2201,"br"),t()()(),i(2202,"td",24)(2203,"code",28),e(2204,"string"),t()(),i(2205,"td",27)(2206,"em")(2207,"strong"),e(2208,"(opcional)"),t()(),i(2209,"p"),e(2210,"Texto exibido no listbox quando estiver exibindo as ultimas pesquisas."),t()()(),i(2211,"tr",19)(2212,"td",20)(2213,"div",21)(2214,"span",22),e(2215," listNotFound"),o(2216,"br"),t()()(),i(2217,"td",24)(2218,"code",28),e(2219,"string"),t()(),i(2220,"td",27)(2221,"em")(2222,"strong"),e(2223,"(opcional)"),t()(),i(2224,"p"),e(2225,"Texto exibido no listbox quando nenhum resultado for encontrado."),t()()(),i(2226,"tr",19)(2227,"td",20)(2228,"div",21)(2229,"span",22),e(2230," modalPlaceholder"),o(2231,"br"),t()()(),i(2232,"td",24)(2233,"code",28),e(2234,"string"),t()(),i(2235,"td",27)(2236,"em")(2237,"strong"),e(2238,"(opcional)"),t()(),i(2239,"p"),e(2240,"Texto exibido no placeholder do input da modal."),t()()(),i(2241,"tr",19)(2242,"td",20)(2243,"div",21)(2244,"span",22),e(2245," modalPrimaryActionLabel"),o(2246,"br"),t()()(),i(2247,"td",24)(2248,"code",28),e(2249,"string"),t()(),i(2250,"td",27)(2251,"em")(2252,"strong"),e(2253,"(opcional)"),t()(),i(2254,"p"),e(2255,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(2256,"tr",19)(2257,"td",20)(2258,"div",21)(2259,"span",22),e(2260," modalSecondaryActionLabel"),o(2261,"br"),t()()(),i(2262,"td",24)(2263,"code",28),e(2264,"string"),t()(),i(2265,"td",27)(2266,"em")(2267,"strong"),e(2268,"(opcional)"),t()(),i(2269,"p"),e(2270,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(2271,"tr",19)(2272,"td",20)(2273,"div",21)(2274,"span",22),e(2275," modalTableLoadMoreData"),o(2276,"br"),t()()(),i(2277,"td",24)(2278,"code",28),e(2279,"string"),t()(),i(2280,"td",27)(2281,"em")(2282,"strong"),e(2283,"(opcional)"),t()(),i(2284,"p"),e(2285,"Label do "),i(2286,"code"),e(2287,"button"),t(),e(2288," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(2289,"tr",19)(2290,"td",20)(2291,"div",21)(2292,"span",22),e(2293," modalTableLoadingData"),o(2294,"br"),t()()(),i(2295,"td",24)(2296,"code",28),e(2297,"string"),t()(),i(2298,"td",27)(2299,"em")(2300,"strong"),e(2301,"(opcional)"),t()(),i(2302,"p"),e(2303,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(2304,"tr",19)(2305,"td",20)(2306,"div",21)(2307,"span",22),e(2308," modalTableNoColumns"),o(2309,"br"),t()()(),i(2310,"td",24)(2311,"code",28),e(2312,"string"),t()(),i(2313,"td",27)(2314,"em")(2315,"strong"),e(2316,"(opcional)"),t()(),i(2317,"p"),e(2318,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(2319,"tr",19)(2320,"td",20)(2321,"div",21)(2322,"span",22),e(2323," modalTableNoData"),o(2324,"br"),t()()(),i(2325,"td",24)(2326,"code",28),e(2327,"string"),t()(),i(2328,"td",27)(2329,"em")(2330,"strong"),e(2331,"(opcional)"),t()(),i(2332,"p"),e(2333,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(2334,"tr",19)(2335,"td",20)(2336,"div",21)(2337,"span",22),e(2338," modalTitle"),o(2339,"br"),t()()(),i(2340,"td",24)(2341,"code",28),e(2342,"string"),t()(),i(2343,"td",27)(2344,"em")(2345,"strong"),e(2346,"(opcional)"),t()(),i(2347,"p"),e(2348,"Texto exibido no t\xEDtulo da modal."),t()()(),i(2349,"tr",19)(2350,"td",20)(2351,"div",21)(2352,"span",22),e(2353," multipleItems"),o(2354,"br"),t()()(),i(2355,"td",24)(2356,"code",28),e(2357,"string"),t()(),i(2358,"td",27)(2359,"em")(2360,"strong"),e(2361,"(opcional)"),t()(),i(2362,"p"),e(2363,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(2364,"tr",19)(2365,"td",20)(2366,"div",21)(2367,"span",22),e(2368," oneItem"),o(2369,"br"),t()()(),i(2370,"td",24)(2371,"code",28),e(2372,"string"),t()(),i(2373,"td",27)(2374,"em")(2375,"strong"),e(2376,"(opcional)"),t()(),i(2377,"p"),e(2378,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(2379,"tr",19)(2380,"td",20)(2381,"div",21)(2382,"span",22),e(2383," or"),o(2384,"br"),t()()(),i(2385,"td",24)(2386,"code",28),e(2387,"string"),t()(),i(2388,"td",27)(2389,"em")(2390,"strong"),e(2391,"(opcional)"),t()(),i(2392,"p"),e(2393,"Palavra 'ou' que \xE9 exibida dentro do listbox."),t()()(),i(2394,"tr",19)(2395,"td",20)(2396,"div",21)(2397,"span",22),e(2398," searchAdvanced"),o(2399,"br"),t()()(),i(2400,"td",24)(2401,"code",28),e(2402,"string"),t()(),i(2403,"td",27)(2404,"em")(2405,"strong"),e(2406,"(opcional)"),t()(),i(2407,"p"),e(2408,"Texto exibido no listbox para fazer busca avan\xE7ada."),t()()(),i(2409,"tr",19)(2410,"td",20)(2411,"div",21)(2412,"span",22),e(2413," searchBy"),o(2414,"br"),t()()(),i(2415,"td",24)(2416,"code",28),e(2417,"string"),t()(),i(2418,"td",27)(2419,"em")(2420,"strong"),e(2421,"(opcional)"),t()(),i(2422,"p"),e(2423,"Texto exibido para indicar os campos filtrados."),t()()()()(),i(2424,"po-accordion-item",76)(2425,"h4",9)(2426,"code"),e(2427,"ThfLookupResponseApi"),t()(),i(2428,"div",10)(2429,"p"),e(2430,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(2431,"blockquote")(2432,"p"),e(2433,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(2434,"h4",15),e(2435,"Propriedades"),t(),i(2436,"table",16)(2437,"tr",17)(2438,"th",18),e(2439,"Nome"),t(),i(2440,"th",18),e(2441,"Tipo"),t(),i(2442,"th",18),e(2443,"Descri\xE7\xE3o"),t()(),i(2444,"tr",19)(2445,"td",20)(2446,"div",21)(2447,"span",22),e(2448," hasNext"),o(2449,"br"),t()()(),i(2450,"td",24)(2451,"code",29),e(2452,"boolean"),t()(),i(2453,"td",27)(2454,"p"),e(2455,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(2456,"tr",19)(2457,"td",20)(2458,"div",21)(2459,"span",22),e(2460," items"),o(2461,"br"),t()()(),i(2462,"td",24)(2463,"code",37),e(2464,"Array<any>"),t()(),i(2465,"td",27)(2466,"p"),e(2467,"Lista de itens retornados."),t()()()()()()(),w(2468,4),t(),i(2469,"po-tab",77)(2470,"po-container",5),w(2471,5),i(2472,"h3",78),e(2473,"Tokens customiz\xE1veis"),t(),i(2474,"p"),e(2475,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(2476,"blockquote")(2477,"p"),e(2478,"Para maiores informa\xE7\xF5es, acesse o guia "),i(2479,"a",79),e(2480,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(2481,"."),t()(),i(2482,"table")(2483,"thead")(2484,"tr")(2485,"th"),e(2486,"Propriedade"),t(),i(2487,"th"),e(2488,"Descri\xE7\xE3o"),t(),i(2489,"th"),e(2490,"Valor Padr\xE3o"),t()()(),i(2491,"tbody")(2492,"tr")(2493,"td")(2494,"strong"),e(2495,"Default Values"),t()(),o(2496,"td")(2497,"td"),t(),i(2498,"tr")(2499,"td")(2500,"code"),e(2501,"--font-family"),t()(),i(2502,"td"),e(2503,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(2504,"td")(2505,"code"),e(2506,"var(--font-family-theme)"),t()()(),i(2507,"tr")(2508,"td")(2509,"code"),e(2510,"--font-size"),t()(),i(2511,"td"),e(2512,"Tamanho da fonte"),t(),i(2513,"td")(2514,"code"),e(2515,"var(--font-size)"),t()()(),i(2516,"tr")(2517,"td")(2518,"code"),e(2519,"--text-color-placeholder"),t()(),i(2520,"td"),e(2521,"Cor do texto no placeholder"),t(),i(2522,"td")(2523,"code"),e(2524,"var(--color-neutral-light-30)"),t()()(),i(2525,"tr")(2526,"td")(2527,"code"),e(2528,"--color"),t()(),i(2529,"td"),e(2530,"Cor principal do campo"),t(),i(2531,"td")(2532,"code"),e(2533,"var(--color-neutral-dark-70)"),t()()(),i(2534,"tr")(2535,"td")(2536,"code"),e(2537,"--background"),t()(),i(2538,"td"),e(2539,"Cor de background"),t(),i(2540,"td")(2541,"code"),e(2542,"var(--color-neutral-light-00)"),t()()(),i(2543,"tr")(2544,"td")(2545,"code"),e(2546,"--text-color"),t()(),i(2547,"td"),e(2548,"Cor do texto"),t(),i(2549,"td")(2550,"code"),e(2551,"var(--color-neutral-mid-60)"),t()()(),i(2552,"tr")(2553,"td")(2554,"strong"),e(2555,"Hover"),t()(),o(2556,"td")(2557,"td"),t(),i(2558,"tr")(2559,"td")(2560,"code"),e(2561,"--color-hover"),t()(),i(2562,"td"),e(2563,"Cor principal do campo no estado hover"),t(),i(2564,"td")(2565,"code"),e(2566,"var(--color-brand-01-dark)"),t()()(),i(2567,"tr")(2568,"td")(2569,"code"),e(2570,"--background-hover"),t()(),i(2571,"td"),e(2572,"Cor de background no estado hover"),t(),i(2573,"td")(2574,"code"),e(2575,"var(--color-brand-01-lightest)"),t()()(),i(2576,"tr")(2577,"td")(2578,"strong"),e(2579,"Focused"),t()(),o(2580,"td")(2581,"td"),t(),i(2582,"tr")(2583,"td")(2584,"code"),e(2585,"--color-focused"),t()(),i(2586,"td"),e(2587,"Cor principal do campo no estado de focus"),t(),i(2588,"td")(2589,"code"),e(2590,"var(--color-action-default)"),t()()(),i(2591,"tr")(2592,"td")(2593,"code"),e(2594,"--outline-color-focused"),t()(),i(2595,"td"),e(2596,"Cor do outline no estado de focus"),t(),i(2597,"td")(2598,"code"),e(2599,"var(--color-action-focus)"),t()()(),i(2600,"tr")(2601,"td")(2602,"strong"),e(2603,"Disabled"),t()(),o(2604,"td")(2605,"td"),t(),i(2606,"tr")(2607,"td")(2608,"code"),e(2609,"--color-disabled"),t()(),i(2610,"td"),e(2611,"Cor principal do campo no estado disabled"),t(),i(2612,"td")(2613,"code"),e(2614,"var(--color-neutral-light-30)"),t()()(),i(2615,"tr")(2616,"td")(2617,"code"),e(2618,"--background-disabled"),t()(),i(2619,"td"),e(2620,"Cor de background no estado disabled"),t(),i(2621,"td")(2622,"code"),e(2623,"var(--color-neutral-light-05)"),t()()(),i(2624,"tr")(2625,"td")(2626,"code"),e(2627,"--text-color-disabled"),t()(),i(2628,"td"),e(2629,"Cor do texto no estado disabled"),t(),i(2630,"td")(2631,"code"),e(2632,"var(--color-neutral-dark-70)"),t()()()()()(),w(2633,6),t(),i(2634,"po-tab",80),w(2635,7),t()()())},dependencies:[z,$,v,_e,ie,N],encapsulation:2})}}return d})();var Qi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Bi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],At=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let y=E.querySelector(".po-tab-button-label");y&&y?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(Y))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup-data"]],viewQuery:function(r,n){if(r&1&&(D(N,5),D(z,5)),r&2){let l;A(l=_())&&(n.tabs=l.first),A(l=_())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Bi,decls:1763,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataColumn>"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupDataFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupDataLiterals"],["href","https://po-ui.io/documentation/po-theme"],["p-label","Interfaces"],["p-label","ThfLookupDataColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupDataFilterSearchSelect"],["p-label","ThfLookupDataFilter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupDataFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["p-label","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupDataKeysLabel"],["p-label","ThfLookupDataLiterals"],["p-label","ThfLookupDataResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["href","https://po-ui.io/documentation/po-search"],["href","https://thf.totvs.app/v19/documentation/thf-grid"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(ee(Qi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),w(4),t(),i(5,"po-tab",4),w(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupDataComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"Componente de busca com um grid que lista dados de um servi\xE7o."),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Lookup-Data"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
`),i(24,"code"),e(25,"import { ThfLookupDataComponent } from '@totvs/thf-components';"),t()()(),i(26,"div",11)(27,"h4",12),e(28,"Seletor"),t(),i(29,"pre",13),e(30,`<thf-lookup-grid
  (t-change)="EventEmitter"
  (t-change-model)="EventEmitter"
  t-columns="Array<ThfLookupDataColumn>"
  t-custom-items="Array<any>"
  t-disabled="boolean"
  t-field-label="string"
  t-field-value="string"
  t-filter-params="any"
  t-filter-search-select="Array<ThfLookupDataFilterSearchSelect>"
  t-filter-service="ThfLookupDataFilter | string"
  t-grid-properties="ThfLookupDataGridProperties"
  t-height="number"
  (t-focus)="EventEmitter"
  (t-keydown)="EventEmitter"
  t-keys-label="Array<ThfLookupDataKeysLabel>"
  t-literals="ThfLookupDataLiterals"
  t-multiple="boolean"
  (t-error)="EventEmitter"
  (t-selected)="EventEmitter"
  t-size="string" >
</thf-lookup-grid>
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48," (t-change)"),o(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"EventEmitter"),t()(),i(53,"td",25),e(54,"-"),t(),i(55,"td",26)(56,"em")(57,"strong"),e(58,"(opcional)"),t()(),i(59,"p"),e(60,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(61,"tr",19)(62,"td",20)(63,"div",21)(64,"span",22),e(65," (t-change-model)"),o(66,"br"),t()()(),i(67,"td",23)(68,"code",24),e(69,"EventEmitter"),t()(),i(70,"td",25),e(71,"-"),t(),i(72,"td",26)(73,"em")(74,"strong"),e(75,"(opcional)"),t()(),i(76,"p"),e(77,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(78,"tr",19)(79,"td",20)(80,"div",27)(81,"span",28),e(82,"t-columns"),o(83,"br"),t()()(),i(84,"td",23)(85,"code",29),e(86,"Array<ThfLookupDataColumn>"),t()(),i(87,"td",25),e(88,"-"),t(),i(89,"td",26)(90,"em")(91,"strong"),e(92,"(opcional)"),t()(),i(93,"p"),e(94,"Permite definir e configurar as colunas do grid por meio da interface "),i(95,"strong"),e(96,"ThfLookupDataColumn"),t(),e(97,"."),t(),i(98,"pre")(99,"code",30),e(100,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(101,"pre")(102,"code",31),e(103,`columns: Array<ThfLookupDataColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(104,"tr",19)(105,"td",20)(106,"div",27)(107,"span",28),e(108,"t-custom-items"),o(109,"br"),t()()(),i(110,"td",23)(111,"code",32),e(112,"Array<any>"),t()(),i(113,"td",25)(114,"p")(115,"code"),e(116,"[]"),t()()(),i(117,"td",26)(118,"em")(119,"strong"),e(120,"(opcional)"),t()(),i(121,"p"),e(122,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(123,"tr",19)(124,"td",20)(125,"div",27)(126,"span",28),e(127,"t-disabled"),o(128,"br"),t()()(),i(129,"td",23)(130,"code",33),e(131,"boolean"),t()(),i(132,"td",25)(133,"p")(134,"code"),e(135,"false"),t()()(),i(136,"td",26)(137,"em")(138,"strong"),e(139,"(opcional)"),t()(),i(140,"p"),e(141,'Desabilita a sele\xE7\xE3o na grid, o campo de busca e o bot\xE3o "Carregar mais resultados" do componente.'),t()()(),i(142,"tr",19)(143,"td",20)(144,"div",27)(145,"span",28),e(146,"t-field-label"),o(147,"br"),t()()(),i(148,"td",23)(149,"code",34),e(150,"string"),t()(),i(151,"td",25),e(152,"-"),t(),i(153,"td",26)(154,"p"),e(155,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o.
Propriedade obrigat\xF3ria.`),t()()(),i(156,"tr",19)(157,"td",20)(158,"div",27)(159,"span",28),e(160,"t-field-value"),o(161,"br"),t()()(),i(162,"td",23)(163,"code",34),e(164,"string"),t()(),i(165,"td",25),e(166,"-"),t(),i(167,"td",26)(168,"p"),e(169,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(170,"blockquote")(171,"p"),e(172,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(173,"tr",19)(174,"td",20)(175,"div",27)(176,"span",28),e(177,"t-filter-params"),o(178,"br"),t()()(),i(179,"td",23)(180,"code",35),e(181,"any"),t()(),i(182,"td",25),e(183,"-"),t(),i(184,"td",26)(185,"em")(186,"strong"),e(187,"(opcional)"),t()(),i(188,"p"),e(189,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(190,"strong"),e(191,"ThfLookupDataFilter"),t(),e(192,"."),t()()(),i(193,"tr",19)(194,"td",20)(195,"div",27)(196,"span",28),e(197,"t-filter-search-select"),o(198,"br"),t()()(),i(199,"td",23)(200,"code",36),e(201,"Array<ThfLookupDataFilterSearchSelect>"),t()(),i(202,"td",25),e(203,"-"),t(),i(204,"td",26)(205,"em")(206,"strong"),e(207,"(opcional)"),t()(),i(208,"p"),e(209,"Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro. Deve implementar a interface "),i(210,"strong"),e(211,"ThfLookupDataFilterSearchSelect"),t(),e(212,"."),t(),i(213,"pre")(214,"code",30),e(215,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(216,"pre")(217,"code",31),e(218,`filterSelect: Array<ThfLookupDataFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(219,"tr",19)(220,"td",20)(221,"div",27)(222,"span",28),e(223,"t-filter-service"),o(224,"br"),t()()(),i(225,"td",23)(226,"code",37),e(227,"ThfLookupDataFilter "),t(),i(228,"code",34),e(229," string"),t()(),i(230,"td",25),e(231,"-"),t(),i(232,"td",26)(233,"p"),e(234,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
`),i(235,"strong"),e(236,"ThfLookupDataFilter"),t(),e(237," ou uma URL."),t(),i(238,"p"),e(239,`Quando uma URL \xE9 definida:
Se houver filtro, \xE9 adicionado o par\xE2metro `),i(240,"code"),e(241,"filter"),t(),e(242," com o valor da busca:"),t(),i(243,"pre")(244,"code"),e(245,"url + ?page=1&pageSize=20&filter=Peter"),t()(),i(246,"p"),e(247,"Se houver ordena\xE7\xE3o, \xE9 adicionado o par\xE2metro "),i(248,"code"),e(249,"order"),t(),e(250,` com o valor da coluna.
Exemplo de busca com ordena\xE7\xE3o decrescente:`),t(),i(251,"pre")(252,"code"),e(253,"url + ?page=1&pageSize=20&filter=Peter&order=-name"),t()(),i(254,"p"),e(255,"Exemplo de busca com ordena\xE7\xE3o crescente:"),t(),i(256,"pre")(257,"code"),e(258,"url + ?page=1&pageSize=20&filter=Peter&order=name"),t()(),i(259,"p"),e(260,"Se definido "),i(261,"strong"),e(262,"t-filter-params"),t(),e(263,`, seu valor tamb\xE9m ser\xE1 concatenado.
Exemplo com `),i(264,"code"),e(265,"{ age: 23 }"),t(),e(266,":"),t(),i(267,"pre")(268,"code"),e(269,"url + ?page=1&pageSize=20&age=23&filter=Peter"),t()(),i(270,"p"),e(271,`Se o campo precisar iniciar com valores, os registros s\xE3o buscados das seguintes formas:
Exemplo com a sele\xE7\xE3o \xFAnica:`),t(),i(272,"pre")(273,"code"),e(274,`model = 1234;

GET url/1234`),t()(),i(275,"p"),e(276,"Exemplo com a sele\xE7\xE3o m\xFAltipla:"),t(),i(277,"pre")(278,"code"),e(279,`model = [1234, 5678]

GET url?\${fieldValue}=1234,5678`),t()(),i(280,"blockquote")(281,"p"),e(282,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(283,"a",38),e(284,"API do PO UI"),t(),e(285,` e utilizar
os valores definidos nas propriedades `),i(286,"strong"),e(287,"t-field-label"),t(),e(288," e "),i(289,"strong"),e(290,"t-field-value"),t(),e(291," para a constru\xE7\xE3o do "),i(292,"strong"),e(293,"thf-lookup"),t(),e(294,"."),t()(),i(295,"p"),e(296,"Caso a busca tenha ocorrido pressionando a tecla "),i(297,"em"),e(298,"TAB"),t(),e(299,`, o filtro ser\xE1 codificado atrav\xE9s da fun\xE7\xE3o
`),i(300,"a",39),e(301,"encodeURIComponent"),t(),e(302,`, e portanto concatenado
na URL da seguinte forma:`),t(),i(303,"pre")(304,"code"),e(305,"url/valor%20que%20se%20deseja%20filtrar"),t()(),i(306,"blockquote")(307,"p"),e(308,"Caso utilize um servi\xE7o "),i(309,"strong"),e(310,"ThfLookupDataFilter"),t(),e(311,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(312,"tr",19)(313,"td",20)(314,"div",27)(315,"span",28),e(316,"t-grid-properties"),o(317,"br"),t()()(),i(318,"td",23)(319,"code",40),e(320,"ThfLookupDataGridProperties"),t()(),i(321,"td",25),e(322,"-"),t(),i(323,"td",26)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),i(327,"p"),e(328,"Propriedades para configura\xE7\xE3o do "),i(329,"code"),e(330,"THF-Grid"),t(),e(331,"."),t(),i(332,"p"),e(333,"// Exemplo de uso:"),t(),i(334,"pre")(335,"code",30),e(336,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>`),t()(),i(337,"pre")(338,"code",31),e(339,`gridProperties: ThfLookupDataGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}`),t()()()(),i(340,"tr",19)(341,"td",20)(342,"div",27)(343,"span",28),e(344,"t-height"),o(345,"br"),t()()(),i(346,"td",23)(347,"code",41),e(348,"number"),t()(),i(349,"td",25),e(350,"-"),t(),i(351,"td",26)(352,"em")(353,"strong"),e(354,"(opcional)"),t()(),i(355,"p"),e(356,"Define a altura do componente em pixels."),t(),i(357,"blockquote")(358,"p"),e(359,"Recomenda-se definir um valor acima de 368px para garantir uma boa visualiza\xE7\xE3o do componente."),t()(),i(360,"blockquote")(361,"p"),e(362,'A altura m\xEDnima do componente corresponde \xE0 soma da altura do campo de busca com a altura do bot\xE3o "Carregar mais resultados".'),t()()()(),i(363,"tr",19)(364,"td",20)(365,"div",21)(366,"span",22),e(367," (t-focus)"),o(368,"br"),t()()(),i(369,"td",23)(370,"code",24),e(371,"EventEmitter"),t()(),i(372,"td",25),e(373,"-"),t(),i(374,"td",26)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),i(378,"p"),e(379,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(380,"p"),e(381,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(382,"tr",19)(383,"td",20)(384,"div",21)(385,"span",22),e(386," (t-keydown)"),o(387,"br"),t()()(),i(388,"td",23)(389,"code",24),e(390,"EventEmitter"),t()(),i(391,"td",25),e(392,"-"),t(),i(393,"td",26)(394,"em")(395,"strong"),e(396,"(opcional)"),t()(),i(397,"p"),e(398,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(399,"code"),e(400,"KeyboardEvent"),t(),e(401," com informa\xE7\xF5es sobre a tecla."),t()()(),i(402,"tr",19)(403,"td",20)(404,"div",27)(405,"span",28),e(406,"t-keys-label"),o(407,"br"),t()()(),i(408,"td",23)(409,"code",42),e(410,"Array<ThfLookupDataKeysLabel>"),t()(),i(411,"td",25),e(412,"-"),t(),i(413,"td",26)(414,"em")(415,"strong"),e(416,"(opcional)"),t()(),i(417,"p"),e(418,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no "),i(419,"code"),e(420,"accordion"),t(),e(421,"."),t(),i(422,"pre")(423,"code",30),e(424,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(425,"pre")(426,"code",31),e(427,`keysLabel: Array<ThfLookupDataKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(428,"pre")(429,"code"),e(430,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(431,"tr",19)(432,"td",20)(433,"div",27)(434,"span",28),e(435,"t-literals"),o(436,"br"),t()()(),i(437,"td",23)(438,"code",43),e(439,"ThfLookupDataLiterals"),t()(),i(440,"td",25),e(441,"-"),t(),i(442,"td",26)(443,"em")(444,"strong"),e(445,"(opcional)"),t()(),i(446,"p"),e(447,"Permite definir literais personalizados para o componente, conforme a interface "),i(448,"strong"),e(449,"ThfLookupDataLiterals"),t(),e(450,"."),t(),i(451,"pre")(452,"code",30),e(453,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(454,"pre")(455,"code",31),e(456,"customLiterals: ThfLookupDataLiterals = { noData: 'Nenhum dado encontrado' };"),t()()()(),i(457,"tr",19)(458,"td",20)(459,"div",27)(460,"span",28),e(461,"t-multiple"),o(462,"br"),t()()(),i(463,"td",23)(464,"code",33),e(465,"boolean"),t()(),i(466,"td",25)(467,"p")(468,"code"),e(469,"false"),t()()(),i(470,"td",26)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),i(474,"p"),e(475,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(476,"blockquote")(477,"p"),e(478,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(479,"code"),e(480,"[ 12345, 67890 ]"),t()()()()(),i(481,"tr",19)(482,"td",20)(483,"div",21)(484,"span",22),e(485," (t-error)"),o(486,"br"),t()()(),i(487,"td",23)(488,"code",24),e(489,"EventEmitter"),t()(),i(490,"td",25),e(491,"-"),t(),i(492,"td",26)(493,"em")(494,"strong"),e(495,"(opcional)"),t()(),i(496,"p"),e(497,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(498,"tr",19)(499,"td",20)(500,"div",21)(501,"span",22),e(502," (t-selected)"),o(503,"br"),t()()(),i(504,"td",23)(505,"code",24),e(506,"EventEmitter"),t()(),i(507,"td",25),e(508,"-"),t(),i(509,"td",26)(510,"em")(511,"strong"),e(512,"(opcional)"),t()(),i(513,"p"),e(514,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(515,"strong"),e(516,"t-field-value"),t(),e(517,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(518,"tr",19)(519,"td",20)(520,"div",27)(521,"span",28),e(522," t-size"),o(523,"br"),t()()(),i(524,"td",23)(525,"code",34),e(526,"string"),t()(),i(527,"td",25)(528,"p")(529,"code"),e(530,"medium"),t()()(),i(531,"td",26)(532,"em")(533,"strong"),e(534,"(opcional)"),t()(),i(535,"p"),e(536,"Define o tamanho do componente:"),t(),i(537,"ul")(538,"li")(539,"code"),e(540,"small"),t()(),i(541,"li")(542,"code"),e(543,"medium"),t()()(),i(544,"blockquote")(545,"p"),e(546,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(547,"code"),e(548,"medium"),t(),e(549,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(550,"a",44),e(551,"po-theme"),t(),e(552,"."),t()()()()()()()(),w(553,2),t(),i(554,"po-tab",45),w(555,3),i(556,"po-container",5)(557,"po-accordion",6)(558,"po-accordion-item",46)(559,"h4",9)(560,"code"),e(561,"ThfLookupDataColumn"),t()(),i(562,"div",10)(563,"p"),e(564,"Interface para configura\xE7\xE3o das colunas ("),i(565,"strong"),e(566,"t-columns"),t(),e(567,"). "),t()(),i(568,"h4",15),e(569,"Propriedades"),t(),i(570,"table",16)(571,"tr",17)(572,"th",18),e(573,"Nome"),t(),i(574,"th",18),e(575,"Tipo"),t(),i(576,"th",18),e(577,"Descri\xE7\xE3o"),t()(),i(578,"tr",19)(579,"td",20)(580,"div",27)(581,"span",28),e(582," boolean"),o(583,"br"),t()()(),i(584,"td",23)(585,"code",47),e(586,"PoTableBoolean"),t()(),i(587,"td",26)(588,"em")(589,"strong"),e(590,"(opcional)"),t()(),i(591,"p"),e(592,"Define um objeto do tipo "),i(593,"code"),e(594,"PoTableBoolean"),t(),e(595," para as colunas do tipo "),i(596,"em"),e(597,"boolean"),t(),e(598,". Por exemplo:"),t(),i(599,"pre")(600,"code"),e(601,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(602,"blockquote")(603,"p"),e(604,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(605,"em"),e(606,"boolean"),t(),e(607,`,
esta exibir\xE1 por padr\xE3o `),i(608,"code"),e(609,"Sim"),t(),e(610," e "),i(611,"code"),e(612,"N\xE3o"),t(),e(613," de acordo com os valores "),i(614,"em"),e(615,"booleanos"),t(),e(616,"."),t()()()(),i(617,"tr",19)(618,"td",20)(619,"div",27)(620,"span",28),e(621," booleanFalse"),o(622,"br"),t()()(),i(623,"td",23)(624,"code",34),e(625,"string"),t()(),i(626,"td",26)(627,"em")(628,"strong"),e(629,"(opcional)"),t()(),i(630,"p"),e(631,"Texto exibido quando o valor da coluna for "),i(632,"em"),e(633,"false"),t(),e(634,"."),t()()(),i(635,"tr",19)(636,"td",20)(637,"div",27)(638,"span",28),e(639," booleanTrue"),o(640,"br"),t()()(),i(641,"td",23)(642,"code",34),e(643,"string"),t()(),i(644,"td",26)(645,"em")(646,"strong"),e(647,"(opcional)"),t()(),i(648,"p"),e(649,"Texto exibido quando o valor da coluna for "),i(650,"em"),e(651,"true"),t(),e(652,"."),t()()(),i(653,"tr",19)(654,"td",20)(655,"div",27)(656,"span",28),e(657," disabled"),o(658,"br"),t()()(),i(659,"td",23)(660,"code",48),e(661,"Function"),t()(),i(662,"td",26)(663,"em")(664,"strong"),e(665,"(opcional)"),t()(),i(666,"p"),e(667,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(668,"em"),e(669,"link"),t(),e(670," e sua a\xE7\xE3o."),t(),i(671,"blockquote")(672,"p"),e(673,"Propriedade dispon\xEDvel nas colunas do tipo "),i(674,"code"),e(675,"link"),t(),e(676,"."),t()()()(),i(677,"tr",19)(678,"td",20)(679,"div",27)(680,"span",28),e(681," format"),o(682,"br"),t()()(),i(683,"td",23)(684,"code",34),e(685,"string"),t()(),i(686,"td",26)(687,"em")(688,"strong"),e(689,"(opcional)"),t()(),i(690,"p"),e(691,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(692,"ul")(693,"li"),e(694,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(695,"li"),e(696,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(697,"tr",19)(698,"td",20)(699,"div",27)(700,"span",28),e(701," label"),o(702,"br"),t()()(),i(703,"td",23)(704,"code",34),e(705,"string"),t()(),i(706,"td",26)(707,"em")(708,"strong"),e(709,"(opcional)"),t()(),i(710,"p"),e(711,"Texto para t\xEDtulo da coluna."),t(),i(712,"p"),e(713,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(714,"em"),e(715,"label"),t(),e(716," o valor da propriedade "),i(717,"em"),e(718,"property"),t(),e(719," com a primeira letra em mai\xFAsculo."),t()()(),i(720,"tr",19)(721,"td",20)(722,"div",27)(723,"span",28),e(724," labels"),o(725,"br"),t()()(),i(726,"td",23)(727,"code",49),e(728,"Array<PoTableColumnLabel>"),t()(),i(729,"td",26)(730,"em")(731,"strong"),e(732,"(opcional)"),t()(),i(733,"p"),e(734,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(735,"code"),e(736,"PoTableColumnLabel"),t(),e(737," na qual devem ser definidas os labels. Por exemplo:"),t(),i(738,"pre")(739,"code"),e(740,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(741,"tr",19)(742,"td",20)(743,"div",27)(744,"span",28),e(745," locale"),o(746,"br"),t()()(),i(747,"td",23)(748,"code",34),e(749,"string"),t()(),i(750,"td",26)(751,"em")(752,"strong"),e(753,"(opcional)"),t()(),i(754,"p"),e(755,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(756,"a",50)(757,"code"),e(758,"I18n"),t()()(),i(759,"p"),e(760,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(761,"pre")(762,"code"),e(763,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(764,"blockquote")(765,"p"),e(766,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(767,"p"),e(768,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(769,"p"),e(770,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(771,"a",50)(772,"code"),e(773,"I18n"),t()()()(),i(774,"p"),e(775,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(776,"pre")(777,"code"),e(778,`const i18nConfig: PoI18nConfig = {
  default: {
    language: 'ru',
    context: 'general',
    cache: true
  },
  contexts: {}
};

@NgModule({
  imports: [
    ...
    PoI18nModule.config(i18nConfig),
    ...
  ],
  ...
})
export class AppModule {}`),t()(),i(779,"blockquote")(780,"p"),e(781,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(782,"code"),e(783,"number"),t(),e(784," e "),i(785,"code"),e(786,"currency"),t(),e(787,"."),t()()()(),i(788,"tr",19)(789,"td",20)(790,"div",27)(791,"span",28),e(792," property"),o(793,"br"),t()()(),i(794,"td",23)(795,"code",34),e(796,"string"),t()(),i(797,"td",26)(798,"em")(799,"strong"),e(800,"(opcional)"),t()(),i(801,"p"),e(802,"Nome identificador da coluna."),t()()(),i(803,"tr",19)(804,"td",20)(805,"div",27)(806,"span",28),e(807," type"),o(808,"br"),t()()(),i(809,"td",23)(810,"code",34),e(811,"string"),t()(),i(812,"td",26)(813,"em")(814,"strong"),e(815,"(opcional)"),t()(),i(816,"p"),e(817,"Tipo da coluna:"),t(),i(818,"ul")(819,"li"),e(820,"string (padr\xE3o): textos"),t(),i(821,"li"),e(822,"number: valores num\xE9ricos"),t(),i(823,"li"),e(824,"date: data"),t(),i(825,"li"),e(826,"currency: valores monet\xE1rios"),t(),i(827,"li"),e(828,"dateTime: data e hora"),t()()()(),i(829,"tr",19)(830,"td",20)(831,"div",27)(832,"span",28),e(833," visible"),o(834,"br"),t()()(),i(835,"td",23)(836,"code",33),e(837,"boolean"),t()(),i(838,"td",26)(839,"em")(840,"strong"),e(841,"(opcional)"),t()(),i(842,"p"),e(843,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(844,"strong"),e(845,"gerenciador de colunas"),t(),e(846,"."),t(),i(847,"blockquote")(848,"p"),e(849,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(850,"code"),e(851,"p-max-columns"),t(),e(852,"."),t()()()(),i(853,"tr",19)(854,"td",20)(855,"div",27)(856,"span",28),e(857," width"),o(858,"br"),t()()(),i(859,"td",23)(860,"code",34),e(861,"string"),t()(),i(862,"td",26)(863,"em")(864,"strong"),e(865,"(opcional)"),t()(),i(866,"p"),e(867,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(868,"po-accordion-item",51)(869,"h4",9)(870,"code"),e(871,"ThfLookupDataFilterSearchSelect"),t()(),i(872,"div",10)(873,"p"),e(874,"Interface que define as colunas para busca ("),i(875,"strong"),e(876,"t-filter-search-select"),t(),e(877,") "),t()(),i(878,"h4",15),e(879,"Propriedades"),t(),i(880,"table",16)(881,"tr",17)(882,"th",18),e(883,"Nome"),t(),i(884,"th",18),e(885,"Tipo"),t(),i(886,"th",18),e(887,"Descri\xE7\xE3o"),t()(),i(888,"tr",19)(889,"td",20)(890,"div",27)(891,"span",28),e(892," label"),o(893,"br"),t()()(),i(894,"td",23)(895,"code",34),e(896,"string"),t()(),i(897,"td",26)(898,"p"),e(899,"R\xF3tulo da coluna"),t()()(),i(900,"tr",19)(901,"td",20)(902,"div",27)(903,"span",28),e(904," value"),o(905,"br"),t()()(),i(906,"td",23)(907,"code",34),e(908,"string"),t()(),i(909,"td",26)(910,"p"),e(911,"Coluna"),t()()()()(),i(912,"po-accordion-item",52)(913,"h4",9)(914,"code"),e(915,"ThfLookupDataFilter"),t()(),i(916,"div",10)(917,"p"),e(918,"Interface para definir o tipo de busca via servi\xE7o. "),t()(),i(919,"table",53)(920,"tr",19)(921,"th",54)(922,"div",27)(923,"h4")(924,"span",28),e(925," fetchItems "),t()()()()(),i(926,"tr",26)(927,"td",26)(928,"p"),e(929,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(930,"em"),e(931,"Observable"),t(),e(932," com a resposta da API no formato { items: [] }."),t()()()(),i(933,"h5")(934,"b"),e(935,"Par\xE2metros"),t()(),i(936,"table",16)(937,"tr",17)(938,"th",18),e(939,"Nome"),t(),i(940,"th",18),e(941,"Tipo"),t(),i(942,"th",18),e(943,"Descri\xE7\xE3o"),t()(),i(944,"tr",19)(945,"td",20),e(946," query"),t(),i(947,"td",23)(948,"code",55),e(949," string "),t()(),i(950,"td",26)(951,"p"),e(952,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(953,"tr",19)(954,"td",20),e(955," filterParams"),t(),i(956,"td",23)(957,"code",55),e(958," any "),t()(),i(959,"td",26)(960,"p"),e(961,"Valor informado atrav\xE9s da propriedade "),i(962,"strong"),e(963,"t-filter-params"),t(),e(964,"."),t()()()(),o(965,"br"),i(966,"table",53)(967,"tr",19)(968,"th",54)(969,"div",27)(970,"h4")(971,"span",28),e(972," getFilteredItems "),t()()()()(),i(973,"tr",26)(974,"td",26)(975,"p"),e(976,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(977,"em"),e(978,"Observable"),t(),e(979," com a resposta da API no formato da interface "),i(980,"strong"),e(981,"ThfLookupResponseApi"),t(),e(982,"."),t()()()(),i(983,"h5")(984,"b"),e(985,"Par\xE2metros"),t()(),i(986,"table",16)(987,"tr",17)(988,"th",18),e(989,"Nome"),t(),i(990,"th",18),e(991,"Tipo"),t(),i(992,"th",18),e(993,"Descri\xE7\xE3o"),t()(),i(994,"tr",19)(995,"td",20),e(996," params"),t(),i(997,"td",23)(998,"code",55),e(999," ThfLookupFilteredItemsParams "),t()(),i(1e3,"td",26)(1001,"p"),e(1002,"Objeto enviado por par\xE2metro que implementa a interface "),i(1003,"strong"),e(1004,"ThfLookupFilteredItemsParams"),t(),e(1005,"."),t()()()(),o(1006,"br"),i(1007,"table",53)(1008,"tr",19)(1009,"th",54)(1010,"div",27)(1011,"h4")(1012,"span",28),e(1013," getObjectByValue "),t()()()()(),i(1014,"tr",26)(1015,"td",26)(1016,"p"),e(1017,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1018,"p"),e(1019,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1020,"code"),e(1021,"value"),t(),e(1022,` ser\xE1 enviado como uma lista de valores
e o `),i(1023,"em"),e(1024,"Observable"),t(),e(1025," deve retornar uma lista de objetos."),t()()()(),i(1026,"h5")(1027,"b"),e(1028,"Par\xE2metros"),t()(),i(1029,"table",16)(1030,"tr",17)(1031,"th",18),e(1032,"Nome"),t(),i(1033,"th",18),e(1034,"Tipo"),t(),i(1035,"th",18),e(1036,"Descri\xE7\xE3o"),t()(),i(1037,"tr",19)(1038,"td",20),e(1039," value"),t(),i(1040,"td",23)(1041,"code",34),e(1042," string "),t(),i(1043,"code",32),e(1044," Array<any> "),t()(),i(1045,"td",26)(1046,"p"),e(1047,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1048,"tr",19)(1049,"td",20),e(1050," filterParams"),t(),i(1051,"td",23)(1052,"code",55),e(1053," any "),t()(),i(1054,"td",26)(1055,"p"),e(1056,"Valor informado atrav\xE9s da propriedade "),i(1057,"strong"),e(1058,"t-filter-params"),t(),e(1059,"."),t()()()(),o(1060,"br"),t(),i(1061,"po-accordion-item",56)(1062,"h4",9)(1063,"code"),e(1064,"ThfLookupDataFilteredItemsParams"),t()(),i(1065,"div",10)(1066,"p"),e(1067,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1068,"strong"),e(1069,"getFilteredItems"),t(),e(1070,". "),t()(),i(1071,"h4",15),e(1072,"Propriedades"),t(),i(1073,"table",16)(1074,"tr",17)(1075,"th",18),e(1076,"Nome"),t(),i(1077,"th",18),e(1078,"Tipo"),t(),i(1079,"th",18),e(1080,"Descri\xE7\xE3o"),t()(),i(1081,"tr",19)(1082,"td",20)(1083,"div",27)(1084,"span",28),e(1085," filter"),o(1086,"br"),t()()(),i(1087,"td",23)(1088,"code",57),e(1089,`{ [key: string]: any;
}`),t()(),i(1090,"td",26)(1091,"em")(1092,"strong"),e(1093,"(opcional)"),t()(),i(1094,"p"),e(1095,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1096,"tr",19)(1097,"td",20)(1098,"div",27)(1099,"span",28),e(1100," filterParams"),o(1101,"br"),t()()(),i(1102,"td",23)(1103,"code",35),e(1104,"any"),t()(),i(1105,"td",26)(1106,"em")(1107,"strong"),e(1108,"(opcional)"),t()(),i(1109,"p"),e(1110,"Valor informado atrav\xE9s da propriedade "),i(1111,"code"),e(1112,"t-filter-params"),t(),e(1113,"."),t()()(),i(1114,"tr",19)(1115,"td",20)(1116,"div",27)(1117,"span",28),e(1118," order"),o(1119,"br"),t()()(),i(1120,"td",23)(1121,"code",34),e(1122,"string"),t()(),i(1123,"td",26)(1124,"em")(1125,"strong"),e(1126,"(opcional)"),t()(),i(1127,"p"),e(1128,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1129,"ul")(1130,"li"),e(1131,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1132,"code"),e(1133,"-<colunaOrdenada>"),t(),e(1134,", por exemplo "),i(1135,"code"),e(1136,"-name"),t(),e(1137,"."),t(),i(1138,"li"),e(1139,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1140,"code"),e(1141,"<colunaOrdenada>"),t(),e(1142,", por exemplo "),i(1143,"code"),e(1144,"name"),t(),e(1145,"."),t()()()(),i(1146,"tr",19)(1147,"td",20)(1148,"div",27)(1149,"span",28),e(1150," page"),o(1151,"br"),t()()(),i(1152,"td",23)(1153,"code",41),e(1154,"number"),t()(),i(1155,"td",26)(1156,"em")(1157,"strong"),e(1158,"(opcional)"),t()(),i(1159,"p"),e(1160,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1161,"tr",19)(1162,"td",20)(1163,"div",27)(1164,"span",28),e(1165," pageSize"),o(1166,"br"),t()()(),i(1167,"td",23)(1168,"code",41),e(1169,"number"),t()(),i(1170,"td",26)(1171,"em")(1172,"strong"),e(1173,"(opcional)"),t()(),i(1174,"p"),e(1175,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1176,"po-accordion-item",58)(1177,"h4",9)(1178,"code"),e(1179,"ThfLookupDataGridProperties"),t()(),i(1180,"div",10)(1181,"p"),e(1182,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup. "),t()(),i(1183,"h4",15),e(1184,"Propriedades"),t(),i(1185,"table",16)(1186,"tr",17)(1187,"th",18),e(1188,"Nome"),t(),i(1189,"th",18),e(1190,"Tipo"),t(),i(1191,"th",18),e(1192,"Descri\xE7\xE3o"),t()(),i(1193,"tr",19)(1194,"td",20)(1195,"div",27)(1196,"span",28),e(1197," autoSize"),o(1198,"br"),t()()(),i(1199,"td",23)(1200,"code",33),e(1201,"boolean"),t()(),i(1202,"td",26)(1203,"em")(1204,"strong"),e(1205,"(opcional)"),t()(),i(1206,"p"),e(1207,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1208,"strong"),e(1209,"resizable"),t(),e(1210," esteja habilitada."),t(),i(1211,"blockquote")(1212,"p"),e(1213,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1214,"tr",19)(1215,"td",20)(1216,"div",27)(1217,"span",28),e(1218," autoSizeOnScroll"),o(1219,"br"),t()()(),i(1220,"td",23)(1221,"code",33),e(1222,"boolean"),t()(),i(1223,"td",26)(1224,"em")(1225,"strong"),e(1226,"(opcional)"),t()(),i(1227,"p"),e(1228,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1229,"p"),e(1230,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1231,"p"),e(1232,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1233,"code"),e(1234,"t-page-size-virtual"),t(),e(1235," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1236,"blockquote")(1237,"p")(1238,"strong"),e(1239,"Pr\xE9-requisitos"),t(),e(1240,": Requer que as propriedades "),i(1241,"code"),e(1242,"autoSize"),t(),e(1243,", "),i(1244,"code"),e(1245,"resizable"),t(),e(1246,`
e `),i(1247,"code"),e(1248,"virtualScroll"),t(),e(1249," estejam habilitadas."),t()(),i(1250,"blockquote")(1251,"p")(1252,"strong"),e(1253,"Incompatibilidade"),t(),e(1254,": N\xE3o funciona com "),i(1255,"code"),e(1256,"t-grid-row-actions"),t(),e(1257," habilitado;"),t()(),i(1258,"p")(1259,"strong"),e(1260,"Exemplo de uso:"),t()(),i(1261,"pre")(1262,"code",30),e(1263,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(1264,"tr",19)(1265,"td",20)(1266,"div",27)(1267,"span",28),e(1268," draggable"),o(1269,"br"),t()()(),i(1270,"td",23)(1271,"code",33),e(1272,"boolean"),t()(),i(1273,"td",26)(1274,"em")(1275,"strong"),e(1276,"(opcional)"),t()(),i(1277,"p"),e(1278,"Habilita o Drag and Drop nas colunas."),t()()(),i(1279,"tr",19)(1280,"td",20)(1281,"div",27)(1282,"span",28),e(1283," group"),o(1284,"br"),t()()(),i(1285,"td",23)(1286,"code",59),e(1287,"Array<string>"),t()(),i(1288,"td",26)(1289,"em")(1290,"strong"),e(1291,"(opcional)"),t()(),i(1292,"p"),e(1293,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1294,"strong"),e(1295,"groupable"),t(),e(1296," esteja habilitada."),t()()(),i(1297,"tr",19)(1298,"td",20)(1299,"div",27)(1300,"span",28),e(1301," groupable"),o(1302,"br"),t()()(),i(1303,"td",23)(1304,"code",33),e(1305,"boolean "),t(),i(1306,"code",60),e(1307," GroupableSettings"),t()(),i(1308,"td",26)(1309,"em")(1310,"strong"),e(1311,"(opcional)"),t()(),i(1312,"p"),e(1313,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1314,"tr",19)(1315,"td",20)(1316,"div",27)(1317,"span",28),e(1318," hideSelectAll"),o(1319,"br"),t()()(),i(1320,"td",23)(1321,"code",33),e(1322,"boolean"),t()(),i(1323,"td",26)(1324,"em")(1325,"strong"),e(1326,"(opcional)"),t()(),i(1327,"p"),e(1328,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1329,"tr",19)(1330,"td",20)(1331,"div",27)(1332,"span",28),e(1333," resizable"),o(1334,"br"),t()()(),i(1335,"td",23)(1336,"code",33),e(1337,"boolean"),t()(),i(1338,"td",26)(1339,"em")(1340,"strong"),e(1341,"(opcional)"),t()(),i(1342,"p"),e(1343,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1344,"tr",19)(1345,"td",20)(1346,"div",27)(1347,"span",28),e(1348," selectableEntireLine"),o(1349,"br"),t()()(),i(1350,"td",23)(1351,"code",33),e(1352,"boolean"),t()(),i(1353,"td",26)(1354,"em")(1355,"strong"),e(1356,"(opcional)"),t()(),i(1357,"p"),e(1358,"Permite selecionar o item ao clicar na linha."),t()()(),i(1359,"tr",19)(1360,"td",20)(1361,"div",27)(1362,"span",28),e(1363," showDraggableIcon"),o(1364,"br"),t()()(),i(1365,"td",23)(1366,"code",33),e(1367,"boolean"),t()(),i(1368,"td",26)(1369,"em")(1370,"strong"),e(1371,"(opcional)"),t()(),i(1372,"p"),e(1373,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1374,"tr",19)(1375,"td",20)(1376,"div",27)(1377,"span",28),e(1378," showMoreDisabled"),o(1379,"br"),t()()(),i(1380,"td",23)(1381,"code",33),e(1382,"boolean"),t()(),i(1383,"td",26)(1384,"em")(1385,"strong"),e(1386,"(opcional)"),t()(),i(1387,"p"),e(1388,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1389,"tr",19)(1390,"td",20)(1391,"div",27)(1392,"span",28),e(1393," showMoreVisible"),o(1394,"br"),t()()(),i(1395,"td",23)(1396,"code",33),e(1397,"boolean"),t()(),i(1398,"td",26)(1399,"em")(1400,"strong"),e(1401,"(opcional)"),t()(),i(1402,"p"),e(1403,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1404,"strong"),e(1405,"pageable"),t(),e(1406," esteja habilitada."),t(),i(1407,"blockquote")(1408,"p"),e(1409,"Caso seja utilizado em conjunto com "),i(1410,"strong"),e(1411,"showMoreDisabled"),t(),e(1412,", a propriedade "),i(1413,"strong"),e(1414,"showMoreVisible"),t(),e(1415," ter\xE1 prioridade."),t()()()(),i(1416,"tr",19)(1417,"td",20)(1418,"div",27)(1419,"span",28),e(1420," sort"),o(1421,"br"),t()()(),i(1422,"td",23)(1423,"code",61),e(1424,"Array<{ field: string; dir: 'asc' "),t(),i(1425,"code",62),e(1426,` 'desc';
}>`),t()(),i(1427,"td",26)(1428,"em")(1429,"strong"),e(1430,"(opcional)"),t()(),i(1431,"p"),e(1432,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1433,"pre")(1434,"code",31),e(1435,"sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(1436,"tr",19)(1437,"td",20)(1438,"div",27)(1439,"span",28),e(1440," sortable"),o(1441,"br"),t()()(),i(1442,"td",23)(1443,"code",33),e(1444,"boolean"),t()(),i(1445,"td",26)(1446,"em")(1447,"strong"),e(1448,"(opcional)"),t()(),i(1449,"p"),e(1450,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1451,"tr",19)(1452,"td",20)(1453,"div",27)(1454,"span",28),e(1455," spacing"),o(1456,"br"),t()()(),i(1457,"td",23)(1458,"code",63),e(1459,"'extraSmall' "),t(),i(1460,"code",64),e(1461," 'small' "),t(),i(1462,"code",65),e(1463," 'medium' "),t(),i(1464,"code",66),e(1465," 'large'"),t()(),i(1466,"td",26)(1467,"em")(1468,"strong"),e(1469,"(opcional)"),t()(),i(1470,"p"),e(1471,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(1472,"strong"),e(1473,"ThfColumnSpacing"),t(),e(1474,"."),t()()(),i(1475,"tr",19)(1476,"td",20)(1477,"div",27)(1478,"span",28),e(1479," striped"),o(1480,"br"),t()()(),i(1481,"td",23)(1482,"code",33),e(1483,"boolean"),t()(),i(1484,"td",26)(1485,"em")(1486,"strong"),e(1487,"(opcional)"),t()(),i(1488,"p"),e(1489,"Define o estilo listrado no grid (striped)."),t()()(),i(1490,"tr",19)(1491,"td",20)(1492,"div",27)(1493,"span",28),e(1494," virtualScroll"),o(1495,"br"),t()()(),i(1496,"td",23)(1497,"code",33),e(1498,"boolean"),t()(),i(1499,"td",26)(1500,"em")(1501,"strong"),e(1502,"(opcional)"),t()(),i(1503,"p"),e(1504,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(1505,"po-accordion-item",67)(1506,"h4",9)(1507,"code"),e(1508,"ThfLookupDataKeysLabel"),t()(),i(1509,"div",10)(1510,"p"),e(1511,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(1512,"strong"),e(1513,"t-keys-label"),t(),e(1514,"). "),t()(),i(1515,"h4",15),e(1516,"Propriedades"),t(),i(1517,"table",16)(1518,"tr",17)(1519,"th",18),e(1520,"Nome"),t(),i(1521,"th",18),e(1522,"Tipo"),t(),i(1523,"th",18),e(1524,"Descri\xE7\xE3o"),t()(),i(1525,"tr",19)(1526,"td",20)(1527,"div",27)(1528,"span",28),e(1529," label"),o(1530,"br"),t()()(),i(1531,"td",23)(1532,"code",34),e(1533,"string"),t()(),i(1534,"td",26)(1535,"p"),e(1536,"Texto exibido"),t()()(),i(1537,"tr",19)(1538,"td",20)(1539,"div",27)(1540,"span",28),e(1541," value"),o(1542,"br"),t()()(),i(1543,"td",23)(1544,"code",34),e(1545,"string"),t()(),i(1546,"td",26)(1547,"p"),e(1548,"Coluna"),t()()()()(),i(1549,"po-accordion-item",68)(1550,"h4",9)(1551,"code"),e(1552,"ThfLookupDataLiterals"),t()(),i(1553,"div",10)(1554,"p"),e(1555,"Interface para customizar literais ("),i(1556,"strong"),e(1557,"t-literals"),t(),e(1558,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(1559,"h4",15),e(1560,"Propriedades"),t(),i(1561,"table",16)(1562,"tr",17)(1563,"th",18),e(1564,"Nome"),t(),i(1565,"th",18),e(1566,"Tipo"),t(),i(1567,"th",18),e(1568,"Descri\xE7\xE3o"),t()(),i(1569,"tr",19)(1570,"td",20)(1571,"div",27)(1572,"span",28),e(1573," loadMoreData"),o(1574,"br"),t()()(),i(1575,"td",23)(1576,"code",34),e(1577,"string"),t()(),i(1578,"td",26)(1579,"em")(1580,"strong"),e(1581,"(opcional)"),t()(),i(1582,"p"),e(1583,"Label do "),i(1584,"code"),e(1585,"button"),t(),e(1586," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(1587,"tr",19)(1588,"td",20)(1589,"div",27)(1590,"span",28),e(1591," loadingData"),o(1592,"br"),t()()(),i(1593,"td",23)(1594,"code",34),e(1595,"string"),t()(),i(1596,"td",26)(1597,"em")(1598,"strong"),e(1599,"(opcional)"),t()(),i(1600,"p"),e(1601,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(1602,"tr",19)(1603,"td",20)(1604,"div",27)(1605,"span",28),e(1606," multipleItems"),o(1607,"br"),t()()(),i(1608,"td",23)(1609,"code",34),e(1610,"string"),t()(),i(1611,"td",26)(1612,"em")(1613,"strong"),e(1614,"(opcional)"),t()(),i(1615,"p"),e(1616,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(1617,"tr",19)(1618,"td",20)(1619,"div",27)(1620,"span",28),e(1621," noColumns"),o(1622,"br"),t()()(),i(1623,"td",23)(1624,"code",34),e(1625,"string"),t()(),i(1626,"td",26)(1627,"em")(1628,"strong"),e(1629,"(opcional)"),t()(),i(1630,"p"),e(1631,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(1632,"tr",19)(1633,"td",20)(1634,"div",27)(1635,"span",28),e(1636," noData"),o(1637,"br"),t()()(),i(1638,"td",23)(1639,"code",34),e(1640,"string"),t()(),i(1641,"td",26)(1642,"em")(1643,"strong"),e(1644,"(opcional)"),t()(),i(1645,"p"),e(1646,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(1647,"tr",19)(1648,"td",20)(1649,"div",27)(1650,"span",28),e(1651," oneItem"),o(1652,"br"),t()()(),i(1653,"td",23)(1654,"code",34),e(1655,"string"),t()(),i(1656,"td",26)(1657,"em")(1658,"strong"),e(1659,"(opcional)"),t()(),i(1660,"p"),e(1661,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(1662,"tr",19)(1663,"td",20)(1664,"div",27)(1665,"span",28),e(1666," placeholder"),o(1667,"br"),t()()(),i(1668,"td",23)(1669,"code",34),e(1670,"string"),t()(),i(1671,"td",26)(1672,"em")(1673,"strong"),e(1674,"(opcional)"),t()(),i(1675,"p"),e(1676,"Texto exibido no placeholder do input."),t()()()()(),i(1677,"po-accordion-item",69)(1678,"h4",9)(1679,"code"),e(1680,"ThfLookupDataResponseApi"),t()(),i(1681,"div",10)(1682,"p"),e(1683,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(1684,"blockquote")(1685,"p"),e(1686,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(1687,"h4",15),e(1688,"Propriedades"),t(),i(1689,"table",16)(1690,"tr",17)(1691,"th",18),e(1692,"Nome"),t(),i(1693,"th",18),e(1694,"Tipo"),t(),i(1695,"th",18),e(1696,"Descri\xE7\xE3o"),t()(),i(1697,"tr",19)(1698,"td",20)(1699,"div",27)(1700,"span",28),e(1701," hasNext"),o(1702,"br"),t()()(),i(1703,"td",23)(1704,"code",33),e(1705,"boolean"),t()(),i(1706,"td",26)(1707,"p"),e(1708,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(1709,"tr",19)(1710,"td",20)(1711,"div",27)(1712,"span",28),e(1713," items"),o(1714,"br"),t()()(),i(1715,"td",23)(1716,"code",32),e(1717,"Array<any>"),t()(),i(1718,"td",26)(1719,"p"),e(1720,"Lista de itens retornados."),t()()()()()()(),w(1721,4),t(),i(1722,"po-tab",70)(1723,"po-container",5),w(1724,5),i(1725,"h3",71),e(1726,"Tokens customiz\xE1veis"),t(),i(1727,"p"),e(1728,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(1729,"blockquote")(1730,"p"),e(1731,"Para maiores informa\xE7\xF5es, acesse o guia "),i(1732,"a",72),e(1733,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(1734,"."),t()(),i(1735,"p"),e(1736,"O componente "),i(1737,"strong"),e(1738,"THF-Lookup-Data"),t(),e(1739," \xE9 composto pelos componentes "),i(1740,"strong"),e(1741,"PO-Search"),t(),e(1742," e "),i(1743,"strong"),e(1744,"THF-Grid"),t(),e(1745,"."),t(),i(1746,"p"),e(1747,"Verifique os tokens dispon\xEDveis para customiza\xE7\xE3o em:"),t(),i(1748,"p")(1749,"strong"),e(1750,"- PO-Search:"),t(),e(1751," \xA0"),i(1752,"a",73),e(1753,"https://po-ui.io/documentation/po-search"),t()(),i(1754,"p")(1755,"strong"),e(1756,"- THF-Grid:"),t(),e(1757," \xA0"),i(1758,"a",74),e(1759,"https://thf.totvs.app/v19/documentation/thf-grid"),t()()(),w(1760,6),t(),i(1761,"po-tab",75),w(1762,7),t()()())},dependencies:[z,$,v,ie,N],encapsulation:2})}}return d})();var Wi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","labs",""]]],Ui=["[overview]","[especificacao-before]","[especificacao-after]","[labs]"],_t=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let y=E.querySelector(".po-tab-button-label");y&&y?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(Y))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter-pane"]],viewQuery:function(r,n){if(r&1&&(D(N,5),D(z,5)),r&2){let l;A(l=_())&&(n.tabs=l.first),A(l=_())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Ui,decls:140,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(ee(Wi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),w(4),t(),i(5,"po-tab",4),w(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterPaneComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter-pane"),t(),e(21," representa uma das se\xE7\xF5es que comp\xF5em o "),i(22,"code"),e(23,"thf-splitter"),t(),e(24,"."),t(),i(25,"p"),e(26,"Devem ser utilizados "),i(27,"strong"),e(28,"exatamente dois panes"),t(),e(29," por splitter; panes adicionais ser\xE3o ignorados."),t(),i(30,"p"),e(31,"Cada "),i(32,"code"),e(33,"pane"),t(),e(34," se ajusta dinamicamente conforme o redimensionamento."),t(),i(35,"pre")(36,"code",11),e(37,`<thf-splitter>
 <thf-splitter-pane [(t-size)]="50%">
   Conte\xFAdo do painel
 </thf-splitter-pane>
 ...
</thf-splitter>`),t()()(),i(38,"div",12)(39,"h4",13),e(40,"Seletor"),t(),i(41,"pre",14),e(42,`<thf-splitter-pane
  t-scrollable="boolean, any"
  t-size="string"
  (t-size-change)="EventEmitter" >
</thf-splitter-pane>
`),t()()(),i(43,"po-accordion-item",15)(44,"h4",16),e(45,"Propriedades"),t(),i(46,"table",17)(47,"tr",18)(48,"th",19),e(49,"Nome"),t(),i(50,"th",19),e(51,"Tipo"),t(),i(52,"th",19),e(53,"Padr\xE3o"),t(),i(54,"th",19),e(55,"Descri\xE7\xE3o"),t()(),i(56,"tr",20)(57,"td",21)(58,"div",22)(59,"span",23),e(60," t-scrollable"),o(61,"br"),t()()(),i(62,"td",24)(63,"code",25),e(64,"boolean, any"),t()(),i(65,"td",26)(66,"p"),e(67,"false"),t()(),i(68,"td",27)(69,"p"),e(70,`Habilita a rolagem horizontal/vertical do pane quando o conte\xFAdo exceder o valor de tamanho definido. A rolagem \xE9 aplicada
somente se o tamanho m\xEDnimo for atingido durante o redimensionamento.`),t()()(),i(71,"tr",20)(72,"td",21)(73,"div",22)(74,"span",23),e(75," t-size"),o(76,"br"),t()()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"p"),e(84,"Define o tamanho inicial do pane (% ou px), respeitando os limites entre "),i(85,"strong"),e(86,"30% e 70%"),t(),e(87,` do tamanho total
do splitter.`),t(),i(88,"p"),e(89,"Suporta two-way binding com "),i(90,"code"),e(91,"t-size-change"),t(),e(92,"."),t(),i(93,"blockquote")(94,"p"),e(95,"Apenas um pane pode definir "),i(96,"code"),e(97,"t-size"),t(),e(98,`; caso contr\xE1rio, ser\xE1 exibido um erro no console.
Quando o valor definido em `),i(99,"code"),e(100,"px"),t(),e(101,` estiver fora dos limites percentuais, ao realizar o redimensionamento os limites de 30% a 70% ser\xE3o aplicados automaticamente.
O uso de `),i(102,"code"),e(103,"px"),t(),e(104," \xE9 \xFAtil para cen\xE1rios onde o "),i(105,"code"),e(106,"thf-splitter"),t(),e(107," est\xE1 com "),i(108,"code"),e(109,"t-disabled"),t(),e(110," habilitado, pois o tamanho fixo n\xE3o ser\xE1 alterado."),t()(),i(111,"pre")(112,"code",11),e(113,`<!-- One-way -->
<thf-splitter-pane [t-size]="'50%'">

<!-- Two-way -->
<thf-splitter-pane [(t-size)]="variavel">`),t()()()(),i(114,"tr",20)(115,"td",21)(116,"div",29)(117,"span",30),e(118," (t-size-change)"),o(119,"br"),t()()(),i(120,"td",24)(121,"code",31),e(122,"EventEmitter"),t()(),i(123,"td",26),e(124,"-"),t(),i(125,"td",27)(126,"p"),e(127,"Evento emitido quando o tamanho do pane que possui "),i(128,"code"),e(129,"t-size"),t(),e(130," \xE9 modificada. Caso nenhum pane possua "),i(131,"code"),e(132,"t-size"),t(),e(133,`, o
evento n\xE3o ser\xE1 disparado.`),t(),i(134,"pre")(135,"code",11),e(136,'<thf-splitter-pane (t-size-change)="onSizeChange($event)">'),t()()()()()()()(),w(137,2),t(),i(138,"po-tab",32),w(139,3),t()()())},dependencies:[z,$,v,ie,N],encapsulation:2})}}return d})();var $i=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Ji=["[overview]","[especificacao-before]","[especificacao-after]","[enums-before]","[enums-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],qt=(()=>{class d{constructor(a){this.el=a}ngAfterViewInit(){this.accordions.forEach(a=>{setTimeout(()=>{a.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(a){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${a}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let y=E.querySelector(".po-tab-button-label");y&&y?.textContent?.trim().toLowerCase()===a&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(Y))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter"]],viewQuery:function(r,n){if(r&1&&(D(N,5),D(z,5)),r&2){let l;A(l=_())&&(n.tabs=l.first),A(l=_())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Ji,decls:326,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],["id","boas-pr\xE1ticas"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfSplitterOrientation,","string"],[1,"language-typescript"],["p-label","Enums"],["p-label","ThfSplitterOrientation"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(ee($i),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),w(4),t(),i(5,"po-tab",4),w(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter"),t(),e(21,` \xE9 respons\xE1vel por dividir visualmente a tela em duas se\xE7\xF5es, com suporte a
redimensionamento entre elas. \xC9 ideal para estruturar interfaces com pain\xE9is laterais e conte\xFAdos principais de forma
flex\xEDvel.`),t(),i(22,"p"),e(23,"O redimensionamento \xE9 realizado por meio de um "),i(24,"em"),e(25,"trigger"),t(),e(26,` interativo, que pode ser manipulado com o mouse ou pelo
teclado, utilizando as teclas `),i(27,"code"),e(28,"\u2190"),t(),e(29," e "),i(30,"code"),e(31,"\u2192"),t(),e(32," na orienta\xE7\xE3o "),i(33,"code"),e(34,"horizontal"),t(),e(35,", e "),i(36,"code"),e(37,"\u2191"),t(),e(38," e "),i(39,"code"),e(40,"\u2193"),t(),e(41," na orienta\xE7\xE3o "),i(42,"code"),e(43,"vertical"),t(),e(44,". O "),i(45,"em"),e(46,"trigger"),t(),e(47," recebe foco ao navegar com "),i(48,"code"),e(49,"TAB"),t(),e(50,"."),t(),i(51,"p"),e(52,"Cada "),i(53,"code"),e(54,"pane"),t(),e(55," respeita limites de largura entre "),i(56,"strong"),e(57,"30% e 70%"),t(),e(58,". O "),i(59,"em"),e(60,"trigger"),t(),e(61,` ser\xE1 automaticamente bloqueado ao tentar
ultrapassar esses limites.`),t(),i(62,"h4",11),e(63,"Boas pr\xE1ticas"),t(),i(64,"ul")(65,"li"),e(66,"Evite usar o "),i(67,"code"),e(68,"thf-splitter"),t(),e(69," dentro de um modal ou componentes semelhantes que possam comprometer a usabilidade."),t()(),i(70,"pre")(71,"code",12),e(72,`<thf-splitter>
  <thf-splitter-pane [t-size]="'30%'">
    Conte\xFAdo do Painel Esquerdo
  </thf-splitter-pane>
  <thf-splitter-pane>
    Conte\xFAdo do Painel Direito (ocupa espa\xE7o restante)
  </thf-splitter-pane>
</thf-splitter>`),t()()(),i(73,"div",13)(74,"h4",14),e(75,"Seletor"),t(),i(76,"pre",15),e(77,`<thf-splitter
  t-disabled="boolean, any"
  (t-layout-change)="EventEmitter"
  t-orientation="ThfSplitterOrientation, string" >
</thf-splitter>
`),t()()(),i(78,"po-accordion-item",16)(79,"h4",17),e(80,"Propriedades"),t(),i(81,"table",18)(82,"tr",19)(83,"th",20),e(84,"Nome"),t(),i(85,"th",20),e(86,"Tipo"),t(),i(87,"th",20),e(88,"Padr\xE3o"),t(),i(89,"th",20),e(90,"Descri\xE7\xE3o"),t()(),i(91,"tr",21)(92,"td",22)(93,"div",23)(94,"span",24),e(95," t-disabled"),o(96,"br"),t()()(),i(97,"td",25)(98,"code",26),e(99,"boolean, any"),t()(),i(100,"td",27)(101,"p"),e(102,"false"),t()(),i(103,"td",28)(104,"p"),e(105,"Desabilita o redimensionamento entre os panes, ocultando a intera\xE7\xE3o via trigger."),t()()(),i(106,"tr",21)(107,"td",22)(108,"div",29)(109,"span",30),e(110," (t-layout-change)"),o(111,"br"),t()()(),i(112,"td",25)(113,"code",31),e(114,"EventEmitter"),t()(),i(115,"td",27),e(116,"-"),t(),i(117,"td",28)(118,"p"),e(119,"Evento emitido sempre que houver altera\xE7\xE3o de layout provocada por redimensionamento. Quando "),i(120,"code"),e(121,"t-disabled"),t(),e(122,` estiver
ativado, este evento n\xE3o ser\xE1 disparado.`),t(),i(123,"pre")(124,"code",12),e(125,'<thf-splitter (t-layout-change)="onLayoutChange($event)">'),t()()()(),i(126,"tr",21)(127,"td",22)(128,"div",23)(129,"span",24),e(130," t-orientation"),o(131,"br"),t()()(),i(132,"td",25)(133,"code",32),e(134,"ThfSplitterOrientation, string"),t()(),i(135,"td",27)(136,"p"),e(137,"'horizontal'"),t()(),i(138,"td",28)(139,"p"),e(140,`Define a orienta\xE7\xE3o dos pain\xE9is do splitter.
Valores aceitos: `),i(141,"code"),e(142,"'horizontal'"),t(),e(143," ou "),i(144,"code"),e(145,"'vertical'"),t(),e(146,"."),t(),i(147,"pre")(148,"code",12),e(149,'<thf-splitter t-orientation="vertical"> ...'),t()(),i(150,"p"),e(151,"ou"),t(),i(152,"pre")(153,"code",33),e(154,"orientation = ThfSplitterOrientation.Vertical;"),t()(),i(155,"pre")(156,"code",12),e(157,'<thf-splitter [t-orientation]="orientation"> ...'),t()()()()()()()(),w(158,2),t(),i(159,"po-tab",34),w(160,3),i(161,"po-container",5)(162,"po-accordion",6)(163,"po-accordion-item",35)(164,"h4",9)(165,"code"),e(166,"ThfSplitterOrientation"),t()(),i(167,"h4",17),e(168,"Propriedades"),t(),i(169,"table",18)(170,"tr",19)(171,"th",20),e(172,"Nome"),t(),i(173,"th",20),e(174,"Descri\xE7\xE3o"),t()(),i(175,"tr",21)(176,"td",22)(177,"div",23)(178,"span",24),e(179," Horizontal"),o(180,"br"),t()()(),i(181,"td",28)(182,"p"),e(183,"Divide o espa\xE7o na "),i(184,"strong"),e(185,"horizontal"),t(),e(186," (esquerda/direita)"),t()()(),i(187,"tr",21)(188,"td",22)(189,"div",23)(190,"span",24),e(191," Vertical"),o(192,"br"),t()()(),i(193,"td",28)(194,"p"),e(195,"Divide o espa\xE7o na "),i(196,"strong"),e(197,"vertical"),t(),e(198," (cima/baixo)"),t()()()()()()(),w(199,4),t(),i(200,"po-tab",36)(201,"po-container",5),w(202,5),i(203,"h3",37),e(204,"Tokens customiz\xE1veis"),t(),i(205,"p"),e(206,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(207,"blockquote")(208,"p"),e(209,"Para maiores informa\xE7\xF5es, acesse o guia "),i(210,"a",38),e(211,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(212,"."),t()(),i(213,"table")(214,"thead")(215,"tr")(216,"th"),e(217,"Propriedade"),t(),i(218,"th"),e(219,"Descri\xE7\xE3o"),t(),i(220,"th"),e(221,"Valor Padr\xE3o"),t()()(),i(222,"tbody")(223,"tr")(224,"td")(225,"strong"),e(226,"Splitter Track"),t()(),o(227,"td")(228,"td"),t(),i(229,"tr")(230,"td")(231,"code"),e(232,"--background-track"),t()(),i(233,"td"),e(234,"Cor de background do Track apresentado no Splitter"),t(),i(235,"td")(236,"code"),e(237,"var(--color-neutral-light-10)"),t()()(),i(238,"tr"),o(239,"td")(240,"td")(241,"td"),t(),i(242,"tr")(243,"td")(244,"strong"),e(245,"Splitter Trigger"),t()(),o(246,"td")(247,"td"),t(),i(248,"tr")(249,"td")(250,"code"),e(251,"--box-shadow"),t()(),i(252,"td"),e(253,"Sombra aplicado no bot\xE3o do trigger"),t(),i(254,"td")(255,"code"),e(256,"var(--shadow-sm)"),t()()(),i(257,"tr")(258,"td")(259,"code"),e(260,"--background-color"),t()(),i(261,"td"),e(262,"Cor de background"),t(),i(263,"td")(264,"code"),e(265,"var(--color-neutral-light-00)"),t()()(),i(266,"tr")(267,"td")(268,"code"),e(269,"--color"),t()(),i(270,"td"),e(271,"Cor do \xEDcone"),t(),i(272,"td")(273,"code"),e(274,"var(--color-action-default)"),t()()(),i(275,"tr")(276,"td")(277,"strong"),e(278,"Hover"),t()(),o(279,"td")(280,"td"),t(),i(281,"tr")(282,"td")(283,"code"),e(284,"--background-color-hover"),t()(),i(285,"td"),e(286,"Cor de background no estado hover"),t(),i(287,"td")(288,"code"),e(289,"var(--color-brand-01-lighter)"),t()()(),i(290,"tr")(291,"td")(292,"code"),e(293,"--color-hover"),t()(),i(294,"td"),e(295,"Cor do \xEDcone no estado hover"),t(),i(296,"td")(297,"code"),e(298,"var(--color-brand-01-darkest)"),t()()(),i(299,"tr")(300,"td")(301,"strong"),e(302,"Pressed"),t()(),o(303,"td")(304,"td"),t(),i(305,"tr")(306,"td")(307,"code"),e(308,"--background-color-pressed"),t()(),i(309,"td"),e(310,"Cor de background quando pressionada"),t(),i(311,"td")(312,"code"),e(313,"var(--color-brand-01-ligh)"),t()()(),i(314,"tr")(315,"td")(316,"code"),e(317,"--color-pressed"),t()(),i(318,"td"),e(319,"Cor de \xEDcone quando pressionado"),t(),i(320,"td")(321,"code"),e(322,"var(--color-brand-01-darkest)"),t()()()()()(),w(323,6),t(),i(324,"po-tab",39),w(325,7),t()()())},dependencies:[z,$,v,ie,N],encapsulation:2})}}return d})();var kt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=Ee({type:d})}static{this.\u0275inj=ue({imports:[Te,Ie]})}}return d})();var Ve=[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",score:87,onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America"},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",score:42,onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps"},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",score:95,onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",score:63,onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",score:78,onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48998,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",score:12,onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",score:56,onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",score:91,onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America"},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",score:34,onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",score:88,onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",score:73,onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",score:27,onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",score:99,onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",score:15,onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",score:67,onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",score:84,onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",score:53,onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",score:39,onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}],Ft=`export const DATA = ${JSON.stringify(Ve,null,2)};`;var It=`<po-button
    class="po-mb-2 po-mt-1"
    p-label="Limpa filtros por coluna"
    (p-click)="clearFiltersByColumn()"
  ></po-button>
  <thf-grid
  #gridComponent
  [t-actions-filter]="true"
  [t-columns]="columnsTotalizador"
  [t-resizable]="true"
  [t-groupable]="true"
  [t-draggable]="true"
  [t-items]="itemsTotalizador"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-show-densification-configuration]="true"
  [t-action-excel]="true"
  [t-action-pdf]="true"
  [t-aggregates-config]="aggregateConfig"
  [t-aggregates]="aggregatesDescriptor"
  [t-filter-column-properties]="filterColumnProperties"
  [t-show-footer-aggregates]="true"
  [t-height]="450"
/>
`,Lt=`import { Component, ViewChild } from '@angular/core';

import {
  ThfAggregateConfig,
  ThfAggregateDescriptor,
  ThfFilterByColumn,
  ThfGridColumn,
  ThfGridComponent,
} from '@totvs/thf-components';

import { DATA } from './data';

@Component({
  selector: 'app-thf-grid-aggregates-doc',
  templateUrl: './thf-grid-aggregates-doc.component.html',
  styleUrl: './thf-grid-aggregates-doc.component.css',
})
export class ThfGridAggregateDocComponent {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columnsTotalizador: Array<ThfGridColumn> = [
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'color-11', label: 'Available' },
        { value: 'reserved', color: 'color-08', label: 'Reserved' },
        { value: 'closed', color: 'color-07', label: 'Closed' },
      ],
    },
    { property: 'region', label: 'Region', filter: true },
    { property: 'country', label: 'Country' },
    { property: 'destination', label: 'Destination' },
    { property: 'date', label: 'Date', type: 'date', filter: true },
    {
      property: 'onBoardService',
      label: 'On-board Service',
      type: 'boolean',
      filter: true,
    },
    { property: 'class', label: 'Class', type: 'string', filter: true },
    { property: 'score', label: 'Score', type: 'number', filter: true },
    {
      property: 'value',
      type: 'currency',
      label: 'Value',
      format: 'BRL',
      filter: true,
    },
  ];

  filterColumnProperties: Array<ThfFilterByColumn> = [
    {
      property: 'value',
      logic: 'and',
      operator1: 'gt',
      value1: 1500,
    },
  ];

  aggregateConfig: ThfAggregateConfig = {
    disabled: ['status'],
    visible: ['status', 'destination', 'value'],
    aggregateAlign: 'defaultColumn',
  };

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' },
    { field: 'destination', aggregate: 'count', label: 'Contagem' },
  ];

  itemsTotalizador = DATA;

  clearFiltersByColumn() {
    this.thfGrid.applyFilterByColumnProps([]);
  }
}
`;function Xi(d,C){}function Yi(d,C){d&1&&L(0,Xi,0,0,"ng-template")}function en(d,C){if(d&1&&(i(0,"po-accordion-item",7),L(1,Yi,1,0,null,8),t()),d&2){let a=u();m(),s("ngTemplateOutlet",a.dynamicTemplate)}}function tn(d,C){if(d&1&&o(0,"po-code-editor",9),d&2){let a=u();s("p-readonly",!0)("ngModel",a.htmlCode)("p-theme",a.themeActive===1?"vs-dark":"vs")}}function nn(d,C){if(d&1&&o(0,"po-code-editor",10),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.tsCode)}}function on(d,C){if(d&1&&o(0,"po-code-editor",10),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.serviceCode)}}function an(d,C){if(d&1&&o(0,"po-code-editor",10),d&2){let a=u();s("p-readonly",!0)("p-theme",a.themeActive===1?"vs-dark":"vs")("ngModel",a.othersCode==null?null:a.othersCode.body)}}var T=(()=>{class d{constructor(a){this.sharedService=a,this.htmlCode="",this.marginTopClass="po-mt-3",this.properties=!1,this.serviceCode="",this.showOthersCodeButton=!1,this.showServiceButton=!1,this.tsCode="",this.buttons=[],this.selectedCode="html"}ngOnInit(){this.buttons=[{label:"HTML",selected:!0,action:()=>this.selectedCode="html"},{label:"TS",action:()=>this.selectedCode="ts"}],this.showServiceButton&&this.buttons.push({label:"Service",action:()=>this.selectedCode="service"}),this.showOthersCodeButton&&this.buttons.push({label:this.othersCode.label,action:()=>this.selectedCode="othersCode"}),this.sharedService.getThemeActive().subscribe(a=>{this.themeActive=a.type||0})}static{this.\u0275fac=function(r){return new(r||d)(R(Ct))}}static{this.\u0275cmp=x({type:d,selectors:[["app-code-accordion-doc"]],inputs:{dynamicTemplate:"dynamicTemplate",htmlCode:"htmlCode",marginTopClass:"marginTopClass",othersCode:"othersCode",properties:"properties",serviceCode:"serviceCode",showOthersCodeButton:"showOthersCodeButton",showServiceButton:"showServiceButton",tsCode:"tsCode"},standalone:!1,decls:10,vars:8,consts:[[3,"ngClass"],["p-label","Propriedades",4,"ngIf"],["p-label","Fontes"],[1,"po-pt-1"],["p-toggle","single","ngDefaultControl","",3,"ngModelChange","p-buttons","ngModel"],["class","po-pt-2","p-height","350","p-language","html","ngDefaultControl","",3,"p-readonly","ngModel","p-theme",4,"ngIf"],["class","po-pt-2","p-height","350","p-language","typescript","ngDefaultControl","",3,"p-readonly","p-theme","ngModel",4,"ngIf"],["p-label","Propriedades"],[4,"ngTemplateOutlet"],["p-height","350","p-language","html","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","ngModel","p-theme"],["p-height","350","p-language","typescript","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","p-theme","ngModel"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"po-accordion"),L(2,en,2,1,"po-accordion-item",1),i(3,"po-accordion-item",2)(4,"div",3)(5,"po-button-group",4),h("ngModelChange",function(E){return f(n.selectedCode,E)||(n.selectedCode=E),E}),t(),L(6,tn,1,3,"po-code-editor",5)(7,nn,1,3,"po-code-editor",6)(8,on,1,3,"po-code-editor",6)(9,an,1,3,"po-code-editor",6),t()()()()),r&2&&(s("ngClass",n.marginTopClass),m(2),s("ngIf",n.properties),m(3),s("p-buttons",n.buttons),b("ngModel",n.selectedCode),m(),s("ngIf",n.selectedCode==="html"),m(),s("ngIf",n.selectedCode==="ts"),m(),s("ngIf",n.selectedCode==="service"),m(),s("ngIf",n.selectedCode==="othersCode"))},dependencies:[ot,Se,rt,mt,G,U,z,$,bt,ut],encapsulation:2})}}return d})();var rn=["gridComponent"],Mt=(()=>{class d{constructor(){this.htmlCode=It,this.tsCode=Lt,this.tsOthersCode={label:"Data",body:Ft},this.columnsTotalizador=[{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}]},{property:"region",label:"Region",filter:!0},{property:"country",label:"Country"},{property:"destination",label:"Destination"},{property:"date",label:"Date",type:"date",filter:!0},{property:"onBoardService",label:"On-board Service",type:"boolean",filter:!0},{property:"class",label:"Class",type:"string",filter:!0},{property:"score",label:"Score",type:"number",filter:!0},{property:"value",type:"currency",label:"Value",format:"BRL",filter:!0}],this.filterColumnProperties=[{property:"value",logic:"and",operator1:"gt",value1:1500}],this.aggregateConfig={disabled:["status"],visible:["status","destination","value"],aggregateAlign:"defaultColumn"},this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"destination",aggregate:"count",label:"Contagem"}],this.itemsTotalizador=Ve}clearFiltersByColumn(){this.thfGrid.applyFilterByColumnProps([])}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-aggregates-doc"]],viewQuery:function(r,n){if(r&1&&D(rn,5),r&2){let l;A(l=_())&&(n.thfGrid=l.first)}},standalone:!1,decls:8,vars:20,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["p-label","Limpa filtros por coluna",1,"po-mb-2","po-mt-1",3,"p-click"],[3,"t-actions-filter","t-columns","t-resizable","t-groupable","t-draggable","t-items","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-action-excel","t-action-pdf","t-aggregates-config","t-aggregates","t-filter-column-properties","t-show-footer-aggregates","t-height"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",1),e(2,"Totalizador e Filtro por Colunas"),t(),o(3,"po-divider",2),i(4,"po-button",3),g("p-click",function(){return p(l),c(n.clearFiltersByColumn())}),t(),o(5,"thf-grid",4,0)(7,"app-code-accordion-doc",5),t()}r&2&&(m(5),s("t-actions-filter",!0)("t-columns",n.columnsTotalizador)("t-resizable",!0)("t-groupable",!0)("t-draggable",!0)("t-items",n.itemsTotalizador)("t-selectable",!0)("t-selectable-entire-line",!1)("t-show-densification-configuration",!0)("t-action-excel",!0)("t-action-pdf",!0)("t-aggregates-config",n.aggregateConfig)("t-aggregates",n.aggregatesDescriptor)("t-filter-column-properties",n.filterColumnProperties)("t-show-footer-aggregates",!0)("t-height",450),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("othersCode",n.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[W,v,P,M,T],encapsulation:2})}}return d})();var Rt=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/heroes"
    [t-columns]="column"
    [t-height]="400"
  />

`,Vt=`import { Component } from '@angular/core';
import { ThfGridColumn } from '@totvs/thf-components';

@Component({
    selector: 'app-thf-grid-basic-doc',
    templateUrl: './thf-grid-basic-doc.component.html',
    styleUrl: './thf-grid-basic-doc.component.css',
    standalone: false
})
export class ThfGridBasicDocComponent {
column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'value', label: 'Code' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];
}

`;var zt=(()=>{class d{constructor(){this.htmlCode=Rt,this.tsCode=Vt,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"value",label:"Code"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-basic-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-height"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Service"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-columns",n.column)("t-height",400),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var Me=(()=>{class d{constructor(a){this.httpClient=a}deleteItem(a,r,n){return this.httpClient.delete("https://po-sample-api.onrender.com/v1/people"+"/"+n)}static{this.\u0275fac=function(r){return new(r||d)(Be(dt))}}static{this.\u0275prov=Qe({token:d,factory:d.\u0275fac,providedIn:"root"})}}return d})();var jt=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-action-delete]="true"
    [t-columns]="column"
    [t-height]="400"
    [t-literals]="literals"
    [t-selectable]="true"
    [t-selectable-entire-line]="false"
    [t-service-delete-api]="serviceDeleteApi"
    (t-selected)="selectedItem($event)"
  />

`,Ot=`import { Component } from '@angular/core';
import { ThfGridColumn, ThfGridLiterals } from '@totvs/thf-components';
import { ThfDeleteService } from './thf-grid-delete-service-doc.service';

@Component({
    selector: 'app-thf-grid-delete-service-doc',
    templateUrl: './thf-grid-delete-service-doc.component.html',
    styleUrl: './thf-grid-delete-service-doc.component.css',
    providers: [ThfDeleteService],
    standalone: false
})
export class ThfGridDeleteServiceDocComponent {
literals!: ThfGridLiterals;
  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', visible: false },
    { property: 'label', label: 'Label', visible: false },
    { property: 'name', label: 'Nome' },
    { property: 'cityName', label: 'Cidade' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail', width: 100 },
  ];

  constructor(protected serviceDeleteApi: ThfDeleteService) { }

  selectedItem(event: any) {
    this.literals = {
      bodyDelete: 'Tem certeza que deseja excluir ' + event.name + '?',
    };
  }
}

`,Gt=`import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ThfGridDeleteService } from '@totvs/thf-components';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThfDeleteService implements ThfGridDeleteService {
  constructor(private httpClient: HttpClient) {}

  deleteItem(
    selectedRow: any,
    filterParams?: any,
    keyValue?: any
  ): Observable<any> {
    const urlDelete = 'https://po-sample-api.onrender.com/v1/people';
    return this.httpClient.delete(urlDelete + '/' + keyValue);
  }
}

`;var Nt=(()=>{class d{constructor(a){this.serviceDeleteApi=a,this.htmlCode=jt,this.tsCode=Ot,this.serviceCode=Gt,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"name",label:"Nome"},{property:"cityName",label:"Cidade"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}selectedItem(a){this.literals={bodyDelete:"Tem certeza que deseja excluir "+a.name+"?"}}static{this.\u0275fac=function(r){return new(r||d)(R(Me))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-delete-service-doc"]],standalone:!1,features:[Ye([Me])],decls:6,vars:11,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-selected","t-action-delete","t-columns","t-height","t-literals","t-selectable","t-selectable-entire-line","t-service-delete-api"],[3,"htmlCode","tsCode","serviceCode","showServiceButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Grid Dele\xE7\xE3o com Servi\xE7o Customizado"),t(),o(3,"po-divider",1),i(4,"thf-grid",2),g("t-selected",function(E){return n.selectedItem(E)}),t(),o(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-action-delete",!0)("t-columns",n.column)("t-height",400)("t-literals",n.literals)("t-selectable",!0)("t-selectable-entire-line",!1)("t-service-delete-api",n.serviceDeleteApi),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("serviceCode",n.serviceCode)("showServiceButton",!0))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var Qt=`<thf-grid
    [t-action-delete]="selection.includes('actionDelete')"
    [t-action-edit]="selection.includes('actionEdit')"
    [t-action-excel]="selection.includes('actionExcel')"
    [t-action-pdf]="selection.includes('actionPdf')"
    [t-actions]="actions || []"
    [t-actions-filter]="otherProperties.includes('actionsFilter')"
    [t-actions-right]="otherProperties.includes('actionRight')"
    [t-components-size]="componentsSize"
    [t-columns]="columns"
    [t-container]="otherProperties.includes('container')"
    [t-draggable]="otherProperties.includes('draggable')"
    [t-filter-input-mode]="filterinputModeValue"
    [t-groupable]="otherProperties.includes('groupable')"
    [t-height]="height"
    [t-max-height]="maxHeight"
    [t-min-height]="minHeight"
    [t-hide-columns-manager]="otherProperties.includes('hideColumnsManager')"
    [t-hide-action-fixed-columns]="
      otherProperties.includes('hideActionFixedColumns')
    "
    [t-hide-batch-actions]="selection.includes('hideBatchActions')"
    [t-hide-select-all]="selection.includes('hideSelectAll')"
    [t-hide-table-search]="otherProperties.includes('hideTableSearch')"
    [t-literals]="literalsCustom"
    [t-loading]="otherProperties.includes('loading')"
    [t-max-resizable-width]="maxResizableValue"
    [t-min-resizable-width]="minResizableValue"
    [t-options-paging]="customOptionsPage"
    [t-pageable]="pagination.includes('pageable')"
    t-param-delete-api="value"
    [t-resizable]="resizable"
    [t-selectable]="selection.includes('selectable')"
    [t-selectable-entire-line]="selection.includes('selectableEntireLine')"
    [t-show-densification-configuration]="
      otherProperties.includes('showDensificationConfiguration')
    "
    [t-show-draggable-icon]="otherProperties.includes('showDraggableIcon')"
    [t-show-more-disabled]="pagination.includes('showMoreDisabled')"
    [t-show-more-visible]="pagination.includes('showMoreVisible')"
    [t-single-select]="selection.includes('singleSelect')"
    [t-sort]="customSort"
    [t-sortable]="otherProperties.includes('sortable')"
    [t-spacing]="spacing"
    [t-striped]="otherProperties.includes('striped')"
    [t-text-wrap]="otherProperties.includes('textWrap')"
    [t-virtual-scroll]="otherProperties.includes('virtualScroll')"
    [t-show-footer-aggregates]="
      otherProperties.includes('showFooterAggregates')
    "
    [t-items]="items"
    (t-change-fixed-columns)="changeEvent('t-change-fixed-columns')"
    (t-change-order-column)="changeEvent('t-change-order-column')"
    (t-change-page-size)="changeEvent('t-change-page-size')"
    (t-change-sort-column)="changeEvent('t-change-sort-column')"
    (t-change-visible-columns)="changeEvent('t-change-visible-columns')"
    (t-change-options-column-manager)="
      changeEvent('t-change-options-column-manager')
    "
    (t-changed-density)="changeEvent('t-changed-density')"
    (t-delete-item)="changeEvent('t-delete-item')"
    (t-delete-items)="changeEvent('t-delete-items')"
    (t-delete-item-error)="changeEvent('t-delete-item-error')"
    (t-filter-item-error)="changeEvent('t-filter-item-error')"
    (t-restore-column-manager)="changeEvent('t-restore-column-manager')"
    (t-selected)="changeEvent('t-selected')"
    (t-all-selected)="changeEvent('t-all-selected')"
    (t-unselected)="changeEvent('t-unselected')"
    (t-all-unselected)="changeEvent('t-all-unselected')"
    (t-change-group)="changeEvent('t-change-group')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
  />

  <po-container class="po-mt-2" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

  <div class="po-row po-mt-2 po-mb-2" style="display: block">
    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="columnsName"
        [(ngModel)]="columnsName"
        p-columns="4"
        p-label="Columns"
        [p-options]="columnsOptions"
        (p-change)="updateColumns()"
      >
      </po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="selection"
        p-label="Selection"
        p-columns="4"
        [p-options]="selectionOptions"
        [(ngModel)]="selection"
        (p-change)="changeSelectionOptions()"
      ></po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-checkbox-group
        name="otherProperties"
        p-label="Other Properties"
        [p-columns]="4"
        [p-options]="otherPropertiesOptions"
        [(ngModel)]="otherProperties"
        (p-change)="changeOtherProperties()"
      >
      </po-checkbox-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-radio-group
        name="spacing"
        p-help="Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar."
        p-label="Spacing"
        [p-columns]="4"
        [p-options]="spacingOptions"
        [(ngModel)]="spacing"
      ></po-radio-group>
    </po-container>

    <po-container class="po-mb-2" style="display: flex">
      <po-radio-group
        class="po-lg-6"
        name="componentsSize"
        [(ngModel)]="componentsSize"
        p-label="Components size"
        p-help="Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar."
        [p-options]="componentsSizeOptions"
      >
      </po-radio-group>

      <po-radio-group
        class="po-lg-6"
        name="filterinputModeValue"
        p-label="Filter Input Mode"
        [(ngModel)]="filterinputModeValue"
        [p-options]="filterModeOptions"
      ></po-radio-group>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-number
        class="po-md-6"
        p-label="Min Resizable Width"
        [(ngModel)]="minResizableValue"
        [disabled]="!resizable"
      ></po-number>
      <po-number
        class="po-md-6"
        p-label="Max Resizable Width"
        [(ngModel)]="maxResizableValue"
        [disabled]="!resizable"
      ></po-number>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Height"
        [(ngModel)]="height"
      ></po-number>
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Max Height"
        [(ngModel)]="maxHeight"
      ></po-number>
      <po-number
        class="po-md-6 po-lg-4"
        p-label="Min Height"
        [(ngModel)]="minHeight"
      ></po-number>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-textarea
        name="literals"
        p-label="Literals"
        p-help='{"noData": "Sem dados a serem exibidos"}'
        [(ngModel)]="literals"
        (p-change-model)="changeLiterals()"
      ></po-textarea>
    </po-container>

    <po-container class="po-mb-2 po-lg-6" style="display: flex">
      <po-textarea
        name="sort"
        p-label="Sort"
        p-help='[{ "field":"name", "dir":"asc" }]'
        [(ngModel)]="sort"
        (p-change-model)="changeSort()"
      ></po-textarea>
    </po-container>

    <po-container class="po-mb-2 po-lg-12" style="display: flex">
      <div style="display: flex; flex-wrap: wrap">
        <po-checkbox-group
          class="po-lg-6"
          name="pagination"
          p-label="Pagination"
          [p-options]="paginationOptions"
          [(ngModel)]="pagination"
          (p-change)="changePagination()"
        ></po-checkbox-group>

        <po-textarea
          class="po-lg-6"
          name="optionsPage"
          p-label="Options Page"
          p-help='[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]'
          [(ngModel)]="optionsPage"
          (p-change-model)="changeOptionsPage()"
          [disabled]="!pagination.includes('pageable')"
        ></po-textarea>
      </div>
    </po-container>
  </div>

  <div class="po-row">
    <po-button
      class="po-lg-3 po-md-6"
      p-label="Restore"
      (p-click)="restore()"
    >
    </po-button>
  </div>
`,Bt=`import { AfterViewInit, Component } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoNotificationService,
  PoRadioGroupOption,
} from '@po-ui/ng-components';
import {
  ThfColumnSpacing,
  ThfGridColumn,
  ThfGridColumnSort,
  ThfGridLiterals,
  ThfTableAction,
} from '@totvs/thf-components';
import { ThfGridOptionPaging } from '@totvs/thf-components/lib/components/thf-grid/interfaces/thf-grid-option-paging.interface';

@Component({
  selector: 'app-thf-grid-labs-doc',
  templateUrl: './thf-grid-labs-doc.component.html',
  styleUrls: ['./thf-grid-labs-doc.component.css'],
})
export class ThfGridLabsDocComponent implements AfterViewInit {
  actions: Array<ThfTableAction> | undefined = undefined;
  columnsName: Array<string> = ['id', 'name', 'birthdate', 'email', 'over'];
  componentsSize: string = 'medium';
  customOptionsPage: Array<ThfGridOptionPaging> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 1000, label: '1000' },
  ];
  customSort: Array<ThfGridColumnSort> = [
    {
      field: '',
      dir: 'asc',
    },
  ];
  event: string = '';
  filterinputModeValue: string = 'basic';
  height = 400;
  minHeight = undefined;
  maxHeight = undefined;
  literals: string = '';
  literalsCustom: ThfGridLiterals = {};
  maxResizableValue: number = 300;
  minResizableValue: number = 10;
  optionsPage: string = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
  pagination: Array<string> = [];
  properties: Array<string> = [];
  resizable: boolean = false;
  selection: Array<string> = ['selectableEntireLine'];
  sort: string = '[{"field": "", "dir": "asc"}]';
  spacing: ThfColumnSpacing = ThfColumnSpacing.Medium;
  otherProperties: Array<string> = [
    'actionsFilter',
    'draggable',
    'container',
    'groupable',
    'sortable',
    'striped',
    'virtualScroll',
  ];

  customAction: Array<ThfTableAction> = [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name}\`);
      },
      icon: 'ICON_MORE_VERT',
      fixed: true,
    },
  ];

  componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  selectionOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Selectable', value: 'selectable' },
    { label: 'Single', value: 'singleSelect', disabled: true },
    { label: 'Entire Line', value: 'selectableEntireLine', disabled: true },
    { label: 'Hide Select All', value: 'hideSelectAll', disabled: true },
    { label: 'Action Delete', value: 'actionDelete', disabled: true },
    { label: 'Action Edit', value: 'actionEdit', disabled: true },
    { label: 'Action Excel', value: 'actionExcel', disabled: true },
    { label: 'Action PDF', value: 'actionPdf', disabled: true },
    { label: 'Hide Batch Actions', value: 'hideBatchActions', disabled: true },
  ];
  spacingOptions: Array<PoRadioGroupOption> = [
    { label: 'extraSmall', value: ThfColumnSpacing.ExtraSmall },
    { label: 'Small', value: ThfColumnSpacing.Small },
    { label: 'Medium', value: ThfColumnSpacing.Medium },
    { label: 'Large', value: ThfColumnSpacing.Large },
  ];
  filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: 'basic' },
    { label: 'Service', value: 'service' },
  ];
  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Actions Filter', value: 'actionsFilter' },
    { label: 'Action Right', value: 'actionRight' },
    { label: 'Container', value: 'container' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Groupable', value: 'groupable' },
    { label: 'Hide Columns Manager', value: 'hideColumnsManager' },
    { label: 'Hide Actions Fixed Columns', value: 'hideActionFixedColumns' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Loading', value: 'loading' },
    { label: 'Resizable', value: 'resizable' },
    {
      label: 'Show Densification Configuration',
      value: 'showDensificationConfiguration',
    },
    { label: 'Show Draggable Icon', value: 'showDraggableIcon' },
    { label: 'Sortable', value: 'sortable' },
    { label: 'Striped', value: 'striped' },
    { label: 'Text Wrap', value: 'textWrap', disabled: false },
    { label: 'Virtual Scroll', value: 'virtualScroll' },
    { label: 'Show Footer Aggregates', value: 'showFooterAggregates' },
  ];
  paginationOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Pageable', value: 'pageable' },
    { label: 'Show More Disabled', value: 'showMoreDisabled', disabled: false },
    { label: 'Show More Visible', value: 'showMoreVisible', disabled: false },
  ];

  items = [
    {
      id: 1,
      name: 'Jo\xE3o Silva',
      birthdate: '1990-05-15',
      lastLogin: '2024-02-14T15:30:00Z',
      active: true,
      email: 'joao.silva@example.com',
      over: 95.5,
    },
    {
      id: 2,
      name: 'Maria Souza',
      birthdate: '1985-10-23',
      lastLogin: '2024-02-13T08:45:00Z',
      active: false,
      email: 'maria.souza@example.com',
      over: 96,
    },
    {
      id: 3,
      name: 'Carlos Almeida',
      birthdate: '1998-07-09',
      lastLogin: '2024-02-14T20:15:00Z',
      active: true,
      email: 'carlos.almeida@example.com',
      over: 1100.5,
    },
    {
      id: 4,
      name: 'Fernanda Costa',
      birthdate: '1992-03-12',
      lastLogin: '2024-02-12T18:00:00Z',
      active: false,
      email: 'fernanda.costa@example.com',
      over: 1200.5,
    },
    {
      id: 5,
      name: 'Ricardo Lima',
      birthdate: '1980-11-30',
      lastLogin: '2024-02-11T07:25:00Z',
      active: true,
      email: 'ricardo.lima@example.com',
      over: 300.89,
    },
    {
      id: 6,
      name: 'Ana Pereira',
      birthdate: '1995-09-18',
      lastLogin: '2024-02-10T14:10:00Z',
      active: true,
      email: 'ana.pereira@example.com',
      over: 50.5,
    },
    {
      id: 7,
      name: 'Pedro Henrique',
      birthdate: '1993-06-25',
      lastLogin: '2024-02-09T12:30:00Z',
      active: false,
      email: 'pedro.henrique@example.com',
      over: 35,
    },
    {
      id: 8,
      name: 'Beatriz Ramos',
      birthdate: '1999-04-03',
      lastLogin: '2024-02-08T09:15:00Z',
      active: true,
      email: 'beatriz.ramos@example.com',
      over: 0.5,
    },
    {
      id: 9,
      name: 'Lucas Oliveira',
      birthdate: '1987-07-22',
      lastLogin: '2024-02-07T16:45:00Z',
      active: false,
      email: 'lucas.oliveira@example.com',
      over: 100,
    },
    {
      id: 10,
      name: 'Juliana Martins',
      birthdate: '1996-01-05',
      lastLogin: '2024-02-06T11:00:00Z',
      active: true,
      email: 'juliana.martins@example.com',
      over: 100.5,
    },
    {
      id: 11,
      name: 'Eduardo Nunes',
      birthdate: '1982-08-17',
      lastLogin: '2024-02-05T17:20:00Z',
      active: false,
      email: 'eduardo.nunes@example.com',
      over: 950,
    },
    {
      id: 12,
      name: 'Camila Ferreira',
      birthdate: '2000-12-29',
      lastLogin: '2024-02-04T13:40:00Z',
      active: true,
      email: 'camila.ferreira@example.com',
      over: 99.99,
    },
  ];

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Number' },
    { property: 'name', label: 'Text' },
    { property: 'birthdate', label: 'Date', type: 'date' },
    {
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this),
    },
    {
      property: 'over',
      label: 'Currency',
      type: 'currency',
      format: 'BRL',
      locale: 'pt',
    },
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Number' },
    { value: 'name', label: 'Text' },
    { value: 'birthdate', label: 'Date' },
    { value: 'lastLogin', label: 'DateTime' },
    { value: 'active', label: 'Boolean' },
    { value: 'email', label: 'Link' },
    { value: 'over', label: 'Currency' },
  ];

  private readonly columnsDefinition: any = {
    id: <ThfGridColumn>{ property: 'id', label: 'Number' },
    name: <ThfGridColumn>{ property: 'name', label: 'Text' },
    birthdate: <ThfGridColumn>{
      property: 'birthdate',
      label: 'Date',
      type: 'date',
    },
    lastLogin: <ThfGridColumn>{
      property: 'lastLogin',
      label: 'DateTime',
      type: 'dateTime',
    },
    active: <ThfGridColumn>{ property: 'active', label: 'Boolean' },
    email: <ThfGridColumn>{
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this),
    },
    over: <ThfGridColumn>{
      property: 'over',
      label: 'Currency',
      type: 'currency',
      format: 'BRL',
      locale: 'pt',
    },
  };

  constructor(private readonly poNotification: PoNotificationService) {}

  ngAfterViewInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeLiterals() {
    try {
      this.literalsCustom = JSON.parse(this.literals);
    } catch {
      this.literalsCustom = {};
    }
  }

  changeOptionsPage() {
    try {
      this.customOptionsPage = JSON.parse(this.optionsPage);
    } catch {
      this.customOptionsPage = [
        { value: 10, label: '10' },
        { value: 20, label: '20' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
        { value: 1000, label: '1000' },
      ];
    }
  }

  changeOtherProperties() {
    this.actions = this.otherProperties.includes('actions')
      ? this.customAction
      : [];

    const isVirtualScrollEnabled =
      this.otherProperties.includes('virtualScroll');
    const isResizableEnabled = this.otherProperties.includes('resizable');

    this.otherPropertiesOptions = this.otherPropertiesOptions.map((option) => {
      if (option.value === 'textWrap') {
        return { ...option, disabled: isVirtualScrollEnabled };
      }
      return option;
    });

    if (isVirtualScrollEnabled && this.otherProperties.includes('textWrap')) {
      this.otherProperties = this.otherProperties.filter(
        (prop) => prop !== 'textWrap'
      );
    }

    this.resizable = isResizableEnabled;
  }

  changePagination() {
    const pageable = this.pagination.includes('pageable');

    this.paginationOptions[1].disabled = !pageable;
    this.paginationOptions[2].disabled = !pageable;
    this.paginationOptions = [...this.paginationOptions];
  }

  changeSelectionOptions() {
    const selectable = this.selection.includes('selectable');

    this.selectionOptions[1].disabled = !selectable;
    this.selectionOptions[2].disabled = !selectable;
    this.selectionOptions[3].disabled = !selectable;
    this.selectionOptions[4].disabled = !selectable;
    this.selectionOptions[5].disabled = !selectable;
    this.selectionOptions[6].disabled = !selectable;
    this.selectionOptions[7].disabled = !selectable;
    this.selectionOptions[8].disabled = !selectable;
    this.selectionOptions = [...this.selectionOptions];
  }

  changeSort() {
    try {
      this.customSort = JSON.parse(this.sort);
    } catch {
      this.customSort = [
        {
          field: '',
          dir: 'asc',
        },
      ];
    }
  }

  openEmail(email: string) {
    window.open(\`mailto:\${email}\`, '_blank');
  }

  restore() {
    this.actions = undefined;
    this.columnsName = ['id', 'name', 'birthdate', 'email', 'over'];
    this.componentsSize = 'medium';
    this.event = '';
    this.filterinputModeValue = 'basic';
    this.literals = '';
    this.literalsCustom = {};
    this.maxResizableValue = 300;
    this.minResizableValue = 10;
    this.height = 400;
    this.minHeight = undefined;
    this.maxHeight = undefined;
    this.optionsPage = \`[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]\`;
    this.pagination = ['showMoreVisible'];
    this.properties = [];
    this.resizable = false;
    this.selection = ['selectableEntireLine'];
    this.sort = '[{"field": "", "dir": "asc"}]';
    this.spacing = ThfColumnSpacing.Medium;
    this.otherProperties = [
      'actionsFilter',
      'container',
      'draggable',
      'groupable',
      'sortable',
      'striped',
      'virtualScroll',
    ];

    this.updateColumns();
    this.changeLiterals();
    this.changeSort();
    this.changePagination();
    this.changeSelectionOptions();
    this.changeOtherProperties();
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }
}
`;var pn=()=>[];function cn(d,C){if(d&1){let a=F();i(0,"div",7)(1,"po-container",8)(2,"po-checkbox-group",9),h("ngModelChange",function(n){p(a);let l=u();return f(l.columnsName,n)||(l.columnsName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateColumns())}),t()(),i(3,"po-container",8)(4,"po-checkbox-group",10),h("ngModelChange",function(n){p(a);let l=u();return f(l.selection,n)||(l.selection=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changeSelectionOptions())}),t()(),i(5,"po-container",8)(6,"po-checkbox-group",11),h("ngModelChange",function(n){p(a);let l=u();return f(l.otherProperties,n)||(l.otherProperties=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changeOtherProperties())}),t()(),i(7,"po-container",8)(8,"po-radio-group",12),h("ngModelChange",function(n){p(a);let l=u();return f(l.spacing,n)||(l.spacing=n),c(n)}),t()(),i(9,"po-container",8)(10,"po-radio-group",13),h("ngModelChange",function(n){p(a);let l=u();return f(l.componentsSize,n)||(l.componentsSize=n),c(n)}),t(),i(11,"po-radio-group",14),h("ngModelChange",function(n){p(a);let l=u();return f(l.filterinputModeValue,n)||(l.filterinputModeValue=n),c(n)}),t()(),i(12,"po-container",15)(13,"po-number",16),h("ngModelChange",function(n){p(a);let l=u();return f(l.minResizableValue,n)||(l.minResizableValue=n),c(n)}),t(),i(14,"po-number",17),h("ngModelChange",function(n){p(a);let l=u();return f(l.maxResizableValue,n)||(l.maxResizableValue=n),c(n)}),t()(),i(15,"po-container",15)(16,"po-number",18),h("ngModelChange",function(n){p(a);let l=u();return f(l.height,n)||(l.height=n),c(n)}),t(),i(17,"po-number",19),h("ngModelChange",function(n){p(a);let l=u();return f(l.maxHeight,n)||(l.maxHeight=n),c(n)}),t(),i(18,"po-number",20),h("ngModelChange",function(n){p(a);let l=u();return f(l.minHeight,n)||(l.minHeight=n),c(n)}),t()(),i(19,"po-container",15)(20,"po-textarea",21),h("ngModelChange",function(n){p(a);let l=u();return f(l.literals,n)||(l.literals=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeLiterals())}),t()(),i(21,"po-container",15)(22,"po-textarea",22),h("ngModelChange",function(n){p(a);let l=u();return f(l.sort,n)||(l.sort=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeSort())}),t()(),i(23,"po-container",23)(24,"div",24)(25,"po-checkbox-group",25),h("ngModelChange",function(n){p(a);let l=u();return f(l.pagination,n)||(l.pagination=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changePagination())}),t(),i(26,"po-textarea",26),h("ngModelChange",function(n){p(a);let l=u();return f(l.optionsPage,n)||(l.optionsPage=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeOptionsPage())}),t()()()(),i(27,"div",27)(28,"po-button",28),g("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=u();m(2),b("ngModel",a.columnsName),s("p-options",a.columnsOptions),m(2),s("p-options",a.selectionOptions),b("ngModel",a.selection),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),b("ngModel",a.otherProperties),m(2),s("p-columns",4)("p-options",a.spacingOptions),b("ngModel",a.spacing),m(2),b("ngModel",a.componentsSize),s("p-options",a.componentsSizeOptions),m(),b("ngModel",a.filterinputModeValue),s("p-options",a.filterModeOptions),m(2),b("ngModel",a.minResizableValue),s("disabled",!a.resizable),m(),b("ngModel",a.maxResizableValue),s("disabled",!a.resizable),m(2),b("ngModel",a.height),m(),b("ngModel",a.maxHeight),m(),b("ngModel",a.minHeight),m(2),b("ngModel",a.literals),m(2),b("ngModel",a.sort),m(3),s("p-options",a.paginationOptions),b("ngModel",a.pagination),m(),b("ngModel",a.optionsPage),s("disabled",!a.pagination.includes("pageable"))}}var Ht=(()=>{class d{constructor(a){this.poNotification=a,this.htmlCode=Qt,this.tsCode=Bt,this.actions=void 0,this.columnsName=["id","name","birthdate","email","over"],this.componentsSize="medium",this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}],this.customSort=[{field:"",dir:"asc"}],this.event="",this.filterinputModeValue="basic",this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=[],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=ce.Medium,this.otherProperties=["actionsFilter","draggable","container","groupable","sortable","striped","virtualScroll"],this.customAction=[{label:"",action:r=>{this.poNotification.information(`${r.id} - ${r.name}`)},icon:"ICON_MORE_VERT",fixed:!0}],this.componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Single",value:"singleSelect",disabled:!0},{label:"Entire Line",value:"selectableEntireLine",disabled:!0},{label:"Hide Select All",value:"hideSelectAll",disabled:!0},{label:"Action Delete",value:"actionDelete",disabled:!0},{label:"Action Edit",value:"actionEdit",disabled:!0},{label:"Action Excel",value:"actionExcel",disabled:!0},{label:"Action PDF",value:"actionPdf",disabled:!0},{label:"Hide Batch Actions",value:"hideBatchActions",disabled:!0}],this.spacingOptions=[{label:"extraSmall",value:ce.ExtraSmall},{label:"Small",value:ce.Small},{label:"Medium",value:ce.Medium},{label:"Large",value:ce.Large}],this.filterModeOptions=[{label:"Basic",value:"basic"},{label:"Service",value:"service"}],this.otherPropertiesOptions=[{label:"Actions",value:"actions"},{label:"Actions Filter",value:"actionsFilter"},{label:"Action Right",value:"actionRight"},{label:"Container",value:"container"},{label:"Draggable",value:"draggable"},{label:"Groupable",value:"groupable"},{label:"Hide Columns Manager",value:"hideColumnsManager"},{label:"Hide Actions Fixed Columns",value:"hideActionFixedColumns"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Loading",value:"loading"},{label:"Resizable",value:"resizable"},{label:"Show Densification Configuration",value:"showDensificationConfiguration"},{label:"Show Draggable Icon",value:"showDraggableIcon"},{label:"Sortable",value:"sortable"},{label:"Striped",value:"striped"},{label:"Text Wrap",value:"textWrap",disabled:!1},{label:"Virtual Scroll",value:"virtualScroll"},{label:"Show Footer Aggregates",value:"showFooterAggregates"}],this.paginationOptions=[{label:"Pageable",value:"pageable"},{label:"Show More Disabled",value:"showMoreDisabled",disabled:!1},{label:"Show More Visible",value:"showMoreVisible",disabled:!1}],this.items=[{id:1,name:"Jo\xE3o Silva",birthdate:"1990-05-15",lastLogin:"2024-02-14T15:30:00Z",active:!0,email:"joao.silva@example.com",over:95.5},{id:2,name:"Maria Souza",birthdate:"1985-10-23",lastLogin:"2024-02-13T08:45:00Z",active:!1,email:"maria.souza@example.com",over:96},{id:3,name:"Carlos Almeida",birthdate:"1998-07-09",lastLogin:"2024-02-14T20:15:00Z",active:!0,email:"carlos.almeida@example.com",over:1100.5},{id:4,name:"Fernanda Costa",birthdate:"1992-03-12",lastLogin:"2024-02-12T18:00:00Z",active:!1,email:"fernanda.costa@example.com",over:1200.5},{id:5,name:"Ricardo Lima",birthdate:"1980-11-30",lastLogin:"2024-02-11T07:25:00Z",active:!0,email:"ricardo.lima@example.com",over:300.89},{id:6,name:"Ana Pereira",birthdate:"1995-09-18",lastLogin:"2024-02-10T14:10:00Z",active:!0,email:"ana.pereira@example.com",over:50.5},{id:7,name:"Pedro Henrique",birthdate:"1993-06-25",lastLogin:"2024-02-09T12:30:00Z",active:!1,email:"pedro.henrique@example.com",over:35},{id:8,name:"Beatriz Ramos",birthdate:"1999-04-03",lastLogin:"2024-02-08T09:15:00Z",active:!0,email:"beatriz.ramos@example.com",over:.5},{id:9,name:"Lucas Oliveira",birthdate:"1987-07-22",lastLogin:"2024-02-07T16:45:00Z",active:!1,email:"lucas.oliveira@example.com",over:100},{id:10,name:"Juliana Martins",birthdate:"1996-01-05",lastLogin:"2024-02-06T11:00:00Z",active:!0,email:"juliana.martins@example.com",over:100.5},{id:11,name:"Eduardo Nunes",birthdate:"1982-08-17",lastLogin:"2024-02-05T17:20:00Z",active:!1,email:"eduardo.nunes@example.com",over:950},{id:12,name:"Camila Ferreira",birthdate:"2000-12-29",lastLogin:"2024-02-04T13:40:00Z",active:!0,email:"camila.ferreira@example.com",over:99.99}],this.columns=[{property:"id",label:"Number"},{property:"name",label:"Text"},{property:"birthdate",label:"Date",type:"date"},{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)},{property:"over",label:"Currency",type:"currency",format:"BRL",locale:"pt"}],this.columnsOptions=[{value:"id",label:"Number"},{value:"name",label:"Text"},{value:"birthdate",label:"Date"},{value:"lastLogin",label:"DateTime"},{value:"active",label:"Boolean"},{value:"email",label:"Link"},{value:"over",label:"Currency"}],this.columnsDefinition={id:{property:"id",label:"Number"},name:{property:"name",label:"Text"},birthdate:{property:"birthdate",label:"Date",type:"date"},lastLogin:{property:"lastLogin",label:"DateTime",type:"dateTime"},active:{property:"active",label:"Boolean"},email:{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)},over:{property:"over",label:"Currency",type:"currency",format:"BRL",locale:"pt"}}}ngAfterViewInit(){this.restore()}changeEvent(a){this.event=a}changeLiterals(){try{this.literalsCustom=JSON.parse(this.literals)}catch{this.literalsCustom={}}}changeOptionsPage(){try{this.customOptionsPage=JSON.parse(this.optionsPage)}catch{this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}]}}changeOtherProperties(){this.actions=this.otherProperties.includes("actions")?this.customAction:[];let a=this.otherProperties.includes("virtualScroll"),r=this.otherProperties.includes("resizable");this.otherPropertiesOptions=this.otherPropertiesOptions.map(n=>n.value==="textWrap"?Q(O({},n),{disabled:a}):n),a&&this.otherProperties.includes("textWrap")&&(this.otherProperties=this.otherProperties.filter(n=>n!=="textWrap")),this.resizable=r}changePagination(){let a=this.pagination.includes("pageable");this.paginationOptions[1].disabled=!a,this.paginationOptions[2].disabled=!a,this.paginationOptions=[...this.paginationOptions]}changeSelectionOptions(){let a=this.selection.includes("selectable");this.selectionOptions[1].disabled=!a,this.selectionOptions[2].disabled=!a,this.selectionOptions[3].disabled=!a,this.selectionOptions[4].disabled=!a,this.selectionOptions[5].disabled=!a,this.selectionOptions[6].disabled=!a,this.selectionOptions[7].disabled=!a,this.selectionOptions[8].disabled=!a,this.selectionOptions=[...this.selectionOptions]}changeSort(){try{this.customSort=JSON.parse(this.sort)}catch{this.customSort=[{field:"",dir:"asc"}]}}openEmail(a){window.open(`mailto:${a}`,"_blank")}restore(){this.actions=void 0,this.columnsName=["id","name","birthdate","email","over"],this.componentsSize="medium",this.event="",this.filterinputModeValue="basic",this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=["showMoreVisible"],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=ce.Medium,this.otherProperties=["actionsFilter","container","draggable","groupable","sortable","striped","virtualScroll"],this.updateColumns(),this.changeLiterals(),this.changeSort(),this.changePagination(),this.changeSelectionOptions(),this.changeOtherProperties()}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}static{this.\u0275fac=function(r){return new(r||d)(R(fe))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-labs-doc"]],standalone:!1,decls:10,vars:49,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-param-delete-api","value",3,"t-change-fixed-columns","t-change-order-column","t-change-page-size","t-change-sort-column","t-change-visible-columns","t-change-options-column-manager","t-changed-density","t-delete-item","t-delete-items","t-delete-item-error","t-filter-item-error","t-restore-column-manager","t-selected","t-all-selected","t-unselected","t-all-unselected","t-change-group","t-rows-selected","t-action-delete","t-action-edit","t-action-excel","t-action-pdf","t-actions","t-actions-filter","t-actions-right","t-components-size","t-columns","t-container","t-draggable","t-filter-input-mode","t-groupable","t-height","t-max-height","t-min-height","t-hide-columns-manager","t-hide-action-fixed-columns","t-hide-batch-actions","t-hide-select-all","t-hide-table-search","t-literals","t-loading","t-max-resizable-width","t-min-resizable-width","t-options-paging","t-pageable","t-resizable","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-show-draggable-icon","t-show-more-disabled","t-show-more-visible","t-single-select","t-sort","t-sortable","t-spacing","t-striped","t-text-wrap","t-virtual-scroll","t-show-footer-aggregates","t-items"],[1,"po-mt-2",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","columnsName","p-columns","4","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-options"],["name","selection","p-label","Selection","p-columns","4",3,"ngModelChange","p-change","p-options","ngModel"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","spacing","p-help","Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar.","p-label","Spacing",3,"ngModelChange","p-columns","p-options","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterinputModeValue","p-label","Filter Input Mode",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-mb-2","po-lg-6",2,"display","flex"],["p-label","Min Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Max Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Max Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Min Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","literals","p-label","Literals","p-help",'{"noData": "Sem dados a serem exibidos"}',3,"ngModelChange","p-change-model","ngModel"],["name","sort","p-label","Sort","p-help",'[{ "field":"name", "dir":"asc" }]',3,"ngModelChange","p-change-model","ngModel"],[1,"po-mb-2","po-lg-12",2,"display","flex"],[2,"display","flex","flex-wrap","wrap"],["name","pagination","p-label","Pagination",1,"po-lg-6",3,"ngModelChange","p-change","p-options","ngModel"],["name","optionsPage","p-label","Options Page","p-help",'[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel","disabled"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-grid",3),g("t-change-fixed-columns",function(){return p(l),c(n.changeEvent("t-change-fixed-columns"))})("t-change-order-column",function(){return p(l),c(n.changeEvent("t-change-order-column"))})("t-change-page-size",function(){return p(l),c(n.changeEvent("t-change-page-size"))})("t-change-sort-column",function(){return p(l),c(n.changeEvent("t-change-sort-column"))})("t-change-visible-columns",function(){return p(l),c(n.changeEvent("t-change-visible-columns"))})("t-change-options-column-manager",function(){return p(l),c(n.changeEvent("t-change-options-column-manager"))})("t-changed-density",function(){return p(l),c(n.changeEvent("t-changed-density"))})("t-delete-item",function(){return p(l),c(n.changeEvent("t-delete-item"))})("t-delete-items",function(){return p(l),c(n.changeEvent("t-delete-items"))})("t-delete-item-error",function(){return p(l),c(n.changeEvent("t-delete-item-error"))})("t-filter-item-error",function(){return p(l),c(n.changeEvent("t-filter-item-error"))})("t-restore-column-manager",function(){return p(l),c(n.changeEvent("t-restore-column-manager"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-all-selected",function(){return p(l),c(n.changeEvent("t-all-selected"))})("t-unselected",function(){return p(l),c(n.changeEvent("t-unselected"))})("t-all-unselected",function(){return p(l),c(n.changeEvent("t-all-unselected"))})("t-change-group",function(){return p(l),c(n.changeEvent("t-change-group"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),L(8,cn,29,27,"ng-template",null,0,Z),t()}if(r&2){let l=K(9);m(4),s("t-action-delete",n.selection.includes("actionDelete"))("t-action-edit",n.selection.includes("actionEdit"))("t-action-excel",n.selection.includes("actionExcel"))("t-action-pdf",n.selection.includes("actionPdf"))("t-actions",n.actions||J(48,pn))("t-actions-filter",n.otherProperties.includes("actionsFilter"))("t-actions-right",n.otherProperties.includes("actionRight"))("t-components-size",n.componentsSize)("t-columns",n.columns)("t-container",n.otherProperties.includes("container"))("t-draggable",n.otherProperties.includes("draggable"))("t-filter-input-mode",n.filterinputModeValue)("t-groupable",n.otherProperties.includes("groupable"))("t-height",n.height)("t-max-height",n.maxHeight)("t-min-height",n.minHeight)("t-hide-columns-manager",n.otherProperties.includes("hideColumnsManager"))("t-hide-action-fixed-columns",n.otherProperties.includes("hideActionFixedColumns"))("t-hide-batch-actions",n.selection.includes("hideBatchActions"))("t-hide-select-all",n.selection.includes("hideSelectAll"))("t-hide-table-search",n.otherProperties.includes("hideTableSearch"))("t-literals",n.literalsCustom)("t-loading",n.otherProperties.includes("loading"))("t-max-resizable-width",n.maxResizableValue)("t-min-resizable-width",n.minResizableValue)("t-options-paging",n.customOptionsPage)("t-pageable",n.pagination.includes("pageable"))("t-resizable",n.resizable)("t-selectable",n.selection.includes("selectable"))("t-selectable-entire-line",n.selection.includes("selectableEntireLine"))("t-show-densification-configuration",n.otherProperties.includes("showDensificationConfiguration"))("t-show-draggable-icon",n.otherProperties.includes("showDraggableIcon"))("t-show-more-disabled",n.pagination.includes("showMoreDisabled"))("t-show-more-visible",n.pagination.includes("showMoreVisible"))("t-single-select",n.selection.includes("singleSelect"))("t-sort",n.customSort)("t-sortable",n.otherProperties.includes("sortable"))("t-spacing",n.spacing)("t-striped",n.otherProperties.includes("striped"))("t-text-wrap",n.otherProperties.includes("textWrap"))("t-virtual-scroll",n.otherProperties.includes("virtualScroll"))("t-show-footer-aggregates",n.otherProperties.includes("showFooterAggregates"))("t-items",n.items),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[G,U,W,v,P,be,le,gt,ve,me,M,T],encapsulation:2})}}return d})();var Wt=`<thf-grid
    #gridComponent
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-auto-size]="true"
    [t-columns]="columns"
    [t-actions-filter]="true"
    [t-selectable]="true"
    [t-selectable-entire-line]="false"
    [t-actions-right]="true"
    [t-draggable]="true"
    [t-groupable]="true"
    [t-height]="400"
    [t-edit-properties]="editProperties"
  />

`,Ut=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridEditProperties,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-inline-doc',
  templateUrl: './thf-grid-editing-inline-doc.component.html',
  styleUrls: ['./thf-grid-editing-inline-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingInlineDocComponent {
 @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', filter: true, editProperties: { disabled: true } },
    { property: 'name', label: 'Nome', filter: true },
    {
      property: 'birthdate',
      label: 'Data de  nascimento',
      type: 'date',
      editProperties: {
        componentEditable: 'datepicker',
        clean: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        helper:
          'Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.',
        keydown: this.onKeyDown.bind(this, 'birthdate'),
      },
    },
    {
      property: 'city',
      label: 'Cidade',
      filter: true,
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: '4201307', label: 'Araquari' },
          { value: '1501402', label: 'Bel\xE9m' },
          { value: '3509502', label: 'Campinas' },
          { value: '4106902', label: 'Curitiba' },
          { value: '4209102', label: 'Joinville' },
          { value: '3534401', label: 'Osasco' },
          { value: '3304557', label: 'Rio de Janeiro' },
          { value: '4215802', label: 'S\xE3o Bento do Sul' },
          { value: '4216206', label: 'S\xE3o Francisco do Sul' },
          { value: '3550308', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      },
    },
  ];

  form!: FormGroup;
  editProperties!: ThfGridEditProperties;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
    });
    return this.form;
  }
}

`;var En=["gridComponent"],Kt=(()=>{class d{constructor(){this.htmlCode=Wt,this.tsCode=Ut,this.columns=[{property:"id",label:"Id",filter:!0,editProperties:{disabled:!0}},{property:"name",label:"Nome",filter:!0},{property:"birthdate",label:"Data de  nascimento",type:"date",editProperties:{componentEditable:"datepicker",clean:!0,required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.",keydown:this.onKeyDown.bind(this,"birthdate")}},{property:"city",label:"Cidade",filter:!0,editProperties:{componentEditable:"combo",options:[{value:"4201307",label:"Araquari"},{value:"1501402",label:"Bel\xE9m"},{value:"3509502",label:"Campinas"},{value:"4106902",label:"Curitiba"},{value:"4209102",label:"Joinville"},{value:"3534401",label:"Osasco"},{value:"3304557",label:"Rio de Janeiro"},{value:"4215802",label:"S\xE3o Bento do Sul"},{value:"4216206",label:"S\xE3o Francisco do Sul"},{value:"3550308",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}}]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)}}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}setFormGroup(a){return this.form=new B({id:new S(a.id,[I.required]),name:new S(a.name),city:new S(a.city),birthdate:new S(a.birthdate)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-inline-doc"]],viewQuery:function(r,n){if(r&1&&D(En,5),r&2){let l;A(l=_())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:12,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-auto-size","t-columns","t-actions-filter","t-selectable","t-selectable-entire-line","t-actions-right","t-draggable","t-groupable","t-height","t-edit-properties"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Edi\xE7\xE3o em linha"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-auto-size",!0)("t-columns",n.columns)("t-actions-filter",!0)("t-selectable",!0)("t-selectable-entire-line",!1)("t-actions-right",!0)("t-draggable",!0)("t-groupable",!0)("t-height",400)("t-edit-properties",n.editProperties),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var $t=`<div class="po-row po-mb-2">
  <po-button
    class="po-mr-2"
    p-label="Finaliza modo edi\xE7\xE3o"
    (p-click)="finishEditMode()"
  ></po-button>
  <po-button
    p-label="Get itens alterados"
    [p-disabled]="getChangedItems()?.length === 0"
    (p-click)="poModal.open()"
  ></po-button>
</div>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-single-select]="true"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-sortable]="false"
  [t-custom-templates]="{ name: nameTemplate, perfil: perfilTemplate }"
/>

<ng-template #nameTemplate let-formControl="formControl">
  <po-input
    #input
    p-additional-help-tooltip="Informe pelo menos o primeiro nome."
    p-placeholder="Informe o nome"
    [formControl]="formControl"
    [p-error-pattern]="'Obrigat\xF3rio'"
    [p-required]="true"
    [p-required-field-error-message]="true"
    (p-keydown)="onKeyDown('name', $event)"
  ></po-input>
</ng-template>
<ng-template #perfilTemplate let-formControl="formControl">
  <po-multiselect
    #multiselect
    [formControl]="formControl"
    [p-field-error-message]="'Obrigat\xF3rio'"
    [p-required]="true"
    [p-additional-help-tooltip]="
      'Marque um ou mais status, conforme necess\xE1rio.'
    "
    [p-options]="[
      { value: 1, label: 'RH' },
      { value: 2, label: 'Almoxarifado' },
      { value: 3, label: 'Vendedor' }
    ]"
    [p-field-label]="'label'"
    [p-field-value]="'value'"
    [p-control-value-with-label]="true"
    (p-keydown)="onKeyDown('otherStatus', $event)"
  ></po-multiselect>
</ng-template>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>`,Jt=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  PoInputComponent,
  PoModalComponent,
  PoMultiselectComponent,
} from '@po-ui/ng-components';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-row-actions-doc',
  templateUrl: './thf-grid-grid-row-actions-doc.component.html',
  styleUrls: ['./thf-grid-grid-row-actions-doc.component.css'],
  standalone: false,
})
export class ThfGridRowActionsDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  @ViewChild('multiselect', { static: false })
  multiselect!: PoMultiselectComponent;
  @ViewChild('input', { static: false }) input!: PoInputComponent;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      perfil: [1],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      perfil: [2],
      state: { value: 'SC', label: 'Santa Catarina' },
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      perfil: [3],
      state: { value: 'SP', label: 'S\xE3o Paulo' },
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      perfil: [2],
      state: { value: 'RJ', label: 'Rio de Janeiro' },
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      perfil: [1],
      state: null,
      city: null,
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      filter: true,
      editProperties: {
        componentEditable: 'input',
        required: true
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'values',
      label: 'Values',
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        keydown: this.onKeyDown.bind(this, 'values'),
      },
    },
    {
      property: 'perfil',
      label: 'Perfil',
      filter: true,
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 1, label: 'RH' },
          { value: 2, label: 'Almoxarifado' },
          { value: 3, label: 'Vendedor' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
        required: true
      },
    },
    {
      property: 'state',
      label: 'Estado',
      filter: true,
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        options: [
          { value: 'MG', label: 'Minas Gerais' },
          { value: 'RJ', label: 'Rio de Janeiro' },
          { value: 'SC', label: 'Santa Catarina' },
          { value: 'SP', label: 'S\xE3o Paulo' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'city',
      label: 'cidade',
      editProperties: {
        componentEditable: 'combo',
        required: false,
        removeInitialFilter: true,
        disabled: false,
        fieldLabel: 'value',
        fieldValue: 'value',
      },
    },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  myForm!: FormGroup;

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        this.myForm = new FormGroup({
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          perfil: new FormControl(dataItem.perfil, [Validators.required]),
          state: new FormControl(dataItem.state),
          city: new FormControl(dataItem.city),
        });
        this.handleStateAndCity(this.myForm?.controls['state'].value);
        return this.myForm;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
      validateField: this.onValidate.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    const city = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (city?.editProperties) {
      city.editProperties.disabled = true;
    }
    return true;
  }

  onValidate(value: any, columnProperty: any) {
    console.log('onValidateField:', value, columnProperty);

    if (columnProperty === 'state') {
      this.myForm?.controls['city'].setValue(null);
      const stateValue = this.myForm.controls['state'].value;
      const cityColumn = this.columnWithItems.find(
        (column) => column.property === 'city'
      );

      if (!cityColumn?.editProperties) {
        return true;
      }

      if (!stateValue) {
        cityColumn.editProperties.disabled = true;
      } else {
        cityColumn.editProperties.disabled = false;
        cityColumn.editProperties.options = this.getCity(stateValue.value);

        this.myForm?.controls['city'].setValue('');
      }
    }

    return true;
  }

  handleStateAndCity(value: any) {
    const cityColumn = this.columnWithItems.find(
      (column) => column.property === 'city'
    );
    if (!cityColumn?.editProperties) {
      return;
    }
    if (value) {
      cityColumn.editProperties.options = this.getCity(value);
      cityColumn.editProperties.disabled = false;
    } else {
      cityColumn.editProperties.disabled = true;
    }
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      if (property === 'otherStatus') {
        this.multiselect.showAdditionalHelp();
        return;
      } else if (property === 'name') {
        this.input.showAdditionalHelp();
        return;
      }
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  private getCity(state: string) {
    const city = {
      MG: [
        { value: 'Belo Horizonte' },
        { value: 'Contagem' },
        { value: 'Juiz de Fora' },
        { value: 'Uberl\xE2ndia' },
      ],
      RJ: [
        { value: 'Duque de Caxias' },
        { value: 'Nova Igua\xE7u' },
        { value: 'Rio de Janeiro' },
        { value: 'S\xE3o Gon\xE7alo' },
      ],
      SP: [
        { value: 'Campinas' },
        { value: 'Guarulhos' },
        { value: 'S\xE3o Bernardo do Campo' },
        { value: 'S\xE3o Paulo' },
      ],
      SC: [
        { value: 'Balne\xE1rio Cambori\xFA' },
        { value: 'Brusque' },
        { value: 'Lages' },
        { value: 'Palho\xE7a' },
      ],
    };

    return city[state as keyof typeof city] || [];
  }
}
  
`;var Sn=["modal"],bn=["gridComponent"],fn=["multiselect"],hn=["input"],vn=(d,C)=>({name:d,perfil:C}),gn=()=>({value:1,label:"RH"}),yn=()=>({value:2,label:"Almoxarifado"}),Cn=()=>({value:3,label:"Vendedor"}),Pn=(d,C,a)=>[d,C,a];function Tn(d,C){if(d&1){let a=F();i(0,"po-input",14,4),g("p-keydown",function(n){p(a);let l=u();return c(l.onKeyDown("name",n))}),t()}if(d&2){let a=C.formControl;s("formControl",a)("p-error-pattern","Obrigat\xF3rio")("p-required",!0)("p-required-field-error-message",!0)}}function wn(d,C){if(d&1){let a=F();i(0,"po-multiselect",15,5),g("p-keydown",function(n){p(a);let l=u();return c(l.onKeyDown("otherStatus",n))}),t()}if(d&2){let a=C.formControl;s("formControl",a)("p-field-error-message","Obrigat\xF3rio")("p-required",!0)("p-additional-help-tooltip","Marque um ou mais status, conforme necess\xE1rio.")("p-options",et(11,Pn,J(8,gn),J(9,yn),J(10,Cn)))("p-field-label","label")("p-field-value","value")("p-control-value-with-label",!0)}}function Dn(d,C){if(d&1&&(i(0,"div",16)(1,"pre"),e(2),t()()),d&2){let a=u();m(2),xe(a.getLabelChangedItems())}}var Zt=(()=>{class d{constructor(){this.htmlCode=$t,this.tsCode=Jt,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],perfil:[1],state:{value:"SC",label:"Santa Catarina"},city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],perfil:[2],state:{value:"SC",label:"Santa Catarina"},city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],perfil:[2],state:{value:"RJ",label:"Rio de Janeiro"},city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],perfil:[1],state:null,city:null}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",filter:!0,editProperties:{componentEditable:"input",required:!0}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",keydown:this.onKeyDown.bind(this,"values")}},{property:"perfil",label:"Perfil",filter:!0,editProperties:{componentEditable:"multiselect",options:[{value:1,label:"RH"},{value:2,label:"Almoxarifado"},{value:3,label:"Vendedor"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0,required:!0}},{property:"state",label:"Estado",filter:!0,editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,options:[{value:"MG",label:"Minas Gerais"},{value:"RJ",label:"Rio de Janeiro"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"city",label:"cidade",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,disabled:!1,fieldLabel:"value",fieldValue:"value"}}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),this.myForm=new B({name:new S(a.name),status:new S(a.status,[I.min(1)]),values:new S(a.values,[I.required]),perfil:new S(a.perfil,[I.required]),state:new S(a.state),city:new S(a.city)}),this.handleStateAndCity(this.myForm?.controls.state.value),this.myForm),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),validateField:this.onValidate.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a);let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(r.editProperties.disabled=!0)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a];let r=this.columnWithItems.find(n=>n.property==="city");return r?.editProperties&&(r.editProperties.disabled=!0),!0}onValidate(a,r){if(console.log("onValidateField:",a,r),r==="state"){this.myForm?.controls.city.setValue(null);let n=this.myForm.controls.state.value,l=this.columnWithItems.find(E=>E.property==="city");if(!l?.editProperties)return!0;n?(l.editProperties.disabled=!1,l.editProperties.options=this.getCity(n.value),this.myForm?.controls.city.setValue("")):l.editProperties.disabled=!0}return!0}handleStateAndCity(a){let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(a?(r.editProperties.options=this.getCity(a),r.editProperties.disabled=!1):r.editProperties.disabled=!0)}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){if(r.code==="F9"){if(a==="otherStatus"){this.multiselect.showAdditionalHelp();return}else if(a==="name"){this.input.showAdditionalHelp();return}this.thfGrid.showAdditionalHelp(a)}}getCity(a){return{MG:[{value:"Belo Horizonte"},{value:"Contagem"},{value:"Juiz de Fora"},{value:"Uberl\xE2ndia"}],RJ:[{value:"Duque de Caxias"},{value:"Nova Igua\xE7u"},{value:"Rio de Janeiro"},{value:"S\xE3o Gon\xE7alo"}],SP:[{value:"Campinas"},{value:"Guarulhos"},{value:"S\xE3o Bernardo do Campo"},{value:"S\xE3o Paulo"}],SC:[{value:"Balne\xE1rio Cambori\xFA"},{value:"Brusque"},{value:"Lages"},{value:"Palho\xE7a"}]}[a]||[]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-row-actions-doc"]],viewQuery:function(r,n){if(r&1&&(D(Sn,7),D(bn,5),D(fn,5),D(hn,5)),r&2){let l;A(l=_())&&(n.poModal=l.first),A(l=_())&&(n.thfGrid=l.first),A(l=_())&&(n.multiselect=l.first),A(l=_())&&(n.input=l.first)}},standalone:!1,decls:17,vars:17,consts:[["gridComponent",""],["nameTemplate",""],["perfilTemplate",""],["modal",""],["input",""],["multiselect",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-selectable-entire-line","t-single-select","t-items","t-columns","t-grid-row-actions","t-actions-right","t-sortable","t-custom-templates"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],[3,"htmlCode","tsCode"],["p-additional-help-tooltip","Informe pelo menos o primeiro nome.","p-placeholder","Informe o nome",3,"p-keydown","formControl","p-error-pattern","p-required","p-required-field-error-message"],[3,"p-keydown","formControl","p-field-error-message","p-required","p-additional-help-tooltip","p-options","p-field-label","p-field-value","p-control-value-with-label"],[1,"code"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",6),e(2,"Edi\xE7\xE3o flu\xEDda"),t(),o(3,"po-divider"),i(4,"div",7)(5,"po-button",8),g("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(6,"po-button",9),g("p-click",function(){return p(l),c(n.poModal.open())}),t()(),o(7,"thf-grid",10,0),L(9,Tn,2,4,"ng-template",null,1,Z)(11,wn,2,15,"ng-template",null,2,Z),i(13,"po-modal",11,3),L(15,Dn,3,1,"div",12),t(),o(16,"app-code-accordion-doc",13),t()}if(r&2){let l,E,y=K(10),Ri=K(12);m(6),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-selectable-entire-line",!1)("t-single-select",!0)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-sortable",!1)("t-custom-templates",Pe(14,vn,y,Ri)),m(8),s("ngIf",(E=n.getChangedItems())==null?null:E.length),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Se,G,st,W,v,P,de,Fe,qe,M,T],styles:[".code[_ngcontent-%COMP%]{padding:1rem;background-color:#000;color:#adff2f;margin-top:.5rem;margin-left:2rem;border-radius:.5rem}"]})}}return d})();var Xt=`<div class="po-row po-mb-2">
  <po-button
    class="po-mr-2"
    p-label="Finaliza modo edi\xE7\xE3o"
    (p-click)="finishEditMode()"
  ></po-button>
  <po-button
    p-label="Get itens alterados"
    [p-disabled]="getChangedItems()?.length === 0"
    (p-click)="poModal.open()"
  ></po-button>
</div>

<thf-grid
  #gridComponent
  [t-height]="400"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-aggregates]="aggregatesDescriptor"
  [t-show-footer-aggregates]="true"
  [t-actions]="lineActions"
  [t-actions-right]="true"
  [t-sortable]="true"
  [t-action-pdf]="true"
  [t-action-excel]="true"
  [t-custom-actions]="customBulkActions"
/>

<po-modal #modal p-title="Itens que foram alterados">
  <div class="code" *ngIf="getChangedItems()?.length">
    <pre>{{ getLabelChangedItems() }}</pre>
  </div>
</po-modal>

<po-modal
  #bulkEditModal
  p-title="Edi\xE7\xE3o em lote (a\xE7\xE3o customizada)"
  [p-primary-action]="bulkEditModalConfirm"
>
  <po-multiselect [(ngModel)]="editColumnsFilterValues" name="editColumnsFilterValues" p-label="Propriedades para Editar" [p-options]="editColumnsFilter"></po-multiselect>

  @for (column of editColumnsFilter; track column.property) {
    <ng-container *ngIf="editColumnsFilterValues.includes(column.property)">
      @switch (column.editProperties.componentEditable) {
        @case ('combo') {
          <po-combo
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-options]="column.editProperties.options"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
        @case ('decimal') {
          <po-decimal
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-decimals-length]="column.editProperties.decimalsLength"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
        @default {
          <po-input
            p-label="{{ column.label }}"
            [(ngModel)]="column.valueModel"
            [p-required]="column.required"
            [p-placeholder]="column.editProperties.placeholder"
            [p-disabled]="column.editProperties.disabled"
          />
        }
      }
    </ng-container>
  }
</po-modal>`,Yt=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoDropdownAction, PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import {
  ThfAggregateDescriptor,
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
  ThfTableAction,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-fluid-currency-doc',
  templateUrl: './thf-grid-editing-fluid-currency-doc.component.html',
  styleUrls: ['./thf-grid-editing-fluid-currency-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingFluidCurrencyDocComponent {
  @ViewChild('modal', { static: true }) poModal!: PoModalComponent;
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  @ViewChild('bulkEditModal', { static: true }) bulkEditModal!: PoModalComponent;

  items = [
    {
      id: 11234,
      country: 'Brazil',
      value: 1000.0,
      value_pt: 1000.0,
      value_en: 1000.0,
      value_ru: 1000.0,
      value_es: 1000.0,
      value_edit_pt: 1000.0,
      value_edit_en: 1000.0,
      value_edit_ru: 1000.0,
      value_edit_es: 1000.0,
      destination: 'Rio de Janeiro',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 22467,
      country: 'France',
      value: 5000.0,
      value_pt: 5000.0,
      value_en: 5000.0,
      value_ru: 5000.0,
      value_es: 5000.0,
      value_edit_pt: 5000.0,
      value_edit_en: 5000.0,
      value_edit_ru: 5000.0,
      value_edit_es: 5000.0,
      destination: 'Paris',
      status: 'closed',
      region: 'Alps',
    },
    {
      id: 40670,
      country: 'Senegal',
      value: 3200.0,
      value_pt: 3200.0,
      value_en: 3200.0,
      value_ru: 3200.0,
      value_es: 3200.0,
      value_edit_pt: 3200.0,
      value_edit_en: 3200.0,
      value_edit_ru: 3200.0,
      value_edit_es: 3200.0,
      destination: 'Dakar',
      status: 'closed',
      region: 'Western Africa',
    },
    {
      id: 34679,
      country: 'Portugal',
      value: 5500.0,
      value_pt: 5500.0,
      value_en: 5500.0,
      value_ru: 5500.0,
      value_es: 5500.0,
      value_edit_pt: 5500.0,
      value_edit_en: 5500.0,
      value_edit_ru: 5500.0,
      value_edit_es: 5500.0,
      destination: 'Lisbon',
      status: 'closed',
      region: 'Mediterranean',
    },
    {
      id: 49000,
      country: 'Russia',
      value: 6700.0,
      value_pt: 6700.0,
      value_en: 6700.0,
      value_ru: 6700.0,
      value_es: 6700.0,
      value_edit_pt: 6700.0,
      value_edit_en: 6700.0,
      value_edit_ru: 6700.0,
      value_edit_es: 6700.0,
      destination: 'Moscow',
      status: 'reserved',
      region: 'Caucasus',
    },
    {
      id: 48999,
      country: 'United States',
      value: 2700.49,
      value_pt: 2700.49,
      value_en: 2700.49,
      value_ru: 2700.49,
      value_es: 2700.49,
      value_edit_pt: 2700.49,
      value_edit_en: 2700.49,
      value_edit_ru: 2700.49,
      value_edit_es: 2700.49,
      destination: 'Los Angeles',
      status: 'reserved',
      region: 'North America',
    },
    {
      id: 54563,
      country: 'Chile',
      value: 2000.0,
      value_pt: 2000.0,
      value_en: 2000.0,
      value_ru: 2000.0,
      value_es: 2000.0,
      value_edit_pt: 2000.0,
      value_edit_en: 2000.0,
      value_edit_ru: 2000.0,
      value_edit_es: 2000.0,
      destination: 'Cusco',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 64568,
      country: 'Mexico',
      value: 2100.0,
      value_pt: 2100.0,
      value_en: 2100.0,
      value_ru: 2100.0,
      value_es: 2100.0,
      value_edit_pt: 2100.0,
      value_edit_en: 2100.0,
      value_edit_ru: 2100.0,
      value_edit_es: 2100.0,
      destination: 'Mexico City',
      status: 'available',
      region: 'Latin America',
    },
    {
      id: 75456,
      country: 'Ireland',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Cork',
      status: 'reserved',
      region: 'British Isle',
    },
    {
      id: 23445,
      country: 'South Africa',
      value: 1900.0,
      value_pt: 1900.0,
      value_en: 1900.0,
      value_ru: 1900.0,
      value_es: 1900.0,
      value_edit_pt: 1900.0,
      value_edit_en: 1900.0,
      value_edit_ru: 1900.0,
      value_edit_es: 1900.0,
      destination: 'Cape Town',
      status: 'available',
      region: 'Southern Africa',
    },
    {
      id: 19238,
      country: 'Australia',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Sydney',
      status: 'reserved',
      region: 'Australasia',
    },
    {
      id: 85456,
      country: 'Japan',
      value: 5900.0,
      value_pt: 5900.0,
      value_en: 5900.0,
      value_ru: 5900.0,
      value_es: 5900.0,
      value_edit_pt: 5900.0,
      value_edit_en: 5900.0,
      value_edit_ru: 5900.0,
      value_edit_es: 5900.0,
      destination: 'Tokio',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 94565,
      country: 'China',
      value: 2900.0,
      value_pt: 2900.0,
      value_en: 2900.0,
      value_ru: 2900.0,
      value_es: 2900.0,
      value_edit_pt: 2900.0,
      value_edit_en: 2900.0,
      value_edit_ru: 2900.0,
      value_edit_es: 2900.0,
      destination: 'Beijing',
      status: 'available',
      region: 'East Asia',
    },
    {
      id: 32330,
      country: 'England',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      value_edit_pt: 2090.5,
      value_edit_en: 2090.5,
      value_edit_ru: 2090.5,
      value_edit_es: 2090.5,
      destination: 'London',
      status: 'available',
      region: 'British Isle',
    },
    {
      id: 14560,
      country: 'Canada',
      value: 2090.5,
      value_pt: 2090.5,
      value_en: 2090.5,
      value_ru: 2090.5,
      value_es: 2090.5,
      value_edit_pt: 2090.5,
      value_edit_en: 2090.5,
      value_edit_ru: 2090.5,
      value_edit_es: 2090.5,
      destination: 'Quebec',
      status: 'available',
      region: 'North America',
    },
    {
      id: 93800,
      country: 'Iceland',
      value: 6300.0,
      value_pt: 6300.0,
      value_en: 6300.0,
      value_ru: 6300.0,
      value_es: 6300.0,
      value_edit_pt: 6300.0,
      value_edit_en: 6300.0,
      value_edit_ru: 6300.0,
      value_edit_es: 6300.0,
      destination: 'Reykjav\xEDk',
      status: 'available',
      region: 'Nordics',
    },
    {
      id: 34239,
      country: 'Germany',
      value: 3070.5,
      value_pt: 3070.5,
      value_en: 3070.5,
      value_ru: 3070.5,
      value_es: 3070.5,
      value_edit_pt: 3070.5,
      value_edit_en: 3070.5,
      value_edit_ru: 3070.5,
      value_edit_es: 3070.5,
      destination: 'Berlin',
      status: 'available',
      region: 'Danube',
    },
    {
      id: 45611,
      country: 'Argentina',
      value: 3500.5,
      value_pt: 3500.5,
      value_en: 3500.5,
      value_ru: 3500.5,
      value_es: 3500.5,
      value_edit_pt: 3500.5,
      value_edit_en: 3500.5,
      value_edit_ru: 3500.5,
      value_edit_es: 3500.5,
      destination: 'Ushuaia',
      status: 'reserved',
      region: 'Latin America',
    },
  ];
  currentIdItem: any;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'available', color: 'color-11', label: 'Available' },
        { value: 'reserved', color: 'color-08', label: 'Reserved' },
        { value: 'closed', color: 'color-07', label: 'Closed' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'available', label: 'Available' },
          { value: 'reserved', label: 'Reserved' },
          { value: 'closed', label: 'Closed' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    },
    {
      property: 'region',
      label: 'Region',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe a regi\xE3o referida.',
        keydown: this.onKeyDown.bind(this, 'region'),
      },
    },
    {
      property: 'country',
      label: 'Country',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o pa\xEDs referido.',
        keydown: this.onKeyDown.bind(this, 'country'),
      },
    },
    {
      property: 'destination',
      label: 'Destination',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o destino dentro do pa\xEDs informado.',
        keydown: this.onKeyDown.bind(this, 'destination'),
      },
    },
    {
      property: 'value',
      label: 'Value',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_en',
      label: 'Value (en)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'en',
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_pt',
      label: 'Value (pt)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'pt',
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_ru',
      label: 'Value (ru)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'ru',
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_es',
      label: 'Value (es)',
      type: 'currency',
      format: 'USD',
      width: 220,
      locale: 'es',
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3
      },
    },
    {
      property: 'value_edit_en',
      label: 'Value Edit (en)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'en'
      },
    },
    {
      property: 'value_edit_pt',
      label: 'Value Edit (pt)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'pt'
      },
    },
    {
      property: 'value_edit_ru',
      label: 'Value Edit (ru)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'ru'
      },
    },
    {
      property: 'value_edit_es',
      label: 'Value Edit (es)',
      type: 'currency',
      format: 'USD',
      width: 220,
      editProperties: {
        componentEditable: 'decimal',
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        decimalsLength: 3,
        locale: 'es'
      },
    },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Total' },
    { field: 'value_en', aggregate: 'sum', label: 'Total (en)' },
    { field: 'value_pt', aggregate: 'sum', label: 'Total (pt)' },
    { field: 'value_ru', aggregate: 'sum', label: 'Total (ru)' },
    { field: 'value_es', aggregate: 'sum', label: 'Total (es)' },
    { field: 'value_edit_en', aggregate: 'sum', label: 'Total (en)' },
    { field: 'value_edit_pt', aggregate: 'sum', label: 'Total (pt)' },
    { field: 'value_edit_ru', aggregate: 'sum', label: 'Total (ru)' },
    { field: 'value_edit_es', aggregate: 'sum', label: 'Total (es)' },
  ];

  itemsUpdated: Array<any> = [];
  disabledIncludeButton!: boolean;
  gridRowsActionsWithItems!: ThfGridRowActions;
  lineActions: Array<ThfTableAction> = [
    {
      label: 'Detalhes',
      action: (e: any) => {
        this.poNotificationService.success('Item ' + e.id + ' com destino a ' + e.destination + ' no valor de ' + e.value)
      },
      icon: 'ICON_INFO'
    }
  ];

  customBulkActions: Array<PoDropdownAction> = [
    { label: 'Editar selecionados (custom action)', action: this.editSelected.bind(this) },
    { label: 'Excluir selecionados (custom action)', action: this.bulkDelete.bind(this) }
  ]

  editColumnsFilter: Array<any> = [];
  editColumnsFilterValues: Array<string> = [];

  bulkEditModalConfirm: PoModalAction = {
    label: 'Confirmar',
    action: this.bulkEdit.bind(this)
  };

  constructor(private readonly poNotificationService: PoNotificationService) {}

  ngOnInit() {
    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          region: new FormControl(dataItem.region, [Validators.required]),
          country: new FormControl(dataItem.country, [Validators.required]),
          destination: new FormControl(dataItem.destination, [Validators.required]),
          value: new FormControl(dataItem.value, [Validators.required]),
          value_en: new FormControl(dataItem.value_en, [Validators.required]),
          value_pt: new FormControl(dataItem.value_pt, [Validators.required]),
          value_ru: new FormControl(dataItem.value_ru, [Validators.required]),
          value_es: new FormControl(dataItem.value_es, [Validators.required]),
          value_edit_en: new FormControl(dataItem.value_edit_en, [Validators.required]),
          value_edit_pt: new FormControl(dataItem.value_edit_pt, [Validators.required]),
          value_edit_ru: new FormControl(dataItem.value_edit_ru, [Validators.required]),
          value_edit_es: new FormControl(dataItem.value_edit_es, [Validators.required]),
        });
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.disabledIncludeButton = false;
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  getChangedItems() {
    return this.thfGrid?.getChangedItems() || [];
  }

  getLabelChangedItems() {
    return JSON.stringify(this.thfGrid?.getChangedItems() || [], null, 2);
  }

  finishEditMode() {
    this.thfGrid.cleanRowActionsMode();
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  editSelected() {
    const editableColumns = this.columnWithItems.filter(
      (column) => ['status', 'value'].includes(column.property)
    );
    
    this.editColumnsFilter = editableColumns.map((column) => ({
      label: column.label,
      value: column.property,
      property: column.property,
      valueModel: '',
      required: column.editProperties?.required,
      editProperties: column.editProperties,
    }));
      
    this.bulkEditModal.open();
  }

  bulkEdit() {
    const selectedItems = this.thfGrid.getSelectedRows();

    const updatedColumns =
      this.editColumnsFilter
        .filter(item => this.editColumnsFilterValues.includes(item.property))
        .filter(item => item.valueModel !== '');

    for (const updatedColumn of updatedColumns) {
      for (const item of selectedItems) {
        item[updatedColumn.property] = updatedColumn.valueModel;
        item.$edited = true;
        this.thfGrid.updateItem(item, item);
        this.thfGrid.unselectRowItem(item);
      }

      updatedColumn.valueModel = '';
    }

    this.editColumnsFilterValues = [];

    this.bulkEditModal.close();
  }

  bulkDelete() {
    const selectedItems = this.thfGrid.getSelectedRows();

    for (const item of selectedItems) {
      item.$removed = true;
      this.thfGrid.updateItem(item, item);
      this.thfGrid.unselectRowItem(item);
    }

    this.poNotificationService.success('Itens exclu\xEDdos com sucesso!');
  }
}
`;var _n=["modal"],qn=["gridComponent"],kn=["bulkEditModal"],Fn=(d,C)=>C.property;function In(d,C){if(d&1&&(i(0,"div",13)(1,"pre"),e(2),t()()),d&2){let a=u();m(2),xe(a.getLabelChangedItems())}}function Ln(d,C){if(d&1){let a=F();i(0,"po-combo",18),h("ngModelChange",function(n){p(a);let l=u(2).$implicit;return f(l.valueModel,n)||(l.valueModel=n),c(n)}),t()}if(d&2){let a=u(2).$implicit;Ce("p-label",a.label),b("ngModel",a.valueModel),s("p-options",a.editProperties.options)("p-required",a.required)("p-placeholder",a.editProperties.placeholder)("p-disabled",a.editProperties.disabled)}}function Mn(d,C){if(d&1){let a=F();i(0,"po-decimal",19),h("ngModelChange",function(n){p(a);let l=u(2).$implicit;return f(l.valueModel,n)||(l.valueModel=n),c(n)}),t()}if(d&2){let a=u(2).$implicit;Ce("p-label",a.label),b("ngModel",a.valueModel),s("p-decimals-length",a.editProperties.decimalsLength)("p-required",a.required)("p-placeholder",a.editProperties.placeholder)("p-disabled",a.editProperties.disabled)}}function Rn(d,C){if(d&1){let a=F();i(0,"po-input",20),h("ngModelChange",function(n){p(a);let l=u(2).$implicit;return f(l.valueModel,n)||(l.valueModel=n),c(n)}),t()}if(d&2){let a=u(2).$implicit;Ce("p-label",a.label),b("ngModel",a.valueModel),s("p-required",a.required)("p-placeholder",a.editProperties.placeholder)("p-disabled",a.editProperties.disabled)}}function Vn(d,C){if(d&1&&(Je(0),L(1,Ln,1,6,"po-combo",15)(2,Mn,1,6,"po-decimal",16)(3,Rn,1,5,"po-input",17),Ze()),d&2){let a,r=u().$implicit;m(),H((a=r.editProperties.componentEditable)==="combo"?1:a==="decimal"?2:3)}}function zn(d,C){if(d&1&&L(0,Vn,4,1,"ng-container",14),d&2){let a=C.$implicit,r=u();s("ngIf",r.editColumnsFilterValues.includes(a.property))}}var ei=(()=>{class d{constructor(a){this.poNotificationService=a,this.htmlCode=Xt,this.tsCode=Yt,this.items=[{id:11234,country:"Brazil",value:1e3,value_pt:1e3,value_en:1e3,value_ru:1e3,value_es:1e3,value_edit_pt:1e3,value_edit_en:1e3,value_edit_ru:1e3,value_edit_es:1e3,destination:"Rio de Janeiro",status:"available",region:"Latin America"},{id:22467,country:"France",value:5e3,value_pt:5e3,value_en:5e3,value_ru:5e3,value_es:5e3,value_edit_pt:5e3,value_edit_en:5e3,value_edit_ru:5e3,value_edit_es:5e3,destination:"Paris",status:"closed",region:"Alps"},{id:40670,country:"Senegal",value:3200,value_pt:3200,value_en:3200,value_ru:3200,value_es:3200,value_edit_pt:3200,value_edit_en:3200,value_edit_ru:3200,value_edit_es:3200,destination:"Dakar",status:"closed",region:"Western Africa"},{id:34679,country:"Portugal",value:5500,value_pt:5500,value_en:5500,value_ru:5500,value_es:5500,value_edit_pt:5500,value_edit_en:5500,value_edit_ru:5500,value_edit_es:5500,destination:"Lisbon",status:"closed",region:"Mediterranean"},{id:49e3,country:"Russia",value:6700,value_pt:6700,value_en:6700,value_ru:6700,value_es:6700,value_edit_pt:6700,value_edit_en:6700,value_edit_ru:6700,value_edit_es:6700,destination:"Moscow",status:"reserved",region:"Caucasus"},{id:48999,country:"United States",value:2700.49,value_pt:2700.49,value_en:2700.49,value_ru:2700.49,value_es:2700.49,value_edit_pt:2700.49,value_edit_en:2700.49,value_edit_ru:2700.49,value_edit_es:2700.49,destination:"Los Angeles",status:"reserved",region:"North America"},{id:54563,country:"Chile",value:2e3,value_pt:2e3,value_en:2e3,value_ru:2e3,value_es:2e3,value_edit_pt:2e3,value_edit_en:2e3,value_edit_ru:2e3,value_edit_es:2e3,destination:"Cusco",status:"available",region:"Latin America"},{id:64568,country:"Mexico",value:2100,value_pt:2100,value_en:2100,value_ru:2100,value_es:2100,value_edit_pt:2100,value_edit_en:2100,value_edit_ru:2100,value_edit_es:2100,destination:"Mexico City",status:"available",region:"Latin America"},{id:75456,country:"Ireland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Cork",status:"reserved",region:"British Isle"},{id:23445,country:"South Africa",value:1900,value_pt:1900,value_en:1900,value_ru:1900,value_es:1900,value_edit_pt:1900,value_edit_en:1900,value_edit_ru:1900,value_edit_es:1900,destination:"Cape Town",status:"available",region:"Southern Africa"},{id:19238,country:"Australia",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Sydney",status:"reserved",region:"Australasia"},{id:85456,country:"Japan",value:5900,value_pt:5900,value_en:5900,value_ru:5900,value_es:5900,value_edit_pt:5900,value_edit_en:5900,value_edit_ru:5900,value_edit_es:5900,destination:"Tokio",status:"available",region:"East Asia"},{id:94565,country:"China",value:2900,value_pt:2900,value_en:2900,value_ru:2900,value_es:2900,value_edit_pt:2900,value_edit_en:2900,value_edit_ru:2900,value_edit_es:2900,destination:"Beijing",status:"available",region:"East Asia"},{id:32330,country:"England",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"London",status:"available",region:"British Isle"},{id:14560,country:"Canada",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"Quebec",status:"available",region:"North America"},{id:93800,country:"Iceland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Reykjav\xEDk",status:"available",region:"Nordics"},{id:34239,country:"Germany",value:3070.5,value_pt:3070.5,value_en:3070.5,value_ru:3070.5,value_es:3070.5,value_edit_pt:3070.5,value_edit_en:3070.5,value_edit_ru:3070.5,value_edit_es:3070.5,destination:"Berlin",status:"available",region:"Danube"},{id:45611,country:"Argentina",value:3500.5,value_pt:3500.5,value_en:3500.5,value_ru:3500.5,value_es:3500.5,value_edit_pt:3500.5,value_edit_en:3500.5,value_edit_ru:3500.5,value_edit_es:3500.5,destination:"Ushuaia",status:"reserved",region:"Latin America"}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"available",label:"Available"},{value:"reserved",label:"Reserved"},{value:"closed",label:"Closed"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"region",label:"Region",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe a regi\xE3o referida.",keydown:this.onKeyDown.bind(this,"region")}},{property:"country",label:"Country",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o pa\xEDs referido.",keydown:this.onKeyDown.bind(this,"country")}},{property:"destination",label:"Destination",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o destino dentro do pa\xEDs informado.",keydown:this.onKeyDown.bind(this,"destination")}},{property:"value",label:"Value",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_en",label:"Value (en)",type:"currency",format:"USD",width:220,locale:"en",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_pt",label:"Value (pt)",type:"currency",format:"USD",width:220,locale:"pt",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_ru",label:"Value (ru)",type:"currency",format:"USD",width:220,locale:"ru",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_es",label:"Value (es)",type:"currency",format:"USD",width:220,locale:"es",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_edit_en",label:"Value Edit (en)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"en"}},{property:"value_edit_pt",label:"Value Edit (pt)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"pt"}},{property:"value_edit_ru",label:"Value Edit (ru)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"ru"}},{property:"value_edit_es",label:"Value Edit (es)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"es"}}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"value_en",aggregate:"sum",label:"Total (en)"},{field:"value_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_es",aggregate:"sum",label:"Total (es)"},{field:"value_edit_en",aggregate:"sum",label:"Total (en)"},{field:"value_edit_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_edit_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_edit_es",aggregate:"sum",label:"Total (es)"}],this.itemsUpdated=[],this.lineActions=[{label:"Detalhes",action:r=>{this.poNotificationService.success("Item "+r.id+" com destino a "+r.destination+" no valor de "+r.value)},icon:"ICON_INFO"}],this.customBulkActions=[{label:"Editar selecionados (custom action)",action:this.editSelected.bind(this)},{label:"Excluir selecionados (custom action)",action:this.bulkDelete.bind(this)}],this.editColumnsFilter=[],this.editColumnsFilterValues=[],this.bulkEditModalConfirm={label:"Confirmar",action:this.bulkEdit.bind(this)}}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.dependents=[],this.currentIdItem=a.id),new B({status:new S(a.status,[I.min(1)]),region:new S(a.region,[I.required]),country:new S(a.country,[I.required]),destination:new S(a.destination,[I.required]),value:new S(a.value,[I.required]),value_en:new S(a.value_en,[I.required]),value_pt:new S(a.value_pt,[I.required]),value_ru:new S(a.value_ru,[I.required]),value_es:new S(a.value_es,[I.required]),value_edit_en:new S(a.value_edit_en,[I.required]),value_edit_pt:new S(a.value_edit_pt,[I.required]),value_edit_ru:new S(a.value_edit_ru,[I.required]),value_edit_es:new S(a.value_edit_es,[I.required])})),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(a){console.log("onAfterSave(new): ",a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterRemove(a){return console.log("afterRemove: ",a),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}editSelected(){let a=this.columnWithItems.filter(r=>["status","value"].includes(r.property));this.editColumnsFilter=a.map(r=>({label:r.label,value:r.property,property:r.property,valueModel:"",required:r.editProperties?.required,editProperties:r.editProperties})),this.bulkEditModal.open()}bulkEdit(){let a=this.thfGrid.getSelectedRows(),r=this.editColumnsFilter.filter(n=>this.editColumnsFilterValues.includes(n.property)).filter(n=>n.valueModel!=="");for(let n of r){for(let l of a)l[n.property]=n.valueModel,l.$edited=!0,this.thfGrid.updateItem(l,l),this.thfGrid.unselectRowItem(l);n.valueModel=""}this.editColumnsFilterValues=[],this.bulkEditModal.close()}bulkDelete(){let a=this.thfGrid.getSelectedRows();for(let r of a)r.$removed=!0,this.thfGrid.updateItem(r,r),this.thfGrid.unselectRowItem(r);this.poNotificationService.success("Itens exclu\xEDdos com sucesso!")}static{this.\u0275fac=function(r){return new(r||d)(R(fe))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-fluid-currency-doc"]],viewQuery:function(r,n){if(r&1&&(D(_n,7),D(qn,5),D(kn,7)),r&2){let l;A(l=_())&&(n.poModal=l.first),A(l=_())&&(n.thfGrid=l.first),A(l=_())&&(n.bulkEditModal=l.first)}},standalone:!1,decls:18,vars:21,consts:[["gridComponent",""],["modal",""],["bulkEditModal",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-selectable-entire-line","t-items","t-columns","t-grid-row-actions","t-aggregates","t-show-footer-aggregates","t-actions","t-actions-right","t-sortable","t-action-pdf","t-action-excel","t-custom-actions"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],["p-title","Edi\xE7\xE3o em lote (a\xE7\xE3o customizada)",3,"p-primary-action"],["name","editColumnsFilterValues","p-label","Propriedades para Editar",3,"ngModelChange","ngModel","p-options"],[3,"htmlCode","tsCode"],[1,"code"],[4,"ngIf"],[3,"p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-required","p-placeholder","p-disabled"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",3),e(2,"Edi\xE7\xE3o Flu\xEDda com Casas Decimais e A\xE7\xF5es em Lote"),t(),o(3,"po-divider"),i(4,"div",4)(5,"po-button",5),g("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(6,"po-button",6),g("p-click",function(){return p(l),c(n.poModal.open())}),t()(),o(7,"thf-grid",7,0),i(9,"po-modal",8,1),L(11,In,3,1,"div",9),t(),i(12,"po-modal",10,2)(14,"po-multiselect",11),h("ngModelChange",function(y){return p(l),f(n.editColumnsFilterValues,y)||(n.editColumnsFilterValues=y),c(y)}),t(),Ke(15,zn,1,1,"ng-container",null,Fn),t(),o(17,"app-code-accordion-doc",12),t()}if(r&2){let l,E;m(6),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-selectable-entire-line",!1)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-aggregates",n.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-actions",n.lineActions)("t-actions-right",!0)("t-sortable",!0)("t-action-pdf",!0)("t-action-excel",!0)("t-custom-actions",n.customBulkActions),m(4),s("ngIf",(E=n.getChangedItems())==null?null:E.length),m(),s("p-primary-action",n.bulkEditModalConfirm),m(2),b("ngModel",n.editColumnsFilterValues),s("p-options",n.editColumnsFilter),m(),$e(n.editColumnsFilter),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Se,G,U,W,v,P,ht,vt,de,Fe,qe,M,T],encapsulation:2})}}return d})();var ti=`<thf-grid
    [t-items]="products"
    [t-columns]="columns"
    [t-grid-row-actions]="gridRowActions"
    [t-auto-size]="true"
    [t-actions-right]="true"
  />


`,ii=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  ThfGridColumn,
  ThfGridRowActions
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-dynamic-properties',
  templateUrl: './thf-grid-dynamic-properties.component.html',
  standalone: false,
})
export class ThfGridDynamicPropertiesComponent {
gridRowActions: ThfGridRowActions;
  editForm!: FormGroup;

  products = [
    { 
      id: 1, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Smartphone', 
      price: 999.99, 
      discount: 0, 
    },
    { 
      id: 2, 
      status: { value: 'inactive', label: 'Inativo' },
      name: 'Tablet', 
      price: 499.99, 
      discount: 50, 
    },
    { 
      id: 3, 
      status: { value: 'active', label: 'Ativo' },
      name: 'Office Chair', 
      price: 299.99, 
      discount: 10, 
    }
  ];

  columns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'ID',
      editProperties: {
        disabled: true
      }
    },
    {
      property: 'status',
      label: 'Status',
      editProperties: {
        componentEditable: 'combo',
        options: [
          { value: 'active', label: 'Ativo' },
          { value: 'inactive', label: 'Inativo' }
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        removeInitialFilter: true,
        controlValueWithLabel: true,
      }
    },
    {
      property: 'name',
      label: 'Nome do Produto',
      editProperties: {
        readonly: (rowData) => rowData.status === 'inactive'
      }
    },
    {
      property: 'price',
      label: 'Pre\xE7o',
      editProperties: {
        readonly: true
      }
    },
    {
      property: 'discount',
      label: 'Desconto (%)',
      editProperties: {
        disabled: (rowData) => rowData.status === 'inactive'
      }
    },
  ];

  constructor() {
    this.gridRowActions = {
      title: 'Produtos',
      actionEdit: this.onEdit.bind(this),
      validateField: this.onValidate.bind(this),
    };
  }

  onEdit(dataItem: any, mode: string) {
    console.log('Editando produto:', dataItem, 'Modo:', mode);

    this.editForm = new FormGroup({
      id: new FormControl(dataItem.id),
      name: new FormControl(dataItem.name),
      price: new FormControl(dataItem.price),
      discount: new FormControl(dataItem.discount),
      status: new FormControl(dataItem.status),
    });

    return this.editForm;
  }

  onValidate(updatedField: any, columnProperty: any) {
    console.log('onValidateField:', updatedField, columnProperty);
    return true;
  }
}

`;var ni=(()=>{class d{constructor(){this.htmlCode=ti,this.tsCode=ii,this.products=[{id:1,status:{value:"active",label:"Ativo"},name:"Smartphone",price:999.99,discount:0},{id:2,status:{value:"inactive",label:"Inativo"},name:"Tablet",price:499.99,discount:50},{id:3,status:{value:"active",label:"Ativo"},name:"Office Chair",price:299.99,discount:10}],this.columns=[{property:"id",label:"ID",editProperties:{disabled:!0}},{property:"status",label:"Status",editProperties:{componentEditable:"combo",options:[{value:"active",label:"Ativo"},{value:"inactive",label:"Inativo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}},{property:"name",label:"Nome do Produto",editProperties:{readonly:a=>a.status==="inactive"}},{property:"price",label:"Pre\xE7o",editProperties:{readonly:!0}},{property:"discount",label:"Desconto (%)",editProperties:{disabled:a=>a.status==="inactive"}}],this.gridRowActions={title:"Produtos",actionEdit:this.onEdit.bind(this),validateField:this.onValidate.bind(this)}}onEdit(a,r){return console.log("Editando produto:",a,"Modo:",r),this.editForm=new B({id:new S(a.id),name:new S(a.name),price:new S(a.price),discount:new S(a.discount),status:new S(a.status)}),this.editForm}onValidate(a,r){return console.log("onValidateField:",a,r),!0}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-dynamic-properties"]],standalone:!1,decls:6,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-items","t-columns","t-grid-row-actions","t-auto-size","t-actions-right"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Edi\xE7\xE3o com Propriedades din\xE2micas"),t(),o(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-items",n.products)("t-columns",n.columns)("t-grid-row-actions",n.gridRowActions)("t-auto-size",!0)("t-actions-right",!0),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var oi=`<thf-grid
      #gridComponent
      t-spacing="extraSmall"
      t-components-size="small"
      [t-columns]="columnWithItems"
      [t-items]="items"
      [t-height]="500"
      [t-page-size-virtual]="20"
      [t-virtual-scroll]="true"
      [t-resizable]="true"
      [t-auto-size]="true"
      [t-auto-size-on-scroll]="true"
    />

`,ai=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ThfGridColumn,
  ThfGridComponent
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-auto-fit-scroll',
  templateUrl: './thf-grid-auto-fit-scroll.component.html',
  standalone: false,
})
export class ThfGridAutoFitScrollComponent implements OnInit {
@ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
    },
    {
      property: 'values',
      label: 'Values',
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
    },
    {
      property: 'datepicker',
      label: 'datepicker',
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
    },
    {
      property: 'select',
      label: 'select',
    },
    {
      property: 'switch',
      label: 'switch',
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
    },
    {
      property: 'checkbox',
      label: 'checkbox',
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
  ];


  ngOnInit() {
    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 100; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: \`\${baseItem.name} \${i}\${i}\`,
      };
      itemsUpdatedNew.push(newItem);
    }

    this.items = itemsUpdatedNew;
  }
}

`;var Gn=["gridComponent"],ri=(()=>{class d{constructor(){this.htmlCode=oi,this.tsCode=ai,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"values",label:"Values"},{property:"number",label:"Number",type:"number"},{property:"datepicker",label:"datepicker"},{property:"otherStatus",label:"Outro Status"},{property:"select",label:"select"},{property:"switch",label:"switch"},{property:"decimal",label:"decimal",type:"currency"},{property:"checkbox",label:"checkbox"},{property:"valuesx",label:"Valuesx"}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}]}ngOnInit(){let a=[],r=this.items[0];for(let n=1;n<=100;n++){let l=Date.now()+n,E=Q(O({},r),{id:l+n,name:`${r.name} ${n}${n}`});a.push(E)}this.items=a}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-auto-fit-scroll"]],viewQuery:function(r,n){if(r&1&&D(Gn,5),r&2){let l;A(l=_())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:10,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","extraSmall","t-components-size","small",3,"t-columns","t-items","t-height","t-page-size-virtual","t-virtual-scroll","t-resizable","t-auto-size","t-auto-size-on-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando auto-size e auto-fit-on-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-columns",n.columnWithItems)("t-items",n.items)("t-height",500)("t-page-size-virtual",20)("t-virtual-scroll",!0)("t-resizable",!0)("t-auto-size",!0)("t-auto-size-on-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();var li=`<thf-splitter [t-disabled]="true">
  <thf-splitter-pane>
    <thf-grid
      #mainGrid
      [t-items]="mainGridItems"
      [t-columns]="mainGridColumns"
      [t-grid-row-actions]="mainGridRowsActions"
      [t-actions-right]="true"
      [t-selectable]="true"
      [t-single-select]="true"
      [t-selectable-removed]="true"
      [t-selectable-entire-line]="false"
      [t-height]="320"
      (t-selected)="handleMainGridSelection($event)"
      (t-unselected)="handleMainGridUnselection($event)"
      (t-change-row-state-filter)="onMainGridRowStateFilter($event)"
    />
  </thf-splitter-pane>
  <thf-splitter-pane>
    <thf-grid
      #childGrid
      [t-items]="mainGridSelectedItemIndex !== undefined ? mainGridItems[mainGridSelectedItemIndex].heroes : []"
      [t-columns]="childGridColumns"
      [t-grid-row-actions]="childGridRowsActions"
      [t-disabled-include-button]="childGridDisabledIncludeButton"
      [t-actions-right]="true"
      [t-selectable]="false"
      [t-single-select]="false"
      [t-height]="320"
    />
  </thf-splitter-pane>
</thf-splitter>`,di=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PoNotificationService } from '@po-ui/ng-components';
import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-parent-detail-editing-doc',
  templateUrl: './thf-grid-parent-detail-editing.component.html',
  styleUrls: ['./thf-grid-parent-detail-editing.component.css'],
  standalone: false,
})
export class ThfGridParentDetailEditingComponent {
  @ViewChild('mainGrid', { static: false }) mainGrid!: ThfGridComponent;
  @ViewChild('childGrid', { static: false }) childGrid!: ThfGridComponent;

  mainGridTitle = 'Equipes (Tabela Pai)';
  childGridTitle = 'Her\xF3is (Tabela Filha)';

  disabledIncludeButton: boolean = false;
  currentIdItem: string | number | undefined;

  mainGridColumns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
      width: '100px',
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o nome da equipe'
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'ativo', color: 'color-11', label: 'Ativo' },
        { value: 'em-missao', color: 'color-09', label: 'Em miss\xE3o' },
        { value: 'inativo', color: 'color-06', label: 'Inativo' },
        { value: 'ferido', color: 'color-07', label: 'Ferido' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'ativo', label: 'Ativo' },
          { value: 'em-missao', label: 'Em miss\xE3o' },
          { value: 'inativo', label: 'Inativo' },
          { value: 'ferido', label: 'Ferido' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    }
  ];
  mainGridRowsActions!: ThfGridRowActions;
  mainGridItems: Array<any> = [
    {
      id: 1,
      name: 'Vingadores',
      status: 'ativo',
      heroes: [
        { id: 11, name: 'Homem de Ferro', status: 'ativo' },
        { id: 12, name: 'Capit\xE3o Am\xE9rica', status: 'em-missao' },
        { id: 13, name: 'Thor', status: 'ativo' }
      ]
    },
    {
      id: 2,
      name: 'X-man',
      status: 'em-missao',
      heroes: [
        { id: 21, name: 'Wolverine', status: 'ativo' },
        { id: 22, name: 'Ciclope', status: 'reserva' },
        { id: 23, name: 'Jean Grey', status: 'ferido' }
      ]
    },
    {
      id: 3,
      name: 'Jovens Tit\xE3s',
      status: 'ativo',
      heroes: [
        { id: 30, name: 'Ciborgue', status: 'ativo' },
        { id: 31, name: 'Estelar', status: 'ativo' },
        { id: 32, name: 'Mutano', status: 'ativo' },
        { id: 33, name: 'Ravena', status: 'reserva' },
        { id: 34, name: 'Robin', status: 'ativo' },
      ]
    },
    {
      id: 4,
      name: 'Liga da Justi\xE7a',
      status: 'ativo',
      heroes: [
        { id: 41, name: 'Superman', status: 'ativo' },
        { id: 42, name: 'Batman', status: 'reserva' },
        { id: 43, name: 'Mulher Maravilha', status: 'em-missao' }
      ]
    }
  ];
  mainGridItemsUpdated: Array<any> = [];
  mainGridSelectedItem: any;
  mainGridSelectedItemIndex: number | undefined;

  childGridColumns: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      editProperties: { disabled: true },
      width: '100px',
    },
    {
      property: 'name',
      label: 'Nome',
      editProperties: {
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        componentEditable: 'input',
        helper: 'Informe o nome da empresa'
      },
    },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 'ativo', color: 'color-11', label: 'Ativo' },
        { value: 'em-missao', color: 'color-09', label: 'Em miss\xE3o' },
        { value: 'reserva', color: 'color-08', label: 'Reserva' },
        { value: 'inativo', color: 'color-06', label: 'Inativo' },
        { value: 'ferido', color: 'color-07', label: 'Ferido' },
      ],
      editProperties: {
        componentEditable: 'combo',
        disabledInitFilter: true,
        options: [
          { value: 'ativo', label: 'Ativo' },
          { value: 'em-missao', label: 'Em miss\xE3o' },
          { value: 'reserva', label: 'Reserva' },
          { value: 'inativo', label: 'Inativo' },
          { value: 'ferido', label: 'Ferido' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
      },
    }
  ];
  childGridRowsActions!: ThfGridRowActions;
  childGridItemsUpdated: Array<any> = [];
  childGridSelectedItem: any;
  childGridDisabledIncludeButton: boolean = true;

  constructor(private readonly notificationService: PoNotificationService) {}

  ngOnInit() {
    this.mainGridRowsActions = {
      title: this.mainGridTitle,
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.heroes = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          name: new FormControl(dataItem.name, [Validators.required]),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
        });
      },
      afterRemove: this.afterRemoveMainGrid.bind(this),
      afterUndoRemove: this.afterUndoRemoveMainGrid.bind(this)
    };

    this.mainGridItemsUpdated = [...this.mainGridItems];

    this.childGridRowsActions = {
      title: this.childGridTitle,
      hiddenGrid: false,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          this.disabledIncludeButton = true;
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.heroes = [];
          this.currentIdItem = dataItem.id;
        }
        return new FormGroup({
          name: new FormControl(dataItem.name, [Validators.required]),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
        });
      },
      change: this.changeChildGrid.bind(this),
      beforeUndoRemove: this.beforeUndoRemoveChildGrid.bind(this),
      afterRemove: this.afterRemoveChildGrid.bind(this),
      afterUndoRemove: this.afterUndoRemoveChildGrid.bind(this),
    };

    this.childGridItemsUpdated = [];
  }

  handleMainGridSelection(event: any) {
    console.log('Selected item from main grid: ', event);
    this.mainGridSelectedItem = event;
    this.mainGridSelectedItemIndex = this.mainGridItems.findIndex(item => item.id === event.id);
    this.childGridItemsUpdated = event.heroes ? [...event.heroes] : [];
    this.childGridDisabledIncludeButton = !!event.$removed;
    this.childGridRowsActions.title = this.childGridTitle + ' - ' + event.name;

    if (event.$removed) {
      this.childGrid.setRowStateFilter('removed', false, false);
    } else {
      this.childGrid.setRowStateFilter('active', false, false);
    }
  }

  handleMainGridUnselection(event?: any) {
    console.log('Unselected item from main grid: ', event);
    this.mainGridSelectedItem = {
      id: null,
      heroes: []
    };
    this.mainGridSelectedItemIndex = undefined;
    this.childGridItemsUpdated = [];
    this.childGridDisabledIncludeButton = true;
    this.childGridRowsActions.title = this.childGridTitle;
  }

  afterRemoveMainGrid(removedItem: any) {
    console.log('Removed item from main grid: ', removedItem);
    removedItem.status = 'inativo';
    removedItem.heroes.forEach((hero: any) => {
      hero.$removed = true;
      hero.status = 'inativo';
      this.childGrid.updateItem(hero, hero);
    });
  }

  afterUndoRemoveMainGrid(undoRemovedItem: any) {
    console.log('Undo removed item from main grid: ', undoRemovedItem);
    undoRemovedItem.status = 'ativo';
    undoRemovedItem.heroes.forEach((hero: any) => {
      hero.$removed = false;
      hero.status = 'ativo';
      this.childGrid.updateItem(hero, hero);
    });
  }

  beforeUndoRemoveChildGrid(undoRemovedItem: any) {
    console.log('Before undo remove item from child grid: ', undoRemovedItem);
    const isParentInactive = this.mainGridItems.find(item => item.heroes.includes(undoRemovedItem))?.$removed;
    if (isParentInactive) {
      this.notificationService.warning('N\xE3o \xE9 poss\xEDvel desfazer a remo\xE7\xE3o de um her\xF3i de um time inativo.');
      return false;
    }
    return true;
  }

  afterRemoveChildGrid(removedItem: any) {
    console.log('Removed item from child grid: ', removedItem);
    removedItem.status = 'inativo';
    this.childGrid.updateItem(removedItem, removedItem);
  }

  afterUndoRemoveChildGrid(undoRemovedItem: any) {
    console.log('Undo removed item from child grid: ', undoRemovedItem);
    undoRemovedItem.status = 'ativo';
    this.childGrid.updateItem(undoRemovedItem, undoRemovedItem);
  }

  changeChildGrid(changedItems: any) {
    console.log('Child grid change event: ', changedItems);
  }

  onMainGridRowStateFilter(filter: any) {
    // Aplica novamente a sele\xE7\xE3o do item
    if (
      this.mainGridSelectedItem !== undefined && (
        (filter === 'active' && !this.mainGridSelectedItem?.$removed) ||
        (filter === 'removed' && this.mainGridSelectedItem?.$removed)
      )
    ) {
      this.mainGrid.selectRowItem(this.mainGridSelectedItem);
    }

    this.childGrid.setRowStateFilter(filter, false, false);
  }
}
`;var Qn=["mainGrid"],Bn=["childGrid"],Hn=()=>[],mi=(()=>{class d{constructor(a){this.notificationService=a,this.htmlCode=li,this.tsCode=di,this.mainGridTitle="Equipes (Tabela Pai)",this.childGridTitle="Her\xF3is (Tabela Filha)",this.disabledIncludeButton=!1,this.mainGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da equipe"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"color-11",label:"Ativo"},{value:"em-missao",color:"color-09",label:"Em miss\xE3o"},{value:"inativo",color:"color-06",label:"Inativo"},{value:"ferido",color:"color-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.mainGridItems=[{id:1,name:"Vingadores",status:"ativo",heroes:[{id:11,name:"Homem de Ferro",status:"ativo"},{id:12,name:"Capit\xE3o Am\xE9rica",status:"em-missao"},{id:13,name:"Thor",status:"ativo"}]},{id:2,name:"X-man",status:"em-missao",heroes:[{id:21,name:"Wolverine",status:"ativo"},{id:22,name:"Ciclope",status:"reserva"},{id:23,name:"Jean Grey",status:"ferido"}]},{id:3,name:"Jovens Tit\xE3s",status:"ativo",heroes:[{id:30,name:"Ciborgue",status:"ativo"},{id:31,name:"Estelar",status:"ativo"},{id:32,name:"Mutano",status:"ativo"},{id:33,name:"Ravena",status:"reserva"},{id:34,name:"Robin",status:"ativo"}]},{id:4,name:"Liga da Justi\xE7a",status:"ativo",heroes:[{id:41,name:"Superman",status:"ativo"},{id:42,name:"Batman",status:"reserva"},{id:43,name:"Mulher Maravilha",status:"em-missao"}]}],this.mainGridItemsUpdated=[],this.childGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da empresa"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"color-11",label:"Ativo"},{value:"em-missao",color:"color-09",label:"Em miss\xE3o"},{value:"reserva",color:"color-08",label:"Reserva"},{value:"inativo",color:"color-06",label:"Inativo"},{value:"ferido",color:"color-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"reserva",label:"Reserva"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.childGridItemsUpdated=[],this.childGridDisabledIncludeButton=!0}ngOnInit(){this.mainGridRowsActions={title:this.mainGridTitle,hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.heroes=[],this.currentIdItem=a.id),new B({name:new S(a.name,[I.required]),status:new S(a.status,[I.min(1)])})),afterRemove:this.afterRemoveMainGrid.bind(this),afterUndoRemove:this.afterUndoRemoveMainGrid.bind(this)},this.mainGridItemsUpdated=[...this.mainGridItems],this.childGridRowsActions={title:this.childGridTitle,hiddenGrid:!1,actionEdit:(a,r)=>(r==="include"&&!a.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,a.id=a.$uuidThfIncluded,a.heroes=[],this.currentIdItem=a.id),new B({name:new S(a.name,[I.required]),status:new S(a.status,[I.min(1)])})),change:this.changeChildGrid.bind(this),beforeUndoRemove:this.beforeUndoRemoveChildGrid.bind(this),afterRemove:this.afterRemoveChildGrid.bind(this),afterUndoRemove:this.afterUndoRemoveChildGrid.bind(this)},this.childGridItemsUpdated=[]}handleMainGridSelection(a){console.log("Selected item from main grid: ",a),this.mainGridSelectedItem=a,this.mainGridSelectedItemIndex=this.mainGridItems.findIndex(r=>r.id===a.id),this.childGridItemsUpdated=a.heroes?[...a.heroes]:[],this.childGridDisabledIncludeButton=!!a.$removed,this.childGridRowsActions.title=this.childGridTitle+" - "+a.name,a.$removed?this.childGrid.setRowStateFilter("removed",!1,!1):this.childGrid.setRowStateFilter("active",!1,!1)}handleMainGridUnselection(a){console.log("Unselected item from main grid: ",a),this.mainGridSelectedItem={id:null,heroes:[]},this.mainGridSelectedItemIndex=void 0,this.childGridItemsUpdated=[],this.childGridDisabledIncludeButton=!0,this.childGridRowsActions.title=this.childGridTitle}afterRemoveMainGrid(a){console.log("Removed item from main grid: ",a),a.status="inativo",a.heroes.forEach(r=>{r.$removed=!0,r.status="inativo",this.childGrid.updateItem(r,r)})}afterUndoRemoveMainGrid(a){console.log("Undo removed item from main grid: ",a),a.status="ativo",a.heroes.forEach(r=>{r.$removed=!1,r.status="ativo",this.childGrid.updateItem(r,r)})}beforeUndoRemoveChildGrid(a){return console.log("Before undo remove item from child grid: ",a),this.mainGridItems.find(n=>n.heroes.includes(a))?.$removed?(this.notificationService.warning("N\xE3o \xE9 poss\xEDvel desfazer a remo\xE7\xE3o de um her\xF3i de um time inativo."),!1):!0}afterRemoveChildGrid(a){console.log("Removed item from child grid: ",a),a.status="inativo",this.childGrid.updateItem(a,a)}afterUndoRemoveChildGrid(a){console.log("Undo removed item from child grid: ",a),a.status="ativo",this.childGrid.updateItem(a,a)}changeChildGrid(a){console.log("Child grid change event: ",a)}onMainGridRowStateFilter(a){this.mainGridSelectedItem!==void 0&&(a==="active"&&!this.mainGridSelectedItem?.$removed||a==="removed"&&this.mainGridSelectedItem?.$removed)&&this.mainGrid.selectRowItem(this.mainGridSelectedItem),this.childGrid.setRowStateFilter(a,!1,!1)}static{this.\u0275fac=function(r){return new(r||d)(R(fe))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-parent-detail-editing-doc"]],viewQuery:function(r,n){if(r&1&&(D(Qn,5),D(Bn,5)),r&2){let l;A(l=_())&&(n.mainGrid=l.first),A(l=_())&&(n.childGrid=l.first)}},standalone:!1,decls:12,vars:21,consts:[["mainGrid",""],["childGrid",""],[1,"po-font-text-large-bold"],[3,"t-disabled"],[3,"t-selected","t-unselected","t-change-row-state-filter","t-items","t-columns","t-grid-row-actions","t-actions-right","t-selectable","t-single-select","t-selectable-removed","t-selectable-entire-line","t-height"],[3,"t-items","t-columns","t-grid-row-actions","t-disabled-include-button","t-actions-right","t-selectable","t-single-select","t-height"],[3,"htmlCode","tsCode"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o Flu\xEDda em Grade (Pai-Filha)"),t(),o(3,"po-divider"),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"thf-grid",4,0),g("t-selected",function(y){return p(l),c(n.handleMainGridSelection(y))})("t-unselected",function(y){return p(l),c(n.handleMainGridUnselection(y))})("t-change-row-state-filter",function(y){return p(l),c(n.onMainGridRowStateFilter(y))}),t()(),i(8,"thf-splitter-pane"),o(9,"thf-grid",5,1),t()(),o(11,"app-code-accordion-doc",6),t()}r&2&&(m(4),s("t-disabled",!0),m(2),s("t-items",n.mainGridItems)("t-columns",n.mainGridColumns)("t-grid-row-actions",n.mainGridRowsActions)("t-actions-right",!0)("t-selectable",!0)("t-single-select",!0)("t-selectable-removed",!0)("t-selectable-entire-line",!1)("t-height",320),m(3),s("t-items",n.mainGridSelectedItemIndex!==void 0?n.mainGridItems[n.mainGridSelectedItemIndex].heroes:J(20,Hn))("t-columns",n.childGridColumns)("t-grid-row-actions",n.childGridRowsActions)("t-disabled-include-button",n.childGridDisabledIncludeButton)("t-actions-right",!0)("t-selectable",!1)("t-single-select",!1)("t-height",320),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,M,oe,ne,T],encapsulation:2})}}return d})();var si=`<thf-grid
  #gridComponent
  t-spacing="small"
  [t-selectable]="true"
  [t-selectable-entire-line]="false"
  [t-single-select]="true"
  [t-columns]="columnWithItems"
  [t-items]="items"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-auto-size]="false"
  [t-height]="500"
  [t-virtual-columns]="true"
  [t-virtual-scroll]="true"
/>`,pi=`import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  ThfGridColumn,
  ThfGridComponent,
  ThfGridEditProperties,
  ThfGridRowActions,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-virtual-doc',
  templateUrl: './thf-grid-virtual-doc.component.html',
  standalone: false,
})
export class ThfGridVirtualDocComponent implements OnInit {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;
  gridRowsActionsWithItems!: ThfGridRowActions;

columnWithItems: Array<ThfGridColumn> = [
    {
      property: 'id',
      label: 'id',
      filter: true,
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
      filter: true,
      editProperties: {
        required: true,
        componentEditable: 'input',
        errorMessage: 'Obrigat\xF3rio',
        requiredFieldErrorMessage: true,
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
        keydown: this.onKeyDown.bind(this, 'name'),
      },
    },
    {
      property: 'status',
      label: 'Status',
      filter: true,
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
      editProperties: {
        componentEditable: 'combo',
        required: true,
        disabledInitFilter: true,
        options: [
          { value: 1, label: 'Ativo' },
          { value: 2, label: 'Inativo' },
          { value: 0, label: 'Other' },
        ],
        removeInitialFilter: true,
        fieldLabel: 'label',
        fieldValue: 'value',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
        controlValueWithLabel: true,
      },
    },
    {
      property: 'values',
      label: 'Values',
      filter: true,
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: false,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'values'),
        controlValueWithLabel: true,
      },
    },

    {
      property: 'number',
      label: 'Number',
      type: 'number',
      editProperties: {
        componentEditable: 'number',
        errorMessage: 'Number \xE9 obrigat\xF3rio',
        help: 'Input number',
        helper: 'Digite um n\xFAmero aqui',
      },
    },
    {
      property: 'datepicker',
      label: 'datepicker',
      filter: true,
      type: 'date',
      editProperties: {
        componentEditable: 'datepicker',
        errorMessage: 'Datepicker \xE9 obrigat\xF3rio',
        help: 'Entre com a data',
        helper: 'Valor do tipo date',
      },
    },
    {
      property: 'otherStatus',
      label: 'Outro Status',
      filter: true,
      editProperties: {
        componentEditable: 'multiselect',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        fieldLabel: 'label',
        fieldValue: 'value',
        errorMessage: 'Obrigat\xF3rio',
        helper: 'Marque um ou mais status, conforme necess\xE1rio.',
        help: 'status',
        keydown: this.onKeyDown.bind(this, 'otherStatus'),
        controlValueWithLabel: true,
      },
    },
    {
      property: 'select',
      label: 'select',
      filter: true,
      editProperties: {
        componentEditable: 'select',
        options: [
          { value: 123, label: 'Ativo' },
          { value: 233, label: 'Inativo' },
          { value: 3, label: 'Other' },
        ],
        errorMessage: 'select \xE9 obrigat\xF3rio',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'switch',
      label: 'switch',
      filter: true,
      type: 'boolean',
      editProperties: {
        componentEditable: 'switch',
        hideLabelStatus: false,
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'decimal',
      label: 'decimal',
      type: 'currency',
      filter: true,
      editProperties: {
        componentEditable: 'decimal',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'checkbox',
      label: 'checkbox',
      filter: true,
      type: 'boolean',
      editProperties: {
        componentEditable: 'checkbox',
        disabled: false,
        help: 'lorem impsum',
        helper: ' ok ok ok',
      },
    },
    {
      property: 'valuesx',
      label: 'Valuesx',
      filter: true,
      editProperties: {
        componentEditable: 'lookup',
        searchService: 'https://po-sample-api.onrender.com/v1/heroes',
        fieldValue: 'value',
        fieldLabel: 'label',
        multiple: true,
        required: true,
        errorMessage: 'Obrigat\xF3rio',
        helper:
          'Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.',
        help: 'Input lookup',
        keydown: this.onKeyDown.bind(this, 'valuesx'),
        controlValueWithLabel: true,
      },
    },
  ];

  items: any[] = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      status: 1,
      values: [1495831666871],
      valuesx: [1495831666871],
      otherStatus: [233],
      number: 1,
      datepicker: '1980-11-01',
      select: '3',
      switch: true,
      decimal: 123.45,
      checkbox: true,
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      status: 2,
      values: [1495831698598],
      valuesx: [1495831698598],
      otherStatus: [233],
      number: 2,
      datepicker: '1980-11-02',
      select: '3',
      switch: false,
      decimal: 223.45,
      checkbox: false,
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      values: [1495832652942],
      valuesx: [1495832652942],
      otherStatus: [3],
      number: 3,
      datepicker: '1980-11-03',
      select: '3',
      switch: true,
      decimal: 323.45,
      checkbox: true,
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      values: [1495832683682],
      valuesx: [1495832683682],
      otherStatus: [3],
      number: 4,
      datepicker: '1980-11-04',
      select: '3',
      switch: false,
      decimal: 423.45,
      checkbox: false,
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      values: [1495833068596],
      valuesx: [1495833068596],
      otherStatus: [233],
      number: 5,
      datepicker: '1980-11-05',
      select: '3',
      switch: true,
      decimal: 523.45,
      checkbox: true,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      values: [1495833068597],
      valuesx: [1495833068597],
      otherStatus: [233],
      number: 6,
      datepicker: '1980-11-06',
      select: '3',
      switch: false,
      decimal: 623.456,
      checkbox: false,
    },
  ];

  form!: FormGroup;
  itemsUpdated: Array<any> = [];
  editProperties!: ThfGridEditProperties;
  currentIdItem: any;

  ngOnInit() {
    this.editProperties = {
      actionEdit: this.setFormGroup.bind(this),
    };

    for (let i = 1; i <= 600; i++) {
      const prop = \`property\` + i;
      this.columnWithItems.push({
        property: prop,
        label: \`Dynamic\` + i,
        editProperties: { disabled: false },
      });
    }

    let itemsUpdatedNew = [];

    const baseItem = this.items[0];
    for (let i = 1; i <= 10000; i++) {
      const randomId = Date.now() + i;
      const newItem = {
        ...baseItem,
        id: randomId + i,
        name: \`\${baseItem.name} \${i}\`,
      };
      for (let j = 1; j <= 600; j++) {
        newItem[\`property\${j}\`] = \`Valor \${j}\`;
      }

      itemsUpdatedNew.push(newItem);
    }

    this.items = [...this.items, ...itemsUpdatedNew];

    this.gridRowsActionsWithItems = {
      title: 'Items',
      hiddenGrid: true,
      actionEdit: (dataItem, mode) => {
        if (mode === 'include' && !dataItem.id) {
          console.log('mode: ', mode);
          dataItem.id = dataItem.$uuidThfIncluded;
          dataItem.dependents = [];
          this.currentIdItem = dataItem.id;
        }
        let group: any = {
          name: new FormControl(dataItem.name),
          status: new FormControl(dataItem.status, [Validators.min(1)]),
          values: new FormControl(dataItem.values, [Validators.required]),
          valuesx: new FormControl(dataItem.valuesx, [Validators.required]),
          otherStatus: new FormControl(dataItem.otherStatus),
          number: new FormControl(dataItem.number),
          datepicker: new FormControl(dataItem.datepicker),
          select: new FormControl(dataItem.select),
          switch: new FormControl(dataItem.switch),
          decimal: new FormControl(dataItem.decimal),
          checkbox: new FormControl(dataItem.checkbox),
        };
        for (let i = 1; i <= 600; i++) {
          group[\`property\${i}\`] = new FormControl(dataItem[\`property\${i}\`]);
        }

        this.form = new FormGroup(group);
        return this.form;
      },
      afterSave: this.onAfterSave.bind(this),
      beforeSave: this.onBeforeSave.bind(this),
      beforeInsert: this.onBeforeInsert.bind(this),
      beforeRemove: this.onBeforeRemove.bind(this),
      afterRemove: this.onAfterRemove.bind(this),
    };

    this.itemsUpdated = [...this.items];
  }

  onKeyDown(property: string, event: KeyboardEvent): void {
    if (event.code === 'F9') {
      this.thfGrid.showAdditionalHelp(property);
    }
  }

  onBeforeSave(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeSaveSubItems(newValue: any, oldValue: any) {
    console.log('before new value: ', newValue);
    console.log('before old value: ', oldValue);
    return true;
  }

  onBeforeInsert(newValue: any) {
    console.log('before insert new value: ', newValue);
    this.itemsUpdated = [...this.itemsUpdated, newValue];
    return true;
  }

  onBeforeInsertSubItems(newValue: { id: any; $uuidThfIncluded: any }) {
    newValue.id = newValue.$uuidThfIncluded;
    const item = this.itemsUpdated.find(
      (item) => item.id === this.currentIdItem
    );
    item.dependents = item.dependents
      ? [...item.dependents, newValue]
      : [newValue];
    return true;
  }

  onBeforeRemove(row: { id: any }) {
    return true;
  }

  onAfterSave(row: any) {
    console.log('onAfterSave(new): ', row);
  }

  onAfterRemove(row: any) {
    console.log('afterRemove: ', row);
    return true;
  }

  setFormGroup(dataItem: any) {
    this.form = new FormGroup({
      id: new FormControl(dataItem.id, [Validators.required]),
      name: new FormControl(dataItem.name),
      city: new FormControl(dataItem.city),
      birthdate: new FormControl(dataItem.birthdate),
      status: new FormControl(dataItem.status),
      email: new FormControl(dataItem.email),
    });
    return this.form;
  }
}
`;var Un=["gridComponent"],ci=(()=>{class d{constructor(){this.htmlCode=si,this.tsCode=pi,this.columnWithItems=[{property:"id",label:"id",filter:!0,editProperties:{disabled:!0}},{property:"name",label:"Nome",filter:!0,editProperties:{required:!0,componentEditable:"input",errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe pelo menos o primeiro nome.",help:"Input text",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",filter:!0,labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",required:!0,disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value",helper:"Informe pelo menos o primeiro nome.",help:"Input text",controlValueWithLabel:!0}},{property:"values",label:"Values",filter:!0,editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!1,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"values"),controlValueWithLabel:!0}},{property:"number",label:"Number",type:"number",editProperties:{componentEditable:"number",errorMessage:"Number \xE9 obrigat\xF3rio",help:"Input number",helper:"Digite um n\xFAmero aqui"}},{property:"datepicker",label:"datepicker",filter:!0,type:"date",editProperties:{componentEditable:"datepicker",errorMessage:"Datepicker \xE9 obrigat\xF3rio",help:"Entre com a data",helper:"Valor do tipo date"}},{property:"otherStatus",label:"Outro Status",filter:!0,editProperties:{componentEditable:"multiselect",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],fieldLabel:"label",fieldValue:"value",errorMessage:"Obrigat\xF3rio",helper:"Marque um ou mais status, conforme necess\xE1rio.",help:"status",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"select",label:"select",filter:!0,editProperties:{componentEditable:"select",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],errorMessage:"select \xE9 obrigat\xF3rio",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"switch",label:"switch",filter:!0,type:"boolean",editProperties:{componentEditable:"switch",hideLabelStatus:!1,helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"decimal",label:"decimal",type:"currency",filter:!0,editProperties:{componentEditable:"decimal",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"checkbox",label:"checkbox",filter:!0,type:"boolean",editProperties:{componentEditable:"checkbox",disabled:!1,help:"lorem impsum",helper:" ok ok ok"}},{property:"valuesx",label:"Valuesx",filter:!0,editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"valuesx"),controlValueWithLabel:!0}}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!1,decimal:223.45,checkbox:!1},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:323.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!1,decimal:423.45,checkbox:!1},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:523.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!1,decimal:623.456,checkbox:!1}],this.itemsUpdated=[]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)};for(let n=1;n<=600;n++){let l=`property${n}`;this.columnWithItems.push({property:l,label:`Dynamic ${n}`,editProperties:{disabled:!1}})}let a=[],r=this.items[0];for(let n=1;n<=1e4;n++){let l=Date.now()+n,E=Q(O({},r),{id:l+n,name:`${r.name} ${n}`});for(let y=1;y<=600;y++)E[`property${y}`]=`Valor ${y}`;a.push(E)}this.items=[...this.items,...a],this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(n,l)=>{l==="include"&&!n.id&&(console.log("mode: ",l),n.id=n.$uuidThfIncluded,n.dependents=[],this.currentIdItem=n.id);let E={name:new S(n.name),status:new S(n.status,[I.min(1)]),values:new S(n.values,[I.required]),valuesx:new S(n.values,[I.required]),otherStatus:new S(n.otherStatus),number:new S(n.number),datepicker:new S(n.datepicker),select:new S(n.select),switch:new S(n.switch),decimal:new S(n.decimal),checkbox:new S(n.checkbox)};for(let y=1;y<=600;y++)E[`property${y}`]=new S(n[`property${y}`]);return this.form=new B(E),this.form},afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onKeyDown(a,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(a)}onBeforeSave(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeSaveSubItems(a,r){return console.log("before new value: ",a),console.log("before old value: ",r),!0}onBeforeInsert(a){return console.log("before insert new value: ",a),this.itemsUpdated=[...this.itemsUpdated,a],!0}onBeforeInsertSubItems(a){a.id=a.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,a]:[a],!0}onBeforeRemove(a){return!0}onAfterSave(a){console.log("onAfterSave(new): ",a)}onAfterRemove(a){return console.log("afterRemove: ",a),!0}setFormGroup(a){return this.form=new B({id:new S(a.id,[I.required]),name:new S(a.name),city:new S(a.city),birthdate:new S(a.birthdate),status:new S(a.status),email:new S(a.email)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-virtual-doc"]],viewQuery:function(r,n){if(r&1&&D(Un,5),r&2){let l;A(l=_())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:13,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","small",3,"t-selectable","t-selectable-entire-line","t-single-select","t-columns","t-items","t-grid-row-actions","t-actions-right","t-auto-size","t-height","t-virtual-columns","t-virtual-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando virtual-columns e virtual-scroll"),t(),o(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-selectable",!0)("t-selectable-entire-line",!1)("t-single-select",!0)("t-columns",n.columnWithItems)("t-items",n.items)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-auto-size",!1)("t-height",500)("t-virtual-columns",!0)("t-virtual-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,M,T],encapsulation:2})}}return d})();function $n(d,C){d&1&&o(0,"app-thf-grid-basic-doc")}function Jn(d,C){d&1&&o(0,"app-thf-grid-editing-inline-doc")}function Zn(d,C){d&1&&o(0,"app-thf-grid-row-actions-doc")}function Xn(d,C){d&1&&o(0,"app-thf-grid-aggregates-doc")}function Yn(d,C){d&1&&o(0,"app-thf-grid-editing-fluid-currency-doc")}function e0(d,C){d&1&&o(0,"app-thf-grid-delete-service-doc")}function t0(d,C){d&1&&o(0,"app-thf-grid-virtual-doc")}function i0(d,C){d&1&&o(0,"app-thf-grid-dynamic-properties")}function n0(d,C){d&1&&o(0,"app-thf-grid-auto-fit-scroll")}function o0(d,C){d&1&&o(0,"app-thf-grid-parent-detail-editing-doc")}var ui=(()=>{class d{constructor(){this.samples=[{label:"Basic Service",value:"basic"},{label:"Edi\xE7\xE3o em Linha",value:"editing-inline"},{label:"Edi\xE7\xE3o Flu\xEDda",value:"row-actions"},{label:"Totalizador e Filtro por Colunas",value:"aggregates"},{label:"Edi\xE7\xE3o Flu\xEDda com Casas Decimais e A\xE7\xF5es em Lote",value:"editing-fluid-currency"},{label:"Grid Dele\xE7\xE3o com Servi\xE7o Customizado",value:"delete-service"},{label:"Grid utilizando virtual-columns e virtual-scroll",value:"virtual"},{label:"Edi\xE7\xE3o com Propriedades din\xE2micas",value:"dynamic-properties"},{label:"Grid utilizando auto-size e auto-fit-on-scroll",value:"auto-fit-scroll"},{label:"Edi\xE7\xE3o Flu\xEDda em Grade (Pai-Filha)",value:"parent-detail-editing"}],this.activeSample="basic"}setActiveSample(a){this.activeSample=a}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid"]],standalone:!1,decls:16,vars:12,consts:[["p-title","THF-Grid","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview","",1,"samples-container"],["p-label","Selecione um exemplo",3,"ngModelChange","ngModel","p-options"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-grid")(2,"div",1)(3,"po-select",2),h("ngModelChange",function(E){return f(n.activeSample,E)||(n.activeSample=E),E}),t(),L(4,$n,1,0,"app-thf-grid-basic-doc")(5,Jn,1,0,"app-thf-grid-editing-inline-doc")(6,Zn,1,0,"app-thf-grid-row-actions-doc")(7,Xn,1,0,"app-thf-grid-aggregates-doc")(8,Yn,1,0,"app-thf-grid-editing-fluid-currency-doc")(9,e0,1,0,"app-thf-grid-delete-service-doc")(10,t0,1,0,"app-thf-grid-virtual-doc")(11,i0,1,0,"app-thf-grid-dynamic-properties")(12,n0,1,0,"app-thf-grid-auto-fit-scroll")(13,o0,1,0,"app-thf-grid-parent-detail-editing-doc"),t(),i(14,"div",3),o(15,"app-thf-grid-labs-doc"),t()()()),r&2&&(m(3),b("ngModel",n.activeSample),s("p-options",n.samples),m(),H(n.activeSample==="basic"?4:-1),m(),H(n.activeSample==="editing-inline"?5:-1),m(),H(n.activeSample==="row-actions"?6:-1),m(),H(n.activeSample==="aggregates"?7:-1),m(),H(n.activeSample==="editing-fluid-currency"?8:-1),m(),H(n.activeSample==="delete-service"?9:-1),m(),H(n.activeSample==="virtual"?10:-1),m(),H(n.activeSample==="dynamic-properties"?11:-1),m(),H(n.activeSample==="auto-fit-scroll"?12:-1),m(),H(n.activeSample==="parent-detail-editing"?13:-1))},dependencies:[G,U,he,te,wt,Mt,zt,Nt,Ht,Kt,Zt,ei,ni,ri,mi,ci],encapsulation:2})}}return d})();function a0(d,C){if(d&1){let a=F();i(0,"div",7)(1,"po-container",8)(2,"po-input",9),h("ngModelChange",function(n){p(a);let l=u();return f(l.label,n)||(l.label=n),c(n)}),t(),i(3,"po-input",10),h("ngModelChange",function(n){p(a);let l=u();return f(l.help,n)||(l.help=n),c(n)}),t(),i(4,"po-input",11),h("ngModelChange",function(n){p(a);let l=u();return f(l.helperText,n)||(l.helperText=n),c(n)}),t(),i(5,"po-input",12),h("ngModelChange",function(n){p(a);let l=u();return f(l.placeholder,n)||(l.placeholder=n),c(n)}),t(),i(6,"po-input",13),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldErrorMessage,n)||(l.fieldErrorMessage=n),c(n)}),t(),i(7,"po-select",14),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldLabel,n)||(l.fieldLabel=n),c(n)}),t(),i(8,"po-select",15),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldValue,n)||(l.fieldValue=n),c(n)}),t(),i(9,"po-input",16),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldFormat,n)||(l.fieldFormat=n),c(n)}),g("p-change",function(n){p(a);let l=u();return c(l.onFieldFormatChange(n))}),t()(),i(10,"po-container",8)(11,"po-checkbox-group",17),h("ngModelChange",function(n){p(a);let l=u();return f(l.columnsName,n)||(l.columnsName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateColumns())}),t(),i(12,"po-checkbox-group",18),h("ngModelChange",function(n){p(a);let l=u();return f(l.gridPropertiesName,n)||(l.gridPropertiesName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateGridProperties())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),h("ngModelChange",function(n){p(a);let l=u();return f(l.otherProperties,n)||(l.otherProperties=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.changeOtherPropertiesOptions())}),t()(),i(15,"po-container",8)(16,"po-radio-group",20),h("ngModelChange",function(n){p(a);let l=u();return f(l.lookupModalSize,n)||(l.lookupModalSize=n),c(n)}),t(),i(17,"po-radio-group",21),h("ngModelChange",function(n){p(a);let l=u();return f(l.searchOnEnter,n)||(l.searchOnEnter=n),c(n)}),t()(),i(18,"po-container",8)(19,"po-radio-group",22),h("ngModelChange",function(n){p(a);let l=u();return f(l.size,n)||(l.size=n),c(n)}),t(),i(20,"po-textarea",23),h("ngModelChange",function(n){p(a);let l=u();return f(l.literals,n)||(l.literals=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeLiterals())}),t(),i(21,"po-textarea",24),h("ngModelChange",function(n){p(a);let l=u();return f(l.filterSearchSelect,n)||(l.filterSearchSelect=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeFilterSearchSelects())}),t(),i(22,"po-textarea",25),h("ngModelChange",function(n){p(a);let l=u();return f(l.keysLabel,n)||(l.keysLabel=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeKeysLabel())}),t()()(),i(23,"div",26)(24,"po-button",27),g("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=u();m(2),b("ngModel",a.label),m(),b("ngModel",a.help),m(),b("ngModel",a.helperText),m(),b("ngModel",a.placeholder),m(),b("ngModel",a.fieldErrorMessage),m(),b("ngModel",a.fieldLabel),s("p-options",a.fieldLabelOptions),m(),b("ngModel",a.fieldValue),s("p-options",a.fieldValueOptions),m(),b("ngModel",a.fieldFormat),m(2),b("ngModel",a.columnsName),s("p-columns",4)("p-options",a.columnsOptions),m(),b("ngModel",a.gridPropertiesName),s("p-columns",4)("p-options",a.gridPropertiesOptions),m(2),s("p-columns",4)("p-options",a.otherPropertiesOptions),b("ngModel",a.otherProperties),m(2),s("p-columns",3)("p-options",a.lookupModalSizeOptions),b("ngModel",a.lookupModalSize),m(),b("ngModel",a.searchOnEnter),s("p-options",a.searchOnEnterOptions),m(2),b("ngModel",a.size),s("p-options",a.sizesOptions),m(),b("ngModel",a.literals),m(),b("ngModel",a.filterSearchSelect),m(),b("ngModel",a.keysLabel)}}var Ei=(()=>{class d{constructor(){this.htmlCode=`<po-container>
  <span class="po-font-text-large-bold">Labs</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>

  <thf-lookup
    name="lookup"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-helper]="helperText"
    [t-auto-height]="otherProperties.includes('autoHeight')"
    [t-clean]="otherProperties.includes('clean')"
    [t-columns]="columns"
    [t-disabled]="otherProperties.includes('disabled')"
    [t-error-limit]="otherProperties.includes('fieldErrorLimit')"
    [t-field-error-message]="fieldErrorMessage"
    [t-field-format]="fieldFormat"
    [t-field-label]="fieldLabel"
    [t-field-value]="fieldValue"
    [t-field-error-message]="fieldErrorMessage"
    [t-filter-search-select]="customFilterSearchSelect"
    [t-grid-properties]="gridProperties"
    [t-help]="help"
    [t-keys-label]="customKeysLabel"
    [t-label]="label"
    [t-literals]="customLiterals"
    [t-loading]="otherProperties.includes('loading')"
    [t-modal-size]="lookupModalSize"
    [t-multiple]="otherProperties.includes('multiple')"
    [t-no-autocomplete]="otherProperties.includes('noAutoComplete')"
    [t-optional]="otherProperties.includes('optional')"
    [t-placeholder]="placeholder"
    [t-required]="otherProperties.includes('required')"
    [t-show-required]="otherProperties.includes('showRequired')"
    [t-search-on-enter]="searchOnEnter"
    [t-size]="size"
    [t-label-text-wrap]="otherProperties?.includes('labelTextWrap')"
    (t-change)="changeEvent('t-change')"
    (t-error)="changeEvent('t-error')"
    (t-selected)="changeEvent('t-selected')"
    (t-focus)="changeEvent('t-focus')"
    (t-keydown)="changeEvent('t-keydown')"
    (t-rows-selected)="changeEvent('t-rows-selected')"
    [(ngModel)]="lookupSingle"
  ></thf-lookup>

  <po-container class="po-mt-1" style="display: flex">
    <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
  </po-container>

    <div class="po-row po-mt-2 po-mb-2" style="display: block">
      <po-container class="po-mb-2" style="display: flex">
        <po-input
          class="po-md-6"
          name="label"
          [(ngModel)]="label"
          p-clean
          p-label="Label"
        ></po-input>
        <po-input
          class="po-md-6"
          name="help"
          [(ngModel)]="help"
          p-clean
          p-label="Help"
        ></po-input>
        <po-input
          class="po-md-6"
          name="helperText"
          [(ngModel)]="helperText"
          p-clean
          p-label="Additional Help"
        >
        </po-input>
        <po-input
          class="po-md-6"
          name="placeholder"
          [(ngModel)]="placeholder"
          p-clean
          p-label="Placeholder"
        ></po-input>

        <po-input
          class="po-md-6"
          name="fieldErrorMessage"
          [(ngModel)]="fieldErrorMessage"
          p-clean
          p-label="Field Error Message"
        ></po-input>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldLabel"
          [(ngModel)]="fieldLabel"
          p-label="Field Label"
          p-required
          [p-options]="fieldLabelOptions"
        ></po-select>

        <po-select
          class="po-md-6 po-lg-3"
          name="fieldValue"
          [(ngModel)]="fieldValue"
          p-label="Field Value"
          p-required
          [p-options]="fieldValueOptions"
        ></po-select>

        <po-input
          name="formatField"
          [(ngModel)]="fieldFormat"
          class="po-md-6"
          p-label="Field Format"
          p-help='Ex.: ["id", "name"]'
          (p-change)="onFieldFormatChange($event)"
        >
        </po-input>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="columnsName"
          [(ngModel)]="columnsName"
          [p-columns]="4"
          p-label="Columns"
          [p-options]="columnsOptions"
          (p-change)="updateColumns()"
        ></po-checkbox-group>
        <po-checkbox-group
          name="gridPropertiesName"
          [(ngModel)]="gridPropertiesName"
          [p-columns]="4"
          p-label="Grid Properties"
          [p-options]="gridPropertiesOptions"
          (p-change)="updateGridProperties()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-checkbox-group
          name="otherProperties"
          p-label="Other Properties"
          [p-columns]="4"
          [p-options]="otherPropertiesOptions"
          [(ngModel)]="otherProperties"
          (p-change)="changeOtherPropertiesOptions()"
        ></po-checkbox-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="lookupModalSize"
          p-label="Modal Size"
          [p-columns]="3"
          [p-options]="lookupModalSizeOptions"
          [(ngModel)]="lookupModalSize"
        ></po-radio-group>

        <po-radio-group
          class="po-lg-6"
          name="searchOnEnter"
          [(ngModel)]="searchOnEnter"
          p-label="SearchOnEnter"
          [p-options]="searchOnEnterOptions"
        >
        </po-radio-group>
      </po-container>

      <po-container class="po-mb-2" style="display: flex">
        <po-radio-group
          class="po-lg-6"
          name="size"
          [(ngModel)]="size"
          p-label="Size"
          p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
          [p-options]="sizesOptions"
        >
        </po-radio-group>

        <po-textarea
          class="po-lg-6"
          name="literals"
          p-label="Literals"
          p-help='{ "modalTitle": "Busca avan\xE7ada" }'
          [(ngModel)]="literals"
          (p-change-model)="changeLiterals()"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="filterSearchSelect"
          [(ngModel)]="filterSearchSelect"
          (p-change-model)="changeFilterSearchSelects()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
          p-label="Filter Search Select"
        ></po-textarea>

        <po-textarea
          class="po-lg-6"
          name="keysLabel"
          [(ngModel)]="keysLabel"
          (p-change-model)="changeKeysLabel()"
          p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
          p-label="Keys Label"
        ></po-textarea>
      </po-container>
    </div>

    <div class="po-row">
      <po-button
        class="po-lg-3 po-md-6"
        p-label="Restore"
        (p-click)="restore()"
      >
      </po-button>
    </div>
</po-container>
  `,this.tsCode=`import { Component } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupColumn,
  ThfLookupFilterSearchSelect,
  ThfLookupGridProperties,
  ThfLookupKeysLabel,
  ThfLookupLiterals,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-labs-doc',
  templateUrl: './thf-lookup-labs-doc.component.html',
  styleUrl: './thf-lookup-labs-doc.component.css',
  standalone: false,
})
export class ThfLookupLabsDocComponent {
  helperText: string = '';
  columnsName: Array<string> = ['id', 'name', 'nickname', 'email'];
  gridPropertiesName: Array<string> = ['selectableEntireLine', 'showMoreVisible', 'striped', 'sortable', 'virtualScroll'];
  customFilterSearchSelect: Array<ThfLookupFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupKeysLabel> = [];
  customLiterals: ThfLookupLiterals = {};
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  help: string = '';
  keysLabel: string = '';
  label: string = '';
  literals: string = '';
  fieldErrorMessage: string = '';
  lookupSingle: any;
  otherProperties: Array<string> = [];
  placeholder: string = '';
  fieldFormat: Array<string> | undefined;
  lookupModalSize: string = 'lg';
  size: string = 'medium';
  searchOnEnter: 'include' | 'equal' = 'equal';

  columns: Array<ThfLookupColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];

  gridProperties!: ThfLookupGridProperties;

  lookupModalSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'sm', value: 'sm' },
    { label: 'md', value: 'md' },
    { label: 'lg', value: 'lg' },
    { label: 'xl', value: 'xl' },
    { label: 'auto', value: 'auto' },
  ];

  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Auto Height', value: 'autoHeight' },
    { label: 'Clean', value: 'clean', disabled: false },
    { label: 'Disabled', value: 'disabled' },
    { label: 'Multiple', value: 'multiple' },
    { label: 'No Autocomplete', value: 'noAutoComplete' },
    { label: 'Optional', value: 'optional', disabled: false },
    { label: 'Required', value: 'required' },
    { label: 'Show Required', value: 'showRequired', disabled: true },
    { value: 'fieldErrorLimit', label: 'Limit Error Message' },
    { value: 'labelTextWrap', label: 'Label Text Wrap' },
    { value: 'loading', label: 'Loading' }
  ];

  searchOnEnterOptions: Array<PoRadioGroupOption> = [
    { label: 'equal', value: 'equal' },
    { label: 'include', value: 'include' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  private readonly columnsDefinition: any = {
    id: <ThfLookupColumn>{ property: 'id', label: 'Id' },
    name: <ThfLookupColumn>{ property: 'name', label: 'Nome' },
    nickname: <ThfLookupColumn>{ property: 'nickname', label: 'Apelido' },
    email: <ThfLookupColumn>{ property: 'email', label: 'E-mail' },
  };

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  changeOtherPropertiesOptions() {
    const multiple = this.otherProperties.includes('multiple');
    const required = this.otherProperties.includes('required');

    this.otherPropertiesOptions[1].disabled = multiple;
    this.otherPropertiesOptions[7].disabled = !required;
    this.otherPropertiesOptions[5].disabled = required;
    this.otherPropertiesOptions = [...this.otherPropertiesOptions];
  }

  onFieldFormatChange(event: any) {
    try {
      this.fieldFormat = JSON.parse(event);
    } catch {
      this.fieldFormat = undefined;
    }
  }

  restore() {
    this.helperText = '';
    this.columnsName = ['id', 'name', 'nickname', 'email'];
    this.gridPropertiesName = [
      'selectableEntireLine',
      'showMoreVisible',
      'striped',
      'sortable',
      'virtualScroll',
    ];
    this.customFilterSearchSelect = [];
    this.customKeysLabel = [];
    this.customLiterals = {};
    this.event = '';
    this.fieldErrorMessage = '';
    this.fieldLabel = 'name';
    this.fieldValue = 'value';
    this.filterSearchSelect = '';
    this.help = '';
    this.keysLabel = '';
    this.label = '';
    this.literals = '';
    this.lookupSingle = undefined;
    this.otherProperties = [];
    this.placeholder = '';
    this.fieldFormat = undefined;
    this.size = 'medium';
    this.searchOnEnter = 'equal';
    this.changeFilterSearchSelects();
    this.changeKeysLabel();
    this.changeLiterals();
    this.changeOtherPropertiesOptions();
    this.updateColumns();
    this.updateGridProperties();
    this.lookupModalSize = 'lg';
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach((column) =>
      this.columns.push(this.columnsDefinition[column])
    );
  }

  updateGridProperties() {
    this.gridProperties = {};

    this.gridPropertiesName.forEach((properties) => {
      this.gridProperties = {
        ...this.gridProperties,
        [properties]: true,
      };
    });

    if (!this.gridPropertiesName.includes('sortable')) {
      this.gridProperties = {
        ...this.gridProperties,
        sortable: false,
      };
    }

    if (!this.gridPropertiesName.includes('striped')) {
      this.gridProperties = {
        ...this.gridProperties,
        striped: false,
      };
    }

    if (!this.gridPropertiesName.includes('selectableEntireLine')) {
      this.gridProperties = {
        ...this.gridProperties,
        selectableEntireLine: false,
      };
    }

    if (!this.gridPropertiesName.includes('showMoreVisible')) {
      this.gridProperties = {
        ...this.gridProperties,
        showMoreVisible: false,
      };
    }
  }
}
  `,this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.fieldErrorMessage="",this.otherProperties=[],this.placeholder="",this.lookupModalSize="lg",this.size="medium",this.searchOnEnter="equal",this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.lookupModalSizeOptions=[{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"},{label:"auto",value:"auto"}],this.otherPropertiesOptions=[{label:"Auto Height",value:"autoHeight"},{label:"Clean",value:"clean",disabled:!1},{label:"Disabled",value:"disabled"},{label:"Multiple",value:"multiple"},{label:"No Autocomplete",value:"noAutoComplete"},{label:"Optional",value:"optional",disabled:!1},{label:"Required",value:"required"},{label:"Show Required",value:"showRequired",disabled:!0},{value:"fieldErrorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"}],this.searchOnEnterOptions=[{label:"equal",value:"equal"},{label:"include",value:"include"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.gridPropertiesOptions=[{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Nome"},nickname:{property:"nickname",label:"Apelido"},email:{property:"email",label:"E-mail"}}}ngOnInit(){this.restore()}changeEvent(a){this.event=a}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}changeOtherPropertiesOptions(){let a=this.otherProperties.includes("multiple"),r=this.otherProperties.includes("required");this.otherPropertiesOptions[1].disabled=a,this.otherPropertiesOptions[7].disabled=!r,this.otherPropertiesOptions[5].disabled=r,this.otherPropertiesOptions=[...this.otherPropertiesOptions]}onFieldFormatChange(a){try{this.fieldFormat=JSON.parse(a)}catch{this.fieldFormat=void 0}}restore(){this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldErrorMessage="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.lookupSingle=void 0,this.otherProperties=[],this.placeholder="",this.fieldFormat=void 0,this.size="medium",this.searchOnEnter="equal",this.changeFilterSearchSelects(),this.changeKeysLabel(),this.changeLiterals(),this.changeOtherPropertiesOptions(),this.updateColumns(),this.updateGridProperties(),this.lookupModalSize="lg"}updateColumns(){this.columns=[],this.columnsName.forEach(a=>this.columns.push(this.columnsDefinition[a]))}updateGridProperties(){this.gridProperties={},this.gridPropertiesName.forEach(a=>{this.gridProperties=Q(O({},this.gridProperties),{[a]:!0})}),this.gridPropertiesName.includes("sortable")||(this.gridProperties=Q(O({},this.gridProperties),{sortable:!1})),this.gridPropertiesName.includes("striped")||(this.gridProperties=Q(O({},this.gridProperties),{striped:!1})),this.gridPropertiesName.includes("selectableEntireLine")||(this.gridProperties=Q(O({},this.gridProperties),{selectableEntireLine:!1})),this.gridPropertiesName.includes("showMoreVisible")||(this.gridProperties=Q(O({},this.gridProperties),{showMoreVisible:!1}))}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-labs-doc"]],standalone:!1,decls:10,vars:34,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookup","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-error","t-selected","t-focus","t-keydown","t-rows-selected","ngModelChange","t-helper","t-auto-height","t-clean","t-columns","t-disabled","t-error-limit","t-field-error-message","t-field-format","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-help","t-keys-label","t-label","t-literals","t-loading","t-modal-size","t-multiple","t-no-autocomplete","t-optional","t-placeholder","t-required","t-show-required","t-search-on-enter","t-size","t-label-text-wrap","ngModel"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","columnsName","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","lookupModalSize","p-label","Modal Size",1,"po-lg-6",3,"ngModelChange","p-columns","p-options","ngModel"],["name","searchOnEnter","p-label","SearchOnEnter",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-label","Literals","p-help",'{ "modalTitle": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-lookup",3),g("t-change",function(){return p(l),c(n.changeEvent("t-change"))})("t-error",function(){return p(l),c(n.changeEvent("t-error"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-focus",function(){return p(l),c(n.changeEvent("t-focus"))})("t-keydown",function(){return p(l),c(n.changeEvent("t-keydown"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),h("ngModelChange",function(y){return p(l),f(n.lookupSingle,y)||(n.lookupSingle=y),c(y)}),t(),i(5,"po-container",4),o(6,"po-info",5),t(),o(7,"app-code-accordion-doc",6),L(8,a0,25,29,"ng-template",null,0,Z),t()}if(r&2){let l=K(9);m(4),s("t-helper",n.helperText)("t-auto-height",n.otherProperties.includes("autoHeight"))("t-clean",n.otherProperties.includes("clean"))("t-columns",n.columns)("t-disabled",n.otherProperties.includes("disabled"))("t-error-limit",n.otherProperties.includes("fieldErrorLimit"))("t-field-error-message",n.fieldErrorMessage)("t-field-format",n.fieldFormat)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-field-error-message",n.fieldErrorMessage)("t-filter-search-select",n.customFilterSearchSelect)("t-grid-properties",n.gridProperties)("t-help",n.help)("t-keys-label",n.customKeysLabel)("t-label",n.label)("t-literals",n.customLiterals)("t-loading",n.otherProperties.includes("loading"))("t-modal-size",n.lookupModalSize)("t-multiple",n.otherProperties.includes("multiple"))("t-no-autocomplete",n.otherProperties.includes("noAutoComplete"))("t-optional",n.otherProperties.includes("optional"))("t-placeholder",n.placeholder)("t-required",n.otherProperties.includes("required"))("t-show-required",n.otherProperties.includes("showRequired"))("t-search-on-enter",n.searchOnEnter)("t-size",n.size)("t-label-text-wrap",n.otherProperties==null?null:n.otherProperties.includes("labelTextWrap")),b("ngModel",n.lookupSingle),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[G,U,W,v,P,be,le,de,he,ve,me,pe,T],styles:[".po-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.containerProperties[_ngcontent-%COMP%]{flex:1 1 100%}"]})}}return d})();var xi=(()=>{class d{constructor(){this.htmlCode=`<form [formGroup]="formMission">
  <thf-lookup
    formControlName="lookup2"
    name="lookupMultiple"
    t-field-label="name"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    t-key-last-search="lookupMultiple"
    t-label="Her\xF3is"
    t-placeholder="Placeholder multiple"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  ></thf-lookup>
</form>
  `,this.tsCode=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-thf-lookup-form-doc',
  templateUrl: './thf-lookup-form-doc.component.html',
  styleUrl: './thf-lookup-form-doc.component.css',
})
export class ThfLookupFormDocComponent {
  formMission = new FormGroup({
    lookup2: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupGridProperties = {
    autoSize: true,
    autoSizeOnScroll: true,
    resizable: true,
    groupable: true,
    draggable: true,
    hideSelectAll: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
    { property: 'id', label: 'Id' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];
}
  `,this.formMission=new B({lookup2:new S(["1495831666871"])}),this.gridProperties={autoSize:!0,autoSizeOnScroll:!0,resizable:!0,groupable:!0,draggable:!0,hideSelectAll:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"},{property:"id",label:"Id"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-form-doc"]],standalone:!1,decls:7,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookup2","name","lookupMultiple","t-field-label","name","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes","t-key-last-search","lookupMultiple","t-label","Her\xF3is","t-placeholder","Placeholder multiple",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup",3),t(),o(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("formGroup",n.formMission),m(),s("t-columns",n.columns)("t-grid-properties",n.gridProperties)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[re,G,ae,De,Ae,v,P,pe,T],encapsulation:2})}}return d})();var Si=(()=>{class d{constructor(){this.htmlCode=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
></thf-lookup>
  `,this.tsCode=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-basic-doc',
  templateUrl: './thf-lookup-basic-doc.component.html',
  styleUrl: './thf-lookup-basic-doc.component.css'
})
export class ThfLookupBasicDocComponent {}`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-basic-doc"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1),i(4,"form"),o(5,"thf-lookup",2),t(),o(6,"app-code-accordion-doc",3),t()),r&2&&(m(6),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[re,ae,we,v,P,pe,T],encapsulation:2})}}return d})();var bi=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
>
</thf-lookup>`,fi=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-custom-items-doc',
  templateUrl: './thf-lookup-custom-items-doc.component.html',
  styleUrl: './thf-lookup-custom-items-doc.component.css',
  standalone: false
})
export class ThfLookupCustomItemsDocComponent {
  customItems = [
    {
      value: 9999999999999,
      label: "Todos os Her\xF3is",
      id: 9999999999999,
      name: "Todos os Her\xF3is",
      nickname: "Todos",
      email: "-"
    },
    {
      value: 8888888888888,
      label: "Her\xF3i Customizado",
      id: 8888888888888,
      name: "Her\xF3i Customizado",
      nickname: "Customizado",
      email: "customizado@example.com"
    }
  ];
}
`;var hi=(()=>{class d{constructor(){this.htmlCode=bi,this.tsCode=fi,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-custom-items-doc"]],standalone:!1,decls:7,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),o(3,"po-divider",1),i(4,"form"),o(5,"thf-lookup",2),t(),o(6,"app-code-accordion-doc",3),t()),r&2&&(m(5),s("t-custom-items",n.customItems),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[re,ae,we,v,P,pe,T],encapsulation:2})}}return d})();var vi=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-basic-doc")(5,"app-thf-lookup-form-doc")(6,"app-thf-lookup-custom-items-doc"),t()(),i(7,"div",3),o(8,"app-thf-lookup-labs-doc"),t()()())},dependencies:[te,Dt,Ei,xi,Si,hi],encapsulation:2})}}return d})();var gi=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-height]="320"
/>`,yi=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {}`;var ze=(()=>{class d{constructor(){this.htmlCode=gi,this.tsCode=yi}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-basic-doc"]],standalone:!1,decls:6,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),o(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-height",320),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,se,T],encapsulation:2})}}return d})();var Ci=`<form [formGroup]="form">
  <thf-lookup-data
    formControlName="lookupData"
    name="lookupDataSingle"
    t-field-label="nickname"
    t-field-value="value"
    t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
    [t-columns]="columns"
    [t-grid-properties]="gridProperties"
    [t-keys-label]="keysLabel"
    [t-multiple]="true"
    [t-filter-search-select]="filterSelect"
  />
</form>

<div>
  <p>Valor do Formul\xE1rio:<br />{{ form.value | json }}</p>
</div>

<div>
  @if (!disabledFom) {
  <po-button
    p-label="Desabilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  } @else {
  <po-button
    p-label="Habilitar via FormControl"
    (p-click)="disableEnabledFom()"
  />
  }
</div>
`,Pi=`import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ThfLookupDataGridProperties } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-form-doc',
  templateUrl: './thf-lookup-data-form-doc.component.html',
  standalone: false,
})
export class ThfLookupDataFormDocComponent {
  disabledFom = false;

  form = new FormGroup({
    lookupData: new FormControl(['1495831666871']),
  });

  gridProperties: ThfLookupDataGridProperties = {
    autoSize: true,
    draggable: true,
    hideSelectAll: true,
    resizable: true,
  };

  columns = [
    { property: 'name', label: 'Name' },
    { property: 'nickname', label: 'Nickname' },
    { property: 'email', label: 'Email' },
  ];

  keysLabel = [
    { label: 'Nome', value: 'name' },
    { label: 'Email', value: 'email' },
  ];

  filterSelect = [
    { label: 'Nome', value: 'name' },
    { label: 'Nickname', value: 'nickname' },
    { label: 'Email', value: 'email' },
  ];

  disableEnabledFom() {
    const lookupData = this.form.get('lookupData');
    this.disabledFom = !this.disabledFom;

    this.disabledFom ? lookupData?.disable() : lookupData?.enable();
  }
}`;function p0(d,C){if(d&1){let a=F();i(0,"po-button",7),g("p-click",function(){p(a);let n=u();return c(n.disableEnabledFom())}),t()}}function c0(d,C){if(d&1){let a=F();i(0,"po-button",8),g("p-click",function(){p(a);let n=u();return c(n.disableEnabledFom())}),t()}}var je=(()=>{class d{constructor(){this.htmlCode=Ci,this.tsCode=Pi,this.disabledFom=!1,this.form=new B({lookupData:new S(["1495831666871"])}),this.gridProperties={autoSize:!0,draggable:!0,hideSelectAll:!0,resizable:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}disableEnabledFom(){let a=this.form.get("lookupData");this.disabledFom=!this.disabledFom,this.disabledFom?a?.disable():a?.enable()}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-form-doc"]],standalone:!1,decls:16,vars:12,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookupData","name","lookupDataSingle","t-field-label","nickname","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["p-label","Desabilitar via FormControl"],["p-label","Habilitar via FormControl"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"],["p-label","Desabilitar via FormControl",3,"p-click"],["p-label","Habilitar via FormControl",3,"p-click"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),o(3,"po-divider",1),i(4,"form",2),o(5,"thf-lookup-data",3),t(),i(6,"div")(7,"p"),e(8,"Valor do Formul\xE1rio:"),o(9,"br"),e(10),tt(11,"json"),t()(),i(12,"div"),L(13,p0,1,0,"po-button",4)(14,c0,1,0,"po-button",5),t(),o(15,"app-code-accordion-doc",6),t()),r&2&&(m(4),s("formGroup",n.form),m(),s("t-columns",n.columns)("t-grid-properties",n.gridProperties)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(5),xe(it(11,10,n.form.value)),m(3),H(n.disabledFom?14:13),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[re,G,ae,De,Ae,W,v,P,se,T,lt],encapsulation:2})}}return d})();var Ti=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
  [t-height]="320"
/>`,wi=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {
  customItems = [
    {
      value: 9999999999999,
      label: "Todos os Her\xF3is",
      id: 9999999999999,
      name: "Todos os Her\xF3is",
      nickname: "Todos",
      email: "-"
    },
    {
      value: 8888888888888,
      label: "Her\xF3i Customizado",
      id: 8888888888888,
      name: "Her\xF3i Customizado",
      nickname: "Customizado",
      email: "customizado@example.com"
    }
  ];
}`;var Oe=(()=>{class d{constructor(){this.htmlCode=Ti,this.tsCode=wi,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-custom-items-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items","t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),o(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-custom-items",n.customItems)("t-height",320),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,se,T],encapsulation:2})}}return d})();var Di=`<thf-lookup-data
  [t-columns]="columns"
  [t-disabled]="disabled"
  [t-field-label]="fieldLabel"
  [t-field-value]="fieldValue"
  [t-filter-search-select]="customFilterSearchSelect"
  [t-grid-properties]="gridProperties"
  [t-height]="height"
  [t-keys-label]="customKeysLabel"
  [t-literals]="customLiterals"
  [t-multiple]="multiple"
  [t-size]="size"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  (t-change)="changeEvent('t-change', $event)"
  (t-change-model)="changeEvent('t-change-model', $event)"
  (t-error)="changeEvent('t-error', $event)"
  (t-focus)="changeEvent('t-focus', '')"
  (t-keydown)="changeEvent('t-keydown', $event)"
  (t-selected)="changeEvent('t-selected', $event)"
/>

<po-container class="po-mt-1" style="display: flex">
  <span class="po-font-text-large-bold">Events</span>
  <po-divider class="po-divider-mb-0-75"></po-divider>
  <div style="max-height: 150px" [innerHTML]="event"></div>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-select
      class="po-md-4 po-lg-4"
      name="fieldValue"
      [(ngModel)]="fieldValue"
      p-label="Field Value"
      p-required
      [p-options]="fieldValueOptions"
    />

    <po-select
      class="po-md-4 po-lg-4"
      name="fieldLabel"
      [(ngModel)]="fieldLabel"
      p-label="Field Label"
      p-required
      [p-options]="fieldLabelOptions"
    />

    <po-input
      class="po-md-4 po-lg-4"
      name="heigth"
      [(ngModel)]="height"
      p-label="Height"
    />

    <div class="po-row">
      <po-switch
        class="po-md-6 po-lg-3"
        name="disabled"
        p-label="Disabled"
        [(ngModel)]="disabled"
      />

      <po-switch
        class="po-md-6 po-lg-3"
        name="Multiple"
        p-label="Multiple"
        [(ngModel)]="multiple"
      />

      <po-radio-group
        class="po-lg-6"
        name="size"
        [(ngModel)]="size"
        p-label="Size"
        p-help="Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA."
        [p-options]="sizesOptions"
      />
    </div>

    <div class="po-row">
      <po-textarea
        class="po-lg-6"
        name="filterSearchSelect"
        [(ngModel)]="filterSearchSelect"
        (p-change-model)="changeFilterSearchSelects()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]'
        p-label="Filter Search Select"
      />

      <po-textarea
        class="po-lg-6"
        name="keysLabel"
        [(ngModel)]="keysLabel"
        (p-change-model)="changeKeysLabel()"
        p-help='[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]'
        p-label="Keys Label"
      />
    </div>

    <po-textarea
      class="po-lg-6"
      name="literals"
      p-label="Literals"
      p-help='{ "placeholder": "Busca avan\xE7ada" }'
      [p-rows]="2"
      [(ngModel)]="literals"
      (p-change-model)="changeLiterals()"
    />
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-checkbox-group
      name="gridPropertiesName"
      [(ngModel)]="gridPropertiesName"
      [p-columns]="4"
      p-label="Grid Properties"
      [p-options]="gridPropertiesOptions"
      (p-change)="updateGridProperties()"
    />
  </po-container>
</div>
`,Ai=`import { Component } from '@angular/core';

import {
  PoCheckboxGroupOption,
  PoRadioGroupOption,
  PoSelectOption,
} from '@po-ui/ng-components';
import {
  ThfLookupDataColumn,
  ThfLookupDataFilterSearchSelect,
  ThfLookupDataGridProperties,
  ThfLookupDataKeysLabel,
  ThfLookupDataLiterals,
} from '@totvs/thf-components';

@Component({
  selector: 'app-thf-lookup-data-labs-doc',
  templateUrl: './thf-lookup-data-labs-doc.component.html',
  standalone: false,
})
export class ThfLookupDataLabsDocComponent {
  columns: Array<ThfLookupDataColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    { property: 'nickname', label: 'Apelido' },
    { property: 'email', label: 'E-mail' },
  ];
  customFilterSearchSelect: Array<ThfLookupDataFilterSearchSelect> = [];
  customKeysLabel: Array<ThfLookupDataKeysLabel> = [];
  customLiterals: ThfLookupDataLiterals = {};
  disabled = false;
  event: string = '';
  fieldLabel: string = 'name';
  fieldValue: string = 'value';
  filterSearchSelect: string = '';
  gridProperties!: ThfLookupDataGridProperties;
  height = 450;
  keysLabel: string = '';
  literals: string = '';
  multiple = true;
  size: string = 'medium';

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Id' },
    { value: 'name', label: 'Nome' },
    { value: 'nickname', label: 'Apelido' },
    { value: 'email', label: 'E-mail' },
  ];

  readonly gridPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { value: 'autoSize', label: 'AutoSize' },
    { value: 'autoSizeOnScroll', label: 'AutoSizeOnScroll' },
    { value: 'draggable', label: 'Draggable' },
    { value: 'groupable', label: 'Groupable' },
    { value: 'hideSelectAll', label: 'HideSelectAll' },
    { value: 'resizable', label: 'Resizable' },
    { value: 'selectableEntireLine', label: 'SelectableEntireLine' },
    { value: 'striped', label: 'Striped' },
    { value: 'showDraggableIcon', label: 'ShowDraggableIcon' },
    { value: 'showMoreDisabled', label: 'ShowMoreDisabled' },
    { value: 'showMoreVisible', label: 'ShowMoreVisible' },
    { value: 'sortable', label: 'Sortable' },
    { value: 'virtualScroll', label: 'VirtualScroll' },
  ];

  sizesOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' },
  ];

  readonly fieldLabelOptions: Array<PoSelectOption> = [
    { value: 'name', label: 'Name' },
    ...this.columnsOptions,
  ];

  readonly fieldValueOptions: Array<PoSelectOption> = [
    { value: 'value', label: 'Value' },
    ...this.columnsOptions,
  ];

  readonly gridPropertiesName: Array<string> = [
    'selectableEntireLine',
    'showMoreVisible',
    'striped',
    'sortable',
    'virtualScroll',
  ];

  changeEvent(eventDescription: any, value: any) {
    if (value instanceof KeyboardEvent) {
      value = {
        key: value.key,
        code: value.code,
        altKey: value.altKey,
        ctrlKey: value.ctrlKey,
        shiftKey: value.shiftKey,
      };
    }

    this.event =
      \`<p>\${eventDescription} - \${value ? JSON.stringify(value) : ''}</p>\` +
      this.event;
  }

  changeFilterSearchSelects() {
    try {
      this.customFilterSearchSelect = JSON.parse(this.filterSearchSelect);
    } catch {
      this.customFilterSearchSelect = [];
    }
  }

  changeKeysLabel() {
    try {
      this.customKeysLabel = JSON.parse(this.keysLabel);
    } catch {
      this.customKeysLabel = [];
    }
  }

  changeLiterals() {
    try {
      this.customLiterals = JSON.parse(this.literals);
    } catch {
      this.customLiterals = {};
    }
  }

  updateGridProperties() {
    let gridProperties = {};

    this.gridPropertiesName.forEach((properties) => {
      gridProperties = {
        ...gridProperties,
        [properties]: true,
      };
    });

    if (!this.gridPropertiesName.includes('sortable')) {
      gridProperties = {
        ...gridProperties,
        sortable: false,
      };
    }

    if (!this.gridPropertiesName.includes('striped')) {
      gridProperties = {
        ...gridProperties,
        striped: false,
      };
    }

    if (!this.gridPropertiesName.includes('selectableEntireLine')) {
      gridProperties = {
        ...gridProperties,
        selectableEntireLine: false,
      };
    }

    if (!this.gridPropertiesName.includes('showMoreVisible')) {
      gridProperties = {
        ...gridProperties,
        showMoreVisible: false,
      };
    }

    if (!this.gridPropertiesName.includes('groupable')) {
      gridProperties = {
        ...gridProperties,
        groupable: false,
      };
    }

    this.gridProperties = { ...gridProperties };
  }
}`;function x0(d,C){if(d&1){let a=F();i(0,"div",7)(1,"po-container",8)(2,"po-select",9),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldValue,n)||(l.fieldValue=n),c(n)}),t(),i(3,"po-select",10),h("ngModelChange",function(n){p(a);let l=u();return f(l.fieldLabel,n)||(l.fieldLabel=n),c(n)}),t(),i(4,"po-input",11),h("ngModelChange",function(n){p(a);let l=u();return f(l.height,n)||(l.height=n),c(n)}),t(),i(5,"div",12)(6,"po-switch",13),h("ngModelChange",function(n){p(a);let l=u();return f(l.disabled,n)||(l.disabled=n),c(n)}),t(),i(7,"po-switch",14),h("ngModelChange",function(n){p(a);let l=u();return f(l.multiple,n)||(l.multiple=n),c(n)}),t(),i(8,"po-radio-group",15),h("ngModelChange",function(n){p(a);let l=u();return f(l.size,n)||(l.size=n),c(n)}),t()(),i(9,"div",12)(10,"po-textarea",16),h("ngModelChange",function(n){p(a);let l=u();return f(l.filterSearchSelect,n)||(l.filterSearchSelect=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeFilterSearchSelects())}),t(),i(11,"po-textarea",17),h("ngModelChange",function(n){p(a);let l=u();return f(l.keysLabel,n)||(l.keysLabel=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeKeysLabel())}),t()(),i(12,"po-textarea",18),h("ngModelChange",function(n){p(a);let l=u();return f(l.literals,n)||(l.literals=n),c(n)}),g("p-change-model",function(){p(a);let n=u();return c(n.changeLiterals())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),h("ngModelChange",function(n){p(a);let l=u();return f(l.gridPropertiesName,n)||(l.gridPropertiesName=n),c(n)}),g("p-change",function(){p(a);let n=u();return c(n.updateGridProperties())}),t()()()}if(d&2){let a=u();m(2),b("ngModel",a.fieldValue),s("p-options",a.fieldValueOptions),m(),b("ngModel",a.fieldLabel),s("p-options",a.fieldLabelOptions),m(),b("ngModel",a.height),m(2),b("ngModel",a.disabled),m(),b("ngModel",a.multiple),m(),b("ngModel",a.size),s("p-options",a.sizesOptions),m(2),b("ngModel",a.filterSearchSelect),m(),b("ngModel",a.keysLabel),m(),s("p-rows",2),b("ngModel",a.literals),m(2),b("ngModel",a.gridPropertiesName),s("p-columns",4)("p-options",a.gridPropertiesOptions)}}var Ge=(()=>{class d{constructor(){this.htmlCode=Di,this.tsCode=Ai,this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.disabled=!1,this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.height=450,this.keysLabel="",this.literals="",this.multiple=!0,this.size="medium",this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.gridPropertiesOptions=[{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"]}changeEvent(a,r){r instanceof KeyboardEvent&&(r={key:r.key,code:r.code,altKey:r.altKey,ctrlKey:r.ctrlKey,shiftKey:r.shiftKey}),this.event=`<p>${a} - ${r?JSON.stringify(r):""}</p>`+this.event}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}updateGridProperties(){let a={};this.gridPropertiesName.forEach(r=>{a=Q(O({},a),{[r]:!0})}),this.gridPropertiesName.includes("sortable")||(a=Q(O({},a),{sortable:!1})),this.gridPropertiesName.includes("striped")||(a=Q(O({},a),{striped:!1})),this.gridPropertiesName.includes("selectableEntireLine")||(a=Q(O({},a),{selectableEntireLine:!1})),this.gridPropertiesName.includes("showMoreVisible")||(a=Q(O({},a),{showMoreVisible:!1})),this.gridPropertiesName.includes("groupable")||(a=Q(O({},a),{groupable:!1})),this.gridProperties=O({},a)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-labs-doc"]],standalone:!1,decls:13,vars:16,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-change-model","t-error","t-focus","t-keydown","t-selected","t-columns","t-disabled","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-height","t-keys-label","t-literals","t-multiple","t-size"],[1,"po-mt-1",2,"display","flex"],[2,"max-height","150px",3,"innerHTML"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","heigth","p-label","Height",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],[1,"po-row"],["name","disabled","p-label","Disabled",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Multiple","p-label","Multiple",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","literals","p-label","Literals","p-help",'{ "placeholder": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","p-rows","ngModel"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),o(3,"po-divider",2),i(4,"thf-lookup-data",3),g("t-change",function(y){return p(l),c(n.changeEvent("t-change",y))})("t-change-model",function(y){return p(l),c(n.changeEvent("t-change-model",y))})("t-error",function(y){return p(l),c(n.changeEvent("t-error",y))})("t-focus",function(){return p(l),c(n.changeEvent("t-focus",""))})("t-keydown",function(y){return p(l),c(n.changeEvent("t-keydown",y))})("t-selected",function(y){return p(l),c(n.changeEvent("t-selected",y))}),t(),i(5,"po-container",4)(6,"span",1),e(7,"Events"),t(),o(8,"po-divider",2)(9,"div",5),t(),o(10,"app-code-accordion-doc",6),L(11,x0,15,16,"ng-template",null,0,Z),t()}if(r&2){let l=K(12);m(4),s("t-columns",n.columns)("t-disabled",n.disabled)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-filter-search-select",n.customFilterSearchSelect)("t-grid-properties",n.gridProperties)("t-height",n.height)("t-keys-label",n.customKeysLabel)("t-literals",n.customLiterals)("t-multiple",n.multiple)("t-size",n.size),m(5),s("innerHTML",n.event,He),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[G,U,v,P,be,le,de,he,ve,ke,se,T],encapsulation:2})}}return d})();var Ne=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup-Data","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup-data")(2,"div",1)(3,"div",2),o(4,"app-thf-lookup-data-basic-doc")(5,"app-thf-lookup-data-form-doc")(6,"app-thf-lookup-data-custom-items-doc"),t()(),i(7,"div",3),o(8,"app-thf-lookup-data-labs-doc"),t()()())},dependencies:[te,At,ze,je,Oe,Ge],encapsulation:2})}}return d})();var b0=["splitter"],f0=["paneForm"],h0=()=>({label:"horizontal",value:"horizontal"}),v0=()=>({label:"vertical",value:"vertical"}),g0=(d,C)=>[d,C];function y0(d,C){if(d&1){let a=F();i(0,"thf-splitter-pane",10),g("t-size-change",function(){p(a);let n=u();return c(n.changeEvent("(t-size-change)"))}),i(1,"div",11)(2,"po-widget",12),g("p-primary-action",function(){let n=p(a).index,l=u();return c(l.removePane(n))}),i(3,"div",13),e(4),t()()()()}if(d&2){let a=C.$implicit,r=C.index;s("t-resizable",a.resizable)("t-scrollable",a.scrollable)("t-size",a.size),m(4),Xe(" Pane Content ",r," ")}}function C0(d,C){if(d&1){let a=F();i(0,"div",14)(1,"po-container",15),o(2,"po-dynamic-form",16,2),i(4,"div",17)(5,"po-button",18),g("p-click",function(){p(a);let n=K(3),l=u();return c(l.addPane(n.form.value))}),t()()(),i(6,"po-container",15)(7,"po-switch",19),h("ngModelChange",function(n){p(a);let l=u();return f(l.disabled,n)||(l.disabled=n),c(n)}),t(),i(8,"po-radio-group",20),h("ngModelChange",function(n){p(a);let l=u();return f(l.orientation,n)||(l.orientation=n),c(n)}),t()()(),i(9,"div",17)(10,"po-button",21),g("p-click",function(){p(a);let n=u();return c(n.restore())}),t()()}if(d&2){let a=K(3),r=u();m(2),s("p-fields",r.panesFieldsForm)("p-value",r.pane),m(3),s("p-disabled",a.form.invalid),m(2),b("ngModel",r.disabled),m(),b("ngModel",r.orientation),s("p-options",Pe(8,g0,J(6,h0),J(7,v0)))}}var _i=(()=>{class d{constructor(){this.event="",this.panes=[],this.pane={},this.disabled=!1,this.orientation="horizontal",this.panesFieldsForm=[{property:"size",gridColumns:6,type:"number",maxValue:100,minValue:0,maxLength:3,step:5,help:"Valor em porc (%)"},{property:"scrollable",type:"boolean",gridColumns:3}],this.htmlCode=`<thf-splitter
  #splitter
  name="splitter"
  [t-disabled]="disabled"
  [t-orientation]="orientation"
  (t-layout-change)="changeEvent('(t-layout-change)')"
>
  <thf-splitter-pane
    *ngFor="let pane of panes; let i = index"
    (t-size-change)="changeEvent('(t-size-change)')"
    [t-resizable]="pane.resizable"
    [t-scrollable]="pane.scrollable"
    [t-size]="pane.size"
  >
    <div class="po-m-2">
      <po-widget p-title="Title Pane" p-primary-label="Close" (p-primary-action)="removePane(i)">
        <div class="po-font-subtitle po-text-center">Pane Content {{ i }}</div>
      </po-widget>
    </div>
  </thf-splitter-pane>
</thf-splitter>

<po-container class="po-mt-1" style="display: flex">
  <po-info class="po-md-12" p-label="Event" [p-value]="event"> </po-info>
</po-container>

<div class="po-row po-mt-2 po-mb-2" style="display: block">
  <po-container class="po-mb-2" style="display: flex">
    <po-dynamic-form #paneForm [p-fields]="panesFieldsForm" [p-value]="pane"> </po-dynamic-form>
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Add Pane"
        [p-disabled]="paneForm.form.invalid"
        (p-click)="addPane(paneForm.form.value)"
      />
    </div>
  </po-container>

  <po-container class="po-mb-2" style="display: flex">
    <po-switch class="po-md-6" name="disabled" p-label="Disabled" [(ngModel)]="disabled" />

    <po-radio-group
      class="po-md-6"
      name="orientation"
      p-label="orientation"
      [(ngModel)]="orientation"
      [p-options]="[
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' }
      ]"
    />
  </po-container>
</div>

<div class="po-row">
  <po-button class="po-lg-3 po-md-6" p-label="Restore" (p-click)="restore()"> </po-button>
</div>
`,this.tsCode=`import { Component, OnInit, ViewChild } from '@angular/core';
import {
  PoDynamicFormComponent,
  PoDynamicFormField,
} from '@po-ui/ng-components';
import {
  ThfSplitterComponent,
  ThfSplitterPaneComponent,
} from '@totvs/thf-components';
 
@Component({
  selector: 'app-thf-splitter-labs-doc',
  templateUrl: './thf-splitter-labs-doc.component.html',
  styleUrl: './thf-splitter-labs-doc.component.css',
  standalone: false,
})
  export class ThfSplitterLabsDocComponent implements OnInit {
@ViewChild('splitter', { static: true }) splitter!: ThfSplitterComponent;
  @ViewChild('paneForm', { static: true }) paneForm!: PoDynamicFormComponent;

  event: string = '';
  panes: Array<ThfSplitterPaneComponent> = [];
  pane = {};
  disabled = false;
  orientation = 'horizontal';

  panesFieldsForm: Array<PoDynamicFormField> = [
    {
      property: 'size',
      gridColumns: 6,
      type: 'number',
      maxValue: 100,
      minValue: 0,
      maxLength: 3,
      step: 5,
      help: 'Valor em porc (%)'
    },
    { property: 'scrollable', type: 'boolean', gridColumns: 3 }
  ];

  ngOnInit() {
    this.restore();
  }

  changeEvent(eventDescription: any) {
    this.event = eventDescription;
  }

  restore() {
    this.event = '';
    this.panes = [];
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  addPane(_pane: any) {
    const newPane = Object.assign({}, _pane);
    newPane.size += '%';
    this.panes.push(newPane);
    this.pane = {
      size: '50',
      scrollable: false
    };
  }

  removePane(idx: number) {
    this.panes.splice(idx, 1);
  }
}`}ngOnInit(){this.restore()}changeEvent(a){this.event=a}restore(){this.event="",this.panes=[],this.pane={size:"50",scrollable:!1}}addPane(a){let r=Object.assign({},a);r.size+="%",this.panes.push(r),this.pane={size:"50",scrollable:!1}}removePane(a){this.panes.splice(a,1)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-labs-doc"]],viewQuery:function(r,n){if(r&1&&(D(b0,7),D(f0,7)),r&2){let l;A(l=_())&&(n.splitter=l.first),A(l=_())&&(n.paneForm=l.first)}},standalone:!1,decls:12,vars:8,consts:[["splitter",""],["customTemplate",""],["paneForm",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","splitter",3,"t-layout-change","t-disabled","t-orientation"],[3,"t-resizable","t-scrollable","t-size","t-size-change",4,"ngFor","ngForOf"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[3,"t-size-change","t-resizable","t-scrollable","t-size"],[1,"po-m-2"],["p-title","Title Pane","p-primary-label","Close",3,"p-primary-action"],[1,"po-font-subtitle","po-text-center"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Pane",1,"po-md-3",3,"p-click","p-disabled"],["name","disabled","p-label","Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","orientation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",3),e(2,"Labs"),t(),o(3,"po-divider",4),i(4,"thf-splitter",5,0),g("t-layout-change",function(){return p(l),c(n.changeEvent("(t-layout-change)"))}),L(6,y0,5,4,"thf-splitter-pane",6),t(),i(7,"po-container",7),o(8,"po-info",8),t(),o(9,"app-code-accordion-doc",9),L(10,C0,11,11,"ng-template",null,1,Z),t()}if(r&2){let l=K(11);m(4),s("t-disabled",n.disabled)("t-orientation",n.orientation),m(2),s("ngForOf",n.panes),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[at,G,U,W,v,P,yt,le,ke,me,ge,oe,ne,T],encapsulation:2})}}return d})();var T0=["gridComponent"];function w0(d,C){if(d&1){let a=F();i(0,"thf-splitter-pane",9)(1,"po-widget",11),g("p-primary-action",function(){p(a);let n=u();return c(n.closePane())}),i(2,"div",12),o(3,"po-info",13),t(),i(4,"div",12),o(5,"po-info",14),t(),i(6,"div",12),o(7,"po-info",15),t(),i(8,"div",12),o(9,"po-info",16),t()()()}if(d&2){let a=u();s("t-size","30%"),m(3),s("p-value",a.selectedHero.name),m(2),s("p-value",a.selectedHero.nickname),m(2),s("p-value",a.selectedHero.email),m(2),s("p-value",a.selectedHero.city)}}var qi=(()=>{class d{constructor(a,r){this.router=a,this.changeDetector=r,this.showHeroPane=!1,this.selectedHero=null,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",email:"hulksmash@marvel.com",status:1,city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",email:"spvalueerman@marvel.com",status:2,city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,email:"goku@dbz.com",city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,email:"hawkeye@marvel.com",city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,email:"nickfuckingfury@marvel.com",city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,email:"gohan@dbz.com",city:null}],this.column=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"city",label:"Cidade"}],this.htmlCode=`  <thf-splitter t-disabled>
    <thf-splitter-pane>
      <div class="po-lg-12 po-pt-2 po-pb-2">
        <div
          class="po-row"
          style="justify-content: space-between; align-items: center"
        >
          <p class="po-font-subtitle">Controle de Her\xF3is</p>
          <po-button
            p-icon="an an-star"
            p-label="Star"
            (p-click)="openExternalLink()"
          ></po-button>
        </div>
        <thf-grid
          #gridComponent
          [t-height]="300"
          [t-selectable]="true"
          [t-single-select]="true"
          [t-items]="items"
          [t-columns]="column"
          [t-sortable]="true"
          (t-selected)="selectItem($event)"
          (t-unselected)="closePane()"
        />
      </div>
    </thf-splitter-pane>

    @if (showHeroPane) {
    <thf-splitter-pane [t-size]="'30%'">
      <po-widget
        p-title="Her\xF3i Selecionado"
        p-primary-label="Fechar Painel"
        (p-primary-action)="closePane()"
      >
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Name"
            [p-value]="selectedHero.name"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Apelido"
            [p-value]="selectedHero.nickname"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Contato"
            [p-value]="selectedHero.email"
          />
        </div>
        <div class="po-row">
          <po-info
            class="po-md-12"
            p-label="Reside em"
            [p-value]="selectedHero.city"
          />
        </div>
      </po-widget>
    </thf-splitter-pane>
    }
  </thf-splitter>
`,this.tsCode=`import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ThfGridColumn, ThfGridComponent } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-splitter-grid-doc',
  templateUrl: './thf-splitter-grid-doc.component.html',
  styleUrl: './thf-splitter-grid-doc.component.css',
  standalone: false,
})
export class ThfSplitterGridDocComponent implements AfterViewInit {
  @ViewChild('gridComponent', { static: true })
  grid!: ThfGridComponent;

  showHeroPane = false;
  selectedHero: any = null;

  items = [
    {
      id: 1495831666871,
      name: 'Robert Bruce Banner',
      nickname: 'Hulk',
      email: 'hulksmash@marvel.com',
      status: 1,
      city: 'Lages',
    },
    {
      id: 1495831698598,
      name: 'Peter Parker',
      nickname: 'Homem Aranha',
      email: 'spvalueerman@marvel.com',
      status: 2,
      city: 'Brusque',
    },
    {
      id: 1495832652942,
      name: 'Kakaroto',
      nickname: 'Goku',
      status: 1,
      email: 'goku@dbz.com',
      city: 'Guarulhos',
    },
    {
      id: 1495832683682,
      name: 'Clint Barton',
      nickname: 'Gaviao Arqueiro',
      status: 1,
      email: 'hawkeye@marvel.com',
      city: 'Campinas',
    },
    {
      id: 1495833068596,
      name: 'Nicholas Joseph Fury',
      nickname: 'Nick Fury',
      status: 2,
      email: 'nickfuckingfury@marvel.com',
      city: null,
    },
    {
      id: 1495833068597,
      name: 'Gohan',
      nickname: 'Son Gohan',
      status: 2,
      email: 'gohan@dbz.com',
      city: null,
    },
  ];

  column: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id' },
    { property: 'name', label: 'Nome' },
    {
      property: 'status',
      label: 'Status',
      type: 'label',
      labels: [
        { value: 1, color: 'color-11', label: 'Ativo' },
        { value: 2, color: 'color-08', label: 'Inativo' },
      ],
    },
    { property: 'city', label: 'Cidade' },
  ];

  constructor(
    protected router: Router,
    protected changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.grid.selectRowItem(this.items[0]);
    this.selectItem(this.items[0]);

    this.changeDetector.detectChanges();
  }

  openExternalLink() {
    window.open('https://github.com/po-ui/po-angular');
  }

  selectItem(hero: any) {
    if (!hero) {
      this.closePane();
      return;
    }
    this.selectedHero = {
      id: hero.id || '',
      name: hero.name || '',
      nickname: hero.nickname || '',
      email: hero.email || '',
      city: hero.city || '',
    };
    this.showHeroPane = true;
  }

  closePane() {
    this.showHeroPane = false;
    this.selectedHero = null;
    this.grid.unselectRows();
  }
}`}ngAfterViewInit(){this.grid.selectRowItem(this.items[0]),this.selectItem(this.items[0]),this.changeDetector.detectChanges()}openExternalLink(){window.open("https://github.com/po-ui/po-angular")}selectItem(a){if(!a){this.closePane();return}this.selectedHero={id:a.id||"",name:a.name||"",nickname:a.nickname||"",email:a.email||"",city:a.city||""},this.showHeroPane=!0}closePane(){this.showHeroPane=!1,this.selectedHero=null,this.grid.unselectRows()}static{this.\u0275fac=function(r){return new(r||d)(R(xt),R(nt))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-grid-doc"]],viewQuery:function(r,n){if(r&1&&D(T0,7),r&2){let l;A(l=_())&&(n.grid=l.first)}},standalone:!1,decls:15,vars:9,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-disabled",""],[1,"po-lg-12","po-pt-2","po-pb-2"],[1,"po-row",2,"justify-content","space-between","align-items","center"],[1,"po-font-subtitle"],["p-icon","an an-star","p-label","Star",3,"p-click"],[3,"t-selected","t-unselected","t-height","t-selectable","t-single-select","t-items","t-columns","t-sortable"],[3,"t-size"],[3,"htmlCode","tsCode"],["p-title","Her\xF3i Selecionado","p-primary-label","Fechar Painel",3,"p-primary-action"],[1,"po-row"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Apelido",1,"po-md-12",3,"p-value"],["p-label","Contato",1,"po-md-12",3,"p-value"],["p-label","Reside em",1,"po-md-12",3,"p-value"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",1),e(2,"Divis\xE3o din\xE2mica"),t(),o(3,"po-divider",2),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"div",4)(7,"div",5)(8,"p",6),e(9,"Controle de Her\xF3is"),t(),i(10,"po-button",7),g("p-click",function(){return p(l),c(n.openExternalLink())}),t()(),i(11,"thf-grid",8,0),g("t-selected",function(y){return p(l),c(n.selectItem(y))})("t-unselected",function(){return p(l),c(n.closePane())}),t()()(),L(13,w0,10,5,"thf-splitter-pane",9),t(),o(14,"app-code-accordion-doc",10),t()}r&2&&(m(11),s("t-height",300)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.column)("t-sortable",!0),m(2),H(n.showHeroPane?13:-1),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[W,v,P,me,ge,M,oe,ne,T],encapsulation:2})}}return d})();var ki=(()=>{class d{constructor(){this.optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7},rendererOption:"svg"},this.optionsPie={rendererOption:"svg"},this.categoriesColumn=["coffee","chocolate","tea"],this.evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:ye.Column},{label:"2017",data:[93,52,18],type:ye.Column},{label:"2020",data:[95,21,-17],type:ye.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:ye.Line,color:"color-10"}],this.coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}],this.htmlCode=`<thf-splitter>
  <thf-splitter-pane>
    <po-widget p-title="Chart type column with line">
      <po-chart
        p-title="Evolution of coffee and some competitors - %"
        [p-options]="optionsColumn"
        [p-categories]="categoriesColumn"
        [p-series]="evolutionOfCoffeeAndSomeCompetitors"
      >
      </po-chart>
    </po-widget>
  </thf-splitter-pane>
  <thf-splitter-pane [t-size]="'50%'">
    <po-widget p-title="Chart type pizza">
      <po-chart p-title="Top 5 coffee producing countries (in tons)" [p-series]="coffeeProduction"> </po-chart>
    </po-widget>
  </thf-splitter-pane>
</thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-thf-splitter-chart-doc',
  templateUrl: './thf-splitter-chart-doc.component.html',
  styleUrl: './thf-splitter-chart-doc.component.css',
  standalone: false,
})
export class ThfSplitterChartDocComponent {
    optionsColumn: PoChartOptions = {
    axis: {
      minRange: -20,
      maxRange: 100,
      gridLines: 7,
    },
    rendererOption: 'svg',
  };
  optionsPie: PoChartOptions = {
    rendererOption: 'svg',
  };

  categoriesColumn: Array<string> = ['coffee', 'chocolate', 'tea'];
  evolutionOfCoffeeAndSomeCompetitors: Array<PoChartSerie> = [
    { label: '2014', data: [91, 40, 42], type: PoChartType.Column },
    { label: '2017', data: [93, 52, 18], type: PoChartType.Column },
    { label: '2020', data: [95, 21, -17], type: PoChartType.Column },
    {
      label: 'Coffee consumption in Brazil',
      data: [34, 27, 79],
      type: PoChartType.Line,
      color: 'color-10',
    },
  ];
  coffeeProduction: Array<PoChartSerie> = [
    {
      label: 'Brazil',
      data: 2796,
      tooltip: 'Brazil (South America)',
      color: 'color-10',
    },
    { label: 'Vietnam', data: 1076, tooltip: 'Vietnam (Asia)' },
    { label: 'Colombia', data: 688, tooltip: 'Colombia (South America)' },
    { label: 'Indonesia', data: 682, tooltip: 'Indonesia (Asia/Oceania)' },
    { label: 'Peru', data: 273, tooltip: 'Peru (South America)' },
  ];
}
`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-chart-doc"]],standalone:!1,decls:12,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["p-title","Chart type column with line"],["p-title","Evolution of coffee and some competitors - %",3,"p-options","p-categories","p-series"],[3,"t-size"],["p-title","Chart type pizza"],["p-title","Top 5 coffee producing countries (in tons)",3,"p-series","p-options"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Divis\xE3o com gr\xE1ficos din\xE2micos"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-widget",2),o(7,"po-chart",3),t()(),i(8,"thf-splitter-pane",4)(9,"po-widget",5),o(10,"po-chart",6),t()()(),o(11,"app-code-accordion-doc",7),t()),r&2&&(m(7),s("p-options",n.optionsColumn)("p-categories",n.categoriesColumn)("p-series",n.evolutionOfCoffeeAndSomeCompetitors),m(),s("t-size","50%"),m(2),s("p-series",n.coffeeProduction)("p-options",n.optionsPie),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ft,v,P,ge,oe,ne,T],encapsulation:2})}}return d})();var Fi=(()=>{class d{constructor(){this.htmlCode=`<thf-splitter>
          <thf-splitter-pane>
            <h4>Pane 1</h4>
          </thf-splitter-pane>

          <thf-splitter-pane>
            <thf-splitter [t-orientation]="'vertical'">
              <thf-splitter-pane>
                <h4>Pane 2</h4>
              </thf-splitter-pane>
              <thf-splitter-pane>
                <h4>Pane 3</h4>
              </thf-splitter-pane>
            </thf-splitter>
          </thf-splitter-pane>
        </thf-splitter>
`,this.tsCode=`import { Component } from '@angular/core';
  
@Component({
  selector: 'app-thf-splitter-basic-doc',
  standalone: false,
  templateUrl: './thf-thf-splitter-basic-doc.html',
})
export class ThfSplitterBasicDocComponent {
}
  `}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-basic-doc"]],standalone:!1,decls:17,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-orientation"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic"),t(),o(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"h4"),e(7,"Pane 1"),t()(),i(8,"thf-splitter-pane")(9,"thf-splitter",2)(10,"thf-splitter-pane")(11,"h4"),e(12,"Pane 2"),t()(),i(13,"thf-splitter-pane")(14,"h4"),e(15,"Pane 3"),t()()()()(),o(16,"app-code-accordion-doc",3),t()),r&2&&(m(9),s("t-orientation","vertical"),m(7),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,P,oe,ne,T],encapsulation:2})}}return d})();var q0=()=>[qi,ki,Fi];function k0(d,C){d&1&&(i(0,"div",3),o(1,"app-thf-splitter-basic-doc")(2,"app-thf-splitter-grid-doc")(3,"app-thf-splitter-chart-doc"),t())}function F0(d,C){d&1&&o(0,"po-loading-overlay",4),d&2&&s("p-screen-lock",!1)}var Ii=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Splitter","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],["labs","",1,"samples-container"],[1,"samples-container"],[3,"p-screen-lock"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-splitter")(2,"div",1),L(3,k0,4,0)(4,F0,1,1),We(5,3,q0,null,4),Ue(),t(),i(7,"div",2),o(8,"app-thf-splitter-labs-doc"),t()()())},dependencies:[St,te,qt,_i],encapsulation:2})}}return d})();var Li=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-pane"]],standalone:!1,decls:2,vars:0,consts:[["p-title","THF-Splitter-Pane","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"]],template:function(r,n){r&1&&(i(0,"po-page-default",0),o(1,"api-thf-splitter-pane"),t())},dependencies:[te,_t],encapsulation:2})}}return d})();var I0=[{path:"thf-grid",component:ui},{path:"thf-lookup",component:vi},{path:"thf-lookup-data",component:Ne},{path:"thf-splitter",component:Ii},{path:"thf-splitter-pane",component:Li}],Mi=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=Ee({type:d})}static{this.\u0275inj=ue({imports:[Re.forChild(I0),Re]})}}return d})();var C1=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=Ee({type:d})}static{this.\u0275inj=ue({imports:[Te,pt,ct,Ie,Pt,Tt,kt,Mi,Et]})}}return d})();export{C1 as DocumentationModule};
