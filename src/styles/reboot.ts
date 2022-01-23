import { css } from 'styled-components'

export const reboot = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box; // 1
  }

  html {
    font-family: sans-serif; // 2
    line-height: 1.15; // 3
    -webkit-text-size-adjust: 100%; // 4
    -webkit-tap-highlight-color: rgba(#000, 0); // 5
  }

  // Body
  //
  // 1. Remove the margin in all browsers.
  // 2. As a best practice, apply a default \`background-color\`.
  // 3. Set an explicit initial text-align value so that we can later use
  //    the \`inherit\` value on things like \`<th>\` elements.

  body {
    margin: 0; // 1
    font-family: var(--text-font-family);
    font-size: 12px;
    line-height: 1.33333333;
    font-weight: 500;
    color: var(--rgb-text-color);
    text-align: left; // 3
    background-color: var(--rgb-color-page); // 2
  }

  // Suppress the focus outline on elements that cannot be accessed via keyboard.
  // This prevents an unwanted focus outline from appearing around elements that
  // might still respond to pointer events.
  //
  // Credit: https://github.com/suitcss/base
  [tabindex='-1']:focus {
    outline: 0 !important;
  }

  // Content grouping
  //
  // 1. Add the correct box sizing in Firefox.
  // 2. Show the overflow in Edge and IE.

  hr {
    box-sizing: content-box; // 1
    height: 0; // 1
    overflow: visible; // 2
  }

  //
  // Typography
  //

  // Remove top margins from headings
  //
  // By default, \`<h1>\`-\`<h6>\` all receive top and bottom margins. We nuke the top
  // margin for easier control within type scales as it avoids margin collapsing.
  // stylelint-disable-next-line selector-list-comma-newline-after
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 8px;
  }

  // Reset margins on paragraphs
  //
  // Similarly, the top margin on \`<p>\`s get reset. However, we also reset the
  // bottom margin to use \`rem\` units instead of \`em\`.
  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  ol,
  ul {
    margin-top: 0;
    margin-bottom: 16px;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  //
  // Links
  //

  a {
    color: var(--rgb-link-color);
    text-decoration: var(--link-decoration);
    background-color: transparent; // Remove the gray background on active links in IE 10.

    &:hover {
      color: var(--rgb-link-hover-color);
      text-decoration: var(--link-hover-decoration);

      @media (hover: none) {
        color: unset;
        text-decoration: unset;
      }
    }
  }

  //
  // Images and content
  //
  img {
    vertical-align: middle;
  }

  svg {
    // Workaround for the SVG overflow bug in IE10/11 is still required.
    // See https://github.com/twbs/bootstrap/issues/26878
    overflow: hidden;
    vertical-align: middle;
  }

  iframe {
    border: none;
  }

  //
  // Tables
  //

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
  }

  //
  // Forms
  //

  // Remove the default \`border-radius\` that macOS Chrome adds.
  //
  // Details at https://github.com/twbs/bootstrap/issues/24093
  button {
    border-radius: 0;
  }

  // Work around a Firefox/IE bug where the transparent \`button\` background
  // results in a loss of the default \`button\` focus styles.
  //
  // Credit: https://github.com/suitcss/base/
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0; // Remove the margin in Firefox and Safari
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible; // Show the overflow in Edge
  }

  button,
  select {
    text-transform: none; // Remove the inheritance of text transform in Firefox
  }

  // 1. Prevent a WebKit bug where (2) destroys native \`audio\` and \`video\`
  //    controls in Android 4.
  // 2. Correct the inability to style clickable types in iOS and Safari.
  button,
[type="button"], // 1
[type="reset"],
[type="submit"] {
    -webkit-appearance: button; // 2
  }

  // Remove inner border and padding from Firefox, but don't restore the outline like Normalize.
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type='radio'],
  input[type='checkbox'] {
    box-sizing: border-box; // 1. Add the correct box sizing in IE 10-
    padding: 0; // 2. Remove the padding in IE 10-
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    // Remove the default appearance of temporal inputs to avoid a Mobile Safari
    // bug where setting a custom line-height prevents text from being vertically
    // centered within the input.
    // See https://bugs.webkit.org/show_bug.cgi?id=139848
    // and https://github.com/twbs/bootstrap/issues/11266
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto; // Remove the default vertical scrollbar in IE.
    // Textareas should really only resize vertically so they don't break their (horizontal) containers.
    resize: vertical;
  }

  fieldset {
    // Browsers set a default \`min-width: min-content;\` on fieldsets,
    // unlike e.g. \`<div>\`s, which have \`min-width: 0;\` by default.
    // So we reset that to ensure fieldsets behave more like a standard block element.
    // See https://github.com/twbs/bootstrap/issues/12359
    // and https://html.spec.whatwg.org/multipage/#the-fieldset-and-legend-elements
    min-width: 0;
    // Reset the default outline behavior of fieldsets so they don't affect page layout.
    padding: 0;
    margin: 0;
    border: 0;
  }

  // 1. Correct the text wrapping in Edge and IE.
  // 2. Correct the color inheritance from \`fieldset\` elements in IE.
  legend {
    display: block;
    width: 100%;
    max-width: 100%; // 1
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit; // 2
    white-space: normal; // 1
  }

  progress {
    vertical-align: baseline; // Add the correct vertical alignment in Chrome, Firefox, and Opera.
  }

  // Correct the cursor style of increment and decrement buttons in Chrome.
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    // This overrides the extra rounded corners on search inputs in iOS so that our
    // \`.form-control\` class can properly style them. Note that this cannot simply
    // be added to \`.form-control\` as it's not specific enough. For details, see
    // https://github.com/twbs/bootstrap/issues/11586.
    outline-offset: -2px; // 2. Correct the outline style in Safari.
    -webkit-appearance: none;
  }

  //
  // Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
  //

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  //
  // 1. Correct the inability to style clickable types in iOS and Safari.
  // 2. Change font properties to \`inherit\` in Safari.
  //

  ::-webkit-file-upload-button {
    font: inherit; // 2
    -webkit-appearance: button; // 1
  }
`