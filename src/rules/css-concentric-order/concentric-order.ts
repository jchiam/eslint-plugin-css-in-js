/*
CSS concentric ordering sourced from:
https://github.com/brandon-rhodes/Concentric-CSS/blob/master/style3.css
*/
const cssProperties = [

  /* all */
  'all',

  /* box-sizing */
  'box-sizing',

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
  'grid-area',
  'grid-template',
  'grid-template-areas',
  'grid-template-rows',
  'grid-template-columns',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'grid-auto-rows',
  'grid-auto-columns',
  'grid-auto-flow',
  'grid-gap',
  'grid-row-gap',
  'grid-column-gap',

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
  'column-gap',
  'column-fill',
  'column-rule',
  'column-rule-width',
  'column-rule-style',
  'column-rule-color',
  'column-span',
  'column-count',
  'column-width',

  /* transform */
  'backface-visibility',
  'perspective',
  'perspective-origin',
  'transform',
  'transform-origin',
  'transform-style',

  /* transitions */
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',

  /* visibility */
  'visibility',
  'opacity',
  'z-index',

  /* margin */
  'margin',
  'margin-top', 'marginTop',
  'margin-right', 'marginRight',
  'margin-bottom', 'marginBottom',
  'margin-left', 'marginLeft',

  /* outline */
  'outline',
  'outline-offset',
  'outline-width',
  'outline-style',
  'outline-color',

  /* border */
  'border',
  'border-top',
  'border-right',
  'border-bottom',
  'border-left',
  'border-width',
  'border-top-width',
  'border-right-width',
  'border-bottom-width',
  'border-left-width',

  /* border-style */
  'border-style',
  'border-top-style',
  'border-right-style',
  'border-bottom-style',
  'border-left-style',

  /* border-radius */
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-left-radius',
  'border-bottom-right-radius',

  /* border-color */
  'border-color',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',

  /* border-image */
  'border-image',
  'border-image-source',
  'border-image-width',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',

  /* box-shadow */
  'box-shadow',

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
  'list-style',
  'list-style-type',
  'list-style-position',
  'list-style-image',
  'caption-side',

  /* tables */
  'table-layout',
  'border-collapse',
  'border-spacing',
  'empty-cells',

  /* animation */
  'animation',
  'animation-name',
  'animation-duration',
  'animation-timing-function',
  'animation-delay',
  'animation-iteration-count',
  'animation-direction',
  'animation-fill-mode',
  'animation-play-state',

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
