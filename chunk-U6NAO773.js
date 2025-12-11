import{a as Ct}from"./chunk-S7NWXDLP.js";import{a as ut,b as Et}from"./chunk-QWEEXONV.js";import{a as pe,b as me,c as se,d as M,e as te,f as ie,h as Pt}from"./chunk-UBTATHNS.js";import"./chunk-3F2GOKVC.js";import"./chunk-XAR6NSCW.js";import{a as Tt}from"./chunk-UZANZAJW.js";import{$ as p,$a as Je,$c as De,Ac as Pe,Af as gt,Bd as C,Be as be,Ce as re,Da as x,Db as b,Ea as ue,Eb as h,Fb as f,Ff as Fe,Gc as dt,Ge as _e,Gf as fe,Ia as L,Jb as Ye,Ka as Ue,Kb as $,La as We,Lf as de,Mb as Ce,Na as s,Nb as et,Nc as mt,Nd as Ae,Nf as yt,Pc as I,Rc as Q,Rd as K,Sc as oe,Sd as z,Tc as B,U as Qe,Ua as Ee,Ub as tt,Uc as Te,V as ce,Vb as it,Vc as S,Wa as Ke,Wc as W,X as Be,Xa as $e,Xc as ae,Ya as i,Yf as Y,Za as t,Zc as st,Zd as St,_a as a,_b as J,_c as we,_d as H,a as O,aa as c,ab as Ze,b as N,cb as F,cc as nt,cd as pt,dd as ct,eg as ee,fg as G,ib as y,ig as ve,ja as Z,jb as u,jf as ke,kb as X,kc as ot,kf as he,lb as T,lc as at,lg as Ie,mb as ye,mc as Se,oe as bt,pa as He,qb as D,rb as A,re as ge,sa as m,sb as _,se as ht,sf as ft,tc as rt,te as v,uf as vt,vd as xt,wb as U,wf as le,xa as R,xb as e,xc as lt,xd as Re,yb as xe,zb as Xe,zf as qe}from"./chunk-4CT7PI5G.js";var yi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","templates-before",""]],[["","templates-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Ci=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[enums-before]","[enums-after]","[templates-before]","[templates-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],wt=(()=>{class d{constructor(o){this.el=o}ngAfterViewInit(){this.accordions.forEach(o=>{setTimeout(()=>{o.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(o){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${o}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let g=E.querySelector(".po-tab-button-label");g&&g?.textContent?.trim().toLowerCase()===o&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(Z))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-grid"]],viewQuery:function(r,n){if(r&1&&(D(G,5),D(z,5)),r&2){let l;A(l=_())&&(n.tabs=l.first),A(l=_())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Ci,decls:7178,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","Function"],[1,"language-html"],["pan","",1,"docs-api-property-type","Array<ThfTableAction>"],["href","/guides/icons"],[1,"language-typescript"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","Array<ThfAggregateDescriptor>"],["p-type","success","p-value","since 19.19.0"],["pan","",1,"docs-api-property-type","Array<ThfGridColumn>"],[1,"docs-api-deprecated-marker"],["p-type","success","p-value","since 19.8.0"],["pan","",1,"docs-api-property-type","string"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<PoDropdownAction>"],["pan","",1,"docs-api-property-type","{","[key:","string]:","TemplateRef<any>;","}"],["pan","",1,"docs-api-property-type","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","Array<PoPageDynamicSearchFilters>"],["pan","",1,"docs-api-property-type","'basic'"],["pan","",1,"docs-api-property-type","'service'"],["pan","",1,"docs-api-property-type","ThfGridRowActions"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","TemplateRef<void>"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","null"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","ThfGridLiterals"],["pan","",1,"docs-api-property-type","(()","=>","ThfGridOptions)"],["pan","",1,"docs-api-property-type","Array<ThfGridOptionPaging>"],[1,"language-json"],["pan","",1,"docs-api-property-type","ThfGridDeleteService"],["href","https://po-ui.io/guides/api"],["pan","",1,"docs-api-property-type","Array<ThfGridColumnSort>"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["href","https://tdn.totvs.com/pages/releaseview.action?pageId=871520382"],["pan","",1,"docs-api-property-type","{","key:","value","}"],["pan","",1,"docs-api-property-type","('active'"],["pan","",1,"docs-api-property-type","'removed')"],["p-label","Interfaces"],["p-label","ThfTableAction"],["href","https://po-ui.io/icons"],["p-label","ThfAggregateDescriptor"],["pan","",1,"docs-api-property-type","'sum'"],["pan","",1,"docs-api-property-type","'average'"],["pan","",1,"docs-api-property-type","'count'"],["pan","",1,"docs-api-property-type","'min'"],["pan","",1,"docs-api-property-type","'max'"],["p-label","ThfGridColumnSort"],["pan","",1,"docs-api-property-type","'asc'"],["pan","",1,"docs-api-property-type","'desc'"],["p-label","ThfGridColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],[1,"dot","po-color-01"],[1,"dot","po-color-02"],[1,"dot","po-color-03"],[1,"dot","po-color-04"],[1,"dot","po-color-05"],[1,"dot","po-color-06"],[1,"dot","po-color-07"],[1,"dot","po-color-08"],[1,"dot","po-color-09"],[1,"dot","po-color-10"],[1,"dot","po-color-11"],[1,"dot","po-color-12"],["pan","",1,"docs-api-property-type","PoTableDetail"],["pan","",1,"docs-api-property-type","CustomEditProperties"],["href","https://angular.dev/api/common/DecimalPipe"],["pan","",1,"docs-api-property-type","Array<PoTableColumnIcon>"],["href","documentation/po-table#tableColumnIcon"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["pan","",1,"docs-api-property-type","Array<PoTableSubtitleColumn>"],["href","/documentation/po-table-cell-template"],["href","/documentation/po-table-column-template"],["p-label","CustomEditProperties"],["href","https://po-ui.io/documentation/po-dynamic-form"],["pan","",1,"docs-api-property-type","'input'"],["pan","",1,"docs-api-property-type","'number'"],["pan","",1,"docs-api-property-type","'select'"],["pan","",1,"docs-api-property-type","'datepicker'"],["pan","",1,"docs-api-property-type","'switch'"],["pan","",1,"docs-api-property-type","'combo'"],["pan","",1,"docs-api-property-type","'multiselect'"],["pan","",1,"docs-api-property-type","'decimal'"],["pan","",1,"docs-api-property-type","'checkbox'"],["pan","",1,"docs-api-property-type","'lookup'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["pan","",1,"docs-api-property-type","((rowData:","any,","column?:","ThfGridColumn)","=>","boolean)"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","(value:","any)","=>","void"],["pan","",1,"docs-api-property-type","(model:","any)","=>","void"],["pan","",1,"docs-api-property-type","(error:","HttpErrorResponse)","=>","void"],["pan","",1,"docs-api-property-type","(selection:","any"],["pan","",1,"docs-api-property-type","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","'sm'"],["pan","",1,"docs-api-property-type","'md'"],["pan","",1,"docs-api-property-type","'lg'"],["pan","",1,"docs-api-property-type","'xl'"],["pan","",1,"docs-api-property-type","'auto'"],["p-label","ThfGridDeleteService"],["p-label","ThfGridEditProperties"],["pan","",1,"docs-api-property-type","(param:","any)","=>","FormGroup"],["pan","",1,"docs-api-property-type","(data:","any,","columnProperty:","string)","=>","FormGroup"],["p-label","ThfGridLiterals"],["p-label","ThfGridOptionPaging"],["p-label","ThfGridOptions"],["p-label","ThfGridRowActions"],["pan","",1,"docs-api-property-type","(param:","any,","mode:","'edit'"],["pan","",1,"docs-api-property-type","'include')","=>","FormGroup"],["pan","",1,"docs-api-property-type","Observable<FormGroup>"],["pan","",1,"docs-api-property-type","(row:","any)","=>","void"],["pan","",1,"docs-api-property-type","(row:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","Observable<boolean>"],["pan","",1,"docs-api-property-type","(updatedRow:","any,","originalRow:","any)","=>","boolean"],["pan","",1,"docs-api-property-type","(updatedRows:","Array<any>)","=>","void"],["pan","",1,"docs-api-property-type","Array<ThfGridEditModeActionType>"],["pan","",1,"docs-api-property-type","(updatedField:","any,","columnProperty:","string)","=>","boolean"],["p-label","Enums"],["p-label","ThfColumnSpacing"],["p-label","ThfGridEditModeActionType"],["p-label","Templates"],["p-label","ThfGridCellTemplateDirective"],["p-label","ThfGridColumnTemplateDirective"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(X(yi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfGridComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`O grid foi criado para que voc\xEA tenha um controle de alto desempenho, oferecendo uma performance extremamente r\xE1pida,
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
  t-aggregates="Array<ThfAggregateDescriptor>"
  t-allow-batch-delete="boolean"
  t-auto-size="boolean"
  t-auto-size-on-scroll="boolean"
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
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48,"t-action-delete"),a(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"boolean"),t()(),i(53,"td",25)(54,"p")(55,"code"),e(56,"false"),t()()(),i(57,"td",26)(58,"em")(59,"strong"),e(60,"(opcional)"),t()(),i(61,"p"),e(62,"Exibe o bot\xE3o de Excluir. Requer que a propriedade "),i(63,"strong"),e(64,"t-selectable"),t(),e(65," esteja habilitada."),t()()(),i(66,"tr",19)(67,"td",20)(68,"div",21)(69,"span",22),e(70,"t-action-edit"),a(71,"br"),t()()(),i(72,"td",23)(73,"code",27),e(74,"Function"),t()(),i(75,"td",25),e(76,"-"),t(),i(77,"td",26)(78,"em")(79,"strong"),e(80,"(opcional)"),t()(),i(81,"p"),e(82,`Exibe o bot\xE3o de Editar e executa a fun\xE7\xE3o definida ao clicar.
Requer que a propriedade `),i(83,"strong"),e(84,"t-selectable"),t(),e(85," esteja habilitada."),t(),i(86,"pre")(87,"code",28),e(88,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-action-edit]="myFunction.bind(this)"
 [t-selectable]-true
></thf-grid>`),t()()()(),i(89,"tr",19)(90,"td",20)(91,"div",21)(92,"span",22),e(93,"t-action-excel"),a(94,"br"),t()()(),i(95,"td",23)(96,"code",24),e(97,"boolean"),t()(),i(98,"td",25)(99,"p")(100,"code"),e(101,"false"),t()()(),i(102,"td",26)(103,"em")(104,"strong"),e(105,"(opcional)"),t()(),i(106,"p"),e(107,"Exibe o bot\xE3o de Exportar. Requer que a propriedade "),i(108,"strong"),e(109,"t-selectable"),t(),e(110,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(111,"code"),e(112,".xlsx"),t(),e(113,"."),t()()(),i(114,"tr",19)(115,"td",20)(116,"div",21)(117,"span",22),e(118,"t-action-pdf"),a(119,"br"),t()()(),i(120,"td",23)(121,"code",24),e(122,"boolean"),t()(),i(123,"td",25)(124,"p")(125,"code"),e(126,"false"),t()()(),i(127,"td",26)(128,"em")(129,"strong"),e(130,"(opcional)"),t()(),i(131,"p"),e(132,"Exibe o bot\xE3o de Download. Requer que a propriedade "),i(133,"strong"),e(134,"t-selectable"),t(),e(135,` esteja habilitada.
Permite realizar o download dos dados do grid no formato `),i(136,"code"),e(137,"PDF"),t(),e(138,"."),t(),i(139,"blockquote")(140,"p"),e(141,"Todos os dados exportados para PDF utilizar\xE3o a fonte 'Lato', garantindo compatibilidade com a tabela de caracteres ASCII estendida."),t()()()(),i(142,"tr",19)(143,"td",20)(144,"div",21)(145,"span",22),e(146," t-actions-right"),a(147,"br"),t()()(),i(148,"td",23)(149,"code",24),e(150,"boolean"),t()(),i(151,"td",25)(152,"p")(153,"code"),e(154,"false"),t()()(),i(155,"td",26)(156,"em")(157,"strong"),e(158,"(opcional)"),t()(),i(159,"p"),e(160,"Posiciona a coluna de a\xE7\xF5es ("),i(161,"strong"),e(162,"t-actions"),t(),e(163,") \xE0 direita."),t()()(),i(164,"tr",19)(165,"td",20)(166,"div",21)(167,"span",22),e(168,"t-actions"),a(169,"br"),t()()(),i(170,"td",23)(171,"code",29),e(172,"Array<ThfTableAction>"),t()(),i(173,"td",25),e(174,"-"),t(),i(175,"td",26)(176,"em")(177,"strong"),e(178,"(opcional)"),t()(),i(179,"p"),e(180,"Permite definir uma lista de a\xE7\xF5es que implementam a interface "),i(181,"strong"),e(182,"ThfTableAction"),t(),e(183,`, adicionando uma coluna
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

constructor(private poNotification: PoNotificationService) {}`),t()()()(),i(202,"tr",19)(203,"td",20)(204,"div",21)(205,"span",22),e(206,"t-actions-filter"),a(207,"br"),t()()(),i(208,"td",23)(209,"code",24),e(210,"boolean"),t()(),i(211,"td",25)(212,"p")(213,"code"),e(214,"true"),t()()(),i(215,"td",26)(216,"em")(217,"strong"),e(218,"(opcional)"),t()(),i(219,"p"),e(220,`Exibe o bot\xE3o de Filtros.
Habilita um modal com op\xE7\xF5es adicionais de filtro, caso o output `),i(221,"strong"),e(222,"t-custom-filter"),t(),e(223," n\xE3o esteja em uso."),t()()(),i(224,"tr",19)(225,"td",20)(226,"div",32)(227,"span",33),e(228," (t-delete-items)"),a(229,"br"),t()()(),i(230,"td",23)(231,"code",34),e(232,"EventEmitter"),t()(),i(233,"td",25),e(234,"-"),t(),i(235,"td",26)(236,"em")(237,"strong"),e(238,"(opcional)"),t()(),i(239,"p"),e(240,`Evento disparado ap\xF3s o m\xE9todo de exclus\xE3o ser finalizado.
Retorna os itens que permanecem dispon\xEDveis.`),t()()(),i(241,"tr",19)(242,"td",20)(243,"div",21)(244,"span",22),e(245," t-aggregates"),a(246,"br"),t()()(),i(247,"td",23)(248,"code",35),e(249,"Array<ThfAggregateDescriptor>"),t()(),i(250,"td",25)(251,"p")(252,"code"),e(253,"[]"),t()()(),i(254,"td",26)(255,"em")(256,"strong"),e(257,"(opcional)"),t()(),i(258,"p"),e(259,`Possibilita apresentar totalizadores de uma ou mais colunas ao utilizar o recurso de agrupamento de colunas.
Esta propriedade recebe um array com a lista de objetos com formato da interface `),i(260,"code"),e(261,"ThfAggregateDescriptor"),t(),e(262,"."),t()()(),i(263,"tr",19)(264,"td",20)(265,"div",21)(266,"span",22),e(267," t-allow-batch-delete"),a(268,"br"),t(),a(269,"po-tag",36),t()(),i(270,"td",23)(271,"code",24),e(272,"boolean"),t()(),i(273,"td",25)(274,"p")(275,"code"),e(276,"false"),t()()(),i(277,"td",26)(278,"em")(279,"strong"),e(280,"(opcional)"),t()(),i(281,"p"),e(282,`Habilita a exclus\xE3o em lote dos itens selecionados na grid. Quando ativado, permite que m\xFAltiplos itens sejam exclu\xEDdos de uma vez
ao utilizar `),i(283,"strong"),e(284,"t-service-api"),t(),e(285," e/ou "),i(286,"strong"),e(287,"t-service-delete-api"),t(),e(288,", desde que o servi\xE7o implemente o m\xE9todo "),i(289,"code"),e(290,"deleteBatchItems"),t(),e(291," da interface "),i(292,"code"),e(293,"ThfGridDeleteService"),t(),e(294,"."),t()()(),i(295,"tr",19)(296,"td",20)(297,"div",21)(298,"span",22),e(299,"t-auto-size"),a(300,"br"),t()()(),i(301,"td",23)(302,"code",24),e(303,"boolean"),t()(),i(304,"td",25)(305,"p")(306,"code"),e(307,"false"),t()()(),i(308,"td",26)(309,"em")(310,"strong"),e(311,"(opcional)"),t()(),i(312,"p"),e(313,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(314,"strong"),e(315,"t-resizable"),t(),e(316," esteja habilitada."),t(),i(317,"blockquote")(318,"p"),e(319,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.
Esta propriedade \xE9 incompat\xEDvel quando t-grid-row-actions est\xE1 habilitado.`),t()()()(),i(320,"tr",19)(321,"td",20)(322,"div",21)(323,"span",22),e(324,"t-auto-size-on-scroll"),a(325,"br"),t()()(),i(326,"td",23)(327,"code",24),e(328,"boolean"),t()(),i(329,"td",25)(330,"p")(331,"code"),e(332,"false"),t()()(),i(333,"td",26)(334,"em")(335,"strong"),e(336,"(opcional)"),t()(),i(337,"p"),e(338,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(339,"p"),e(340,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(341,"p"),e(342,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(343,"code"),e(344,"t-page-size-virtual"),t(),e(345," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(346,"blockquote")(347,"p")(348,"strong"),e(349,"Pr\xE9-requisitos"),t(),e(350,": Requer que as propriedades "),i(351,"code"),e(352,"t-auto-size"),t(),e(353,", "),i(354,"code"),e(355,"t-resizable"),t(),e(356,`
e `),i(357,"code"),e(358,"t-virtual-scroll"),t(),e(359," (ou altura fixa via "),i(360,"code"),e(361,"[t-height]"),t(),e(362,") estejam habilitadas."),t()(),i(363,"blockquote")(364,"p")(365,"strong"),e(366,"Incompatibilidade"),t(),e(367,": N\xE3o funciona com "),i(368,"code"),e(369,"t-grid-row-actions"),t(),e(370," habilitado;"),t()(),i(371,"p")(372,"strong"),e(373,"Exemplo de uso:"),t()(),i(374,"pre")(375,"code",28),e(376,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(377,"tr",19)(378,"td",20)(379,"div",32)(380,"span",33),e(381," (t-change-fixed-columns)"),a(382,"br"),t()()(),i(383,"td",23)(384,"code",34),e(385,"EventEmitter"),t()(),i(386,"td",25),e(387,"-"),t(),i(388,"td",26)(389,"em")(390,"strong"),e(391,"(opcional)"),t()(),i(392,"p"),e(393,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas fixas.
Retorna um array de strings com as colunas fixas atualizadas.`),t()()(),i(394,"tr",19)(395,"td",20)(396,"div",32)(397,"span",33),e(398," (t-change-options-column-manager)"),a(399,"br"),t()()(),i(400,"td",23)(401,"code",34),e(402,"EventEmitter"),t()(),i(403,"td",25),e(404,"-"),t(),i(405,"td",26)(406,"em")(407,"strong"),e(408,"(opcional)"),t()(),i(409,"p"),e(410,`Evento disparado ao selecionar a op\xE7\xE3o draggable ou groupable no Gerenciar Tabela.
Retorna um array de strings contendo as a\xE7\xF5es habilitadas.`),t()()(),i(411,"tr",19)(412,"td",20)(413,"div",32)(414,"span",33),e(415," (t-change-row-state-filter)"),a(416,"br"),t()()(),i(417,"td",23)(418,"code",34),e(419,"EventEmitter"),t()(),i(420,"td",25),e(421,"-"),t(),i(422,"td",26)(423,"em")(424,"strong"),e(425,"(opcional)"),t()(),i(426,"p"),e(427,"Evento disparado quando h\xE1 altera\xE7\xE3o no estado de um filtro de linha."),t()()(),i(428,"tr",19)(429,"td",20)(430,"div",32)(431,"span",33),e(432," (t-change-visible-columns)"),a(433,"br"),t()()(),i(434,"td",23)(435,"code",34),e(436,"EventEmitter"),t()(),i(437,"td",25),e(438,"-"),t(),i(439,"td",26)(440,"em")(441,"strong"),e(442,"(opcional)"),t()(),i(443,"p"),e(444,`Evento disparado ao fechar o Gerenciar Tabela ap\xF3s alterar as colunas vis\xEDveis.
Retorna um array de strings com as colunas vis\xEDveis atualizadas.`),t()()(),i(445,"tr",19)(446,"td",20)(447,"div",32)(448,"span",33),e(449," (t-changed-density)"),a(450,"br"),t()()(),i(451,"td",23)(452,"code",34),e(453,"EventEmitter"),t()(),i(454,"td",25),e(455,"-"),t(),i(456,"td",26)(457,"em")(458,"strong"),e(459,"(opcional)"),t()(),i(460,"p"),e(461,"Evento disparado ao selecionar o tipo de densidade no Gerenciar Tabela. Retorna a densidade aplicada."),t()()(),i(462,"tr",19)(463,"td",20)(464,"div",32)(465,"span",33),e(466," (t-changed-items)"),a(467,"br"),t()()(),i(468,"td",23)(469,"code",34),e(470,"EventEmitter"),t()(),i(471,"td",25),e(472,"-"),t(),i(473,"td",26)(474,"em")(475,"strong"),e(476,"(opcional)"),t()(),i(477,"p"),e(478,"Evento emitido quando ocorre uma altera\xE7\xE3o em alguma linha da grid."),t()()(),i(479,"tr",19)(480,"td",20)(481,"div",32)(482,"span",33),e(483," (t-restore-column-manager)"),a(484,"br"),t()()(),i(485,"td",23)(486,"code",34),e(487,"EventEmitter"),t()(),i(488,"td",25),e(489,"-"),t(),i(490,"td",26)(491,"em")(492,"strong"),e(493,"(opcional)"),t()(),i(494,"p"),e(495,`Evento disparado quando pressionado o bot\xE3o 'Restaurar padr\xE3o' no Gerenciar Tabela.
Retorna um array de strings com as colunas vis\xEDveis por padr\xE3o.`),t()()(),i(496,"tr",19)(497,"td",20)(498,"div",21)(499,"span",22),e(500,"t-columns"),a(501,"br"),t()()(),i(502,"td",23)(503,"code",37),e(504,"Array<ThfGridColumn>"),t()(),i(505,"td",25),e(506,"-"),t(),i(507,"td",26)(508,"em")(509,"strong"),e(510,"(opcional)"),t()(),i(511,"p"),e(512,"Permite definir e configurar as colunas do grid que implementam a interface "),i(513,"strong"),e(514,"ThfGridColumn"),t(),e(515,"."),t(),i(516,"pre")(517,"code",28),e(518,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-columns]="columns"
></thf-grid>`),t()(),i(519,"pre")(520,"code",31),e(521,`columns: Array<ThfGridColumn> = [
 { property: 'id', visible: false },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(522,"tr",19)(523,"td",20)(524,"div",32)(525,"span",33),e(526," (t-columns-selected)"),a(527,"br"),t()(),i(528,"div",38),e(529,"Deprecated"),t()(),i(530,"td",23)(531,"code",34),e(532,"EventEmitter"),t()(),i(533,"td",25),e(534,"-"),t(),i(535,"td",26)(536,"p"),e(537,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t(),i(538,"blockquote")(539,"p")(540,"strong"),e(541,"Nota"),t(),e(542,`: Este evento est\xE1 depreciado e ser\xE1 removido na vers\xE3o 21. Recomendamos
utilizar o evento `),i(543,"code"),e(544,"t-rows-selected"),t(),e(545,", que j\xE1 est\xE1 dispon\xEDvel e oferece a mesma funcionalidade."),t()()()(),i(546,"tr",19)(547,"td",20)(548,"div",21)(549,"span",22),e(550,"t-components-size"),a(551,"br"),t(),a(552,"po-tag",39),t()(),i(553,"td",23)(554,"code",40),e(555,"string"),t()(),i(556,"td",25)(557,"p")(558,"code"),e(559,"medium"),t()()(),i(560,"td",26)(561,"em")(562,"strong"),e(563,"(opcional)"),t()(),i(564,"p"),e(565,"Define o tamanho dos componentes de formul\xE1rio no grid:"),t(),i(566,"ul")(567,"li")(568,"code"),e(569,"small"),t(),e(570,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(571,"li")(572,"code"),e(573,"medium"),t(),e(574,": aplica a medida medium de cada componente."),t()(),i(575,"blockquote")(576,"p"),e(577,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(578,"code"),e(579,"medium"),t(),e(580,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(581,"a",41),e(582,"po-theme"),t(),e(583,"."),t()()()(),i(584,"tr",19)(585,"td",20)(586,"div",21)(587,"span",22),e(588,"t-container"),a(589,"br"),t()()(),i(590,"td",23)(591,"code",24),e(592,"boolean"),t()(),i(593,"td",25)(594,"p")(595,"code"),e(596,"true"),t()()(),i(597,"td",26)(598,"em")(599,"strong"),e(600,"(opcional)"),t()(),i(601,"p"),e(602,"Adiciona um contorno arredondado ao "),i(603,"code"),e(604,"thf-grid"),t(),e(605,"."),t()()(),i(606,"tr",19)(607,"td",20)(608,"div",21)(609,"span",22),e(610,"t-custom-actions"),a(611,"br"),t()()(),i(612,"td",23)(613,"code",42),e(614,"Array<PoDropdownAction>"),t()(),i(615,"td",25),e(616,"-"),t(),i(617,"td",26)(618,"em")(619,"strong"),e(620,"(opcional)"),t()(),i(621,"p"),e(622,"Permite adicionar a\xE7\xF5es customizadas que implementam a interface "),i(623,"strong"),e(624,"PoDropdownAction"),t(),e(625,`.
Essas a\xE7\xF5es ser\xE3o exibidas no dropdown 'Mais a\xE7\xF5es' ao selecionar um item.
Requer que a propriedade `),i(626,"strong"),e(627,"t-selectable"),t(),e(628," esteja habilitada."),t(),i(629,"pre")(630,"code",28),e(631,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-custom-actions]="customActions"
 [t-selectable]="true"></thf-grid>`),t()(),i(632,"pre")(633,"code",31),e(634,`customActions: Array<PoDropdownAction> = [
 { label: 'Hist\xF3rico', action: this.myAction.bind(this) }];

myAction() {
 window.alert('voce clicou em hist\xF3rico!');
}`),t()()()(),i(635,"tr",19)(636,"td",20)(637,"div",32)(638,"span",33),e(639," (t-custom-filter)"),a(640,"br"),t()()(),i(641,"td",23)(642,"code",34),e(643,"EventEmitter"),t()(),i(644,"td",25),e(645,"-"),t(),i(646,"td",26)(647,"em")(648,"strong"),e(649,"(opcional)"),t()(),i(650,"p"),e(651,"Evento disparado ao clicar no menu Filtros."),t()()(),i(652,"tr",19)(653,"td",20)(654,"div",21)(655,"span",22),e(656,"t-custom-templates"),a(657,"br"),t()()(),i(658,"td",23)(659,"code",43),e(660,`{ [key: string]: TemplateRef<any>;
}`),t()(),i(661,"td",25),e(662,"-"),t(),i(663,"td",26)(664,"em")(665,"strong"),e(666,"(opcional)"),t()(),i(667,"p"),e(668,"Permite a cria\xE7\xE3o de templates customizados para a edi\xE7\xE3o flu\xEDda da grid, como por exemplo:"),t(),i(669,"pre")(670,"code",28),e(671,`// Exemplo de uso:
<thf-grid
 ...
[t-custom-templates]="{ name: customTemplate }"
></thf-grid>
<ng-template #customTemplate let-formControl="formControl">
  <po-input [formControl]="formControl" p-placeholder="CPF" [p-required]="true"></po-input>
</ng-template>`),t()(),i(672,"p"),e(673,"\xC9 obrigat\xF3rio passar o formControl como par\xE2metro do template."),t(),i(674,"p"),e(675,`Os eventos de validate, keydown, blur, additional-help, onChangeModel e change n\xE3o s\xE3o emitidos com o uso de templates customizados,
sendo necess\xE1rio o controle desses eventos dentro do pr\xF3prio componente.`),t(),i(676,"p"),e(677,`Caso utilize a propriedade controlValueWithLabel,
\xE9 necess\xE1rio continuar passando no editProperties em columns, em conjunto com fieldLabel, fieldValue e options caso esteja utilizando.`),t(),i(678,"p"),e(679,"Caso o template n\xE3o seja passado, o componente ser\xE1 renderizado de forma padr\xE3o."),t(),i(680,"p"),e(681,"Caso esteja utilizando o componente po-decimal e esteja configurando a propriedade "),i(682,"code"),e(683,"p-decimals-length"),t(),e(684,`, \xE9 necess\xE1rio continuar
enviando via columns em editProperties.`),t(),i(685,"p"),e(686,'Para que o grid exiba a label "(Obrigat\xF3rio)" na coluna, defina em '),i(687,"code"),e(688,"editProperties"),t(),e(689," a propriedade "),i(690,"code"),e(691,"required"),t(),e(692," como "),i(693,"code"),e(694,"true"),t(),e(695,"."),t(),i(696,"blockquote")(697,"p"),e(698,"Para mais detalhes, consulte o exemplo na aba Overview - Edi\xE7\xE3o flu\xEDda."),t()()()(),i(699,"tr",19)(700,"td",20)(701,"div",32)(702,"span",33),e(703," (t-delete-item)"),a(704,"br"),t()()(),i(705,"td",23)(706,"code",34),e(707,"EventEmitter"),t()(),i(708,"td",25),e(709,"-"),t(),i(710,"td",26)(711,"em")(712,"strong"),e(713,"(opcional)"),t()(),i(714,"p"),e(715,"Evento disparado ao excluir um item. Retorna o item exclu\xEDdo."),t()()(),i(716,"tr",19)(717,"td",20)(718,"div",21)(719,"span",22),e(720,"t-disabled-include-button"),a(721,"br"),t()()(),i(722,"td",23)(723,"code",24),e(724,"boolean"),t()(),i(725,"td",25)(726,"p")(727,"code"),e(728,"false"),t()()(),i(729,"td",26)(730,"em")(731,"strong"),e(732,"(opcional)"),t()(),i(733,"p"),e(734,`Desabilita o bot\xE3o de Incluir. Ao definir como true, o bot\xE3o ser\xE1 desabilitado.
Ideal para cen\xE1rios onde a inclus\xE3o de novas linhas deve ser restrita.`),t()()(),i(735,"tr",19)(736,"td",20)(737,"div",21)(738,"span",22),e(739,"t-draggable"),a(740,"br"),t()()(),i(741,"td",23)(742,"code",24),e(743,"boolean"),t()(),i(744,"td",25)(745,"p")(746,"code"),e(747,"false"),t()()(),i(748,"td",26)(749,"em")(750,"strong"),e(751,"(opcional)"),t()(),i(752,"p"),e(753,"Habilita o Drag and Drop nas colunas."),t()()(),i(754,"tr",19)(755,"td",20)(756,"div",21)(757,"span",22),e(758,"t-edit-properties"),a(759,"br"),t()()(),i(760,"td",23)(761,"code",44),e(762,"ThfGridEditProperties"),t()(),i(763,"td",25),e(764,"-"),t(),i(765,"td",26)(766,"em")(767,"strong"),e(768,"(opcional)"),t()(),i(769,"p"),e(770,"Permite configurar a edi\xE7\xE3o em linha, implementando a interface "),i(771,"strong"),e(772,"ThfGridEditProperties"),t(),e(773,`.
Exemplo de uso na aba Interfaces >> ThfGridEditProperties.`),t(),i(774,"blockquote")(775,"p"),e(776,"Para garantir o correto funcionamento da conclus\xE3o da edi\xE7\xE3o dos dados, \xE9 necess\xE1rio que os dados contenham uma coluna de ID ou que pelo menos uma coluna tenha a propriedade KEY definida como true."),t()()()(),i(777,"tr",19)(778,"td",20)(779,"div",32)(780,"span",33),e(781," (t-change-page-size)"),a(782,"br"),t()()(),i(783,"td",23)(784,"code",34),e(785,"EventEmitter"),t()(),i(786,"td",25),e(787,"-"),t(),i(788,"td",26)(789,"em")(790,"strong"),e(791,"(opcional)"),t()(),i(792,"p"),e(793,"Evento disparado ao alterar a quantidade de itens por p\xE1gina. Retorna um objeto com o page-size atual."),t()()(),i(794,"tr",19)(795,"td",20)(796,"div",21)(797,"span",22),e(798,"t-fields"),a(799,"br"),t()()(),i(800,"td",23)(801,"code",45),e(802,"Array<PoPageDynamicSearchFilters>"),t()(),i(803,"td",25),e(804,"-"),t(),i(805,"td",26)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),i(809,"p"),e(810,"Permite definir os campos filtr\xE1veis na janela 'Filtros', implementando a interface "),i(811,"strong"),e(812,"PoPageDynamicSearchFilters"),t(),e(813,"."),t(),i(814,"pre")(815,"code",28),e(816,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-fields]="customFields"
></thf-grid>`),t()(),i(817,"pre")(818,"code",31),e(819,"customFields: Array<PoPageDynamicSearchFilters> = [{ property: 'name', required: true, showRequired: true }]"),t()()()(),i(820,"tr",19)(821,"td",20)(822,"div",21)(823,"span",22),e(824,"t-filter-input-mode"),a(825,"br"),t()()(),i(826,"td",23)(827,"code",46),e(828,"'basic' "),t(),i(829,"code",47),e(830," 'service'"),t()(),i(831,"td",25)(832,"p")(833,"code"),e(834,"basic"),t()()(),i(835,"td",26)(836,"em")(837,"strong"),e(838,"(opcional)"),t()(),i(839,"p"),e(840,"Define o modo do filtro para o input de pesquisa."),t()()(),i(841,"tr",19)(842,"td",20)(843,"div",21)(844,"span",22),e(845,"t-grid-row-actions"),a(846,"br"),t()()(),i(847,"td",23)(848,"code",48),e(849,"ThfGridRowActions"),t()(),i(850,"td",25),e(851,"-"),t(),i(852,"td",26)(853,"em")(854,"strong"),e(855,"(opcional)"),t()(),i(856,"p"),e(857,"Configura a edi\xE7\xE3o flu\xEDda, implementando a interface "),i(858,"strong"),e(859,"ThfGridRowActions"),t(),e(860,`.
Permite manipular o comportamento das a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o de itens.
\xC9 poss\xEDvel definir fun\xE7\xF5es espec\xEDficas para controlar as a\xE7\xF5es antes e depois das opera\xE7\xF5es.
Fundamental para implementar um fluxo de manipula\xE7\xE3o de dados totalmente personalizado.`),t(),i(861,"blockquote")(862,"p"),e(863,`Ao habilitar t-grid-row-actions a propriedade t-auto-size \xE9 desabilitada para manter a padroniza\xE7\xE3o das larguras das colunas edit\xE1veis.
Quando o t-grid-row-actions \xE9 habilitado, a propriedade t-resizable \xE9 ativada automaticamente.`),t()()()(),i(864,"tr",19)(865,"td",20)(866,"div",21)(867,"span",22),e(868," t-group"),a(869,"br"),t()()(),i(870,"td",23)(871,"code",49),e(872,"Array<string>"),t()(),i(873,"td",25),e(874,"-"),t(),i(875,"td",26)(876,"em")(877,"strong"),e(878,"(opcional)"),t()(),i(879,"p"),e(880,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(881,"strong"),e(882,"t-groupable"),t(),e(883," esteja habilitada."),t()()(),i(884,"tr",19)(885,"td",20)(886,"div",21)(887,"span",22),e(888,"t-groupable"),a(889,"br"),t()()(),i(890,"td",23)(891,"code",24),e(892,"boolean "),t(),i(893,"code",50),e(894," GroupableSettings"),t()(),i(895,"td",25)(896,"p")(897,"code"),e(898,"false"),t()()(),i(899,"td",26)(900,"em")(901,"strong"),e(902,"(opcional)"),t()(),i(903,"p"),e(904,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(905,"tr",19)(906,"td",20)(907,"div",21)(908,"span",22),e(909,"t-header-template"),a(910,"br"),t()()(),i(911,"td",23)(912,"code",51),e(913,"TemplateRef<void>"),t()(),i(914,"td",25),e(915,"-"),t(),i(916,"td",26)(917,"em")(918,"strong"),e(919,"(opcional)"),t()(),i(920,"p"),e(921,"Container aberto para adicionar conte\xFAdo entre o cabe\xE7alho de a\xE7\xF5es e a lista do grid."),t(),i(922,"pre")(923,"code",28),e(924,`// Exemplo de uso:
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
</ng-template>`),t()()()(),i(925,"tr",19)(926,"td",20)(927,"div",21)(928,"span",22),e(929,"t-headline-fixed"),a(930,"br"),t()()(),i(931,"td",23)(932,"code",24),e(933,"boolean"),t()(),i(934,"td",25)(935,"p")(936,"code"),e(937,"false"),t()()(),i(938,"td",26)(939,"em")(940,"strong"),e(941,"(opcional)"),t()(),i(942,"p"),e(943,"Define o cabe\xE7alho do grid como fixo, desde que a altura ("),i(944,"strong"),e(945,"t-height"),t(),e(946,") n\xE3o esteja definida."),t()()(),i(947,"tr",19)(948,"td",20)(949,"div",21)(950,"span",22),e(951,"t-height"),a(952,"br"),t()()(),i(953,"td",23)(954,"code",52),e(955,"number "),t(),i(956,"code",40),e(957," string "),t(),i(958,"code",53),e(959," null"),t()(),i(960,"td",25)(961,"p"),e(962,"100%"),t()(),i(963,"td",26)(964,"em")(965,"strong"),e(966,"(opcional)"),t()(),i(967,"p"),e(968,"Define a altura da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(969,"code"),e(970,'"<n\xFAmero>%"'),t(),e(971,")."),t(),i(972,"ul")(973,"li"),e(974,"Se "),i(975,"strong"),e(976,"n\xE3o informado"),t(),e(977,", a altura da tabela ser\xE1 ajustada automaticamente pela quantidade de itens."),t(),i(978,"li"),e(979,"Caso seja informado um valor inv\xE1lido, ser\xE1 aplicado "),i(980,"strong"),e(981,"100%"),t(),e(982," como padr\xE3o."),t(),i(983,"li"),e(984,"Se "),i(985,"code"),e(986,"t-height"),t(),e(987," for menor que "),i(988,"code"),e(989,"t-min-height"),t(),e(990,", a altura m\xEDnima ser\xE1 aplicada."),t(),i(991,"li"),e(992,"Se "),i(993,"code"),e(994,"t-height"),t(),e(995," for maior que "),i(996,"code"),e(997,"t-max-height"),t(),e(998,", a altura m\xE1xima ser\xE1 aplicada."),t()(),i(999,"blockquote")(1e3,"p")(1001,"strong"),e(1002,"Observa\xE7\xE3o:"),t(),e(1003," Quando definido, o "),i(1004,"strong"),e(1005,"virtual scroll"),t(),e(1006," ser\xE1 ativado automaticamente. Consulte a documenta\xE7\xE3o da propriedade "),i(1007,"strong"),e(1008,"t-virtual-scroll"),t(),e(1009," para mais detalhes."),t()()()(),i(1010,"tr",19)(1011,"td",20)(1012,"div",21)(1013,"span",22),e(1014,"t-hide-action-fixed-columns"),a(1015,"br"),t()()(),i(1016,"td",23)(1017,"code",24),e(1018,"boolean"),t()(),i(1019,"td",25)(1020,"p")(1021,"code"),e(1022,"false"),t()()(),i(1023,"td",26)(1024,"em")(1025,"strong"),e(1026,"(opcional)"),t()(),i(1027,"p"),e(1028,`Controla a visibilidade da op\xE7\xE3o de fixar colunas no Gerenciar Tabela.
Se alguma coluna j\xE1 estiver fixa quando essa propriedade for habilitada,
ela permanecer\xE1 fixa, garantindo que ocultar as op\xE7\xF5es de fixar n\xE3o afete o estado das colunas j\xE1 fixadas.`),t()()(),i(1029,"tr",19)(1030,"td",20)(1031,"div",21)(1032,"span",22),e(1033," t-hide-batch-actions"),a(1034,"br"),t()()(),i(1035,"td",23)(1036,"code",24),e(1037,"boolean"),t()(),i(1038,"td",25)(1039,"p")(1040,"code"),e(1041,"false"),t()()(),i(1042,"td",26)(1043,"em")(1044,"strong"),e(1045,"(opcional)"),t()(),i(1046,"p"),e(1047,"Permite ocultar as a\xE7\xF5es em lote, respons\xE1vel por excluir e exibir a quantidade de itens."),t()()(),i(1048,"tr",19)(1049,"td",20)(1050,"div",21)(1051,"span",22),e(1052,"t-hide-columns-manager"),a(1053,"br"),t()()(),i(1054,"td",23)(1055,"code",24),e(1056,"boolean"),t()(),i(1057,"td",25)(1058,"p")(1059,"code"),e(1060,"false"),t()()(),i(1061,"td",26)(1062,"em")(1063,"strong"),e(1064,"(opcional)"),t()(),i(1065,"p"),e(1066,"Permite ocultar o bot\xE3o Gerenciar Tabela."),t()()(),i(1067,"tr",19)(1068,"td",20)(1069,"div",21)(1070,"span",22),e(1071,"t-hide-select-all"),a(1072,"br"),t()()(),i(1073,"td",23)(1074,"code",24),e(1075,"boolean"),t()(),i(1076,"td",25)(1077,"p")(1078,"code"),e(1079,"false"),t()()(),i(1080,"td",26)(1081,"em")(1082,"strong"),e(1083,"(opcional)"),t()(),i(1084,"p"),e(1085,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1086,"tr",19)(1087,"td",20)(1088,"div",21)(1089,"span",22),e(1090,"t-hide-table-search"),a(1091,"br"),t()()(),i(1092,"td",23)(1093,"code",24),e(1094,"boolean"),t()(),i(1095,"td",25)(1096,"p")(1097,"code"),e(1098,"false"),t()()(),i(1099,"td",26)(1100,"em")(1101,"strong"),e(1102,"(opcional)"),t()(),i(1103,"p"),e(1104,"Permite ocultar o campo de pesquisa."),t()()(),i(1105,"tr",19)(1106,"td",20)(1107,"div",21)(1108,"span",22),e(1109," t-loading"),a(1110,"br"),t()()(),i(1111,"td",23)(1112,"code",24),e(1113,"boolean"),t()(),i(1114,"td",25)(1115,"p")(1116,"code"),e(1117,"false"),t()()(),i(1118,"td",26)(1119,"em")(1120,"strong"),e(1121,"(opcional)"),t()(),i(1122,"p"),e(1123,"Bloqueia a intera\xE7\xE3o do usu\xE1rio com os dados do grid."),t()()(),i(1124,"tr",19)(1125,"td",20)(1126,"div",21)(1127,"span",22),e(1128,"t-items"),a(1129,"br"),t()()(),i(1130,"td",23)(1131,"code",54),e(1132,"Array<any>"),t()(),i(1133,"td",25),e(1134,"-"),t(),i(1135,"td",26)(1136,"em")(1137,"strong"),e(1138,"(opcional)"),t()(),i(1139,"p"),e(1140,`Permite listar os itens no grid.
Cada item do array representa uma linha no grid e deve conter as propriedades
que correspondem \xE0s colunas definidas no grid.`),t(),i(1141,"pre")(1142,"code",28),e(1143,`// Exemplo de uso:
<thf-grid
 [t-items]="[{ name: 'M\xF4nica'}, { name: 'Cebolinha'}]"
></thf-grid>`),t()()()(),i(1144,"tr",19)(1145,"td",20)(1146,"div",32)(1147,"span",33),e(1148," (t-items-after-get)"),a(1149,"br"),t()()(),i(1150,"td",23)(1151,"code",34),e(1152,"EventEmitter"),t()(),i(1153,"td",25),e(1154,"-"),t(),i(1155,"td",26)(1156,"em")(1157,"strong"),e(1158,"(opcional)"),t()(),i(1159,"p"),e(1160,`Evento disparado ap\xF3s finaliza\xE7\xE3o das requisi\xE7\xF5es de GET.
Dispara no GET inicial caso esteja utilizando `),i(1161,"strong"),e(1162,"t-service-api"),t(),e(1163,`.
Dispara tamb\xE9m no GET de filtros caso esteja utilizando a propriedade `),i(1164,"strong"),e(1165,"t-actions-filter"),t(),e(1166,`
ou no GET do input de pesquisa quando a propriedade `),i(1167,"strong"),e(1168,"t-filter-input-mode"),t(),e(1169," estiver como "),i(1170,"code"),e(1171,"service"),t(),e(1172,`.
Retorna os itens atuais da tabela, o total de itens, n\xFAmero da p\xE1gina atual e pageSize.`),t()()(),i(1173,"tr",19)(1174,"td",20)(1175,"div",21)(1176,"span",22),e(1177,"t-literals"),a(1178,"br"),t()()(),i(1179,"td",23)(1180,"code",55),e(1181,"ThfGridLiterals"),t()(),i(1182,"td",25),e(1183,"-"),t(),i(1184,"td",26)(1185,"em")(1186,"strong"),e(1187,"(opcional)"),t()(),i(1188,"p"),e(1189,"Permite definir literais personalizados para o componente, conforme a interface "),i(1190,"strong"),e(1191,"ThfGridLiterals"),t(),e(1192,"."),t(),i(1193,"pre")(1194,"code",28),e(1195,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-literals]="customLiterals"
></thf-grid>`),t()(),i(1196,"pre")(1197,"code",31),e(1198,"customLiterals: ThfGridLiterals = { advancedSearch: 'Mais filtros' };"),t()()()(),i(1199,"tr",19)(1200,"td",20)(1201,"div",21)(1202,"span",22),e(1203,"t-max-columns"),a(1204,"br"),t()()(),i(1205,"td",23)(1206,"code",52),e(1207,"number"),t()(),i(1208,"td",25),e(1209,"-"),t(),i(1210,"td",26)(1211,"em")(1212,"strong"),e(1213,"(opcional)"),t()(),i(1214,"p"),e(1215,`Define a quantidade m\xE1xima de colunas que ser\xE3o exibidas no grid.
Quando chegar no valor informado, as colunas que n\xE3o estiverem selecionadas ficar\xE3o desabilitadas e
caso houver mais colunas vis\xEDveis do que o permitido, as excedentes ser\xE3o ignoradas por ordem de posi\xE7\xE3o.`),t()()(),i(1216,"tr",19)(1217,"td",20)(1218,"div",21)(1219,"span",22),e(1220," t-max-height"),a(1221,"br"),t()()(),i(1222,"td",23)(1223,"code",52),e(1224,"number "),t(),i(1225,"code",40),e(1226," string "),t(),i(1227,"code",53),e(1228," null"),t()(),i(1229,"td",25),e(1230,"-"),t(),i(1231,"td",26)(1232,"em")(1233,"strong"),e(1234,"(opcional)"),t()(),i(1235,"p"),e(1236,"Define a "),i(1237,"strong"),e(1238,"altura m\xE1xima"),t(),e(1239," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1240,"code"),e(1241,'"<n\xFAmero>%"'),t(),e(1242,")."),t(),i(1243,"ul")(1244,"li"),e(1245,"Se "),i(1246,"strong"),e(1247,"n\xE3o informado"),t(),e(1248,", a altura m\xE1xima ser\xE1 definida pela propriedade "),i(1249,"code"),e(1250,"t-height"),t(),e(1251,", se existir."),t(),i(1252,"li"),e(1253,"Caso "),i(1254,"code"),e(1255,"t-height"),t(),e(1256," seja "),i(1257,"strong"),e(1258,"maior"),t(),e(1259," que "),i(1260,"code"),e(1261,"t-max-height"),t(),e(1262,", o grid usar\xE1 "),i(1263,"code"),e(1264,"t-max-height"),t(),e(1265," como limite superior."),t(),i(1266,"li"),e(1267,"Caso o valor passado seja inv\xE1lido, "),i(1268,"strong"),e(1269,"nenhuma altura m\xE1xima ser\xE1 aplicada"),t(),e(1270,"."),t()()()(),i(1271,"tr",19)(1272,"td",20)(1273,"div",21)(1274,"span",22),e(1275,"t-max-resizable-width"),a(1276,"br"),t()()(),i(1277,"td",23)(1278,"code",52),e(1279,"number"),t()(),i(1280,"td",25),e(1281,"-"),t(),i(1282,"td",26)(1283,"em")(1284,"strong"),e(1285,"(opcional)"),t()(),i(1286,"p"),e(1287,"Define a largura m\xE1xima para redimensionar uma coluna. Requer que a propriedade "),i(1288,"strong"),e(1289,"t-resizable"),t(),e(1290," esteja habilitada."),t()()(),i(1291,"tr",19)(1292,"td",20)(1293,"div",21)(1294,"span",22),e(1295," t-min-height"),a(1296,"br"),t()()(),i(1297,"td",23)(1298,"code",52),e(1299,"number "),t(),i(1300,"code",40),e(1301," string "),t(),i(1302,"code",53),e(1303," null"),t()(),i(1304,"td",25),e(1305,"-"),t(),i(1306,"td",26)(1307,"em")(1308,"strong"),e(1309,"(opcional)"),t()(),i(1310,"p"),e(1311,"Define a "),i(1312,"strong"),e(1313,"altura m\xEDnima"),t(),e(1314," da tabela. Aceita um n\xFAmero (em pixels) ou uma string percentual ("),i(1315,"code"),e(1316,'"<n\xFAmero>%"'),t(),e(1317,")."),t(),i(1318,"ul")(1319,"li"),e(1320,"Se "),i(1321,"strong"),e(1322,"n\xE3o informado"),t(),e(1323,", a altura m\xEDnima ser\xE1 definida pela propriedade "),i(1324,"code"),e(1325,"t-height"),t(),e(1326,", se existir."),t(),i(1327,"li"),e(1328,"Caso "),i(1329,"code"),e(1330,"t-height"),t(),e(1331," seja "),i(1332,"strong"),e(1333,"menor"),t(),e(1334," que "),i(1335,"code"),e(1336,"t-min-height"),t(),e(1337,", o grid usar\xE1 "),i(1338,"code"),e(1339,"t-min-height"),t(),e(1340," como limite inferior."),t(),i(1341,"li"),e(1342,"Caso o valor passado seja inv\xE1lido, "),i(1343,"strong"),e(1344,"nenhuma altura m\xEDnima ser\xE1 aplicada"),t(),e(1345,"."),t()()()(),i(1346,"tr",19)(1347,"td",20)(1348,"div",21)(1349,"span",22),e(1350,"t-min-resizable-width"),a(1351,"br"),t()()(),i(1352,"td",23)(1353,"code",52),e(1354,"number"),t()(),i(1355,"td",25)(1356,"p")(1357,"code"),e(1358,"10"),t()()(),i(1359,"td",26)(1360,"em")(1361,"strong"),e(1362,"(opcional)"),t()(),i(1363,"p"),e(1364,"Define a largura m\xEDnima para redimensionar uma coluna. Requer que a propriedade "),i(1365,"strong"),e(1366,"t-resizable"),t(),e(1367," esteja habilitada."),t()()(),i(1368,"tr",19)(1369,"td",20)(1370,"div",32)(1371,"span",33),e(1372," (t-change-group)"),a(1373,"br"),t()()(),i(1374,"td",23)(1375,"code",34),e(1376,"EventEmitter"),t()(),i(1377,"td",25),e(1378,"-"),t(),i(1379,"td",26)(1380,"em")(1381,"strong"),e(1382,"(opcional)"),t()(),i(1383,"p"),e(1384,"Evento disparado quando ocorre o agrupamento no grid. Retorna um array de strings das colunas agrupadas."),t()()(),i(1385,"tr",19)(1386,"td",20)(1387,"div",21)(1388,"span",22),e(1389," t-load"),a(1390,"br"),t()()(),i(1391,"td",23)(1392,"code",40),e(1393,"string "),t(),i(1394,"code",56),e(1395," (() => ThfGridOptions)"),t()(),i(1396,"td",25),e(1397,"-"),t(),i(1398,"td",26)(1399,"em")(1400,"strong"),e(1401,"(opcional)"),t()(),i(1402,"p"),e(1403,`Define dinamicamente as colunas e a\xE7\xF5es do grid ap\xF3s o carregamento inicial dos dados.
Pode ser uma URL que retorna a configura\xE7\xE3o via GET ou uma fun\xE7\xE3o que retorna a configura\xE7\xE3o diretamente.
Quando fun\xE7\xE3o, a propriedade deve implementar a interface `),i(1404,"strong"),e(1405,"ThfGridOptions"),t(),e(1406,"."),t()()(),i(1407,"tr",19)(1408,"td",20)(1409,"div",21)(1410,"span",22),e(1411,"t-options-paging"),a(1412,"br"),t()()(),i(1413,"td",23)(1414,"code",57),e(1415,"Array<ThfGridOptionPaging>"),t()(),i(1416,"td",25),e(1417,"-"),t(),i(1418,"td",26)(1419,"em")(1420,"strong"),e(1421,"(opcional)"),t()(),i(1422,"p"),e(1423,"Define as op\xE7\xF5es de itens por p\xE1gina, implementando a interface "),i(1424,"strong"),e(1425,"ThfGridOptionPaging"),t(),e(1426,`.
Requer que a propriedade `),i(1427,"strong"),e(1428,"t-pageable"),t(),e(1429," esteja habilitada."),t()()(),i(1430,"tr",19)(1431,"td",20)(1432,"div",32)(1433,"span",33),e(1434," (t-change-order-column)"),a(1435,"br"),t()()(),i(1436,"td",23)(1437,"code",34),e(1438,"EventEmitter"),t()(),i(1439,"td",25),e(1440,"-"),t(),i(1441,"td",26)(1442,"em")(1443,"strong"),e(1444,"(opcional)"),t()(),i(1445,"p"),e(1446,`Evento disparado quando a ordem das colunas \xE9 alterada atrav\xE9s do Gerenciar Tabela ou pelo Draggable.
Retorna um array de strings.`),t()()(),i(1447,"tr",19)(1448,"td",20)(1449,"div",21)(1450,"span",22),e(1451,"t-page-size"),a(1452,"br"),t()()(),i(1453,"td",23)(1454,"code",52),e(1455,"number"),t()(),i(1456,"td",25)(1457,"p")(1458,"code"),e(1459,"10"),t()()(),i(1460,"td",26)(1461,"em")(1462,"strong"),e(1463,"(opcional)"),t()(),i(1464,"p"),e(1465,"Define a quantidade de itens default na p\xE1gina. Requer que a propriedade "),i(1466,"strong"),e(1467,"t-pageable"),t(),e(1468," esteja habilitada."),t()()(),i(1469,"tr",19)(1470,"td",20)(1471,"div",21)(1472,"span",22),e(1473,"t-page-size-virtual"),a(1474,"br"),t()()(),i(1475,"td",23)(1476,"code",52),e(1477,"number"),t()(),i(1478,"td",25)(1479,"p")(1480,"code"),e(1481,"60"),t()()(),i(1482,"td",26)(1483,"em")(1484,"strong"),e(1485,"(opcional)"),t()(),i(1486,"p"),e(1487,`Necess\xE1rio quando o virtual scroll est\xE1 habilitado para evitar comportamentos inesperados durante a rolagem.
Recomenda-se que o valor seja pelo menos 3 vezes o n\xFAmero de itens vis\xEDveis no grid.`),t()()(),i(1488,"tr",19)(1489,"td",20)(1490,"div",21)(1491,"span",22),e(1492,"t-pageable"),a(1493,"br"),t()()(),i(1494,"td",23)(1495,"code",24),e(1496,"boolean"),t()(),i(1497,"td",25)(1498,"p")(1499,"code"),e(1500,"false"),t()()(),i(1501,"td",26)(1502,"em")(1503,"strong"),e(1504,"(opcional)"),t()(),i(1505,"p"),e(1506,"Exibe o bot\xE3o 'Carregar mais resultados' e habilita a pagina\xE7\xE3o no Gerenciar Tabela."),t()()(),i(1507,"tr",19)(1508,"td",20)(1509,"div",21)(1510,"span",22),e(1511,"t-param-delete-api"),a(1512,"br"),t()()(),i(1513,"td",23)(1514,"code",40),e(1515,"string"),t()(),i(1516,"td",25),e(1517,"-"),t(),i(1518,"td",26)(1519,"em")(1520,"strong"),e(1521,"(opcional)"),t()(),i(1522,"p"),e(1523,"Define o par\xE2metro para a requisi\xE7\xE3o de DELETE ou POST(caso a propriedade "),i(1524,"code"),e(1525,"t-allow-batch-delete"),t(),e(1526," seja definida)."),t(),i(1527,"p"),e(1528,"Quando "),i(1529,"strong"),e(1530,"t-service-delete-api"),t(),e(1531," estiver configurado e o valor de "),i(1532,"strong"),e(1533,"t-param-delete-api"),t(),e(1534,` n\xE3o for informado,
por padr\xE3o, ser\xE1 enviado `),i(1535,"code"),e(1536,"key"),t(),e(1537," (definido ao usar "),i(1538,"strong"),e(1539,"ThfGridColumn"),t(),e(1540,") ou, na aus\xEAncia, "),i(1541,"code"),e(1542,"id"),t(),e(1543,`. Caso
`),i(1544,"strong"),e(1545,"t-service-delete-api"),t(),e(1546," n\xE3o esteja definido, ser\xE1 considerada a URL de "),i(1547,"strong"),e(1548,"t-service-api"),t(),e(1549,"."),t(),i(1550,"blockquote")(1551,"p"),e(1552,"Durante a exclus\xE3o de um \xFAnico item, ele ser\xE1 enviado como par\xE2metro na URL, conforme o exemplo abaixo:"),t(),i(1553,"pre")(1554,"code"),e(1555,`// Considerando t-param-delete-api="email"
DELETE /items?email=email1@example.com`),t()(),i(1556,"p"),e(1557,"Caso o valor n\xE3o seja uma propriedade v\xE1lida do item, o grid ir\xE1 considerar as keys definidas na coluna"),t(),i(1558,"pre")(1559,"code"),e(1560,`// Considerando t-param-delete-api="propriedadeInexistente" e as colunas "id" e "email" com keys definidas
DELETE /items?propriedadeInexistente=1|email1@example.com`),t()(),i(1561,"p"),e(1562,"Na aus\xEAncia do t-param-delete-api e das keys, o grid ir\xE1 considerar o id do item e enviar diretamente como par\xE2metro na URL:"),t(),i(1563,"pre")(1564,"code"),e(1565,`// Considerando t-param-delete-api="email" e sem keys definidas
DELETE /items/1`),t()()(),i(1566,"blockquote")(1567,"p"),e(1568,"Durante a exclus\xE3o em lote, ele ser\xE1 enviado no corpo da requisi\xE7\xE3o POST como o \xEDndice "),i(1569,"code"),e(1570,"paramDelete"),t(),e(1571,", conforme o exemplo abaixo:"),t(),i(1572,"pre")(1573,"code",58),e(1574,`// Considerando t-param-delete-api="email"
{
  items: [
    { id: '1', email: 'email1@example.com' },
    { id: '2', email: 'email2@example.com' }
  ],
  keys: ['email1@example.com', 'email2@example.com'],
  total: 2,
  paramDelete: "email"
}`),t()()()()(),i(1575,"tr",19)(1576,"td",20)(1577,"div",21)(1578,"span",22),e(1579,"t-resizable"),a(1580,"br"),t()()(),i(1581,"td",23)(1582,"code",24),e(1583,"boolean"),t()(),i(1584,"td",25)(1585,"p")(1586,"code"),e(1587,"false"),t()()(),i(1588,"td",26)(1589,"em")(1590,"strong"),e(1591,"(opcional)"),t()(),i(1592,"p"),e(1593,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1594,"tr",19)(1595,"td",20)(1596,"div",21)(1597,"span",22),e(1598,"t-row-height"),a(1599,"br"),t()()(),i(1600,"td",23)(1601,"code",52),e(1602,"number"),t()(),i(1603,"td",25),e(1604,"-"),t(),i(1605,"td",26)(1606,"em")(1607,"strong"),e(1608,"(opcional)"),t()(),i(1609,"p"),e(1610,`Define a altura da linha quando o virtual scroll est\xE1 habilitado.
Necess\xE1ria para calcular corretamente o n\xFAmero de itens vis\xEDveis e evitar comportamentos inesperados durante a rolagem.
Recomenda-se o uso dessa propriedade ao utilizar colunas com templates personalizados
(`),i(1611,"code"),e(1612,"columnTemplate"),t(),e(1613," e "),i(1614,"code"),e(1615,"cellTemplate"),t(),e(1616,")."),t()()(),i(1617,"tr",19)(1618,"td",20)(1619,"div",32)(1620,"span",33),e(1621," (t-rows-selected)"),a(1622,"br"),t()()(),i(1623,"td",23)(1624,"code",34),e(1625,"EventEmitter"),t()(),i(1626,"td",25),e(1627,"-"),t(),i(1628,"td",26)(1629,"p"),e(1630,"Retorna um array indicando quais s\xE3o as linhas selecionadas no momento."),t()()(),i(1631,"tr",19)(1632,"td",20)(1633,"div",21)(1634,"span",22),e(1635,"t-selectable"),a(1636,"br"),t()()(),i(1637,"td",23)(1638,"code",24),e(1639,"boolean"),t()(),i(1640,"td",25)(1641,"p")(1642,"code"),e(1643,"false"),t()()(),i(1644,"td",26)(1645,"em")(1646,"strong"),e(1647,"(opcional)"),t()(),i(1648,"p"),e(1649,`Habilita a sele\xE7\xE3o de itens, adicionando uma coluna com checkbox.
A sele\xE7\xE3o padr\xE3o \xE9 m\xFAltipla, permitindo selecionar v\xE1rios itens ao mesmo tempo.`),t()()(),i(1650,"tr",19)(1651,"td",20)(1652,"div",21)(1653,"span",22),e(1654,"t-selectable-entire-line"),a(1655,"br"),t()()(),i(1656,"td",23)(1657,"code",24),e(1658,"boolean"),t()(),i(1659,"td",25)(1660,"p")(1661,"code"),e(1662,"true"),t()()(),i(1663,"td",26)(1664,"em")(1665,"strong"),e(1666,"(opcional)"),t()(),i(1667,"p"),e(1668,"Permite selecionar o item ao clicar na linha. Requer que a propriedade "),i(1669,"strong"),e(1670,"t-selectable"),t(),e(1671," esteja habilitada."),t()()(),i(1672,"tr",19)(1673,"td",20)(1674,"div",21)(1675,"span",22),e(1676,"t-selectable-removed"),a(1677,"br"),t()()(),i(1678,"td",23)(1679,"code",24),e(1680,"boolean"),t()(),i(1681,"td",25)(1682,"p")(1683,"code"),e(1684,"false"),t()()(),i(1685,"td",26)(1686,"em")(1687,"strong"),e(1688,"(opcional)"),t()(),i(1689,"p"),e(1690,"Controla se os itens exibidos quando o filtro de estado estiver em 'removed' poder\xE3o ser selecionados."),t()()(),i(1691,"tr",19)(1692,"td",20)(1693,"div",32)(1694,"span",33),e(1695," (t-selected)"),a(1696,"br"),t()()(),i(1697,"td",23)(1698,"code",34),e(1699,"EventEmitter"),t()(),i(1700,"td",25),e(1701,"-"),t(),i(1702,"td",26)(1703,"em")(1704,"strong"),e(1705,"(opcional)"),t()(),i(1706,"p"),e(1707,"Evento disparado quando selecionado um item. Retorna o item selecionado."),t()()(),i(1708,"tr",19)(1709,"td",20)(1710,"div",32)(1711,"span",33),e(1712," (t-all-selected)"),a(1713,"br"),t()()(),i(1714,"td",23)(1715,"code",34),e(1716,"EventEmitter"),t()(),i(1717,"td",25),e(1718,"-"),t(),i(1719,"td",26)(1720,"em")(1721,"strong"),e(1722,"(opcional)"),t()(),i(1723,"p"),e(1724,"Evento disparado quando selecionado todos os itens. Retorna todos os itens selecionados."),t()()(),i(1725,"tr",19)(1726,"td",20)(1727,"div",21)(1728,"span",22),e(1729,"t-service-delete-api"),a(1730,"br"),t()()(),i(1731,"td",23)(1732,"code",40),e(1733,"string "),t(),i(1734,"code",59),e(1735," ThfGridDeleteService"),t()(),i(1736,"td",25),e(1737,"-"),t(),i(1738,"td",26)(1739,"em")(1740,"strong"),e(1741,"(opcional)"),t()(),i(1742,"p"),e(1743,`Respons\xE1vel por excluir o item. Aceita um servi\xE7o que implementa a interface
`),i(1744,"strong"),e(1745,"ThfGridDeleteService"),t(),e(1746," ou uma URL."),t(),i(1747,"p"),e(1748,`Ao selecionar o bot\xE3o de excluir, essa URL ou servi\xE7o ser\xE1 chamado, enviando o par\xE2metro definido na propriedade
`),i(1749,"strong"),e(1750,"t-param-delete-api"),t(),e(1751,". Se configurado e "),i(1752,"strong"),e(1753,"t-param-delete-api"),t(),e(1754," n\xE3o for informado, ser\xE1 enviado "),i(1755,"code"),e(1756,"key"),t(),e(1757,`
(definido ao usar `),i(1758,"strong"),e(1759,"ThfGridColumn"),t(),e(1760,") ou, na aus\xEAncia, "),i(1761,"code"),e(1762,"id"),t(),e(1763,"."),t(),i(1764,"p"),e(1765,"Por padr\xE3o, a exclus\xE3o \xE9 feita item a item. No entanto, ao habilitar a propriedade "),i(1766,"strong"),e(1767,"t-allow-batch-delete"),t(),e(1768,` e utilizar
um servi\xE7o com o m\xE9todo `),i(1769,"code"),e(1770,"deleteBatchItems"),t(),e(1771,", a exclus\xE3o em lote ser\xE1 permitida."),t(),i(1772,"blockquote")(1773,"p"),e(1774,"Esta URL deve retornar e receber os dados no padr\xE3o de "),i(1775,"a",60),e(1776,"API do PO UI"),t()()(),i(1777,"blockquote")(1778,"p"),e(1779,"Caso utilize um servi\xE7o "),i(1780,"strong"),e(1781,"ThfGridDeleteService"),t(),e(1782,`, o tratamento de encoding do valor fica sob a responsabilidade do
desenvolvedor.`),t()()()(),i(1783,"tr",19)(1784,"td",20)(1785,"div",21)(1786,"span",22),e(1787," t-service-api"),a(1788,"br"),t()()(),i(1789,"td",23)(1790,"code",40),e(1791,"string"),t()(),i(1792,"td",25),e(1793,"-"),t(),i(1794,"td",26)(1795,"em")(1796,"strong"),e(1797,"(opcional)"),t()(),i(1798,"p"),e(1799,"Define a rota da "),i(1800,"code"),e(1801,"API"),t(),e(1802,` para realizar o GET dos itens e popular o grid.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(1803,"code"),e(1804,"API"),t(),e(1805,` esteja preparada para receber uma ou
mais `),i(1806,"code"),e(1807,"keys"),t(),e(1808," concatenadas para identifica\xE7\xE3o do registro. Caso n\xE3o haja "),i(1809,"code"),e(1810,"keys"),t(),e(1811,`,
que implementa a interface `),i(1812,"strong"),e(1813,"ThfGridColumn"),t(),e(1814,", a requisi\xE7\xE3o de exclus\xE3o ocorrer\xE1 pelo "),i(1815,"code"),e(1816,"id"),t(),e(1817,"."),t()()(),i(1818,"tr",19)(1819,"td",20)(1820,"div",21)(1821,"span",22),e(1822,"t-show-densification-configuration"),a(1823,"br"),t()()(),i(1824,"td",23)(1825,"code",24),e(1826,"boolean"),t()(),i(1827,"td",25)(1828,"p")(1829,"code"),e(1830,"false"),t()()(),i(1831,"td",26)(1832,"em")(1833,"strong"),e(1834,"(opcional)"),t()(),i(1835,"p"),e(1836,"Habilita um atalho para alternar o espa\xE7amento das linhas do grid entre os modos "),i(1837,"code"),e(1838,"Compacto"),t(),e(1839," e "),i(1840,"code"),e(1841,"Espa\xE7oso"),t(),e(1842,` no
Gerenciar Tabela.`),t(),i(1843,"blockquote")(1844,"p"),e(1845,"Em n\xEDvel de acessibilidade "),i(1846,"strong"),e(1847,"AA"),t(),e(1848,", a op\xE7\xE3o "),i(1849,"code"),e(1850,"Extra Compacto"),t(),e(1851," tamb\xE9m \xE9 exibida."),t()()()(),i(1852,"tr",19)(1853,"td",20)(1854,"div",21)(1855,"span",22),e(1856,"t-show-draggable-icon"),a(1857,"br"),t()()(),i(1858,"td",23)(1859,"code",24),e(1860,"boolean"),t()(),i(1861,"td",25)(1862,"p")(1863,"code"),e(1864,"false"),t()()(),i(1865,"td",26)(1866,"em")(1867,"strong"),e(1868,"(opcional)"),t()(),i(1869,"p"),e(1870,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1871,"tr",19)(1872,"td",20)(1873,"div",21)(1874,"span",22),e(1875," t-show-footer-aggregates"),a(1876,"br"),t()()(),i(1877,"td",23)(1878,"code",24),e(1879,"boolean"),t()(),i(1880,"td",25)(1881,"p")(1882,"code"),e(1883,"false"),t()()(),i(1884,"td",26)(1885,"em")(1886,"strong"),e(1887,"(opcional)"),t()(),i(1888,"p"),e(1889,"Quando definido true, exibir\xE1 no rodap\xE9 da tabela os totalizadores que foram definidos na propriedade "),i(1890,"code"),e(1891,"t-aggregates"),t(),e(1892,"."),t()()(),i(1893,"tr",19)(1894,"td",20)(1895,"div",32)(1896,"span",33),e(1897," (t-show-more)"),a(1898,"br"),t()()(),i(1899,"td",23)(1900,"code",34),e(1901,"EventEmitter"),t()(),i(1902,"td",25),e(1903,"-"),t(),i(1904,"td",26)(1905,"em")(1906,"strong"),e(1907,"(opcional)"),t()(),i(1908,"p"),e(1909,"Evento disparado quando pressionado o bot\xE3o 'Carregar mais'. Retorna um array do tipo "),i(1910,"strong"),e(1911,"ThfGridColumnSort"),t(),e(1912,`,
caso existam colunas ordenadas definidas.`),t(),i(1913,"blockquote")(1914,"p"),e(1915,"Caso "),i(1916,"strong"),e(1917,"t-items"),t(),e(1918," esteja definido, o uso desse evento se torna obrigat\xF3rio caso queira exibir o bot\xE3o 'Carregar mais'."),t()()()(),i(1919,"tr",19)(1920,"td",20)(1921,"div",21)(1922,"span",22),e(1923,"t-show-more-disabled"),a(1924,"br"),t()()(),i(1925,"td",23)(1926,"code",24),e(1927,"boolean"),t()(),i(1928,"td",25)(1929,"p")(1930,"code"),e(1931,"false"),t()()(),i(1932,"td",26)(1933,"em")(1934,"strong"),e(1935,"(opcional)"),t()(),i(1936,"p"),e(1937,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1938,"tr",19)(1939,"td",20)(1940,"div",21)(1941,"span",22),e(1942,"t-show-more-visible"),a(1943,"br"),t()()(),i(1944,"td",23)(1945,"code",24),e(1946,"boolean"),t()(),i(1947,"td",25)(1948,"p")(1949,"code"),e(1950,"true"),t()()(),i(1951,"td",26)(1952,"em")(1953,"strong"),e(1954,"(opcional)"),t()(),i(1955,"p"),e(1956,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1957,"strong"),e(1958,"t-pageable"),t(),e(1959," esteja habilitada, ou seja utilizado o evento "),i(1960,"code"),e(1961,"t-show-more"),t(),e(1962," em conjunto com a propriedade "),i(1963,"strong"),e(1964,"t-items"),t(),e(1965,"."),t(),i(1966,"blockquote")(1967,"p"),e(1968,"Caso seja utilizado em conjunto com "),i(1969,"strong"),e(1970,"t-show-more-disabled"),t(),e(1971,", a propriedade "),i(1972,"strong"),e(1973,"t-show-more-visible"),t(),e(1974," ter\xE1 prioridade."),t()()()(),i(1975,"tr",19)(1976,"td",20)(1977,"div",21)(1978,"span",22),e(1979,"t-single-select"),a(1980,"br"),t()()(),i(1981,"td",23)(1982,"code",24),e(1983,"boolean"),t()(),i(1984,"td",25)(1985,"p")(1986,"code"),e(1987,"false"),t()()(),i(1988,"td",26)(1989,"em")(1990,"strong"),e(1991,"(opcional)"),t()(),i(1992,"p"),e(1993,"Define a sele\xE7\xE3o \xFAnica. Requer que a propriedade "),i(1994,"strong"),e(1995,"t-selectable"),t(),e(1996," esteja habilitada."),t()()(),i(1997,"tr",19)(1998,"td",20)(1999,"div",21)(2e3,"span",22),e(2001,"t-sort"),a(2002,"br"),t()()(),i(2003,"td",23)(2004,"code",61),e(2005,"Array<ThfGridColumnSort>"),t()(),i(2006,"td",25),e(2007,"-"),t(),i(2008,"td",26)(2009,"em")(2010,"strong"),e(2011,"(opcional)"),t()(),i(2012,"p"),e(2013,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(2014,"pre")(2015,"code",28),e(2016,`// Exemplo de uso:
<thf-grid
 t-service-api="https://po-sample-api.onrender.com/v1/people"
 [t-sort]="sortColumns"
></thf-grid>`),t()(),i(2017,"pre")(2018,"code",31),e(2019,"sortColumns: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(2020,"tr",19)(2021,"td",20)(2022,"div",32)(2023,"span",33),e(2024," (t-change-sort-column)"),a(2025,"br"),t()()(),i(2026,"td",23)(2027,"code",34),e(2028,"EventEmitter"),t()(),i(2029,"td",25),e(2030,"-"),t(),i(2031,"td",26)(2032,"em")(2033,"strong"),e(2034,"(opcional)"),t()(),i(2035,"p"),e(2036,`Evento disparado ao alterar o sort da coluna.
Retorna um array do tipo `),i(2037,"strong"),e(2038,"ThfGridColumnSort"),t(),e(2039," com a regra de sortable e a coluna aplicada."),t()()(),i(2040,"tr",19)(2041,"td",20)(2042,"div",21)(2043,"span",22),e(2044,"t-sortable"),a(2045,"br"),t()()(),i(2046,"td",23)(2047,"code",24),e(2048,"boolean"),t()(),i(2049,"td",25)(2050,"p")(2051,"code"),e(2052,"true"),t()()(),i(2053,"td",26)(2054,"em")(2055,"strong"),e(2056,"(opcional)"),t()(),i(2057,"p"),e(2058,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2059,"tr",19)(2060,"td",20)(2061,"div",21)(2062,"span",22),e(2063,"t-spacing"),a(2064,"br"),t()()(),i(2065,"td",23)(2066,"code",40),e(2067,"string"),t()(),i(2068,"td",25)(2069,"p")(2070,"code"),e(2071,"medium"),t()()(),i(2072,"td",26)(2073,"em")(2074,"strong"),e(2075,"(opcional)"),t()(),i(2076,"p"),e(2077,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2078,"strong"),e(2079,"ThfColumnSpacing"),t(),e(2080,"."),t(),i(2081,"blockquote")(2082,"p"),e(2083,"Em n\xEDvel de acessibilidade "),i(2084,"strong"),e(2085,"AA"),t(),e(2086,", caso o valor de "),i(2087,"code"),e(2088,"t-spacing"),t(),e(2089," n\xE3o seja definido, o valor padr\xE3o ser\xE1 "),i(2090,"code"),e(2091,"extraSmall"),t(),e(2092,`
nos seguintes cen\xE1rios:`),t(),i(2093,"ul")(2094,"li"),e(2095,"Quando o valor de "),i(2096,"code"),e(2097,"t-components-size"),t(),e(2098," for "),i(2099,"code"),e(2100,"small"),t(),e(2101,";"),t(),i(2102,"li"),e(2103,"Quando o valor padr\xE3o dos componentes for configurado como "),i(2104,"code"),e(2105,"small"),t(),e(2106,` no
`),i(2107,"a",41),e(2108,"servi\xE7o de tema"),t(),e(2109,"."),t()()()()(),i(2110,"tr",19)(2111,"td",20)(2112,"div",21)(2113,"span",22),e(2114,"t-striped"),a(2115,"br"),t()()(),i(2116,"td",23)(2117,"code",24),e(2118,"boolean"),t()(),i(2119,"td",25)(2120,"p")(2121,"code"),e(2122,"true"),t()()(),i(2123,"td",26)(2124,"em")(2125,"strong"),e(2126,"(opcional)"),t()(),i(2127,"p"),e(2128,"Define o estilo listrado no grid (striped)."),t()()(),i(2129,"tr",19)(2130,"td",20)(2131,"div",21)(2132,"span",22),e(2133,"t-text-wrap"),a(2134,"br"),t()()(),i(2135,"td",23)(2136,"code",24),e(2137,"boolean"),t()(),i(2138,"td",25)(2139,"p")(2140,"code"),e(2141,"false"),t()()(),i(2142,"td",26)(2143,"em")(2144,"strong"),e(2145,"(opcional)"),t()(),i(2146,"p"),e(2147,`Define a quebra autom\xE1tica de texto. Quando ativada, o texto que excede o espa\xE7o dispon\xEDvel \xE9 transferido para a
pr\xF3xima linha em pontos apropriados para uma leitura clara.`),t(),i(2148,"blockquote")(2149,"p"),e(2150,"Propriedade incompat\xEDvel quando "),i(2151,"strong"),e(2152,"t-virtual-scroll"),t(),e(2153," est\xE1 habilitado."),t()()()(),i(2154,"tr",19)(2155,"td",20)(2156,"div",32)(2157,"span",33),e(2158," (t-unselected)"),a(2159,"br"),t()()(),i(2160,"td",23)(2161,"code",34),e(2162,"EventEmitter"),t()(),i(2163,"td",25),e(2164,"-"),t(),i(2165,"td",26)(2166,"em")(2167,"strong"),e(2168,"(opcional)"),t()(),i(2169,"p"),e(2170,"Evento disparado quando desselecionado um item. Retorna o item desselecionado."),t()()(),i(2171,"tr",19)(2172,"td",20)(2173,"div",32)(2174,"span",33),e(2175," (t-all-unselected)"),a(2176,"br"),t()()(),i(2177,"td",23)(2178,"code",34),e(2179,"EventEmitter"),t()(),i(2180,"td",25),e(2181,"-"),t(),i(2182,"td",26)(2183,"em")(2184,"strong"),e(2185,"(opcional)"),t()(),i(2186,"p"),e(2187,"Evento disparado quando desselecionado todos os itens. Retorna um array com todos os itens desselecionados."),t()()(),i(2188,"tr",19)(2189,"td",20)(2190,"div",21)(2191,"span",22),e(2192,"t-virtual-columns"),a(2193,"br"),t()()(),i(2194,"td",23)(2195,"code",24),e(2196,"boolean"),t()(),i(2197,"td",25)(2198,"p")(2199,"code"),e(2200,"false"),t()()(),i(2201,"td",26)(2202,"em")(2203,"strong"),e(2204,"(opcional)"),t()(),i(2205,"p"),e(2206,`Define o uso do virtual columns no grid para melhorar a performance com grande volume de colunas.
Recomendamos a utiliza\xE7\xE3o dessa propriedade somente em caso de perda de performance com grande quantidade de colunas.
Existe incompatibilidade com a propriedade `),i(2207,"strong"),e(2208,"t-auto-size"),t(),e(2209," e m\xE9todo "),i(2210,"strong"),e(2211,"autoFitColumns()"),t(),e(2212,`.
Caso a grid tenha mais de 50 colunas o virtual-columns \xE9 ativado.`),t()()(),i(2213,"tr",19)(2214,"td",20)(2215,"div",21)(2216,"span",22),e(2217,"t-virtual-scroll"),a(2218,"br"),t()()(),i(2219,"td",23)(2220,"code",24),e(2221,"boolean"),t()(),i(2222,"td",25)(2223,"p")(2224,"code"),e(2225,"true"),t()()(),i(2226,"td",26)(2227,"em")(2228,"strong"),e(2229,"(opcional)"),t()(),i(2230,"p"),e(2231,`Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados.
Requer que a propriedade `),i(2232,"strong"),e(2233,"t-height"),t(),e(2234," esteja definida."),t(),i(2235,"blockquote")(2236,"p"),e(2237,"Verificar a documenta\xE7\xE3o das seguintes propriedades: "),i(2238,"strong"),e(2239,"t-text-wrap"),t(),e(2240,", "),i(2241,"strong"),e(2242,"t-row-height"),t(),e(2243," e "),i(2244,"strong"),e(2245,"t-page-size-virtual"),t(),e(2246,"."),t()()()()()(),i(2247,"po-accordion-item",62)(2248,"table",63)(2249,"tr",19)(2250,"th",64)(2251,"div",21)(2252,"h4")(2253,"span",22),e(2254," autoFitColumns "),t()()()()(),i(2255,"tr",26)(2256,"td",26)(2257,"p"),e(2258,"Ajusta automaticamente a largura das colunas com base no conte\xFAdo atual das c\xE9lulas."),t(),i(2259,"p"),e(2260,`Este m\xE9todo calcula a largura ideal para cada coluna considerando o conte\xFAdo textual das c\xE9lulas vis\xEDveis,
cabe\xE7alhos das colunas e configura\xE7\xF5es de redimensionamento e tamanho fixo`),t(),i(2261,"p")(2262,"strong"),e(2263,"Exemplo de uso:"),t()(),i(2264,"pre")(2265,"code",31),e(2266,`// Ajusta colunas e mant\xE9m largura total da tabela
this.gridComponent.autoFitColumns(true);

// Ajusta colunas e permite redimensionamento fluido
this.gridComponent.autoFitColumns();`),t()(),i(2267,"blockquote")(2268,"p"),e(2269,"Este m\xE9todo \xE9 chamado automaticamente quando:"),t(),i(2270,"ul")(2271,"li"),e(2272,"A propriedade "),i(2273,"code"),e(2274,"t-auto-size"),t(),e(2275," \xE9 habilitada"),t(),i(2276,"li"),e(2277,"O evento "),i(2278,"code"),e(2279,"t-auto-size-on-scroll"),t(),e(2280," \xE9 disparado durante scroll virtual"),t()()()()()(),i(2281,"h5")(2282,"b"),e(2283,"Par\xE2metros"),t()(),i(2284,"table",16)(2285,"tr",17)(2286,"th",18),e(2287,"Nome"),t(),i(2288,"th",18),e(2289,"Tipo"),t(),i(2290,"th",18),e(2291,"Descri\xE7\xE3o"),t()(),i(2292,"tr",19)(2293,"td",20),e(2294," recalculate"),t(),i(2295,"td",23)(2296,"code",65),e(2297," boolean "),t()(),i(2298,"td",26)(2299,"p"),e(2300,"Quando "),i(2301,"code"),e(2302,"true"),t(),e(2303,`, mant\xE9m a largura total da tabela ap\xF3s o ajuste.
Quando `),i(2304,"code"),e(2305,"false"),t(),e(2306," ou omitido, limpa a largura fixa da tabela para permitir redimensionamento fluido."),t()()()(),a(2307,"br"),i(2308,"table",63)(2309,"tr",19)(2310,"th",64)(2311,"div",21)(2312,"h4")(2313,"span",22),e(2314," cleanRowActionsMode "),t()()()()(),i(2315,"tr",26)(2316,"td",26)(2317,"p"),e(2318,"Aplica o estado default aos itens editados, inclu\xEDdos e removidos do grid."),t(),i(2319,"p"),e(2320,`Usado para aplicar as altera\xE7\xF5es realizadas nos registros do grid, e tamb\xE9m
para remover os itens marcados para exclus\xE3o, de acordo com os par\xE2metros fornecidos.`),t(),i(2321,"pre")(2322,"code"),e(2323,`// Aplica o estado de edi\xE7\xE3o e inclus\xE3o, removendo os itens com $removed
this.cleanRowActionsMode();

// Aplica apenas as edi\xE7\xF5es, sem alterar as inclus\xF5es e exclus\xF5es
this.cleanRowActionsMode(true, false, false);

// Remove apenas os itens com $removed, sem aplicar edi\xE7\xF5es e inclus\xF5es
this.cleanRowActionsMode(false, false, true);`),t()(),i(2324,"p"),e(2325,`Exemplo de uso:
Se voc\xEA precisa aplicar o estado de todas as a\xE7\xF5es de linha, como edi\xE7\xE3o, inclus\xE3o e
remo\xE7\xE3o, basta chamar esta fun\xE7\xE3o. Por exemplo, se houver uma a\xE7\xE3o de aplicar o grid ao
salvar os dados, voc\xEA pode us\xE1-lo da seguinte forma:`),t(),i(2326,"pre")(2327,"code",31),e(2328,`// Ap\xF3s salvar os dados na API, voc\xEA pode limpar todos os estados de a\xE7\xE3o de linha
this.myService.saveData(this.thfGrid.getChangedItems()).subscribe(() => {
  this.thfGrid.cleanRowActionsMode(); // Limpa todas as a\xE7\xF5es de linha ap\xF3s salvar
  console.log('A\xE7\xF5es de linha limpas.');
});`),t()()()()(),i(2329,"h5")(2330,"b"),e(2331,"Par\xE2metros"),t()(),i(2332,"table",16)(2333,"tr",17)(2334,"th",18),e(2335,"Nome"),t(),i(2336,"th",18),e(2337,"Tipo"),t(),i(2338,"th",18),e(2339,"Descri\xE7\xE3o"),t()(),i(2340,"tr",19)(2341,"td",20),e(2342," edit"),t(),i(2343,"td",23)(2344,"code",65),e(2345," boolean "),t()(),i(2346,"td",26)(2347,"p"),e(2348,"Indica se deve aplicar as edi\xE7\xF5es realizadas nas linhas."),t()()(),i(2349,"tr",19)(2350,"td",20),e(2351," include"),t(),i(2352,"td",23)(2353,"code",65),e(2354," boolean "),t()(),i(2355,"td",26)(2356,"p"),e(2357,"Indica se deve aplicar as inclus\xF5es de novas linhas."),t()()(),i(2358,"tr",19)(2359,"td",20),e(2360," del"),t(),i(2361,"td",23)(2362,"code",65),e(2363," boolean "),t()(),i(2364,"td",26)(2365,"p"),e(2366,"Indica se deve remover as linhas marcadas para exclus\xE3o."),t()()()(),a(2367,"br"),i(2368,"table",63)(2369,"tr",19)(2370,"th",64)(2371,"div",21)(2372,"h4")(2373,"span",22),e(2374," deleteItems "),t()()()()(),i(2375,"tr",26)(2376,"td",26)(2377,"p"),e(2378,"Respons\xE1vel pela exclus\xE3o de itens selecionados."),t(),i(2379,"p"),e(2380,"Quando "),i(2381,"strong"),e(2382,"t-items"),t(),e(2383,` est\xE1 definido, a remo\xE7\xE3o pode ser feita em lote, excluindo todas as linhas selecionadas localmente.
Se utilizado com um servi\xE7o (`),i(2384,"strong"),e(2385,"t-service-api"),t(),e(2386," e/ou "),i(2387,"strong"),e(2388,"t-service-delete-api"),t(),e(2389,"), a exclus\xE3o permitida \xE9 de um item por vez."),t(),i(2390,"blockquote")(2391,"p"),e(2392,'Caso utilizado com a "edi\xE7\xE3o flu\xEDda offline via formul\xE1rio (propriedade '),i(2393,"strong"),e(2394,"t-grid-row-actions"),t(),e(2395,`)" remove localmente
as linhas sinalizadas com `),i(2396,"code"),e(2397,"$removed"),t(),e(2398,"."),t()(),i(2399,"blockquote")(2400,"p"),e(2401,"\xC9 poss\xEDvel habilitar a exclus\xE3o em lote com servi\xE7os remotos utilizando a propriedade "),i(2402,"strong"),e(2403,"t-allow-batch-delete"),t(),e(2404," em conjunto com "),i(2405,"strong"),e(2406,"t-service-api"),t(),e(2407," e/ou "),i(2408,"strong"),e(2409,"t-service-delete-api"),t(),e(2410,"."),t()()()()(),a(2411,"br"),i(2412,"table",63)(2413,"tr",19)(2414,"th",64)(2415,"div",21)(2416,"h4")(2417,"span",22),e(2418," getChangedItems "),t()()()()(),i(2419,"tr",26)(2420,"td",26)(2421,"p"),e(2422,"Retorna uma lista dos itens que foram modificados no grid, com a propriedade "),i(2423,"code"),e(2424,"op"),t(),e(2425,` indicando
a a\xE7\xE3o executada sobre cada item, podendo ser 'remove', 'add' ou 'replace'.`),t(),i(2426,"pre")(2427,"code"),e(2428,`// Exemplo de uso:
const changedItems = this.getChangedItems();
console.log(changedItems);
// Sa\xEDda esperada: [{ id: 1, name: 'Item 1', op: 'replace' }, { id: 2, name: 'Item 2', op: 'remove' }]`),t()()()()(),i(2429,"h5")(2430,"b"),e(2431,"Retorno"),t()(),i(2432,"table",16)(2433,"tr",17)(2434,"th",18),e(2435,"Tipo"),t(),i(2436,"th",18),e(2437,"Descri\xE7\xE3o"),t()(),i(2438,"tr",19)(2439,"td",23)(2440,"code",65),e(2441,"Array<any>"),t()(),i(2442,"td",26)(2443,"p"),e(2444,"Uma lista de objetos representando os itens modificados. Cada objeto ter\xE1 a propriedade "),i(2445,"code"),e(2446,"op"),t(),e(2447," que indica a a\xE7\xE3o realizada"),t()()()(),a(2448,"br"),i(2449,"table",63)(2450,"tr",19)(2451,"th",64)(2452,"div",21)(2453,"h4")(2454,"span",22),e(2455," getSelectedRows "),t()()()()(),i(2456,"tr",26)(2457,"td",26)(2458,"p"),e(2459,"Respons\xE1vel por retornar os itens do grid que est\xE3o selecionadas."),t()()()(),a(2460,"br"),i(2461,"table",63)(2462,"tr",19)(2463,"th",64)(2464,"div",21)(2465,"h4")(2466,"span",22),e(2467," showAdditionalHelp "),t()()()()(),i(2468,"tr",26)(2469,"td",26)(2470,"p"),e(2471,"Exibe o conte\xFAdo da propriedade "),i(2472,"code"),e(2473,"helper"),t(),e(2474," durante a edi\xE7\xE3o ("),i(2475,"code"),e(2476,"t-edit-properties"),t(),e(2477," ou "),i(2478,"code"),e(2479,"t-grid-row-actions"),t(),e(2480,`) do grid.
Para isso, ser\xE1 necess\xE1rio ter uma inst\xE2ncia do componente no DOM e configurar uma tecla de atalho utilizando o evento `),i(2481,"code"),e(2482,"t-keydown"),t(),e(2483,"."),t(),i(2484,"pre")(2485,"code"),e(2486,`import { ThfGridComponent } from '@totvs/thf-components';
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
}`),t()(),i(2487,"blockquote")(2488,"p"),e(2489,`Com t-grid-row-actions: Alguns atalhos j\xE1 est\xE3o em uso, ent\xE3o, evite sobrescrev\xEA-los. Para mais detalhes,
consulte o `),i(2490,"a",66),e(2491,"TDN"),t(),e(2492,"."),t()()()()(),i(2493,"h5")(2494,"b"),e(2495,"Par\xE2metros"),t()(),i(2496,"table",16)(2497,"tr",17)(2498,"th",18),e(2499,"Nome"),t(),i(2500,"th",18),e(2501,"Tipo"),t(),i(2502,"th",18),e(2503,"Descri\xE7\xE3o"),t()(),i(2504,"tr",19)(2505,"td",20),e(2506," property"),t(),i(2507,"td",23)(2508,"code",65),e(2509," string "),t()(),i(2510,"td",26)(2511,"p"),e(2512,"Identificador da coluna."),t()()()(),a(2513,"br"),i(2514,"table",63)(2515,"tr",19)(2516,"th",64)(2517,"div",21)(2518,"h4")(2519,"span",22),e(2520," selectRowItem "),t()()()()(),i(2521,"tr",26)(2522,"td",26)(2523,"p"),e(2524,"Seleciona um item do grid."),t()()()(),i(2525,"h5")(2526,"b"),e(2527,"Par\xE2metros"),t()(),i(2528,"table",16)(2529,"tr",17)(2530,"th",18),e(2531,"Nome"),t(),i(2532,"th",18),e(2533,"Tipo"),t(),i(2534,"th",18),e(2535,"Descri\xE7\xE3o"),t()(),i(2536,"tr",19)(2537,"td",20),e(2538," item"),t(),i(2539,"td",23)(2540,"code",67),e(2541," { key: value } "),t(),i(2542,"code",27),e(2543," Function "),t()(),i(2544,"td",26)(2545,"p"),e(2546,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),a(2547,"br"),i(2548,"table",63)(2549,"tr",19)(2550,"th",64)(2551,"div",21)(2552,"h4")(2553,"span",22),e(2554," unselectRowItem "),t()()()()(),i(2555,"tr",26)(2556,"td",26)(2557,"p"),e(2558,"Desmarca o item que est\xE1 selecionado."),t()()()(),i(2559,"h5")(2560,"b"),e(2561,"Par\xE2metros"),t()(),i(2562,"table",16)(2563,"tr",17)(2564,"th",18),e(2565,"Nome"),t(),i(2566,"th",18),e(2567,"Tipo"),t(),i(2568,"th",18),e(2569,"Descri\xE7\xE3o"),t()(),i(2570,"tr",19)(2571,"td",20),e(2572," item"),t(),i(2573,"td",23)(2574,"code",67),e(2575," { key: value } "),t(),i(2576,"code",27),e(2577," Function "),t()(),i(2578,"td",26)(2579,"p"),e(2580,"Item ou fun\xE7\xE3o que recebe como par\xE2metro o item e retorna um boolean."),t()()()(),a(2581,"br"),i(2582,"table",63)(2583,"tr",19)(2584,"th",64)(2585,"div",21)(2586,"h4")(2587,"span",22),e(2588," applyFilters "),t()()()()(),i(2589,"tr",26)(2590,"td",26)(2591,"p"),e(2592,"M\xE9todo respons\xE1vel por realizar busca no servi\xE7o de dados podendo informar filtros e com o retorno, atualiza o grid."),t(),i(2593,"p"),e(2594,"Caso n\xE3o seja informado par\xE2metro, nada ser\xE1 adicionado ao GET, conforme abaixo:"),t(),i(2595,"pre")(2596,"code"),e(2597,"url + ?page=1&pageSize=10"),t()(),i(2598,"blockquote")(2599,"p"),e(2600,"Obs: os par\xE2metros "),i(2601,"code"),e(2602,"page"),t(),e(2603," e "),i(2604,"code"),e(2605,"pageSize"),t(),e(2606," sempre ser\xE3o chamados independente de ser enviados outros par\xE2metros."),t()(),i(2607,"p"),e(2608,"Caso sejam informados os par\xE2metros "),i(2609,"code"),e(2610,"{ name: 'JOHN', age: '23' }"),t(),e(2611,", todos ser\xE3o adicionados ao GET, conforme abaixo:"),t(),i(2612,"pre")(2613,"code"),e(2614,"url + ?page=1&pageSize=10&name=JOHN&age=23"),t()()()()(),i(2615,"h5")(2616,"b"),e(2617,"Par\xE2metros"),t()(),i(2618,"table",16)(2619,"tr",17)(2620,"th",18),e(2621,"Nome"),t(),i(2622,"th",18),e(2623,"Tipo"),t(),i(2624,"th",18),e(2625,"Descri\xE7\xE3o"),t()(),i(2626,"tr",19)(2627,"td",20),e(2628," queryParams"),t(),i(2629,"td",23)(2630,"code",67),e(2631," { key: value } "),t()(),i(2632,"td",26)(2633,"p"),e(2634,"Formato do objeto a ser enviado."),t(),i(2635,"blockquote")(2636,"p"),e(2637,"Pode ser utilizada qualquer string como key, e qualquer string ou number como value."),t()()()()(),a(2638,"br"),i(2639,"table",63)(2640,"tr",19)(2641,"th",64)(2642,"div",21)(2643,"h4")(2644,"span",22),e(2645," calculateHeightDynamically "),t()()()()(),i(2646,"tr",26)(2647,"td",26)(2648,"p"),e(2649,"Mant\xE9m compatibilidade com vers\xF5es anteriores, chamando "),i(2650,"code"),e(2651,"calculateDynamicSize"),t(),e(2652," com a propriedade "),i(2653,"code"),e(2654,"'height'"),t(),e(2655,"."),t()()()(),i(2656,"h5")(2657,"b"),e(2658,"Par\xE2metros"),t()(),i(2659,"table",16)(2660,"tr",17)(2661,"th",18),e(2662,"Nome"),t(),i(2663,"th",18),e(2664,"Tipo"),t(),i(2665,"th",18),e(2666,"Descri\xE7\xE3o"),t()(),i(2667,"tr",19)(2668,"td",20),e(2669," callRowHeight"),t(),a(2670,"td",23),i(2671,"td",26)(2672,"p"),e(2673,"Define se o "),i(2674,"code"),e(2675,"calculateRowHeight"),t(),e(2676," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),a(2677,"br"),i(2678,"table",63)(2679,"tr",19)(2680,"th",64)(2681,"div",21)(2682,"h4")(2683,"span",22),e(2684," removeItem "),t()()()()(),i(2685,"tr",26)(2686,"td",26)(2687,"p"),e(2688,"Remove um item localmente do grid."),t()()()(),i(2689,"h5")(2690,"b"),e(2691,"Par\xE2metros"),t()(),i(2692,"table",16)(2693,"tr",17)(2694,"th",18),e(2695,"Nome"),t(),i(2696,"th",18),e(2697,"Tipo"),t(),i(2698,"th",18),e(2699,"Descri\xE7\xE3o"),t()(),i(2700,"tr",19)(2701,"td",20),e(2702," item"),t(),i(2703,"td",23)(2704,"code",52),e(2705," number "),t(),i(2706,"code",67),e(2707," { key: value } "),t()(),i(2708,"td",26)(2709,"p"),e(2710,"\xCDndice ou item que ser\xE1 removido."),t(),i(2711,"blockquote")(2712,"p"),e(2713,"Ao remover o item, a linha que o representa ser\xE1 removida do grid."),t()()()()(),a(2714,"br"),i(2715,"table",63)(2716,"tr",19)(2717,"th",64)(2718,"div",21)(2719,"h4")(2720,"span",22),e(2721," unselectRows "),t()()()()(),i(2722,"tr",26)(2723,"td",26)(2724,"p"),e(2725,"M\xE9todo respons\xE1vel por desmarcar as linhas que est\xE3o selecionadas."),t()()()(),a(2726,"br"),i(2727,"table",63)(2728,"tr",19)(2729,"th",64)(2730,"div",21)(2731,"h4")(2732,"span",22),e(2733," getInfoProperties "),t()()()()(),i(2734,"tr",26)(2735,"td",26)(2736,"p"),e(2737,"M\xE9todo que retorna informa\xE7\xF5es sobre os itens atuais da tabela."),t(),i(2738,"p"),e(2739,"Inclui:"),t(),i(2740,"ul")(2741,"li")(2742,"code"),e(2743,"items"),t(),e(2744,": lista de itens atualmente carregados na tabela."),t(),i(2745,"li")(2746,"code"),e(2747,"total"),t(),e(2748,": total de itens informado pela API atrav\xE9s da propriedade "),i(2749,"code"),e(2750,"total"),t(),e(2751,"; pode ser "),i(2752,"code"),e(2753,"undefined"),t(),e(2754," caso a API n\xE3o informe."),t(),i(2755,"li")(2756,"code"),e(2757,"page"),t(),e(2758,": n\xFAmero da p\xE1gina atual informado pela API ("),i(2759,"code"),e(2760,"itemsByApi.page"),t(),e(2761,"); se n\xE3o existir, utiliza a propriedade local "),i(2762,"code"),e(2763,"page"),t(),e(2764,"."),t(),i(2765,"li")(2766,"code"),e(2767,"pageSize"),t(),e(2768,": quantidade de itens por p\xE1gina informada pela API ("),i(2769,"code"),e(2770,"itemsByApi.pageSize"),t(),e(2771,"); se n\xE3o existir, utiliza a propriedade local "),i(2772,"code"),e(2773,"pageSize"),t(),e(2774,"."),t()()()()(),a(2775,"br"),i(2776,"table",63)(2777,"tr",19)(2778,"th",64)(2779,"div",21)(2780,"h4")(2781,"span",22),e(2782," updateItem "),t()()()()(),i(2783,"tr",26)(2784,"td",26)(2785,"p"),e(2786,"Atualiza um item do grid quando utilizado "),i(2787,"strong"),e(2788,"t-itens"),t(),e(2789,"."),t()()()(),i(2790,"h5")(2791,"b"),e(2792,"Par\xE2metros"),t()(),i(2793,"table",16)(2794,"tr",17)(2795,"th",18),e(2796,"Nome"),t(),i(2797,"th",18),e(2798,"Tipo"),t(),i(2799,"th",18),e(2800,"Descri\xE7\xE3o"),t()(),i(2801,"tr",19)(2802,"td",20),e(2803," item"),t(),i(2804,"td",23)(2805,"code",52),e(2806," number "),t(),i(2807,"code",67),e(2808," { key: value } "),t()(),i(2809,"td",26)(2810,"p"),e(2811,"\xCDndice ou o item que ser\xE1 atualizado."),t()()(),i(2812,"tr",19)(2813,"td",20),e(2814," updatedItem"),t(),i(2815,"td",23)(2816,"code",67),e(2817," { key: value } "),t()(),i(2818,"td",26)(2819,"p"),e(2820,"Item que foi atualizado."),t(),i(2821,"blockquote")(2822,"p"),e(2823,"Ao atualizar o item, a informa\xE7\xE3o ser\xE1 alterada no grid."),t()()()()(),a(2824,"br"),i(2825,"table",63)(2826,"tr",19)(2827,"th",64)(2828,"div",21)(2829,"h4")(2830,"span",22),e(2831," calculateDynamicSize "),t()()()()(),i(2832,"tr",26)(2833,"td",26)(2834,"p"),e(2835,"calcula dinamicamente o tamanho da grid com base na porcentagem definida nas propriedades "),i(2836,"strong"),e(2837,"t-height"),t(),e(2838,`,
`),i(2839,"strong"),e(2840,"t-min-height"),t(),e(2841," e "),i(2842,"strong"),e(2843,"t-max-height"),t(),e(2844,"."),t(),i(2845,"p"),e(2846,`Caso a grid esteja dentro de um componente ou elemento que altere sua visibilidade,
\xE9 necess\xE1rio chamar esta fun\xE7\xE3o para garantir um c\xE1lculo correto. Exemplo:`),t(),i(2847,"pre")(2848,"code",28),e(2849,`<po-tabs>
 <po-tab (p-click)="emitClickTab()" p-label="PO Tabs">
   <thf-grid #thfGrid> </thf-grid>
 </po-tab>
</po-tabs>`),t()(),i(2850,"pre")(2851,"code",31),e(2852,`@ViewChild('thfGrid') thfGrid: ThfGridComponent;

emitClickTab() {
 // Time-out necess\xE1rio para garantir que o DOM foi atualizado antes do c\xE1lculo da altura.
 setTimeout(() => {
   this.thfGrid.calculateDynamicSize('height', true);
 }, 100);
}`),t()()()()(),i(2853,"h5")(2854,"b"),e(2855,"Par\xE2metros"),t()(),i(2856,"table",16)(2857,"tr",17)(2858,"th",18),e(2859,"Nome"),t(),i(2860,"th",18),e(2861,"Tipo"),t(),i(2862,"th",18),e(2863,"Descri\xE7\xE3o"),t()(),i(2864,"tr",19)(2865,"td",20),e(2866," property"),t(),a(2867,"td",23),i(2868,"td",26)(2869,"p"),e(2870,"Define qual propriedade ser\xE1 calculada: "),i(2871,"code"),e(2872,"'height'"),t(),e(2873,", "),i(2874,"code"),e(2875,"'minHeight'"),t(),e(2876," ou "),i(2877,"code"),e(2878,"'maxHeight'"),t(),e(2879,"."),t()()(),i(2880,"tr",19)(2881,"td",20),e(2882," callRowHeight"),t(),a(2883,"td",23),i(2884,"td",26)(2885,"p"),e(2886,"Define se o m\xE9todo "),i(2887,"code"),e(2888,"calculateRowHeight"),t(),e(2889," deve ser chamado ap\xF3s o c\xE1lculo do tamanho."),t()()()(),a(2890,"br"),i(2891,"table",63)(2892,"tr",19)(2893,"th",64)(2894,"div",21)(2895,"h4")(2896,"span",22),e(2897," isColumnRequired "),t()()()()(),i(2898,"tr",26)(2899,"td",26)(2900,"p"),e(2901,"Verifica se uma coluna \xE9 obrigat\xF3ria na propriedade "),i(2902,"code"),e(2903,"editProperties"),t(),e(2904," ou no "),i(2905,"code"),e(2906,"formGroupIntern"),t()()()()(),a(2907,"br"),i(2908,"table",63)(2909,"tr",19)(2910,"th",64)(2911,"div",21)(2912,"h4")(2913,"span",22),e(2914," setRowStateFilter "),t()()()()(),i(2915,"tr",26)(2916,"td",26)(2917,"p"),e(2918,"Define o filtro de estado das linhas a ser aplicado na exibi\xE7\xE3o da grid."),t(),i(2919,"p"),e(2920,`Este m\xE9todo permite alternar entre a visualiza\xE7\xE3o de itens ativos (n\xE3o removidos) e itens removidos,
filtrando a grid com base na propriedade `),i(2921,"code"),e(2922,"$removed"),t(),e(2923,` dos itens. \xC9 utilizado principalmente em conjunto
com o recurso de edi\xE7\xE3o fluida offline (`),i(2924,"strong"),e(2925,"t-grid-row-actions"),t(),e(2926,")."),t(),i(2927,"p"),e(2928,"Quando o filtro \xE9 alterado:"),t(),i(2929,"ul")(2930,"li"),e(2931,"A grid \xE9 filtrada para exibir apenas os itens que correspondem ao estado selecionado"),t(),i(2932,"li"),e(2933,"A pagina\xE7\xE3o \xE9 reiniciada ("),i(2934,"code"),e(2935,"skip = 0"),t(),e(2936,")"),t(),i(2937,"li"),e(2938,"O label do filtro \xE9 atualizado"),t(),i(2939,"li"),e(2940,"Os agregados totais s\xE3o recalculados"),t(),i(2941,"li"),e(2942,"A sele\xE7\xE3o pode ser desabilitada (no caso de itens removidos)"),t()(),i(2943,"pre")(2944,"code",31),e(2945,`// Exibe apenas itens ativos (n\xE3o removidos)
this.thfGrid.setRowStateFilter('active');

// Exibe apenas itens removidos, for\xE7ando recarregamento da grid
this.thfGrid.setRowStateFilter('removed', true);

// Exibe apenas itens ativos (n\xE3o removidos), sem emitir evento
this.thfGrid.setRowStateFilter('active', false, false);`),t()(),i(2946,"blockquote")(2947,"p"),e(2948,"Quando o filtro \xE9 alterado para "),i(2949,"code"),e(2950,"'removed'"),t(),e(2951,", a sele\xE7\xE3o de linhas \xE9 desabilitada automaticamente."),t(),i(2952,"p"),e(2953,"Ao retornar para "),i(2954,"code"),e(2955,"'active'"),t(),e(2956,", a sele\xE7\xE3o \xE9 restaurada ao seu estado inicial."),t()()()()(),i(2957,"h5")(2958,"b"),e(2959,"Par\xE2metros"),t()(),i(2960,"table",16)(2961,"tr",17)(2962,"th",18),e(2963,"Nome"),t(),i(2964,"th",18),e(2965,"Tipo"),t(),i(2966,"th",18),e(2967,"Descri\xE7\xE3o"),t()(),i(2968,"tr",19)(2969,"td",20),e(2970," filter"),t(),i(2971,"td",23)(2972,"code",68),e(2973," ('active' "),t(),i(2974,"code",69),e(2975," 'removed') "),t()(),i(2976,"td",26)(2977,"p"),e(2978,"Define qual filtro ser\xE1 aplicado:"),t(),i(2979,"ul")(2980,"li")(2981,"code"),e(2982,"'active'"),t(),e(2983,": Exibe apenas itens n\xE3o removidos ("),i(2984,"code"),e(2985,"$removed !== true"),t(),e(2986,")"),t(),i(2987,"li")(2988,"code"),e(2989,"'removed'"),t(),e(2990,": Exibe apenas itens marcados para remo\xE7\xE3o ("),i(2991,"code"),e(2992,"$removed === true"),t(),e(2993,")"),t()()()(),i(2994,"tr",19)(2995,"td",20),e(2996," reloadGrid"),t(),i(2997,"td",23)(2998,"code",65),e(2999," boolean "),t()(),i(3e3,"td",26)(3001,"p"),e(3002,"Indica se a grid deve ser recarregada visualmente:"),t(),i(3003,"ul")(3004,"li"),e(3005,"Quando "),i(3006,"code"),e(3007,"true"),t(),e(3008,", desmarca todas as sele\xE7\xF5es, limpa itens selecionados e for\xE7a uma renderiza\xE7\xE3o completa da grid"),t(),i(3009,"li"),e(3010,"Quando "),i(3011,"code"),e(3012,"false"),t(),e(3013,", apenas aplica o filtro sem recarregar a grid"),t()()()(),i(3014,"tr",19)(3015,"td",20),e(3016," emitEvent"),t(),i(3017,"td",23)(3018,"code",65),e(3019," boolean "),t()(),i(3020,"td",26)(3021,"p"),e(3022,"Indica se o evento "),i(3023,"code"),e(3024,"changeRowStateFilter"),t(),e(3025," deve ser emitido ap\xF3s a altera\xE7\xE3o do filtro:"),t(),i(3026,"ul")(3027,"li"),e(3028,"Quando "),i(3029,"code"),e(3030,"true"),t(),e(3031,", o evento \xE9 emitido com o novo valor do filtro"),t(),i(3032,"li"),e(3033,"Quando "),i(3034,"code"),e(3035,"false"),t(),e(3036,", o evento n\xE3o \xE9 emitido"),t()()()()(),a(3037,"br"),i(3038,"table",63)(3039,"tr",19)(3040,"th",64)(3041,"div",21)(3042,"h4")(3043,"span",22),e(3044," getDestructiveModalTitle "),t()()()()(),i(3045,"tr",26)(3046,"td",26)(3047,"p"),e(3048,"Retorna o t\xEDtulo do modal destrutivo com base no tipo de a\xE7\xE3o"),t()()()(),a(3049,"br"),t()()(),T(3050,2),t(),i(3051,"po-tab",70),T(3052,3),i(3053,"po-container",5)(3054,"po-accordion",6)(3055,"po-accordion-item",71)(3056,"h4",9)(3057,"code"),e(3058,"ThfTableAction"),t()(),i(3059,"div",10)(3060,"p"),e(3061," Interface para configura\xE7\xE3o das a\xE7\xF5es."),t()(),i(3062,"h4",15),e(3063,"Propriedades"),t(),i(3064,"table",16)(3065,"tr",17)(3066,"th",18),e(3067,"Nome"),t(),i(3068,"th",18),e(3069,"Tipo"),t(),i(3070,"th",18),e(3071,"Descri\xE7\xE3o"),t()(),i(3072,"tr",19)(3073,"td",20)(3074,"div",21)(3075,"span",22),e(3076," action"),a(3077,"br"),t()()(),i(3078,"td",23)(3079,"code",27),e(3080,"Function"),t()(),i(3081,"td",26)(3082,"em")(3083,"strong"),e(3084,"(opcional)"),t()(),i(3085,"p"),e(3086,"A\xE7\xE3o que ser\xE1 executada, sendo poss\xEDvel passar o nome ou a refer\xEAncia da fun\xE7\xE3o."),t(),i(3087,"p"),e(3088,"No componente "),i(3089,"code"),e(3090,"po-dropdown"),t(),e(3091,", a action tamb\xE9m pode ser executada para o agrupador de subitens."),t(),i(3092,"blockquote")(3093,"p"),e(3094,"Para que a fun\xE7\xE3o seja executada no contexto do elemento filho o mesmo deve ser passado utilizando "),i(3095,"em"),e(3096,"bind"),t(),e(3097,"."),t()(),i(3098,"p"),e(3099,"Exemplo: "),i(3100,"code"),e(3101,"action: this.myFunction.bind(this)"),t()()()(),i(3102,"tr",19)(3103,"td",20)(3104,"div",21)(3105,"span",22),e(3106," disabled"),a(3107,"br"),t()()(),i(3108,"td",23)(3109,"code",24),e(3110,"boolean "),t(),i(3111,"code",27),e(3112," Function"),t()(),i(3113,"td",26)(3114,"em")(3115,"strong"),e(3116,"(opcional)"),t()(),i(3117,"p"),e(3118,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar a a\xE7\xE3o para o registro selecionado."),t(),i(3119,"p"),e(3120,"Tamb\xE9m \xE9 poss\xEDvel informar diretamente um valor booleano que vai habilitar ou desabilitar a a\xE7\xE3o para todos os registros."),t()()(),i(3121,"tr",19)(3122,"td",20)(3123,"div",21)(3124,"span",22),e(3125," fixed"),a(3126,"br"),t()()(),i(3127,"td",23)(3128,"code",24),e(3129,"boolean"),t()(),i(3130,"td",26)(3131,"em")(3132,"strong"),e(3133,"(opcional)"),t()(),i(3134,"p"),e(3135,"Propriedade para fixar a a\xE7\xE3o"),t()()(),i(3136,"tr",19)(3137,"td",20)(3138,"div",21)(3139,"span",22),e(3140," icon"),a(3141,"br"),t()()(),i(3142,"td",23)(3143,"code",40),e(3144,"string "),t(),i(3145,"code",51),e(3146," TemplateRef<void>"),t()(),i(3147,"td",26)(3148,"em")(3149,"strong"),e(3150,"(opcional)"),t()(),i(3151,"p"),e(3152,"Define um \xEDcone que ser\xE1 exibido ao lado esquerdo do r\xF3tulo."),t(),i(3153,"p"),e(3154,"\xC9 poss\xEDvel usar qualquer um dos \xEDcones da "),i(3155,"a",72),e(3156,"Biblioteca de \xEDcones"),t(),e(3157,". conforme exemplo abaixo:"),t(),i(3158,"pre")(3159,"code"),e(3160,`<po-component
 [p-property]="[{ label: 'PHOSPHOR ICON', icon: 'an an-newspaper' }]">
</po-component>`),t()(),i(3161,"p"),e(3162,"Tamb\xE9m \xE9 poss\xEDvel utilizar outras fontes de \xEDcones, por exemplo a biblioteca Font Awesome, da seguinte forma:"),t(),i(3163,"pre")(3164,"code"),e(3165,`<po-component
 [p-property]="[{ label: 'FA ICON', icon: 'fa fa-icon-podcast' }]">
</po-component>`),t()(),i(3166,"p"),e(3167,"Outra op\xE7\xE3o seria a customiza\xE7\xE3o do \xEDcone atrav\xE9s do "),i(3168,"code"),e(3169,"TemplateRef"),t(),e(3170,`, conforme exemplo abaixo:
component.html:`),t(),i(3171,"pre")(3172,"code"),e(3173,`<ng-template #iconTemplate>
  <ion-icon name="heart"></ion-icon>
</ng-template>

<po-component [p-property]="myProperty"></po-component>`),t()(),i(3174,"p"),e(3175,"component.ts:"),t(),i(3176,"pre")(3177,"code"),e(3178,`@ViewChild('iconTemplate', { static: true } ) iconTemplate : TemplateRef<void>;

myProperty = [
 {
   label: 'FA ICON',
   icon: this.iconTemplate
 }
];`),t()()()(),i(3179,"tr",19)(3180,"td",20)(3181,"div",21)(3182,"span",22),e(3183," label"),a(3184,"br"),t()()(),i(3185,"td",23)(3186,"code",40),e(3187,"string"),t()(),i(3188,"td",26)(3189,"p"),e(3190,"R\xF3tulo da a\xE7\xE3o."),t(),i(3191,"p"),e(3192,"No componente "),i(3193,"code"),e(3194,"po-dropdown"),t(),e(3195,", a label tamb\xE9m pode representar o agrupador de subitens."),t()()(),i(3196,"tr",19)(3197,"td",20)(3198,"div",21)(3199,"span",22),e(3200," selected"),a(3201,"br"),t()()(),i(3202,"td",23)(3203,"code",24),e(3204,"boolean"),t()(),i(3205,"td",26)(3206,"em")(3207,"strong"),e(3208,"(opcional)"),t()(),i(3209,"p"),e(3210,"Define se a a\xE7\xE3o est\xE1 selecionada."),t()()(),i(3211,"tr",19)(3212,"td",20)(3213,"div",21)(3214,"span",22),e(3215," separator"),a(3216,"br"),t()()(),i(3217,"td",23)(3218,"code",24),e(3219,"boolean"),t()(),i(3220,"td",26)(3221,"em")(3222,"strong"),e(3223,"(opcional)"),t()(),i(3224,"p"),e(3225,"Atribui uma linha separadora acima do item."),t()()(),i(3226,"tr",19)(3227,"td",20)(3228,"div",21)(3229,"span",22),e(3230," type"),a(3231,"br"),t()()(),i(3232,"td",23)(3233,"code",40),e(3234,"string"),t()(),i(3235,"td",26)(3236,"em")(3237,"strong"),e(3238,"(opcional)"),t()(),i(3239,"p"),e(3240,"Define a cor do item, sendo "),i(3241,"code"),e(3242,"default"),t(),e(3243," o padr\xE3o."),t(),i(3244,"p"),e(3245,"Valores v\xE1lidos:"),t(),i(3246,"ul")(3247,"li")(3248,"code"),e(3249,"default"),t()(),i(3250,"li")(3251,"code"),e(3252,"danger"),t(),e(3253," - indicado para a\xE7\xF5es exclusivas (excluir, sair)."),t()()()(),i(3254,"tr",19)(3255,"td",20)(3256,"div",21)(3257,"span",22),e(3258," url"),a(3259,"br"),t()()(),i(3260,"td",23)(3261,"code",40),e(3262,"string"),t()(),i(3263,"td",26)(3264,"em")(3265,"strong"),e(3266,"(opcional)"),t()(),i(3267,"p"),e(3268,"URL utilizada para redirecionamento das p\xE1ginas."),t(),i(3269,"p"),e(3270,"No componente "),i(3271,"code"),e(3272,"po-dropdown"),t(),e(3273,`, a url tamb\xE9m pode ser configurada para o agrupador de subitens.
Entretanto, quando a `),i(3274,"code"),e(3275,"url"),t(),e(3276," \xE9 informada em um agrupador, o clique "),i(3277,"strong"),e(3278,"n\xE3o abrir\xE1 os subitens"),t(),e(3279,`, pois o item ser\xE1
tratado como um link e o redirecionamento ter\xE1 prioridade sobre a exibi\xE7\xE3o da lista.`),t()()(),i(3280,"tr",19)(3281,"td",20)(3282,"div",21)(3283,"span",22),e(3284," visible"),a(3285,"br"),t()()(),i(3286,"td",23)(3287,"code",24),e(3288,"boolean "),t(),i(3289,"code",27),e(3290," Function"),t()(),i(3291,"td",26)(3292,"em")(3293,"strong"),e(3294,"(opcional)"),t()(),i(3295,"p"),e(3296,"Define se a a\xE7\xE3o ser\xE1 vis\xEDvel."),t(),i(3297,"blockquote")(3298,"p"),e(3299,"Caso o valor n\xE3o seja especificado a a\xE7\xE3o ser\xE1 vis\xEDvel."),t()(),i(3300,"p"),e(3301,"Op\xE7\xF5es para tornar a a\xE7\xE3o vis\xEDvel ou n\xE3o:"),t(),i(3302,"ul")(3303,"li")(3304,"p"),e(3305,"Fun\xE7\xE3o que deve retornar um booleano."),t()(),i(3306,"li")(3307,"p"),e(3308,"Informar diretamente um valor booleano."),t()()()()()()(),i(3309,"po-accordion-item",73)(3310,"h4",9)(3311,"code"),e(3312,"ThfAggregateDescriptor"),t()(),i(3313,"div",10)(3314,"p"),e(3315,"Recebe um objeto contendo a coluna, uma label e a fun\xE7\xE3o que ser\xE1 aplicada para o c\xE1lculo do totalizador."),t()(),i(3316,"h4",15),e(3317,"Propriedades"),t(),i(3318,"table",16)(3319,"tr",17)(3320,"th",18),e(3321,"Nome"),t(),i(3322,"th",18),e(3323,"Tipo"),t(),i(3324,"th",18),e(3325,"Descri\xE7\xE3o"),t()(),i(3326,"tr",19)(3327,"td",20)(3328,"div",21)(3329,"span",22),e(3330," aggregate"),a(3331,"br"),t()()(),i(3332,"td",23)(3333,"code",74),e(3334,"'sum' "),t(),i(3335,"code",75),e(3336," 'average' "),t(),i(3337,"code",76),e(3338," 'count' "),t(),i(3339,"code",77),e(3340," 'min' "),t(),i(3341,"code",78),e(3342," 'max'"),t()(),i(3343,"td",26)(3344,"p"),e(3345,"Propriedade que recebe a fun\xE7\xE3o para o c\xE1lculo."),t()()(),i(3346,"tr",19)(3347,"td",20)(3348,"div",21)(3349,"span",22),e(3350," field"),a(3351,"br"),t()()(),i(3352,"td",23)(3353,"code",40),e(3354,"string"),t()(),i(3355,"td",26)(3356,"p"),e(3357,"Coluna que ser\xE1 utilizada pelo totalizador."),t()()(),i(3358,"tr",19)(3359,"td",20)(3360,"div",21)(3361,"span",22),e(3362," label"),a(3363,"br"),t()()(),i(3364,"td",23)(3365,"code",40),e(3366,"string"),t()(),i(3367,"td",26)(3368,"em")(3369,"strong"),e(3370,"(opcional)"),t()(),i(3371,"p"),e(3372,"Texto que ser\xE1 exibido junto ao resultado."),t()()()()(),i(3373,"po-accordion-item",79)(3374,"h4",9)(3375,"code"),e(3376,"ThfGridColumnSort"),t()(),i(3377,"div",10)(3378,"p"),e(3379,"Interface para definir a ordena\xE7\xE3o das colunas ("),i(3380,"strong"),e(3381,"t-sort"),t(),e(3382,")."),t()(),i(3383,"h4",15),e(3384,"Propriedades"),t(),i(3385,"table",16)(3386,"tr",17)(3387,"th",18),e(3388,"Nome"),t(),i(3389,"th",18),e(3390,"Tipo"),t(),i(3391,"th",18),e(3392,"Descri\xE7\xE3o"),t()(),i(3393,"tr",19)(3394,"td",20)(3395,"div",21)(3396,"span",22),e(3397," dir"),a(3398,"br"),t()()(),i(3399,"td",23)(3400,"code",80),e(3401,"'asc' "),t(),i(3402,"code",81),e(3403," 'desc'"),t()(),i(3404,"td",26)(3405,"em")(3406,"strong"),e(3407,"(opcional)"),t()(),i(3408,"p"),e(3409,"Dire\xE7\xE3o da coluna:"),t(),i(3410,"ul")(3411,"li")(3412,"code"),e(3413,"asc"),t()(),i(3414,"li")(3415,"code"),e(3416,"desc"),t()()()()(),i(3417,"tr",19)(3418,"td",20)(3419,"div",21)(3420,"span",22),e(3421," field"),a(3422,"br"),t()()(),i(3423,"td",23)(3424,"code",40),e(3425,"string"),t()(),i(3426,"td",26)(3427,"p"),e(3428,"Coluna"),t()()()()(),i(3429,"po-accordion-item",82)(3430,"h4",9)(3431,"code"),e(3432,"ThfGridColumn"),t()(),i(3433,"div",10)(3434,"p"),e(3435,"Interface para configura\xE7\xE3o das colunas ("),i(3436,"strong"),e(3437,"t-columns"),t(),e(3438,")."),t()(),i(3439,"h4",15),e(3440,"Propriedades"),t(),i(3441,"table",16)(3442,"tr",17)(3443,"th",18),e(3444,"Nome"),t(),i(3445,"th",18),e(3446,"Tipo"),t(),i(3447,"th",18),e(3448,"Descri\xE7\xE3o"),t()(),i(3449,"tr",19)(3450,"td",20)(3451,"div",21)(3452,"span",22),e(3453," action"),a(3454,"br"),t()()(),i(3455,"td",23)(3456,"code",27),e(3457,"Function"),t()(),i(3458,"td",26)(3459,"em")(3460,"strong"),e(3461,"(opcional)"),t()(),i(3462,"p"),e(3463,"Define uma a\xE7\xE3o na coluna quando o tipo da coluna for "),i(3464,"code"),e(3465,"link"),t(),e(3466," ou "),i(3467,"code"),e(3468,"icon"),t(),e(3469,"."),t(),i(3470,"blockquote")(3471,"p"),e(3472,"Quando for do tipo "),i(3473,"code"),e(3474,"link"),t(),e(3475,` ser\xE1 enviado como primeiro par\xE2metro o valor da coluna
e no segundo par\xE2metro o objeto completo da linha. Caso tenha sido definido uma a\xE7\xE3o e um link na coluna, a a\xE7\xE3o
ser\xE1 executada ao inv\xE9s do link.`),t()(),i(3476,"blockquote")(3477,"p"),e(3478,"Quando for do tipo "),i(3479,"code"),e(3480,"icon"),t(),e(3481," enviar\xE1 o objeto completo da linha e o segundo par\xE2metro ser\xE1 a defini\xE7\xE3o da coluna."),t()()()(),i(3482,"tr",19)(3483,"td",20)(3484,"div",21)(3485,"span",22),e(3486," boolean"),a(3487,"br"),t()()(),i(3488,"td",23)(3489,"code",83),e(3490,"PoTableBoolean"),t()(),i(3491,"td",26)(3492,"em")(3493,"strong"),e(3494,"(opcional)"),t()(),i(3495,"p"),e(3496,"Define um objeto do tipo "),i(3497,"code"),e(3498,"PoTableBoolean"),t(),e(3499," para as colunas do tipo "),i(3500,"em"),e(3501,"boolean"),t(),e(3502,". Por exemplo:"),t(),i(3503,"pre")(3504,"code"),e(3505,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(3506,"blockquote")(3507,"p"),e(3508,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(3509,"em"),e(3510,"boolean"),t(),e(3511,`,
esta exibir\xE1 por padr\xE3o `),i(3512,"code"),e(3513,"Sim"),t(),e(3514," e "),i(3515,"code"),e(3516,"N\xE3o"),t(),e(3517," de acordo com os valores "),i(3518,"em"),e(3519,"booleanos"),t(),e(3520,"."),t()()()(),i(3521,"tr",19)(3522,"td",20)(3523,"div",21)(3524,"span",22),e(3525," booleanFalse"),a(3526,"br"),t()()(),i(3527,"td",23)(3528,"code",40),e(3529,"string"),t()(),i(3530,"td",26)(3531,"em")(3532,"strong"),e(3533,"(opcional)"),t()(),i(3534,"p"),e(3535,"Texto exibido quando o valor da coluna for "),i(3536,"em"),e(3537,"false"),t(),e(3538,"."),t()()(),i(3539,"tr",19)(3540,"td",20)(3541,"div",21)(3542,"span",22),e(3543," booleanTrue"),a(3544,"br"),t()()(),i(3545,"td",23)(3546,"code",40),e(3547,"string"),t()(),i(3548,"td",26)(3549,"em")(3550,"strong"),e(3551,"(opcional)"),t()(),i(3552,"p"),e(3553,"Texto exibido quando o valor da coluna for "),i(3554,"em"),e(3555,"true"),t(),e(3556,"."),t()()(),i(3557,"tr",19)(3558,"td",20)(3559,"div",21)(3560,"span",22),e(3561," color"),a(3562,"br"),t()()(),i(3563,"td",23)(3564,"code",40),e(3565,"string "),t(),i(3566,"code",27),e(3567," Function"),t()(),i(3568,"td",26)(3569,"em")(3570,"strong"),e(3571,"(opcional)"),t()(),i(3572,"p"),e(3573,"Define a cor que ser\xE1 aplicada no conte\xFAdo da coluna."),t(),i(3574,"p"),e(3575,"Valores v\xE1lidos:"),t(),i(3576,"ul")(3577,"li"),a(3578,"span",84),i(3579,"code"),e(3580,"color-01"),t()(),i(3581,"li"),a(3582,"span",85),i(3583,"code"),e(3584,"color-02"),t()(),i(3585,"li"),a(3586,"span",86),i(3587,"code"),e(3588,"color-03"),t()(),i(3589,"li"),a(3590,"span",87),i(3591,"code"),e(3592,"color-04"),t()(),i(3593,"li"),a(3594,"span",88),i(3595,"code"),e(3596,"color-05"),t()(),i(3597,"li"),a(3598,"span",89),i(3599,"code"),e(3600,"color-06"),t()(),i(3601,"li"),a(3602,"span",90),i(3603,"code"),e(3604,"color-07"),t()(),i(3605,"li"),a(3606,"span",91),i(3607,"code"),e(3608,"color-08"),t()(),i(3609,"li"),a(3610,"span",92),i(3611,"code"),e(3612,"color-09"),t()(),i(3613,"li"),a(3614,"span",93),i(3615,"code"),e(3616,"color-10"),t()(),i(3617,"li"),a(3618,"span",94),i(3619,"code"),e(3620,"color-11"),t()(),i(3621,"li"),a(3622,"span",95),i(3623,"code"),e(3624,"color-12"),t()()(),i(3625,"blockquote")(3626,"p"),e(3627,`Existe a possibilidade de informar uma fun\xE7\xE3o que retorne um dos valores aceitos, ser\xE3o passados
por par\xE2metro a linha e a coluna atual, por exemplo:`),t()(),i(3628,"pre")(3629,"code"),e(3630,"(row, column) => { row[column] == 'text' ? 'color-03' : 'color-09' }"),t()(),i(3631,"blockquote")(3632,"p"),e(3633,"\xC9 poss\xEDvel tamb\xE9m us\xE1-la na coluna do tipo "),i(3634,"code"),e(3635,"icons"),t(),e(3636,` para altera\xE7\xE3o das cores de seu conte\xFAdo conforme exemplo abaixo,
contudo, desta forma sobrep\xF5e a cor especificada em cada objeto caso haja:`),t()(),i(3637,"pre")(3638,"code"),e(3639,`{ property: 'columnIcon', label: 'Like', type: 'icon', color: 'color-08', icons: [
  { value: 'an an-star', action: () => this.notification() }
]},`),t()()()(),i(3640,"tr",19)(3641,"td",20)(3642,"div",21)(3643,"span",22),e(3644," detail"),a(3645,"br"),t()()(),i(3646,"td",23)(3647,"code",96),e(3648,"PoTableDetail"),t()(),i(3649,"td",26)(3650,"em")(3651,"strong"),e(3652,"(opcional)"),t()(),i(3653,"p"),e(3654,"Define um objeto que segue a interface "),i(3655,"code"),e(3656,"PoTableDetail"),t(),e(3657,", para as colunas de detalhes. Por exemplo:"),t(),i(3658,"pre")(3659,"code"),e(3660,"{ columns: [{ property: 'package', label: 'Pacote' }], typeHeader: 'top' }"),t()()()(),i(3661,"tr",19)(3662,"td",20)(3663,"div",21)(3664,"span",22),e(3665," disabled"),a(3666,"br"),t()()(),i(3667,"td",23)(3668,"code",27),e(3669,"Function"),t()(),i(3670,"td",26)(3671,"em")(3672,"strong"),e(3673,"(opcional)"),t()(),i(3674,"p"),e(3675,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(3676,"em"),e(3677,"link"),t(),e(3678," e sua a\xE7\xE3o."),t(),i(3679,"blockquote")(3680,"p"),e(3681,"Propriedade dispon\xEDvel nas colunas do tipo "),i(3682,"code"),e(3683,"link"),t(),e(3684,"."),t()()()(),i(3685,"tr",19)(3686,"td",20)(3687,"div",21)(3688,"span",22),e(3689," editProperties"),a(3690,"br"),t()()(),i(3691,"td",23)(3692,"code",97),e(3693,"CustomEditProperties"),t()(),i(3694,"td",26)(3695,"em")(3696,"strong"),e(3697,"(opcional)"),t()(),i(3698,"p"),e(3699,"Propriedade para customizar as colunas edit\xE1veis"),t()()(),i(3700,"tr",19)(3701,"td",20)(3702,"div",21)(3703,"span",22),e(3704," fixed"),a(3705,"br"),t()()(),i(3706,"td",23)(3707,"code",24),e(3708,"boolean"),t()(),i(3709,"td",26)(3710,"em")(3711,"strong"),e(3712,"(opcional)"),t()(),i(3713,"p"),e(3714,"Propriedade para fixar a coluna inicialmente."),t(),i(3715,"blockquote")(3716,"p"),e(3717,`No momento, \xE9 poss\xEDvel fixar apenas 2 colunas e garantir o funcionamento correto.
Caso a coluna de a\xE7\xF5es esteja fixa, \xE9 poss\xEDvel fixar somente 1 coluna corretamente.`),t()()()(),i(3718,"tr",19)(3719,"td",20)(3720,"div",21)(3721,"span",22),e(3722," format"),a(3723,"br"),t()()(),i(3724,"td",23)(3725,"code",40),e(3726,"string"),t()(),i(3727,"td",26)(3728,"em")(3729,"strong"),e(3730,"(opcional)"),t()(),i(3731,"p"),e(3732,"Formato de exibi\xE7\xE3o do valor da coluna."),t(),i(3733,"table")(3734,"thead")(3735,"tr")(3736,"th"),e(3737,"Formata\xE7\xE3o"),t(),i(3738,"th"),e(3739,"Type da Coluna"),t(),i(3740,"th"),e(3741,"Descri\xE7\xE3o"),t(),i(3742,"th"),e(3743,"Exemplos"),t()()(),i(3744,"tbody")(3745,"tr")(3746,"td"),e(3747,"Monet\xE1rio"),t(),i(3748,"td")(3749,"code"),e(3750,"currency"),t()(),i(3751,"td"),e(3752,"Formato para valores monet\xE1rios. Espera um c\xF3digo de moeda no padr\xE3o ISO 4217, e caso n\xE3o informado, ser\xE1 utilizado "),i(3753,"code"),e(3754,"'USD'"),t(),e(3755," por padr\xE3o"),t(),i(3756,"td")(3757,"code"),e(3758,"'BRL'"),t(),e(3759,", "),i(3760,"code"),e(3761,"'USD'"),t(),e(3762,", "),i(3763,"code"),e(3764,"'EUR'"),t(),e(3765,", "),i(3766,"code"),e(3767,"'RUB'"),t()()(),i(3768,"tr")(3769,"td"),e(3770,"Data"),t(),i(3771,"td")(3772,"code"),e(3773,"date"),t()(),i(3774,"td"),e(3775,"Aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy), caso n\xE3o seja informado um formato o mesmo ser\xE1 'dd/MM/yyyy'"),t(),i(3776,"td")(3777,"code"),e(3778,"'dd/MM/yyyy'"),t(),e(3779,", "),i(3780,"code"),e(3781,"'dd-MM-yy'"),t(),e(3782,", "),i(3783,"code"),e(3784,"'mm/dd/yyyy'"),t()()(),i(3785,"tr")(3786,"td"),e(3787,"Hora"),t(),i(3788,"td")(3789,"code"),e(3790,"time"),t()(),i(3791,"td"),e(3792,"Aceita apenas os caracteres de hora(HH), minutos(mm), segundos(ss) e milisegundos(f-ffffff), os milisegundos s\xE3o opcionais, caso n\xE3o seja informado um formato o mesmo ser\xE1 'HH:mm:ss'"),t(),i(3793,"td")(3794,"code"),e(3795,"'HH:mm'"),t(),e(3796,", "),i(3797,"code"),e(3798,"'HH:mm:ss.ffffff'"),t(),e(3799,", "),i(3800,"code"),e(3801,"'HH:mm:ss.ff'"),t(),e(3802,", "),i(3803,"code"),e(3804,"'mm:ss.fff'"),t()()(),i(3805,"tr")(3806,"td"),e(3807,"N\xFAmero"),t(),i(3808,"td")(3809,"code"),e(3810,"number"),t()(),i(3811,"td"),e(3812,"Aceita um valor seguindo o padr\xE3o "),i(3813,"a",98)(3814,"strong"),e(3815,"DecimalPipe"),t()(),e(3816," para formata\xE7\xE3o, e caso n\xE3o seja informado, o n\xFAmero ser\xE1 exibido na sua forma original."),t(),i(3817,"td")(3818,"code"),e(3819,"'1.2-5'"),t(),e(3820," (ex.: "),i(3821,"code"),e(3822,"50"),t(),e(3823," \u2192 "),i(3824,"code"),e(3825,"50.00"),t(),e(3826,")"),t()()()(),i(3827,"p"),e(3828,"Observa\xE7\xE3o: caso n\xE3o seja informado um formato, o valor ser\xE1 exibido em sua forma original."),t(),i(3829,"blockquote")(3830,"p"),e(3831,`Na formata\xE7\xE3o do tipo currency, caso o valor informado seja diferente do padr\xE3o ISO 4217, ser\xE1 exibido o alerta "Currency formatting failed. Using fallback." no console do navegador.
Exemplos de formato inv\xE1lido: 'ABCD', '123'.`),t()()()(),i(3832,"tr",19)(3833,"td",20)(3834,"div",21)(3835,"span",22),e(3836," icons"),a(3837,"br"),t()()(),i(3838,"td",23)(3839,"code",99),e(3840,"Array<PoTableColumnIcon>"),t()(),i(3841,"td",26)(3842,"em")(3843,"strong"),e(3844,"(opcional)"),t()(),i(3845,"p"),e(3846,"Define um "),i(3847,"em"),e(3848,"array"),t(),e(3849," de objetos para colunas de \xEDcones que ir\xE1 sobrepor os valores como "),i(3850,"code"),e(3851,"action"),t(),e(3852," e "),i(3853,"code"),e(3854,"color"),t(),e(3855,`
definidos na coluna, \xE0 partir do `),i(3856,"em"),e(3857,"value"),t(),e(3858," da "),i(3859,"a",100)(3860,"code"),e(3861,"PoTableColumnIcon"),t()(),e(3862,", por exemplo:"),t(),i(3863,"pre")(3864,"code"),e(3865,`{ property: 'columnIcon', label: 'Icons', type: 'icon', action: this.favorite.bind(this), icons: [
  { value: 'delete', icon: 'an an-plus', color: 'color-06', action: this.add.bind(this), tooltip: 'Adiciona um novo item' },
  { value: 'edit', icon: 'an an-pencil-simple', action: this.edit.bind(this) },
  { value: 'delete', icon: 'an an-trash', color: 'color-12', action: this.remove.bind(this) }
]},`),t()(),i(3866,"pre")(3867,"code"),e(3868,`...
{ id: 1, columnIcon: ['an an-pencil-simple', 'an an-trash', 'an an-star'] }
...`),t()()()(),i(3869,"tr",19)(3870,"td",20)(3871,"div",21)(3872,"span",22),e(3873," key"),a(3874,"br"),t()()(),i(3875,"td",23)(3876,"code",24),e(3877,"boolean "),t(),i(3878,"code",52),e(3879," number"),t()(),i(3880,"td",26)(3881,"em")(3882,"strong"),e(3883,"(opcional)"),t()(),i(3884,"p"),e(3885,`Indica se a coluna faz parte da chave composta para exclus\xE3o de registros.
Pode ser do tipo num\xE9rico ou booleano. Os valores num\xE9ricos sempre ser\xE3o priorizados em rela\xE7\xE3o aos booleanos.
Para a exclus\xE3o, \xE9 necess\xE1rio que a `),i(3886,"code"),e(3887,"API"),t(),e(3888," esteja preparada para receber uma ou mais "),i(3889,"code"),e(3890,"keys"),t(),e(3891," concatenadas com pipe '|' para identifica\xE7\xE3o do registro. ex.: DELETE {end-point}/{keys}"),t(),i(3892,"blockquote")(3893,"p"),e(3894,`Exemplo de keys: [{ property: 'id', key: 1 }, { property: 'name', key: true }, { property: 'email', key: 2 }].
Resposta do exemplo: 'valor de id|valor de email|valor de name'`),t()()()(),i(3895,"tr",19)(3896,"td",20)(3897,"div",21)(3898,"span",22),e(3899," label"),a(3900,"br"),t()()(),i(3901,"td",23)(3902,"code",40),e(3903,"string"),t()(),i(3904,"td",26)(3905,"em")(3906,"strong"),e(3907,"(opcional)"),t()(),i(3908,"p"),e(3909,"Texto para t\xEDtulo da coluna."),t(),i(3910,"p"),e(3911,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(3912,"em"),e(3913,"label"),t(),e(3914," o valor da propriedade "),i(3915,"em"),e(3916,"property"),t(),e(3917," com a primeira letra em mai\xFAsculo."),t()()(),i(3918,"tr",19)(3919,"td",20)(3920,"div",21)(3921,"span",22),e(3922," labels"),a(3923,"br"),t()()(),i(3924,"td",23)(3925,"code",101),e(3926,"Array<PoTableColumnLabel>"),t()(),i(3927,"td",26)(3928,"em")(3929,"strong"),e(3930,"(opcional)"),t()(),i(3931,"p"),e(3932,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(3933,"code"),e(3934,"PoTableColumnLabel"),t(),e(3935," na qual devem ser definidas os labels. Por exemplo:"),t(),i(3936,"pre")(3937,"code"),e(3938,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(3939,"tr",19)(3940,"td",20)(3941,"div",21)(3942,"span",22),e(3943," link"),a(3944,"br"),t()()(),i(3945,"td",23)(3946,"code",40),e(3947,"string"),t()(),i(3948,"td",26)(3949,"em")(3950,"strong"),e(3951,"(opcional)"),t()(),i(3952,"p"),e(3953,"Define o nome da propriedade que conter\xE1 o "),i(3954,"code"),e(3955,"link"),t(),e(3956," a ser redirecionado."),t()()(),i(3957,"tr",19)(3958,"td",20)(3959,"div",21)(3960,"span",22),e(3961," locale"),a(3962,"br"),t()()(),i(3963,"td",23)(3964,"code",40),e(3965,"string"),t()(),i(3966,"td",26)(3967,"em")(3968,"strong"),e(3969,"(opcional)"),t()(),i(3970,"p"),e(3971,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o e edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(3972,"a",102)(3973,"code"),e(3974,"I18n"),t()()(),i(3975,"p"),e(3976,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(3977,"pre")(3978,"code"),e(3979,`columnWithItems: Array<ThfGridColumn> = [
{
   property: 'currency',
   type: 'currency',
   locale: 'en'
},`),t()(),i(3980,"blockquote")(3981,"p"),e(3982,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(3983,"p"),e(3984,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(3985,"p"),e(3986,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(3987,"a",102)(3988,"code"),e(3989,"I18n"),t()()()(),i(3990,"p"),e(3991,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(3992,"pre")(3993,"code"),e(3994,`const i18nConfig: PoI18nConfig = {
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
export class AppModule {}`),t()(),i(3995,"blockquote")(3996,"p"),e(3997,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(3998,"code"),e(3999,"number"),t(),e(4e3," e "),i(4001,"code"),e(4002,"currency"),t(),e(4003,"."),t()(),i(4004,"blockquote")(4005,"p"),e(4006,"No modo edi\xE7\xE3o, a propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4007,"p")(4008,"strong"),e(4009,"Componentes compat\xEDveis"),t(),e(4010,": "),i(4011,"code"),e(4012,"decimal"),t()()()()(),i(4013,"tr",19)(4014,"td",20)(4015,"div",21)(4016,"span",22),e(4017," mask"),a(4018,"br"),t()()(),i(4019,"td",23)(4020,"code",40),e(4021,"string"),t()(),i(4022,"td",26)(4023,"em")(4024,"strong"),e(4025,"(opcional)"),t()(),i(4026,"p"),e(4027,`Indica uma m\xE1scara para a coluna
Exemplos: (+99) (99) 99999?-9999, 99999-999, 999.999.999-99.
Aplic\xE1vel nas colunas do tipo `),i(4028,"code"),e(4029,"number"),t(),e(4030," e "),i(4031,"code"),e(4032,"string"),t(),e(4033,`
Nas colunas do tipo `),i(4034,"code"),e(4035,"number"),t(),e(4036," a propriedade "),i(4037,"code"),e(4038,"mask"),t(),e(4039," ter\xE1 prioridade sob "),i(4040,"code"),e(4041,"format"),t()()()(),i(4042,"tr",19)(4043,"td",20)(4044,"div",21)(4045,"span",22),e(4046," property"),a(4047,"br"),t()()(),i(4048,"td",23)(4049,"code",40),e(4050,"string"),t()(),i(4051,"td",26)(4052,"p"),e(4053,"Identificador da coluna."),t()()(),i(4054,"tr",19)(4055,"td",20)(4056,"div",21)(4057,"span",22),e(4058," resizable"),a(4059,"br"),t()()(),i(4060,"td",23)(4061,"code",24),e(4062,"boolean"),t()(),i(4063,"td",26)(4064,"em")(4065,"strong"),e(4066,"(opcional)"),t()(),i(4067,"p"),e(4068,"Define se a coluna pode ser redimensionada pelo usu\xE1rio."),t()()(),i(4069,"tr",19)(4070,"td",20)(4071,"div",21)(4072,"span",22),e(4073," sortable"),a(4074,"br"),t()()(),i(4075,"td",23)(4076,"code",24),e(4077,"boolean"),t()(),i(4078,"td",26)(4079,"em")(4080,"strong"),e(4081,"(opcional)"),t()(),i(4082,"p"),e(4083,`Controla se a coluna ser\xE1 considerada como "ordenavel". Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 usada para
ordena\xE7\xE3o.`),t()()(),i(4084,"tr",19)(4085,"td",20)(4086,"div",21)(4087,"span",22),e(4088," subtitles"),a(4089,"br"),t()()(),i(4090,"td",23)(4091,"code",103),e(4092,"Array<PoTableSubtitleColumn>"),t()(),i(4093,"td",26)(4094,"em")(4095,"strong"),e(4096,"(opcional)"),t()(),i(4097,"p"),e(4098,"Define um array de objetos para as colunas de legenda. Onde, "),i(4099,"code"),e(4100,"subtitles"),t(),e(4101,` \xE9 uma lista de objetos do tipo PoTableSubtitle na qual
devem ser definidas as op\xE7\xF5es de legenda. Por exemplo:`),t(),i(4102,"pre")(4103,"code"),e(4104,`{ property: 'flightStatus', label: 'Status', color: 'subtitle', width:'100px', subtitles: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', content: '1' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', content: '2' }
}`),t()(),i(4105,"p"),e(4106,`Nesse exemplo a coluna escolhida para legenda \xE9 'flightStatus', se o valor dessa coluna for 'confirmed', o texto da legenda ser\xE1
'Confirmado'.`),t()()(),i(4107,"tr",19)(4108,"td",20)(4109,"div",21)(4110,"span",22),e(4111," tooltip"),a(4112,"br"),t()()(),i(4113,"td",23)(4114,"code",40),e(4115,"string"),t()(),i(4116,"td",26)(4117,"em")(4118,"strong"),e(4119,"(opcional)"),t()(),i(4120,"p"),e(4121,"Define um texto de ajuda que ser\xE1 exibido ao passar o "),i(4122,"em"),e(4123,"mouse"),t(),e(4124," sobre um texto."),t(),i(4125,"blockquote")(4126,"p"),e(4127,"O tooltip s\xF3 ser\xE1 vis\xEDvel se for uma coluna do tipo "),i(4128,"em"),e(4129,"link"),t(),e(4130,"."),t()(),i(4131,"blockquote")(4132,"p"),e(4133,`Caso o conte\xFAdo da c\xE9lula exceder a largura da coluna,
\xE9 ignorado o valor atribu\xEDdo ao `),i(4134,"em"),e(4135,"tooltip"),t(),e(4136," e ser\xE1 exibido justamente o conte\xFAdo da c\xE9lula."),t()()()(),i(4137,"tr",19)(4138,"td",20)(4139,"div",21)(4140,"span",22),e(4141," type"),a(4142,"br"),t()()(),i(4143,"td",23)(4144,"code",40),e(4145,"string"),t()(),i(4146,"td",26)(4147,"em")(4148,"strong"),e(4149,"(opcional)"),t()(),i(4150,"p"),e(4151,"Tipo da coluna."),t(),i(4152,"p"),e(4153,"Valores v\xE1lidos:"),t(),i(4154,"ul")(4155,"li")(4156,"p")(4157,"code"),e(4158,"boolean"),t(),e(4159,": Exibir\xE1 por padr\xE3o "),i(4160,"code"),e(4161,"Sim"),t(),e(4162," e "),i(4163,"code"),e(4164,"N\xE3o"),t(),e(4165," de acordo com os valores "),i(4166,"em"),e(4167,"booleanos"),t(),e(4168,"."),t(),i(4169,"blockquote")(4170,"p"),e(4171,"Caso necessite exibir valores diferentes do padr\xE3o, deve-se utilizar a propriedade "),i(4172,"code"),e(4173,"boolean"),t(),e(4174," desta interface."),t()()(),i(4175,"li")(4176,"p")(4177,"code"),e(4178,"currency"),t(),e(4179,": valores monet\xE1rios."),t()(),i(4180,"li")(4181,"p")(4182,"code"),e(4183,"date"),t(),e(4184,": valor de datas."),t(),i(4185,"ul")(4186,"li"),e(4187,"Aceita os tipos "),i(4188,"em"),e(4189,"string"),t(),e(4190," e "),i(4191,"em"),e(4192,"Date"),t(),e(4193,` padr\xE3o do Javascript,
por exemplo: `),i(4194,"code"),e(4195,"'2017-11-28'"),t(),e(4196," ou "),i(4197,"code"),e(4198,"new Date(2017, 10, 28)"),t(),e(4199,"."),t()()(),i(4200,"li")(4201,"p")(4202,"code"),e(4203,"dateTime"),t(),e(4204,": valor de data com hor\xE1rio."),t(),i(4205,"ul")(4206,"li"),e(4207,"Aceita o tipo "),i(4208,"em"),e(4209,"string"),t(),e(4210," no formato "),i(4211,"strong"),e(4212,"ISO-8601"),t(),e(4213," extendido "),i(4214,"strong"),e(4215,"'yyyy-mm-ddThh:mm:ss+|-hh:mm'"),t(),e(4216,`
e o tipo `),i(4217,"em"),e(4218,"Date"),t(),e(4219," padr\xE3o do Javascript, por exemplo: "),i(4220,"code"),e(4221,"'2017-11-28T00:00:00-02:00'"),t(),e(4222," ou "),i(4223,"code"),e(4224,"new Date(2017, 10, 28)"),t(),e(4225,"."),t()()(),i(4226,"li")(4227,"p")(4228,"code"),e(4229,"detail"),t(),e(4230,": array de objetos para o master-detail."),t(),i(4231,"ul")(4232,"li"),e(4233,"Incompat\xEDvel com "),i(4234,"code"),e(4235,"virtual-scroll"),t(),e(4236,", que requer altura fixa nas linhas."),t()()(),i(4237,"li")(4238,"p")(4239,"code"),e(4240,"icon"),t(),e(4241,": "),i(4242,"em"),e(4243,"array"),t(),e(4244," de "),i(4245,"em"),e(4246,"string"),t(),e(4247," ou objetos para a coluna de \xEDcones."),t()(),i(4248,"li")(4249,"p")(4250,"code"),e(4251,"label"),t(),e(4252,": texto com destaque."),t()(),i(4253,"li")(4254,"p")(4255,"code"),e(4256,"link"),t(),e(4257,": habilita link na coluna para a\xE7\xE3o ou navega\xE7\xE3o."),t()(),i(4258,"li")(4259,"p")(4260,"code"),e(4261,"number"),t(),e(4262,": valores num\xE9ricos."),t()(),i(4263,"li")(4264,"p")(4265,"code"),e(4266,"string"),t(),e(4267,": textos."),t()(),i(4268,"li")(4269,"p")(4270,"code"),e(4271,"subtitle"),t(),e(4272,": array de objetos para a coluna de legenda."),t()(),i(4273,"li")(4274,"p")(4275,"code"),e(4276,"time"),t(),e(4277,": valor de hor\xE1rio."),t(),i(4278,"ul")(4279,"li"),e(4280,"Aceita o tipo "),i(4281,"em"),e(4282,"string"),t(),e(4283," nos formatos "),i(4284,"strong"),e(4285,"'HH:mm:ss'"),t(),e(4286," ou "),i(4287,"strong"),e(4288,"'HH:mm:ss.ffffff'"),t(),e(4289,", por exemplo: "),i(4290,"code"),e(4291,"'23:12:45'"),t(),e(4292,"."),t()()(),i(4293,"li")(4294,"p")(4295,"code"),e(4296,"cellTemplate"),t(),e(4297,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4298,"a",104),e(4299,"PoTableCellTemplate"),t(),e(4300,"."),t()(),i(4301,"li")(4302,"p")(4303,"code"),e(4304,"columnTemplate"),t(),e(4305,`: Indica que a coluna ser\xE1 utilizada como template, em conjunto com o
`),i(4306,"a",105),e(4307,"PoTableColumnTemplate"),t(),e(4308,"."),t()()()()(),i(4309,"tr",19)(4310,"td",20)(4311,"div",21)(4312,"span",22),e(4313," visible"),a(4314,"br"),t()()(),i(4315,"td",23)(4316,"code",24),e(4317,"boolean"),t()(),i(4318,"td",26)(4319,"em")(4320,"strong"),e(4321,"(opcional)"),t()(),i(4322,"p"),e(4323,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(4324,"strong"),e(4325,"gerenciador de colunas"),t(),e(4326,"."),t(),i(4327,"blockquote")(4328,"p"),e(4329,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(4330,"code"),e(4331,"p-max-columns"),t(),e(4332,"."),t()()()(),i(4333,"tr",19)(4334,"td",20)(4335,"div",21)(4336,"span",22),e(4337," width"),a(4338,"br"),t()()(),i(4339,"td",23)(4340,"code",52),e(4341,"number "),t(),i(4342,"code",40),e(4343," string"),t()(),i(4344,"td",26)(4345,"em")(4346,"strong"),e(4347,"(opcional)"),t()(),i(4348,"p"),e(4349,"Caso seja passado o formato "),i(4350,"code"),e(4351,"number"),t(),e(4352,`, ser\xE1 aplicado em pixels.
A largura da coluna pode ser informada em pixels ou porcentagem.`),t(),i(4353,"blockquote")(4354,"p"),e(4355,`Exemplo Pixel: 100.
Exemplo Porcentagem: '100%'.
Apesar de atribuir largura as colunas da grid \xE9 importante ressaltar
que o componente recalcula as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis na grid,
podendo alterar as dimens\xF5es passadas proporcionalmente.`),t()()()()()(),i(4356,"po-accordion-item",106)(4357,"h4",9)(4358,"code"),e(4359,"CustomEditProperties"),t()(),i(4360,"div",10)(4361,"p"),e(4362,"Interface para configura\xE7\xE3o das colunas edit\xE1veis ("),i(4363,"strong"),e(4364,"editProperties"),t(),e(4365,`).
Al\xE9m dessas propriedades, herda as defini\xE7\xF5es da interface
`),i(4366,"a",107),e(4367,"PoDynamicFormField"),t(),e(4368,`,
permitindo definir campos de entrada que ser\xE3o criados dinamicamente.`),t()(),i(4369,"h4",15),e(4370,"Propriedades"),t(),i(4371,"table",16)(4372,"tr",17)(4373,"th",18),e(4374,"Nome"),t(),i(4375,"th",18),e(4376,"Tipo"),t(),i(4377,"th",18),e(4378,"Descri\xE7\xE3o"),t()(),i(4379,"tr",19)(4380,"td",20)(4381,"div",21)(4382,"span",22),e(4383," componentEditable"),a(4384,"br"),t()()(),i(4385,"td",23)(4386,"code",108),e(4387,"'input' "),t(),i(4388,"code",109),e(4389," 'number' "),t(),i(4390,"code",110),e(4391," 'select' "),t(),i(4392,"code",111),e(4393," 'datepicker' "),t(),i(4394,"code",112),e(4395," 'switch' "),t(),i(4396,"code",113),e(4397," 'combo' "),t(),i(4398,"code",114),e(4399," 'multiselect' "),t(),i(4400,"code",115),e(4401," 'decimal' "),t(),i(4402,"code",116),e(4403," 'checkbox' "),t(),i(4404,"code",117),e(4405," 'lookup'"),t()(),i(4406,"td",26)(4407,"em")(4408,"strong"),e(4409,"(opcional)"),t()(),i(4410,"p"),e(4411,"Propriedade para escolher qual componente ser\xE1 exibido para editar."),t(),i(4412,"blockquote")(4413,"p"),e(4414,"O valor padr\xE3o \xE9 "),i(4415,"code"),e(4416,"input"),t(),e(4417,"."),t()()()(),i(4418,"tr",19)(4419,"td",20)(4420,"div",21)(4421,"span",22),e(4422," componentSize"),a(4423,"br"),t()()(),i(4424,"td",23)(4425,"code",118),e(4426,"'small' "),t(),i(4427,"code",119),e(4428," 'medium' "),t(),i(4429,"code",120),e(4430," 'large'"),t()(),i(4431,"td",26)(4432,"em")(4433,"strong"),e(4434,"(opcional)"),t()(),i(4435,"p"),e(4436,"Define o tamanho dos componentes de formul\xE1rio no grid conforme suas respectivas documenta\xE7\xF5es:"),t(),i(4437,"ul")(4438,"li")(4439,"code"),e(4440,"small"),t(),e(4441,": aplica a medida small de cada componente (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(4442,"li")(4443,"code"),e(4444,"medium"),t(),e(4445,": aplica a medida medium de cada componente."),t(),i(4446,"li")(4447,"code"),e(4448,"large"),t(),e(4449,": aplica a medida large de cada componente (dispon\xEDvel para "),i(4450,"code"),e(4451,"po-checkbox"),t(),e(4452," e "),i(4453,"code"),e(4454,"po-radio-group"),t(),e(4455,")."),i(4456,"blockquote")(4457,"p"),e(4458,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(4459,"code"),e(4460,"medium"),t(),e(4461,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(4462,"a",41),e(4463,"po-theme"),t(),e(4464,"."),t()()()()()(),i(4465,"tr",19)(4466,"td",20)(4467,"div",21)(4468,"span",22),e(4469," controlValueWithLabel"),a(4470,"br"),t()()(),i(4471,"td",23)(4472,"code",24),e(4473,"boolean"),t()(),i(4474,"td",26)(4475,"em")(4476,"strong"),e(4477,"(opcional)"),t()(),i(4478,"p"),e(4479,"Determina se os componentes "),i(4480,"code"),e(4481,"select"),t(),e(4482,", "),i(4483,"code"),e(4484,"combo"),t(),e(4485,", "),i(4486,"code"),e(4487,"multiselect"),t(),e(4488," e "),i(4489,"code"),e(4490,"thf-lookup"),t(),e(4491,`
devem exibir o `),i(4492,"code"),e(4493,"label"),t(),e(4494," ao inv\xE9s de "),i(4495,"code"),e(4496,"value"),t(),e(4497," na grid"),t()()(),i(4498,"tr",19)(4499,"td",20)(4500,"div",21)(4501,"span",22),e(4502," customItems"),a(4503,"br"),t()()(),i(4504,"td",23)(4505,"code",54),e(4506,"Array<any>"),t()(),i(4507,"td",26)(4508,"em")(4509,"strong"),e(4510,"(opcional)"),t()(),i(4511,"p"),e(4512,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t(),i(4513,"blockquote")(4514,"p")(4515,"strong"),e(4516,"Componente compat\xEDvel"),t(),e(4517,": "),i(4518,"code"),e(4519,"thf-lookup"),t()()()()(),i(4520,"tr",19)(4521,"td",20)(4522,"div",21)(4523,"span",22),e(4524," disabled"),a(4525,"br"),t()()(),i(4526,"td",23)(4527,"code",24),e(4528,"boolean "),t(),i(4529,"code",121),e(4530," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4531,"td",26)(4532,"em")(4533,"strong"),e(4534,"(opcional)"),t()(),i(4535,"p"),e(4536,`Desabilita o campo. Pode ser um valor booleano fixo ou uma fun\xE7\xE3o din\xE2mica
que recebe os dados da linha e retorna um booleano`),t()()(),i(4537,"tr",19)(4538,"td",20)(4539,"div",21)(4540,"span",22),e(4541," fieldFormat"),a(4542,"br"),t()()(),i(4543,"td",23)(4544,"code",49),e(4545,"Array<string> "),t(),i(4546,"code",122),e(4547," ((item: any) => string)"),t()(),i(4548,"td",26)(4549,"em")(4550,"strong"),e(4551,"(opcional)"),t()(),i(4552,"p"),e(4553,"Formato de exibi\xE7\xE3o do campo."),t(),i(4554,"p"),e(4555,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(4556,"em"),e(4557,"string"),t(),e(4558," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(4559,"pre")(4560,"code",31),e(4561,`fieldFormat(obj) {
  return \`\${obj.id} (\${obj.name})\`;
}


Ou pode-se informar uma lista de propriedades que deseja exibir como descri\xE7\xE3o do campo.
Nessa caso, ser\xE1 utilizado \` - \` como separador, por exemplo:

\`\`\`typescript
 fieldFormat]="['id','nickname']"`),t()(),i(4562,"blockquote")(4563,"p"),e(4564,"Componente compat\xEDvel: "),i(4565,"code"),e(4566,"thf-lookup"),t(),e(4567,"."),t()()()(),i(4568,"tr",19)(4569,"td",20)(4570,"div",21)(4571,"span",22),e(4572," filterSearchSelect"),a(4573,"br"),t()()(),i(4574,"td",23)(4575,"code",123),e(4576,"Array<ThfLookupFilterSearchSelect>"),t()(),i(4577,"td",26)(4578,"em")(4579,"strong"),e(4580,"(opcional)"),t()(),i(4581,"p"),e(4582,"Propriedade para listar as op\xE7\xF5es de filtro do po-search no modal."),t(),i(4583,"blockquote")(4584,"p"),e(4585,"Componente compat\xEDvel: "),i(4586,"code"),e(4587,"thf-lookup"),t(),e(4588,"."),t()()()(),i(4589,"tr",19)(4590,"td",20)(4591,"div",21)(4592,"span",22),e(4593," keysLabel"),a(4594,"br"),t()()(),i(4595,"td",23)(4596,"code",124),e(4597,"Array<ThfLookupKeysLabel>"),t()(),i(4598,"td",26)(4599,"em")(4600,"strong"),e(4601,"(opcional)"),t()(),i(4602,"p"),e(4603,"Propriedade para exibir at\xE9 3 propriedades por valor no listbox."),t(),i(4604,"blockquote")(4605,"p"),e(4606,"Componente compat\xEDvel: "),i(4607,"code"),e(4608,"thf-lookup"),t(),e(4609,"."),t()()()(),i(4610,"tr",19)(4611,"td",20)(4612,"div",21)(4613,"span",22),e(4614," locale"),a(4615,"br"),t()()(),i(4616,"td",23)(4617,"code",40),e(4618,"string"),t()(),i(4619,"td",26)(4620,"em")(4621,"strong"),e(4622,"(opcional)"),t()(),i(4623,"p"),e(4624,`Define a localidade a ser utilizada no modo de edi\xE7\xE3o.
Por padr\xE3o o valor ser\xE1 configurado segundo o m\xF3dulo `),i(4625,"a",102)(4626,"code"),e(4627,"I18n"),t()()(),i(4628,"p"),e(4629,"Exemplo de utiliza\xE7\xE3o no grid:"),t(),i(4630,"pre")(4631,"code"),e(4632,`columnWithItems: Array<ThfGridColumn> = [
 {
   property: 'currency',
   type: 'currency',
   editProperties: {
     componentEditable: 'decimal',
     locale: 'en'
   },
},`),t()(),i(4633,"blockquote")(4634,"p"),e(4635,'Caso o valor informado seja inv\xE1lido, ser\xE1 exibido o alerta "Invalid locale: locale_informado" no console do navegador.'),t(),i(4636,"p"),e(4637,"Exemplos de localidades inv\xE1lidas: 'en_US', 'pt_BR'."),t(),i(4638,"p"),e(4639,"Para ver quais linguagens s\xE3o suportadas, acesse "),i(4640,"a",102)(4641,"code"),e(4642,"I18n"),t()()()(),i(4643,"p"),e(4644,"Tamb\xE9m \xE9 poss\xEDvel definir a localidade da aplica\xE7\xE3o por meio da configura\xE7\xE3o do PoI18nModule:"),t(),i(4645,"pre")(4646,"code"),e(4647,`const i18nConfig: PoI18nConfig = {
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
export class AppModule {}`),t()(),i(4648,"blockquote")(4649,"p"),e(4650,"A propriedade ser\xE1 repassada para os componentes que suportam a mesma."),t(),i(4651,"p")(4652,"strong"),e(4653,"Componentes compat\xEDveis"),t(),e(4654,": "),i(4655,"code"),e(4656,"decimal"),t()()(),i(4657,"blockquote")(4658,"p"),e(4659,"Caso seja definida em conjunto com a propriedade "),i(4660,"code"),e(4661,"locale"),t(),e(4662," da coluna, o "),i(4663,"code"),e(4664,"editProperties.locale"),t(),e(4665," ter\xE1 prioridade ao habilitar a edi\xE7\xE3o de uma linha e o "),i(4666,"code"),e(4667,"locale"),t(),e(4668," da coluna ser\xE1 utilizado apenas para exibi\xE7\xE3o."),t()()()(),i(4669,"tr",19)(4670,"td",20)(4671,"div",21)(4672,"span",22),e(4673," lookupGridProperties"),a(4674,"br"),t()()(),i(4675,"td",23)(4676,"code",125),e(4677,"ThfLookupGridProperties"),t()(),i(4678,"td",26)(4679,"em")(4680,"strong"),e(4681,"(opcional)"),t()(),i(4682,"p"),e(4683,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(4684,"blockquote")(4685,"p")(4686,"strong"),e(4687,"Componentes compat\xEDveis"),t(),e(4688,": thf-lookup`"),t()()()(),i(4689,"tr",19)(4690,"td",20)(4691,"div",21)(4692,"span",22),e(4693," onBlur"),a(4694,"br"),t()()(),i(4695,"td",23)(4696,"code",27),e(4697,"Function"),t()(),i(4698,"td",26)(4699,"em")(4700,"strong"),e(4701,"(opcional)"),t()(),i(4702,"p"),e(4703,"Evento disparado ao sair do campo."),t(),i(4704,"blockquote")(4705,"p")(4706,"strong"),e(4707,"Componentes compat\xEDveis"),t(),e(4708,": "),i(4709,"code"),e(4710,"po-input"),t(),e(4711,", "),i(4712,"code"),e(4713,"po-number"),t(),e(4714,", "),i(4715,"code"),e(4716,"po-decimal"),t(),e(4717,", "),i(4718,"code"),e(4719,"po-datepicker"),t(),e(4720,", "),i(4721,"code"),e(4722,"po-select"),t(),e(4723,", "),i(4724,"code"),e(4725,"po-combo"),t(),e(4726,", "),i(4727,"code"),e(4728,"po-multiselect"),t(),e(4729,", "),i(4730,"code"),e(4731,"po-checkbox"),t()()()()(),i(4732,"tr",19)(4733,"td",20)(4734,"div",21)(4735,"span",22),e(4736," onChange"),a(4737,"br"),t()()(),i(4738,"td",23)(4739,"code",126),e(4740,"(value: any) => void"),t()(),i(4741,"td",26)(4742,"em")(4743,"strong"),e(4744,"(opcional)"),t()(),i(4745,"p"),e(4746,"Evento disparado ao alterar valor e deixar o campo."),t(),i(4747,"blockquote")(4748,"p")(4749,"strong"),e(4750,"Componentes compat\xEDveis"),t(),e(4751,": "),i(4752,"code"),e(4753,"po-input"),t(),e(4754,", "),i(4755,"code"),e(4756,"po-number"),t(),e(4757,", "),i(4758,"code"),e(4759,"po-decimal"),t(),e(4760,", "),i(4761,"code"),e(4762,"po-datepicker"),t(),e(4763,", "),i(4764,"code"),e(4765,"po-select"),t(),e(4766,", "),i(4767,"code"),e(4768,"po-switch"),t(),e(4769,", "),i(4770,"code"),e(4771,"po-combo"),t(),e(4772,", "),i(4773,"code"),e(4774,"po-multiselect"),t(),e(4775,", "),i(4776,"code"),e(4777,"po-checkbox"),t(),e(4778,", "),i(4779,"code"),e(4780,"thf-lookup"),t()()()()(),i(4781,"tr",19)(4782,"td",20)(4783,"div",21)(4784,"span",22),e(4785," onChangeModel"),a(4786,"br"),t()()(),i(4787,"td",23)(4788,"code",127),e(4789,"(model: any) => void"),t()(),i(4790,"td",26)(4791,"em")(4792,"strong"),e(4793,"(opcional)"),t()(),i(4794,"p"),e(4795,"Evento disparado ao alterar valor do model."),t(),i(4796,"blockquote")(4797,"p")(4798,"strong"),e(4799,"Componentes compat\xEDveis"),t(),e(4800,": "),i(4801,"code"),e(4802,"po-input"),t(),e(4803,", "),i(4804,"code"),e(4805,"po-number"),t(),e(4806,", "),i(4807,"code"),e(4808,"po-decimal"),t(),e(4809,", "),i(4810,"code"),e(4811,"po-select"),t(),e(4812,", "),i(4813,"code"),e(4814,"po-combo"),t(),e(4815,", "),i(4816,"code"),e(4817,"thf-lookup"),t()()()()(),i(4818,"tr",19)(4819,"td",20)(4820,"div",21)(4821,"span",22),e(4822," onEnter"),a(4823,"br"),t()()(),i(4824,"td",23)(4825,"code",27),e(4826,"Function"),t()(),i(4827,"td",26)(4828,"em")(4829,"strong"),e(4830,"(opcional)"),t()(),i(4831,"p"),e(4832,"Evento disparado ao entrar no campo."),t(),i(4833,"blockquote")(4834,"p")(4835,"strong"),e(4836,"Componentes compat\xEDveis"),t(),e(4837,": "),i(4838,"code"),e(4839,"po-input"),t(),e(4840,", "),i(4841,"code"),e(4842,"po-number"),t(),e(4843,", "),i(4844,"code"),e(4845,"po-decimal"),t()()()()(),i(4846,"tr",19)(4847,"td",20)(4848,"div",21)(4849,"span",22),e(4850," onError"),a(4851,"br"),t()()(),i(4852,"td",23)(4853,"code",128),e(4854,"(error: HttpErrorResponse) => void"),t()(),i(4855,"td",26)(4856,"em")(4857,"strong"),e(4858,"(opcional)"),t()(),i(4859,"p"),e(4860,"Callback disparado quando ocorre erro na requisi\xE7\xE3o de busca."),t(),i(4861,"blockquote")(4862,"p")(4863,"strong"),e(4864,"Componente compat\xEDvel"),t(),e(4865,": "),i(4866,"code"),e(4867,"thf-lookup"),t()()()()(),i(4868,"tr",19)(4869,"td",20)(4870,"div",21)(4871,"span",22),e(4872," onFocus"),a(4873,"br"),t()()(),i(4874,"td",23)(4875,"code",27),e(4876,"Function"),t()(),i(4877,"td",26)(4878,"em")(4879,"strong"),e(4880,"(opcional)"),t()(),i(4881,"p"),e(4882,"Callback disparado quando o campo recebe foco."),t(),i(4883,"blockquote")(4884,"p")(4885,"strong"),e(4886,"Componente compat\xEDvel"),t(),e(4887,": "),i(4888,"code"),e(4889,"thf-lookup"),t()()()()(),i(4890,"tr",19)(4891,"td",20)(4892,"div",21)(4893,"span",22),e(4894," onInputChange"),a(4895,"br"),t()()(),i(4896,"td",23)(4897,"code",126),e(4898,"(value: any) => void"),t()(),i(4899,"td",26)(4900,"em")(4901,"strong"),e(4902,"(opcional)"),t()(),i(4903,"p"),e(4904,"Deve ser informada uma fun\xE7\xE3o que ser\xE1 disparada quando houver altera\xE7\xF5es no campo de busca do componente. A fun\xE7\xE3o receber\xE1 como argumento o valor modificado."),t(),i(4905,"blockquote")(4906,"p")(4907,"strong"),e(4908,"Componente compat\xEDvel"),t(),e(4909,": "),i(4910,"code"),e(4911,"po-combo"),t()()()()(),i(4912,"tr",19)(4913,"td",20)(4914,"div",21)(4915,"span",22),e(4916," onSelected"),a(4917,"br"),t()()(),i(4918,"td",23)(4919,"code",129),e(4920,"(selection: any "),t(),i(4921,"code",130),e(4922," Array<any>) => void"),t()(),i(4923,"td",26)(4924,"em")(4925,"strong"),e(4926,"(opcional)"),t()(),i(4927,"p"),e(4928,"Callback disparado ao selecionar item(s)."),t(),i(4929,"blockquote")(4930,"p")(4931,"strong"),e(4932,"Componente compat\xEDvel"),t(),e(4933,": "),i(4934,"code"),e(4935,"thf-lookup"),t()()()()(),i(4936,"tr",19)(4937,"td",20)(4938,"div",21)(4939,"span",22),e(4940," readonly"),a(4941,"br"),t()()(),i(4942,"td",23)(4943,"code",24),e(4944,"boolean "),t(),i(4945,"code",121),e(4946," ((rowData: any, column?: ThfGridColumn) => boolean)"),t()(),i(4947,"td",26)(4948,"em")(4949,"strong"),e(4950,"(opcional)"),t()(),i(4951,"p"),e(4952,`Indica que o campo ser\xE1 somente leitura. Pode ser um valor booleano fixo
ou uma fun\xE7\xE3o din\xE2mica que recebe os dados da linha e retorna um booleano`),t()()(),i(4953,"tr",19)(4954,"td",20)(4955,"div",21)(4956,"span",22),e(4957," required"),a(4958,"br"),t()()(),i(4959,"td",23)(4960,"code",24),e(4961,"boolean"),t()(),i(4962,"td",26)(4963,"em")(4964,"strong"),e(4965,"(opcional)"),t()(),i(4966,"p"),e(4967,"Define a obrigatoriedade do campo."),t(),i(4968,"blockquote")(4969,"p"),e(4970,"Caso seja definido como "),i(4971,"code"),e(4972,"true"),t(),e(4973,', exibe a label "(Obrigat\xF3rio)" na coluna.'),t()()()(),i(4974,"tr",19)(4975,"td",20)(4976,"div",21)(4977,"span",22),e(4978," size"),a(4979,"br"),t()()(),i(4980,"td",23)(4981,"code",131),e(4982,"'sm' "),t(),i(4983,"code",132),e(4984," 'md' "),t(),i(4985,"code",133),e(4986," 'lg' "),t(),i(4987,"code",134),e(4988," 'xl' "),t(),i(4989,"code",135),e(4990," 'auto'"),t()(),i(4991,"td",26)(4992,"em")(4993,"strong"),e(4994,"(opcional)"),t()(),i(4995,"p"),e(4996,"Propriedade para definir o tamanho do modal."),t(),i(4997,"blockquote")(4998,"p"),e(4999,"Componente compat\xEDvel: "),i(5e3,"code"),e(5001,"thf-lookup"),t(),e(5002,"."),t()()()()()(),i(5003,"po-accordion-item",136)(5004,"h4",9)(5005,"code"),e(5006,"ThfGridDeleteService"),t()(),i(5007,"div",10)(5008,"p"),e(5009,"Interface para excluir algum item via servi\xE7o."),t()(),i(5010,"table",63)(5011,"tr",19)(5012,"th",64)(5013,"div",21)(5014,"h4")(5015,"span",22),e(5016," deleteItem "),t()()()()(),i(5017,"tr",26)(5018,"td",26)(5019,"p"),e(5020,`M\xE9todo que ser\xE1 disparado ao excluir algum item, deve-se retornar
um `),i(5021,"em"),e(5022,"Observable"),t(),e(5023,"."),t()()()(),i(5024,"h5")(5025,"b"),e(5026,"Par\xE2metros"),t()(),i(5027,"table",16)(5028,"tr",17)(5029,"th",18),e(5030,"Nome"),t(),i(5031,"th",18),e(5032,"Tipo"),t(),i(5033,"th",18),e(5034,"Descri\xE7\xE3o"),t()(),i(5035,"tr",19)(5036,"td",20),e(5037," selectedRow"),t(),i(5038,"td",23)(5039,"code",65),e(5040," any "),t()(),i(5041,"td",26)(5042,"p"),e(5043,"Par\xE2metro com o valor do atual item selecionado."),t()()(),i(5044,"tr",19)(5045,"td",20),e(5046," filterParams"),t(),i(5047,"td",23)(5048,"code",65),e(5049," any "),t()(),i(5050,"td",26)(5051,"p"),e(5052,"Valor informado atrav\xE9s da propriedade "),i(5053,"code"),e(5054,"t-param-delete-api"),t(),e(5055,"."),t()()(),i(5056,"tr",19)(5057,"td",20),e(5058," keyValue"),t(),i(5059,"td",23)(5060,"code",65),e(5061," string "),t()(),i(5062,"td",26)(5063,"p"),e(5064,"Valor informado caso tenha alguma coluna com a propriedade "),i(5065,"code"),e(5066,"key"),t(),e(5067," ativa ou o valor da propriedade "),i(5068,"code"),e(5069,"id"),t(),e(5070,"."),t()()()(),a(5071,"br"),i(5072,"table",63)(5073,"tr",19)(5074,"th",64)(5075,"div",21)(5076,"h4")(5077,"span",22),e(5078," deleteBatchItems "),t()()()()(),i(5079,"tr",26)(5080,"td",26)(5081,"p"),e(5082,"M\xE9todo que ser\xE1 disparado ao excluir itens quando o THF-GRID estiver com a propriedade "),i(5083,"code"),e(5084,"t-allow-batch-delete"),t(),e(5085,` habilitada, deve-se retornar
um `),i(5086,"em"),e(5087,"Observable"),t(),e(5088,"."),t(),i(5089,"p"),e(5090,"Ao habilitar a propriedade "),i(5091,"code"),e(5092,"t-allow-batch-delete"),t(),e(5093,", este m\xE9todo sempre ser\xE1 chamado, exluindo um ou v\xE1rios itens."),t()()()(),i(5094,"h5")(5095,"b"),e(5096,"Par\xE2metros"),t()(),i(5097,"table",16)(5098,"tr",17)(5099,"th",18),e(5100,"Nome"),t(),i(5101,"th",18),e(5102,"Tipo"),t(),i(5103,"th",18),e(5104,"Descri\xE7\xE3o"),t()(),i(5105,"tr",19)(5106,"td",20),e(5107," selectedRows"),t(),i(5108,"td",23)(5109,"code",65),e(5110," any "),t()(),i(5111,"td",26)(5112,"p"),e(5113,"Par\xE2metro com os valores dos itens selecionados."),t()()(),i(5114,"tr",19)(5115,"td",20),e(5116," paramDelete"),t(),i(5117,"td",23)(5118,"code",65),e(5119," any "),t()(),i(5120,"td",26)(5121,"p"),e(5122,"Valor informado atrav\xE9s da propriedade "),i(5123,"code"),e(5124,"t-param-delete-api"),t(),e(5125,"."),t()()(),i(5126,"tr",19)(5127,"td",20),e(5128," keys"),t(),i(5129,"td",23)(5130,"code",65),e(5131," string "),t()(),i(5132,"td",26)(5133,"p"),e(5134,"Valor informado caso tenha alguma coluna com a propriedade "),i(5135,"code"),e(5136,"key"),t(),e(5137," ativa ou o valor da propriedade "),i(5138,"code"),e(5139,"id"),t(),e(5140,"."),t()()()(),a(5141,"br"),t(),i(5142,"po-accordion-item",137)(5143,"h4",9)(5144,"code"),e(5145,"ThfGridEditProperties"),t()(),i(5146,"div",10)(5147,"p"),e(5148,"Interface para configura\xE7\xE3o da edi\xE7\xE3o em linha ("),i(5149,"strong"),e(5150,"t-edit-properties"),t(),e(5151,")."),t()(),i(5152,"h4",15),e(5153,"Propriedades"),t(),i(5154,"table",16)(5155,"tr",17)(5156,"th",18),e(5157,"Nome"),t(),i(5158,"th",18),e(5159,"Tipo"),t(),i(5160,"th",18),e(5161,"Descri\xE7\xE3o"),t()(),i(5162,"tr",19)(5163,"td",20)(5164,"div",21)(5165,"span",22),e(5166," actionEdit"),a(5167,"br"),t()()(),i(5168,"td",23)(5169,"code",138),e(5170,"(param: any) => FormGroup"),t()(),i(5171,"td",26)(5172,"p"),e(5173,`M\xE9todo executado ao iniciar o modo edi\xE7\xE3o.
\xC9 passado um par\xE2metro com os valores respectivos de cada coluna.
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5174,"code"),e(5175,"property"),t(),e(5176," da coluna desejada."),t(),i(5177,"p"),e(5178,"Exemplo de envio para a API:"),t(),i(5179,"pre")(5180,"code",28),e(5181,`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-columns]="columns"
  [t-edit-properties]="editProperties"
>
</thf-grid>`),t()(),i(5182,"pre")(5183,"code",31),e(5184,`form: FormGroup;
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
};`),t()()()(),i(5185,"tr",19)(5186,"td",20)(5187,"div",21)(5188,"span",22),e(5189," validate"),a(5190,"br"),t()()(),i(5191,"td",23)(5192,"code",139),e(5193,"(data: any, columnProperty: string) => FormGroup"),t()(),i(5194,"td",26)(5195,"em")(5196,"strong"),e(5197,"(opcional)"),t()(),i(5198,"p"),e(5199,`M\xE9todo executado ao alterar o valor de algum campo do formul\xE1rio.
O primeiro par\xE2metro s\xE3o os valores respectivos de cada coluna.
O segundo par\xE2metro \xE9 indicando a `),i(5200,"code"),e(5201,"property"),t(),e(5202,` da coluna que teve o valor alterado
\xC9 obrigat\xF3rio retornar o formul\xE1rio. Cada FormControl deve estar com o mesmo nome da `),i(5203,"code"),e(5204,"property"),t(),e(5205," da coluna desejada."),t()()()()(),i(5206,"po-accordion-item",140)(5207,"h4",9)(5208,"code"),e(5209,"ThfGridLiterals"),t()(),i(5210,"div",10)(5211,"p"),e(5212,"Interface para customizar literais ("),i(5213,"strong"),e(5214,"t-literals"),t(),e(5215,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(5216,"h4",15),e(5217,"Propriedades"),t(),i(5218,"table",16)(5219,"tr",17)(5220,"th",18),e(5221,"Nome"),t(),i(5222,"th",18),e(5223,"Tipo"),t(),i(5224,"th",18),e(5225,"Descri\xE7\xE3o"),t()(),i(5226,"tr",19)(5227,"td",20)(5228,"div",21)(5229,"span",22),e(5230," advancedSearch"),a(5231,"br"),t()()(),i(5232,"td",23)(5233,"code",40),e(5234,"string"),t()(),i(5235,"td",26)(5236,"em")(5237,"strong"),e(5238,"(opcional)"),t()(),i(5239,"p"),e(5240,"T\xEDtulo do modal Filtros"),t()()(),i(5241,"tr",19)(5242,"td",20)(5243,"div",21)(5244,"span",22),e(5245," bodyDelete"),a(5246,"br"),t()()(),i(5247,"td",23)(5248,"code",40),e(5249,"string"),t()(),i(5250,"td",26)(5251,"em")(5252,"strong"),e(5253,"(opcional)"),t()(),i(5254,"p"),e(5255,"Conte\xFAdo do modal Excluir"),t()()(),i(5256,"tr",19)(5257,"td",20)(5258,"div",21)(5259,"span",22),e(5260," bodyDeleteBatch"),a(5261,"br"),t()()(),i(5262,"td",23)(5263,"code",40),e(5264,"string"),t()(),i(5265,"td",26)(5266,"em")(5267,"strong"),e(5268,"(opcional)"),t()(),i(5269,"p"),e(5270,"Conte\xFAdo do modal Excluir configurado para excluir em lote"),t()()(),i(5271,"tr",19)(5272,"td",20)(5273,"div",21)(5274,"span",22),e(5275," cancel"),a(5276,"br"),t()()(),i(5277,"td",23)(5278,"code",40),e(5279,"string"),t()(),i(5280,"td",26)(5281,"em")(5282,"strong"),e(5283,"(opcional)"),t()(),i(5284,"p"),e(5285,"Label do bot\xE3o Cancelar"),t()()(),i(5286,"tr",19)(5287,"td",20)(5288,"div",21)(5289,"span",22),e(5290," columnsManager"),a(5291,"br"),t()()(),i(5292,"td",23)(5293,"code",40),e(5294,"string"),t()(),i(5295,"td",26)(5296,"em")(5297,"strong"),e(5298,"(opcional)"),t()(),i(5299,"p"),e(5300,"T\xEDtulo do page-slide Gerenciar Tabela"),t()()(),i(5301,"tr",19)(5302,"td",20)(5303,"div",21)(5304,"span",22),e(5305," compact"),a(5306,"br"),t()()(),i(5307,"td",23)(5308,"code",40),e(5309,"string"),t()(),i(5310,"td",26)(5311,"em")(5312,"strong"),e(5313,"(opcional)"),t()(),i(5314,"p"),e(5315,"Label do radio de densidade Compacto no Gerenciar Tabela"),t()()(),i(5316,"tr",19)(5317,"td",20)(5318,"div",21)(5319,"span",22),e(5320," confirm"),a(5321,"br"),t()()(),i(5322,"td",23)(5323,"code",40),e(5324,"string"),t()(),i(5325,"td",26)(5326,"em")(5327,"strong"),e(5328,"(opcional)"),t()(),i(5329,"p"),e(5330,"Label do bot\xE3o Confirmar"),t()()(),i(5331,"tr",19)(5332,"td",20)(5333,"div",21)(5334,"span",22),e(5335," default"),a(5336,"br"),t()()(),i(5337,"td",23)(5338,"code",40),e(5339,"string"),t()(),i(5340,"td",26)(5341,"em")(5342,"strong"),e(5343,"(opcional)"),t()(),i(5344,"p"),e(5345,"Label do radio de densidade Espa\xE7oso no Gerenciar Tabela"),t()()(),i(5346,"tr",19)(5347,"td",20)(5348,"div",21)(5349,"span",22),e(5350," delete"),a(5351,"br"),t()()(),i(5352,"td",23)(5353,"code",40),e(5354,"string"),t()(),i(5355,"td",26)(5356,"em")(5357,"strong"),e(5358,"(opcional)"),t()(),i(5359,"p"),e(5360,"Label do bot\xE3o Excluir"),t()()(),i(5361,"tr",19)(5362,"td",20)(5363,"div",21)(5364,"span",22),e(5365," deleteApiError"),a(5366,"br"),t()()(),i(5367,"td",23)(5368,"code",40),e(5369,"string"),t()(),i(5370,"td",26)(5371,"em")(5372,"strong"),e(5373,"(opcional)"),t()(),i(5374,"p"),e(5375,"Resposta de erro da requisi\xE7\xE3o delete no popup"),t()()(),i(5376,"tr",19)(5377,"td",20)(5378,"div",21)(5379,"span",22),e(5380," deleteItem"),a(5381,"br"),t()()(),i(5382,"td",23)(5383,"code",40),e(5384,"string"),t()(),i(5385,"td",26)(5386,"em")(5387,"strong"),e(5388,"(opcional)"),t()(),i(5389,"p"),e(5390,"T\xEDtulo do modal Excluir"),t()()(),i(5391,"tr",19)(5392,"td",20)(5393,"div",21)(5394,"span",22),e(5395," density"),a(5396,"br"),t()()(),i(5397,"td",23)(5398,"code",40),e(5399,"string"),t()(),i(5400,"td",26)(5401,"em")(5402,"strong"),e(5403,"(opcional)"),t()(),i(5404,"p"),e(5405,'T\xEDtulo da sess\xE3o "Densidade" no Gerenciar Tabela'),t()()(),i(5406,"tr",19)(5407,"td",20)(5408,"div",21)(5409,"span",22),e(5410," draggable"),a(5411,"br"),t()()(),i(5412,"td",23)(5413,"code",40),e(5414,"string"),t()(),i(5415,"td",26)(5416,"em")(5417,"strong"),e(5418,"(opcional)"),t()(),i(5419,"p"),e(5420,'Label da op\xE7\xE3o "Draggable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5421,"tr",19)(5422,"td",20)(5423,"div",21)(5424,"span",22),e(5425," edit"),a(5426,"br"),t()()(),i(5427,"td",23)(5428,"code",40),e(5429,"string"),t()(),i(5430,"td",26)(5431,"em")(5432,"strong"),e(5433,"(opcional)"),t()(),i(5434,"p"),e(5435,"Label do bot\xE3o Editar"),t()()(),i(5436,"tr",19)(5437,"td",20)(5438,"div",21)(5439,"span",22),e(5440," editRow"),a(5441,"br"),t()()(),i(5442,"td",23)(5443,"code",40),e(5444,"string"),t()(),i(5445,"td",26)(5446,"em")(5447,"strong"),e(5448,"(opcional)"),t()(),i(5449,"p"),e(5450,"T\xEDtulo das a\xE7\xF5es quando Edi\xE7\xE3o em linha."),t()()(),i(5451,"tr",19)(5452,"td",20)(5453,"div",21)(5454,"span",22),e(5455," export"),a(5456,"br"),t()()(),i(5457,"td",23)(5458,"code",40),e(5459,"string"),t()(),i(5460,"td",26)(5461,"em")(5462,"strong"),e(5463,"(opcional)"),t()(),i(5464,"p"),e(5465,"Label do bot\xE3o Exportar"),t()()(),i(5466,"tr",19)(5467,"td",20)(5468,"div",21)(5469,"span",22),e(5470," exportExcel"),a(5471,"br"),t()()(),i(5472,"td",23)(5473,"code",40),e(5474,"string"),t()(),i(5475,"td",26)(5476,"em")(5477,"strong"),e(5478,"(opcional)"),t()(),i(5479,"p"),e(5480,"Label do bot\xE3o Exportar Excel"),t()()(),i(5481,"tr",19)(5482,"td",20)(5483,"div",21)(5484,"span",22),e(5485," exportPDF"),a(5486,"br"),t()()(),i(5487,"td",23)(5488,"code",40),e(5489,"string"),t()(),i(5490,"td",26)(5491,"em")(5492,"strong"),e(5493,"(opcional)"),t()(),i(5494,"p"),e(5495,"Label do bot\xE3o Exportar PDF"),t()()(),i(5496,"tr",19)(5497,"td",20)(5498,"div",21)(5499,"span",22),e(5500," extraCompact"),a(5501,"br"),t()()(),i(5502,"td",23)(5503,"code",40),e(5504,"string"),t()(),i(5505,"td",26)(5506,"em")(5507,"strong"),e(5508,"(opcional)"),t()(),i(5509,"p"),e(5510,"Label do radio de densidade Extra Compacto no Gerenciar Tabela"),t()()(),i(5511,"tr",19)(5512,"td",20)(5513,"div",21)(5514,"span",22),e(5515," filters"),a(5516,"br"),t()()(),i(5517,"td",23)(5518,"code",40),e(5519,"string"),t()(),i(5520,"td",26)(5521,"em")(5522,"strong"),e(5523,"(opcional)"),t()(),i(5524,"p"),e(5525,"Label do bot\xE3o Filtros"),t()()(),i(5526,"tr",19)(5527,"td",20)(5528,"div",21)(5529,"span",22),e(5530," fixed"),a(5531,"br"),t()()(),i(5532,"td",23)(5533,"code",40),e(5534,"string"),t()(),i(5535,"td",26)(5536,"em")(5537,"strong"),e(5538,"(opcional)"),t()(),i(5539,"p"),e(5540,'T\xEDtulo da sess\xE3o "Fixo" no Gerenciar Tabela'),t()()(),i(5541,"tr",19)(5542,"td",20)(5543,"div",21)(5544,"span",22),e(5545," gridRowActionsConfirmAddCancelButton"),a(5546,"br"),t()()(),i(5547,"td",23)(5548,"code",40),e(5549,"string"),t()(),i(5550,"td",26)(5551,"em")(5552,"strong"),e(5553,"(opcional)"),t()(),i(5554,"p"),e(5555,'Label do bot\xE3o "Cancelar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5556,"tr",19)(5557,"td",20)(5558,"div",21)(5559,"span",22),e(5560," gridRowActionsConfirmAddConfirmButton"),a(5561,"br"),t()()(),i(5562,"td",23)(5563,"code",40),e(5564,"string"),t()(),i(5565,"td",26)(5566,"em")(5567,"strong"),e(5568,"(opcional)"),t()(),i(5569,"p"),e(5570,'Label do bot\xE3o "Confirmar" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5571,"tr",19)(5572,"td",20)(5573,"div",21)(5574,"span",22),e(5575," gridRowActionsConfirmAddTitle"),a(5576,"br"),t()()(),i(5577,"td",23)(5578,"code",40),e(5579,"string"),t()(),i(5580,"td",26)(5581,"em")(5582,"strong"),e(5583,"(opcional)"),t()(),i(5584,"p"),e(5585,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5586,"tr",19)(5587,"td",20)(5588,"div",21)(5589,"span",22),e(5590," gridRowActionsConfirmEditTitle"),a(5591,"br"),t()()(),i(5592,"td",23)(5593,"code",40),e(5594,"string"),t()(),i(5595,"td",26)(5596,"em")(5597,"strong"),e(5598,"(opcional)"),t()(),i(5599,"p"),e(5600,'T\xEDtulo do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(5601,"tr",19)(5602,"td",20)(5603,"div",21)(5604,"span",22),e(5605," gridRowActionsConfirmRemoveAttention"),a(5606,"br"),t()()(),i(5607,"td",23)(5608,"code",40),e(5609,"string"),t()(),i(5610,"td",26)(5611,"em")(5612,"strong"),e(5613,"(opcional)"),t()(),i(5614,"p"),e(5615,'Texto de "Aten\xE7\xE3o:" do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5616,"tr",19)(5617,"td",20)(5618,"div",21)(5619,"span",22),e(5620," gridRowActionsConfirmRemoveConfirmButton"),a(5621,"br"),t()()(),i(5622,"td",23)(5623,"code",40),e(5624,"string"),t()(),i(5625,"td",26)(5626,"em")(5627,"strong"),e(5628,"(opcional)"),t()(),i(5629,"p"),e(5630,'Label do bot\xE3o "Excluir" no modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5631,"tr",19)(5632,"td",20)(5633,"div",21)(5634,"span",22),e(5635," gridRowActionsConfirmRemoveDescription"),a(5636,"br"),t()()(),i(5637,"td",23)(5638,"code",40),e(5639,"string"),t()(),i(5640,"td",26)(5641,"em")(5642,"strong"),e(5643,"(opcional)"),t()(),i(5644,"p"),e(5645,'Descri\xE7\xE3o do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5646,"tr",19)(5647,"td",20)(5648,"div",21)(5649,"span",22),e(5650," gridRowActionsConfirmRemoveTitle"),a(5651,"br"),t()()(),i(5652,"td",23)(5653,"code",40),e(5654,"string"),t()(),i(5655,"td",26)(5656,"em")(5657,"strong"),e(5658,"(opcional)"),t()(),i(5659,"p"),e(5660,'T\xEDtulo do modal "Exclus\xE3o dos dados inseridos".'),t()()(),i(5661,"tr",19)(5662,"td",20)(5663,"div",21)(5664,"span",22),e(5665," gridRowActionsRestoreSuccessful"),a(5666,"br"),t()()(),i(5667,"td",23)(5668,"code",40),e(5669,"string"),t()(),i(5670,"td",26)(5671,"em")(5672,"strong"),e(5673,"(opcional)"),t()(),i(5674,"p"),e(5675,"Texto exibido ao restaurar um item exclu\xEDdo."),t()()(),i(5676,"tr",19)(5677,"td",20)(5678,"div",21)(5679,"span",22),e(5680," groupable"),a(5681,"br"),t()()(),i(5682,"td",23)(5683,"code",40),e(5684,"string"),t()(),i(5685,"td",26)(5686,"em")(5687,"strong"),e(5688,"(opcional)"),t()(),i(5689,"p"),e(5690,'Label da op\xE7\xE3o "Groupable" na sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5691,"tr",19)(5692,"td",20)(5693,"div",21)(5694,"span",22),e(5695," groupableText"),a(5696,"br"),t()()(),i(5697,"td",23)(5698,"code",40),e(5699,"string"),t()(),i(5700,"td",26)(5701,"em")(5702,"strong"),e(5703,"(opcional)"),t()(),i(5704,"p"),e(5705,"Texto do cabe\xE7alho onde se deve soltar as colunas que devem ser agrupadas."),t()()(),i(5706,"tr",19)(5707,"td",20)(5708,"div",21)(5709,"span",22),e(5710," legendListOptions"),a(5711,"br"),t()()(),i(5712,"td",23)(5713,"code",40),e(5714,"string"),t()(),i(5715,"td",26)(5716,"em")(5717,"strong"),e(5718,"(opcional)"),t()(),i(5719,"p"),e(5720,'T\xEDtulo da sess\xE3o "Selecione op\xE7\xE3o para utilizar na tabela" no Gerenciar Tabela'),t()()(),i(5721,"tr",19)(5722,"td",20)(5723,"div",21)(5724,"span",22),e(5725," loadMoreData"),a(5726,"br"),t()()(),i(5727,"td",23)(5728,"code",40),e(5729,"string"),t()(),i(5730,"td",26)(5731,"em")(5732,"strong"),e(5733,"(opcional)"),t()(),i(5734,"p"),e(5735,"Label do bot\xE3o Carregar mais resultados"),t()()(),i(5736,"tr",19)(5737,"td",20)(5738,"div",21)(5739,"span",22),e(5740," loadingData"),a(5741,"br"),t()()(),i(5742,"td",23)(5743,"code",40),e(5744,"string"),t()(),i(5745,"td",26)(5746,"em")(5747,"strong"),e(5748,"(opcional)"),t()(),i(5749,"p"),e(5750,"Texto do modal Carregando..."),t()()(),i(5751,"tr",19)(5752,"td",20)(5753,"div",21)(5754,"span",22),e(5755," manageTable"),a(5756,"br"),t()()(),i(5757,"td",23)(5758,"code",40),e(5759,"string"),t()(),i(5760,"td",26)(5761,"em")(5762,"strong"),e(5763,"(opcional)"),t()(),i(5764,"p"),e(5765,"Label do bot\xE3o Gerenciar Tabela"),t()()(),i(5766,"tr",19)(5767,"td",20)(5768,"div",21)(5769,"span",22),e(5770," moreActions"),a(5771,"br"),t()()(),i(5772,"td",23)(5773,"code",40),e(5774,"string"),t()(),i(5775,"td",26)(5776,"em")(5777,"strong"),e(5778,"(opcional)"),t()(),i(5779,"p"),e(5780,"Label do bot\xE3o Mais a\xE7\xF5es"),t()()(),i(5781,"tr",19)(5782,"td",20)(5783,"div",21)(5784,"span",22),e(5785," multipleItems"),a(5786,"br"),t()()(),i(5787,"td",23)(5788,"code",40),e(5789,"string"),t()(),i(5790,"td",26)(5791,"em")(5792,"strong"),e(5793,"(opcional)"),t()(),i(5794,"p"),e(5795,"Texto auxiliar ao selecionar muitos itens exibido nas a\xE7\xF5es em lote."),t()()(),i(5796,"tr",19)(5797,"td",20)(5798,"div",21)(5799,"span",22),e(5800," noColumns"),a(5801,"br"),t()()(),i(5802,"td",23)(5803,"code",40),e(5804,"string"),t()(),i(5805,"td",26)(5806,"em")(5807,"strong"),e(5808,"(opcional)"),t()(),i(5809,"p"),e(5810,"Mensagem exibida quando n\xE3o existem colunas definidas."),t()()(),i(5811,"tr",19)(5812,"td",20)(5813,"div",21)(5814,"span",22),e(5815," noData"),a(5816,"br"),t()()(),i(5817,"td",23)(5818,"code",40),e(5819,"string"),t()(),i(5820,"td",26)(5821,"em")(5822,"strong"),e(5823,"(opcional)"),t()(),i(5824,"p"),e(5825,"Mensagem exibida quando n\xE3o existem itens para serem exibidos."),t()()(),i(5826,"tr",19)(5827,"td",20)(5828,"div",21)(5829,"span",22),e(5830," noDataDescriptionRowStateFilterActive"),a(5831,"br"),t()()(),i(5832,"td",23)(5833,"code",40),e(5834,"string"),t()(),i(5835,"td",26)(5836,"em")(5837,"strong"),e(5838,"(opcional)"),t()(),i(5839,"p"),e(5840,"Descri\xE7\xE3o exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(5841,"tr",19)(5842,"td",20)(5843,"div",21)(5844,"span",22),e(5845," noDataDescriptionRowStateFilterRemoved"),a(5846,"br"),t()()(),i(5847,"td",23)(5848,"code",40),e(5849,"string"),t()(),i(5850,"td",26)(5851,"em")(5852,"strong"),e(5853,"(opcional)"),t()(),i(5854,"p"),e(5855,"Descri\xE7\xE3o exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(5856,"tr",19)(5857,"td",20)(5858,"div",21)(5859,"span",22),e(5860," noDataRowStateFilterActive"),a(5861,"br"),t()()(),i(5862,"td",23)(5863,"code",40),e(5864,"string"),t()(),i(5865,"td",26)(5866,"em")(5867,"strong"),e(5868,"(opcional)"),t()(),i(5869,"p"),e(5870,"Mensagem exibida quando n\xE3o existem itens ativos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(5871,"tr",19)(5872,"td",20)(5873,"div",21)(5874,"span",22),e(5875," noDataRowStateFilterRemoved"),a(5876,"br"),t()()(),i(5877,"td",23)(5878,"code",40),e(5879,"string"),t()(),i(5880,"td",26)(5881,"em")(5882,"strong"),e(5883,"(opcional)"),t()(),i(5884,"p"),e(5885,"Mensagem exibida quando n\xE3o existem itens exclu\xEDdos para serem exibidos na edi\xE7\xE3o flu\xEDda."),t()()(),i(5886,"tr",19)(5887,"td",20)(5888,"div",21)(5889,"span",22),e(5890," noItem"),a(5891,"br"),t()()(),i(5892,"td",23)(5893,"code",40),e(5894,"string"),t()(),i(5895,"td",26)(5896,"em")(5897,"strong"),e(5898,"(opcional)"),t()(),i(5899,"p"),e(5900,"Mensagem exibida quando nenhum item est\xE1 selecionado."),t()()(),i(5901,"tr",19)(5902,"td",20)(5903,"div",21)(5904,"span",22),e(5905," oneItem"),a(5906,"br"),t()()(),i(5907,"td",23)(5908,"code",40),e(5909,"string"),t()(),i(5910,"td",26)(5911,"em")(5912,"strong"),e(5913,"(opcional)"),t()(),i(5914,"p"),e(5915,"Texto ao selecionar um \xFAnico item exibido nas a\xE7\xF5es em lote."),t()()(),i(5916,"tr",19)(5917,"td",20)(5918,"div",21)(5919,"span",22),e(5920," onlyRequiredFields"),a(5921,"br"),t()()(),i(5922,"td",23)(5923,"code",40),e(5924,"string"),t()(),i(5925,"td",26)(5926,"em")(5927,"strong"),e(5928,"(opcional)"),t()(),i(5929,"p"),e(5930,'Label do toggle "Apenas campos obrigat\xF3rios" na edi\xE7\xE3o flu\xEDda.'),t()()(),i(5931,"tr",19)(5932,"td",20)(5933,"div",21)(5934,"span",22),e(5935," otherColumns"),a(5936,"br"),t()()(),i(5937,"td",23)(5938,"code",40),e(5939,"string"),t()(),i(5940,"td",26)(5941,"em")(5942,"strong"),e(5943,"(opcional)"),t()(),i(5944,"p"),e(5945,'T\xEDtulo da sess\xE3o "Outras colunas" no Gerenciar Tabela'),t()()(),i(5946,"tr",19)(5947,"td",20)(5948,"div",21)(5949,"span",22),e(5950," placeholderSearchInput"),a(5951,"br"),t()()(),i(5952,"td",23)(5953,"code",40),e(5954,"string"),t()(),i(5955,"td",26)(5956,"em")(5957,"strong"),e(5958,"(opcional)"),t()(),i(5959,"p"),e(5960,"Placeholder do campo Buscar na tabela"),t()()(),i(5961,"tr",19)(5962,"td",20)(5963,"div",21)(5964,"span",22),e(5965," requiredFieldsToasterDisableActionLabel"),a(5966,"br"),t()()(),i(5967,"td",23)(5968,"code",40),e(5969,"string"),t()(),i(5970,"td",26)(5971,"em")(5972,"strong"),e(5973,"(opcional)"),t()(),i(5974,"p"),e(5975,"Label da a\xE7\xE3o exibida no Toaster para desativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(5976,"tr",19)(5977,"td",20)(5978,"div",21)(5979,"span",22),e(5980," requiredFieldsToasterEnableActionLabel"),a(5981,"br"),t()()(),i(5982,"td",23)(5983,"code",40),e(5984,"string"),t()(),i(5985,"td",26)(5986,"em")(5987,"strong"),e(5988,"(opcional)"),t()(),i(5989,"p"),e(5990,"Label da a\xE7\xE3o exibida no Toaster para ativar a visualiza\xE7\xE3o de campos obrigat\xF3rios"),t()()(),i(5991,"tr",19)(5992,"td",20)(5993,"div",21)(5994,"span",22),e(5995," requiredFieldsToasterMessage"),a(5996,"br"),t()()(),i(5997,"td",23)(5998,"code",40),e(5999,"string"),t()(),i(6e3,"td",26)(6001,"em")(6002,"strong"),e(6003,"(opcional)"),t()(),i(6004,"p"),e(6005,"Texto exibido no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(6006,"tr",19)(6007,"td",20)(6008,"div",21)(6009,"span",22),e(6010," requiredFieldsToasterSupportMessage"),a(6011,"br"),t()()(),i(6012,"td",23)(6013,"code",40),e(6014,"string"),t()(),i(6015,"td",26)(6016,"em")(6017,"strong"),e(6018,"(opcional)"),t()(),i(6019,"p"),e(6020,"Mensagem de suporte exibida no Toaster quando campos obrigat\xF3rios n\xE3o s\xE3o preenchidos"),t()()(),i(6021,"tr",19)(6022,"td",20)(6023,"div",21)(6024,"span",22),e(6025," restoreDefault"),a(6026,"br"),t()()(),i(6027,"td",23)(6028,"code",40),e(6029,"string"),t()(),i(6030,"td",26)(6031,"em")(6032,"strong"),e(6033,"(opcional)"),t()(),i(6034,"p"),e(6035,'Label do bot\xE3o "Restaurar padr\xE3o" no Gerenciar Tabela'),t()()(),i(6036,"tr",19)(6037,"td",20)(6038,"div",21)(6039,"span",22),e(6040," resultsByPage"),a(6041,"br"),t()()(),i(6042,"td",23)(6043,"code",40),e(6044,"string"),t()(),i(6045,"td",26)(6046,"em")(6047,"strong"),e(6048,"(opcional)"),t()(),i(6049,"p"),e(6050,'Label "Resultados por p\xE1gina" no Gerenciar Tabela.'),t()()(),i(6051,"tr",19)(6052,"td",20)(6053,"div",21)(6054,"span",22),e(6055," rowStateFilterActive"),a(6056,"br"),t()()(),i(6057,"td",23)(6058,"code",40),e(6059,"string"),t()(),i(6060,"td",26)(6061,"em")(6062,"strong"),e(6063,"(opcional)"),t()(),i(6064,"p"),e(6065,"Label do filtro para mostrar itens ativos"),t()()(),i(6066,"tr",19)(6067,"td",20)(6068,"div",21)(6069,"span",22),e(6070," rowStateFilterActiveLabel"),a(6071,"br"),t()()(),i(6072,"td",23)(6073,"code",40),e(6074,"string"),t()(),i(6075,"td",26)(6076,"em")(6077,"strong"),e(6078,"(opcional)"),t()(),i(6079,"p"),e(6080,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens ativos"),t()()(),i(6081,"tr",19)(6082,"td",20)(6083,"div",21)(6084,"span",22),e(6085," rowStateFilterRemoved"),a(6086,"br"),t()()(),i(6087,"td",23)(6088,"code",40),e(6089,"string"),t()(),i(6090,"td",26)(6091,"em")(6092,"strong"),e(6093,"(opcional)"),t()(),i(6094,"p"),e(6095,"Label do filtro para mostrar itens exclu\xEDdos"),t()()(),i(6096,"tr",19)(6097,"td",20)(6098,"div",21)(6099,"span",22),e(6100," rowStateFilterRemovedLabel"),a(6101,"br"),t()()(),i(6102,"td",23)(6103,"code",40),e(6104,"string"),t()(),i(6105,"td",26)(6106,"em")(6107,"strong"),e(6108,"(opcional)"),t()(),i(6109,"p"),e(6110,"Label do filtro ap\xF3s selecionar a exibi\xE7\xE3o de itens exclu\xEDdos"),t()()(),i(6111,"tr",19)(6112,"td",20)(6113,"div",21)(6114,"span",22),e(6115," save"),a(6116,"br"),t()()(),i(6117,"td",23)(6118,"code",40),e(6119,"string"),t()(),i(6120,"td",26)(6121,"em")(6122,"strong"),e(6123,"(opcional)"),t()(),i(6124,"p"),e(6125,"Label do bot\xE3o Salvar"),t()()(),i(6126,"tr",19)(6127,"td",20)(6128,"div",21)(6129,"span",22),e(6130," selectedItemsMultipleLabel"),a(6131,"br"),t()()(),i(6132,"td",23)(6133,"code",40),e(6134,"string"),t()(),i(6135,"td",26)(6136,"em")(6137,"strong"),e(6138,"(opcional)"),t()(),i(6139,"p"),e(6140,"Texto exibido ao selecionar m\xFAltiplos itens"),t()()(),i(6141,"tr",19)(6142,"td",20)(6143,"div",21)(6144,"span",22),e(6145," selectedItemsSingleLabel"),a(6146,"br"),t()()(),i(6147,"td",23)(6148,"code",40),e(6149,"string"),t()(),i(6150,"td",26)(6151,"em")(6152,"strong"),e(6153,"(opcional)"),t()(),i(6154,"p"),e(6155,"Texto exibido ao selecionar um \xFAnico item"),t()()(),i(6156,"tr",19)(6157,"td",20)(6158,"div",21)(6159,"span",22),e(6160," showOnlySelectedItemsTooltip"),a(6161,"br"),t()()(),i(6162,"td",23)(6163,"code",40),e(6164,"string"),t()(),i(6165,"td",26)(6166,"em")(6167,"strong"),e(6168,"(opcional)"),t()(),i(6169,"p"),e(6170,"Tooltip exibido ao passar o mouse sobre o switch que filtra itens selecionados"),t()()(),i(6171,"tr",19)(6172,"td",20)(6173,"div",21)(6174,"span",22),e(6175," warningAbandonEditing"),a(6176,"br"),t()()(),i(6177,"td",23)(6178,"code",40),e(6179,"string"),t()(),i(6180,"td",26)(6181,"em")(6182,"strong"),e(6183,"(opcional)"),t()(),i(6184,"p"),e(6185,'Mensagem do modal "Abandonar edi\xE7\xE3o da linha".'),t()()(),i(6186,"tr",19)(6187,"td",20)(6188,"div",21)(6189,"span",22),e(6190," warningColumnsRequired"),a(6191,"br"),t()()(),i(6192,"td",23)(6193,"code",40),e(6194,"string"),t()(),i(6195,"td",26)(6196,"em")(6197,"strong"),e(6198,"(opcional)"),t()(),i(6199,"p"),e(6200,'Mensagem do modal "Exclus\xE3o dos dados inseridos".'),t()()()()(),i(6201,"po-accordion-item",141)(6202,"h4",9)(6203,"code"),e(6204,"ThfGridOptionPaging"),t()(),i(6205,"div",10)(6206,"p"),e(6207,"Interface para configura\xE7\xE3o das op\xE7\xF5es de pagina\xE7\xE3o ("),i(6208,"strong"),e(6209,"t-options-paging"),t(),e(6210,")."),t()(),i(6211,"h4",15),e(6212,"Propriedades"),t(),i(6213,"table",16)(6214,"tr",17)(6215,"th",18),e(6216,"Nome"),t(),i(6217,"th",18),e(6218,"Tipo"),t(),i(6219,"th",18),e(6220,"Descri\xE7\xE3o"),t()(),i(6221,"tr",19)(6222,"td",20)(6223,"div",21)(6224,"span",22),e(6225," label"),a(6226,"br"),t()()(),i(6227,"td",23)(6228,"code",40),e(6229,"string"),t()(),i(6230,"td",26)(6231,"p"),e(6232,"Label correspondente a quantidade de itens"),t()()(),i(6233,"tr",19)(6234,"td",20)(6235,"div",21)(6236,"span",22),e(6237," value"),a(6238,"br"),t()()(),i(6239,"td",23)(6240,"code",52),e(6241,"number"),t()(),i(6242,"td",26)(6243,"p"),e(6244,"Quantidade de itens por p\xE1gina"),t()()()()(),i(6245,"po-accordion-item",142)(6246,"h4",9)(6247,"code"),e(6248,"ThfGridOptions"),t()(),i(6249,"div",10)(6250,"p"),e(6251,"Interface para as propriedades que permitem personalizar dinamicamente o comportamento do componente."),t()(),i(6252,"h4",15),e(6253,"Propriedades"),t(),i(6254,"table",16)(6255,"tr",17)(6256,"th",18),e(6257,"Nome"),t(),i(6258,"th",18),e(6259,"Tipo"),t(),i(6260,"th",18),e(6261,"Descri\xE7\xE3o"),t()(),i(6262,"tr",19)(6263,"td",20)(6264,"div",21)(6265,"span",22),e(6266," actions"),a(6267,"br"),t()()(),i(6268,"td",23)(6269,"code",29),e(6270,"Array<ThfTableAction>"),t()(),i(6271,"td",26)(6272,"em")(6273,"strong"),e(6274,"(opcional)"),t()(),i(6275,"p"),e(6276,"A\xE7\xF5es que o usu\xE1rio poder\xE1 executar no grid atrav\xE9s de bot\xF5es."),t()()(),i(6277,"tr",19)(6278,"td",20)(6279,"div",21)(6280,"span",22),e(6281," columns"),a(6282,"br"),t()()(),i(6283,"td",23)(6284,"code",37),e(6285,"Array<ThfGridColumn>"),t()(),i(6286,"td",26)(6287,"em")(6288,"strong"),e(6289,"(opcional)"),t()(),i(6290,"p"),e(6291,`Lista das colunas usadas no grid e busca avan\xE7ada.
Caso precise alterar uma coluna que j\xE1 exista deve ser passado o atributo `),i(6292,"code"),e(6293,"property"),t(),e(6294," com o mesmo conte\xFAdo do original."),t()()(),i(6295,"tr",19)(6296,"td",20)(6297,"div",21)(6298,"span",22),e(6299," customActions"),a(6300,"br"),t()()(),i(6301,"td",23)(6302,"code",42),e(6303,"Array<PoDropdownAction>"),t()(),i(6304,"td",26)(6305,"em")(6306,"strong"),e(6307,"(opcional)"),t()(),i(6308,"p"),e(6309,"Lista de a\xE7\xF5es customizadas do grid que ser\xE3o incorporadas \xE0s a\xE7\xF5es informadas atrav\xE9s da propriedade "),i(6310,"code"),e(6311,"actions"),t(),e(6312,"."),t(),i(6313,"pre")(6314,"code",31),e(6315,`// Exemplo de uso:
[
 { label: 'Apply Discount', action: this.applyDiscount.bind(this) },
 { label: 'Details', action: this.details.bind(this) }
];`),t()()()()()(),i(6316,"po-accordion-item",143)(6317,"h4",9)(6318,"code"),e(6319,"ThfGridRowActions"),t()(),i(6320,"div",10)(6321,"p"),e(6322,"Interface para configura\xE7\xE3o da edi\xE7\xE3o flu\xEDda ("),i(6323,"strong"),e(6324,"t-grid-row-actions"),t(),e(6325,`).
Essas a\xE7\xF5es permitem manipular o comportamento de edi\xE7\xE3o, inser\xE7\xE3o e remo\xE7\xE3o de dados no grid.`),t()(),i(6326,"h4",15),e(6327,"Propriedades"),t(),i(6328,"table",16)(6329,"tr",17)(6330,"th",18),e(6331,"Nome"),t(),i(6332,"th",18),e(6333,"Tipo"),t(),i(6334,"th",18),e(6335,"Descri\xE7\xE3o"),t()(),i(6336,"tr",19)(6337,"td",20)(6338,"div",21)(6339,"span",22),e(6340," actionEdit"),a(6341,"br"),t()()(),i(6342,"td",23)(6343,"code",144),e(6344,"(param: any, mode: 'edit' "),t(),i(6345,"code",145),e(6346," 'include') => FormGroup "),t(),i(6347,"code",146),e(6348," Observable<FormGroup>"),t()(),i(6349,"td",26)(6350,"p"),e(6351,`Fun\xE7\xE3o respons\xE1vel por iniciar o modo de edi\xE7\xE3o ou inclus\xE3o de uma linha no grid.
O m\xE9todo recebe os dados da linha selecionada ou um objeto vazio no modo de inclus\xE3o.
Deve retornar um `),i(6352,"code"),e(6353,"FormGroup"),t(),e(6354," que ser\xE1 utilizado para controlar os valores das colunas edit\xE1veis."),t(),i(6355,"pre")(6356,"code",31),e(6357,`// Exemplo de uso:

actionEdit: (param, mode) => new FormGroup({
  name: new FormControl(param.name),
  age: new FormControl(param.age)
})`),t()(),i(6358,"p"),e(6359,"ou"),t(),i(6360,"pre")(6361,"code",31),e(6362,`actionEdit: (dataItem, mode) => {
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
 }`),t()()()(),i(6363,"tr",19)(6364,"td",20)(6365,"div",21)(6366,"span",22),e(6367," afterRemove"),a(6368,"br"),t()()(),i(6369,"td",23)(6370,"code",147),e(6371,"(row: any) => void"),t()(),i(6372,"td",26)(6373,"em")(6374,"strong"),e(6375,"(opcional)"),t()(),i(6376,"p"),e(6377,`Fun\xE7\xE3o opcional executada ap\xF3s a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(6378,"tr",19)(6379,"td",20)(6380,"div",21)(6381,"span",22),e(6382," afterSave"),a(6383,"br"),t()()(),i(6384,"td",23)(6385,"code",147),e(6386,"(row: any) => void"),t()(),i(6387,"td",26)(6388,"em")(6389,"strong"),e(6390,"(opcional)"),t()(),i(6391,"p"),e(6392,`Fun\xE7\xE3o opcional executada ap\xF3s o salvamento de uma linha editada.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s a conclus\xE3o de uma edi\xE7\xE3o.`),t()()(),i(6393,"tr",19)(6394,"td",20)(6395,"div",21)(6396,"span",22),e(6397," afterUndoRemove"),a(6398,"br"),t()()(),i(6399,"td",23)(6400,"code",147),e(6401,"(row: any) => void"),t()(),i(6402,"td",26)(6403,"em")(6404,"strong"),e(6405,"(opcional)"),t()(),i(6406,"p"),e(6407,`Fun\xE7\xE3o opcional executada ap\xF3s desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para realizar a\xE7\xF5es adicionais ap\xF3s desfazer a remo\xE7\xE3o de dados, como exibir notifica\xE7\xF5es.`),t()()(),i(6408,"tr",19)(6409,"td",20)(6410,"div",21)(6411,"span",22),e(6412," beforeInsert"),a(6413,"br"),t()()(),i(6414,"td",23)(6415,"code",148),e(6416,"(row: any) => boolean "),t(),i(6417,"code",149),e(6418," Observable<boolean>"),t()(),i(6419,"td",26)(6420,"em")(6421,"strong"),e(6422,"(opcional)"),t()(),i(6423,"p"),e(6424,`Fun\xE7\xE3o opcional executada antes de inserir uma nova linha no grid.
Pode ser usada para validar ou modificar os dados antes da inclus\xE3o.`),t()()(),i(6425,"tr",19)(6426,"td",20)(6427,"div",21)(6428,"span",22),e(6429," beforeRemove"),a(6430,"br"),t()()(),i(6431,"td",23)(6432,"code",148),e(6433,"(row: any) => boolean "),t(),i(6434,"code",149),e(6435," Observable<boolean>"),t()(),i(6436,"td",26)(6437,"em")(6438,"strong"),e(6439,"(opcional)"),t()(),i(6440,"p"),e(6441,`Fun\xE7\xE3o opcional executada antes de remover uma linha do grid.
Pode ser usada para validar ou confirmar a remo\xE7\xE3o da linha.`),t()()(),i(6442,"tr",19)(6443,"td",20)(6444,"div",21)(6445,"span",22),e(6446," beforeSave"),a(6447,"br"),t()()(),i(6448,"td",23)(6449,"code",150),e(6450,"(updatedRow: any, originalRow: any) => boolean "),t(),i(6451,"code",149),e(6452," Observable<boolean>"),t()(),i(6453,"td",26)(6454,"em")(6455,"strong"),e(6456,"(opcional)"),t()(),i(6457,"p"),e(6458,`Fun\xE7\xE3o opcional executada antes de salvar as altera\xE7\xF5es de uma linha editada.
Pode ser usada para validar ou modificar os dados antes de confirmar a edi\xE7\xE3o.`),t()()(),i(6459,"tr",19)(6460,"td",20)(6461,"div",21)(6462,"span",22),e(6463," beforeUndoRemove"),a(6464,"br"),t()()(),i(6465,"td",23)(6466,"code",148),e(6467,"(row: any) => boolean "),t(),i(6468,"code",149),e(6469," Observable<boolean>"),t()(),i(6470,"td",26)(6471,"em")(6472,"strong"),e(6473,"(opcional)"),t()(),i(6474,"p"),e(6475,`Fun\xE7\xE3o opcional executada antes de desfazer a remo\xE7\xE3o de uma linha do grid.
Pode ser usada para validar ou confirmar o desfazer da remo\xE7\xE3o da linha.`),t()()(),i(6476,"tr",19)(6477,"td",20)(6478,"div",21)(6479,"span",22),e(6480," change"),a(6481,"br"),t()()(),i(6482,"td",23)(6483,"code",151),e(6484,"(updatedRows: Array<any>) => void"),t()(),i(6485,"td",26)(6486,"em")(6487,"strong"),e(6488,"(opcional)"),t()(),i(6489,"p"),e(6490,`Fun\xE7\xE3o opcional que retorna a lista atualizada sempre que ocorre edi\xE7\xE3o, inclus\xE3o ou remo\xE7\xE3o.
Facilita o monitoramento das mudan\xE7as feitas, permitindo que se veja rapidamente o que foi alterado no grid.
Ser\xE1 disparado apenas durante a\xE7\xF5es de edi\xE7\xE3o flu\xEDda, sem compatibilidade com outros eventos.`),t()()(),i(6491,"tr",19)(6492,"td",20)(6493,"div",21)(6494,"span",22),e(6495," hiddenGrid"),a(6496,"br"),t()()(),i(6497,"td",23)(6498,"code",24),e(6499,"boolean"),t()(),i(6500,"td",26)(6501,"em")(6502,"strong"),e(6503,"(opcional)"),t()(),i(6504,"p"),e(6505,"Propriedade opcional utilizada para determinar se a grid deve ser ocultada quando n\xE3o houver registros."),t()()(),i(6506,"tr",19)(6507,"td",20)(6508,"div",21)(6509,"span",22),e(6510," noPermission"),a(6511,"br"),t()()(),i(6512,"td",23)(6513,"code",152),e(6514,"Array<ThfGridEditModeActionType>"),t()(),i(6515,"td",26)(6516,"em")(6517,"strong"),e(6518,"(opcional)"),t()(),i(6519,"p"),e(6520,`Propriedade opcional que permite remover e desabilitar as a\xE7\xF5es no grid.
Os valores permitidos no array s\xE3o definidos pelo enum `),i(6521,"strong"),e(6522,"ThfGridEditModeActionType"),t(),e(6523,":"),t(),i(6524,"pre")(6525,"code",31),e(6526,`// Exemplo de uso:

gridRowActions: ThfGridRowActions = {
 noPermission: [
   ThfGridEditModeActionType.Replace,
   ThfGridEditModeActionType.Add,
   ThfGridEditModeActionType.Remove] // Desabilita edi\xE7\xE3o, inclus\xE3o e remo\xE7\xE3o
  // outras a\xE7\xF5es...
};`),t()()()(),i(6527,"tr",19)(6528,"td",20)(6529,"div",21)(6530,"span",22),e(6531," title"),a(6532,"br"),t()()(),i(6533,"td",23)(6534,"code",40),e(6535,"string"),t()(),i(6536,"td",26)(6537,"em")(6538,"strong"),e(6539,"(opcional)"),t()(),i(6540,"p"),e(6541,"T\xEDtulo opcional que pode ser usado para exibir um cabe\xE7alho ou descri\xE7\xE3o na interface."),t()()(),i(6542,"tr",19)(6543,"td",20)(6544,"div",21)(6545,"span",22),e(6546," validateField"),a(6547,"br"),t()()(),i(6548,"td",23)(6549,"code",153),e(6550,"(updatedField: any, columnProperty: string) => boolean "),t(),i(6551,"code",149),e(6552," Observable<boolean>"),t()(),i(6553,"td",26)(6554,"em")(6555,"strong"),e(6556,"(opcional)"),t()(),i(6557,"p"),e(6558,`Fun\xE7\xE3o opcional executada quando algum campo \xE9 alterado.
Pode ser usada para validar ou modificar dados baseados no valor alterado.`),t(),i(6559,"pre")(6560,"code",31),e(6561,`// Exemplo de uso:

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
}`),t()()()()()()()(),T(6562,4),t(),i(6563,"po-tab",154),T(6564,5),i(6565,"po-container",5)(6566,"po-accordion",6)(6567,"po-accordion-item",155)(6568,"h4",9)(6569,"code"),e(6570,"ThfColumnSpacing"),t()(),i(6571,"h4",15),e(6572,"Propriedades"),t(),i(6573,"table",16)(6574,"tr",17)(6575,"th",18),e(6576,"Nome"),t(),i(6577,"th",18),e(6578,"Descri\xE7\xE3o"),t()(),i(6579,"tr",19)(6580,"td",20)(6581,"div",21)(6582,"span",22),e(6583," ExtraSmall"),a(6584,"br"),t()()(),i(6585,"td",26)(6586,"p"),e(6587,"Espa\xE7amento extra pequeno: 0.25rem (vertical) x 0.5rem (horizontal)."),t()()(),i(6588,"tr",19)(6589,"td",20)(6590,"div",21)(6591,"span",22),e(6592," Large"),a(6593,"br"),t()()(),i(6594,"td",26)(6595,"p"),e(6596,"Espa\xE7amento grande: 1rem (vertical) x 1rem (horizontal)."),t()()(),i(6597,"tr",19)(6598,"td",20)(6599,"div",21)(6600,"span",22),e(6601," Medium"),a(6602,"br"),t()()(),i(6603,"td",26)(6604,"p"),e(6605,"Espa\xE7amento m\xE9dio: 0.75rem (vertical) x 1rem (horizontal)."),t()()(),i(6606,"tr",19)(6607,"td",20)(6608,"div",21)(6609,"span",22),e(6610," Small"),a(6611,"br"),t()()(),i(6612,"td",26)(6613,"p"),e(6614,"Espa\xE7amento pequeno: 0.5rem (vertical) x 1rem (horizontal)."),t()()()()(),i(6615,"po-accordion-item",156)(6616,"h4",9)(6617,"code"),e(6618,"ThfGridEditModeActionType"),t()(),i(6619,"h4",15),e(6620,"Propriedades"),t(),i(6621,"table",16)(6622,"tr",17)(6623,"th",18),e(6624,"Nome"),t(),i(6625,"th",18),e(6626,"Descri\xE7\xE3o"),t()(),i(6627,"tr",19)(6628,"td",20)(6629,"div",21)(6630,"span",22),e(6631," Add"),a(6632,"br"),t()()(),i(6633,"td",26)(6634,"p"),e(6635,"A\xE7\xE3o de inclus\xE3o"),t()()(),i(6636,"tr",19)(6637,"td",20)(6638,"div",21)(6639,"span",22),e(6640," Remove"),a(6641,"br"),t()()(),i(6642,"td",26)(6643,"p"),e(6644,"A\xE7\xE3o de remo\xE7\xE3o"),t()()(),i(6645,"tr",19)(6646,"td",20)(6647,"div",21)(6648,"span",22),e(6649," Replace"),a(6650,"br"),t()()(),i(6651,"td",26)(6652,"p"),e(6653,"A\xE7\xE3o de edi\xE7\xE3o"),t()()()()()()(),T(6654,6),t(),i(6655,"po-tab",157),T(6656,7),i(6657,"po-container",5)(6658,"po-accordion",6)(6659,"po-accordion-item",158)(6660,"h4",9)(6661,"code"),e(6662,"ThfGridCellTemplateDirective"),t()(),i(6663,"div",10)(6664,"p"),e(6665,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(6666,"p"),e(6667,"Em seu uso, deve-se apenas adicionar a diretiva "),i(6668,"strong"),e(6669,"t-grid-cell-template"),t(),e(6670," \xE0 tag "),i(6671,"code"),e(6672,"ng-template"),t(),e(6673,"."),t(),i(6674,"p"),e(6675,"Retorno:"),t(),i(6676,"ul")(6677,"li")(6678,"code"),e(6679,"column"),t(),e(6680,": conte\xFAdo da coluna corrente."),t(),i(6681,"li")(6682,"code"),e(6683,"row"),t(),e(6684,": conte\xFAdo da linha corrente"),t()(),i(6685,"p"),e(6686,"Modo de uso:"),t(),i(6687,"pre")(6688,"code"),e(6689,`...
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
...`),t()(),i(6690,"blockquote")(6691,"p"),e(6692,"No exemplo acima, o usu\xE1rio tem como retorno "),i(6693,"code"),e(6694,"row"),t(),e(6695," e a "),i(6696,"code"),e(6697,"column"),t(),e(6698," corrente, neste caso ele tem total liberdade para manipular os objetos."),t()(),i(6699,"p"),e(6700,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(6701,"pre")(6702,"code"),e(6703,`...
export class AppComponent {

   columns = [
      { property: 'code', label: 'ID' },
      { property: 'product', label: 'PRODUTO' },
      { property: 'status', label: 'STATUS', type: 'cellTemplate' },
      { property: 'status2', label: 'STATUS 2', type: 'cellTemplate' },
      { property: 'status3', label: 'STATUS 3', type: 'cellTemplate' }
   ];
}
...`),t()(),i(6704,"blockquote")(6705,"p"),e(6706,"Observa\xE7\xE3o: Sempre adicionar o "),i(6707,"strong"),e(6708,"type"),t(),e(6709," da coluna que deseja manipular com a directiva como "),i(6710,"code"),e(6711,"cellTemplate"),t()()()(),i(6712,"div",11)(6713,"h4",12),e(6714,"Seletor"),t(),i(6715,"pre",13),e(6716,`<[t-grid-cell-template] >
</[t-grid-cell-template]>
`),t()()(),i(6717,"po-accordion-item",159)(6718,"h4",9)(6719,"code"),e(6720,"ThfGridColumnTemplateDirective"),t()(),i(6721,"div",10)(6722,"p"),e(6723,`Esta diretiva permite que seja poss\xEDvel alterar o conte\xFAdo das c\xE9lulas de uma coluna, para que os valores possam ser exibidos
de acordo com a necessidade do usu\xE1rio.`),t(),i(6724,"p"),e(6725,"Em seu uso, deve-se utilizar como par\xE2metro de entrada o input "),i(6726,"strong"),e(6727,"[t-property]"),t(),e(6728,`, o qual \xE9 respons\xE1vel por informar ao THF-GRID qual a coluna que
ser\xE1 adicionado o conte\xFAdo do template.`),t(),i(6729,"p"),e(6730,"Retorno:"),t(),i(6731,"ul")(6732,"li"),e(6733,"value: valor referente ao conte\xFAdo da linha corrente."),t()(),i(6734,"p"),e(6735,"Modo de uso:"),t(),i(6736,"pre")(6737,"code",28),e(6738,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template t-grid-column-template [t-property]="targetProperty" let-value>
    <span [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(6739,"blockquote")(6740,"p"),e(6741,"No exemplo acima, todas as c\xE9lulas correspondentes a coluna "),i(6742,"code"),e(6743,"status"),t(),e(6744," ter\xE3o o conte\xFAdo alterado para "),i(6745,"code"),e(6746,"<h1>${value}</h1>"),t(),e(6747,`,
sendo que `),i(6748,"code"),e(6749,"value"),t(),e(6750," refere-se ao conte\xFAdo da linha."),t()(),i(6751,"pre")(6752,"code",28),e(6753,`...
<thf-grid
  [t-columns]="columns"
  t-service-api="url.com">
  <ng-template  t-grid-column-template [t-property]="targetProperty" let-value>
    <span *ngIf="value === 'FINISHED'" [style.background]="'silver'" [innerText]="value"></span>
    <span *ngIf="value === 'OPENED'" [style.background]="'gray'" [innerText]="value"></span>
  </ng-template>
</thf-grid>
...`),t()(),i(6754,"blockquote")(6755,"p"),e(6756,`Agora, neste exemplo, com o valor da linha corrente retornado (value), \xE9 feito uma valida\xE7\xE3o para
definir o template exato para adicionar a uma espec\xEDfica c\xE9lula.`),t()(),i(6757,"p"),e(6758,"Abaixo, a declara\xE7\xE3o dos dados de entrada do THF-GRID para o uso da directiva."),t(),i(6759,"pre")(6760,"code",31),e(6761,`...
export class AppComponent {

   targetProperty= 'status';

   columns = [
     { property: 'code', label: 'ID' },
     { property: 'product', label: 'PRODUTO' },
     { property: 'status', label: 'STATUS', type: 'columnTemplate' }
   ];
}
...`),t()(),i(6762,"blockquote")(6763,"p"),e(6764,"Observa\xE7\xE3o: Sempre adicionar o "),i(6765,"strong"),e(6766,"type"),t(),e(6767," da coluna que deseja manipular com a directiva como "),i(6768,"code"),e(6769,"columnTemplate"),t()()()(),i(6770,"div",11)(6771,"h4",12),e(6772,"Seletor"),t(),i(6773,"pre",13),e(6774,`<[t-grid-column-template] >
</[t-grid-column-template]>
`),t()()()()(),T(6775,8),t(),i(6776,"po-tab",160)(6777,"po-container",5),T(6778,9),i(6779,"h3",161),e(6780,"Tokens customiz\xE1veis"),t(),i(6781,"p"),e(6782,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(6783,"blockquote")(6784,"p"),e(6785,"Para maiores informa\xE7\xF5es, acesse o guia "),i(6786,"a",162),e(6787,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(6788,"."),t()(),i(6789,"table")(6790,"thead")(6791,"tr")(6792,"th"),e(6793,"Propriedade"),t(),i(6794,"th"),e(6795,"Descri\xE7\xE3o"),t(),i(6796,"th"),e(6797,"Valor Padr\xE3o"),t()()(),i(6798,"tbody")(6799,"tr")(6800,"td")(6801,"strong"),e(6802,"Default Values"),t()(),a(6803,"td")(6804,"td"),t(),i(6805,"tr")(6806,"td")(6807,"code"),e(6808,"--font-family"),t()(),i(6809,"td"),e(6810,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(6811,"td")(6812,"code"),e(6813,"var(--font-family-theme)"),t()()(),i(6814,"tr")(6815,"td")(6816,"code"),e(6817,"--background-color"),t()(),i(6818,"td"),e(6819,"Cor de background"),t(),i(6820,"td")(6821,"code"),e(6822,"var(--color-neutral-light-00)"),t()()(),i(6823,"tr")(6824,"td")(6825,"code"),e(6826,"--color"),t()(),i(6827,"td"),e(6828,"Cor principal da table"),t(),i(6829,"td")(6830,"code"),e(6831,"var(--color-neutral-dark-95)"),t()()(),i(6832,"tr")(6833,"td")(6834,"code"),e(6835,"--background-striped-color"),t()(),i(6836,"td"),e(6837,"Cor do background quando striped"),t(),i(6838,"td")(6839,"code"),e(6840,"var(--color-neutral-light-05)"),t()()(),i(6841,"tr")(6842,"td")(6843,"code"),e(6844,"--color-line"),t()(),i(6845,"td"),e(6846,"Cor das linhas"),t(),i(6847,"td")(6848,"code"),e(6849,"var(--color-neutral-mid-40)"),t()()(),i(6850,"tr")(6851,"td")(6852,"code"),e(6853,"--border-color"),t()(),i(6854,"td"),e(6855,"Cor da borda"),t(),i(6856,"td")(6857,"code"),e(6858,"var(--color-neutral-light-10)"),t()()(),i(6859,"tr")(6860,"td")(6861,"code"),e(6862,"--border-radius"),t()(),i(6863,"td"),e(6864,"Raio da borda"),t(),i(6865,"td")(6866,"code"),e(6867,"var(--border-radius-lg)"),t()()(),i(6868,"tr")(6869,"td")(6870,"code"),e(6871,"--border-width"),t()(),i(6872,"td"),e(6873,"Largura da borda"),t(),i(6874,"td")(6875,"code"),e(6876,"var(--border-width-sm)"),t()()(),i(6877,"tr")(6878,"td")(6879,"code"),e(6880,"--background-color-edited"),t()(),i(6881,"td"),e(6882,"Cor de background da linha editada"),t(),i(6883,"td")(6884,"code"),e(6885,"var(--color-feedback-warning-lightest)"),t()()(),i(6886,"tr")(6887,"td")(6888,"code"),e(6889,"--border-color-edited"),t()(),i(6890,"td"),e(6891,"Cor da borda da linha editada"),t(),i(6892,"td")(6893,"code"),e(6894,"var(--color-feedback-warning-base)"),t()()(),i(6895,"tr")(6896,"td")(6897,"code"),e(6898,"--background-color-included"),t()(),i(6899,"td"),e(6900,"Cor de background da linha inclu\xEDda"),t(),i(6901,"td")(6902,"code"),e(6903,"var(--color-feedback-warning-lightest)"),t()()(),i(6904,"tr")(6905,"td")(6906,"code"),e(6907,"--border-color-included"),t()(),i(6908,"td"),e(6909,"Cor da borda da linha inclu\xEDda"),t(),i(6910,"td")(6911,"code"),e(6912,"var(--color-feedback-warning-base)"),t()()(),i(6913,"tr")(6914,"td")(6915,"code"),e(6916,"--background-color-removed"),t()(),i(6917,"td"),e(6918,"Cor de background da linha removida"),t(),i(6919,"td"),e(6920,"-"),t()(),i(6921,"tr")(6922,"td")(6923,"strong"),e(6924,"Hover"),t()(),a(6925,"td")(6926,"td"),t(),i(6927,"tr")(6928,"td")(6929,"code"),e(6930,"--color-hover"),t()(),i(6931,"td"),e(6932,"Cor principal no estado hover"),t(),i(6933,"td")(6934,"code"),e(6935,"var(--color-action-hover)"),t()()(),i(6936,"tr")(6937,"td")(6938,"code"),e(6939,"--background-color-hover"),t()(),i(6940,"td"),e(6941,"Cor de background no estado hover"),t(),i(6942,"td")(6943,"code"),e(6944,"var(--color-brand-01-lighter)"),t()()(),i(6945,"tr")(6946,"td")(6947,"strong"),e(6948,"Focused"),t()(),a(6949,"td")(6950,"td"),t(),i(6951,"tr")(6952,"td")(6953,"code"),e(6954,"--outline-color-focused"),t()(),i(6955,"td"),e(6956,"Cor do outline do estado de focus"),t(),i(6957,"td")(6958,"code"),e(6959,"var(--color-action-focus)"),t()()(),i(6960,"tr")(6961,"td")(6962,"strong"),e(6963,"Disabled"),t()(),a(6964,"td")(6965,"td"),t(),i(6966,"tr")(6967,"td")(6968,"code"),e(6969,"--color-disabled"),t()(),i(6970,"td"),e(6971,"Cor principal no estado disabled"),t(),i(6972,"td")(6973,"code"),e(6974,"var(--color-neutral-mid-40)"),t()()(),i(6975,"tr")(6976,"td")(6977,"strong"),e(6978,"Headline"),t()(),a(6979,"td")(6980,"td"),t(),i(6981,"tr")(6982,"td")(6983,"code"),e(6984,"--background-color-headline"),t()(),i(6985,"td"),e(6986,"Cor do cabe\xE7alho"),t(),i(6987,"td")(6988,"code"),e(6989,"var(--color-neutral-light-10)"),t()()(),i(6990,"tr")(6991,"td")(6992,"code"),e(6993,"--font-weight-headline"),t()(),i(6994,"td"),e(6995,"Peso da fonte do cabe\xE7alho"),t(),i(6996,"td")(6997,"code"),e(6998,"var(--font-weight-bold)"),t()()(),i(6999,"tr")(7e3,"td")(7001,"strong"),e(7002,"Selected"),t()(),a(7003,"td")(7004,"td"),t(),i(7005,"tr")(7006,"td")(7007,"code"),e(7008,"--background-color-selected"),t()(),i(7009,"td"),e(7010,"Cor de background no estado de selecionado"),t(),i(7011,"td")(7012,"code"),e(7013,"var(--color-brand-01-lightest)"),t()()(),i(7014,"tr")(7015,"td")(7016,"code"),e(7017,"--color-actived"),t()(),i(7018,"td"),e(7019,"Cor do texto no estado de selecionado"),t(),i(7020,"td")(7021,"code"),e(7022,"var(--color-neutral-dark-90)"),t()()(),i(7023,"tr")(7024,"td")(7025,"strong"),e(7026,"Pressed"),t()(),a(7027,"td")(7028,"td"),t(),i(7029,"tr")(7030,"td")(7031,"code"),e(7032,"--background-color-actived"),t()(),i(7033,"td"),e(7034,"Cor de background da a\xE7\xE3o quando pressionada"),t(),i(7035,"td")(7036,"code"),e(7037,"var(--color-brand-01-light)"),t()()(),i(7038,"tr"),a(7039,"td")(7040,"td")(7041,"td"),t(),i(7042,"tr")(7043,"td")(7044,"strong"),e(7045,"Toolbar"),t()(),a(7046,"td")(7047,"td"),t(),i(7048,"tr")(7049,"td")(7050,"code"),e(7051,"--background-color-toolbar"),t()(),i(7052,"td"),e(7053,"Cor de background da toolbar"),t(),i(7054,"td")(7055,"code"),e(7056,"var(--border-color)"),t()()(),i(7057,"tr")(7058,"td")(7059,"code"),e(7060,"--border-color-toolbar"),t()(),i(7061,"td"),e(7062,"Cor da borda da toolbar"),t(),i(7063,"td")(7064,"code"),e(7065,"var(--border-width-sm)"),t()()(),i(7066,"tr"),a(7067,"td")(7068,"td")(7069,"td"),t(),i(7070,"tr")(7071,"td")(7072,"strong"),e(7073,"Toolbar Title"),t()(),a(7074,"td")(7075,"td"),t(),i(7076,"tr")(7077,"td")(7078,"code"),e(7079,"--font-family-toolbar-title"),t()(),i(7080,"td"),e(7081,"Fam\xEDlia tipogr\xE1fica do Titulo da toolbar da Grid"),t(),i(7082,"td")(7083,"code"),e(7084,"var(--font-family)"),t()()(),i(7085,"tr")(7086,"td")(7087,"code"),e(7088,"--font-size-toolbar-title"),t()(),i(7089,"td"),e(7090,"Tamanho da fonte do Titulo da toolbar da Grid"),t(),i(7091,"td")(7092,"code"),e(7093,"var(--font-size-md)"),t()()(),i(7094,"tr")(7095,"td")(7096,"code"),e(7097,"--font-weight-toolbar-title"),t()(),i(7098,"td"),e(7099,"Peso da fonte do Titulo da toolbar da Grid"),t(),i(7100,"td")(7101,"code"),e(7102,"var(--font-weight-bold)"),t()()(),i(7103,"tr")(7104,"td")(7105,"code"),e(7106,"--letter-spacing-toolbar-title"),t()(),i(7107,"td"),e(7108,"Espa\xE7amento entre letras do Titulo da toolbar da Grid"),t(),i(7109,"td"),e(7110,"0.017rem"),t()(),i(7111,"tr"),a(7112,"td")(7113,"td")(7114,"td"),t(),i(7115,"tr")(7116,"td")(7117,"strong"),e(7118,"Empty State - Body"),t()(),a(7119,"td")(7120,"td"),t(),i(7121,"tr")(7122,"td")(7123,"code"),e(7124,"--font-family-empty-state-body-subtitle"),t()(),i(7125,"td"),e(7126,"Fam\xEDlia tipogr\xE1fica do subt\xEDtulo do estado vazio"),t(),i(7127,"td")(7128,"code"),e(7129,"var(--font-family)"),t()()(),i(7130,"tr")(7131,"td")(7132,"code"),e(7133,"--font-size-empty-state-body-subtitle"),t()(),i(7134,"td"),e(7135,"Tamanho da fonte do subt\xEDtulo do estado vazio"),t(),i(7136,"td")(7137,"code"),e(7138,"var(--font-size-md)"),t()()(),i(7139,"tr")(7140,"td")(7141,"code"),e(7142,"--font-weight-empty-state-body-subtitle"),t()(),i(7143,"td"),e(7144,"Peso da fonte do subt\xEDtulo do estado vazio"),t(),i(7145,"td")(7146,"code"),e(7147,"var(--font-weight-bold)"),t()()(),i(7148,"tr")(7149,"td")(7150,"code"),e(7151,"--font-family-empty-state-body-message"),t()(),i(7152,"td"),e(7153,"Fam\xEDlia tipogr\xE1fica da mensagem do estado vazio"),t(),i(7154,"td")(7155,"code"),e(7156,"var(--font-family)"),t()()(),i(7157,"tr")(7158,"td")(7159,"code"),e(7160,"--font-size-empty-state-body-message"),t()(),i(7161,"td"),e(7162,"Tamanho da fonte da mensagem do estado vazio"),t(),i(7163,"td")(7164,"code"),e(7165,"var(--font-size-default)"),t()()(),i(7166,"tr")(7167,"td")(7168,"code"),e(7169,"--font-weight-empty-state-body-message"),t()(),i(7170,"td"),e(7171,"Peso da fonte da mensagem do estado vazio"),t(),i(7172,"td")(7173,"code"),e(7174,"var(--font-weight-normal)"),t()()()()()(),T(7175,10),t(),i(7176,"po-tab",163),T(7177,11),t()()())},dependencies:[z,K,v,Ae,ee,G],encapsulation:2})}}return d})();var Ti=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],wi=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],Dt=(()=>{class d{constructor(o){this.el=o}ngAfterViewInit(){this.accordions.forEach(o=>{setTimeout(()=>{o.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(o){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${o}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let g=E.querySelector(".po-tab-button-label");g&&g?.textContent?.trim().toLowerCase()===o&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(Z))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup"]],viewQuery:function(r,n){if(r&1&&(D(G,5),D(z,5)),r&2){let l;A(l=_())&&(n.tabs=l.first),A(l=_())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:wi,decls:2636,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-deprecated-marker"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","boolean"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupColumn>"],[1,"language-html"],[1,"language-typescript"],["p-type","success","p-value","since 19.8.0"],["href","https://po-ui.io/documentation/po-theme"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","((item:","any)","=>","string)"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","Array<ThfLookupKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupLiterals"],["pan","",1,"docs-api-property-type","PoHelperOptions"],["pan","",1,"docs-api-property-type","'equal'"],["pan","",1,"docs-api-property-type","'include'"],["p-label","M\xE9todos"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["p-label","Interfaces"],["p-label","ThfLookupColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupFilterSearchSelect"],["p-label","ThfLookupFilter"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["pan","",1,"docs-api-property-type","number"],["p-label","ThfLookupGridProperties"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupKeysLabel"],["p-label","ThfLookupLiterals"],["p-label","ThfLookupResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(X(Ti),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupComponent"),t()(),i(16,"div",10)(17,"p"),e(18,`Componente utilizado para abrir um modal de busca com um grid que lista dados de um servi\xE7o.
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
`),t()()(),i(34,"po-accordion-item",14)(35,"h4",15),e(36,"Propriedades"),t(),i(37,"table",16)(38,"tr",17)(39,"th",18),e(40,"Nome"),t(),i(41,"th",18),e(42,"Tipo"),t(),i(43,"th",18),e(44,"Padr\xE3o"),t(),i(45,"th",18),e(46,"Descri\xE7\xE3o"),t()(),i(47,"tr",19)(48,"td",20)(49,"div",21)(50,"span",22),e(51,"t-additional-help"),a(52,"br"),t()(),i(53,"div",23),e(54,"Deprecated"),t()(),i(55,"td",24)(56,"code",25),e(57,"EventEmitter"),t()(),i(58,"td",26),e(59,"-"),t(),i(60,"td",27)(61,"em")(62,"strong"),e(63,"(opcional)"),t()(),i(64,"p"),e(65,"Evento disparado ao clicar no \xEDcone de ajuda adicional."),t(),i(66,"blockquote")(67,"p"),e(68,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(69,"tr",19)(70,"td",20)(71,"div",21)(72,"span",22),e(73,"t-additional-help-tooltip"),a(74,"br"),t()(),i(75,"div",23),e(76,"Deprecated"),t()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"em")(84,"strong"),e(85,"(opcional)"),t()(),i(86,"p"),e(87,"Exibe um \xEDcone de ajuda adicional, om o texto desta propriedade sendo passado para o popover do componente "),i(88,"code"),e(89,"po-helper"),t(),e(90,`.
`),i(91,"strong"),e(92,"Como boa pr\xE1tica, indica-se utilizar um texto com at\xE9 140 caracteres."),t()(),i(93,"blockquote")(94,"p"),e(95,"Requer um recuo m\xEDnimo de 8px se o componente estiver pr\xF3ximo \xE0 lateral da tela."),t()(),i(96,"blockquote")(97,"p"),e(98,"Essa propriedade est\xE1 depreciada e ser\xE1 removida na vers\xE3o 23.x.x. Recomendamos utilizar a propriedade t-helper que oferece mais recursos e flexibilidade."),t()()()(),i(99,"tr",19)(100,"td",20)(101,"div",21)(102,"span",22),e(103," t-append-in-body"),a(104,"br"),t()()(),i(105,"td",24)(106,"code",29),e(107,"boolean"),t()(),i(108,"td",26)(109,"p")(110,"code"),e(111,"false"),t()()(),i(112,"td",27)(113,"em")(114,"strong"),e(115,"(opcional)"),t()(),i(116,"p"),e(117,"Define que o "),i(118,"code"),e(119,"listbox"),t(),e(120," e/ou popover ("),i(121,"code"),e(122,"t-helper"),t(),e(123," e/ou "),i(124,"code"),e(125,"t-error-limit"),t(),e(126,`) ser\xE3o inclu\xEDdos no body da
p\xE1gina e n\xE3o dentro do componente. Essa op\xE7\xE3o pode ser necess\xE1ria em cen\xE1rios com containers que possuem scroll ou
overflow escondido, garantindo o posicionamento correto de ambos pr\xF3ximo ao elemento.`),t(),i(127,"blockquote")(128,"p"),e(129,"Quando utilizado com "),i(130,"code"),e(131,"t-helper"),t(),e(132,", leitores de tela como o NVDA podem n\xE3o ler o conte\xFAdo do tooltip."),t()()()(),i(133,"tr",19)(134,"td",20)(135,"div",21)(136,"span",22),e(137,"t-auto-focus"),a(138,"br"),t()()(),i(139,"td",24)(140,"code",29),e(141,"boolean"),t()(),i(142,"td",26)(143,"p")(144,"code"),e(145,"false"),t()()(),i(146,"td",27)(147,"em")(148,"strong"),e(149,"(opcional)"),t()(),i(150,"p"),e(151,"Aplica foco no elemento ao ser iniciado."),t(),i(152,"blockquote")(153,"p"),e(154,"Caso mais de um elemento seja configurado com essa propriedade, apenas o \xFAltimo elemento declarado com ela ter\xE1 o foco."),t()()()(),i(155,"tr",19)(156,"td",20)(157,"div",21)(158,"span",22),e(159,"t-auto-height"),a(160,"br"),t()()(),i(161,"td",24)(162,"code",29),e(163,"boolean"),t()(),i(164,"td",26)(165,"p")(166,"code"),e(167,"false"),t()()(),i(168,"td",27)(169,"em")(170,"strong"),e(171,"(opcional)"),t()(),i(172,"p"),e(173,`Define que a altura do componente ser\xE1 auto ajust\xE1vel, com altura m\xEDnima fixa e altura m\xE1xima de acordo
com o n\xFAmero de itens selecionados, mantendo-os sempre vis\xEDveis.`),t()()(),i(174,"tr",19)(175,"td",20)(176,"div",30)(177,"span",31),e(178," (t-change)"),a(179,"br"),t()()(),i(180,"td",24)(181,"code",25),e(182,"EventEmitter"),t()(),i(183,"td",26),e(184,"-"),t(),i(185,"td",27)(186,"em")(187,"strong"),e(188,"(opcional)"),t()(),i(189,"p"),e(190,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(191,"tr",19)(192,"td",20)(193,"div",30)(194,"span",31),e(195," (t-change-model)"),a(196,"br"),t()()(),i(197,"td",24)(198,"code",25),e(199,"EventEmitter"),t()(),i(200,"td",26),e(201,"-"),t(),i(202,"td",27)(203,"em")(204,"strong"),e(205,"(opcional)"),t()(),i(206,"p"),e(207,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(208,"tr",19)(209,"td",20)(210,"div",21)(211,"span",22),e(212,"t-clean"),a(213,"br"),t()()(),i(214,"td",24)(215,"code",29),e(216,"boolean"),t()(),i(217,"td",26)(218,"p")(219,"code"),e(220,"false"),t()()(),i(221,"td",27)(222,"em")(223,"strong"),e(224,"(opcional)"),t()(),i(225,"p"),e(226,"Exibe um \xEDcone que permite limpar o campo. No caso de sele\xE7\xE3o m\xFAltipla, esta op\xE7\xE3o sempre ser\xE1 "),i(227,"code"),e(228,"true"),t(),e(229,"."),t()()(),i(230,"tr",19)(231,"td",20)(232,"div",21)(233,"span",22),e(234,"t-columns"),a(235,"br"),t()()(),i(236,"td",24)(237,"code",32),e(238,"Array<ThfLookupColumn>"),t()(),i(239,"td",26),e(240,"-"),t(),i(241,"td",27)(242,"em")(243,"strong"),e(244,"(opcional)"),t()(),i(245,"p"),e(246,"Permite definir e configurar as colunas do grid dentro do modal de busca avan\xE7ada por meio da interface "),i(247,"strong"),e(248,"ThfLookupColumn"),t(),e(249,"."),t(),i(250,"pre")(251,"code",33),e(252,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(253,"pre")(254,"code",34),e(255,`columns: Array<ThfLookupColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(256,"tr",19)(257,"td",20)(258,"div",21)(259,"span",22),e(260," t-size"),a(261,"br"),t(),a(262,"po-tag",35),t()(),i(263,"td",24)(264,"code",28),e(265,"string"),t()(),i(266,"td",26)(267,"p")(268,"code"),e(269,"medium"),t()()(),i(270,"td",27)(271,"em")(272,"strong"),e(273,"(opcional)"),t()(),i(274,"p"),e(275,"Define o tamanho do componente:"),t(),i(276,"ul")(277,"li")(278,"code"),e(279,"small"),t(),e(280,": altura do input como 32px (dispon\xEDvel apenas para acessibilidade AA)."),t(),i(281,"li")(282,"code"),e(283,"medium"),t(),e(284,": altura do input como 44px."),t()(),i(285,"blockquote")(286,"p"),e(287,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(288,"code"),e(289,"medium"),t(),e(290,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(291,"a",36),e(292,"po-theme"),t(),e(293,"."),t()()()(),i(294,"tr",19)(295,"td",20)(296,"div",21)(297,"span",22),e(298,"t-custom-items"),a(299,"br"),t()()(),i(300,"td",24)(301,"code",37),e(302,"Array<any>"),t()(),i(303,"td",26)(304,"p")(305,"code"),e(306,"[]"),t()()(),i(307,"td",27)(308,"em")(309,"strong"),e(310,"(opcional)"),t()(),i(311,"p"),e(312,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(313,"tr",19)(314,"td",20)(315,"div",21)(316,"span",22),e(317,"t-disabled"),a(318,"br"),t()()(),i(319,"td",24)(320,"code",29),e(321,"boolean"),t()(),i(322,"td",26)(323,"p")(324,"code"),e(325,"false"),t()()(),i(326,"td",27)(327,"em")(328,"strong"),e(329,"(opcional)"),t()(),i(330,"p"),e(331,"Desabilita o campo."),t()()(),i(332,"tr",19)(333,"td",20)(334,"div",21)(335,"span",22),e(336,"t-error-limit"),a(337,"br"),t()()(),i(338,"td",24)(339,"code",29),e(340,"boolean"),t()(),i(341,"td",26)(342,"p")(343,"code"),e(344,"false"),t()()(),i(345,"td",27)(346,"em")(347,"strong"),e(348,"(opcional)"),t()(),i(349,"p"),e(350,"Limita a exibi\xE7\xE3o da mensagem de erro a duas linhas e exibe um tooltip com o texto completo."),t(),i(351,"blockquote")(352,"p"),e(353,"Caso essa propriedade seja definida como "),i(354,"code"),e(355,"true"),t(),e(356,`, a mensagem de erro ser\xE1 limitada a duas linhas
e um tooltip ser\xE1 exibido ao passar o mouse sobre a mensagem para mostrar o conte\xFAdo completo.`),t()()()(),i(357,"tr",19)(358,"td",20)(359,"div",21)(360,"span",22),e(361,"t-field-error-message"),a(362,"br"),t()()(),i(363,"td",24)(364,"code",28),e(365,"string"),t()(),i(366,"td",26),e(367,"-"),t(),i(368,"td",27)(369,"em")(370,"strong"),e(371,"(opcional)"),t()(),i(372,"p"),e(373,"Exibe a mensagem setada se o campo estiver vazio e for requerido."),t(),i(374,"blockquote")(375,"p"),e(376,"Necess\xE1rio que a propriedade "),i(377,"code"),e(378,"t-required"),t(),e(379," esteja habilitada."),t()()()(),i(380,"tr",19)(381,"td",20)(382,"div",21)(383,"span",22),e(384," t-field-format"),a(385,"br"),t()()(),i(386,"td",24)(387,"code",38),e(388,"Array<string> "),t(),i(389,"code",39),e(390," ((item: any) => string)"),t()(),i(391,"td",26),e(392,"-"),t(),i(393,"td",27)(394,"em")(395,"strong"),e(396,"(opcional)"),t()(),i(397,"p"),e(398,"Formato de exibi\xE7\xE3o do campo."),t(),i(399,"p"),e(400,"Recebe uma fun\xE7\xE3o que deve retornar uma "),i(401,"em"),e(402,"string"),t(),e(403," com o/os valores do objeto formatados para exibi\xE7\xE3o, por exemplo:"),t(),i(404,"pre")(405,"code",34),e(406,"fieldFormat(obj) {\n  return `${obj.id} (${obj.name})`;\n}"),t()(),i(407,"pre")(408,"code",33),e(409,`<thf-lookup
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
<!-- Apresenta\xE7\xE3o no campo: 123 - Goku  -->`),t()(),i(418,"blockquote")(419,"p"),e(420,"Esta propriedade sobrep\xF5e a "),i(421,"code"),e(422,"t-keys-label"),t(),e(423," como formata\xE7\xE3o do campo."),t()()()(),i(424,"tr",19)(425,"td",20)(426,"div",21)(427,"span",22),e(428,"t-field-label"),a(429,"br"),t()()(),i(430,"td",24)(431,"code",28),e(432,"string"),t()(),i(433,"td",26),e(434,"-"),t(),i(435,"td",27)(436,"p"),e(437,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o do campo e do filtro selecionado dentro do modal de busca avan\xE7ada.
Propriedade obrigat\xF3ria.`),t()()(),i(438,"tr",19)(439,"td",20)(440,"div",21)(441,"span",22),e(442,"t-field-value"),a(443,"br"),t()()(),i(444,"td",24)(445,"code",28),e(446,"string"),t()(),i(447,"td",26),e(448,"-"),t(),i(449,"td",27)(450,"p"),e(451,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(452,"blockquote")(453,"p"),e(454,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(455,"tr",19)(456,"td",20)(457,"div",21)(458,"span",22),e(459,"t-filter-params"),a(460,"br"),t()()(),i(461,"td",24)(462,"code",40),e(463,"any"),t()(),i(464,"td",26),e(465,"-"),t(),i(466,"td",27)(467,"em")(468,"strong"),e(469,"(opcional)"),t()(),i(470,"p"),e(471,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(472,"strong"),e(473,"ThfLookupFilter"),t(),e(474,"."),t()()(),i(475,"tr",19)(476,"td",20)(477,"div",21)(478,"span",22),e(479,"t-filter-search-select"),a(480,"br"),t()()(),i(481,"td",24)(482,"code",41),e(483,"Array<ThfLookupFilterSearchSelect>"),t()(),i(484,"td",26),e(485,"-"),t(),i(486,"td",27)(487,"em")(488,"strong"),e(489,"(opcional)"),t()(),i(490,"p"),e(491,`Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro dentro do modal de busca avan\xE7ada. Deve implementar a interface
`),i(492,"strong"),e(493,"ThfLookupFilterSearchSelect"),t(),e(494,"."),t(),i(495,"pre")(496,"code",33),e(497,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(498,"pre")(499,"code",34),e(500,`filterSelect: Array<ThfLookupFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(501,"tr",19)(502,"td",20)(503,"div",21)(504,"span",22),e(505,"t-filter-service"),a(506,"br"),t()()(),i(507,"td",24)(508,"code",42),e(509,"ThfLookupFilter "),t(),i(510,"code",28),e(511," string"),t()(),i(512,"td",26),e(513,"-"),t(),i(514,"td",27)(515,"p"),e(516,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
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
desenvolvedor.`),t()()()(),i(594,"tr",19)(595,"td",20)(596,"div",21)(597,"span",22),e(598,"t-grid-properties"),a(599,"br"),t()()(),i(600,"td",24)(601,"code",45),e(602,"ThfLookupGridProperties"),t()(),i(603,"td",26),e(604,"-"),t(),i(605,"td",27)(606,"em")(607,"strong"),e(608,"(opcional)"),t()(),i(609,"p"),e(610,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t(),i(611,"p"),e(612,"// Exemplo de uso:"),t(),i(613,"pre")(614,"code",33),e(615,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>`),t()(),i(616,"pre")(617,"code",34),e(618,`gridProperties: ThfLookupGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}`),t()()()(),i(619,"tr",19)(620,"td",20)(621,"div",21)(622,"span",22),e(623,"t-help"),a(624,"br"),t()()(),i(625,"td",24)(626,"code",28),e(627,"string"),t()(),i(628,"td",26),e(629,"-"),t(),i(630,"td",27)(631,"em")(632,"strong"),e(633,"(opcional)"),t()(),i(634,"p"),e(635,"Texto de apoio do campo."),t()()(),i(636,"tr",19)(637,"td",20)(638,"div",30)(639,"span",31),e(640," (t-focus)"),a(641,"br"),t()()(),i(642,"td",24)(643,"code",25),e(644,"EventEmitter"),t()(),i(645,"td",26),e(646,"-"),t(),i(647,"td",27)(648,"em")(649,"strong"),e(650,"(opcional)"),t()(),i(651,"p"),e(652,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(653,"p"),e(654,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(655,"tr",19)(656,"td",20)(657,"div",21)(658,"span",22),e(659,"t-key-last-search"),a(660,"br"),t()()(),i(661,"td",24)(662,"code",28),e(663,"string"),t()(),i(664,"td",26),e(665,"-"),t(),i(666,"td",27)(667,"em")(668,"strong"),e(669,"(opcional)"),t()(),i(670,"p"),e(671,"Define um identificador \xFAnico para o campo. Marca\xE7\xE3o necess\xE1ria quando h\xE1 hist\xF3rico de \xFAltimas pesquisas."),t()()(),i(672,"tr",19)(673,"td",20)(674,"div",30)(675,"span",31),e(676," (t-keydown)"),a(677,"br"),t()()(),i(678,"td",24)(679,"code",25),e(680,"EventEmitter"),t()(),i(681,"td",26),e(682,"-"),t(),i(683,"td",27)(684,"em")(685,"strong"),e(686,"(opcional)"),t()(),i(687,"p"),e(688,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(689,"code"),e(690,"KeyboardEvent"),t(),e(691," com informa\xE7\xF5es sobre a tecla."),t()()(),i(692,"tr",19)(693,"td",20)(694,"div",21)(695,"span",22),e(696,"t-keys-label"),a(697,"br"),t()()(),i(698,"td",24)(699,"code",46),e(700,"Array<ThfLookupKeysLabel>"),t()(),i(701,"td",26),e(702,"-"),t(),i(703,"td",27)(704,"em")(705,"strong"),e(706,"(opcional)"),t()(),i(707,"p"),e(708,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no campo."),t(),i(709,"pre")(710,"code",33),e(711,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(712,"pre")(713,"code",34),e(714,`keysLabel: Array<ThfLookupKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(715,"pre")(716,"code"),e(717,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(718,"tr",19)(719,"td",20)(720,"div",21)(721,"span",22),e(722,"t-label"),a(723,"br"),t()()(),i(724,"td",24)(725,"code",28),e(726,"string"),t()(),i(727,"td",26),e(728,"-"),t(),i(729,"td",27)(730,"em")(731,"strong"),e(732,"(opcional)"),t()(),i(733,"p"),e(734,"Label do campo. Tamb\xE9m usado como t\xEDtulo do modal de busca avan\xE7ada, se "),i(735,"code"),e(736,"modalTitle"),t(),e(737," n\xE3o estiver definido em "),i(738,"strong"),e(739,"t-literals"),t(),e(740,"."),t()()(),i(741,"tr",19)(742,"td",20)(743,"div",21)(744,"span",22),e(745," t-label-text-wrap"),a(746,"br"),t()()(),i(747,"td",24)(748,"code",29),e(749,"boolean"),t()(),i(750,"td",26)(751,"p")(752,"code"),e(753,"false"),t()()(),i(754,"td",27)(755,"em")(756,"strong"),e(757,"(opcional)"),t()(),i(758,"p"),e(759,"Habilita a quebra autom\xE1tica do texto da propriedade "),i(760,"code"),e(761,"t-label"),t(),e(762,". Quando "),i(763,"code"),e(764,"t-label-text-wrap"),t(),e(765,` for verdadeiro, o texto que excede
o espa\xE7o dispon\xEDvel \xE9 transferido para a pr\xF3xima linha em pontos apropriados para uma
leitura clara.`),t()()(),i(766,"tr",19)(767,"td",20)(768,"div",21)(769,"span",22),e(770,"t-literals"),a(771,"br"),t()()(),i(772,"td",24)(773,"code",47),e(774,"ThfLookupLiterals"),t()(),i(775,"td",26),e(776,"-"),t(),i(777,"td",27)(778,"em")(779,"strong"),e(780,"(opcional)"),t()(),i(781,"p"),e(782,"Permite definir literais personalizados para o componente, conforme a interface "),i(783,"strong"),e(784,"ThfLookupLiterals"),t(),e(785,"."),t(),i(786,"pre")(787,"code",33),e(788,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(789,"pre")(790,"code",34),e(791,"customLiterals: ThfLookupLiterals = { modalTitle: 'Busca avan\xE7ada' };"),t()()()(),i(792,"tr",19)(793,"td",20)(794,"div",21)(795,"span",22),e(796,"t-loading"),a(797,"br"),t()()(),i(798,"td",24)(799,"code",29),e(800,"boolean"),t()(),i(801,"td",26)(802,"p")(803,"code"),e(804,"false"),t()()(),i(805,"td",27)(806,"em")(807,"strong"),e(808,"(opcional)"),t()(),i(809,"p"),e(810,"Exibe um \xEDcone de carregamento no lado direito do campo para sinalizar que uma opera\xE7\xE3o est\xE1 em andamento."),t()()(),i(811,"tr",19)(812,"td",20)(813,"div",21)(814,"span",22),e(815,"t-multiple"),a(816,"br"),t()()(),i(817,"td",24)(818,"code",29),e(819,"boolean"),t()(),i(820,"td",26)(821,"p")(822,"code"),e(823,"false"),t()()(),i(824,"td",27)(825,"em")(826,"strong"),e(827,"(opcional)"),t()(),i(828,"p"),e(829,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(830,"blockquote")(831,"p"),e(832,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(833,"code"),e(834,"[ 12345, 67890 ]"),t()()()()(),i(835,"tr",19)(836,"td",20)(837,"div",21)(838,"span",22),e(839,"t-no-autocomplete"),a(840,"br"),t()()(),i(841,"td",24)(842,"code",29),e(843,"boolean"),t()(),i(844,"td",26)(845,"p")(846,"code"),e(847,"false"),t()()(),i(848,"td",27)(849,"em")(850,"strong"),e(851,"(opcional)"),t()(),i(852,"p"),e(853,"Desabilita o "),i(854,"code"),e(855,"autocomplete"),t(),e(856," (propriedade nativa) do campo."),t()()(),i(857,"tr",19)(858,"td",20)(859,"div",30)(860,"span",31),e(861," (t-error)"),a(862,"br"),t()()(),i(863,"td",24)(864,"code",25),e(865,"EventEmitter"),t()(),i(866,"td",26),e(867,"-"),t(),i(868,"td",27)(869,"em")(870,"strong"),e(871,"(opcional)"),t()(),i(872,"p"),e(873,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(874,"tr",19)(875,"td",20)(876,"div",21)(877,"span",22),e(878,"t-optional"),a(879,"br"),t()()(),i(880,"td",24)(881,"code",29),e(882,"boolean"),t()(),i(883,"td",26)(884,"p")(885,"code"),e(886,"false"),t()()(),i(887,"td",27)(888,"em")(889,"strong"),e(890,"(opcional)"),t()(),i(891,"p"),e(892,"Exibe um indicador opcional no campo. Requer que "),i(893,"strong"),e(894,"t-label"),t(),e(895," esteja definido e "),i(896,"strong"),e(897,"t-required"),t(),e(898," desabilitado."),t()()(),i(899,"tr",19)(900,"td",20)(901,"div",21)(902,"span",22),e(903,"t-placeholder"),a(904,"br"),t()()(),i(905,"td",24)(906,"code",28),e(907,"string"),t()(),i(908,"td",26),e(909,"-"),t(),i(910,"td",27)(911,"em")(912,"strong"),e(913,"(opcional)"),t()(),i(914,"p"),e(915,"Texto exibido enquanto o campo estiver vazio."),t()()(),i(916,"tr",19)(917,"td",20)(918,"div",21)(919,"span",22),e(920," t-helper"),a(921,"br"),t()()(),i(922,"td",24)(923,"code",48),e(924,"PoHelperOptions"),t()(),i(925,"td",26),e(926,"-"),t(),i(927,"td",27)(928,"em")(929,"strong"),e(930,"(opcional)"),t()(),i(931,"p"),e(932,"Define as op\xE7\xF5es do componente de ajuda (po-helper) que ser\xE1 exibido ao lado do label."),t(),i(933,"p"),e(934,"Ao configurar esta propriedade, o antigo \xEDcone de ajuda adicional ("),i(935,"code"),e(936,"t-additional-help-tooltip"),t(),e(937," e "),i(938,"code"),e(939,"t-additional-help"),t(),e(940,") ser\xE1 ignorado."),t()()(),i(941,"tr",19)(942,"td",20)(943,"div",21)(944,"span",22),e(945,"t-required"),a(946,"br"),t()()(),i(947,"td",24)(948,"code",29),e(949,"boolean"),t()(),i(950,"td",26)(951,"p")(952,"code"),e(953,"false"),t()()(),i(954,"td",27)(955,"em")(956,"strong"),e(957,"(opcional)"),t()(),i(958,"p"),e(959,"Define o campo como obrigat\xF3rio. Caso "),i(960,"strong"),e(961,"t-disabled"),t(),e(962," esteja habilitado, a obrigatoriedade ser\xE1 ignorada."),t()()(),i(963,"tr",19)(964,"td",20)(965,"div",21)(966,"span",22),e(967,"t-search-on-enter"),a(968,"br"),t()()(),i(969,"td",24)(970,"code",49),e(971,"'equal' "),t(),i(972,"code",50),e(973," 'include'"),t()(),i(974,"td",26)(975,"p")(976,"code"),e(977,"equal"),t()()(),i(978,"td",27)(979,"em")(980,"strong"),e(981,"(opcional)"),t()(),i(982,"p"),e(983,"Realiza busca do item ao pressionar a tecla Enter."),t(),i(984,"blockquote")(985,"p"),e(986,"Caso essa propriedade seja definida como "),i(987,"code"),e(988,"equal"),t(),e(989,`, a busca ser\xE1 realizada quando o valor do campo for exatamente igual ao valor do item.
Caso seja definida como `),i(990,"code"),e(991,"include"),t(),e(992,", a busca retornar\xE1 o primeiro item que contenha o valor do campo."),t()()()(),i(993,"tr",19)(994,"td",20)(995,"div",30)(996,"span",31),e(997," (t-selected)"),a(998,"br"),t()()(),i(999,"td",24)(1e3,"code",25),e(1001,"EventEmitter"),t()(),i(1002,"td",26),e(1003,"-"),t(),i(1004,"td",27)(1005,"em")(1006,"strong"),e(1007,"(opcional)"),t()(),i(1008,"p"),e(1009,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(1010,"strong"),e(1011,"t-field-value"),t(),e(1012,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(1013,"tr",19)(1014,"td",20)(1015,"div",21)(1016,"span",22),e(1017,"t-show-required"),a(1018,"br"),t()()(),i(1019,"td",24)(1020,"code",29),e(1021,"boolean"),t()(),i(1022,"td",26)(1023,"p")(1024,"code"),e(1025,"false"),t()()(),i(1026,"td",27)(1027,"em")(1028,"strong"),e(1029,"(opcional)"),t()(),i(1030,"p"),e(1031,"Exibe um indicador de obrigatoriedade no campo. Requer que "),i(1032,"strong"),e(1033,"t-required"),t(),e(1034," esteja habilitado e "),i(1035,"strong"),e(1036,"t-label"),t(),e(1037," definido."),t()()(),i(1038,"tr",19)(1039,"td",20)(1040,"div",21)(1041,"span",22),e(1042," t-modal-size"),a(1043,"br"),t()()(),i(1044,"td",24)(1045,"code",28),e(1046,"string"),t()(),i(1047,"td",26)(1048,"p")(1049,"code"),e(1050,"lg"),t()()(),i(1051,"td",27)(1052,"em")(1053,"strong"),e(1054,"(opcional)"),t()(),i(1055,"p"),e(1056,"Define o tamanho do modal."),t(),i(1057,"p"),e(1058,"Valores v\xE1lidos:"),t(),i(1059,"ul")(1060,"li")(1061,"code"),e(1062,"sm"),t(),e(1063," (pequeno)"),t(),i(1064,"li")(1065,"code"),e(1066,"md"),t(),e(1067," (m\xE9dio)"),t(),i(1068,"li")(1069,"code"),e(1070,"lg"),t(),e(1071," (grande)"),t(),i(1072,"li")(1073,"code"),e(1074,"xl"),t(),e(1075," (extra grande)"),t(),i(1076,"li")(1077,"code"),e(1078,"auto"),t(),e(1079," (autom\xE1tico)"),t()(),i(1080,"blockquote")(1081,"p"),e(1082,"Quando informado "),i(1083,"code"),e(1084,"auto"),t(),e(1085,` a modal calcular\xE1 automaticamente seu tamanho baseado em seu conte\xFAdo.
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
}`),t()()()()(),a(1119,"br"),t()()(),T(1120,2),t(),i(1121,"po-tab",54),T(1122,3),i(1123,"po-container",5)(1124,"po-accordion",6)(1125,"po-accordion-item",55)(1126,"h4",9)(1127,"code"),e(1128,"ThfLookupColumn"),t()(),i(1129,"div",10)(1130,"p"),e(1131,"Interface para configura\xE7\xE3o das colunas ("),i(1132,"strong"),e(1133,"t-columns"),t(),e(1134,")."),t()(),i(1135,"h4",15),e(1136,"Propriedades"),t(),i(1137,"table",16)(1138,"tr",17)(1139,"th",18),e(1140,"Nome"),t(),i(1141,"th",18),e(1142,"Tipo"),t(),i(1143,"th",18),e(1144,"Descri\xE7\xE3o"),t()(),i(1145,"tr",19)(1146,"td",20)(1147,"div",21)(1148,"span",22),e(1149," boolean"),a(1150,"br"),t()()(),i(1151,"td",24)(1152,"code",56),e(1153,"PoTableBoolean"),t()(),i(1154,"td",27)(1155,"em")(1156,"strong"),e(1157,"(opcional)"),t()(),i(1158,"p"),e(1159,"Define um objeto do tipo "),i(1160,"code"),e(1161,"PoTableBoolean"),t(),e(1162," para as colunas do tipo "),i(1163,"em"),e(1164,"boolean"),t(),e(1165,". Por exemplo:"),t(),i(1166,"pre")(1167,"code"),e(1168,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(1169,"blockquote")(1170,"p"),e(1171,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(1172,"em"),e(1173,"boolean"),t(),e(1174,`,
esta exibir\xE1 por padr\xE3o `),i(1175,"code"),e(1176,"Sim"),t(),e(1177," e "),i(1178,"code"),e(1179,"N\xE3o"),t(),e(1180," de acordo com os valores "),i(1181,"em"),e(1182,"booleanos"),t(),e(1183,"."),t()()()(),i(1184,"tr",19)(1185,"td",20)(1186,"div",21)(1187,"span",22),e(1188," booleanFalse"),a(1189,"br"),t()()(),i(1190,"td",24)(1191,"code",28),e(1192,"string"),t()(),i(1193,"td",27)(1194,"em")(1195,"strong"),e(1196,"(opcional)"),t()(),i(1197,"p"),e(1198,"Texto exibido quando o valor da coluna for "),i(1199,"em"),e(1200,"false"),t(),e(1201,"."),t()()(),i(1202,"tr",19)(1203,"td",20)(1204,"div",21)(1205,"span",22),e(1206," booleanTrue"),a(1207,"br"),t()()(),i(1208,"td",24)(1209,"code",28),e(1210,"string"),t()(),i(1211,"td",27)(1212,"em")(1213,"strong"),e(1214,"(opcional)"),t()(),i(1215,"p"),e(1216,"Texto exibido quando o valor da coluna for "),i(1217,"em"),e(1218,"true"),t(),e(1219,"."),t()()(),i(1220,"tr",19)(1221,"td",20)(1222,"div",21)(1223,"span",22),e(1224," disabled"),a(1225,"br"),t()()(),i(1226,"td",24)(1227,"code",57),e(1228,"Function"),t()(),i(1229,"td",27)(1230,"em")(1231,"strong"),e(1232,"(opcional)"),t()(),i(1233,"p"),e(1234,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(1235,"em"),e(1236,"link"),t(),e(1237," e sua a\xE7\xE3o."),t(),i(1238,"blockquote")(1239,"p"),e(1240,"Propriedade dispon\xEDvel nas colunas do tipo "),i(1241,"code"),e(1242,"link"),t(),e(1243,"."),t()()()(),i(1244,"tr",19)(1245,"td",20)(1246,"div",21)(1247,"span",22),e(1248," format"),a(1249,"br"),t()()(),i(1250,"td",24)(1251,"code",28),e(1252,"string"),t()(),i(1253,"td",27)(1254,"em")(1255,"strong"),e(1256,"(opcional)"),t()(),i(1257,"p"),e(1258,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(1259,"ul")(1260,"li"),e(1261,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(1262,"li"),e(1263,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(1264,"tr",19)(1265,"td",20)(1266,"div",21)(1267,"span",22),e(1268," label"),a(1269,"br"),t()()(),i(1270,"td",24)(1271,"code",28),e(1272,"string"),t()(),i(1273,"td",27)(1274,"em")(1275,"strong"),e(1276,"(opcional)"),t()(),i(1277,"p"),e(1278,"Texto para t\xEDtulo da coluna."),t(),i(1279,"p"),e(1280,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(1281,"em"),e(1282,"label"),t(),e(1283," o valor da propriedade "),i(1284,"em"),e(1285,"property"),t(),e(1286," com a primeira letra em mai\xFAsculo."),t()()(),i(1287,"tr",19)(1288,"td",20)(1289,"div",21)(1290,"span",22),e(1291," labels"),a(1292,"br"),t()()(),i(1293,"td",24)(1294,"code",58),e(1295,"Array<PoTableColumnLabel>"),t()(),i(1296,"td",27)(1297,"em")(1298,"strong"),e(1299,"(opcional)"),t()(),i(1300,"p"),e(1301,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(1302,"code"),e(1303,"PoTableColumnLabel"),t(),e(1304," na qual devem ser definidas os labels. Por exemplo:"),t(),i(1305,"pre")(1306,"code"),e(1307,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(1308,"tr",19)(1309,"td",20)(1310,"div",21)(1311,"span",22),e(1312," locale"),a(1313,"br"),t()()(),i(1314,"td",24)(1315,"code",28),e(1316,"string"),t()(),i(1317,"td",27)(1318,"em")(1319,"strong"),e(1320,"(opcional)"),t()(),i(1321,"p"),e(1322,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
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
export class AppModule {}`),t()(),i(1346,"blockquote")(1347,"p"),e(1348,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(1349,"code"),e(1350,"number"),t(),e(1351," e "),i(1352,"code"),e(1353,"currency"),t(),e(1354,"."),t()()()(),i(1355,"tr",19)(1356,"td",20)(1357,"div",21)(1358,"span",22),e(1359," property"),a(1360,"br"),t()()(),i(1361,"td",24)(1362,"code",28),e(1363,"string"),t()(),i(1364,"td",27)(1365,"em")(1366,"strong"),e(1367,"(opcional)"),t()(),i(1368,"p"),e(1369,"Nome identificador da coluna."),t()()(),i(1370,"tr",19)(1371,"td",20)(1372,"div",21)(1373,"span",22),e(1374," type"),a(1375,"br"),t()()(),i(1376,"td",24)(1377,"code",28),e(1378,"string"),t()(),i(1379,"td",27)(1380,"em")(1381,"strong"),e(1382,"(opcional)"),t()(),i(1383,"p"),e(1384,"Tipo da coluna:"),t(),i(1385,"ul")(1386,"li"),e(1387,"string (padr\xE3o): textos"),t(),i(1388,"li"),e(1389,"number: valores num\xE9ricos"),t(),i(1390,"li"),e(1391,"date: data"),t(),i(1392,"li"),e(1393,"currency: valores monet\xE1rios"),t(),i(1394,"li"),e(1395,"dateTime: data e hora"),t()()()(),i(1396,"tr",19)(1397,"td",20)(1398,"div",21)(1399,"span",22),e(1400," visible"),a(1401,"br"),t()()(),i(1402,"td",24)(1403,"code",29),e(1404,"boolean"),t()(),i(1405,"td",27)(1406,"em")(1407,"strong"),e(1408,"(opcional)"),t()(),i(1409,"p"),e(1410,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(1411,"strong"),e(1412,"gerenciador de colunas"),t(),e(1413,"."),t(),i(1414,"blockquote")(1415,"p"),e(1416,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(1417,"code"),e(1418,"p-max-columns"),t(),e(1419,"."),t()()()(),i(1420,"tr",19)(1421,"td",20)(1422,"div",21)(1423,"span",22),e(1424," width"),a(1425,"br"),t()()(),i(1426,"td",24)(1427,"code",28),e(1428,"string"),t()(),i(1429,"td",27)(1430,"em")(1431,"strong"),e(1432,"(opcional)"),t()(),i(1433,"p"),e(1434,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(1435,"po-accordion-item",60)(1436,"h4",9)(1437,"code"),e(1438,"ThfLookupFilterSearchSelect"),t()(),i(1439,"div",10)(1440,"p"),e(1441,"Interface que define as colunas para busca ("),i(1442,"strong"),e(1443,"t-filter-search-select"),t(),e(1444,")"),t()(),i(1445,"h4",15),e(1446,"Propriedades"),t(),i(1447,"table",16)(1448,"tr",17)(1449,"th",18),e(1450,"Nome"),t(),i(1451,"th",18),e(1452,"Tipo"),t(),i(1453,"th",18),e(1454,"Descri\xE7\xE3o"),t()(),i(1455,"tr",19)(1456,"td",20)(1457,"div",21)(1458,"span",22),e(1459," label"),a(1460,"br"),t()()(),i(1461,"td",24)(1462,"code",28),e(1463,"string"),t()(),i(1464,"td",27)(1465,"p"),e(1466,"R\xF3tulo da coluna"),t()()(),i(1467,"tr",19)(1468,"td",20)(1469,"div",21)(1470,"span",22),e(1471," value"),a(1472,"br"),t()()(),i(1473,"td",24)(1474,"code",28),e(1475,"string"),t()(),i(1476,"td",27)(1477,"p"),e(1478,"Coluna"),t()()()()(),i(1479,"po-accordion-item",61)(1480,"h4",9)(1481,"code"),e(1482,"ThfLookupFilter"),t()(),i(1483,"div",10)(1484,"p"),e(1485,"Interface para definir o tipo de busca via servi\xE7o."),t()(),i(1486,"table",52)(1487,"tr",19)(1488,"th",53)(1489,"div",21)(1490,"h4")(1491,"span",22),e(1492," fetchItems "),t()()()()(),i(1493,"tr",27)(1494,"td",27)(1495,"p"),e(1496,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(1497,"em"),e(1498,"Observable"),t(),e(1499," com a resposta da API no formato { items: [] }."),t()()()(),i(1500,"h5")(1501,"b"),e(1502,"Par\xE2metros"),t()(),i(1503,"table",16)(1504,"tr",17)(1505,"th",18),e(1506,"Nome"),t(),i(1507,"th",18),e(1508,"Tipo"),t(),i(1509,"th",18),e(1510,"Descri\xE7\xE3o"),t()(),i(1511,"tr",19)(1512,"td",20),e(1513," query"),t(),i(1514,"td",24)(1515,"code",62),e(1516," string "),t()(),i(1517,"td",27)(1518,"p"),e(1519,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(1520,"tr",19)(1521,"td",20),e(1522," filterParams"),t(),i(1523,"td",24)(1524,"code",62),e(1525," any "),t()(),i(1526,"td",27)(1527,"p"),e(1528,"Valor informado atrav\xE9s da propriedade "),i(1529,"strong"),e(1530,"t-filter-params"),t(),e(1531,"."),t()()()(),a(1532,"br"),i(1533,"table",52)(1534,"tr",19)(1535,"th",53)(1536,"div",21)(1537,"h4")(1538,"span",22),e(1539," getFilteredItems "),t()()()()(),i(1540,"tr",27)(1541,"td",27)(1542,"p"),e(1543,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(1544,"em"),e(1545,"Observable"),t(),e(1546," com a resposta da API no formato da interface "),i(1547,"strong"),e(1548,"ThfLookupResponseApi"),t(),e(1549,"."),t()()()(),i(1550,"h5")(1551,"b"),e(1552,"Par\xE2metros"),t()(),i(1553,"table",16)(1554,"tr",17)(1555,"th",18),e(1556,"Nome"),t(),i(1557,"th",18),e(1558,"Tipo"),t(),i(1559,"th",18),e(1560,"Descri\xE7\xE3o"),t()(),i(1561,"tr",19)(1562,"td",20),e(1563," params"),t(),i(1564,"td",24)(1565,"code",62),e(1566," ThfLookupFilteredItemsParams "),t()(),i(1567,"td",27)(1568,"p"),e(1569,"Objeto enviado por par\xE2metro que implementa a interface "),i(1570,"strong"),e(1571,"ThfLookupFilteredItemsParams"),t(),e(1572,"."),t()()()(),a(1573,"br"),i(1574,"table",52)(1575,"tr",19)(1576,"th",53)(1577,"div",21)(1578,"h4")(1579,"span",22),e(1580," getObjectByValue "),t()()()()(),i(1581,"tr",27)(1582,"td",27)(1583,"p"),e(1584,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1585,"p"),e(1586,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1587,"code"),e(1588,"value"),t(),e(1589,` ser\xE1 enviado como uma lista de valores
e o `),i(1590,"em"),e(1591,"Observable"),t(),e(1592," deve retornar uma lista de objetos."),t()()()(),i(1593,"h5")(1594,"b"),e(1595,"Par\xE2metros"),t()(),i(1596,"table",16)(1597,"tr",17)(1598,"th",18),e(1599,"Nome"),t(),i(1600,"th",18),e(1601,"Tipo"),t(),i(1602,"th",18),e(1603,"Descri\xE7\xE3o"),t()(),i(1604,"tr",19)(1605,"td",20),e(1606," value"),t(),i(1607,"td",24)(1608,"code",28),e(1609," string "),t(),i(1610,"code",37),e(1611," Array<any> "),t()(),i(1612,"td",27)(1613,"p"),e(1614,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1615,"tr",19)(1616,"td",20),e(1617," filterParams"),t(),i(1618,"td",24)(1619,"code",62),e(1620," any "),t()(),i(1621,"td",27)(1622,"p"),e(1623,"Valor informado atrav\xE9s da propriedade "),i(1624,"strong"),e(1625,"t-filter-params"),t(),e(1626,"."),t()()()(),a(1627,"br"),t(),i(1628,"po-accordion-item",63)(1629,"h4",9)(1630,"code"),e(1631,"ThfLookupFilteredItemsParams"),t()(),i(1632,"div",10)(1633,"p"),e(1634,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1635,"strong"),e(1636,"getFilteredItems"),t(),e(1637,"."),t()(),i(1638,"h4",15),e(1639,"Propriedades"),t(),i(1640,"table",16)(1641,"tr",17)(1642,"th",18),e(1643,"Nome"),t(),i(1644,"th",18),e(1645,"Tipo"),t(),i(1646,"th",18),e(1647,"Descri\xE7\xE3o"),t()(),i(1648,"tr",19)(1649,"td",20)(1650,"div",21)(1651,"span",22),e(1652," filter"),a(1653,"br"),t()()(),i(1654,"td",24)(1655,"code",64),e(1656,`{ [key: string]: any;
}`),t()(),i(1657,"td",27)(1658,"em")(1659,"strong"),e(1660,"(opcional)"),t()(),i(1661,"p"),e(1662,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1663,"tr",19)(1664,"td",20)(1665,"div",21)(1666,"span",22),e(1667," filterParams"),a(1668,"br"),t()()(),i(1669,"td",24)(1670,"code",40),e(1671,"any"),t()(),i(1672,"td",27)(1673,"em")(1674,"strong"),e(1675,"(opcional)"),t()(),i(1676,"p"),e(1677,"Valor informado atrav\xE9s da propriedade "),i(1678,"code"),e(1679,"t-filter-params"),t(),e(1680,"."),t()()(),i(1681,"tr",19)(1682,"td",20)(1683,"div",21)(1684,"span",22),e(1685," order"),a(1686,"br"),t()()(),i(1687,"td",24)(1688,"code",28),e(1689,"string"),t()(),i(1690,"td",27)(1691,"em")(1692,"strong"),e(1693,"(opcional)"),t()(),i(1694,"p"),e(1695,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1696,"ul")(1697,"li"),e(1698,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1699,"code"),e(1700,"-<colunaOrdenada>"),t(),e(1701,", por exemplo "),i(1702,"code"),e(1703,"-name"),t(),e(1704,"."),t(),i(1705,"li"),e(1706,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1707,"code"),e(1708,"<colunaOrdenada>"),t(),e(1709,", por exemplo "),i(1710,"code"),e(1711,"name"),t(),e(1712,"."),t()()()(),i(1713,"tr",19)(1714,"td",20)(1715,"div",21)(1716,"span",22),e(1717," page"),a(1718,"br"),t()()(),i(1719,"td",24)(1720,"code",65),e(1721,"number"),t()(),i(1722,"td",27)(1723,"em")(1724,"strong"),e(1725,"(opcional)"),t()(),i(1726,"p"),e(1727,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1728,"tr",19)(1729,"td",20)(1730,"div",21)(1731,"span",22),e(1732," pageSize"),a(1733,"br"),t()()(),i(1734,"td",24)(1735,"code",65),e(1736,"number"),t()(),i(1737,"td",27)(1738,"em")(1739,"strong"),e(1740,"(opcional)"),t()(),i(1741,"p"),e(1742,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1743,"po-accordion-item",66)(1744,"h4",9)(1745,"code"),e(1746,"ThfLookupGridProperties"),t()(),i(1747,"div",10)(1748,"p"),e(1749,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup."),t()(),i(1750,"h4",15),e(1751,"Propriedades"),t(),i(1752,"table",16)(1753,"tr",17)(1754,"th",18),e(1755,"Nome"),t(),i(1756,"th",18),e(1757,"Tipo"),t(),i(1758,"th",18),e(1759,"Descri\xE7\xE3o"),t()(),i(1760,"tr",19)(1761,"td",20)(1762,"div",21)(1763,"span",22),e(1764," autoSize"),a(1765,"br"),t()()(),i(1766,"td",24)(1767,"code",29),e(1768,"boolean"),t()(),i(1769,"td",27)(1770,"em")(1771,"strong"),e(1772,"(opcional)"),t()(),i(1773,"p"),e(1774,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1775,"strong"),e(1776,"resizable"),t(),e(1777," esteja habilitada."),t(),i(1778,"blockquote")(1779,"p"),e(1780,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1781,"tr",19)(1782,"td",20)(1783,"div",21)(1784,"span",22),e(1785," autoSizeOnScroll"),a(1786,"br"),t()()(),i(1787,"td",24)(1788,"code",29),e(1789,"boolean"),t()(),i(1790,"td",27)(1791,"em")(1792,"strong"),e(1793,"(opcional)"),t()(),i(1794,"p"),e(1795,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1796,"p"),e(1797,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1798,"p"),e(1799,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1800,"code"),e(1801,"t-page-size-virtual"),t(),e(1802," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1803,"blockquote")(1804,"p")(1805,"strong"),e(1806,"Pr\xE9-requisitos"),t(),e(1807,": Requer que as propriedades "),i(1808,"code"),e(1809,"autoSize"),t(),e(1810,", "),i(1811,"code"),e(1812,"resizable"),t(),e(1813,`
e `),i(1814,"code"),e(1815,"virtualScroll"),t(),e(1816," estejam habilitadas."),t()(),i(1817,"blockquote")(1818,"p")(1819,"strong"),e(1820,"Incompatibilidade"),t(),e(1821,": N\xE3o funciona com "),i(1822,"code"),e(1823,"t-grid-row-actions"),t(),e(1824," habilitado;"),t()(),i(1825,"p")(1826,"strong"),e(1827,"Exemplo de uso:"),t()(),i(1828,"pre")(1829,"code",33),e(1830,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(1831,"tr",19)(1832,"td",20)(1833,"div",21)(1834,"span",22),e(1835," draggable"),a(1836,"br"),t()()(),i(1837,"td",24)(1838,"code",29),e(1839,"boolean"),t()(),i(1840,"td",27)(1841,"em")(1842,"strong"),e(1843,"(opcional)"),t()(),i(1844,"p"),e(1845,"Habilita o Drag and Drop nas colunas."),t()()(),i(1846,"tr",19)(1847,"td",20)(1848,"div",21)(1849,"span",22),e(1850," group"),a(1851,"br"),t()()(),i(1852,"td",24)(1853,"code",38),e(1854,"Array<string>"),t()(),i(1855,"td",27)(1856,"em")(1857,"strong"),e(1858,"(opcional)"),t()(),i(1859,"p"),e(1860,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1861,"strong"),e(1862,"groupable"),t(),e(1863," esteja habilitada."),t()()(),i(1864,"tr",19)(1865,"td",20)(1866,"div",21)(1867,"span",22),e(1868," groupable"),a(1869,"br"),t()()(),i(1870,"td",24)(1871,"code",29),e(1872,"boolean "),t(),i(1873,"code",67),e(1874," GroupableSettings"),t()(),i(1875,"td",27)(1876,"em")(1877,"strong"),e(1878,"(opcional)"),t()(),i(1879,"p"),e(1880,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1881,"tr",19)(1882,"td",20)(1883,"div",21)(1884,"span",22),e(1885," hideSelectAll"),a(1886,"br"),t()()(),i(1887,"td",24)(1888,"code",29),e(1889,"boolean"),t()(),i(1890,"td",27)(1891,"em")(1892,"strong"),e(1893,"(opcional)"),t()(),i(1894,"p"),e(1895,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1896,"tr",19)(1897,"td",20)(1898,"div",21)(1899,"span",22),e(1900," resizable"),a(1901,"br"),t()()(),i(1902,"td",24)(1903,"code",29),e(1904,"boolean"),t()(),i(1905,"td",27)(1906,"em")(1907,"strong"),e(1908,"(opcional)"),t()(),i(1909,"p"),e(1910,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1911,"tr",19)(1912,"td",20)(1913,"div",21)(1914,"span",22),e(1915," selectableEntireLine"),a(1916,"br"),t()()(),i(1917,"td",24)(1918,"code",29),e(1919,"boolean"),t()(),i(1920,"td",27)(1921,"em")(1922,"strong"),e(1923,"(opcional)"),t()(),i(1924,"p"),e(1925,"Permite selecionar o item ao clicar na linha."),t()()(),i(1926,"tr",19)(1927,"td",20)(1928,"div",21)(1929,"span",22),e(1930," showDraggableIcon"),a(1931,"br"),t()()(),i(1932,"td",24)(1933,"code",29),e(1934,"boolean"),t()(),i(1935,"td",27)(1936,"em")(1937,"strong"),e(1938,"(opcional)"),t()(),i(1939,"p"),e(1940,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1941,"tr",19)(1942,"td",20)(1943,"div",21)(1944,"span",22),e(1945," showMoreDisabled"),a(1946,"br"),t()()(),i(1947,"td",24)(1948,"code",29),e(1949,"boolean"),t()(),i(1950,"td",27)(1951,"em")(1952,"strong"),e(1953,"(opcional)"),t()(),i(1954,"p"),e(1955,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1956,"tr",19)(1957,"td",20)(1958,"div",21)(1959,"span",22),e(1960," showMoreVisible"),a(1961,"br"),t()()(),i(1962,"td",24)(1963,"code",29),e(1964,"boolean"),t()(),i(1965,"td",27)(1966,"em")(1967,"strong"),e(1968,"(opcional)"),t()(),i(1969,"p"),e(1970,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1971,"strong"),e(1972,"pageable"),t(),e(1973," esteja habilitada."),t(),i(1974,"blockquote")(1975,"p"),e(1976,"Caso seja utilizado em conjunto com "),i(1977,"strong"),e(1978,"showMoreDisabled"),t(),e(1979,", a propriedade "),i(1980,"strong"),e(1981,"showMoreVisible"),t(),e(1982," ter\xE1 prioridade."),t()()()(),i(1983,"tr",19)(1984,"td",20)(1985,"div",21)(1986,"span",22),e(1987," sort"),a(1988,"br"),t()()(),i(1989,"td",24)(1990,"code",68),e(1991,"Array<{ field: string; dir: 'asc' "),t(),i(1992,"code",69),e(1993,` 'desc';
}>`),t()(),i(1994,"td",27)(1995,"em")(1996,"strong"),e(1997,"(opcional)"),t()(),i(1998,"p"),e(1999,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(2e3,"pre")(2001,"code",34),e(2002,"sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(2003,"tr",19)(2004,"td",20)(2005,"div",21)(2006,"span",22),e(2007," sortable"),a(2008,"br"),t()()(),i(2009,"td",24)(2010,"code",29),e(2011,"boolean"),t()(),i(2012,"td",27)(2013,"em")(2014,"strong"),e(2015,"(opcional)"),t()(),i(2016,"p"),e(2017,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(2018,"tr",19)(2019,"td",20)(2020,"div",21)(2021,"span",22),e(2022," spacing"),a(2023,"br"),t()()(),i(2024,"td",24)(2025,"code",70),e(2026,"'extraSmall' "),t(),i(2027,"code",71),e(2028," 'small' "),t(),i(2029,"code",72),e(2030," 'medium' "),t(),i(2031,"code",73),e(2032," 'large'"),t()(),i(2033,"td",27)(2034,"em")(2035,"strong"),e(2036,"(opcional)"),t()(),i(2037,"p"),e(2038,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(2039,"strong"),e(2040,"ThfColumnSpacing"),t(),e(2041,"."),t()()(),i(2042,"tr",19)(2043,"td",20)(2044,"div",21)(2045,"span",22),e(2046," striped"),a(2047,"br"),t()()(),i(2048,"td",24)(2049,"code",29),e(2050,"boolean"),t()(),i(2051,"td",27)(2052,"em")(2053,"strong"),e(2054,"(opcional)"),t()(),i(2055,"p"),e(2056,"Define o estilo listrado no grid (striped)."),t()()(),i(2057,"tr",19)(2058,"td",20)(2059,"div",21)(2060,"span",22),e(2061," virtualScroll"),a(2062,"br"),t()()(),i(2063,"td",24)(2064,"code",29),e(2065,"boolean"),t()(),i(2066,"td",27)(2067,"em")(2068,"strong"),e(2069,"(opcional)"),t()(),i(2070,"p"),e(2071,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(2072,"po-accordion-item",74)(2073,"h4",9)(2074,"code"),e(2075,"ThfLookupKeysLabel"),t()(),i(2076,"div",10)(2077,"p"),e(2078,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(2079,"strong"),e(2080,"t-keys-label"),t(),e(2081,")."),t()(),i(2082,"h4",15),e(2083,"Propriedades"),t(),i(2084,"table",16)(2085,"tr",17)(2086,"th",18),e(2087,"Nome"),t(),i(2088,"th",18),e(2089,"Tipo"),t(),i(2090,"th",18),e(2091,"Descri\xE7\xE3o"),t()(),i(2092,"tr",19)(2093,"td",20)(2094,"div",21)(2095,"span",22),e(2096," label"),a(2097,"br"),t()()(),i(2098,"td",24)(2099,"code",28),e(2100,"string"),t()(),i(2101,"td",27)(2102,"p"),e(2103,"Texto exibido"),t()()(),i(2104,"tr",19)(2105,"td",20)(2106,"div",21)(2107,"span",22),e(2108," value"),a(2109,"br"),t()()(),i(2110,"td",24)(2111,"code",28),e(2112,"string"),t()(),i(2113,"td",27)(2114,"p"),e(2115,"Coluna"),t()()()()(),i(2116,"po-accordion-item",75)(2117,"h4",9)(2118,"code"),e(2119,"ThfLookupLiterals"),t()(),i(2120,"div",10)(2121,"p"),e(2122,"Interface para customizar literais ("),i(2123,"strong"),e(2124,"t-literals"),t(),e(2125,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(2126,"h4",15),e(2127,"Propriedades"),t(),i(2128,"table",16)(2129,"tr",17)(2130,"th",18),e(2131,"Nome"),t(),i(2132,"th",18),e(2133,"Tipo"),t(),i(2134,"th",18),e(2135,"Descri\xE7\xE3o"),t()(),i(2136,"tr",19)(2137,"td",20)(2138,"div",21)(2139,"span",22),e(2140," confirmBodyDelete"),a(2141,"br"),t()()(),i(2142,"td",24)(2143,"code",28),e(2144,"string"),t()(),i(2145,"td",27)(2146,"em")(2147,"strong"),e(2148,"(opcional)"),t()(),i(2149,"p"),e(2150,"Texto do corpo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2151,"tr",19)(2152,"td",20)(2153,"div",21)(2154,"span",22),e(2155," confirmCancelDelete"),a(2156,"br"),t()()(),i(2157,"td",24)(2158,"code",28),e(2159,"string"),t()(),i(2160,"td",27)(2161,"em")(2162,"strong"),e(2163,"(opcional)"),t()(),i(2164,"p"),e(2165,"Texto do bot\xE3o de cancelar do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2166,"tr",19)(2167,"td",20)(2168,"div",21)(2169,"span",22),e(2170," confirmRemoveDelete"),a(2171,"br"),t()()(),i(2172,"td",24)(2173,"code",28),e(2174,"string"),t()(),i(2175,"td",27)(2176,"em")(2177,"strong"),e(2178,"(opcional)"),t()(),i(2179,"p"),e(2180,"Texto do bot\xE3o de remover do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2181,"tr",19)(2182,"td",20)(2183,"div",21)(2184,"span",22),e(2185," confirmTitleDelete"),a(2186,"br"),t()()(),i(2187,"td",24)(2188,"code",28),e(2189,"string"),t()(),i(2190,"td",27)(2191,"em")(2192,"strong"),e(2193,"(opcional)"),t()(),i(2194,"p"),e(2195,"T\xEDtulo do modal de confirma\xE7\xE3o de remo\xE7\xE3o dos itens selecionados."),t()()(),i(2196,"tr",19)(2197,"td",20)(2198,"div",21)(2199,"span",22),e(2200," lastSearch"),a(2201,"br"),t()()(),i(2202,"td",24)(2203,"code",28),e(2204,"string"),t()(),i(2205,"td",27)(2206,"em")(2207,"strong"),e(2208,"(opcional)"),t()(),i(2209,"p"),e(2210,"Texto exibido no listbox quando estiver exibindo as ultimas pesquisas."),t()()(),i(2211,"tr",19)(2212,"td",20)(2213,"div",21)(2214,"span",22),e(2215," listNotFound"),a(2216,"br"),t()()(),i(2217,"td",24)(2218,"code",28),e(2219,"string"),t()(),i(2220,"td",27)(2221,"em")(2222,"strong"),e(2223,"(opcional)"),t()(),i(2224,"p"),e(2225,"Texto exibido no listbox quando nenhum resultado for encontrado."),t()()(),i(2226,"tr",19)(2227,"td",20)(2228,"div",21)(2229,"span",22),e(2230," modalPlaceholder"),a(2231,"br"),t()()(),i(2232,"td",24)(2233,"code",28),e(2234,"string"),t()(),i(2235,"td",27)(2236,"em")(2237,"strong"),e(2238,"(opcional)"),t()(),i(2239,"p"),e(2240,"Texto exibido no placeholder do input da modal."),t()()(),i(2241,"tr",19)(2242,"td",20)(2243,"div",21)(2244,"span",22),e(2245," modalPrimaryActionLabel"),a(2246,"br"),t()()(),i(2247,"td",24)(2248,"code",28),e(2249,"string"),t()(),i(2250,"td",27)(2251,"em")(2252,"strong"),e(2253,"(opcional)"),t()(),i(2254,"p"),e(2255,"Texto exibido no label do bot\xE3o de a\xE7\xE3o prim\xE1ria da modal."),t()()(),i(2256,"tr",19)(2257,"td",20)(2258,"div",21)(2259,"span",22),e(2260," modalSecondaryActionLabel"),a(2261,"br"),t()()(),i(2262,"td",24)(2263,"code",28),e(2264,"string"),t()(),i(2265,"td",27)(2266,"em")(2267,"strong"),e(2268,"(opcional)"),t()(),i(2269,"p"),e(2270,"Texto exibido no label do bot\xE3o de a\xE7\xE3o secund\xE1ria da modal."),t()()(),i(2271,"tr",19)(2272,"td",20)(2273,"div",21)(2274,"span",22),e(2275," modalTableLoadMoreData"),a(2276,"br"),t()()(),i(2277,"td",24)(2278,"code",28),e(2279,"string"),t()(),i(2280,"td",27)(2281,"em")(2282,"strong"),e(2283,"(opcional)"),t()(),i(2284,"p"),e(2285,"Label do "),i(2286,"code"),e(2287,"button"),t(),e(2288," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(2289,"tr",19)(2290,"td",20)(2291,"div",21)(2292,"span",22),e(2293," modalTableLoadingData"),a(2294,"br"),t()()(),i(2295,"td",24)(2296,"code",28),e(2297,"string"),t()(),i(2298,"td",27)(2299,"em")(2300,"strong"),e(2301,"(opcional)"),t()(),i(2302,"p"),e(2303,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(2304,"tr",19)(2305,"td",20)(2306,"div",21)(2307,"span",22),e(2308," modalTableNoColumns"),a(2309,"br"),t()()(),i(2310,"td",24)(2311,"code",28),e(2312,"string"),t()(),i(2313,"td",27)(2314,"em")(2315,"strong"),e(2316,"(opcional)"),t()(),i(2317,"p"),e(2318,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(2319,"tr",19)(2320,"td",20)(2321,"div",21)(2322,"span",22),e(2323," modalTableNoData"),a(2324,"br"),t()()(),i(2325,"td",24)(2326,"code",28),e(2327,"string"),t()(),i(2328,"td",27)(2329,"em")(2330,"strong"),e(2331,"(opcional)"),t()(),i(2332,"p"),e(2333,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(2334,"tr",19)(2335,"td",20)(2336,"div",21)(2337,"span",22),e(2338," modalTitle"),a(2339,"br"),t()()(),i(2340,"td",24)(2341,"code",28),e(2342,"string"),t()(),i(2343,"td",27)(2344,"em")(2345,"strong"),e(2346,"(opcional)"),t()(),i(2347,"p"),e(2348,"Texto exibido no t\xEDtulo da modal."),t()()(),i(2349,"tr",19)(2350,"td",20)(2351,"div",21)(2352,"span",22),e(2353," multipleItems"),a(2354,"br"),t()()(),i(2355,"td",24)(2356,"code",28),e(2357,"string"),t()(),i(2358,"td",27)(2359,"em")(2360,"strong"),e(2361,"(opcional)"),t()(),i(2362,"p"),e(2363,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(2364,"tr",19)(2365,"td",20)(2366,"div",21)(2367,"span",22),e(2368," oneItem"),a(2369,"br"),t()()(),i(2370,"td",24)(2371,"code",28),e(2372,"string"),t()(),i(2373,"td",27)(2374,"em")(2375,"strong"),e(2376,"(opcional)"),t()(),i(2377,"p"),e(2378,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(2379,"tr",19)(2380,"td",20)(2381,"div",21)(2382,"span",22),e(2383," or"),a(2384,"br"),t()()(),i(2385,"td",24)(2386,"code",28),e(2387,"string"),t()(),i(2388,"td",27)(2389,"em")(2390,"strong"),e(2391,"(opcional)"),t()(),i(2392,"p"),e(2393,"Palavra 'ou' que \xE9 exibida dentro do listbox."),t()()(),i(2394,"tr",19)(2395,"td",20)(2396,"div",21)(2397,"span",22),e(2398," searchAdvanced"),a(2399,"br"),t()()(),i(2400,"td",24)(2401,"code",28),e(2402,"string"),t()(),i(2403,"td",27)(2404,"em")(2405,"strong"),e(2406,"(opcional)"),t()(),i(2407,"p"),e(2408,"Texto exibido no listbox para fazer busca avan\xE7ada."),t()()(),i(2409,"tr",19)(2410,"td",20)(2411,"div",21)(2412,"span",22),e(2413," searchBy"),a(2414,"br"),t()()(),i(2415,"td",24)(2416,"code",28),e(2417,"string"),t()(),i(2418,"td",27)(2419,"em")(2420,"strong"),e(2421,"(opcional)"),t()(),i(2422,"p"),e(2423,"Texto exibido para indicar os campos filtrados."),t()()()()(),i(2424,"po-accordion-item",76)(2425,"h4",9)(2426,"code"),e(2427,"ThfLookupResponseApi"),t()(),i(2428,"div",10)(2429,"p"),e(2430,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(2431,"blockquote")(2432,"p"),e(2433,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(2434,"h4",15),e(2435,"Propriedades"),t(),i(2436,"table",16)(2437,"tr",17)(2438,"th",18),e(2439,"Nome"),t(),i(2440,"th",18),e(2441,"Tipo"),t(),i(2442,"th",18),e(2443,"Descri\xE7\xE3o"),t()(),i(2444,"tr",19)(2445,"td",20)(2446,"div",21)(2447,"span",22),e(2448," hasNext"),a(2449,"br"),t()()(),i(2450,"td",24)(2451,"code",29),e(2452,"boolean"),t()(),i(2453,"td",27)(2454,"p"),e(2455,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(2456,"tr",19)(2457,"td",20)(2458,"div",21)(2459,"span",22),e(2460," items"),a(2461,"br"),t()()(),i(2462,"td",24)(2463,"code",37),e(2464,"Array<any>"),t()(),i(2465,"td",27)(2466,"p"),e(2467,"Lista de itens retornados."),t()()()()()()(),T(2468,4),t(),i(2469,"po-tab",77)(2470,"po-container",5),T(2471,5),i(2472,"h3",78),e(2473,"Tokens customiz\xE1veis"),t(),i(2474,"p"),e(2475,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(2476,"blockquote")(2477,"p"),e(2478,"Para maiores informa\xE7\xF5es, acesse o guia "),i(2479,"a",79),e(2480,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(2481,"."),t()(),i(2482,"table")(2483,"thead")(2484,"tr")(2485,"th"),e(2486,"Propriedade"),t(),i(2487,"th"),e(2488,"Descri\xE7\xE3o"),t(),i(2489,"th"),e(2490,"Valor Padr\xE3o"),t()()(),i(2491,"tbody")(2492,"tr")(2493,"td")(2494,"strong"),e(2495,"Default Values"),t()(),a(2496,"td")(2497,"td"),t(),i(2498,"tr")(2499,"td")(2500,"code"),e(2501,"--font-family"),t()(),i(2502,"td"),e(2503,"Fam\xEDlia tipogr\xE1fica usada"),t(),i(2504,"td")(2505,"code"),e(2506,"var(--font-family-theme)"),t()()(),i(2507,"tr")(2508,"td")(2509,"code"),e(2510,"--font-size"),t()(),i(2511,"td"),e(2512,"Tamanho da fonte"),t(),i(2513,"td")(2514,"code"),e(2515,"var(--font-size)"),t()()(),i(2516,"tr")(2517,"td")(2518,"code"),e(2519,"--text-color-placeholder"),t()(),i(2520,"td"),e(2521,"Cor do texto no placeholder"),t(),i(2522,"td")(2523,"code"),e(2524,"var(--color-neutral-light-30)"),t()()(),i(2525,"tr")(2526,"td")(2527,"code"),e(2528,"--color"),t()(),i(2529,"td"),e(2530,"Cor principal do campo"),t(),i(2531,"td")(2532,"code"),e(2533,"var(--color-neutral-dark-70)"),t()()(),i(2534,"tr")(2535,"td")(2536,"code"),e(2537,"--background"),t()(),i(2538,"td"),e(2539,"Cor de background"),t(),i(2540,"td")(2541,"code"),e(2542,"var(--color-neutral-light-00)"),t()()(),i(2543,"tr")(2544,"td")(2545,"code"),e(2546,"--text-color"),t()(),i(2547,"td"),e(2548,"Cor do texto"),t(),i(2549,"td")(2550,"code"),e(2551,"var(--color-neutral-mid-60)"),t()()(),i(2552,"tr")(2553,"td")(2554,"strong"),e(2555,"Hover"),t()(),a(2556,"td")(2557,"td"),t(),i(2558,"tr")(2559,"td")(2560,"code"),e(2561,"--color-hover"),t()(),i(2562,"td"),e(2563,"Cor principal do campo no estado hover"),t(),i(2564,"td")(2565,"code"),e(2566,"var(--color-brand-01-dark)"),t()()(),i(2567,"tr")(2568,"td")(2569,"code"),e(2570,"--background-hover"),t()(),i(2571,"td"),e(2572,"Cor de background no estado hover"),t(),i(2573,"td")(2574,"code"),e(2575,"var(--color-brand-01-lightest)"),t()()(),i(2576,"tr")(2577,"td")(2578,"strong"),e(2579,"Focused"),t()(),a(2580,"td")(2581,"td"),t(),i(2582,"tr")(2583,"td")(2584,"code"),e(2585,"--color-focused"),t()(),i(2586,"td"),e(2587,"Cor principal do campo no estado de focus"),t(),i(2588,"td")(2589,"code"),e(2590,"var(--color-action-default)"),t()()(),i(2591,"tr")(2592,"td")(2593,"code"),e(2594,"--outline-color-focused"),t()(),i(2595,"td"),e(2596,"Cor do outline no estado de focus"),t(),i(2597,"td")(2598,"code"),e(2599,"var(--color-action-focus)"),t()()(),i(2600,"tr")(2601,"td")(2602,"strong"),e(2603,"Disabled"),t()(),a(2604,"td")(2605,"td"),t(),i(2606,"tr")(2607,"td")(2608,"code"),e(2609,"--color-disabled"),t()(),i(2610,"td"),e(2611,"Cor principal do campo no estado disabled"),t(),i(2612,"td")(2613,"code"),e(2614,"var(--color-neutral-light-30)"),t()()(),i(2615,"tr")(2616,"td")(2617,"code"),e(2618,"--background-disabled"),t()(),i(2619,"td"),e(2620,"Cor de background no estado disabled"),t(),i(2621,"td")(2622,"code"),e(2623,"var(--color-neutral-light-05)"),t()()(),i(2624,"tr")(2625,"td")(2626,"code"),e(2627,"--text-color-disabled"),t()(),i(2628,"td"),e(2629,"Cor do texto no estado disabled"),t(),i(2630,"td")(2631,"code"),e(2632,"var(--color-neutral-dark-70)"),t()()()()()(),T(2633,6),t(),i(2634,"po-tab",80),T(2635,7),t()()())},dependencies:[z,K,v,Ae,ee,G],encapsulation:2})}}return d})();var Ai=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","interfaces-before",""]],[["","interfaces-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],_i=["[overview]","[especificacao-before]","[especificacao-after]","[interfaces-before]","[interfaces-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],At=(()=>{class d{constructor(o){this.el=o}ngAfterViewInit(){this.accordions.forEach(o=>{setTimeout(()=>{o.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(o){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${o}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let g=E.querySelector(".po-tab-button-label");g&&g?.textContent?.trim().toLowerCase()===o&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(Z))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-lookup-data"]],viewQuery:function(r,n){if(r&1&&(D(G,5),D(z,5)),r&2){let l;A(l=_())&&(n.tabs=l.first),A(l=_())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:_i,decls:1763,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","EventEmitter"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataColumn>"],[1,"language-html"],[1,"language-typescript"],["pan","",1,"docs-api-property-type","Array<any>"],["pan","",1,"docs-api-property-type","boolean"],["pan","",1,"docs-api-property-type","string"],["pan","",1,"docs-api-property-type","any"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataFilterSearchSelect>"],["pan","",1,"docs-api-property-type","ThfLookupDataFilter"],["href","https://po-ui.io/guides/api"],["href","https://tc39.es/ecma262/#sec-encodeuricomponent-uricomponent"],["pan","",1,"docs-api-property-type","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","number"],["pan","",1,"docs-api-property-type","Array<ThfLookupDataKeysLabel>"],["pan","",1,"docs-api-property-type","ThfLookupDataLiterals"],["href","https://po-ui.io/documentation/po-theme"],["p-label","Interfaces"],["p-label","ThfLookupDataColumn"],["pan","",1,"docs-api-property-type","PoTableBoolean"],["pan","",1,"docs-api-property-type","Function"],["pan","",1,"docs-api-property-type","Array<PoTableColumnLabel>"],["href","https://po-ui.io/documentation/po-i18n"],["p-label","ThfLookupDataFilterSearchSelect"],["p-label","ThfLookupDataFilter"],[1,"docs-api-method-table"],["colspan","2",1,"docs-api-properties-name-cell"],["pan","",1,"docs-api-property-type"],["p-label","ThfLookupDataFilteredItemsParams"],["pan","",1,"docs-api-property-type","{","[key:","string]:","any;","}"],["p-label","ThfLookupDataGridProperties"],["pan","",1,"docs-api-property-type","Array<string>"],["pan","",1,"docs-api-property-type","GroupableSettings"],["pan","",1,"docs-api-property-type","Array<{","field:","string;","dir:","'asc'"],["pan","",1,"docs-api-property-type","'desc';","}>"],["pan","",1,"docs-api-property-type","'extraSmall'"],["pan","",1,"docs-api-property-type","'small'"],["pan","",1,"docs-api-property-type","'medium'"],["pan","",1,"docs-api-property-type","'large'"],["p-label","ThfLookupDataKeysLabel"],["p-label","ThfLookupDataLiterals"],["p-label","ThfLookupDataResponseApi"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["href","https://po-ui.io/documentation/po-search"],["href","https://thf.totvs.app/v19/documentation/thf-grid"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(X(Ai),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfLookupDataComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"Componente de busca com um grid que lista dados de um servi\xE7o."),t(),i(19,"p"),e(20,"\xC9 possivel realizar a importa\xE7\xE3o individual do "),i(21,"code"),e(22,"THF-Lookup-Data"),t(),e(23,` no seu m\xF3dulo ou componente(caso esteja utilizando standalone):
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
`),t()()(),i(31,"po-accordion-item",14)(32,"h4",15),e(33,"Propriedades"),t(),i(34,"table",16)(35,"tr",17)(36,"th",18),e(37,"Nome"),t(),i(38,"th",18),e(39,"Tipo"),t(),i(40,"th",18),e(41,"Padr\xE3o"),t(),i(42,"th",18),e(43,"Descri\xE7\xE3o"),t()(),i(44,"tr",19)(45,"td",20)(46,"div",21)(47,"span",22),e(48," (t-change)"),a(49,"br"),t()()(),i(50,"td",23)(51,"code",24),e(52,"EventEmitter"),t()(),i(53,"td",25),e(54,"-"),t(),i(55,"td",26)(56,"em")(57,"strong"),e(58,"(opcional)"),t()(),i(59,"p"),e(60,"Evento disparado quando ocorre mudan\xE7as de valor realizadas pelo usu\xE1rio."),t()()(),i(61,"tr",19)(62,"td",20)(63,"div",21)(64,"span",22),e(65," (t-change-model)"),a(66,"br"),t()()(),i(67,"td",23)(68,"code",24),e(69,"EventEmitter"),t()(),i(70,"td",25),e(71,"-"),t(),i(72,"td",26)(73,"em")(74,"strong"),e(75,"(opcional)"),t()(),i(76,"p"),e(77,"Evento disparado quando ocorre mudan\xE7as de valor no campo realizados pelo usu\xE1rio ou altera\xE7\xF5es de valores de forma din\xE2mica."),t()()(),i(78,"tr",19)(79,"td",20)(80,"div",27)(81,"span",28),e(82,"t-columns"),a(83,"br"),t()()(),i(84,"td",23)(85,"code",29),e(86,"Array<ThfLookupDataColumn>"),t()(),i(87,"td",25),e(88,"-"),t(),i(89,"td",26)(90,"em")(91,"strong"),e(92,"(opcional)"),t()(),i(93,"p"),e(94,"Permite definir e configurar as colunas do grid por meio da interface "),i(95,"strong"),e(96,"ThfLookupDataColumn"),t(),e(97,"."),t(),i(98,"pre")(99,"code",30),e(100,`// Exemplo de uso:
<thf-lookup
 ...
 [t-columns]="columns"
></thf-lookup>`),t()(),i(101,"pre")(102,"code",31),e(103,`columns: Array<ThfLookupDataColumn> = [
 { property: 'id', label: 'C\xF3digo' },
 { property: 'name', label: 'Nome' },
}`),t()()()(),i(104,"tr",19)(105,"td",20)(106,"div",27)(107,"span",28),e(108,"t-custom-items"),a(109,"br"),t()()(),i(110,"td",23)(111,"code",32),e(112,"Array<any>"),t()(),i(113,"td",25)(114,"p")(115,"code"),e(116,"[]"),t()()(),i(117,"td",26)(118,"em")(119,"strong"),e(120,"(opcional)"),t()(),i(121,"p"),e(122,"Permite definir uma lista de itens personalizados que ser\xE3o exibidos no componente, sem a necessidade de um servi\xE7o externo."),t()()(),i(123,"tr",19)(124,"td",20)(125,"div",27)(126,"span",28),e(127,"t-disabled"),a(128,"br"),t()()(),i(129,"td",23)(130,"code",33),e(131,"boolean"),t()(),i(132,"td",25)(133,"p")(134,"code"),e(135,"false"),t()()(),i(136,"td",26)(137,"em")(138,"strong"),e(139,"(opcional)"),t()(),i(140,"p"),e(141,'Desabilita a sele\xE7\xE3o na grid, o campo de busca e o bot\xE3o "Carregar mais resultados" do componente.'),t()()(),i(142,"tr",19)(143,"td",20)(144,"div",27)(145,"span",28),e(146,"t-field-label"),a(147,"br"),t()()(),i(148,"td",23)(149,"code",34),e(150,"string"),t()(),i(151,"td",25),e(152,"-"),t(),i(153,"td",26)(154,"p"),e(155,`Define a coluna que ser\xE1 utilizada como descri\xE7\xE3o.
Propriedade obrigat\xF3ria.`),t()()(),i(156,"tr",19)(157,"td",20)(158,"div",27)(159,"span",28),e(160,"t-field-value"),a(161,"br"),t()()(),i(162,"td",23)(163,"code",34),e(164,"string"),t()(),i(165,"td",25),e(166,"-"),t(),i(167,"td",26)(168,"p"),e(169,"Define a coluna que ser\xE1 utilizada como valor do campo. Propriedade obrigat\xF3ria."),t(),i(170,"blockquote")(171,"p"),e(172,"Aten\xE7\xE3o: Caso n\xE3o seja passada ou tenha o conte\xFAdo incorreto, n\xE3o ir\xE1 atualizar o model do formul\xE1rio."),t()()()(),i(173,"tr",19)(174,"td",20)(175,"div",27)(176,"span",28),e(177,"t-filter-params"),a(178,"br"),t()()(),i(179,"td",23)(180,"code",35),e(181,"any"),t()(),i(182,"td",25),e(183,"-"),t(),i(184,"td",26)(185,"em")(186,"strong"),e(187,"(opcional)"),t()(),i(188,"p"),e(189,"Valor que ser\xE1 repassado como par\xE2metro para a URL ou ao servi\xE7o que implementa a interface "),i(190,"strong"),e(191,"ThfLookupDataFilter"),t(),e(192,"."),t()()(),i(193,"tr",19)(194,"td",20)(195,"div",27)(196,"span",28),e(197,"t-filter-search-select"),a(198,"br"),t()()(),i(199,"td",23)(200,"code",36),e(201,"Array<ThfLookupDataFilterSearchSelect>"),t()(),i(202,"td",25),e(203,"-"),t(),i(204,"td",26)(205,"em")(206,"strong"),e(207,"(opcional)"),t()(),i(208,"p"),e(209,"Permite definir quais colunas ser\xE3o op\xE7\xF5es de filtro. Deve implementar a interface "),i(210,"strong"),e(211,"ThfLookupDataFilterSearchSelect"),t(),e(212,"."),t(),i(213,"pre")(214,"code",30),e(215,`// Exemplo de uso:
<thf-lookup
 ...
 [t-filter-search-select]="filterSelect"
></thf-lookup>`),t()(),i(216,"pre")(217,"code",31),e(218,`filterSelect: Array<ThfLookupDataFilterSearchSelect> = [
 { label: 'Nome', value: 'name' },
 { label: 'Nickname', value: 'nickname' },
 { label: 'Email', value: 'email' }
];`),t()()()(),i(219,"tr",19)(220,"td",20)(221,"div",27)(222,"span",28),e(223,"t-filter-service"),a(224,"br"),t()()(),i(225,"td",23)(226,"code",37),e(227,"ThfLookupDataFilter "),t(),i(228,"code",34),e(229," string"),t()(),i(230,"td",25),e(231,"-"),t(),i(232,"td",26)(233,"p"),e(234,`Respons\xE1vel por buscar os dados exibidos no grid dentro do modal de busca avan\xE7ada. Aceita um servi\xE7o que implementa a interface
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
desenvolvedor.`),t()()()(),i(312,"tr",19)(313,"td",20)(314,"div",27)(315,"span",28),e(316,"t-grid-properties"),a(317,"br"),t()()(),i(318,"td",23)(319,"code",40),e(320,"ThfLookupDataGridProperties"),t()(),i(321,"td",25),e(322,"-"),t(),i(323,"td",26)(324,"em")(325,"strong"),e(326,"(opcional)"),t()(),i(327,"p"),e(328,"Propriedades para configura\xE7\xE3o do "),i(329,"code"),e(330,"THF-Grid"),t(),e(331,"."),t(),i(332,"p"),e(333,"// Exemplo de uso:"),t(),i(334,"pre")(335,"code",30),e(336,`<thf-lookup
...
[t-grid-properties]="gridProperties"
></thf-lookup>`),t()(),i(337,"pre")(338,"code",31),e(339,`gridProperties: ThfLookupDataGridProperties = {
resizable: true,
autoSize: true,
autoSizeOnScroll: true,
virtualScroll: true,
}`),t()()()(),i(340,"tr",19)(341,"td",20)(342,"div",27)(343,"span",28),e(344,"t-height"),a(345,"br"),t()()(),i(346,"td",23)(347,"code",41),e(348,"number"),t()(),i(349,"td",25),e(350,"-"),t(),i(351,"td",26)(352,"em")(353,"strong"),e(354,"(opcional)"),t()(),i(355,"p"),e(356,"Define a altura do componente em pixels."),t(),i(357,"blockquote")(358,"p"),e(359,"Recomenda-se definir um valor acima de 368px para garantir uma boa visualiza\xE7\xE3o do componente."),t()(),i(360,"blockquote")(361,"p"),e(362,'A altura m\xEDnima do componente corresponde \xE0 soma da altura do campo de busca com a altura do bot\xE3o "Carregar mais resultados".'),t()()()(),i(363,"tr",19)(364,"td",20)(365,"div",21)(366,"span",22),e(367," (t-focus)"),a(368,"br"),t()()(),i(369,"td",23)(370,"code",24),e(371,"EventEmitter"),t()(),i(372,"td",25),e(373,"-"),t(),i(374,"td",26)(375,"em")(376,"strong"),e(377,"(opcional)"),t()(),i(378,"p"),e(379,"Evento emitido quando o campo de entrada (input) recebe foco."),t(),i(380,"p"),e(381,"Esse evento pode ser utilizado para realizar a\xE7\xF5es espec\xEDficas no momento em que o foco \xE9 aplicado ao input."),t()()(),i(382,"tr",19)(383,"td",20)(384,"div",21)(385,"span",22),e(386," (t-keydown)"),a(387,"br"),t()()(),i(388,"td",23)(389,"code",24),e(390,"EventEmitter"),t()(),i(391,"td",25),e(392,"-"),t(),i(393,"td",26)(394,"em")(395,"strong"),e(396,"(opcional)"),t()(),i(397,"p"),e(398,`Evento disparado quando uma tecla \xE9 pressionada enquanto o foco est\xE1 no campo.
Retorna um objeto `),i(399,"code"),e(400,"KeyboardEvent"),t(),e(401," com informa\xE7\xF5es sobre a tecla."),t()()(),i(402,"tr",19)(403,"td",20)(404,"div",27)(405,"span",28),e(406,"t-keys-label"),a(407,"br"),t()()(),i(408,"td",23)(409,"code",42),e(410,"Array<ThfLookupDataKeysLabel>"),t()(),i(411,"td",25),e(412,"-"),t(),i(413,"td",26)(414,"em")(415,"strong"),e(416,"(opcional)"),t()(),i(417,"p"),e(418,"Permite definir at\xE9 3 propriedades do item selecionado que ficar\xE3o vis\xEDveis no "),i(419,"code"),e(420,"accordion"),t(),e(421,"."),t(),i(422,"pre")(423,"code",30),e(424,`<thf-lookup
 ...
 [t-keys-label]="keysLabel"
></thf-lookup>`),t()(),i(425,"pre")(426,"code",31),e(427,`keysLabel: Array<ThfLookupDataKeysLabel> = [
 { label: 'Nome', value: 'name' },
 { label: 'Email', value: 'email' }
];`),t()(),i(428,"pre")(429,"code"),e(430,`// sa\xEDda no campo:
Robert Bruce Banner-hulksmash@marvel.com`),t()()()(),i(431,"tr",19)(432,"td",20)(433,"div",27)(434,"span",28),e(435,"t-literals"),a(436,"br"),t()()(),i(437,"td",23)(438,"code",43),e(439,"ThfLookupDataLiterals"),t()(),i(440,"td",25),e(441,"-"),t(),i(442,"td",26)(443,"em")(444,"strong"),e(445,"(opcional)"),t()(),i(446,"p"),e(447,"Permite definir literais personalizados para o componente, conforme a interface "),i(448,"strong"),e(449,"ThfLookupDataLiterals"),t(),e(450,"."),t(),i(451,"pre")(452,"code",30),e(453,`// Exemplo de uso:
<thf-lookup
 ...
 [t-literals]="customLiterals"
></thf-lookup>`),t()(),i(454,"pre")(455,"code",31),e(456,"customLiterals: ThfLookupDataLiterals = { noData: 'Nenhum dado encontrado' };"),t()()()(),i(457,"tr",19)(458,"td",20)(459,"div",27)(460,"span",28),e(461,"t-multiple"),a(462,"br"),t()()(),i(463,"td",23)(464,"code",33),e(465,"boolean"),t()(),i(466,"td",25)(467,"p")(468,"code"),e(469,"false"),t()()(),i(470,"td",26)(471,"em")(472,"strong"),e(473,"(opcional)"),t()(),i(474,"p"),e(475,"Permite a sele\xE7\xE3o de m\xFAltiplos itens."),t(),i(476,"blockquote")(477,"p"),e(478,"Quando habilitado, o valor do campo passar\xE1 a ser uma lista de valores, por exemplo: "),i(479,"code"),e(480,"[ 12345, 67890 ]"),t()()()()(),i(481,"tr",19)(482,"td",20)(483,"div",21)(484,"span",22),e(485," (t-error)"),a(486,"br"),t()()(),i(487,"td",23)(488,"code",24),e(489,"EventEmitter"),t()(),i(490,"td",25),e(491,"-"),t(),i(492,"td",26)(493,"em")(494,"strong"),e(495,"(opcional)"),t()(),i(496,"p"),e(497,`Evento disparado quando ocorre algum erro na requisi\xE7\xE3o de busca.
Ser\xE1 passado por par\xE2metro o objeto de erro retornado.`),t()()(),i(498,"tr",19)(499,"td",20)(500,"div",21)(501,"span",22),e(502," (t-selected)"),a(503,"br"),t()()(),i(504,"td",23)(505,"code",24),e(506,"EventEmitter"),t()(),i(507,"td",25),e(508,"-"),t(),i(509,"td",26)(510,"em")(511,"strong"),e(512,"(opcional)"),t()(),i(513,"p"),e(514,`Evento disparado ao selecionar um item.
Para sele\xE7\xE3o m\xFAltipla, retorna a lista de itens selecionados contendo os valores da coluna definida em `),i(515,"strong"),e(516,"t-field-value"),t(),e(517,`.
Para sele\xE7\xE3o \xFAnica retorna o objeto do item.`),t()()(),i(518,"tr",19)(519,"td",20)(520,"div",27)(521,"span",28),e(522," t-size"),a(523,"br"),t()()(),i(524,"td",23)(525,"code",34),e(526,"string"),t()(),i(527,"td",25)(528,"p")(529,"code"),e(530,"medium"),t()()(),i(531,"td",26)(532,"em")(533,"strong"),e(534,"(opcional)"),t()(),i(535,"p"),e(536,"Define o tamanho do componente:"),t(),i(537,"ul")(538,"li")(539,"code"),e(540,"small"),t()(),i(541,"li")(542,"code"),e(543,"medium"),t()()(),i(544,"blockquote")(545,"p"),e(546,"Caso a acessibilidade AA n\xE3o esteja configurada, o tamanho "),i(547,"code"),e(548,"medium"),t(),e(549,` ser\xE1 mantido.
Para mais detalhes, consulte a documenta\xE7\xE3o do `),i(550,"a",44),e(551,"po-theme"),t(),e(552,"."),t()()()()()()()(),T(553,2),t(),i(554,"po-tab",45),T(555,3),i(556,"po-container",5)(557,"po-accordion",6)(558,"po-accordion-item",46)(559,"h4",9)(560,"code"),e(561,"ThfLookupDataColumn"),t()(),i(562,"div",10)(563,"p"),e(564,"Interface para configura\xE7\xE3o das colunas ("),i(565,"strong"),e(566,"t-columns"),t(),e(567,"). "),t()(),i(568,"h4",15),e(569,"Propriedades"),t(),i(570,"table",16)(571,"tr",17)(572,"th",18),e(573,"Nome"),t(),i(574,"th",18),e(575,"Tipo"),t(),i(576,"th",18),e(577,"Descri\xE7\xE3o"),t()(),i(578,"tr",19)(579,"td",20)(580,"div",27)(581,"span",28),e(582," boolean"),a(583,"br"),t()()(),i(584,"td",23)(585,"code",47),e(586,"PoTableBoolean"),t()(),i(587,"td",26)(588,"em")(589,"strong"),e(590,"(opcional)"),t()(),i(591,"p"),e(592,"Define um objeto do tipo "),i(593,"code"),e(594,"PoTableBoolean"),t(),e(595," para as colunas do tipo "),i(596,"em"),e(597,"boolean"),t(),e(598,". Por exemplo:"),t(),i(599,"pre")(600,"code"),e(601,`{ property: 'approbation', type: 'boolean', boolean: {
  trueLabel: 'Accepted', falseLabel: 'Rejected'
}}`),t()(),i(602,"blockquote")(603,"p"),e(604,"Caso n\xE3o seja definido um objeto para colunas do tipo "),i(605,"em"),e(606,"boolean"),t(),e(607,`,
esta exibir\xE1 por padr\xE3o `),i(608,"code"),e(609,"Sim"),t(),e(610," e "),i(611,"code"),e(612,"N\xE3o"),t(),e(613," de acordo com os valores "),i(614,"em"),e(615,"booleanos"),t(),e(616,"."),t()()()(),i(617,"tr",19)(618,"td",20)(619,"div",27)(620,"span",28),e(621," booleanFalse"),a(622,"br"),t()()(),i(623,"td",23)(624,"code",34),e(625,"string"),t()(),i(626,"td",26)(627,"em")(628,"strong"),e(629,"(opcional)"),t()(),i(630,"p"),e(631,"Texto exibido quando o valor da coluna for "),i(632,"em"),e(633,"false"),t(),e(634,"."),t()()(),i(635,"tr",19)(636,"td",20)(637,"div",27)(638,"span",28),e(639," booleanTrue"),a(640,"br"),t()()(),i(641,"td",23)(642,"code",34),e(643,"string"),t()(),i(644,"td",26)(645,"em")(646,"strong"),e(647,"(opcional)"),t()(),i(648,"p"),e(649,"Texto exibido quando o valor da coluna for "),i(650,"em"),e(651,"true"),t(),e(652,"."),t()()(),i(653,"tr",19)(654,"td",20)(655,"div",27)(656,"span",28),e(657," disabled"),a(658,"br"),t()()(),i(659,"td",23)(660,"code",48),e(661,"Function"),t()(),i(662,"td",26)(663,"em")(664,"strong"),e(665,"(opcional)"),t()(),i(666,"p"),e(667,"Fun\xE7\xE3o que deve retornar um booleano para habilitar ou desabilitar o "),i(668,"em"),e(669,"link"),t(),e(670," e sua a\xE7\xE3o."),t(),i(671,"blockquote")(672,"p"),e(673,"Propriedade dispon\xEDvel nas colunas do tipo "),i(674,"code"),e(675,"link"),t(),e(676,"."),t()()()(),i(677,"tr",19)(678,"td",20)(679,"div",27)(680,"span",28),e(681," format"),a(682,"br"),t()()(),i(683,"td",23)(684,"code",34),e(685,"string"),t()(),i(686,"td",26)(687,"em")(688,"strong"),e(689,"(opcional)"),t()(),i(690,"p"),e(691,"Formato de exibi\xE7\xE3o do valor da coluna:"),t(),i(692,"ul")(693,"li"),e(694,"Formato para moeda (currency). Exemplos: 'BRL', 'USD'."),t(),i(695,"li"),e(696,`Formato para data (date): aceita apenas os caracteres de dia(dd), m\xEAs(MM) e ano (yyyy ou yy),
valor padr\xE3o \xE9 'dd/MM/yyyy'. Exemplos: 'dd/MM/yyyy', 'dd-MM-yy', 'mm/dd/yyyy'.`),t()()()(),i(697,"tr",19)(698,"td",20)(699,"div",27)(700,"span",28),e(701," label"),a(702,"br"),t()()(),i(703,"td",23)(704,"code",34),e(705,"string"),t()(),i(706,"td",26)(707,"em")(708,"strong"),e(709,"(opcional)"),t()(),i(710,"p"),e(711,"Texto para t\xEDtulo da coluna."),t(),i(712,"p"),e(713,"Caso n\xE3o seja informado, ser\xE1 utilizado como "),i(714,"em"),e(715,"label"),t(),e(716," o valor da propriedade "),i(717,"em"),e(718,"property"),t(),e(719," com a primeira letra em mai\xFAsculo."),t()()(),i(720,"tr",19)(721,"td",20)(722,"div",27)(723,"span",28),e(724," labels"),a(725,"br"),t()()(),i(726,"td",23)(727,"code",49),e(728,"Array<PoTableColumnLabel>"),t()(),i(729,"td",26)(730,"em")(731,"strong"),e(732,"(opcional)"),t()(),i(733,"p"),e(734,`Define um array de objetos para as colunas de label, onde 'labels' \xE9 uma lista de objetos
do tipo `),i(735,"code"),e(736,"PoTableColumnLabel"),t(),e(737," na qual devem ser definidas os labels. Por exemplo:"),t(),i(738,"pre")(739,"code"),e(740,`{ property: 'flightStatus', label: 'Status', type: 'label', width:'100px', labels: [
 { value: 'confirmed', color: 'color-11', label: 'Confirmado', tooltip: 'Flight Status' },
 { value: 'delayed', color: 'color-08', label: 'Atrasado', tooltip: 'Flight Status' }
}`),t()()()(),i(741,"tr",19)(742,"td",20)(743,"div",27)(744,"span",28),e(745," locale"),a(746,"br"),t()()(),i(747,"td",23)(748,"code",34),e(749,"string"),t()(),i(750,"td",26)(751,"em")(752,"strong"),e(753,"(opcional)"),t()(),i(754,"p"),e(755,`Define a localidade a ser utilizada no modo de exibi\xE7\xE3o.
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
export class AppModule {}`),t()(),i(779,"blockquote")(780,"p"),e(781,"No modo de vis\xE3o, \xE9 compat\xEDvel com colunas dos tipos "),i(782,"code"),e(783,"number"),t(),e(784," e "),i(785,"code"),e(786,"currency"),t(),e(787,"."),t()()()(),i(788,"tr",19)(789,"td",20)(790,"div",27)(791,"span",28),e(792," property"),a(793,"br"),t()()(),i(794,"td",23)(795,"code",34),e(796,"string"),t()(),i(797,"td",26)(798,"em")(799,"strong"),e(800,"(opcional)"),t()(),i(801,"p"),e(802,"Nome identificador da coluna."),t()()(),i(803,"tr",19)(804,"td",20)(805,"div",27)(806,"span",28),e(807," type"),a(808,"br"),t()()(),i(809,"td",23)(810,"code",34),e(811,"string"),t()(),i(812,"td",26)(813,"em")(814,"strong"),e(815,"(opcional)"),t()(),i(816,"p"),e(817,"Tipo da coluna:"),t(),i(818,"ul")(819,"li"),e(820,"string (padr\xE3o): textos"),t(),i(821,"li"),e(822,"number: valores num\xE9ricos"),t(),i(823,"li"),e(824,"date: data"),t(),i(825,"li"),e(826,"currency: valores monet\xE1rios"),t(),i(827,"li"),e(828,"dateTime: data e hora"),t()()()(),i(829,"tr",19)(830,"td",20)(831,"div",27)(832,"span",28),e(833," visible"),a(834,"br"),t()()(),i(835,"td",23)(836,"code",33),e(837,"boolean"),t()(),i(838,"td",26)(839,"em")(840,"strong"),e(841,"(opcional)"),t()(),i(842,"p"),e(843,`Controla a exibi\xE7\xE3o da coluna. Caso seja definido um valor falso, a coluna n\xE3o ser\xE1 exibida mas mas ser\xE1 poss\xEDvel torn\xE1-la
vis\xEDvel atrav\xE9s do `),i(844,"strong"),e(845,"gerenciador de colunas"),t(),e(846,"."),t(),i(847,"blockquote")(848,"p"),e(849,"A disponibilidade de visualiza\xE7\xE3o pode limitar-se de acordo com a defini\xE7\xE3o de "),i(850,"code"),e(851,"p-max-columns"),t(),e(852,"."),t()()()(),i(853,"tr",19)(854,"td",20)(855,"div",27)(856,"span",28),e(857," width"),a(858,"br"),t()()(),i(859,"td",23)(860,"code",34),e(861,"string"),t()(),i(862,"td",26)(863,"em")(864,"strong"),e(865,"(opcional)"),t()(),i(866,"p"),e(867,"A largura da coluna pode ser informada em pixels ou porcentagem. Exemplo: '100px' ou '20%'"),t()()()()(),i(868,"po-accordion-item",51)(869,"h4",9)(870,"code"),e(871,"ThfLookupDataFilterSearchSelect"),t()(),i(872,"div",10)(873,"p"),e(874,"Interface que define as colunas para busca ("),i(875,"strong"),e(876,"t-filter-search-select"),t(),e(877,") "),t()(),i(878,"h4",15),e(879,"Propriedades"),t(),i(880,"table",16)(881,"tr",17)(882,"th",18),e(883,"Nome"),t(),i(884,"th",18),e(885,"Tipo"),t(),i(886,"th",18),e(887,"Descri\xE7\xE3o"),t()(),i(888,"tr",19)(889,"td",20)(890,"div",27)(891,"span",28),e(892," label"),a(893,"br"),t()()(),i(894,"td",23)(895,"code",34),e(896,"string"),t()(),i(897,"td",26)(898,"p"),e(899,"R\xF3tulo da coluna"),t()()(),i(900,"tr",19)(901,"td",20)(902,"div",27)(903,"span",28),e(904," value"),a(905,"br"),t()()(),i(906,"td",23)(907,"code",34),e(908,"string"),t()(),i(909,"td",26)(910,"p"),e(911,"Coluna"),t()()()()(),i(912,"po-accordion-item",52)(913,"h4",9)(914,"code"),e(915,"ThfLookupDataFilter"),t()(),i(916,"div",10)(917,"p"),e(918,"Interface para definir o tipo de busca via servi\xE7o. "),t()(),i(919,"table",53)(920,"tr",19)(921,"th",54)(922,"div",27)(923,"h4")(924,"span",28),e(925," fetchItems "),t()()()()(),i(926,"tr",26)(927,"td",26)(928,"p"),e(929,`M\xE9todo que ser\xE1 disparado ao digitar no campo do componente, deve-se retornar
um `),i(930,"em"),e(931,"Observable"),t(),e(932," com a resposta da API no formato { items: [] }."),t()()()(),i(933,"h5")(934,"b"),e(935,"Par\xE2metros"),t()(),i(936,"table",16)(937,"tr",17)(938,"th",18),e(939,"Nome"),t(),i(940,"th",18),e(941,"Tipo"),t(),i(942,"th",18),e(943,"Descri\xE7\xE3o"),t()(),i(944,"tr",19)(945,"td",20),e(946," query"),t(),i(947,"td",23)(948,"code",55),e(949," string "),t()(),i(950,"td",26)(951,"p"),e(952,"Par\xE2metro com o valor que est\xE1 sendo digitado no campo do lookup"),t()()(),i(953,"tr",19)(954,"td",20),e(955," filterParams"),t(),i(956,"td",23)(957,"code",55),e(958," any "),t()(),i(959,"td",26)(960,"p"),e(961,"Valor informado atrav\xE9s da propriedade "),i(962,"strong"),e(963,"t-filter-params"),t(),e(964,"."),t()()()(),a(965,"br"),i(966,"table",53)(967,"tr",19)(968,"th",54)(969,"div",27)(970,"h4")(971,"span",28),e(972," getFilteredItems "),t()()()()(),i(973,"tr",26)(974,"td",26)(975,"p"),e(976,`M\xE9todo que ser\xE1 disparado ao filtrar no grid ou carregar mais resultados no componente, deve-se retornar
um `),i(977,"em"),e(978,"Observable"),t(),e(979," com a resposta da API no formato da interface "),i(980,"strong"),e(981,"ThfLookupResponseApi"),t(),e(982,"."),t()()()(),i(983,"h5")(984,"b"),e(985,"Par\xE2metros"),t()(),i(986,"table",16)(987,"tr",17)(988,"th",18),e(989,"Nome"),t(),i(990,"th",18),e(991,"Tipo"),t(),i(992,"th",18),e(993,"Descri\xE7\xE3o"),t()(),i(994,"tr",19)(995,"td",20),e(996," params"),t(),i(997,"td",23)(998,"code",55),e(999," ThfLookupFilteredItemsParams "),t()(),i(1e3,"td",26)(1001,"p"),e(1002,"Objeto enviado por par\xE2metro que implementa a interface "),i(1003,"strong"),e(1004,"ThfLookupFilteredItemsParams"),t(),e(1005,"."),t()()()(),a(1006,"br"),i(1007,"table",53)(1008,"tr",19)(1009,"th",54)(1010,"div",27)(1011,"h4")(1012,"span",28),e(1013," getObjectByValue "),t()()()()(),i(1014,"tr",26)(1015,"td",26)(1016,"p"),e(1017,"M\xE9todo respons\xE1vel por enviar um valor que ser\xE1 buscado no servi\xE7o."),t(),i(1018,"p"),e(1019,"Caso a funcionalidade de m\xFAltipla sele\xE7\xE3o esteja habilitada, o par\xE2metro "),i(1020,"code"),e(1021,"value"),t(),e(1022,` ser\xE1 enviado como uma lista de valores
e o `),i(1023,"em"),e(1024,"Observable"),t(),e(1025," deve retornar uma lista de objetos."),t()()()(),i(1026,"h5")(1027,"b"),e(1028,"Par\xE2metros"),t()(),i(1029,"table",16)(1030,"tr",17)(1031,"th",18),e(1032,"Nome"),t(),i(1033,"th",18),e(1034,"Tipo"),t(),i(1035,"th",18),e(1036,"Descri\xE7\xE3o"),t()(),i(1037,"tr",19)(1038,"td",20),e(1039," value"),t(),i(1040,"td",23)(1041,"code",34),e(1042," string "),t(),i(1043,"code",32),e(1044," Array<any> "),t()(),i(1045,"td",26)(1046,"p"),e(1047,"Valor \xFAnico a ser buscado na fonte de dados."),t()()(),i(1048,"tr",19)(1049,"td",20),e(1050," filterParams"),t(),i(1051,"td",23)(1052,"code",55),e(1053," any "),t()(),i(1054,"td",26)(1055,"p"),e(1056,"Valor informado atrav\xE9s da propriedade "),i(1057,"strong"),e(1058,"t-filter-params"),t(),e(1059,"."),t()()()(),a(1060,"br"),t(),i(1061,"po-accordion-item",56)(1062,"h4",9)(1063,"code"),e(1064,"ThfLookupDataFilteredItemsParams"),t()(),i(1065,"div",10)(1066,"p"),e(1067,"Interface do objeto enviado como par\xE2metro do m\xE9todo privado "),i(1068,"strong"),e(1069,"getFilteredItems"),t(),e(1070,". "),t()(),i(1071,"h4",15),e(1072,"Propriedades"),t(),i(1073,"table",16)(1074,"tr",17)(1075,"th",18),e(1076,"Nome"),t(),i(1077,"th",18),e(1078,"Tipo"),t(),i(1079,"th",18),e(1080,"Descri\xE7\xE3o"),t()(),i(1081,"tr",19)(1082,"td",20)(1083,"div",27)(1084,"span",28),e(1085," filter"),a(1086,"br"),t()()(),i(1087,"td",23)(1088,"code",57),e(1089,`{ [key: string]: any;
}`),t()(),i(1090,"td",26)(1091,"em")(1092,"strong"),e(1093,"(opcional)"),t()(),i(1094,"p"),e(1095,"Conte\xFAdo utilizado para filtrar a lista de itens."),t()()(),i(1096,"tr",19)(1097,"td",20)(1098,"div",27)(1099,"span",28),e(1100," filterParams"),a(1101,"br"),t()()(),i(1102,"td",23)(1103,"code",35),e(1104,"any"),t()(),i(1105,"td",26)(1106,"em")(1107,"strong"),e(1108,"(opcional)"),t()(),i(1109,"p"),e(1110,"Valor informado atrav\xE9s da propriedade "),i(1111,"code"),e(1112,"t-filter-params"),t(),e(1113,"."),t()()(),i(1114,"tr",19)(1115,"td",20)(1116,"div",27)(1117,"span",28),e(1118," order"),a(1119,"br"),t()()(),i(1120,"td",23)(1121,"code",34),e(1122,"string"),t()(),i(1123,"td",26)(1124,"em")(1125,"strong"),e(1126,"(opcional)"),t()(),i(1127,"p"),e(1128,"Coluna que est\xE1 sendo ordenada na grid."),t(),i(1129,"ul")(1130,"li"),e(1131,"Coluna decrescente ser\xE1 informada da seguinte forma: "),i(1132,"code"),e(1133,"-<colunaOrdenada>"),t(),e(1134,", por exemplo "),i(1135,"code"),e(1136,"-name"),t(),e(1137,"."),t(),i(1138,"li"),e(1139,"Coluna ascendente ser\xE1 informada da seguinte forma: "),i(1140,"code"),e(1141,"<colunaOrdenada>"),t(),e(1142,", por exemplo "),i(1143,"code"),e(1144,"name"),t(),e(1145,"."),t()()()(),i(1146,"tr",19)(1147,"td",20)(1148,"div",27)(1149,"span",28),e(1150," page"),a(1151,"br"),t()()(),i(1152,"td",23)(1153,"code",41),e(1154,"number"),t()(),i(1155,"td",26)(1156,"em")(1157,"strong"),e(1158,"(opcional)"),t()(),i(1159,"p"),e(1160,"Controla a pagina\xE7\xE3o dos dados e recebe valor automaticamente a cada clique no bot\xE3o 'Carregar mais resultados'."),t()()(),i(1161,"tr",19)(1162,"td",20)(1163,"div",27)(1164,"span",28),e(1165," pageSize"),a(1166,"br"),t()()(),i(1167,"td",23)(1168,"code",41),e(1169,"number"),t()(),i(1170,"td",26)(1171,"em")(1172,"strong"),e(1173,"(opcional)"),t()(),i(1174,"p"),e(1175,"Quantidade de itens retornados cada vez que o servi\xE7o \xE9 chamado, por padr\xE3o \xE9 10."),t()()()()(),i(1176,"po-accordion-item",58)(1177,"h4",9)(1178,"code"),e(1179,"ThfLookupDataGridProperties"),t()(),i(1180,"div",10)(1181,"p"),e(1182,"Propriedades para configura\xE7\xE3o da thf-grid dentro do modal thf-lookup. "),t()(),i(1183,"h4",15),e(1184,"Propriedades"),t(),i(1185,"table",16)(1186,"tr",17)(1187,"th",18),e(1188,"Nome"),t(),i(1189,"th",18),e(1190,"Tipo"),t(),i(1191,"th",18),e(1192,"Descri\xE7\xE3o"),t()(),i(1193,"tr",19)(1194,"td",20)(1195,"div",27)(1196,"span",28),e(1197," autoSize"),a(1198,"br"),t()()(),i(1199,"td",23)(1200,"code",33),e(1201,"boolean"),t()(),i(1202,"td",26)(1203,"em")(1204,"strong"),e(1205,"(opcional)"),t()(),i(1206,"p"),e(1207,`Ajusta automaticamente a largura das colunas vis\xEDveis no grid. O ajuste autom\xE1tico \xE9 realizado durante a
inicializa\xE7\xE3o. Requer que a propriedade `),i(1208,"strong"),e(1209,"resizable"),t(),e(1210," esteja habilitada."),t(),i(1211,"blockquote")(1212,"p"),e(1213,`Apesar de atribuir largura \xE0s colunas do grid, \xE9 importante ressaltar que o componente recalcula
as larguras das demais colunas de acordo com os espa\xE7os dispon\xEDveis no grid, podendo alterar as
dimens\xF5es passadas proporcionalmente.`),t()()()(),i(1214,"tr",19)(1215,"td",20)(1216,"div",27)(1217,"span",28),e(1218," autoSizeOnScroll"),a(1219,"br"),t()()(),i(1220,"td",23)(1221,"code",33),e(1222,"boolean"),t()(),i(1223,"td",26)(1224,"em")(1225,"strong"),e(1226,"(opcional)"),t()(),i(1227,"p"),e(1228,"Ativa o redimensionamento autom\xE1tico das colunas durante a rolagem virtual."),t(),i(1229,"p"),e(1230,`Quando habilitado, a grid recalcula automaticamente as larguras das colunas
conforme novos dados s\xE3o carregados durante a rolagem, garantindo que o
conte\xFAdo seja exibido corretamente sem truncamento indesejado.`),t(),i(1231,"p"),e(1232,`O redimensionamento ocorre a cada mudan\xE7a de p\xE1gina virtual, controlada pela
propriedade `),i(1233,"code"),e(1234,"t-page-size-virtual"),t(),e(1235," (valor padr\xE3o: 60 itens por p\xE1gina)."),t(),i(1236,"blockquote")(1237,"p")(1238,"strong"),e(1239,"Pr\xE9-requisitos"),t(),e(1240,": Requer que as propriedades "),i(1241,"code"),e(1242,"autoSize"),t(),e(1243,", "),i(1244,"code"),e(1245,"resizable"),t(),e(1246,`
e `),i(1247,"code"),e(1248,"virtualScroll"),t(),e(1249," estejam habilitadas."),t()(),i(1250,"blockquote")(1251,"p")(1252,"strong"),e(1253,"Incompatibilidade"),t(),e(1254,": N\xE3o funciona com "),i(1255,"code"),e(1256,"t-grid-row-actions"),t(),e(1257," habilitado;"),t()(),i(1258,"p")(1259,"strong"),e(1260,"Exemplo de uso:"),t()(),i(1261,"pre")(1262,"code",30),e(1263,`<thf-grid
  ...
  [t-auto-size]="true"
  [t-auto-size-on-scroll]="true"
  [t-resizable]="true"
  [t-virtual-scroll]="true"
/>`),t()()()(),i(1264,"tr",19)(1265,"td",20)(1266,"div",27)(1267,"span",28),e(1268," draggable"),a(1269,"br"),t()()(),i(1270,"td",23)(1271,"code",33),e(1272,"boolean"),t()(),i(1273,"td",26)(1274,"em")(1275,"strong"),e(1276,"(opcional)"),t()(),i(1277,"p"),e(1278,"Habilita o Drag and Drop nas colunas."),t()()(),i(1279,"tr",19)(1280,"td",20)(1281,"div",27)(1282,"span",28),e(1283," group"),a(1284,"br"),t()()(),i(1285,"td",23)(1286,"code",59),e(1287,"Array<string>"),t()(),i(1288,"td",26)(1289,"em")(1290,"strong"),e(1291,"(opcional)"),t()(),i(1292,"p"),e(1293,"Lista das colunas que devem iniciar agrupadas. Requer que a propriedade "),i(1294,"strong"),e(1295,"groupable"),t(),e(1296," esteja habilitada."),t()()(),i(1297,"tr",19)(1298,"td",20)(1299,"div",27)(1300,"span",28),e(1301," groupable"),a(1302,"br"),t()()(),i(1303,"td",23)(1304,"code",33),e(1305,"boolean "),t(),i(1306,"code",60),e(1307," GroupableSettings"),t()(),i(1308,"td",26)(1309,"em")(1310,"strong"),e(1311,"(opcional)"),t()(),i(1312,"p"),e(1313,"Habilita a ordena\xE7\xE3o por grupo atrav\xE9s da coluna."),t()()(),i(1314,"tr",19)(1315,"td",20)(1316,"div",27)(1317,"span",28),e(1318," hideSelectAll"),a(1319,"br"),t()()(),i(1320,"td",23)(1321,"code",33),e(1322,"boolean"),t()(),i(1323,"td",26)(1324,"em")(1325,"strong"),e(1326,"(opcional)"),t()(),i(1327,"p"),e(1328,"Permite ocultar o checkbox de selecionar todos os itens."),t()()(),i(1329,"tr",19)(1330,"td",20)(1331,"div",27)(1332,"span",28),e(1333," resizable"),a(1334,"br"),t()()(),i(1335,"td",23)(1336,"code",33),e(1337,"boolean"),t()(),i(1338,"td",26)(1339,"em")(1340,"strong"),e(1341,"(opcional)"),t()(),i(1342,"p"),e(1343,`Habilita o redimensionamento da largura de cada coluna.
Se as colunas forem redimensionadas de modo que a largura total seja menor que a largura do grid,
o espa\xE7o restante ficar\xE1 em branco.`),t()()(),i(1344,"tr",19)(1345,"td",20)(1346,"div",27)(1347,"span",28),e(1348," selectableEntireLine"),a(1349,"br"),t()()(),i(1350,"td",23)(1351,"code",33),e(1352,"boolean"),t()(),i(1353,"td",26)(1354,"em")(1355,"strong"),e(1356,"(opcional)"),t()(),i(1357,"p"),e(1358,"Permite selecionar o item ao clicar na linha."),t()()(),i(1359,"tr",19)(1360,"td",20)(1361,"div",27)(1362,"span",28),e(1363," showDraggableIcon"),a(1364,"br"),t()()(),i(1365,"td",23)(1366,"code",33),e(1367,"boolean"),t()(),i(1368,"td",26)(1369,"em")(1370,"strong"),e(1371,"(opcional)"),t()(),i(1372,"p"),e(1373,"Exibe o \xEDcone de draggable nas respectivas colunas."),t()()(),i(1374,"tr",19)(1375,"td",20)(1376,"div",27)(1377,"span",28),e(1378," showMoreDisabled"),a(1379,"br"),t()()(),i(1380,"td",23)(1381,"code",33),e(1382,"boolean"),t()(),i(1383,"td",26)(1384,"em")(1385,"strong"),e(1386,"(opcional)"),t()(),i(1387,"p"),e(1388,"Desabilita o bot\xE3o 'Carregar mais resultados'."),t()()(),i(1389,"tr",19)(1390,"td",20)(1391,"div",27)(1392,"span",28),e(1393," showMoreVisible"),a(1394,"br"),t()()(),i(1395,"td",23)(1396,"code",33),e(1397,"boolean"),t()(),i(1398,"td",26)(1399,"em")(1400,"strong"),e(1401,"(opcional)"),t()(),i(1402,"p"),e(1403,"Controla a exibi\xE7\xE3o do bot\xE3o 'Carregar mais resultados'. Requer que a propriedade "),i(1404,"strong"),e(1405,"pageable"),t(),e(1406," esteja habilitada."),t(),i(1407,"blockquote")(1408,"p"),e(1409,"Caso seja utilizado em conjunto com "),i(1410,"strong"),e(1411,"showMoreDisabled"),t(),e(1412,", a propriedade "),i(1413,"strong"),e(1414,"showMoreVisible"),t(),e(1415," ter\xE1 prioridade."),t()()()(),i(1416,"tr",19)(1417,"td",20)(1418,"div",27)(1419,"span",28),e(1420," sort"),a(1421,"br"),t()()(),i(1422,"td",23)(1423,"code",61),e(1424,"Array<{ field: string; dir: 'asc' "),t(),i(1425,"code",62),e(1426,` 'desc';
}>`),t()(),i(1427,"td",26)(1428,"em")(1429,"strong"),e(1430,"(opcional)"),t()(),i(1431,"p"),e(1432,"Define a ordena\xE7\xE3o (sort) crescente (asc) ou decrescente (desc) por coluna."),t(),i(1433,"pre")(1434,"code",31),e(1435,"sort: Array<ThfGridColumnSort> = [{ field: 'name', dir: 'desc'}];"),t()()()(),i(1436,"tr",19)(1437,"td",20)(1438,"div",27)(1439,"span",28),e(1440," sortable"),a(1441,"br"),t()()(),i(1442,"td",23)(1443,"code",33),e(1444,"boolean"),t()(),i(1445,"td",26)(1446,"em")(1447,"strong"),e(1448,"(opcional)"),t()(),i(1449,"p"),e(1450,"Habilita a ordena\xE7\xE3o (sort) crescente ou decrescente em todas as colunas do grid."),t()()(),i(1451,"tr",19)(1452,"td",20)(1453,"div",27)(1454,"span",28),e(1455," spacing"),a(1456,"br"),t()()(),i(1457,"td",23)(1458,"code",63),e(1459,"'extraSmall' "),t(),i(1460,"code",64),e(1461," 'small' "),t(),i(1462,"code",65),e(1463," 'medium' "),t(),i(1464,"code",66),e(1465," 'large'"),t()(),i(1466,"td",26)(1467,"em")(1468,"strong"),e(1469,"(opcional)"),t()(),i(1470,"p"),e(1471,`Define o espa\xE7amento interno das c\xE9lulas, impactando diretamente na altura das linhas do grid. Os valores
permitidos s\xE3o definidos pelo enum `),i(1472,"strong"),e(1473,"ThfColumnSpacing"),t(),e(1474,"."),t()()(),i(1475,"tr",19)(1476,"td",20)(1477,"div",27)(1478,"span",28),e(1479," striped"),a(1480,"br"),t()()(),i(1481,"td",23)(1482,"code",33),e(1483,"boolean"),t()(),i(1484,"td",26)(1485,"em")(1486,"strong"),e(1487,"(opcional)"),t()(),i(1488,"p"),e(1489,"Define o estilo listrado no grid (striped)."),t()()(),i(1490,"tr",19)(1491,"td",20)(1492,"div",27)(1493,"span",28),e(1494," virtualScroll"),a(1495,"br"),t()()(),i(1496,"td",23)(1497,"code",33),e(1498,"boolean"),t()(),i(1499,"td",26)(1500,"em")(1501,"strong"),e(1502,"(opcional)"),t()(),i(1503,"p"),e(1504,"Define o uso do virtual scroll no grid para melhorar a performance com grandes volumes de dados."),t()()()()(),i(1505,"po-accordion-item",67)(1506,"h4",9)(1507,"code"),e(1508,"ThfLookupDataKeysLabel"),t()(),i(1509,"div",10)(1510,"p"),e(1511,"Interface para definir as propriedades vis\xEDveis do item selecionado ("),i(1512,"strong"),e(1513,"t-keys-label"),t(),e(1514,"). "),t()(),i(1515,"h4",15),e(1516,"Propriedades"),t(),i(1517,"table",16)(1518,"tr",17)(1519,"th",18),e(1520,"Nome"),t(),i(1521,"th",18),e(1522,"Tipo"),t(),i(1523,"th",18),e(1524,"Descri\xE7\xE3o"),t()(),i(1525,"tr",19)(1526,"td",20)(1527,"div",27)(1528,"span",28),e(1529," label"),a(1530,"br"),t()()(),i(1531,"td",23)(1532,"code",34),e(1533,"string"),t()(),i(1534,"td",26)(1535,"p"),e(1536,"Texto exibido"),t()()(),i(1537,"tr",19)(1538,"td",20)(1539,"div",27)(1540,"span",28),e(1541," value"),a(1542,"br"),t()()(),i(1543,"td",23)(1544,"code",34),e(1545,"string"),t()(),i(1546,"td",26)(1547,"p"),e(1548,"Coluna"),t()()()()(),i(1549,"po-accordion-item",68)(1550,"h4",9)(1551,"code"),e(1552,"ThfLookupDataLiterals"),t()(),i(1553,"div",10)(1554,"p"),e(1555,"Interface para customizar literais ("),i(1556,"strong"),e(1557,"t-literals"),t(),e(1558,"). Se n\xE3o definidas, o componente usar\xE1 textos padr\xE3o."),t()(),i(1559,"h4",15),e(1560,"Propriedades"),t(),i(1561,"table",16)(1562,"tr",17)(1563,"th",18),e(1564,"Nome"),t(),i(1565,"th",18),e(1566,"Tipo"),t(),i(1567,"th",18),e(1568,"Descri\xE7\xE3o"),t()(),i(1569,"tr",19)(1570,"td",20)(1571,"div",27)(1572,"span",28),e(1573," loadMoreData"),a(1574,"br"),t()()(),i(1575,"td",23)(1576,"code",34),e(1577,"string"),t()(),i(1578,"td",26)(1579,"em")(1580,"strong"),e(1581,"(opcional)"),t()(),i(1582,"p"),e(1583,"Label do "),i(1584,"code"),e(1585,"button"),t(),e(1586," que deve carregar mais resultados no grid, ou seja, exibir mais itens."),t()()(),i(1587,"tr",19)(1588,"td",20)(1589,"div",27)(1590,"span",28),e(1591," loadingData"),a(1592,"br"),t()()(),i(1593,"td",23)(1594,"code",34),e(1595,"string"),t()(),i(1596,"td",26)(1597,"em")(1598,"strong"),e(1599,"(opcional)"),t()(),i(1600,"p"),e(1601,"Texto exibido enquanto uma requisi\xE7\xE3o est\xE1 sendo executada para carregar dados na grid."),t()()(),i(1602,"tr",19)(1603,"td",20)(1604,"div",27)(1605,"span",28),e(1606," multipleItems"),a(1607,"br"),t()()(),i(1608,"td",23)(1609,"code",34),e(1610,"string"),t()(),i(1611,"td",26)(1612,"em")(1613,"strong"),e(1614,"(opcional)"),t()(),i(1615,"p"),e(1616,"Frase exibida no accordion quando possui mais de um item selecionado."),t()()(),i(1617,"tr",19)(1618,"td",20)(1619,"div",27)(1620,"span",28),e(1621," noColumns"),a(1622,"br"),t()()(),i(1623,"td",23)(1624,"code",34),e(1625,"string"),t()(),i(1626,"td",26)(1627,"em")(1628,"strong"),e(1629,"(opcional)"),t()(),i(1630,"p"),e(1631,"Texto exibido quando n\xE3o existem colunas definidas no grid."),t()()(),i(1632,"tr",19)(1633,"td",20)(1634,"div",27)(1635,"span",28),e(1636," noData"),a(1637,"br"),t()()(),i(1638,"td",23)(1639,"code",34),e(1640,"string"),t()(),i(1641,"td",26)(1642,"em")(1643,"strong"),e(1644,"(opcional)"),t()(),i(1645,"p"),e(1646,"Texto exibido quando n\xE3o existem itens para serem exibidos no grid."),t()()(),i(1647,"tr",19)(1648,"td",20)(1649,"div",27)(1650,"span",28),e(1651," oneItem"),a(1652,"br"),t()()(),i(1653,"td",23)(1654,"code",34),e(1655,"string"),t()(),i(1656,"td",26)(1657,"em")(1658,"strong"),e(1659,"(opcional)"),t()(),i(1660,"p"),e(1661,"Frase exibida no accordion quando possui apenas um item selecionado."),t()()(),i(1662,"tr",19)(1663,"td",20)(1664,"div",27)(1665,"span",28),e(1666," placeholder"),a(1667,"br"),t()()(),i(1668,"td",23)(1669,"code",34),e(1670,"string"),t()(),i(1671,"td",26)(1672,"em")(1673,"strong"),e(1674,"(opcional)"),t()(),i(1675,"p"),e(1676,"Texto exibido no placeholder do input."),t()()()()(),i(1677,"po-accordion-item",69)(1678,"h4",9)(1679,"code"),e(1680,"ThfLookupDataResponseApi"),t()(),i(1681,"div",10)(1682,"p"),e(1683,"Interface que representa a estrutura de uma resposta de sucesso HTTP."),t(),i(1684,"blockquote")(1685,"p"),e(1686,"Utilizada apenas quando a resposta incluir uma cole\xE7\xE3o de itens. "),t()()(),i(1687,"h4",15),e(1688,"Propriedades"),t(),i(1689,"table",16)(1690,"tr",17)(1691,"th",18),e(1692,"Nome"),t(),i(1693,"th",18),e(1694,"Tipo"),t(),i(1695,"th",18),e(1696,"Descri\xE7\xE3o"),t()(),i(1697,"tr",19)(1698,"td",20)(1699,"div",27)(1700,"span",28),e(1701," hasNext"),a(1702,"br"),t()()(),i(1703,"td",23)(1704,"code",33),e(1705,"boolean"),t()(),i(1706,"td",26)(1707,"p"),e(1708,"Indica se existe uma pr\xF3xima p\xE1gina com mais registros para aquela cole\xE7\xE3o de itens."),t()()(),i(1709,"tr",19)(1710,"td",20)(1711,"div",27)(1712,"span",28),e(1713," items"),a(1714,"br"),t()()(),i(1715,"td",23)(1716,"code",32),e(1717,"Array<any>"),t()(),i(1718,"td",26)(1719,"p"),e(1720,"Lista de itens retornados."),t()()()()()()(),T(1721,4),t(),i(1722,"po-tab",70)(1723,"po-container",5),T(1724,5),i(1725,"h3",71),e(1726,"Tokens customiz\xE1veis"),t(),i(1727,"p"),e(1728,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(1729,"blockquote")(1730,"p"),e(1731,"Para maiores informa\xE7\xF5es, acesse o guia "),i(1732,"a",72),e(1733,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(1734,"."),t()(),i(1735,"p"),e(1736,"O componente "),i(1737,"strong"),e(1738,"THF-Lookup-Data"),t(),e(1739," \xE9 composto pelos componentes "),i(1740,"strong"),e(1741,"PO-Search"),t(),e(1742," e "),i(1743,"strong"),e(1744,"THF-Grid"),t(),e(1745,"."),t(),i(1746,"p"),e(1747,"Verifique os tokens dispon\xEDveis para customiza\xE7\xE3o em:"),t(),i(1748,"p")(1749,"strong"),e(1750,"- PO-Search:"),t(),e(1751," \xA0"),i(1752,"a",73),e(1753,"https://po-ui.io/documentation/po-search"),t()(),i(1754,"p")(1755,"strong"),e(1756,"- THF-Grid:"),t(),e(1757," \xA0"),i(1758,"a",74),e(1759,"https://thf.totvs.app/v19/documentation/thf-grid"),t()()(),T(1760,6),t(),i(1761,"po-tab",75),T(1762,7),t()()())},dependencies:[z,K,v,ee,G],encapsulation:2})}}return d})();var qi=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","labs",""]]],Fi=["[overview]","[especificacao-before]","[especificacao-after]","[labs]"],_t=(()=>{class d{constructor(o){this.el=o}ngAfterViewInit(){this.accordions.forEach(o=>{setTimeout(()=>{o.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(o){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${o}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let g=E.querySelector(".po-tab-button-label");g&&g?.textContent?.trim().toLowerCase()===o&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(Z))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter-pane"]],viewQuery:function(r,n){if(r&1&&(D(G,5),D(z,5)),r&2){let l;A(l=_())&&(n.tabs=l.first),A(l=_())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Fi,decls:140,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],["pan","",1,"docs-api-property-type","string"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(X(qi),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterPaneComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter-pane"),t(),e(21," representa uma das se\xE7\xF5es que comp\xF5em o "),i(22,"code"),e(23,"thf-splitter"),t(),e(24,"."),t(),i(25,"p"),e(26,"Devem ser utilizados "),i(27,"strong"),e(28,"exatamente dois panes"),t(),e(29," por splitter; panes adicionais ser\xE3o ignorados."),t(),i(30,"p"),e(31,"Cada "),i(32,"code"),e(33,"pane"),t(),e(34," se ajusta dinamicamente conforme o redimensionamento."),t(),i(35,"pre")(36,"code",11),e(37,`<thf-splitter>
 <thf-splitter-pane [(t-size)]="50%">
   Conte\xFAdo do painel
 </thf-splitter-pane>
 ...
</thf-splitter>`),t()()(),i(38,"div",12)(39,"h4",13),e(40,"Seletor"),t(),i(41,"pre",14),e(42,`<thf-splitter-pane
  t-scrollable="boolean, any"
  t-size="string"
  (t-size-change)="EventEmitter" >
</thf-splitter-pane>
`),t()()(),i(43,"po-accordion-item",15)(44,"h4",16),e(45,"Propriedades"),t(),i(46,"table",17)(47,"tr",18)(48,"th",19),e(49,"Nome"),t(),i(50,"th",19),e(51,"Tipo"),t(),i(52,"th",19),e(53,"Padr\xE3o"),t(),i(54,"th",19),e(55,"Descri\xE7\xE3o"),t()(),i(56,"tr",20)(57,"td",21)(58,"div",22)(59,"span",23),e(60," t-scrollable"),a(61,"br"),t()()(),i(62,"td",24)(63,"code",25),e(64,"boolean, any"),t()(),i(65,"td",26)(66,"p"),e(67,"false"),t()(),i(68,"td",27)(69,"p"),e(70,`Habilita a rolagem horizontal/vertical do pane quando o conte\xFAdo exceder o valor de tamanho definido. A rolagem \xE9 aplicada
somente se o tamanho m\xEDnimo for atingido durante o redimensionamento.`),t()()(),i(71,"tr",20)(72,"td",21)(73,"div",22)(74,"span",23),e(75," t-size"),a(76,"br"),t()()(),i(77,"td",24)(78,"code",28),e(79,"string"),t()(),i(80,"td",26),e(81,"-"),t(),i(82,"td",27)(83,"p"),e(84,"Define o tamanho inicial do pane (% ou px), respeitando os limites entre "),i(85,"strong"),e(86,"30% e 70%"),t(),e(87,` do tamanho total
do splitter.`),t(),i(88,"p"),e(89,"Suporta two-way binding com "),i(90,"code"),e(91,"t-size-change"),t(),e(92,"."),t(),i(93,"blockquote")(94,"p"),e(95,"Apenas um pane pode definir "),i(96,"code"),e(97,"t-size"),t(),e(98,`; caso contr\xE1rio, ser\xE1 exibido um erro no console.
Quando o valor definido em `),i(99,"code"),e(100,"px"),t(),e(101,` estiver fora dos limites percentuais, ao realizar o redimensionamento os limites de 30% a 70% ser\xE3o aplicados automaticamente.
O uso de `),i(102,"code"),e(103,"px"),t(),e(104," \xE9 \xFAtil para cen\xE1rios onde o "),i(105,"code"),e(106,"thf-splitter"),t(),e(107," est\xE1 com "),i(108,"code"),e(109,"t-disabled"),t(),e(110," habilitado, pois o tamanho fixo n\xE3o ser\xE1 alterado."),t()(),i(111,"pre")(112,"code",11),e(113,`<!-- One-way -->
<thf-splitter-pane [t-size]="'50%'">

<!-- Two-way -->
<thf-splitter-pane [(t-size)]="variavel">`),t()()()(),i(114,"tr",20)(115,"td",21)(116,"div",29)(117,"span",30),e(118," (t-size-change)"),a(119,"br"),t()()(),i(120,"td",24)(121,"code",31),e(122,"EventEmitter"),t()(),i(123,"td",26),e(124,"-"),t(),i(125,"td",27)(126,"p"),e(127,"Evento emitido quando o tamanho do pane que possui "),i(128,"code"),e(129,"t-size"),t(),e(130," \xE9 modificada. Caso nenhum pane possua "),i(131,"code"),e(132,"t-size"),t(),e(133,`, o
evento n\xE3o ser\xE1 disparado.`),t(),i(134,"pre")(135,"code",11),e(136,'<thf-splitter-pane (t-size-change)="onSizeChange($event)">'),t()()()()()()()(),T(137,2),t(),i(138,"po-tab",32),T(139,3),t()()())},dependencies:[z,K,v,ee,G],encapsulation:2})}}return d})();var Li=[[["","overview",""]],[["","especificacao-before",""]],[["","especificacao-after",""]],[["","enums-before",""]],[["","enums-after",""]],[["","tokenCSS-before",""]],[["","tokenCSS-after",""]],[["","labs",""]]],Mi=["[overview]","[especificacao-before]","[especificacao-after]","[enums-before]","[enums-after]","[tokenCSS-before]","[tokenCSS-after]","[labs]"],kt=(()=>{class d{constructor(o){this.el=o}ngAfterViewInit(){this.accordions.forEach(o=>{setTimeout(()=>{o.expandAllItems()})}),this.checkTabContent("overview"),this.checkTabContent("labs")}checkTabContent(o){setTimeout(()=>{let r=this.tabs.tabs.find(n=>n.elementRef.nativeElement.className===`docs-tab-${o}`);if(r){let n=r.elementRef.nativeElement;n.textContent.trim()!==""||n.querySelector("*")||(document.querySelectorAll(".po-tab-button").forEach(E=>{let g=E.querySelector(".po-tab-button-label");g&&g?.textContent?.trim().toLowerCase()===o&&E.remove()}),n.remove(),r.hide=!0,this.tabs.selectedTab(this.tabs.tabs.find(E=>!E.hide)))}},100)}static{this.\u0275fac=function(r){return new(r||d)(R(Z))}}static{this.\u0275cmp=x({type:d,selectors:[["api-thf-splitter"]],viewQuery:function(r,n){if(r&1&&(D(G,5),D(z,5)),r&2){let l;A(l=_())&&(n.tabs=l.first),A(l=_())&&(n.accordions=l)}},standalone:!1,ngContentSelectors:Mi,decls:326,vars:0,consts:[["tabs",""],[1,"docs-api"],["p-size","2"],["p-label","Overview","p-active","",1,"docs-tab-overview"],["p-label","Especifica\xE7\xE3o"],[1,"samples-container"],["p-show-manager-accordion","true"],["p-label","Informa\xE7\xF5es Gerais"],[1,"docs-api-module-import"],[1,"docs-api-class-name"],[1,"docs-api-class-description"],["id","boas-pr\xE1ticas"],[1,"language-html"],[1,"docs-api-directive-selectors"],[1,"docs-api-class-selector-label"],["appCodeHighlight",""],["p-label","Propriedades/Eventos"],[1,"docs-api-h5","docs-api-method-header"],[1,"docs-api-properties-table"],[1,"docs-api-properties-header-row"],[1,"docs-api-properties-th"],[1,"docs-api-properties-row"],[1,"docs-api-properties-name-cell"],[1,"docs-api-input-marker"],[1,"docs-api-input-alias"],[1,"docs-api-properties-type-cell"],["pan","",1,"docs-api-property-type","boolean,","any"],[1,"docs-api-property-default"],[1,"docs-api-property-description"],[1,"docs-api-output-marker"],[1,"docs-api-output-alias"],["pan","",1,"docs-api-property-type","EventEmitter"],["pan","",1,"docs-api-property-type","ThfSplitterOrientation,","string"],[1,"language-typescript"],["p-label","Enums"],["p-label","ThfSplitterOrientation"],["p-label","Token CSS"],["id","tokens-customiz\xE1veis"],["href","https://po-ui.io/guides/theme-customization"],["p-label","Labs",1,"docs-tab-labs"]],template:function(r,n){r&1&&(X(Li),i(0,"div",1)(1,"po-tabs",2,0)(3,"po-tab",3),T(4),t(),i(5,"po-tab",4),T(6,1),i(7,"po-container",5)(8,"po-accordion",6)(9,"po-accordion-item",7)(10,"p",8)(11,"code"),e(12,"import { ThfSplitterModule } from '@totvs/thf-components';"),t()(),i(13,"h4",9)(14,"code"),e(15,"ThfSplitterComponent"),t()(),i(16,"div",10)(17,"p"),e(18,"O componente "),i(19,"code"),e(20,"thf-splitter"),t(),e(21,` \xE9 respons\xE1vel por dividir visualmente a tela em duas se\xE7\xF5es, com suporte a
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
`),t()()(),i(78,"po-accordion-item",16)(79,"h4",17),e(80,"Propriedades"),t(),i(81,"table",18)(82,"tr",19)(83,"th",20),e(84,"Nome"),t(),i(85,"th",20),e(86,"Tipo"),t(),i(87,"th",20),e(88,"Padr\xE3o"),t(),i(89,"th",20),e(90,"Descri\xE7\xE3o"),t()(),i(91,"tr",21)(92,"td",22)(93,"div",23)(94,"span",24),e(95," t-disabled"),a(96,"br"),t()()(),i(97,"td",25)(98,"code",26),e(99,"boolean, any"),t()(),i(100,"td",27)(101,"p"),e(102,"false"),t()(),i(103,"td",28)(104,"p"),e(105,"Desabilita o redimensionamento entre os panes, ocultando a intera\xE7\xE3o via trigger."),t()()(),i(106,"tr",21)(107,"td",22)(108,"div",29)(109,"span",30),e(110," (t-layout-change)"),a(111,"br"),t()()(),i(112,"td",25)(113,"code",31),e(114,"EventEmitter"),t()(),i(115,"td",27),e(116,"-"),t(),i(117,"td",28)(118,"p"),e(119,"Evento emitido sempre que houver altera\xE7\xE3o de layout provocada por redimensionamento. Quando "),i(120,"code"),e(121,"t-disabled"),t(),e(122,` estiver
ativado, este evento n\xE3o ser\xE1 disparado.`),t(),i(123,"pre")(124,"code",12),e(125,'<thf-splitter (t-layout-change)="onLayoutChange($event)">'),t()()()(),i(126,"tr",21)(127,"td",22)(128,"div",23)(129,"span",24),e(130," t-orientation"),a(131,"br"),t()()(),i(132,"td",25)(133,"code",32),e(134,"ThfSplitterOrientation, string"),t()(),i(135,"td",27)(136,"p"),e(137,"'horizontal'"),t()(),i(138,"td",28)(139,"p"),e(140,`Define a orienta\xE7\xE3o dos pain\xE9is do splitter.
Valores aceitos: `),i(141,"code"),e(142,"'horizontal'"),t(),e(143," ou "),i(144,"code"),e(145,"'vertical'"),t(),e(146,"."),t(),i(147,"pre")(148,"code",12),e(149,'<thf-splitter t-orientation="vertical"> ...'),t()(),i(150,"p"),e(151,"ou"),t(),i(152,"pre")(153,"code",33),e(154,"orientation = ThfSplitterOrientation.Vertical;"),t()(),i(155,"pre")(156,"code",12),e(157,'<thf-splitter [t-orientation]="orientation"> ...'),t()()()()()()()(),T(158,2),t(),i(159,"po-tab",34),T(160,3),i(161,"po-container",5)(162,"po-accordion",6)(163,"po-accordion-item",35)(164,"h4",9)(165,"code"),e(166,"ThfSplitterOrientation"),t()(),i(167,"h4",17),e(168,"Propriedades"),t(),i(169,"table",18)(170,"tr",19)(171,"th",20),e(172,"Nome"),t(),i(173,"th",20),e(174,"Descri\xE7\xE3o"),t()(),i(175,"tr",21)(176,"td",22)(177,"div",23)(178,"span",24),e(179," Horizontal"),a(180,"br"),t()()(),i(181,"td",28)(182,"p"),e(183,"Divide o espa\xE7o na "),i(184,"strong"),e(185,"horizontal"),t(),e(186," (esquerda/direita)"),t()()(),i(187,"tr",21)(188,"td",22)(189,"div",23)(190,"span",24),e(191," Vertical"),a(192,"br"),t()()(),i(193,"td",28)(194,"p"),e(195,"Divide o espa\xE7o na "),i(196,"strong"),e(197,"vertical"),t(),e(198," (cima/baixo)"),t()()()()()()(),T(199,4),t(),i(200,"po-tab",36)(201,"po-container",5),T(202,5),i(203,"h3",37),e(204,"Tokens customiz\xE1veis"),t(),i(205,"p"),e(206,"\xC9 poss\xEDvel alterar o estilo do componente usando os seguintes tokens (css):"),t(),i(207,"blockquote")(208,"p"),e(209,"Para maiores informa\xE7\xF5es, acesse o guia "),i(210,"a",38),e(211,"Personalizando o Tema Padr\xE3o com Tokens CSS"),t(),e(212,"."),t()(),i(213,"table")(214,"thead")(215,"tr")(216,"th"),e(217,"Propriedade"),t(),i(218,"th"),e(219,"Descri\xE7\xE3o"),t(),i(220,"th"),e(221,"Valor Padr\xE3o"),t()()(),i(222,"tbody")(223,"tr")(224,"td")(225,"strong"),e(226,"Splitter Track"),t()(),a(227,"td")(228,"td"),t(),i(229,"tr")(230,"td")(231,"code"),e(232,"--background-track"),t()(),i(233,"td"),e(234,"Cor de background do Track apresentado no Splitter"),t(),i(235,"td")(236,"code"),e(237,"var(--color-neutral-light-10)"),t()()(),i(238,"tr"),a(239,"td")(240,"td")(241,"td"),t(),i(242,"tr")(243,"td")(244,"strong"),e(245,"Splitter Trigger"),t()(),a(246,"td")(247,"td"),t(),i(248,"tr")(249,"td")(250,"code"),e(251,"--box-shadow"),t()(),i(252,"td"),e(253,"Sombra aplicado no bot\xE3o do trigger"),t(),i(254,"td")(255,"code"),e(256,"var(--shadow-sm)"),t()()(),i(257,"tr")(258,"td")(259,"code"),e(260,"--background-color"),t()(),i(261,"td"),e(262,"Cor de background"),t(),i(263,"td")(264,"code"),e(265,"var(--color-neutral-light-00)"),t()()(),i(266,"tr")(267,"td")(268,"code"),e(269,"--color"),t()(),i(270,"td"),e(271,"Cor do \xEDcone"),t(),i(272,"td")(273,"code"),e(274,"var(--color-action-default)"),t()()(),i(275,"tr")(276,"td")(277,"strong"),e(278,"Hover"),t()(),a(279,"td")(280,"td"),t(),i(281,"tr")(282,"td")(283,"code"),e(284,"--background-color-hover"),t()(),i(285,"td"),e(286,"Cor de background no estado hover"),t(),i(287,"td")(288,"code"),e(289,"var(--color-brand-01-lighter)"),t()()(),i(290,"tr")(291,"td")(292,"code"),e(293,"--color-hover"),t()(),i(294,"td"),e(295,"Cor do \xEDcone no estado hover"),t(),i(296,"td")(297,"code"),e(298,"var(--color-brand-01-darkest)"),t()()(),i(299,"tr")(300,"td")(301,"strong"),e(302,"Pressed"),t()(),a(303,"td")(304,"td"),t(),i(305,"tr")(306,"td")(307,"code"),e(308,"--background-color-pressed"),t()(),i(309,"td"),e(310,"Cor de background quando pressionada"),t(),i(311,"td")(312,"code"),e(313,"var(--color-brand-01-ligh)"),t()()(),i(314,"tr")(315,"td")(316,"code"),e(317,"--color-pressed"),t()(),i(318,"td"),e(319,"Cor de \xEDcone quando pressionado"),t(),i(320,"td")(321,"code"),e(322,"var(--color-brand-01-darkest)"),t()()()()()(),T(323,6),t(),i(324,"po-tab",39),T(325,7),t()()())},dependencies:[z,K,v,ee,G],encapsulation:2})}}return d})();var qt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=ue({type:d})}static{this.\u0275inj=ce({imports:[Pe,Ie]})}}return d})();var Ve=[{id:11234,initials:"BR",country:"Brazil",value:1e3,date:"2018-10-09",returnDate:"2018-11-01",class:"Economic",onBoardService:!1,destination:"Rio de Janeiro",airline:"Azul",status:"available",region:"Latin America"},{id:22467,initials:"FR",country:"France",value:5e3,date:"2019-12-13",returnDate:"2019-12-31",class:"Economic",onBoardService:!1,destination:"Paris",airline:"British Airways",status:"closed",region:"Alps"},{id:40670,initials:"SN",country:"Senegal",value:3200,date:"2017-11-22",returnDate:"2018-12-01",class:"Economic",onBoardService:!1,destination:"Dakar",airline:"Iberia",status:"closed",region:"Western Africa"},{id:34679,initials:"PT",country:"Portugal",value:5500,date:"2017-10-10",returnDate:"2018-10-20",class:"Economic",onBoardService:!1,destination:"Lisbon",airline:"Air Europa",status:"closed",region:"Mediterranean"},{id:48999,initials:"RU",country:"Russia",value:6700,date:"2019-01-17",returnDate:"2019-02-20",class:"First Class",onBoardService:!0,destination:"Moscow",airline:"Lufthansa",status:"reserved",region:"Caucasus"},{id:48998,initials:"US",country:"United States",value:2700.49,date:"2018-10-17",returnDate:"2018-10-29",class:"Economic",onBoardService:!1,destination:"Los Angeles",airline:"American Airlines",status:"reserved",region:"North America"},{id:54563,initials:"CL",country:"Chile",value:2e3,date:"2018-10-20",returnDate:"2018-11-01",destination:"Cusco",class:"Economic",onBoardService:!1,airline:"LATAM",status:"available",region:"Latin America"},{id:64568,initials:"MX",country:"Mexico",value:2100,date:"2018-03-10",returnDate:"2018-05-09",destination:"Mexico City",class:"Economic",onBoardService:!1,airline:"Aero M\xE9xico",status:"available",region:"Latin America"},{id:75456,initials:"IE",country:"Ireland",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Cork",class:"First Class",onBoardService:!0,airline:"Lufthansa",status:"reserved",region:"British Isle"},{id:23445,initials:"ZA",country:"South Africa",value:1900,date:"2018-12-10",returnDate:"2018-12-25",destination:"Cape Town",class:"Economic",onBoardService:!1,airline:"South African Airways",status:"available",region:"Southern Africa"},{id:19238,initials:"AU",country:"Australia",value:6300,date:"2018-10-14",returnDate:"2018-10-30",destination:"Sydney",class:"First Class",onBoardService:!0,airline:"Jetstar Airways",status:"reserved",region:"Australasia"},{id:85456,initials:"JP",country:"Japan",value:5900,date:"2018-10-25",returnDate:"2018-11-10",destination:"Tokio",class:"Executive",onBoardService:!0,airline:"Japan Airlines",status:"available",region:"East Asia"},{id:94565,initials:"CN",country:"China",value:2900,date:"2018-10-10",returnDate:"2018-10-25",destination:"Beijing",class:"Economic",onBoardService:!1,airline:"Malaysia Airlines",status:"available",region:"East Asia"},{id:32330,initials:"UK",country:"England",value:2090.5,date:"2018-10-07",returnDate:"2018-11-15",destination:"London",class:"Executive",onBoardService:!0,airline:"British Airways",status:"available",region:"British Isle"},{id:14560,initials:"CA",country:"Canada",value:2090.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Quebec",class:"Economic",onBoardService:!1,airline:"American Airlines",status:"available",region:"North America"},{id:93800,initials:"IS",country:"Iceland",value:6300,date:"2018-10-12",returnDate:"2018-10-27",destination:"Reykjav\xEDk",class:"Economic",onBoardService:!1,airline:"Star Alliance",status:"available",region:"Nordics"},{id:34239,initials:"DE",country:"Germany",value:3070.5,date:"2018-10-07",returnDate:"2018-10-20",destination:"Berlin",class:"Executive",onBoardService:!0,airline:"LATAM",status:"available",region:"Danube"},{id:45611,initials:"AR",country:"Argentina",value:3500.5,date:"2018-12-07",returnDate:"2018-12-29",destination:"Ushuaia",class:"Economic",onBoardService:!1,airline:"LATAM",status:"reserved",region:"Latin America"}],Ft=`export const DATA = ${JSON.stringify(Ve,null,2)};`;function Vi(d,w){}function zi(d,w){d&1&&L(0,Vi,0,0,"ng-template")}function ji(d,w){if(d&1&&(i(0,"po-accordion-item",7),L(1,zi,1,0,null,8),t()),d&2){let o=u();m(),s("ngTemplateOutlet",o.dynamicTemplate)}}function Oi(d,w){if(d&1&&a(0,"po-code-editor",9),d&2){let o=u();s("p-readonly",!0)("ngModel",o.htmlCode)("p-theme",o.themeActive===1?"vs-dark":"vs")}}function Gi(d,w){if(d&1&&a(0,"po-code-editor",10),d&2){let o=u();s("p-readonly",!0)("p-theme",o.themeActive===1?"vs-dark":"vs")("ngModel",o.tsCode)}}function Ni(d,w){if(d&1&&a(0,"po-code-editor",10),d&2){let o=u();s("p-readonly",!0)("p-theme",o.themeActive===1?"vs-dark":"vs")("ngModel",o.serviceCode)}}function Qi(d,w){if(d&1&&a(0,"po-code-editor",10),d&2){let o=u();s("p-readonly",!0)("p-theme",o.themeActive===1?"vs-dark":"vs")("ngModel",o.othersCode==null?null:o.othersCode.body)}}var P=(()=>{class d{constructor(o){this.sharedService=o,this.htmlCode="",this.marginTopClass="po-mt-3",this.properties=!1,this.serviceCode="",this.showOthersCodeButton=!1,this.showServiceButton=!1,this.tsCode="",this.buttons=[],this.selectedCode="html"}ngOnInit(){this.buttons=[{label:"HTML",selected:!0,action:()=>this.selectedCode="html"},{label:"TS",action:()=>this.selectedCode="ts"}],this.showServiceButton&&this.buttons.push({label:"Service",action:()=>this.selectedCode="service"}),this.showOthersCodeButton&&this.buttons.push({label:this.othersCode.label,action:()=>this.selectedCode="othersCode"}),this.sharedService.getThemeActive().subscribe(o=>{this.themeActive=o.type||0})}static{this.\u0275fac=function(r){return new(r||d)(R(Ct))}}static{this.\u0275cmp=x({type:d,selectors:[["app-code-accordion-doc"]],inputs:{dynamicTemplate:"dynamicTemplate",htmlCode:"htmlCode",marginTopClass:"marginTopClass",othersCode:"othersCode",properties:"properties",serviceCode:"serviceCode",showOthersCodeButton:"showOthersCodeButton",showServiceButton:"showServiceButton",tsCode:"tsCode"},standalone:!1,decls:10,vars:8,consts:[[3,"ngClass"],["p-label","Propriedades",4,"ngIf"],["p-label","Fontes"],[1,"po-pt-1"],["p-toggle","single","ngDefaultControl","",3,"ngModelChange","p-buttons","ngModel"],["class","po-pt-2","p-height","350","p-language","html","ngDefaultControl","",3,"p-readonly","ngModel","p-theme",4,"ngIf"],["class","po-pt-2","p-height","350","p-language","typescript","ngDefaultControl","",3,"p-readonly","p-theme","ngModel",4,"ngIf"],["p-label","Propriedades"],[4,"ngTemplateOutlet"],["p-height","350","p-language","html","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","ngModel","p-theme"],["p-height","350","p-language","typescript","ngDefaultControl","",1,"po-pt-2",3,"p-readonly","p-theme","ngModel"]],template:function(r,n){r&1&&(i(0,"div",0)(1,"po-accordion"),L(2,ji,2,1,"po-accordion-item",1),i(3,"po-accordion-item",2)(4,"div",3)(5,"po-button-group",4),f("ngModelChange",function(E){return h(n.selectedCode,E)||(n.selectedCode=E),E}),t(),L(6,Oi,1,3,"po-code-editor",5)(7,Gi,1,3,"po-code-editor",6)(8,Ni,1,3,"po-code-editor",6)(9,Qi,1,3,"po-code-editor",6),t()()()()),r&2&&(s("ngClass",n.marginTopClass),m(2),s("ngIf",n.properties),m(3),s("p-buttons",n.buttons),b("ngModel",n.selectedCode),m(),s("ngIf",n.selectedCode==="html"),m(),s("ngIf",n.selectedCode==="ts"),m(),s("ngIf",n.selectedCode==="service"),m(),s("ngIf",n.selectedCode==="othersCode"))},dependencies:[ot,Se,rt,mt,Q,W,z,K,bt,ut],encapsulation:2})}}return d})();var It=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
    [t-actions-filter]="true"
    [t-columns]="columnsTotalizador"
    [t-resizable]="true"
    [t-groupable]="true"
    [t-draggable]="true"
    [t-items]="itemsTotalizador"
    [t-selectable]="true"
    [t-show-densification-configuration]="true"
    [t-aggregates]="aggregatesDescriptor"
    [t-show-footer-aggregates]="true"
    [t-height]="450"
  />
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfAggregateDescriptor, ThfGridColumn } from '@totvs/thf-components';
import { DATA, DATA_STRING } from './data';
  
@Component({
  selector: 'app-thf-grid-aggregates-doc',
  templateUrl: './thf-grid-aggregates-doc.component.html',
  styleUrl: './thf-grid-aggregates-doc.component.css',
})
export class ThfGridAggregateDocComponent {
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
    { property: 'region', label: 'Region' },
    { property: 'country', label: 'Country' },
    { property: 'destination', label: 'Destination' },
    { property: 'value', type: 'currency', label: 'Value', format: 'BRL' },
  ];

  aggregatesDescriptor: Array<ThfAggregateDescriptor> = [
    { field: 'value', aggregate: 'sum', label: 'Totalx' },
    { field: 'country', aggregate: 'count', label: 'Contagem' },
  ];
  itemsTotalizador = DATA;
}
  `,this.tsOthersCode={label:"Data",body:Ft},this.columnsTotalizador=[{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}]},{property:"region",label:"Region"},{property:"country",label:"Country"},{property:"destination",label:"Destination"},{property:"value",type:"currency",label:"Value",format:"BRL"}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"country",aggregate:"count",label:"Contagem"}],this.itemsTotalizador=Ve}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-aggregates-doc"]],standalone:!1,decls:6,vars:15,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-actions-filter","t-columns","t-resizable","t-groupable","t-draggable","t-items","t-selectable","t-show-densification-configuration","t-aggregates","t-show-footer-aggregates","t-height"],[3,"htmlCode","tsCode","othersCode","showOthersCodeButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Totalizador por Colunas"),t(),a(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-actions-filter",!0)("t-columns",n.columnsTotalizador)("t-resizable",!0)("t-groupable",!0)("t-draggable",!0)("t-items",n.itemsTotalizador)("t-selectable",!0)("t-show-densification-configuration",!0)("t-aggregates",n.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-height",450),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("othersCode",n.tsOthersCode)("showOthersCodeButton",!0))},dependencies:[v,C,M,P],encapsulation:2})}}return d})();var Lt=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
  t-service-api="https://po-sample-api.onrender.com/v1/heroes"
  [t-columns]="column"
  [t-height]="400"
/>
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfGridColumn } from '@totvs/thf-components';
  
@Component({
  selector: 'app-thf-grid-basic-doc',
  templateUrl: './thf-grid-basic-doc.component.html',
  styleUrl: './thf-grid-basic-doc.component.css',
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
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"value",label:"Code"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-basic-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-height"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Service"),t(),a(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-columns",n.column)("t-height",400),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,C,M,P],encapsulation:2})}}return d})();var Me=(()=>{class d{constructor(o){this.httpClient=o}deleteItem(o,r,n){return this.httpClient.delete("https://po-sample-api.onrender.com/v1/people"+"/"+n)}static{this.\u0275fac=function(r){return new(r||d)(Be(dt))}}static{this.\u0275prov=Qe({token:d,factory:d.\u0275fac,providedIn:"root"})}}return d})();var Mt=(()=>{class d{constructor(o){this.serviceDeleteApi=o,this.htmlCode=`<thf-grid
    t-service-api="https://po-sample-api.onrender.com/v1/people"
    [t-action-delete]="true"
    [t-columns]="column"
    [t-height]="400"
    [t-literals]="literals"
    [t-selectable]="true"
    [t-service-delete-api]="serviceDeleteApi"
    (t-selected)="selectedItem($event)"
  />
  `,this.tsCode=`import { Component } from '@angular/core';
import { ThfGridColumn, ThfGridLiterals } from '@totvs/thf-components';
import { ThfDeleteService } from './thf-grid-delete-service-doc.service';
  
@Component({
  selector: 'app-thf-grid-delete-service-doc',
  templateUrl: './thf-grid-delete-service-doc.component.html',
  styleUrl: './thf-grid-delete-service-doc.component.css',
  providers: [ThfDeleteService],
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

  constructor(protected serviceDeleteApi: ThfDeleteService) {}

  selectedItem(event: any) {
    this.literals = {
      bodyDelete: \`Tem certeza que deseja excluir \${event.name}?\`,
    };
  }
}
  `,this.serviceCode=`import { HttpClient } from '@angular/common/http';
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
  `,this.column=[{property:"id",label:"Id",visible:!1},{property:"label",label:"Label",visible:!1},{property:"name",label:"Nome"},{property:"cityName",label:"Cidade"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail",width:100}]}selectedItem(o){this.literals={bodyDelete:"Tem certeza que deseja excluir "+o.name+"?"}}static{this.\u0275fac=function(r){return new(r||d)(R(Me))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-delete-service-doc"]],standalone:!1,features:[Ye([Me])],decls:6,vars:10,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-selected","t-action-delete","t-columns","t-height","t-literals","t-selectable","t-service-delete-api"],[3,"htmlCode","tsCode","serviceCode","showServiceButton"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Grid Dele\xE7\xE3o com Servi\xE7o Customizado"),t(),a(3,"po-divider",1),i(4,"thf-grid",2),y("t-selected",function(E){return n.selectedItem(E)}),t(),a(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-action-delete",!0)("t-columns",n.column)("t-height",400)("t-literals",n.literals)("t-selectable",!0)("t-service-delete-api",n.serviceDeleteApi),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)("serviceCode",n.serviceCode)("showServiceButton",!0))},dependencies:[v,C,M,P],encapsulation:2})}}return d})();var Ki=()=>[];function $i(d,w){if(d&1){let o=F();i(0,"div",7)(1,"po-container",8)(2,"po-checkbox-group",9),f("ngModelChange",function(n){p(o);let l=u();return h(l.columnsName,n)||(l.columnsName=n),c(n)}),y("p-change",function(){p(o);let n=u();return c(n.updateColumns())}),t()(),i(3,"po-container",8)(4,"po-checkbox-group",10),f("ngModelChange",function(n){p(o);let l=u();return h(l.selection,n)||(l.selection=n),c(n)}),y("p-change",function(){p(o);let n=u();return c(n.changeSelectionOptions())}),t()(),i(5,"po-container",8)(6,"po-checkbox-group",11),f("ngModelChange",function(n){p(o);let l=u();return h(l.otherProperties,n)||(l.otherProperties=n),c(n)}),y("p-change",function(){p(o);let n=u();return c(n.changeOtherProperties())}),t()(),i(7,"po-container",8)(8,"po-radio-group",12),f("ngModelChange",function(n){p(o);let l=u();return h(l.spacing,n)||(l.spacing=n),c(n)}),t()(),i(9,"po-container",8)(10,"po-radio-group",13),f("ngModelChange",function(n){p(o);let l=u();return h(l.componentsSize,n)||(l.componentsSize=n),c(n)}),t(),i(11,"po-radio-group",14),f("ngModelChange",function(n){p(o);let l=u();return h(l.filterinputModeValue,n)||(l.filterinputModeValue=n),c(n)}),t()(),i(12,"po-container",15)(13,"po-number",16),f("ngModelChange",function(n){p(o);let l=u();return h(l.minResizableValue,n)||(l.minResizableValue=n),c(n)}),t(),i(14,"po-number",17),f("ngModelChange",function(n){p(o);let l=u();return h(l.maxResizableValue,n)||(l.maxResizableValue=n),c(n)}),t()(),i(15,"po-container",15)(16,"po-number",18),f("ngModelChange",function(n){p(o);let l=u();return h(l.height,n)||(l.height=n),c(n)}),t(),i(17,"po-number",19),f("ngModelChange",function(n){p(o);let l=u();return h(l.maxHeight,n)||(l.maxHeight=n),c(n)}),t(),i(18,"po-number",20),f("ngModelChange",function(n){p(o);let l=u();return h(l.minHeight,n)||(l.minHeight=n),c(n)}),t()(),i(19,"po-container",15)(20,"po-textarea",21),f("ngModelChange",function(n){p(o);let l=u();return h(l.literals,n)||(l.literals=n),c(n)}),y("p-change-model",function(){p(o);let n=u();return c(n.changeLiterals())}),t()(),i(21,"po-container",15)(22,"po-textarea",22),f("ngModelChange",function(n){p(o);let l=u();return h(l.sort,n)||(l.sort=n),c(n)}),y("p-change-model",function(){p(o);let n=u();return c(n.changeSort())}),t()(),i(23,"po-container",23)(24,"div",24)(25,"po-checkbox-group",25),f("ngModelChange",function(n){p(o);let l=u();return h(l.pagination,n)||(l.pagination=n),c(n)}),y("p-change",function(){p(o);let n=u();return c(n.changePagination())}),t(),i(26,"po-textarea",26),f("ngModelChange",function(n){p(o);let l=u();return h(l.optionsPage,n)||(l.optionsPage=n),c(n)}),y("p-change-model",function(){p(o);let n=u();return c(n.changeOptionsPage())}),t()()()(),i(27,"div",27)(28,"po-button",28),y("p-click",function(){p(o);let n=u();return c(n.restore())}),t()()}if(d&2){let o=u();m(2),b("ngModel",o.columnsName),s("p-options",o.columnsOptions),m(2),s("p-options",o.selectionOptions),b("ngModel",o.selection),m(2),s("p-columns",4)("p-options",o.otherPropertiesOptions),b("ngModel",o.otherProperties),m(2),s("p-columns",4)("p-options",o.spacingOptions),b("ngModel",o.spacing),m(2),b("ngModel",o.componentsSize),s("p-options",o.componentsSizeOptions),m(),b("ngModel",o.filterinputModeValue),s("p-options",o.filterModeOptions),m(2),b("ngModel",o.minResizableValue),s("disabled",!o.resizable),m(),b("ngModel",o.maxResizableValue),s("disabled",!o.resizable),m(2),b("ngModel",o.height),m(),b("ngModel",o.maxHeight),m(),b("ngModel",o.minHeight),m(2),b("ngModel",o.literals),m(2),b("ngModel",o.sort),m(3),s("p-options",o.paginationOptions),b("ngModel",o.pagination),m(),b("ngModel",o.optionsPage),s("disabled",!o.pagination.includes("pageable"))}}var Rt=(()=>{class d{constructor(o){this.poNotification=o,this.htmlCode=`<po-container>
  <span class="po-font-text-large-bold">Labs</span>
  <po-divider class="po-divider-mb-0"></po-divider>
  <thf-grid
    [t-action-delete]="selection.includes('actionDelete')"
    [t-action-edit]="selection.includes('actionEdit')"
    [t-action-excel]="selection.includes('actionExcel')"
    [t-action-pdf]="selection.includes('actionPdf')"
    [t-actions]="actions || []"
    [t-actions-filter]="otherProperties.includes('actionsFilter')"
    [t-actions-right]="otherProperties.includes('actionRight')"
    [t-columns]="columns"
    [t-components-size]="componentsSize"
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
</po-container>
`,this.tsCode=`import { Component } from '@angular/core';
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
import { ThfGridOptionPaging } from '@totvs/thf-components/lib/components/thf-grid-lookup/thf-grid/interfaces/thf-grid-option-paging.interface';

@Component({
  selector: 'app-thf-grid-labs-doc',
  templateUrl: './thf-grid-labs-doc.component.html',
  styleUrls: ['./thf-grid-labs-doc.component.css'],
})
export class ThfGridLabsDocComponent {
  actions: Array<ThfTableAction> | undefined = undefined;
  columnsName: Array<string> = ['id', 'name', 'birthdate', 'email'];
  componentsSize: string = 'medium';
  customOptionsPage: Array<ThfGridOptionPaging> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' },
    { value: 100, label: '100' },
    { value: 1000, label: '1000' }
  ];
  customSort: Array<ThfGridColumnSort> = [
    {
      field: '',
      dir: 'asc'
    }
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
  otherProperties: Array<string> = ['actionsFilter', 'draggable', 'groupable', 'sortable', 'striped', 'virtualScroll'];

  customAction: Array<ThfTableAction> = [
    {
      label: '',
      action: (e: any) => {
        this.poNotification.information(\`\${e.id} - \${e.name}\`);
      },
      icon: 'ICON_MORE_VERT',
      fixed: true
    }
  ];

  componentsSizeOptions: Array<PoRadioGroupOption> = [
    { label: 'small', value: 'small' },
    { label: 'medium', value: 'medium' }
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
    { label: 'Hide Batch Actions', value: 'hideBatchActions', disabled: true }
  ];
  spacingOptions: Array<PoRadioGroupOption> = [
    { label: 'extraSmall', value: ThfColumnSpacing.ExtraSmall },
    { label: 'Small', value: ThfColumnSpacing.Small },
    { label: 'Medium', value: ThfColumnSpacing.Medium },
    { label: 'Large', value: ThfColumnSpacing.Large }
  ];
  filterModeOptions: Array<PoRadioGroupOption> = [
    { label: 'Basic', value: 'basic' },
    { label: 'Service', value: 'service' }
  ];
  otherPropertiesOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Actions', value: 'actions' },
    { label: 'Actions Filter', value: 'actionsFilter' },
    { label: 'Action Right', value: 'actionRight' },
    { label: 'Draggable', value: 'draggable' },
    { label: 'Groupable', value: 'groupable' },
    { label: 'Hide Columns Manager', value: 'hideColumnsManager' },
    { label: 'Hide Actions Fixed Columns', value: 'hideActionFixedColumns' },
    { label: 'Hide Table Search', value: 'hideTableSearch' },
    { label: 'Loading', value: 'loading' },
    { label: 'Resizable', value: 'resizable' },
    {
      label: 'Show Densification Configuration',
      value: 'showDensificationConfiguration'
    },
    { label: 'Show Draggable Icon', value: 'showDraggableIcon' },
    { label: 'Sortable', value: 'sortable' },
    { label: 'Striped', value: 'striped' },
    { label: 'Text Wrap', value: 'textWrap', disabled: false },
    { label: 'Virtual Scroll', value: 'virtualScroll' }
  ];
  paginationOptions: Array<PoCheckboxGroupOption> = [
    { label: 'Pageable', value: 'pageable' },
    { label: 'Show More Disabled', value: 'showMoreDisabled', disabled: false },
    { label: 'Show More Visible', value: 'showMoreVisible', disabled: false }
  ];

  items = [
    {
      id: 1,
      name: 'Jo\xE3o Silva',
      birthdate: '1990-05-15',
      lastLogin: '2024-02-14T15:30:00Z',
      active: true,
      email: 'joao.silva@example.com'
    },
    {
      id: 2,
      name: 'Maria Souza',
      birthdate: '1985-10-23',
      lastLogin: '2024-02-13T08:45:00Z',
      active: false,
      email: 'maria.souza@example.com'
    },
    {
      id: 3,
      name: 'Carlos Almeida',
      birthdate: '1998-07-09',
      lastLogin: '2024-02-14T20:15:00Z',
      active: true,
      email: 'carlos.almeida@example.com'
    },
    {
      id: 4,
      name: 'Fernanda Costa',
      birthdate: '1992-03-12',
      lastLogin: '2024-02-12T18:00:00Z',
      active: false,
      email: 'fernanda.costa@example.com'
    },
    {
      id: 5,
      name: 'Ricardo Lima',
      birthdate: '1980-11-30',
      lastLogin: '2024-02-11T07:25:00Z',
      active: true,
      email: 'ricardo.lima@example.com'
    },
    {
      id: 6,
      name: 'Ana Pereira',
      birthdate: '1995-09-18',
      lastLogin: '2024-02-10T14:10:00Z',
      active: true,
      email: 'ana.pereira@example.com'
    },
    {
      id: 7,
      name: 'Pedro Henrique',
      birthdate: '1993-06-25',
      lastLogin: '2024-02-09T12:30:00Z',
      active: false,
      email: 'pedro.henrique@example.com'
    },
    {
      id: 8,
      name: 'Beatriz Ramos',
      birthdate: '1999-04-03',
      lastLogin: '2024-02-08T09:15:00Z',
      active: true,
      email: 'beatriz.ramos@example.com'
    },
    {
      id: 9,
      name: 'Lucas Oliveira',
      birthdate: '1987-07-22',
      lastLogin: '2024-02-07T16:45:00Z',
      active: false,
      email: 'lucas.oliveira@example.com'
    },
    {
      id: 10,
      name: 'Juliana Martins',
      birthdate: '1996-01-05',
      lastLogin: '2024-02-06T11:00:00Z',
      active: true,
      email: 'juliana.martins@example.com'
    },
    {
      id: 11,
      name: 'Eduardo Nunes',
      birthdate: '1982-08-17',
      lastLogin: '2024-02-05T17:20:00Z',
      active: false,
      email: 'eduardo.nunes@example.com'
    },
    {
      id: 12,
      name: 'Camila Ferreira',
      birthdate: '2000-12-29',
      lastLogin: '2024-02-04T13:40:00Z',
      active: true,
      email: 'camila.ferreira@example.com'
    }
  ];

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Number' },
    { property: 'name', label: 'Text' },
    { property: 'birthdate', label: 'Date', type: 'date' },
    {
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this)
    }
  ];

  readonly columnsOptions: Array<PoCheckboxGroupOption> = [
    { value: 'id', label: 'Number' },
    { value: 'name', label: 'Text' },
    { value: 'birthdate', label: 'Date' },
    { value: 'lastLogin', label: 'DateTime' },
    { value: 'active', label: 'Boolean' },
    { value: 'email', label: 'Link' }
  ];

  private readonly columnsDefinition: any = {
    id: <ThfGridColumn>{ property: 'id', label: 'Number' },
    name: <ThfGridColumn>{ property: 'name', label: 'Text' },
    birthdate: <ThfGridColumn>{
      property: 'birthdate',
      label: 'Date',
      type: 'date'
    },
    lastLogin: <ThfGridColumn>{
      property: 'lastLogin',
      label: 'DateTime',
      type: 'dateTime'
    },
    active: <ThfGridColumn>{ property: 'active', label: 'Boolean' },
    email: <ThfGridColumn>{
      property: 'email',
      label: 'Link',
      type: 'link',
      action: this.openEmail.bind(this)
    }
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
        { value: 1000, label: '1000' }
      ];
    }
  }

  changeOtherProperties() {
    this.actions = this.otherProperties.includes('actions') ? this.customAction : [];

    const isVirtualScrollEnabled = this.otherProperties.includes('virtualScroll');
    const isResizableEnabled = this.otherProperties.includes('resizable');

    this.otherPropertiesOptions = this.otherPropertiesOptions.map(option => {
      if (option.value === 'textWrap') {
        return { ...option, disabled: isVirtualScrollEnabled };
      }
      return option;
    });

    if (isVirtualScrollEnabled && this.otherProperties.includes('textWrap')) {
      this.otherProperties = this.otherProperties.filter(prop => prop !== 'textWrap');
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
          dir: 'asc'
        }
      ];
    }
  }

  openEmail(email: string) {
    window.open(\`mailto:\${email}\`, '_blank');
  }

  restore() {
    this.actions = undefined;
    this.columnsName = ['id', 'name', 'birthdate', 'email'];
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
    this.otherProperties = ['actionsFilter', 'draggable', 'groupable', 'sortable', 'striped', 'virtualScroll'];

    this.updateColumns();
    this.changeLiterals();
    this.changeSort();
    this.changePagination();
    this.changeSelectionOptions();
    this.changeOtherProperties();
  }

  updateColumns() {
    this.columns = [];

    this.columnsName.forEach(column => this.columns.push(this.columnsDefinition[column]));
  }
}
  `,this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}],this.customSort=[{field:"",dir:"asc"}],this.event="",this.filterinputModeValue="basic",this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=[],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=pe.Medium,this.otherProperties=["actionsFilter","draggable","container","groupable","sortable","striped","virtualScroll"],this.customAction=[{label:"",action:r=>{this.poNotification.information(`${r.id} - ${r.name}`)},icon:"ICON_MORE_VERT",fixed:!0}],this.componentsSizeOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.selectionOptions=[{label:"Selectable",value:"selectable"},{label:"Single",value:"singleSelect",disabled:!0},{label:"Entire Line",value:"selectableEntireLine",disabled:!0},{label:"Hide Select All",value:"hideSelectAll",disabled:!0},{label:"Action Delete",value:"actionDelete",disabled:!0},{label:"Action Edit",value:"actionEdit",disabled:!0},{label:"Action Excel",value:"actionExcel",disabled:!0},{label:"Action PDF",value:"actionPdf",disabled:!0},{label:"Hide Batch Actions",value:"hideBatchActions",disabled:!0}],this.spacingOptions=[{label:"extraSmall",value:pe.ExtraSmall},{label:"Small",value:pe.Small},{label:"Medium",value:pe.Medium},{label:"Large",value:pe.Large}],this.filterModeOptions=[{label:"Basic",value:"basic"},{label:"Service",value:"service"}],this.otherPropertiesOptions=[{label:"Actions",value:"actions"},{label:"Actions Filter",value:"actionsFilter"},{label:"Action Right",value:"actionRight"},{label:"Container",value:"container"},{label:"Draggable",value:"draggable"},{label:"Groupable",value:"groupable"},{label:"Hide Columns Manager",value:"hideColumnsManager"},{label:"Hide Actions Fixed Columns",value:"hideActionFixedColumns"},{label:"Hide Table Search",value:"hideTableSearch"},{label:"Loading",value:"loading"},{label:"Resizable",value:"resizable"},{label:"Show Densification Configuration",value:"showDensificationConfiguration"},{label:"Show Draggable Icon",value:"showDraggableIcon"},{label:"Sortable",value:"sortable"},{label:"Striped",value:"striped"},{label:"Text Wrap",value:"textWrap",disabled:!1},{label:"Virtual Scroll",value:"virtualScroll"}],this.paginationOptions=[{label:"Pageable",value:"pageable"},{label:"Show More Disabled",value:"showMoreDisabled",disabled:!1},{label:"Show More Visible",value:"showMoreVisible",disabled:!1}],this.items=[{id:1,name:"Jo\xE3o Silva",birthdate:"1990-05-15",lastLogin:"2024-02-14T15:30:00Z",active:!0,email:"joao.silva@example.com"},{id:2,name:"Maria Souza",birthdate:"1985-10-23",lastLogin:"2024-02-13T08:45:00Z",active:!1,email:"maria.souza@example.com"},{id:3,name:"Carlos Almeida",birthdate:"1998-07-09",lastLogin:"2024-02-14T20:15:00Z",active:!0,email:"carlos.almeida@example.com"},{id:4,name:"Fernanda Costa",birthdate:"1992-03-12",lastLogin:"2024-02-12T18:00:00Z",active:!1,email:"fernanda.costa@example.com"},{id:5,name:"Ricardo Lima",birthdate:"1980-11-30",lastLogin:"2024-02-11T07:25:00Z",active:!0,email:"ricardo.lima@example.com"},{id:6,name:"Ana Pereira",birthdate:"1995-09-18",lastLogin:"2024-02-10T14:10:00Z",active:!0,email:"ana.pereira@example.com"},{id:7,name:"Pedro Henrique",birthdate:"1993-06-25",lastLogin:"2024-02-09T12:30:00Z",active:!1,email:"pedro.henrique@example.com"},{id:8,name:"Beatriz Ramos",birthdate:"1999-04-03",lastLogin:"2024-02-08T09:15:00Z",active:!0,email:"beatriz.ramos@example.com"},{id:9,name:"Lucas Oliveira",birthdate:"1987-07-22",lastLogin:"2024-02-07T16:45:00Z",active:!1,email:"lucas.oliveira@example.com"},{id:10,name:"Juliana Martins",birthdate:"1996-01-05",lastLogin:"2024-02-06T11:00:00Z",active:!0,email:"juliana.martins@example.com"},{id:11,name:"Eduardo Nunes",birthdate:"1982-08-17",lastLogin:"2024-02-05T17:20:00Z",active:!1,email:"eduardo.nunes@example.com"},{id:12,name:"Camila Ferreira",birthdate:"2000-12-29",lastLogin:"2024-02-04T13:40:00Z",active:!0,email:"camila.ferreira@example.com"}],this.columns=[{property:"id",label:"Number"},{property:"name",label:"Text"},{property:"birthdate",label:"Date",type:"date"},{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}],this.columnsOptions=[{value:"id",label:"Number"},{value:"name",label:"Text"},{value:"birthdate",label:"Date"},{value:"lastLogin",label:"DateTime"},{value:"active",label:"Boolean"},{value:"email",label:"Link"}],this.columnsDefinition={id:{property:"id",label:"Number"},name:{property:"name",label:"Text"},birthdate:{property:"birthdate",label:"Date",type:"date"},lastLogin:{property:"lastLogin",label:"DateTime",type:"dateTime"},active:{property:"active",label:"Boolean"},email:{property:"email",label:"Link",type:"link",action:this.openEmail.bind(this)}}}ngAfterViewInit(){this.restore()}changeEvent(o){this.event=o}changeLiterals(){try{this.literalsCustom=JSON.parse(this.literals)}catch{this.literalsCustom={}}}changeOptionsPage(){try{this.customOptionsPage=JSON.parse(this.optionsPage)}catch{this.customOptionsPage=[{value:10,label:"10"},{value:20,label:"20"},{value:50,label:"50"},{value:100,label:"100"},{value:1e3,label:"1000"}]}}changeOtherProperties(){this.actions=this.otherProperties.includes("actions")?this.customAction:[];let o=this.otherProperties.includes("virtualScroll"),r=this.otherProperties.includes("resizable");this.otherPropertiesOptions=this.otherPropertiesOptions.map(n=>n.value==="textWrap"?N(O({},n),{disabled:o}):n),o&&this.otherProperties.includes("textWrap")&&(this.otherProperties=this.otherProperties.filter(n=>n!=="textWrap")),this.resizable=r}changePagination(){let o=this.pagination.includes("pageable");this.paginationOptions[1].disabled=!o,this.paginationOptions[2].disabled=!o,this.paginationOptions=[...this.paginationOptions]}changeSelectionOptions(){let o=this.selection.includes("selectable");this.selectionOptions[1].disabled=!o,this.selectionOptions[2].disabled=!o,this.selectionOptions[3].disabled=!o,this.selectionOptions[4].disabled=!o,this.selectionOptions[5].disabled=!o,this.selectionOptions[6].disabled=!o,this.selectionOptions[7].disabled=!o,this.selectionOptions[8].disabled=!o,this.selectionOptions=[...this.selectionOptions]}changeSort(){try{this.customSort=JSON.parse(this.sort)}catch{this.customSort=[{field:"",dir:"asc"}]}}openEmail(o){window.open(`mailto:${o}`,"_blank")}restore(){this.actions=void 0,this.columnsName=["id","name","birthdate","email"],this.componentsSize="medium",this.event="",this.filterinputModeValue="basic",this.literals="",this.literalsCustom={},this.maxResizableValue=300,this.minResizableValue=10,this.height=400,this.minHeight=void 0,this.maxHeight=void 0,this.optionsPage='[{ "value": "10", "label": "10" },{ "value": "20", "label": "20" },{ "value": "50", "label": "50" },{ "value": "100", "label": "100" },{ "value": "1000", "label": "1000" }]',this.pagination=["showMoreVisible"],this.properties=[],this.resizable=!1,this.selection=["selectableEntireLine"],this.sort='[{"field": "", "dir": "asc"}]',this.spacing=pe.Medium,this.otherProperties=["actionsFilter","container","draggable","groupable","sortable","striped","virtualScroll"],this.updateColumns(),this.changeLiterals(),this.changeSort(),this.changePagination(),this.changeSelectionOptions(),this.changeOtherProperties()}updateColumns(){this.columns=[],this.columnsName.forEach(o=>this.columns.push(this.columnsDefinition[o]))}static{this.\u0275fac=function(r){return new(r||d)(R(he))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-labs-doc"]],standalone:!1,decls:10,vars:48,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-param-delete-api","value",3,"t-change-fixed-columns","t-change-order-column","t-change-page-size","t-change-sort-column","t-change-visible-columns","t-change-options-column-manager","t-changed-density","t-delete-item","t-delete-items","t-delete-item-error","t-filter-item-error","t-restore-column-manager","t-selected","t-all-selected","t-unselected","t-all-unselected","t-change-group","t-rows-selected","t-action-delete","t-action-edit","t-action-excel","t-action-pdf","t-actions","t-actions-filter","t-actions-right","t-components-size","t-columns","t-container","t-draggable","t-filter-input-mode","t-groupable","t-height","t-max-height","t-min-height","t-hide-columns-manager","t-hide-action-fixed-columns","t-hide-batch-actions","t-hide-select-all","t-hide-table-search","t-literals","t-loading","t-max-resizable-width","t-min-resizable-width","t-options-paging","t-pageable","t-resizable","t-selectable","t-selectable-entire-line","t-show-densification-configuration","t-show-draggable-icon","t-show-more-disabled","t-show-more-visible","t-single-select","t-sort","t-sortable","t-spacing","t-striped","t-text-wrap","t-virtual-scroll","t-items"],[1,"po-mt-2",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","columnsName","p-columns","4","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-options"],["name","selection","p-label","Selection","p-columns","4",3,"ngModelChange","p-change","p-options","ngModel"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","spacing","p-help","Para aplicar o tamanho Extra Small, defina o n\xEDvel de acessibilidade como AA no navbar.","p-label","Spacing",3,"ngModelChange","p-columns","p-options","ngModel"],["name","componentsSize","p-label","Components size","p-help","Para aplicar o tamanho small, defina o n\xEDvel de acessibilidade como AA no navbar.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterinputModeValue","p-label","Filter Input Mode",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],[1,"po-mb-2","po-lg-6",2,"display","flex"],["p-label","Min Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Max Resizable Width",1,"po-md-6",3,"ngModelChange","ngModel","disabled"],["p-label","Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Max Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["p-label","Min Height",1,"po-md-6","po-lg-4",3,"ngModelChange","ngModel"],["name","literals","p-label","Literals","p-help",'{"noData": "Sem dados a serem exibidos"}',3,"ngModelChange","p-change-model","ngModel"],["name","sort","p-label","Sort","p-help",'[{ "field":"name", "dir":"asc" }]',3,"ngModelChange","p-change-model","ngModel"],[1,"po-mb-2","po-lg-12",2,"display","flex"],[2,"display","flex","flex-wrap","wrap"],["name","pagination","p-label","Pagination",1,"po-lg-6",3,"ngModelChange","p-change","p-options","ngModel"],["name","optionsPage","p-label","Options Page","p-help",'[{ "value":"25", "label":"25" }, { "value":"50", "label":"50" }]',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel","disabled"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),a(3,"po-divider",2),i(4,"thf-grid",3),y("t-change-fixed-columns",function(){return p(l),c(n.changeEvent("t-change-fixed-columns"))})("t-change-order-column",function(){return p(l),c(n.changeEvent("t-change-order-column"))})("t-change-page-size",function(){return p(l),c(n.changeEvent("t-change-page-size"))})("t-change-sort-column",function(){return p(l),c(n.changeEvent("t-change-sort-column"))})("t-change-visible-columns",function(){return p(l),c(n.changeEvent("t-change-visible-columns"))})("t-change-options-column-manager",function(){return p(l),c(n.changeEvent("t-change-options-column-manager"))})("t-changed-density",function(){return p(l),c(n.changeEvent("t-changed-density"))})("t-delete-item",function(){return p(l),c(n.changeEvent("t-delete-item"))})("t-delete-items",function(){return p(l),c(n.changeEvent("t-delete-items"))})("t-delete-item-error",function(){return p(l),c(n.changeEvent("t-delete-item-error"))})("t-filter-item-error",function(){return p(l),c(n.changeEvent("t-filter-item-error"))})("t-restore-column-manager",function(){return p(l),c(n.changeEvent("t-restore-column-manager"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-all-selected",function(){return p(l),c(n.changeEvent("t-all-selected"))})("t-unselected",function(){return p(l),c(n.changeEvent("t-unselected"))})("t-all-unselected",function(){return p(l),c(n.changeEvent("t-all-unselected"))})("t-change-group",function(){return p(l),c(n.changeEvent("t-change-group"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),t(),i(5,"po-container",4),a(6,"po-info",5),t(),a(7,"app-code-accordion-doc",6),L(8,$i,29,27,"ng-template",null,0,J),t()}if(r&2){let l=U(9);m(4),s("t-action-delete",n.selection.includes("actionDelete"))("t-action-edit",n.selection.includes("actionEdit"))("t-action-excel",n.selection.includes("actionExcel"))("t-action-pdf",n.selection.includes("actionPdf"))("t-actions",n.actions||$(47,Ki))("t-actions-filter",n.otherProperties.includes("actionsFilter"))("t-actions-right",n.otherProperties.includes("actionRight"))("t-components-size",n.componentsSize)("t-columns",n.columns)("t-container",n.otherProperties.includes("container"))("t-draggable",n.otherProperties.includes("draggable"))("t-filter-input-mode",n.filterinputModeValue)("t-groupable",n.otherProperties.includes("groupable"))("t-height",n.height)("t-max-height",n.maxHeight)("t-min-height",n.minHeight)("t-hide-columns-manager",n.otherProperties.includes("hideColumnsManager"))("t-hide-action-fixed-columns",n.otherProperties.includes("hideActionFixedColumns"))("t-hide-batch-actions",n.selection.includes("hideBatchActions"))("t-hide-select-all",n.selection.includes("hideSelectAll"))("t-hide-table-search",n.otherProperties.includes("hideTableSearch"))("t-literals",n.literalsCustom)("t-loading",n.otherProperties.includes("loading"))("t-max-resizable-width",n.maxResizableValue)("t-min-resizable-width",n.minResizableValue)("t-options-paging",n.customOptionsPage)("t-pageable",n.pagination.includes("pageable"))("t-resizable",n.resizable)("t-selectable",n.selection.includes("selectable"))("t-selectable-entire-line",n.selection.includes("selectableEntireLine"))("t-show-densification-configuration",n.otherProperties.includes("showDensificationConfiguration"))("t-show-draggable-icon",n.otherProperties.includes("showDraggableIcon"))("t-show-more-disabled",n.pagination.includes("showMoreDisabled"))("t-show-more-visible",n.pagination.includes("showMoreVisible"))("t-single-select",n.selection.includes("singleSelect"))("t-sort",n.customSort)("t-sortable",n.otherProperties.includes("sortable"))("t-spacing",n.spacing)("t-striped",n.otherProperties.includes("striped"))("t-text-wrap",n.otherProperties.includes("textWrap"))("t-virtual-scroll",n.otherProperties.includes("virtualScroll"))("t-items",n.items),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Q,W,H,v,C,be,re,gt,fe,de,M,P],encapsulation:2})}}return d})();var Zi=["gridComponent"],Vt=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
  #gridComponent
  t-service-api="https://po-sample-api.onrender.com/v1/people"
  [t-auto-size]="true"
  [t-columns]="columns"
  [t-actions-filter]="true"
  [t-selectable]="true"
  [t-actions-right]="true"
  [t-draggable]="true"
  [t-groupable]="true"
  [t-height]="400"
  [t-edit-properties]="editProperties"
/>
  `,this.tsCode=`import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThfGridColumn, ThfGridComponent, ThfGridEditProperties } from '@totvs/thf-components';

@Component({
  selector: 'app-thf-grid-editing-inline-doc',
  templateUrl: './thf-grid-editing-inline-doc.component.html',
  styleUrls: ['./thf-grid-editing-inline-doc.component.css'],
  standalone: false,
})
export class ThfGridEditingInlineDocComponent {
  @ViewChild('gridComponent', { static: false }) thfGrid!: ThfGridComponent;

  columns: Array<ThfGridColumn> = [
    { property: 'id', label: 'Id', editProperties: { disabled: true } },
    { property: 'name', label: 'Nome' },
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
        helper: 'Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.',
        keydown: this.onKeyDown.bind(this, 'birthdate')
      }
    },
    {
      property: 'city',
      label: 'Cidade',
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
  `,this.columns=[{property:"id",label:"Id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"birthdate",label:"Data de  nascimento",type:"date",editProperties:{componentEditable:"datepicker",clean:!0,required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe a data de nascimento no formato DDMMAAAA ou selecione no calend\xE1rio.",keydown:this.onKeyDown.bind(this,"birthdate")}},{property:"city",label:"Cidade",editProperties:{componentEditable:"combo",options:[{value:"4201307",label:"Araquari"},{value:"1501402",label:"Bel\xE9m"},{value:"3509502",label:"Campinas"},{value:"4106902",label:"Curitiba"},{value:"4209102",label:"Joinville"},{value:"3534401",label:"Osasco"},{value:"3304557",label:"Rio de Janeiro"},{value:"4215802",label:"S\xE3o Bento do Sul"},{value:"4216206",label:"S\xE3o Francisco do Sul"},{value:"3550308",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}}]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)}}onKeyDown(o,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(o)}setFormGroup(o){return this.form=new B({id:new S(o.id,[I.required]),name:new S(o.name),city:new S(o.city),birthdate:new S(o.birthdate)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-inline-doc"]],viewQuery:function(r,n){if(r&1&&D(Zi,5),r&2){let l;A(l=_())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:11,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-service-api","https://po-sample-api.onrender.com/v1/people",3,"t-auto-size","t-columns","t-actions-filter","t-selectable","t-actions-right","t-draggable","t-groupable","t-height","t-edit-properties"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Edi\xE7\xE3o em linha"),t(),a(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-auto-size",!0)("t-columns",n.columns)("t-actions-filter",!0)("t-selectable",!0)("t-actions-right",!0)("t-draggable",!0)("t-groupable",!0)("t-height",400)("t-edit-properties",n.editProperties),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,C,M,P],encapsulation:2})}}return d})();var zt=`<div class="po-row po-mb-2">
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
  [t-single-select]="true"
  [t-items]="items"
  [t-columns]="columnWithItems"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-sortable]="true"
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
</po-modal>`,jt=`import { Component, ViewChild } from '@angular/core';
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
}`;var Yi=["modal"],en=["gridComponent"],tn=["multiselect"],nn=["input"],on=(d,w)=>({name:d,perfil:w}),an=()=>({value:1,label:"RH"}),rn=()=>({value:2,label:"Almoxarifado"}),ln=()=>({value:3,label:"Vendedor"}),dn=(d,w,o)=>[d,w,o];function mn(d,w){if(d&1){let o=F();i(0,"po-input",14,4),y("p-keydown",function(n){p(o);let l=u();return c(l.onKeyDown("name",n))}),t()}if(d&2){let o=w.formControl;s("formControl",o)("p-error-pattern","Obrigat\xF3rio")("p-required",!0)("p-required-field-error-message",!0)}}function sn(d,w){if(d&1){let o=F();i(0,"po-multiselect",15,5),y("p-keydown",function(n){p(o);let l=u();return c(l.onKeyDown("otherStatus",n))}),t()}if(d&2){let o=w.formControl;s("formControl",o)("p-field-error-message","Obrigat\xF3rio")("p-required",!0)("p-additional-help-tooltip","Marque um ou mais status, conforme necess\xE1rio.")("p-options",et(11,dn,$(8,an),$(9,rn),$(10,ln)))("p-field-label","label")("p-field-value","value")("p-control-value-with-label",!0)}}function pn(d,w){if(d&1&&(i(0,"div",16)(1,"pre"),e(2),t()()),d&2){let o=u();m(2),xe(o.getLabelChangedItems())}}var Ot=(()=>{class d{constructor(){this.htmlCode=zt,this.tsCode=jt,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],perfil:[1],state:{value:"SC",label:"Santa Catarina"},city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],perfil:[2],state:{value:"SC",label:"Santa Catarina"},city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],perfil:[3],state:{value:"SP",label:"S\xE3o Paulo"},city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],perfil:[2],state:{value:"RJ",label:"Rio de Janeiro"},city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],perfil:[1],state:null,city:null}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{componentEditable:"input",required:!0}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",keydown:this.onKeyDown.bind(this,"values")}},{property:"perfil",label:"Perfil",editProperties:{componentEditable:"multiselect",options:[{value:1,label:"RH"},{value:2,label:"Almoxarifado"},{value:3,label:"Vendedor"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0,required:!0}},{property:"state",label:"Estado",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,options:[{value:"MG",label:"Minas Gerais"},{value:"RJ",label:"Rio de Janeiro"},{value:"SC",label:"Santa Catarina"},{value:"SP",label:"S\xE3o Paulo"}],fieldLabel:"label",fieldValue:"value",controlValueWithLabel:!0}},{property:"city",label:"cidade",editProperties:{componentEditable:"combo",required:!1,removeInitialFilter:!0,disabled:!1,fieldLabel:"value",fieldValue:"value"}}],this.itemsUpdated=[]}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(o,r)=>(r==="include"&&!o.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,o.id=o.$uuidThfIncluded,o.dependents=[],this.currentIdItem=o.id),this.myForm=new B({name:new S(o.name),status:new S(o.status,[I.min(1)]),values:new S(o.values,[I.required]),perfil:new S(o.perfil,[I.required]),state:new S(o.state),city:new S(o.city)}),this.handleStateAndCity(this.myForm?.controls.state.value),this.myForm),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this),validateField:this.onValidate.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(o){console.log("onAfterSave(new): ",o);let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(r.editProperties.disabled=!0)}onBeforeSave(o,r){return console.log("before new value: ",o),console.log("before old value: ",r),!0}onBeforeInsert(o){console.log("before insert new value: ",o),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,o];let r=this.columnWithItems.find(n=>n.property==="city");return r?.editProperties&&(r.editProperties.disabled=!0),!0}onValidate(o,r){if(console.log("onValidateField:",o,r),r==="state"){this.myForm?.controls.city.setValue(null);let n=this.myForm.controls.state.value,l=this.columnWithItems.find(E=>E.property==="city");if(!l?.editProperties)return!0;n?(l.editProperties.disabled=!1,l.editProperties.options=this.getCity(n.value),this.myForm?.controls.city.setValue("")):l.editProperties.disabled=!0}return!0}handleStateAndCity(o){let r=this.columnWithItems.find(n=>n.property==="city");r?.editProperties&&(o?(r.editProperties.options=this.getCity(o),r.editProperties.disabled=!1):r.editProperties.disabled=!0)}onBeforeRemove(o){return!0}onAfterRemove(o){return console.log("afterRemove: ",o),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(o,r){if(r.code==="F9"){if(o==="otherStatus"){this.multiselect.showAdditionalHelp();return}else if(o==="name"){this.input.showAdditionalHelp();return}this.thfGrid.showAdditionalHelp(o)}}getCity(o){return{MG:[{value:"Belo Horizonte"},{value:"Contagem"},{value:"Juiz de Fora"},{value:"Uberl\xE2ndia"}],RJ:[{value:"Duque de Caxias"},{value:"Nova Igua\xE7u"},{value:"Rio de Janeiro"},{value:"S\xE3o Gon\xE7alo"}],SP:[{value:"Campinas"},{value:"Guarulhos"},{value:"S\xE3o Bernardo do Campo"},{value:"S\xE3o Paulo"}],SC:[{value:"Balne\xE1rio Cambori\xFA"},{value:"Brusque"},{value:"Lages"},{value:"Palho\xE7a"}]}[o]||[]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-row-actions-doc"]],viewQuery:function(r,n){if(r&1&&(D(Yi,7),D(en,5),D(tn,5),D(nn,5)),r&2){let l;A(l=_())&&(n.poModal=l.first),A(l=_())&&(n.thfGrid=l.first),A(l=_())&&(n.multiselect=l.first),A(l=_())&&(n.input=l.first)}},standalone:!1,decls:17,vars:16,consts:[["gridComponent",""],["nameTemplate",""],["perfilTemplate",""],["modal",""],["input",""],["multiselect",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-single-select","t-items","t-columns","t-grid-row-actions","t-actions-right","t-sortable","t-custom-templates"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],[3,"htmlCode","tsCode"],["p-additional-help-tooltip","Informe pelo menos o primeiro nome.","p-placeholder","Informe o nome",3,"p-keydown","formControl","p-error-pattern","p-required","p-required-field-error-message"],[3,"p-keydown","formControl","p-field-error-message","p-required","p-additional-help-tooltip","p-options","p-field-label","p-field-value","p-control-value-with-label"],[1,"code"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",6),e(2,"Edi\xE7\xE3o flu\xEDda"),t(),a(3,"po-divider"),i(4,"div",7)(5,"po-button",8),y("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(6,"po-button",9),y("p-click",function(){return p(l),c(n.poModal.open())}),t()(),a(7,"thf-grid",10,0),L(9,mn,2,4,"ng-template",null,1,J)(11,sn,2,15,"ng-template",null,2,J),i(13,"po-modal",11,3),L(15,pn,3,1,"div",12),t(),a(16,"app-code-accordion-doc",13),t()}if(r&2){let l,E,g=U(10),gi=U(12);m(6),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-sortable",!0)("t-custom-templates",Ce(13,on,g,gi)),m(8),s("ngIf",(E=n.getChangedItems())==null?null:E.length),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Se,Q,st,H,v,C,le,qe,_e,M,P],styles:[".code[_ngcontent-%COMP%]{padding:1rem;background-color:#000;color:#adff2f;margin-top:.5rem;margin-left:2rem;border-radius:.5rem}"]})}}return d})();var Gt=`<div class="po-row po-mb-2">
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
</po-modal>`,Nt=`import { Component, ViewChild } from '@angular/core';
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
`;var un=["modal"],En=["gridComponent"],xn=["bulkEditModal"],Sn=(d,w)=>w.property;function bn(d,w){if(d&1&&(i(0,"div",13)(1,"pre"),e(2),t()()),d&2){let o=u();m(2),xe(o.getLabelChangedItems())}}function hn(d,w){if(d&1){let o=F();i(0,"po-combo",18),f("ngModelChange",function(n){p(o);let l=u(2).$implicit;return h(l.valueModel,n)||(l.valueModel=n),c(n)}),t()}if(d&2){let o=u(2).$implicit;ye("p-label",o.label),b("ngModel",o.valueModel),s("p-options",o.editProperties.options)("p-required",o.required)("p-placeholder",o.editProperties.placeholder)("p-disabled",o.editProperties.disabled)}}function fn(d,w){if(d&1){let o=F();i(0,"po-decimal",19),f("ngModelChange",function(n){p(o);let l=u(2).$implicit;return h(l.valueModel,n)||(l.valueModel=n),c(n)}),t()}if(d&2){let o=u(2).$implicit;ye("p-label",o.label),b("ngModel",o.valueModel),s("p-decimals-length",o.editProperties.decimalsLength)("p-required",o.required)("p-placeholder",o.editProperties.placeholder)("p-disabled",o.editProperties.disabled)}}function vn(d,w){if(d&1){let o=F();i(0,"po-input",20),f("ngModelChange",function(n){p(o);let l=u(2).$implicit;return h(l.valueModel,n)||(l.valueModel=n),c(n)}),t()}if(d&2){let o=u(2).$implicit;ye("p-label",o.label),b("ngModel",o.valueModel),s("p-required",o.required)("p-placeholder",o.editProperties.placeholder)("p-disabled",o.editProperties.disabled)}}function gn(d,w){if(d&1&&(Je(0),L(1,hn,1,6,"po-combo",15)(2,fn,1,6,"po-decimal",16)(3,vn,1,5,"po-input",17),Ze()),d&2){let o,r=u().$implicit;m(),Ee((o=r.editProperties.componentEditable)==="combo"?1:o==="decimal"?2:3)}}function yn(d,w){if(d&1&&L(0,gn,4,1,"ng-container",14),d&2){let o=w.$implicit,r=u();s("ngIf",r.editColumnsFilterValues.includes(o.property))}}var Qt=(()=>{class d{constructor(o){this.poNotificationService=o,this.htmlCode=Gt,this.tsCode=Nt,this.items=[{id:11234,country:"Brazil",value:1e3,value_pt:1e3,value_en:1e3,value_ru:1e3,value_es:1e3,value_edit_pt:1e3,value_edit_en:1e3,value_edit_ru:1e3,value_edit_es:1e3,destination:"Rio de Janeiro",status:"available",region:"Latin America"},{id:22467,country:"France",value:5e3,value_pt:5e3,value_en:5e3,value_ru:5e3,value_es:5e3,value_edit_pt:5e3,value_edit_en:5e3,value_edit_ru:5e3,value_edit_es:5e3,destination:"Paris",status:"closed",region:"Alps"},{id:40670,country:"Senegal",value:3200,value_pt:3200,value_en:3200,value_ru:3200,value_es:3200,value_edit_pt:3200,value_edit_en:3200,value_edit_ru:3200,value_edit_es:3200,destination:"Dakar",status:"closed",region:"Western Africa"},{id:34679,country:"Portugal",value:5500,value_pt:5500,value_en:5500,value_ru:5500,value_es:5500,value_edit_pt:5500,value_edit_en:5500,value_edit_ru:5500,value_edit_es:5500,destination:"Lisbon",status:"closed",region:"Mediterranean"},{id:49e3,country:"Russia",value:6700,value_pt:6700,value_en:6700,value_ru:6700,value_es:6700,value_edit_pt:6700,value_edit_en:6700,value_edit_ru:6700,value_edit_es:6700,destination:"Moscow",status:"reserved",region:"Caucasus"},{id:48999,country:"United States",value:2700.49,value_pt:2700.49,value_en:2700.49,value_ru:2700.49,value_es:2700.49,value_edit_pt:2700.49,value_edit_en:2700.49,value_edit_ru:2700.49,value_edit_es:2700.49,destination:"Los Angeles",status:"reserved",region:"North America"},{id:54563,country:"Chile",value:2e3,value_pt:2e3,value_en:2e3,value_ru:2e3,value_es:2e3,value_edit_pt:2e3,value_edit_en:2e3,value_edit_ru:2e3,value_edit_es:2e3,destination:"Cusco",status:"available",region:"Latin America"},{id:64568,country:"Mexico",value:2100,value_pt:2100,value_en:2100,value_ru:2100,value_es:2100,value_edit_pt:2100,value_edit_en:2100,value_edit_ru:2100,value_edit_es:2100,destination:"Mexico City",status:"available",region:"Latin America"},{id:75456,country:"Ireland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Cork",status:"reserved",region:"British Isle"},{id:23445,country:"South Africa",value:1900,value_pt:1900,value_en:1900,value_ru:1900,value_es:1900,value_edit_pt:1900,value_edit_en:1900,value_edit_ru:1900,value_edit_es:1900,destination:"Cape Town",status:"available",region:"Southern Africa"},{id:19238,country:"Australia",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Sydney",status:"reserved",region:"Australasia"},{id:85456,country:"Japan",value:5900,value_pt:5900,value_en:5900,value_ru:5900,value_es:5900,value_edit_pt:5900,value_edit_en:5900,value_edit_ru:5900,value_edit_es:5900,destination:"Tokio",status:"available",region:"East Asia"},{id:94565,country:"China",value:2900,value_pt:2900,value_en:2900,value_ru:2900,value_es:2900,value_edit_pt:2900,value_edit_en:2900,value_edit_ru:2900,value_edit_es:2900,destination:"Beijing",status:"available",region:"East Asia"},{id:32330,country:"England",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"London",status:"available",region:"British Isle"},{id:14560,country:"Canada",value:2090.5,value_pt:2090.5,value_en:2090.5,value_ru:2090.5,value_es:2090.5,value_edit_pt:2090.5,value_edit_en:2090.5,value_edit_ru:2090.5,value_edit_es:2090.5,destination:"Quebec",status:"available",region:"North America"},{id:93800,country:"Iceland",value:6300,value_pt:6300,value_en:6300,value_ru:6300,value_es:6300,value_edit_pt:6300,value_edit_en:6300,value_edit_ru:6300,value_edit_es:6300,destination:"Reykjav\xEDk",status:"available",region:"Nordics"},{id:34239,country:"Germany",value:3070.5,value_pt:3070.5,value_en:3070.5,value_ru:3070.5,value_es:3070.5,value_edit_pt:3070.5,value_edit_en:3070.5,value_edit_ru:3070.5,value_edit_es:3070.5,destination:"Berlin",status:"available",region:"Danube"},{id:45611,country:"Argentina",value:3500.5,value_pt:3500.5,value_en:3500.5,value_ru:3500.5,value_es:3500.5,value_edit_pt:3500.5,value_edit_en:3500.5,value_edit_ru:3500.5,value_edit_es:3500.5,destination:"Ushuaia",status:"reserved",region:"Latin America"}],this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"status",label:"Status",type:"label",labels:[{value:"available",color:"color-11",label:"Available"},{value:"reserved",color:"color-08",label:"Reserved"},{value:"closed",color:"color-07",label:"Closed"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"available",label:"Available"},{value:"reserved",label:"Reserved"},{value:"closed",label:"Closed"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}},{property:"region",label:"Region",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe a regi\xE3o referida.",keydown:this.onKeyDown.bind(this,"region")}},{property:"country",label:"Country",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o pa\xEDs referido.",keydown:this.onKeyDown.bind(this,"country")}},{property:"destination",label:"Destination",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o destino dentro do pa\xEDs informado.",keydown:this.onKeyDown.bind(this,"destination")}},{property:"value",label:"Value",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_en",label:"Value (en)",type:"currency",format:"USD",width:220,locale:"en",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_pt",label:"Value (pt)",type:"currency",format:"USD",width:220,locale:"pt",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_ru",label:"Value (ru)",type:"currency",format:"USD",width:220,locale:"ru",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_es",label:"Value (es)",type:"currency",format:"USD",width:220,locale:"es",editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3}},{property:"value_edit_en",label:"Value Edit (en)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"en"}},{property:"value_edit_pt",label:"Value Edit (pt)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"pt"}},{property:"value_edit_ru",label:"Value Edit (ru)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"ru"}},{property:"value_edit_es",label:"Value Edit (es)",type:"currency",format:"USD",width:220,editProperties:{componentEditable:"decimal",required:!0,errorMessage:"Obrigat\xF3rio",decimalsLength:3,locale:"es"}}],this.aggregatesDescriptor=[{field:"value",aggregate:"sum",label:"Total"},{field:"value_en",aggregate:"sum",label:"Total (en)"},{field:"value_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_es",aggregate:"sum",label:"Total (es)"},{field:"value_edit_en",aggregate:"sum",label:"Total (en)"},{field:"value_edit_pt",aggregate:"sum",label:"Total (pt)"},{field:"value_edit_ru",aggregate:"sum",label:"Total (ru)"},{field:"value_edit_es",aggregate:"sum",label:"Total (es)"}],this.itemsUpdated=[],this.lineActions=[{label:"Detalhes",action:r=>{this.poNotificationService.success("Item "+r.id+" com destino a "+r.destination+" no valor de "+r.value)},icon:"ICON_INFO"}],this.customBulkActions=[{label:"Editar selecionados (custom action)",action:this.editSelected.bind(this)},{label:"Excluir selecionados (custom action)",action:this.bulkDelete.bind(this)}],this.editColumnsFilter=[],this.editColumnsFilterValues=[],this.bulkEditModalConfirm={label:"Confirmar",action:this.bulkEdit.bind(this)}}ngOnInit(){this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!1,actionEdit:(o,r)=>(r==="include"&&!o.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,o.id=o.$uuidThfIncluded,o.dependents=[],this.currentIdItem=o.id),new B({status:new S(o.status,[I.min(1)]),region:new S(o.region,[I.required]),country:new S(o.country,[I.required]),destination:new S(o.destination,[I.required]),value:new S(o.value,[I.required]),value_en:new S(o.value_en,[I.required]),value_pt:new S(o.value_pt,[I.required]),value_ru:new S(o.value_ru,[I.required]),value_es:new S(o.value_es,[I.required]),value_edit_en:new S(o.value_edit_en,[I.required]),value_edit_pt:new S(o.value_edit_pt,[I.required]),value_edit_ru:new S(o.value_edit_ru,[I.required]),value_edit_es:new S(o.value_edit_es,[I.required])})),afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onAfterSave(o){console.log("onAfterSave(new): ",o)}onBeforeSave(o,r){return console.log("before new value: ",o),console.log("before old value: ",r),!0}onBeforeSaveSubItems(o,r){return console.log("before new value: ",o),console.log("before old value: ",r),!0}onBeforeInsert(o){return console.log("before insert new value: ",o),this.disabledIncludeButton=!1,this.itemsUpdated=[...this.itemsUpdated,o],!0}onBeforeInsertSubItems(o){o.id=o.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,o]:[o],!0}onBeforeRemove(o){return!0}onAfterRemove(o){return console.log("afterRemove: ",o),!0}getChangedItems(){return this.thfGrid?.getChangedItems()||[]}getLabelChangedItems(){return JSON.stringify(this.thfGrid?.getChangedItems()||[],null,2)}finishEditMode(){this.thfGrid.cleanRowActionsMode()}onKeyDown(o,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(o)}editSelected(){let o=this.columnWithItems.filter(r=>["status","value"].includes(r.property));this.editColumnsFilter=o.map(r=>({label:r.label,value:r.property,property:r.property,valueModel:"",required:r.editProperties?.required,editProperties:r.editProperties})),this.bulkEditModal.open()}bulkEdit(){let o=this.thfGrid.getSelectedRows(),r=this.editColumnsFilter.filter(n=>this.editColumnsFilterValues.includes(n.property)).filter(n=>n.valueModel!=="");for(let n of r){for(let l of o)l[n.property]=n.valueModel,l.$edited=!0,this.thfGrid.updateItem(l,l),this.thfGrid.unselectRowItem(l);n.valueModel=""}this.editColumnsFilterValues=[],this.bulkEditModal.close()}bulkDelete(){let o=this.thfGrid.getSelectedRows();for(let r of o)r.$removed=!0,this.thfGrid.updateItem(r,r),this.thfGrid.unselectRowItem(r);this.poNotificationService.success("Itens exclu\xEDdos com sucesso!")}static{this.\u0275fac=function(r){return new(r||d)(R(he))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-editing-fluid-currency-doc"]],viewQuery:function(r,n){if(r&1&&(D(un,7),D(En,5),D(xn,7)),r&2){let l;A(l=_())&&(n.poModal=l.first),A(l=_())&&(n.thfGrid=l.first),A(l=_())&&(n.bulkEditModal=l.first)}},standalone:!1,decls:18,vars:20,consts:[["gridComponent",""],["modal",""],["bulkEditModal",""],[1,"po-font-text-large-bold"],[1,"po-row","po-mb-2"],["p-label","Finaliza modo edi\xE7\xE3o",1,"po-mr-2",3,"p-click"],["p-label","Get itens alterados",3,"p-click","p-disabled"],[3,"t-height","t-selectable","t-items","t-columns","t-grid-row-actions","t-aggregates","t-show-footer-aggregates","t-actions","t-actions-right","t-sortable","t-action-pdf","t-action-excel","t-custom-actions"],["p-title","Itens que foram alterados"],["class","code",4,"ngIf"],["p-title","Edi\xE7\xE3o em lote (a\xE7\xE3o customizada)",3,"p-primary-action"],["name","editColumnsFilterValues","p-label","Propriedades para Editar",3,"ngModelChange","ngModel","p-options"],[3,"htmlCode","tsCode"],[1,"code"],[4,"ngIf"],[3,"p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"p-label","ngModel","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-options","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-decimals-length","p-required","p-placeholder","p-disabled"],[3,"ngModelChange","p-label","ngModel","p-required","p-placeholder","p-disabled"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",3),e(2,"Edi\xE7\xE3o Flu\xEDda com Casas Decimais e A\xE7\xF5es em Lote"),t(),a(3,"po-divider"),i(4,"div",4)(5,"po-button",5),y("p-click",function(){return p(l),c(n.finishEditMode())}),t(),i(6,"po-button",6),y("p-click",function(){return p(l),c(n.poModal.open())}),t()(),a(7,"thf-grid",7,0),i(9,"po-modal",8,1),L(11,bn,3,1,"div",9),t(),i(12,"po-modal",10,2)(14,"po-multiselect",11),f("ngModelChange",function(g){return p(l),h(n.editColumnsFilterValues,g)||(n.editColumnsFilterValues=g),c(g)}),t(),Ke(15,yn,1,1,"ng-container",null,Sn),t(),a(17,"app-code-accordion-doc",12),t()}if(r&2){let l,E;m(6),s("p-disabled",((l=n.getChangedItems())==null?null:l.length)===0),m(),s("t-height",400)("t-selectable",!0)("t-items",n.items)("t-columns",n.columnWithItems)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-aggregates",n.aggregatesDescriptor)("t-show-footer-aggregates",!0)("t-actions",n.lineActions)("t-actions-right",!0)("t-sortable",!0)("t-action-pdf",!0)("t-action-excel",!0)("t-custom-actions",n.customBulkActions),m(4),s("ngIf",(E=n.getChangedItems())==null?null:E.length),m(),s("p-primary-action",n.bulkEditModalConfirm),m(2),b("ngModel",n.editColumnsFilterValues),s("p-options",n.editColumnsFilter),m(),$e(n.editColumnsFilter),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Se,Q,W,H,v,C,ft,vt,le,qe,_e,M,P],encapsulation:2})}}return d})();var Bt=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
  [t-items]="products"
  [t-columns]="columns"
  [t-grid-row-actions]="gridRowActions"
  [t-auto-size]="true"
  [t-actions-right]="true"
/>`,this.tsCode=`import { Component } from '@angular/core';
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
export class ThfGridEditingInlineDocComponent {
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
}`,this.products=[{id:1,status:{value:"active",label:"Ativo"},name:"Smartphone",price:999.99,discount:0},{id:2,status:{value:"inactive",label:"Inativo"},name:"Tablet",price:499.99,discount:50},{id:3,status:{value:"active",label:"Ativo"},name:"Office Chair",price:299.99,discount:10}],this.columns=[{property:"id",label:"ID",editProperties:{disabled:!0}},{property:"status",label:"Status",editProperties:{componentEditable:"combo",options:[{value:"active",label:"Ativo"},{value:"inactive",label:"Inativo"}],fieldLabel:"label",fieldValue:"value",removeInitialFilter:!0,controlValueWithLabel:!0}},{property:"name",label:"Nome do Produto",editProperties:{readonly:o=>o.status==="inactive"}},{property:"price",label:"Pre\xE7o",editProperties:{readonly:!0}},{property:"discount",label:"Desconto (%)",editProperties:{disabled:o=>o.status==="inactive"}}],this.gridRowActions={title:"Produtos",actionEdit:this.onEdit.bind(this),validateField:this.onValidate.bind(this)}}onEdit(o,r){return console.log("Editando produto:",o,"Modo:",r),this.editForm=new B({id:new S(o.id),name:new S(o.name),price:new S(o.price),discount:new S(o.discount),status:new S(o.status)}),this.editForm}onValidate(o,r){return console.log("onValidateField:",o,r),!0}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-dynamic-properties"]],standalone:!1,decls:6,vars:7,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-items","t-columns","t-grid-row-actions","t-auto-size","t-actions-right"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Edi\xE7\xE3o com Propriedades din\xE2micas"),t(),a(3,"po-divider",1)(4,"thf-grid",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-items",n.products)("t-columns",n.columns)("t-grid-row-actions",n.gridRowActions)("t-auto-size",!0)("t-actions-right",!0),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,C,M,P],encapsulation:2})}}return d})();var Tn=["gridComponent"],Ht=(()=>{class d{constructor(){this.htmlCode=`<thf-grid
      #gridComponent
      t-spacing="extraSmall"
      t-components-size="small"
      [t-columns]="columnWithItems"a
      [t-items]="items"
      [t-height]="500"
      [t-page-size-virtual]="20"
      [t-virtual-scroll]="true"
      [t-resizable]="true"
      [t-auto-size]="true"
      [t-auto-size-on-scroll]="true"
    />`,this.tsCode=`import { Component, OnInit, ViewChild } from '@angular/core';
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
    for (let i = 1; i <= 600; i++) {
      const prop = 'property' + i;
      this.columnWithItems.push({
        property: prop,
        label: 'Dynamic' + i,
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
        name: baseItem.name +  i,
      };
      for (let j = 1; j <= 600; j++) {
        newItem['property'+j] = 'Valor'+j;
      }

      itemsUpdatedNew.push(newItem);
    }

    this.items = itemsUpdatedNew;
  }
}`,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"values",label:"Values"},{property:"number",label:"Number",type:"number"},{property:"datepicker",label:"datepicker"},{property:"otherStatus",label:"Outro Status"},{property:"select",label:"select"},{property:"switch",label:"switch"},{property:"decimal",label:"decimal",type:"currency"},{property:"checkbox",label:"checkbox"},{property:"valuesx",label:"Valuesx"}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}]}ngOnInit(){let o=[],r=this.items[0];for(let n=1;n<=100;n++){let l=Date.now()+n,E=N(O({},r),{id:l+n,name:`${r.name} ${n}${n}`});o.push(E)}this.items=o}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-auto-fit-scroll"]],viewQuery:function(r,n){if(r&1&&D(Tn,5),r&2){let l;A(l=_())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:10,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","extraSmall","t-components-size","small",3,"t-columns","t-items","t-height","t-page-size-virtual","t-virtual-scroll","t-resizable","t-auto-size","t-auto-size-on-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando auto-size e auto-fit-on-scroll"),t(),a(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-columns",n.columnWithItems)("t-items",n.items)("t-height",500)("t-page-size-virtual",20)("t-virtual-scroll",!0)("t-resizable",!0)("t-auto-size",!0)("t-auto-size-on-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,C,M,P],encapsulation:2})}}return d})();var Ut=`<thf-splitter [t-disabled]="true">
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
      [t-selectable-entire-line]="true"
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
</thf-splitter>`,Wt=`import { Component, ViewChild } from '@angular/core';
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
`;var Dn=["mainGrid"],An=["childGrid"],_n=()=>[],Kt=(()=>{class d{constructor(o){this.notificationService=o,this.htmlCode=Ut,this.tsCode=Wt,this.mainGridTitle="Equipes (Tabela Pai)",this.childGridTitle="Her\xF3is (Tabela Filha)",this.disabledIncludeButton=!1,this.mainGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da equipe"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"color-11",label:"Ativo"},{value:"em-missao",color:"color-09",label:"Em miss\xE3o"},{value:"inativo",color:"color-06",label:"Inativo"},{value:"ferido",color:"color-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.mainGridItems=[{id:1,name:"Vingadores",status:"ativo",heroes:[{id:11,name:"Homem de Ferro",status:"ativo"},{id:12,name:"Capit\xE3o Am\xE9rica",status:"em-missao"},{id:13,name:"Thor",status:"ativo"}]},{id:2,name:"X-man",status:"em-missao",heroes:[{id:21,name:"Wolverine",status:"ativo"},{id:22,name:"Ciclope",status:"reserva"},{id:23,name:"Jean Grey",status:"ferido"}]},{id:3,name:"Jovens Tit\xE3s",status:"ativo",heroes:[{id:30,name:"Ciborgue",status:"ativo"},{id:31,name:"Estelar",status:"ativo"},{id:32,name:"Mutano",status:"ativo"},{id:33,name:"Ravena",status:"reserva"},{id:34,name:"Robin",status:"ativo"}]},{id:4,name:"Liga da Justi\xE7a",status:"ativo",heroes:[{id:41,name:"Superman",status:"ativo"},{id:42,name:"Batman",status:"reserva"},{id:43,name:"Mulher Maravilha",status:"em-missao"}]}],this.mainGridItemsUpdated=[],this.childGridColumns=[{property:"id",label:"id",editProperties:{disabled:!0},width:"100px"},{property:"name",label:"Nome",editProperties:{required:!0,errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,componentEditable:"input",helper:"Informe o nome da empresa"}},{property:"status",label:"Status",type:"label",labels:[{value:"ativo",color:"color-11",label:"Ativo"},{value:"em-missao",color:"color-09",label:"Em miss\xE3o"},{value:"reserva",color:"color-08",label:"Reserva"},{value:"inativo",color:"color-06",label:"Inativo"},{value:"ferido",color:"color-07",label:"Ferido"}],editProperties:{componentEditable:"combo",disabledInitFilter:!0,options:[{value:"ativo",label:"Ativo"},{value:"em-missao",label:"Em miss\xE3o"},{value:"reserva",label:"Reserva"},{value:"inativo",label:"Inativo"},{value:"ferido",label:"Ferido"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value"}}],this.childGridItemsUpdated=[],this.childGridDisabledIncludeButton=!0}ngOnInit(){this.mainGridRowsActions={title:this.mainGridTitle,hiddenGrid:!1,actionEdit:(o,r)=>(r==="include"&&!o.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,o.id=o.$uuidThfIncluded,o.heroes=[],this.currentIdItem=o.id),new B({name:new S(o.name,[I.required]),status:new S(o.status,[I.min(1)])})),afterRemove:this.afterRemoveMainGrid.bind(this),afterUndoRemove:this.afterUndoRemoveMainGrid.bind(this)},this.mainGridItemsUpdated=[...this.mainGridItems],this.childGridRowsActions={title:this.childGridTitle,hiddenGrid:!1,actionEdit:(o,r)=>(r==="include"&&!o.id&&(console.log("mode: ",r),this.disabledIncludeButton=!0,o.id=o.$uuidThfIncluded,o.heroes=[],this.currentIdItem=o.id),new B({name:new S(o.name,[I.required]),status:new S(o.status,[I.min(1)])})),change:this.changeChildGrid.bind(this),beforeUndoRemove:this.beforeUndoRemoveChildGrid.bind(this),afterRemove:this.afterRemoveChildGrid.bind(this),afterUndoRemove:this.afterUndoRemoveChildGrid.bind(this)},this.childGridItemsUpdated=[]}handleMainGridSelection(o){console.log("Selected item from main grid: ",o),this.mainGridSelectedItem=o,this.mainGridSelectedItemIndex=this.mainGridItems.findIndex(r=>r.id===o.id),this.childGridItemsUpdated=o.heroes?[...o.heroes]:[],this.childGridDisabledIncludeButton=!!o.$removed,this.childGridRowsActions.title=this.childGridTitle+" - "+o.name,o.$removed?this.childGrid.setRowStateFilter("removed",!1,!1):this.childGrid.setRowStateFilter("active",!1,!1)}handleMainGridUnselection(o){console.log("Unselected item from main grid: ",o),this.mainGridSelectedItem={id:null,heroes:[]},this.mainGridSelectedItemIndex=void 0,this.childGridItemsUpdated=[],this.childGridDisabledIncludeButton=!0,this.childGridRowsActions.title=this.childGridTitle}afterRemoveMainGrid(o){console.log("Removed item from main grid: ",o),o.status="inativo",o.heroes.forEach(r=>{r.$removed=!0,r.status="inativo",this.childGrid.updateItem(r,r)})}afterUndoRemoveMainGrid(o){console.log("Undo removed item from main grid: ",o),o.status="ativo",o.heroes.forEach(r=>{r.$removed=!1,r.status="ativo",this.childGrid.updateItem(r,r)})}beforeUndoRemoveChildGrid(o){return console.log("Before undo remove item from child grid: ",o),this.mainGridItems.find(n=>n.heroes.includes(o))?.$removed?(this.notificationService.warning("N\xE3o \xE9 poss\xEDvel desfazer a remo\xE7\xE3o de um her\xF3i de um time inativo."),!1):!0}afterRemoveChildGrid(o){console.log("Removed item from child grid: ",o),o.status="inativo",this.childGrid.updateItem(o,o)}afterUndoRemoveChildGrid(o){console.log("Undo removed item from child grid: ",o),o.status="ativo",this.childGrid.updateItem(o,o)}changeChildGrid(o){console.log("Child grid change event: ",o)}onMainGridRowStateFilter(o){this.mainGridSelectedItem!==void 0&&(o==="active"&&!this.mainGridSelectedItem?.$removed||o==="removed"&&this.mainGridSelectedItem?.$removed)&&this.mainGrid.selectRowItem(this.mainGridSelectedItem),this.childGrid.setRowStateFilter(o,!1,!1)}static{this.\u0275fac=function(r){return new(r||d)(R(he))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-parent-detail-editing-doc"]],viewQuery:function(r,n){if(r&1&&(D(Dn,5),D(An,5)),r&2){let l;A(l=_())&&(n.mainGrid=l.first),A(l=_())&&(n.childGrid=l.first)}},standalone:!1,decls:12,vars:21,consts:[["mainGrid",""],["childGrid",""],[1,"po-font-text-large-bold"],[3,"t-disabled"],[3,"t-selected","t-unselected","t-change-row-state-filter","t-items","t-columns","t-grid-row-actions","t-actions-right","t-selectable","t-single-select","t-selectable-removed","t-selectable-entire-line","t-height"],[3,"t-items","t-columns","t-grid-row-actions","t-disabled-include-button","t-actions-right","t-selectable","t-single-select","t-height"],[3,"htmlCode","tsCode"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",2),e(2,"Edi\xE7\xE3o Flu\xEDda em Grade (Pai-Filha)"),t(),a(3,"po-divider"),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"thf-grid",4,0),y("t-selected",function(g){return p(l),c(n.handleMainGridSelection(g))})("t-unselected",function(g){return p(l),c(n.handleMainGridUnselection(g))})("t-change-row-state-filter",function(g){return p(l),c(n.onMainGridRowStateFilter(g))}),t()(),i(8,"thf-splitter-pane"),a(9,"thf-grid",5,1),t()(),a(11,"app-code-accordion-doc",6),t()}r&2&&(m(4),s("t-disabled",!0),m(2),s("t-items",n.mainGridItems)("t-columns",n.mainGridColumns)("t-grid-row-actions",n.mainGridRowsActions)("t-actions-right",!0)("t-selectable",!0)("t-single-select",!0)("t-selectable-removed",!0)("t-selectable-entire-line",!0)("t-height",320),m(3),s("t-items",n.mainGridSelectedItemIndex!==void 0?n.mainGridItems[n.mainGridSelectedItemIndex].heroes:$(20,_n))("t-columns",n.childGridColumns)("t-grid-row-actions",n.childGridRowsActions)("t-disabled-include-button",n.childGridDisabledIncludeButton)("t-actions-right",!0)("t-selectable",!1)("t-single-select",!1)("t-height",320),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,C,M,ie,te,P],encapsulation:2})}}return d})();var $t=`<thf-grid
  #gridComponent
  t-spacing="small"
  [t-selectable]="true"
  [t-single-select]="true"
  [t-columns]="columnWithItems"
  [t-items]="items"
  [t-grid-row-actions]="gridRowsActionsWithItems"
  [t-actions-right]="true"
  [t-auto-size]="false"
  [t-height]="500"
  [t-virtual-columns]="true"
  [t-virtual-scroll]="true"
/>`,Jt=`import { Component, OnInit, ViewChild } from '@angular/core';
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
      editProperties: { disabled: true },
    },
    {
      property: 'name',
      label: 'Nome',
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
      type: 'label',
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
      editProperties: {
        componentEditable: 'decimal',
        helper: 'Informe pelo menos o primeiro nome.',
        help: 'Input text',
      },
    },
    {
      property: 'checkbox',
      label: 'checkbox',
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

    this.items = itemsUpdatedNew;

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
`;var qn=["gridComponent"],Zt=(()=>{class d{constructor(){this.htmlCode=$t,this.tsCode=Jt,this.columnWithItems=[{property:"id",label:"id",editProperties:{disabled:!0}},{property:"name",label:"Nome",editProperties:{required:!0,componentEditable:"input",errorMessage:"Obrigat\xF3rio",requiredFieldErrorMessage:!0,helper:"Informe pelo menos o primeiro nome.",help:"Input text",keydown:this.onKeyDown.bind(this,"name")}},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}],editProperties:{componentEditable:"combo",required:!0,disabledInitFilter:!0,options:[{value:1,label:"Ativo"},{value:2,label:"Inativo"},{value:0,label:"Other"}],removeInitialFilter:!0,fieldLabel:"label",fieldValue:"value",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"values",label:"Values",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!1,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"values"),controlValueWithLabel:!0}},{property:"number",label:"Number",type:"number",editProperties:{componentEditable:"number",errorMessage:"Number \xE9 obrigat\xF3rio",help:"Input number",helper:"Digite um n\xFAmero aqui"}},{property:"datepicker",label:"datepicker",editProperties:{componentEditable:"datepicker",errorMessage:"Datepicker \xE9 obrigat\xF3rio",help:"Entre com a data",helper:"Valor do tipo date"}},{property:"otherStatus",label:"Outro Status",editProperties:{componentEditable:"multiselect",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],fieldLabel:"label",fieldValue:"value",errorMessage:"Obrigat\xF3rio",helper:"Marque um ou mais status, conforme necess\xE1rio.",help:"status",keydown:this.onKeyDown.bind(this,"otherStatus"),controlValueWithLabel:!0}},{property:"select",label:"select",editProperties:{componentEditable:"select",options:[{value:123,label:"Ativo"},{value:233,label:"Inativo"},{value:3,label:"Other"}],errorMessage:"select \xE9 obrigat\xF3rio",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"switch",label:"switch",editProperties:{componentEditable:"switch",hideLabelStatus:!1,helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"decimal",label:"decimal",type:"currency",editProperties:{componentEditable:"decimal",helper:"Informe pelo menos o primeiro nome.",help:"Input text"}},{property:"checkbox",label:"checkbox",editProperties:{componentEditable:"checkbox",disabled:!1,help:"lorem impsum",helper:" ok ok ok"}},{property:"valuesx",label:"Valuesx",editProperties:{componentEditable:"lookup",searchService:"https://po-sample-api.onrender.com/v1/heroes",fieldValue:"value",fieldLabel:"label",multiple:!0,required:!0,errorMessage:"Obrigat\xF3rio",helper:"Digite o nome para filtrar ou use a busca avan\xE7ada para selecionar valores.",help:"Input lookup",keydown:this.onKeyDown.bind(this,"valuesx"),controlValueWithLabel:!0}}],this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",status:1,values:[1495831666871],valuesx:[1495831666871],otherStatus:[233],number:1,datepicker:"1980-11-01",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",status:2,values:[1495831698598],valuesx:[1495831698598],otherStatus:[233],number:2,datepicker:"1980-11-02",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,values:[1495832652942],valuesx:[1495832652942],otherStatus:[3],number:3,datepicker:"1980-11-03",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,values:[1495832683682],valuesx:[1495832683682],otherStatus:[3],number:4,datepicker:"1980-11-04",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,values:[1495833068596],valuesx:[1495833068596],otherStatus:[233],number:5,datepicker:"1980-11-05",select:"3",switch:!0,decimal:123.45,checkbox:!0},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,values:[1495833068597],valuesx:[1495833068597],otherStatus:[233],number:6,datepicker:"1980-11-06",select:"3",switch:!0,decimal:123.45,checkbox:!0}],this.itemsUpdated=[]}ngOnInit(){this.editProperties={actionEdit:this.setFormGroup.bind(this)};for(let n=1;n<=600;n++){let l=`property${n}`;this.columnWithItems.push({property:l,label:`Dynamic ${n}`,editProperties:{disabled:!1}})}let o=[],r=this.items[0];for(let n=1;n<=1e4;n++){let l=Date.now()+n,E=N(O({},r),{id:l+n,name:`${r.name} ${n}`});for(let g=1;g<=600;g++)E[`property${g}`]=`Valor ${g}`;o.push(E)}this.items=o,this.gridRowsActionsWithItems={title:"Items",hiddenGrid:!0,actionEdit:(n,l)=>{l==="include"&&!n.id&&(console.log("mode: ",l),n.id=n.$uuidThfIncluded,n.dependents=[],this.currentIdItem=n.id);let E={name:new S(n.name),status:new S(n.status,[I.min(1)]),values:new S(n.values,[I.required]),valuesx:new S(n.values,[I.required]),otherStatus:new S(n.otherStatus),number:new S(n.number),datepicker:new S(n.datepicker),select:new S(n.select),switch:new S(n.switch),decimal:new S(n.decimal),checkbox:new S(n.checkbox)};for(let g=1;g<=600;g++)E[`property${g}`]=new S(n[`property${g}`]);return this.form=new B(E),this.form},afterSave:this.onAfterSave.bind(this),beforeSave:this.onBeforeSave.bind(this),beforeInsert:this.onBeforeInsert.bind(this),beforeRemove:this.onBeforeRemove.bind(this),afterRemove:this.onAfterRemove.bind(this)},this.itemsUpdated=[...this.items]}onKeyDown(o,r){r.code==="F9"&&this.thfGrid.showAdditionalHelp(o)}onBeforeSave(o,r){return console.log("before new value: ",o),console.log("before old value: ",r),!0}onBeforeSaveSubItems(o,r){return console.log("before new value: ",o),console.log("before old value: ",r),!0}onBeforeInsert(o){return console.log("before insert new value: ",o),this.itemsUpdated=[...this.itemsUpdated,o],!0}onBeforeInsertSubItems(o){o.id=o.$uuidThfIncluded;let r=this.itemsUpdated.find(n=>n.id===this.currentIdItem);return r.dependents=r.dependents?[...r.dependents,o]:[o],!0}onBeforeRemove(o){return!0}onAfterSave(o){console.log("onAfterSave(new): ",o)}onAfterRemove(o){return console.log("afterRemove: ",o),!0}setFormGroup(o){return this.form=new B({id:new S(o.id,[I.required]),name:new S(o.name),city:new S(o.city),birthdate:new S(o.birthdate),status:new S(o.status),email:new S(o.email)}),this.form}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid-virtual-doc"]],viewQuery:function(r,n){if(r&1&&D(qn,5),r&2){let l;A(l=_())&&(n.thfGrid=l.first)}},standalone:!1,decls:7,vars:12,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],["t-spacing","small",3,"t-selectable","t-single-select","t-columns","t-items","t-grid-row-actions","t-actions-right","t-auto-size","t-height","t-virtual-columns","t-virtual-scroll"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",1),e(2,"Grid utilizando virtual-columns e virtual-scroll"),t(),a(3,"po-divider",2)(4,"thf-grid",3,0)(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("t-selectable",!0)("t-single-select",!0)("t-columns",n.columnWithItems)("t-items",n.items)("t-grid-row-actions",n.gridRowsActionsWithItems)("t-actions-right",!0)("t-auto-size",!1)("t-height",500)("t-virtual-columns",!0)("t-virtual-scroll",!0),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,C,M,P],encapsulation:2})}}return d})();var Xt=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-grid"]],standalone:!1,decls:15,vars:0,consts:[["p-title","THF-Grid","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview","",1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-grid")(2,"div",1),a(3,"app-thf-grid-basic-doc")(4,"app-thf-grid-editing-inline-doc")(5,"app-thf-grid-row-actions-doc")(6,"app-thf-grid-aggregates-doc")(7,"app-thf-grid-editing-fluid-currency-doc")(8,"app-thf-grid-delete-service-doc")(9,"app-thf-grid-virtual-doc")(10,"app-thf-grid-dynamic-properties")(11,"app-thf-grid-auto-fit-scroll")(12,"app-thf-grid-parent-detail-editing-doc"),t(),i(13,"div",2),a(14,"app-thf-grid-labs-doc"),t()()())},dependencies:[Y,wt,It,Lt,Mt,Rt,Vt,Ot,Qt,Bt,Ht,Kt,Zt],encapsulation:2})}}return d})();function In(d,w){if(d&1){let o=F();i(0,"div",7)(1,"po-container",8)(2,"po-input",9),f("ngModelChange",function(n){p(o);let l=u();return h(l.label,n)||(l.label=n),c(n)}),t(),i(3,"po-input",10),f("ngModelChange",function(n){p(o);let l=u();return h(l.help,n)||(l.help=n),c(n)}),t(),i(4,"po-input",11),f("ngModelChange",function(n){p(o);let l=u();return h(l.helperText,n)||(l.helperText=n),c(n)}),t(),i(5,"po-input",12),f("ngModelChange",function(n){p(o);let l=u();return h(l.placeholder,n)||(l.placeholder=n),c(n)}),t(),i(6,"po-input",13),f("ngModelChange",function(n){p(o);let l=u();return h(l.fieldErrorMessage,n)||(l.fieldErrorMessage=n),c(n)}),t(),i(7,"po-select",14),f("ngModelChange",function(n){p(o);let l=u();return h(l.fieldLabel,n)||(l.fieldLabel=n),c(n)}),t(),i(8,"po-select",15),f("ngModelChange",function(n){p(o);let l=u();return h(l.fieldValue,n)||(l.fieldValue=n),c(n)}),t(),i(9,"po-input",16),f("ngModelChange",function(n){p(o);let l=u();return h(l.fieldFormat,n)||(l.fieldFormat=n),c(n)}),y("p-change",function(n){p(o);let l=u();return c(l.onFieldFormatChange(n))}),t()(),i(10,"po-container",8)(11,"po-checkbox-group",17),f("ngModelChange",function(n){p(o);let l=u();return h(l.columnsName,n)||(l.columnsName=n),c(n)}),y("p-change",function(){p(o);let n=u();return c(n.updateColumns())}),t(),i(12,"po-checkbox-group",18),f("ngModelChange",function(n){p(o);let l=u();return h(l.gridPropertiesName,n)||(l.gridPropertiesName=n),c(n)}),y("p-change",function(){p(o);let n=u();return c(n.updateGridProperties())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),f("ngModelChange",function(n){p(o);let l=u();return h(l.otherProperties,n)||(l.otherProperties=n),c(n)}),y("p-change",function(){p(o);let n=u();return c(n.changeOtherPropertiesOptions())}),t()(),i(15,"po-container",8)(16,"po-radio-group",20),f("ngModelChange",function(n){p(o);let l=u();return h(l.lookupModalSize,n)||(l.lookupModalSize=n),c(n)}),t(),i(17,"po-radio-group",21),f("ngModelChange",function(n){p(o);let l=u();return h(l.searchOnEnter,n)||(l.searchOnEnter=n),c(n)}),t()(),i(18,"po-container",8)(19,"po-radio-group",22),f("ngModelChange",function(n){p(o);let l=u();return h(l.size,n)||(l.size=n),c(n)}),t(),i(20,"po-textarea",23),f("ngModelChange",function(n){p(o);let l=u();return h(l.literals,n)||(l.literals=n),c(n)}),y("p-change-model",function(){p(o);let n=u();return c(n.changeLiterals())}),t(),i(21,"po-textarea",24),f("ngModelChange",function(n){p(o);let l=u();return h(l.filterSearchSelect,n)||(l.filterSearchSelect=n),c(n)}),y("p-change-model",function(){p(o);let n=u();return c(n.changeFilterSearchSelects())}),t(),i(22,"po-textarea",25),f("ngModelChange",function(n){p(o);let l=u();return h(l.keysLabel,n)||(l.keysLabel=n),c(n)}),y("p-change-model",function(){p(o);let n=u();return c(n.changeKeysLabel())}),t()()(),i(23,"div",26)(24,"po-button",27),y("p-click",function(){p(o);let n=u();return c(n.restore())}),t()()}if(d&2){let o=u();m(2),b("ngModel",o.label),m(),b("ngModel",o.help),m(),b("ngModel",o.helperText),m(),b("ngModel",o.placeholder),m(),b("ngModel",o.fieldErrorMessage),m(),b("ngModel",o.fieldLabel),s("p-options",o.fieldLabelOptions),m(),b("ngModel",o.fieldValue),s("p-options",o.fieldValueOptions),m(),b("ngModel",o.fieldFormat),m(2),b("ngModel",o.columnsName),s("p-columns",4)("p-options",o.columnsOptions),m(),b("ngModel",o.gridPropertiesName),s("p-columns",4)("p-options",o.gridPropertiesOptions),m(2),s("p-columns",4)("p-options",o.otherPropertiesOptions),b("ngModel",o.otherProperties),m(2),s("p-columns",3)("p-options",o.lookupModalSizeOptions),b("ngModel",o.lookupModalSize),m(),b("ngModel",o.searchOnEnter),s("p-options",o.searchOnEnterOptions),m(2),b("ngModel",o.size),s("p-options",o.sizesOptions),m(),b("ngModel",o.literals),m(),b("ngModel",o.filterSearchSelect),m(),b("ngModel",o.keysLabel)}}var Yt=(()=>{class d{constructor(){this.htmlCode=`<po-container>
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
  `,this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.fieldErrorMessage="",this.otherProperties=[],this.placeholder="",this.lookupModalSize="lg",this.size="medium",this.searchOnEnter="equal",this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.lookupModalSizeOptions=[{label:"sm",value:"sm"},{label:"md",value:"md"},{label:"lg",value:"lg"},{label:"xl",value:"xl"},{label:"auto",value:"auto"}],this.otherPropertiesOptions=[{label:"Auto Height",value:"autoHeight"},{label:"Clean",value:"clean",disabled:!1},{label:"Disabled",value:"disabled"},{label:"Multiple",value:"multiple"},{label:"No Autocomplete",value:"noAutoComplete"},{label:"Optional",value:"optional",disabled:!1},{label:"Required",value:"required"},{label:"Show Required",value:"showRequired",disabled:!0},{value:"fieldErrorLimit",label:"Limit Error Message"},{value:"labelTextWrap",label:"Label Text Wrap"},{value:"loading",label:"Loading"}],this.searchOnEnterOptions=[{label:"equal",value:"equal"},{label:"include",value:"include"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.gridPropertiesOptions=[{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.columnsDefinition={id:{property:"id",label:"Id"},name:{property:"name",label:"Nome"},nickname:{property:"nickname",label:"Apelido"},email:{property:"email",label:"E-mail"}}}ngOnInit(){this.restore()}changeEvent(o){this.event=o}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}changeOtherPropertiesOptions(){let o=this.otherProperties.includes("multiple"),r=this.otherProperties.includes("required");this.otherPropertiesOptions[1].disabled=o,this.otherPropertiesOptions[7].disabled=!r,this.otherPropertiesOptions[5].disabled=r,this.otherPropertiesOptions=[...this.otherPropertiesOptions]}onFieldFormatChange(o){try{this.fieldFormat=JSON.parse(o)}catch{this.fieldFormat=void 0}}restore(){this.helperText="",this.columnsName=["id","name","nickname","email"],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.event="",this.fieldErrorMessage="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.help="",this.keysLabel="",this.label="",this.literals="",this.lookupSingle=void 0,this.otherProperties=[],this.placeholder="",this.fieldFormat=void 0,this.size="medium",this.searchOnEnter="equal",this.changeFilterSearchSelects(),this.changeKeysLabel(),this.changeLiterals(),this.changeOtherPropertiesOptions(),this.updateColumns(),this.updateGridProperties(),this.lookupModalSize="lg"}updateColumns(){this.columns=[],this.columnsName.forEach(o=>this.columns.push(this.columnsDefinition[o]))}updateGridProperties(){this.gridProperties={},this.gridPropertiesName.forEach(o=>{this.gridProperties=N(O({},this.gridProperties),{[o]:!0})}),this.gridPropertiesName.includes("sortable")||(this.gridProperties=N(O({},this.gridProperties),{sortable:!1})),this.gridPropertiesName.includes("striped")||(this.gridProperties=N(O({},this.gridProperties),{striped:!1})),this.gridPropertiesName.includes("selectableEntireLine")||(this.gridProperties=N(O({},this.gridProperties),{selectableEntireLine:!1})),this.gridPropertiesName.includes("showMoreVisible")||(this.gridProperties=N(O({},this.gridProperties),{showMoreVisible:!1}))}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-labs-doc"]],standalone:!1,decls:10,vars:34,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookup","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-error","t-selected","t-focus","t-keydown","t-rows-selected","ngModelChange","t-helper","t-auto-height","t-clean","t-columns","t-disabled","t-error-limit","t-field-error-message","t-field-format","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-help","t-keys-label","t-label","t-literals","t-loading","t-modal-size","t-multiple","t-no-autocomplete","t-optional","t-placeholder","t-required","t-show-required","t-search-on-enter","t-size","t-label-text-wrap","ngModel"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","label","p-clean","","p-label","Label",1,"po-md-6",3,"ngModelChange","ngModel"],["name","help","p-clean","","p-label","Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","helperText","p-clean","","p-label","Additional Help",1,"po-md-6",3,"ngModelChange","ngModel"],["name","placeholder","p-clean","","p-label","Placeholder",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldErrorMessage","p-clean","","p-label","Field Error Message",1,"po-md-6",3,"ngModelChange","ngModel"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel","p-options"],["name","formatField","p-label","Field Format","p-help",'Ex.: ["id", "name"]',1,"po-md-6",3,"ngModelChange","p-change","ngModel"],["name","columnsName","p-label","Columns",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"],["name","otherProperties","p-label","Other Properties",3,"ngModelChange","p-change","p-columns","p-options","ngModel"],["name","lookupModalSize","p-label","Modal Size",1,"po-lg-6",3,"ngModelChange","p-columns","p-options","ngModel"],["name","searchOnEnter","p-label","SearchOnEnter",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","literals","p-label","Literals","p-help",'{ "modalTitle": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],[1,"po-row"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),a(3,"po-divider",2),i(4,"thf-lookup",3),y("t-change",function(){return p(l),c(n.changeEvent("t-change"))})("t-error",function(){return p(l),c(n.changeEvent("t-error"))})("t-selected",function(){return p(l),c(n.changeEvent("t-selected"))})("t-focus",function(){return p(l),c(n.changeEvent("t-focus"))})("t-keydown",function(){return p(l),c(n.changeEvent("t-keydown"))})("t-rows-selected",function(){return p(l),c(n.changeEvent("t-rows-selected"))}),f("ngModelChange",function(g){return p(l),h(n.lookupSingle,g)||(n.lookupSingle=g),c(g)}),t(),i(5,"po-container",4),a(6,"po-info",5),t(),a(7,"app-code-accordion-doc",6),L(8,In,25,29,"ng-template",null,0,J),t()}if(r&2){let l=U(9);m(4),s("t-helper",n.helperText)("t-auto-height",n.otherProperties.includes("autoHeight"))("t-clean",n.otherProperties.includes("clean"))("t-columns",n.columns)("t-disabled",n.otherProperties.includes("disabled"))("t-error-limit",n.otherProperties.includes("fieldErrorLimit"))("t-field-error-message",n.fieldErrorMessage)("t-field-format",n.fieldFormat)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-field-error-message",n.fieldErrorMessage)("t-filter-search-select",n.customFilterSearchSelect)("t-grid-properties",n.gridProperties)("t-help",n.help)("t-keys-label",n.customKeysLabel)("t-label",n.label)("t-literals",n.customLiterals)("t-loading",n.otherProperties.includes("loading"))("t-modal-size",n.lookupModalSize)("t-multiple",n.otherProperties.includes("multiple"))("t-no-autocomplete",n.otherProperties.includes("noAutoComplete"))("t-optional",n.otherProperties.includes("optional"))("t-placeholder",n.placeholder)("t-required",n.otherProperties.includes("required"))("t-show-required",n.otherProperties.includes("showRequired"))("t-search-on-enter",n.searchOnEnter)("t-size",n.size)("t-label-text-wrap",n.otherProperties==null?null:n.otherProperties.includes("labelTextWrap")),b("ngModel",n.lookupSingle),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Q,W,H,v,C,be,re,le,Fe,fe,de,se,P],styles:[".po-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.containerProperties[_ngcontent-%COMP%]{flex:1 1 100%}"]})}}return d})();var ei=(()=>{class d{constructor(){this.htmlCode=`<form [formGroup]="formMission">
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
  `,this.formMission=new B({lookup2:new S(["1495831666871"])}),this.gridProperties={autoSize:!0,autoSizeOnScroll:!0,resizable:!0,groupable:!0,draggable:!0,hideSelectAll:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"},{property:"id",label:"Id"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-form-doc"]],standalone:!1,decls:7,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookup2","name","lookupMultiple","t-field-label","name","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes","t-key-last-search","lookupMultiple","t-label","Her\xF3is","t-placeholder","Placeholder multiple",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),a(3,"po-divider",1),i(4,"form",2),a(5,"thf-lookup",3),t(),a(6,"app-code-accordion-doc",4),t()),r&2&&(m(4),s("formGroup",n.formMission),m(),s("t-columns",n.columns)("t-grid-properties",n.gridProperties)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ae,Q,oe,we,De,v,C,se,P],encapsulation:2})}}return d})();var ti=(()=>{class d{constructor(){this.htmlCode=`<thf-lookup
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
export class ThfLookupBasicDocComponent {}`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-basic-doc"]],standalone:!1,decls:7,vars:2,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),a(3,"po-divider",1),i(4,"form"),a(5,"thf-lookup",2),t(),a(6,"app-code-accordion-doc",3),t()),r&2&&(m(6),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ae,oe,Te,v,C,se,P],encapsulation:2})}}return d})();var ii=`<thf-lookup
  name="lookupSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
>
</thf-lookup>`,ni=`import { Component } from '@angular/core';

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
`;var oi=(()=>{class d{constructor(){this.htmlCode=ii,this.tsCode=ni,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-custom-items-doc"]],standalone:!1,decls:7,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),a(3,"po-divider",1),i(4,"form"),a(5,"thf-lookup",2),t(),a(6,"app-code-accordion-doc",3),t()),r&2&&(m(5),s("t-custom-items",n.customItems),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ae,oe,Te,v,C,se,P],encapsulation:2})}}return d})();var ai=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup")(2,"div",1)(3,"div",2),a(4,"app-thf-lookup-basic-doc")(5,"app-thf-lookup-form-doc")(6,"app-thf-lookup-custom-items-doc"),t()(),i(7,"div",3),a(8,"app-thf-lookup-labs-doc"),t()()())},dependencies:[Y,Dt,Yt,ei,ti,oi],encapsulation:2})}}return d})();var ri=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-height]="320"
/>`,li=`import { Component } from '@angular/core';

@Component({
  selector: 'app-thf-lookup-data-basic-doc',
  templateUrl: './thf-lookup-data-basic-doc.component.html',
  standalone: false,
})
export class ThfLookupDataBasicDocComponent {}`;var ze=(()=>{class d{constructor(){this.htmlCode=ri,this.tsCode=li}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-basic-doc"]],standalone:!1,decls:6,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingle","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic Single"),t(),a(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-height",320),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,C,me,P],encapsulation:2})}}return d})();var di=`<form [formGroup]="form">
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
`,mi=`import { Component } from '@angular/core';
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
}`;function jn(d,w){if(d&1){let o=F();i(0,"po-button",7),y("p-click",function(){p(o);let n=u();return c(n.disableEnabledFom())}),t()}}function On(d,w){if(d&1){let o=F();i(0,"po-button",8),y("p-click",function(){p(o);let n=u();return c(n.disableEnabledFom())}),t()}}var je=(()=>{class d{constructor(){this.htmlCode=di,this.tsCode=mi,this.disabledFom=!1,this.form=new B({lookupData:new S(["1495831666871"])}),this.gridProperties={autoSize:!0,draggable:!0,hideSelectAll:!0,resizable:!0},this.columns=[{property:"name",label:"Name"},{property:"nickname",label:"Nickname"},{property:"email",label:"Email"}],this.keysLabel=[{label:"Nome",value:"name"},{label:"Email",value:"email"}],this.filterSelect=[{label:"Nome",value:"name"},{label:"Nickname",value:"nickname"},{label:"Email",value:"email"}]}disableEnabledFom(){let o=this.form.get("lookupData");this.disabledFom=!this.disabledFom,this.disabledFom?o?.disable():o?.enable()}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-form-doc"]],standalone:!1,decls:16,vars:12,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],[3,"formGroup"],["formControlName","lookupData","name","lookupDataSingle","t-field-label","nickname","t-field-value","value","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-columns","t-grid-properties","t-keys-label","t-multiple","t-filter-search-select"],["p-label","Desabilitar via FormControl"],["p-label","Habilitar via FormControl"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"],["p-label","Desabilitar via FormControl",3,"p-click"],["p-label","Habilitar via FormControl",3,"p-click"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Multiple Reactive Form"),t(),a(3,"po-divider",1),i(4,"form",2),a(5,"thf-lookup-data",3),t(),i(6,"div")(7,"p"),e(8,"Valor do Formul\xE1rio:"),a(9,"br"),e(10),tt(11,"json"),t()(),i(12,"div"),L(13,jn,1,0,"po-button",4)(14,On,1,0,"po-button",5),t(),a(15,"app-code-accordion-doc",6),t()),r&2&&(m(4),s("formGroup",n.form),m(),s("t-columns",n.columns)("t-grid-properties",n.gridProperties)("t-keys-label",n.keysLabel)("t-multiple",!0)("t-filter-search-select",n.filterSelect),m(5),xe(it(11,10,n.form.value)),m(3),Ee(n.disabledFom?14:13),m(2),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ae,Q,oe,we,De,H,v,C,me,P,lt],encapsulation:2})}}return d})();var si=`<thf-lookup-data
  name="lookupDataSingle"
  t-field-label="nickname"
  t-field-value="name"
  t-filter-service="https://po-sample-api.onrender.com/v1/heroes"
  [t-custom-items]="customItems"
  [t-height]="320"
/>`,pi=`import { Component } from '@angular/core';

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
}`;var Oe=(()=>{class d{constructor(){this.htmlCode=si,this.tsCode=pi,this.customItems=[{value:9999999999999,label:"Todos os Her\xF3is",id:9999999999999,name:"Todos os Her\xF3is",nickname:"Todos",email:"-"},{value:8888888888888,label:"Her\xF3i Customizado",id:8888888888888,name:"Her\xF3i Customizado",nickname:"Customizado",email:"customizado@example.com"}]}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-custom-items-doc"]],standalone:!1,decls:6,vars:4,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","lookupDataSingleCustomItems","t-field-label","nickname","t-field-value","name","t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-custom-items","t-height"],["marginTopClass","po-mt-1",3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Custom Items"),t(),a(3,"po-divider",1)(4,"thf-lookup-data",2)(5,"app-code-accordion-doc",3),t()),r&2&&(m(4),s("t-custom-items",n.customItems)("t-height",320),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,C,me,P],encapsulation:2})}}return d})();var ci=`<thf-lookup-data
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
`,ui=`import { Component } from '@angular/core';

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
}`;function Qn(d,w){if(d&1){let o=F();i(0,"div",7)(1,"po-container",8)(2,"po-select",9),f("ngModelChange",function(n){p(o);let l=u();return h(l.fieldValue,n)||(l.fieldValue=n),c(n)}),t(),i(3,"po-select",10),f("ngModelChange",function(n){p(o);let l=u();return h(l.fieldLabel,n)||(l.fieldLabel=n),c(n)}),t(),i(4,"po-input",11),f("ngModelChange",function(n){p(o);let l=u();return h(l.height,n)||(l.height=n),c(n)}),t(),i(5,"div",12)(6,"po-switch",13),f("ngModelChange",function(n){p(o);let l=u();return h(l.disabled,n)||(l.disabled=n),c(n)}),t(),i(7,"po-switch",14),f("ngModelChange",function(n){p(o);let l=u();return h(l.multiple,n)||(l.multiple=n),c(n)}),t(),i(8,"po-radio-group",15),f("ngModelChange",function(n){p(o);let l=u();return h(l.size,n)||(l.size=n),c(n)}),t()(),i(9,"div",12)(10,"po-textarea",16),f("ngModelChange",function(n){p(o);let l=u();return h(l.filterSearchSelect,n)||(l.filterSearchSelect=n),c(n)}),y("p-change-model",function(){p(o);let n=u();return c(n.changeFilterSearchSelects())}),t(),i(11,"po-textarea",17),f("ngModelChange",function(n){p(o);let l=u();return h(l.keysLabel,n)||(l.keysLabel=n),c(n)}),y("p-change-model",function(){p(o);let n=u();return c(n.changeKeysLabel())}),t()(),i(12,"po-textarea",18),f("ngModelChange",function(n){p(o);let l=u();return h(l.literals,n)||(l.literals=n),c(n)}),y("p-change-model",function(){p(o);let n=u();return c(n.changeLiterals())}),t()(),i(13,"po-container",8)(14,"po-checkbox-group",19),f("ngModelChange",function(n){p(o);let l=u();return h(l.gridPropertiesName,n)||(l.gridPropertiesName=n),c(n)}),y("p-change",function(){p(o);let n=u();return c(n.updateGridProperties())}),t()()()}if(d&2){let o=u();m(2),b("ngModel",o.fieldValue),s("p-options",o.fieldValueOptions),m(),b("ngModel",o.fieldLabel),s("p-options",o.fieldLabelOptions),m(),b("ngModel",o.height),m(2),b("ngModel",o.disabled),m(),b("ngModel",o.multiple),m(),b("ngModel",o.size),s("p-options",o.sizesOptions),m(2),b("ngModel",o.filterSearchSelect),m(),b("ngModel",o.keysLabel),m(),s("p-rows",2),b("ngModel",o.literals),m(2),b("ngModel",o.gridPropertiesName),s("p-columns",4)("p-options",o.gridPropertiesOptions)}}var Ge=(()=>{class d{constructor(){this.htmlCode=ci,this.tsCode=ui,this.columns=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"nickname",label:"Apelido"},{property:"email",label:"E-mail"}],this.customFilterSearchSelect=[],this.customKeysLabel=[],this.customLiterals={},this.disabled=!1,this.event="",this.fieldLabel="name",this.fieldValue="value",this.filterSearchSelect="",this.height=450,this.keysLabel="",this.literals="",this.multiple=!0,this.size="medium",this.columnsOptions=[{value:"id",label:"Id"},{value:"name",label:"Nome"},{value:"nickname",label:"Apelido"},{value:"email",label:"E-mail"}],this.gridPropertiesOptions=[{value:"autoSize",label:"AutoSize"},{value:"autoSizeOnScroll",label:"AutoSizeOnScroll"},{value:"draggable",label:"Draggable"},{value:"groupable",label:"Groupable"},{value:"hideSelectAll",label:"HideSelectAll"},{value:"resizable",label:"Resizable"},{value:"selectableEntireLine",label:"SelectableEntireLine"},{value:"striped",label:"Striped"},{value:"showDraggableIcon",label:"ShowDraggableIcon"},{value:"showMoreDisabled",label:"ShowMoreDisabled"},{value:"showMoreVisible",label:"ShowMoreVisible"},{value:"sortable",label:"Sortable"},{value:"virtualScroll",label:"VirtualScroll"}],this.sizesOptions=[{label:"small",value:"small"},{label:"medium",value:"medium"}],this.fieldLabelOptions=[{value:"name",label:"Name"},...this.columnsOptions],this.fieldValueOptions=[{value:"value",label:"Value"},...this.columnsOptions],this.gridPropertiesName=["selectableEntireLine","showMoreVisible","striped","sortable","virtualScroll"]}changeEvent(o,r){r instanceof KeyboardEvent&&(r={key:r.key,code:r.code,altKey:r.altKey,ctrlKey:r.ctrlKey,shiftKey:r.shiftKey}),this.event=`<p>${o} - ${r?JSON.stringify(r):""}</p>`+this.event}changeFilterSearchSelects(){try{this.customFilterSearchSelect=JSON.parse(this.filterSearchSelect)}catch{this.customFilterSearchSelect=[]}}changeKeysLabel(){try{this.customKeysLabel=JSON.parse(this.keysLabel)}catch{this.customKeysLabel=[]}}changeLiterals(){try{this.customLiterals=JSON.parse(this.literals)}catch{this.customLiterals={}}}updateGridProperties(){let o={};this.gridPropertiesName.forEach(r=>{o=N(O({},o),{[r]:!0})}),this.gridPropertiesName.includes("sortable")||(o=N(O({},o),{sortable:!1})),this.gridPropertiesName.includes("striped")||(o=N(O({},o),{striped:!1})),this.gridPropertiesName.includes("selectableEntireLine")||(o=N(O({},o),{selectableEntireLine:!1})),this.gridPropertiesName.includes("showMoreVisible")||(o=N(O({},o),{showMoreVisible:!1})),this.gridPropertiesName.includes("groupable")||(o=N(O({},o),{groupable:!1})),this.gridProperties=O({},o)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data-labs-doc"]],standalone:!1,decls:13,vars:16,consts:[["customTemplate",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-filter-service","https://po-sample-api.onrender.com/v1/heroes",3,"t-change","t-change-model","t-error","t-focus","t-keydown","t-selected","t-columns","t-disabled","t-field-label","t-field-value","t-filter-search-select","t-grid-properties","t-height","t-keys-label","t-literals","t-multiple","t-size"],[1,"po-mt-1",2,"display","flex"],[2,"max-height","150px",3,"innerHTML"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],["name","fieldValue","p-label","Field Value","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","fieldLabel","p-label","Field Label","p-required","",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel","p-options"],["name","heigth","p-label","Height",1,"po-md-4","po-lg-4",3,"ngModelChange","ngModel"],[1,"po-row"],["name","disabled","p-label","Disabled",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","Multiple","p-label","Multiple",1,"po-md-6","po-lg-3",3,"ngModelChange","ngModel"],["name","size","p-label","Size","p-help","Para aplicar o tamanho small, configure o n\xEDvel de acessibilidade para AA.",1,"po-lg-6",3,"ngModelChange","ngModel","p-options"],["name","filterSearchSelect","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "Apelido", "value": "nickname" }, { "label": "E-mail", "value": "email" }]',"p-label","Filter Search Select",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","keysLabel","p-help",'[{ "label": "Nome", "value": "name" }, { "label": "E-mail", "value": "email" }]',"p-label","Keys Label",1,"po-lg-6",3,"ngModelChange","p-change-model","ngModel"],["name","literals","p-label","Literals","p-help",'{ "placeholder": "Busca avan\xE7ada" }',1,"po-lg-6",3,"ngModelChange","p-change-model","p-rows","ngModel"],["name","gridPropertiesName","p-label","Grid Properties",3,"ngModelChange","p-change","ngModel","p-columns","p-options"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",1),e(2,"Labs"),t(),a(3,"po-divider",2),i(4,"thf-lookup-data",3),y("t-change",function(g){return p(l),c(n.changeEvent("t-change",g))})("t-change-model",function(g){return p(l),c(n.changeEvent("t-change-model",g))})("t-error",function(g){return p(l),c(n.changeEvent("t-error",g))})("t-focus",function(){return p(l),c(n.changeEvent("t-focus",""))})("t-keydown",function(g){return p(l),c(n.changeEvent("t-keydown",g))})("t-selected",function(g){return p(l),c(n.changeEvent("t-selected",g))}),t(),i(5,"po-container",4)(6,"span",1),e(7,"Events"),t(),a(8,"po-divider",2)(9,"div",5),t(),a(10,"app-code-accordion-doc",6),L(11,Qn,15,16,"ng-template",null,0,J),t()}if(r&2){let l=U(12);m(4),s("t-columns",n.columns)("t-disabled",n.disabled)("t-field-label",n.fieldLabel)("t-field-value",n.fieldValue)("t-filter-search-select",n.customFilterSearchSelect)("t-grid-properties",n.gridProperties)("t-height",n.height)("t-keys-label",n.customKeysLabel)("t-literals",n.customLiterals)("t-multiple",n.multiple)("t-size",n.size),m(5),s("innerHTML",n.event,He),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[Q,W,v,C,be,re,le,Fe,fe,ke,me,P],encapsulation:2})}}return d})();var Ne=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-lookup-data"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Lookup-Data","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],[1,"samples-container"],["labs","",1,"samples-container"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-lookup-data")(2,"div",1)(3,"div",2),a(4,"app-thf-lookup-data-basic-doc")(5,"app-thf-lookup-data-form-doc")(6,"app-thf-lookup-data-custom-items-doc"),t()(),i(7,"div",3),a(8,"app-thf-lookup-data-labs-doc"),t()()())},dependencies:[Y,At,ze,je,Oe,Ge],encapsulation:2})}}return d})();var Hn=["splitter"],Un=["paneForm"],Wn=()=>({label:"horizontal",value:"horizontal"}),Kn=()=>({label:"vertical",value:"vertical"}),$n=(d,w)=>[d,w];function Jn(d,w){if(d&1){let o=F();i(0,"thf-splitter-pane",10),y("t-size-change",function(){p(o);let n=u();return c(n.changeEvent("(t-size-change)"))}),i(1,"div",11)(2,"po-widget",12),y("p-primary-action",function(){let n=p(o).index,l=u();return c(l.removePane(n))}),i(3,"div",13),e(4),t()()()()}if(d&2){let o=w.$implicit,r=w.index;s("t-resizable",o.resizable)("t-scrollable",o.scrollable)("t-size",o.size),m(4),Xe(" Pane Content ",r," ")}}function Zn(d,w){if(d&1){let o=F();i(0,"div",14)(1,"po-container",15),a(2,"po-dynamic-form",16,2),i(4,"div",17)(5,"po-button",18),y("p-click",function(){p(o);let n=U(3),l=u();return c(l.addPane(n.form.value))}),t()()(),i(6,"po-container",15)(7,"po-switch",19),f("ngModelChange",function(n){p(o);let l=u();return h(l.disabled,n)||(l.disabled=n),c(n)}),t(),i(8,"po-radio-group",20),f("ngModelChange",function(n){p(o);let l=u();return h(l.orientation,n)||(l.orientation=n),c(n)}),t()()(),i(9,"div",17)(10,"po-button",21),y("p-click",function(){p(o);let n=u();return c(n.restore())}),t()()}if(d&2){let o=U(3),r=u();m(2),s("p-fields",r.panesFieldsForm)("p-value",r.pane),m(3),s("p-disabled",o.form.invalid),m(2),b("ngModel",r.disabled),m(),b("ngModel",r.orientation),s("p-options",Ce(8,$n,$(6,Wn),$(7,Kn)))}}var Ei=(()=>{class d{constructor(){this.event="",this.panes=[],this.pane={},this.disabled=!1,this.orientation="horizontal",this.panesFieldsForm=[{property:"size",gridColumns:6,type:"number",maxValue:100,minValue:0,maxLength:3,step:5,help:"Valor em porc (%)"},{property:"scrollable",type:"boolean",gridColumns:3}],this.htmlCode=`<thf-splitter
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
}`}ngOnInit(){this.restore()}changeEvent(o){this.event=o}restore(){this.event="",this.panes=[],this.pane={size:"50",scrollable:!1}}addPane(o){let r=Object.assign({},o);r.size+="%",this.panes.push(r),this.pane={size:"50",scrollable:!1}}removePane(o){this.panes.splice(o,1)}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-labs-doc"]],viewQuery:function(r,n){if(r&1&&(D(Hn,7),D(Un,7)),r&2){let l;A(l=_())&&(n.splitter=l.first),A(l=_())&&(n.paneForm=l.first)}},standalone:!1,decls:12,vars:8,consts:[["splitter",""],["customTemplate",""],["paneForm",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["name","splitter",3,"t-layout-change","t-disabled","t-orientation"],[3,"t-resizable","t-scrollable","t-size","t-size-change",4,"ngFor","ngForOf"],[1,"po-mt-1",2,"display","flex"],["p-label","Event",1,"po-md-12",3,"p-value"],[3,"properties","dynamicTemplate","htmlCode","tsCode"],[3,"t-size-change","t-resizable","t-scrollable","t-size"],[1,"po-m-2"],["p-title","Title Pane","p-primary-label","Close",3,"p-primary-action"],[1,"po-font-subtitle","po-text-center"],[1,"po-row","po-mt-2","po-mb-2",2,"display","block"],[1,"po-mb-2",2,"display","flex"],[3,"p-fields","p-value"],[1,"po-row"],["p-label","Add Pane",1,"po-md-3",3,"p-click","p-disabled"],["name","disabled","p-label","Disabled",1,"po-md-6",3,"ngModelChange","ngModel"],["name","orientation","p-label","orientation",1,"po-md-6",3,"ngModelChange","ngModel","p-options"],["p-label","Restore",1,"po-lg-3","po-md-6",3,"p-click"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",3),e(2,"Labs"),t(),a(3,"po-divider",4),i(4,"thf-splitter",5,0),y("t-layout-change",function(){return p(l),c(n.changeEvent("(t-layout-change)"))}),L(6,Jn,5,4,"thf-splitter-pane",6),t(),i(7,"po-container",7),a(8,"po-info",8),t(),a(9,"app-code-accordion-doc",9),L(10,Zn,11,11,"ng-template",null,1,J),t()}if(r&2){let l=U(11);m(4),s("t-disabled",n.disabled)("t-orientation",n.orientation),m(2),s("ngForOf",n.panes),m(2),s("p-value",n.event),m(),s("properties",!0)("dynamicTemplate",l)("htmlCode",n.htmlCode)("tsCode",n.tsCode)}},dependencies:[at,Q,W,H,v,C,yt,re,ke,de,ve,ie,te,P],encapsulation:2})}}return d})();var Yn=["gridComponent"];function eo(d,w){if(d&1){let o=F();i(0,"thf-splitter-pane",9)(1,"po-widget",11),y("p-primary-action",function(){p(o);let n=u();return c(n.closePane())}),i(2,"div",12),a(3,"po-info",13),t(),i(4,"div",12),a(5,"po-info",14),t(),i(6,"div",12),a(7,"po-info",15),t(),i(8,"div",12),a(9,"po-info",16),t()()()}if(d&2){let o=u();s("t-size","30%"),m(3),s("p-value",o.selectedHero.name),m(2),s("p-value",o.selectedHero.nickname),m(2),s("p-value",o.selectedHero.email),m(2),s("p-value",o.selectedHero.city)}}var xi=(()=>{class d{constructor(o,r){this.router=o,this.changeDetector=r,this.showHeroPane=!1,this.selectedHero=null,this.items=[{id:1495831666871,name:"Robert Bruce Banner",nickname:"Hulk",email:"hulksmash@marvel.com",status:1,city:"Lages"},{id:1495831698598,name:"Peter Parker",nickname:"Homem Aranha",email:"spvalueerman@marvel.com",status:2,city:"Brusque"},{id:1495832652942,name:"Kakaroto",nickname:"Goku",status:1,email:"goku@dbz.com",city:"Guarulhos"},{id:1495832683682,name:"Clint Barton",nickname:"Gaviao Arqueiro",status:1,email:"hawkeye@marvel.com",city:"Campinas"},{id:1495833068596,name:"Nicholas Joseph Fury",nickname:"Nick Fury",status:2,email:"nickfuckingfury@marvel.com",city:null},{id:1495833068597,name:"Gohan",nickname:"Son Gohan",status:2,email:"gohan@dbz.com",city:null}],this.column=[{property:"id",label:"Id"},{property:"name",label:"Nome"},{property:"status",label:"Status",type:"label",labels:[{value:1,color:"color-11",label:"Ativo"},{value:2,color:"color-08",label:"Inativo"}]},{property:"city",label:"Cidade"}],this.htmlCode=`  <thf-splitter t-disabled>
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
}`}ngAfterViewInit(){this.grid.selectRowItem(this.items[0]),this.selectItem(this.items[0]),this.changeDetector.detectChanges()}openExternalLink(){window.open("https://github.com/po-ui/po-angular")}selectItem(o){if(!o){this.closePane();return}this.selectedHero={id:o.id||"",name:o.name||"",nickname:o.nickname||"",email:o.email||"",city:o.city||""},this.showHeroPane=!0}closePane(){this.showHeroPane=!1,this.selectedHero=null,this.grid.unselectRows()}static{this.\u0275fac=function(r){return new(r||d)(R(xt),R(nt))}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-grid-doc"]],viewQuery:function(r,n){if(r&1&&D(Yn,7),r&2){let l;A(l=_())&&(n.grid=l.first)}},standalone:!1,decls:15,vars:9,consts:[["gridComponent",""],[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["t-disabled",""],[1,"po-lg-12","po-pt-2","po-pb-2"],[1,"po-row",2,"justify-content","space-between","align-items","center"],[1,"po-font-subtitle"],["p-icon","an an-star","p-label","Star",3,"p-click"],[3,"t-selected","t-unselected","t-height","t-selectable","t-single-select","t-items","t-columns","t-sortable"],[3,"t-size"],[3,"htmlCode","tsCode"],["p-title","Her\xF3i Selecionado","p-primary-label","Fechar Painel",3,"p-primary-action"],[1,"po-row"],["p-label","Name",1,"po-md-12",3,"p-value"],["p-label","Apelido",1,"po-md-12",3,"p-value"],["p-label","Contato",1,"po-md-12",3,"p-value"],["p-label","Reside em",1,"po-md-12",3,"p-value"]],template:function(r,n){if(r&1){let l=F();i(0,"po-container")(1,"span",1),e(2,"Divis\xE3o din\xE2mica"),t(),a(3,"po-divider",2),i(4,"thf-splitter",3)(5,"thf-splitter-pane")(6,"div",4)(7,"div",5)(8,"p",6),e(9,"Controle de Her\xF3is"),t(),i(10,"po-button",7),y("p-click",function(){return p(l),c(n.openExternalLink())}),t()(),i(11,"thf-grid",8,0),y("t-selected",function(g){return p(l),c(n.selectItem(g))})("t-unselected",function(){return p(l),c(n.closePane())}),t()()(),L(13,eo,10,5,"thf-splitter-pane",9),t(),a(14,"app-code-accordion-doc",10),t()}r&2&&(m(11),s("t-height",300)("t-selectable",!0)("t-single-select",!0)("t-items",n.items)("t-columns",n.column)("t-sortable",!0),m(2),Ee(n.showHeroPane?13:-1),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[H,v,C,de,ve,M,ie,te,P],encapsulation:2})}}return d})();var Si=(()=>{class d{constructor(){this.optionsColumn={axis:{minRange:-20,maxRange:100,gridLines:7},rendererOption:"svg"},this.optionsPie={rendererOption:"svg"},this.categoriesColumn=["coffee","chocolate","tea"],this.evolutionOfCoffeeAndSomeCompetitors=[{label:"2014",data:[91,40,42],type:ge.Column},{label:"2017",data:[93,52,18],type:ge.Column},{label:"2020",data:[95,21,-17],type:ge.Column},{label:"Coffee consumption in Brazil",data:[34,27,79],type:ge.Line,color:"color-10"}],this.coffeeProduction=[{label:"Brazil",data:2796,tooltip:"Brazil (South America)",color:"color-10"},{label:"Vietnam",data:1076,tooltip:"Vietnam (Asia)"},{label:"Colombia",data:688,tooltip:"Colombia (South America)"},{label:"Indonesia",data:682,tooltip:"Indonesia (Asia/Oceania)"},{label:"Peru",data:273,tooltip:"Peru (South America)"}],this.htmlCode=`<thf-splitter>
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
`}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-chart-doc"]],standalone:!1,decls:12,vars:8,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0-75"],["p-title","Chart type column with line"],["p-title","Evolution of coffee and some competitors - %",3,"p-options","p-categories","p-series"],[3,"t-size"],["p-title","Chart type pizza"],["p-title","Top 5 coffee producing countries (in tons)",3,"p-series","p-options"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Divis\xE3o com gr\xE1ficos din\xE2micos"),t(),a(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"po-widget",2),a(7,"po-chart",3),t()(),i(8,"thf-splitter-pane",4)(9,"po-widget",5),a(10,"po-chart",6),t()()(),a(11,"app-code-accordion-doc",7),t()),r&2&&(m(7),s("p-options",n.optionsColumn)("p-categories",n.categoriesColumn)("p-series",n.evolutionOfCoffeeAndSomeCompetitors),m(),s("t-size","50%"),m(2),s("p-series",n.coffeeProduction)("p-options",n.optionsPie),m(),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[ht,v,C,ve,ie,te,P],encapsulation:2})}}return d})();var bi=(()=>{class d{constructor(){this.htmlCode=`<thf-splitter>
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
  `}static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-basic-doc"]],standalone:!1,decls:17,vars:3,consts:[[1,"po-font-text-large-bold"],[1,"po-divider-mb-0"],[3,"t-orientation"],[3,"htmlCode","tsCode"]],template:function(r,n){r&1&&(i(0,"po-container")(1,"span",0),e(2,"Basic"),t(),a(3,"po-divider",1),i(4,"thf-splitter")(5,"thf-splitter-pane")(6,"h4"),e(7,"Pane 1"),t()(),i(8,"thf-splitter-pane")(9,"thf-splitter",2)(10,"thf-splitter-pane")(11,"h4"),e(12,"Pane 2"),t()(),i(13,"thf-splitter-pane")(14,"h4"),e(15,"Pane 3"),t()()()()(),a(16,"app-code-accordion-doc",3),t()),r&2&&(m(9),s("t-orientation","vertical"),m(7),s("htmlCode",n.htmlCode)("tsCode",n.tsCode))},dependencies:[v,C,ie,te,P],encapsulation:2})}}return d})();var oo=()=>[xi,Si,bi];function ao(d,w){d&1&&(i(0,"div",3),a(1,"app-thf-splitter-basic-doc")(2,"app-thf-splitter-grid-doc")(3,"app-thf-splitter-chart-doc"),t())}function ro(d,w){d&1&&a(0,"po-loading-overlay",4),d&2&&s("p-screen-lock",!1)}var hi=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter"]],standalone:!1,decls:9,vars:0,consts:[["p-title","THF-Splitter","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"],["overview",""],["labs","",1,"samples-container"],[1,"samples-container"],[3,"p-screen-lock"]],template:function(r,n){r&1&&(i(0,"po-page-default",0)(1,"api-thf-splitter")(2,"div",1),L(3,ao,4,0)(4,ro,1,1),Ue(5,3,oo,null,4),We(),t(),i(7,"div",2),a(8,"app-thf-splitter-labs-doc"),t()()())},dependencies:[St,Y,kt,Ei],encapsulation:2})}}return d})();var fi=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275cmp=x({type:d,selectors:[["app-thf-splitter-pane"]],standalone:!1,decls:2,vars:0,consts:[["p-title","THF-Splitter-Pane","p-subtitle","Documenta\xE7\xE3o",1,"vitrine-page"]],template:function(r,n){r&1&&(i(0,"po-page-default",0),a(1,"api-thf-splitter-pane"),t())},dependencies:[Y,_t],encapsulation:2})}}return d})();var lo=[{path:"thf-grid",component:Xt},{path:"thf-lookup",component:ai},{path:"thf-lookup-data",component:Ne},{path:"thf-splitter",component:hi},{path:"thf-splitter-pane",component:fi}],vi=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=ue({type:d})}static{this.\u0275inj=ce({imports:[Re.forChild(lo),Re]})}}return d})();var Vs=(()=>{class d{static{this.\u0275fac=function(r){return new(r||d)}}static{this.\u0275mod=ue({type:d})}static{this.\u0275inj=ce({imports:[Pe,pt,ct,Ie,Pt,Tt,qt,vi,Et]})}}return d})();export{Vs as DocumentationModule};
