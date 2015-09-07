---
layout: page
title:  Coding Styleguides
permalink: /developers/coding-styleguides/
categories: developers
---

<div class="alert alert-info">
  <strong>The content in this page reflects the current state of an ongoing discussion.</strong><br>
  Please contribute in the corresponding GitHub issues:
  <a href="https://github.com/eHealthAfrica/eHealthAfrica.github.io/issues/31">README</a>,
  <a href="https://github.com/eHealthAfrica/eHealthAfrica.github.io/issues/22">HTML</a>,
  <a href="https://github.com/eHealthAfrica/eHealthAfrica.github.io/issues/21">Sass</a>,
  <a href="https://github.com/eHealthAfrica/eHealthAfrica.github.io/issues/20">JavaScript</a>.
</div>

## README
The better the README, the faster we can dive into a new project. If we manage
to implement a similar README structure in all our project we will increase our
productivity.

All our READMEs should have the following outline:

1. Name
2. Description
3. Code snippet / usage example
4. Installation
5. Detailed usage
6. Testing
7. License

Please read Joshua Holbrooks [How To Write A Readme](http://jfhbrook.github.io/2011/11/09/readmes.html).

## HTML

_This section owes most of its guidelines from Mark Otto’s [codeguide.co](http://codeguide.co)._

- Use soft tabs with two spaces for indentation
- Use only lowercase
- Nested elements should be indented once
- Always use double quotes on attributes, never single quotes or no quote signs
- Don’t include a trailing slash in self-closing elements, e.g. ```<meta charset="utf-8">```, not ```<meta charset="utf-8" />```
- Don’t omit optional closing tags such as ```</li>``` or ```</p>```
- Use a new line for every block, list, or table element, and indent every such child element

#### Attribute order

HTML attributes should come in this particular order for easier reading of code.

- class
- id, name
- data-*
- src, for, type, href, value
- title, alt
- aria-*, role
- ng-directives

#### Angular views

- Use one-way binding where possible
- Use a separate ```<span translate>``` for localized strings instead of setting translate on another element
- When you need to set the src of an image dynamically use ng-src instead of src with {{ }} template.
- When you need to set the href of an anchor tag dynamically use ng-href instead of href with {{ }} template.
- Instead of using scope variable as string and using it with style attribute with {{ }}, use the directive ng-style with object-like parameters and scope variables as values
- Set spaces after opening and before closing curly-brace expression bindings: ```{% raw %}{{ viewModel }}{% endraw %} ```

## JavaScript

New code should be written according to the rules defined by [standard](https://github.com/feross/standard).

New projects should implement `standard` as a part of the build system, builds should be configured to fail on linting errors, and to warn on code style issues.

### High-Level Rules

- **2 spaces** – for indentation
- **Single quotes for strings** – except to avoid escaping
- **No unused variables** – this one catches *tons* of bugs!
- **No semicolons** – [It's][1] [fine.][2] [Really!][3]
- **Never start a line with `(` or `[`**
    - This is the **only** gotcha with omitting semicolons – *automatically checked for you!*
- **Space after keywords** `if (condition) { ... }`
- **Space after function name** `function name (arg) { ... }`
- Always use `===` instead of `==` – but `obj == null` is allowed to check `null || undefined`.
- Always handle the node.js `err` function parameter
- Always prefix browser globals with `window` – except `document` and `navigator` are okay
  - Prevents accidental use of poorly-named browser globals like `open`, `length`,
    `event`, and `name`.

[1]: http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
[2]: http://inimino.org/~inimino/blog/javascript_semicolons
[3]: https://www.youtube.com/watch?v=gsfbh17Ax9I

## Sass

We use scss instead of .sass syntax and follow Hugo Giraudel’s excellent [Sass Guidelines](http://sass-guidelin.es/) ([tl;dr version](http://sass-guidelin.es/#too-long-didnt-read)).

Basics:

- Two spaces indents
- 80-characters wide lines
- Related selectors on the same line, unrelated selectors on new lines
- A space before the opening brace ({)
- properties and values on the same line
- A space after our property–value delimiting colon (:)
- Each declaration on its own new line
- Opening brace ({) on the same line as our last selector
- First declaration on a new line after our opening brace ({)
- Closing brace (}) on its own new line
- Trailing semi-colon (;) on our last declaration
- Local variables are declared before any declarations and spaced from declarations by a new line
- Mixin calls with no @content come before any declaration
- Nested selectors always after a new line
- Mixin calls with @content come after any nested selector
- No new line before a closing brace (})
- Strings and URLs should be quoted withsingle quotes
- No trailing 0, mandatory leading 0
- 0 values don’t have a unit (e.g. ```margin: 0;```, not ```margin: 0px;```)
- Calculations should be wrapped in parentheses
- No magic numbers
- Colors expressed in keywords > HSL > RGB > hexadecimal
- No selector nesting except for pseudo-classes and pseudo-elements
- Hyphen-delimited, lowercase naming (except variables that should be constants, which are all-caps)
- Extensive comments
- Limited usage of @extend
- Simple mixins
- As few loops as possible, no @while

By example:

    .foo, .foo-bar,
    .baz {
      $length: 42em;

      @include ellipsis;
      @include size($length);
      display: block;
      overflow: hidden;
      margin: 0 auto;

      &:hover {
        color: red;
      }

      @include respond-to('small') {
        overflow: visible;
      }
    }
