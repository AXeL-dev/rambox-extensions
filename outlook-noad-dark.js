function applycss(css) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.appendChild(document.createTextNode(css));
    head.appendChild(s);
}

applycss(`

._2qPmszDwBfYpF7PO9Mn3KN, 
._3a6SuYqdwIspGohT1zu16B,
._1_ag99JsBHxI6S4FP5ayPv,
._3_hHr3kfEhbNYRFM5YJxH9{
    display:none !important;
}

  :root
  {
    --unknown: yellow;
    --accent: #009dff;
    --darkgray1: #1d1d1d;
    --darkgray2: #222222;
    --darkgray3: #3d3d3d;
    --lightgray1: #a1a1a1;
    --lightgray2: #848484;
    --lightgray3: #686868;
    --lightgray4: #444;
    --black: var(--lightgray1) !important;
    --blackTranslucent40: rgba(0, 0, 0, 0.4) !important;
    --white: var(--darkgray1) !important;
    --whiteTranslucent40: rgba(255, 255, 255, 0.4) !important;
    --neutralDark: var(--lightgray1) !important;
    --neutralPrimary: var(--lightgray1) !important;
    --neutralPrimaryAlt: var(--lightgray1) !important;
    --neutralSecondary: var(--lightgray2) !important;
    --neutralTertiary: var(--lightgray3) !important;
    --neutralTertiaryAlt: var(--lightgray3) !important;
    --neutralQuaternary: var(--lightgray4) !important;
    --neutralQuaternaryAlt: vat(--lightgray4) !important;
    --neutralLight: var(--darkgray2) !important;
    --neutralLighter: var(--darkgray1) !important;
    --neutralLighterAlt: var(--darkgray1) !important;
    --redDark: var(--unknown) !important;
    --flaggedMessage: var(--darkgray2) !important;
    --richUserContentBackground: var(--unknown) !important;
    --composeNeutralBackground: var(--unknown) !important;
    --composeNeutralLighterBackground: var(--unknown) !important;
    --themeDarker: var(--accent) !important;
    --themeDark: var(--lightgray1) !important;
    --themeDarkAlt: var(--lightgray2) !important;
    --themePrimary: var(--lightgray1) !important;
    --themeSecondary: var(--unknown) !important;
    --themeTertiary: var(--unknown) !important;
    --themeLighter: var(--darkgray2) !important;
    --themeLight: var(--darkgray2) !important;
    --themeLighterAlt: var(--darkgray2) !important;
    --headerBackground: var(--darkgray1) !important;
    --headerBackgroundSearch: var(--darkgray1) !important;
    --headerBrandText: var(--lightgray1) !important;
    --headerTextIcons: var(--lightgray1) !important;
    --headerSearchBoxBackground: var(--darkgray3) !important;
    --headerSearchBoxIcon: var(--lightgray1) !important;
    --headerSearchPlaceholderText: var(--lightgray1) !important;
    --headerSearchButtonBackground: var(--darkgray3) !important;
    --headerSearchButtonBackgroundHover: var(--lightgray1) !important;
    --headerSearchButtonIcon: var(--lightgray1) !important;
    --headerSearchFilters: var(--lightgray1) !important;
    --headerSearchFiltersHover: var(--accent) !important;
    --headerButtonsBackground: var(--darkgray1) !important;
    --headerButtonsBackgroundHover: var(--darkgray2) !important;
    --headerButtonsBackgroundSearch: var(--darkgray1) !important;
    --headerButtonsBackgroundSearchHover: var(--darkgray1) !important;
    --headerBadgeBackground: var(--unknown) !important;
    --headerBadgeText: var(--unknown) !important;
    --headerSearchIcon: var(--unknown) !important;
    --searchBoxBackground: var(--unknown) !important;
  }

`);
