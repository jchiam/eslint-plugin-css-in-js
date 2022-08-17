/*
CSS concentric ordering sourced from:
https://github.com/brandon-rhodes/Concentric-CSS/blob/master/style3.css
*/
const cssProperties = [

  /* all */
  'all',

  /* box-sizing */
  'box-sizing', 'boxSizing',

  /* position */
  'display',
  'position',
  'top',
  'right',
  'bottom',
  'left',

  /* float */
  'float',
  'clear',

  /* flex */
  'flex',
  'flex-basis', 'flexBasis',
  'flex-direction', 'flexDirection',
  'flex-flow', 'flexFlow',
  'flex-grow', 'flexGrow',
  'flex-shrink', 'flexShrink',
  'flex-wrap', 'flexWrap',

  /* grid */
  'grid',
  'grid-area', 'gridArea',
  'grid-template', 'gridTemplate',
  'grid-template-areas', 'gridTemplateAreas',
  'grid-template-rows', 'gridTemplateRows',
  'grid-template-columns', 'gridTemplateColumns',
  'grid-row', 'gridRow',
  'grid-row-start', 'gridRowStart',
  'grid-row-end', 'gridRowEnd',
  'grid-column', 'gridColumn',
  'grid-column-start', 'gridColumnStart',
  'grid-column-end', 'gridColumnEnd',
  'grid-auto-rows', 'gridAutoRows',
  'grid-auto-columns', 'gridAutoColumns',
  'grid-auto-flow', 'gridAutoFlow',
  'grid-gap', 'gridGap',
  'grid-row-gap', 'gridRowGap',
  'grid-column-gap', 'gridColumnGap',

  /* align-content */
  'align-content', 'alignContent',
  'align-items', 'alignItems',
  'align-self', 'alignSelf',

  /* justify-content */
  'justify-content', 'justifyContent',
  'justify-items', 'justifyItems',
  'justify-self', 'justifySelf',

  /* order */
  'order',

  /* columns */
  'columns',
  'column-gap', 'columnGap',
  'column-fill', 'columnFill',
  'column-rule', 'columnRule',
  'column-rule-width', 'columnRuleWidth',
  'column-rule-style', 'columnRuleStyle',
  'column-rule-color', 'columnRuleColor',
  'column-span', 'columnSpan',
  'column-count', 'columnCount',
  'column-width', 'columnWidth',

  /* transform */
  'backface-visibility', 'backfaceVisibility',
  'perspective',
  'perspective-origin', 'perspectiveOrigin',
  'transform',
  'transform-origin', 'transformOrigin',
  'transform-style', 'transformStyle',

  /* transitions */
  'transition',
  'transition-delay', 'transitionDelay',
  'transition-duration', 'transitionDuration',
  'transition-property', 'transitionProperty',
  'transition-timing-function', 'transitionTimingFunction',

  /* visibility */
  'visibility',
  'opacity',
  'z-index', 'zIndex',

  /* margin */
  'margin',
  'margin-top', 'marginTop',
  'margin-right', 'marginRight',
  'margin-bottom', 'marginBottom',
  'margin-left', 'marginLeft',

  /* outline */
  'outline',
  'outline-offset', 'outlineOffset',
  'outline-width', 'outlineWidth',
  'outline-style', 'outlineStyle',
  'outline-color', 'outlineColor',

  /* border */
  'border',
  'border-top', 'borderTop',
  'border-right', 'borderRight',
  'border-bottom', 'borderBottom',
  'border-left', 'borderLeft',
  'border-width', 'borderWidth',
  'border-top-width', 'borderTopWidth',
  'border-right-width', 'borderRightWidth',
  'border-bottom-width', 'borderBottomWidth',
  'border-left-width', 'borderLeftWidth',

  /* border-style */
  'border-style', 'borderStyle',
  'border-top-style', 'borderTopStyle',
  'border-right-style', 'borderRightStyle',
  'border-bottom-style', 'borderBottomStyle',
  'border-left-style', 'borderLeftStyle',

  /* border-radius */
  'border-radius', 'borderRadius',
  'border-top-left-radius', 'borderTopLeftRadius',
  'border-top-right-radius', 'borderTopRightRadius',
  'border-bottom-left-radius', 'borderBottomLeftRadius',
  'border-bottom-right-radius', 'borderBottomRightRadius',

  /* border-color */
  'border-color', 'borderColor',
  'border-top-color', 'borderTopColor',
  'border-right-color', 'borderRightColor',
  'border-bottom-color', 'borderBottomColor',
  'border-left-color', 'borderLeftColor',

  /* border-image */
  'border-image', 'borderImage',
  'border-image-source', 'borderImageSource',
  'border-image-width', 'borderImageWidth',
  'border-image-outset', 'borderImageOutset',
  'border-image-repeat', 'borderImageRepeat',
  'border-image-slice', 'borderImageSlice',

  /* box-shadow */
  'box-shadow', 'boxShadow',

  /* background */
  'background',
  'background-attachment', 'backgroundAttachment',
  'background-clip', 'backgroundClip',
  'background-color', 'backgroundColor',
  'background-image', 'backgroundImage',
  'background-origin', 'backgroundOrigin',
  'background-position', 'backgroundPosition',
  'background-repeat', 'backgroundRepeat',
  'background-size', 'backgroundSize',

  /* cursor */
  'cursor',

  /* padding */
  'padding',
  'padding-top', 'paddingTop',
  'padding-right', 'paddingRight',
  'padding-bottom', 'paddingBottom',
  'padding-left', 'paddingLeft',

  /* width */
  'width',
  'min-width', 'minWidth',
  'max-width', 'maxWidth',

  /* height */
  'height',
  'min-height', 'minHeight',
  'max-height', 'maxHeight',

  /* overflow */
  'overflow',
  'overflow-x', 'overflowX',
  'overflow-y', 'overflowY',
  'resize',

  /* list-style */
  'list-style', 'listStyle',
  'list-style-type', 'listStyleType',
  'list-style-position', 'listStylePosition',
  'list-style-image', 'listStyleImage',
  'caption-side', 'captionSide',

  /* tables */
  'table-layout', 'tableLayout',
  'border-collapse', 'borderCollapse',
  'border-spacing', 'borderSpacing',
  'empty-cells', 'emptyCells',

  /* animation */
  'animation',
  'animation-name', 'animationName',
  'animation-duration', 'animationDuration',
  'animation-timing-function', 'animationTimingFunction',
  'animation-delay', 'animationDelay',
  'animation-iteration-count', 'animationIterationCount',
  'animation-direction', 'animationDirection',
  'animation-fill-mode', 'animationFillMode',
  'animation-play-state', 'animationPlayState',

  /* vertical-alignment */
  'vertical-align', 'verticalAlign',

  /* text-alignment & decoration */
  'direction',
  'tab-size', 'tabSize',
  'text-align', 'textAlign',
  'text-align-last', 'textAlignLast',
  'text-justify', 'textJustify',
  'text-indent', 'textIndent',
  'text-transform', 'textTransform',
  'text-decoration', 'textDecoration',
  'text-decoration-color', 'textDecorationColor',
  'text-decoration-line', 'textDecorationLine',
  'text-decoration-style', 'textDecorationStyle',
  'text-rendering', 'textRendering',
  'text-shadow', 'textShadow',
  'text-overflow', 'textOverflow',

  /* text-spacing */
  'line-height', 'lineHeight',
  'word-spacing', 'wordSpacing',
  'letter-spacing', 'letterSpacing',
  'white-space', 'whiteSpace',
  'word-break', 'wordBreak',
  'word-wrap', 'wordWrap',
  'color',

  /* font */
  'font',
  'font-family', 'fontFamily',
  'font-size', 'fontSize',
  'font-size-adjust', 'fontSizeAdjust',
  'font-stretch', 'fontStretch',
  'font-weight', 'fontWeight',
  'font-smoothing', 'fontSmoothing',
  'osx-font-smoothing',
  'font-variant', 'fontVariant',
  'font-style', 'fontStyle',

  /* content */
  'content',
  'quotes',

  /* counters */
  'counter-reset', 'counterReset',
  'counter-increment', 'counterIncrement',

  /* breaks */
  'page-break-before', 'pageBreakBefore',
  'page-break-after', 'pageBreakAfter',
  'page-break-inside', 'pageBreakInside'
];

export const cssPropertiesIdxMap = new Map(cssProperties.map((p, idx) => [p, idx]));
