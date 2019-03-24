cytoscape-html-label
================================================================================


## Description

This extension provide ability adding labels for Cytoscape nodes and edges. Simple example:

`cyInstance.htmlLabel( [{ tpl: d => '<div>' + d + '</div>' }] );`

Demo: https://onitsin.github.io/cytoscape-html-label/

## Fitures
- optimised for high performance with high number nodes, for smooth panning and zooming.
- customizable any labels with different templates.

## Dependencies

 * Cytoscape.js ^3.5.0


## Usage instructions

Download the library:
 * via npm: `npm install cytoscape-html-label`,
 * via bower: `bower install cytoscape-html-label`, or
 * via direct download in the repository (probably from a tag).

#### Plain HTML/JS has the extension registered for you automatically:
```html
<script src="http://cytoscape.github.io/cytoscape.js/api/cytoscape.js-latest/cytoscape.min.js"></script>
<script src="cytoscape-html-label.js"></script>
```

#### RequireJs approach:
`require()` the library as appropriate for your project:

CommonJS:
```js
var cytoscape = require('cytoscape');
var htmlLabel = require('cytoscape-html-label');
htmlLabel( cytoscape ); // register extension
```

AMD:
```js
require(['cytoscape', 'cytoscape-html-label'], function( cytoscape, htmlLabel ){
  htmlLabel( cytoscape ); // register extension
});
```


## API

htmlLabel parameter is an array of options:

```js
cyInstance.htmlLabel(
[
    {
        query: 'node', // cytoscape query selector
        halign: 'center', // title vertical position. Can be 'left',''center, 'right'
        valign: 'center', // title vertical position. Can be 'top',''center, 'bottom'
        halignBox: 'center', // title vertical position. Can be 'left',''center, 'right'
        valignBox: 'center', // title relative box vertical position. Can be 'top',''center, 'bottom'
        ealign: 'midpoint', // title position on edge. Can be 'source', 'midpoint', 'target'
        autorotate: true, // autorotate can be used to align the label to the edge 
        cssClass: '', // any classes will be as attribute of <div> container for every title
        tpl: function(data){return '<span>' + data + '</span>';} // your html template here
    }
]
    );
```

## Example usage

Code example:
```js
// create Cy instance
var cyInstance = cytoscape({
    container: document.getElementById('cy'),
    layout: {
        name: 'random'
    },
    elements: [ // your cy elements
        { group: "nodes", data: { id: 'a1', name: 'a1' }, classes: 'l1' },
        { group: "nodes", data: { id: 'a2', name: 'a2' }, classes: 'l1' },
        { group: "nodes", data: { id: 'a3', name: 'a3' }, classes: 'l1' },
        { group: "nodes", data: { id: 'a5', name: 'a5' }, classes: 'l2' },
        { group: "edges", data: { id: 'a1_a5', source: 'a1', target: 'a5'}, classes: 'e1'},
        { group: "edges", data: { id: 'a2_a5', source: 'a2', target: 'a5'}, classes: 'e1'},
    ]
});

// set htmlLabel for your Cy instance
cyInstance.htmlLabel([{
        query: '.l1',
        valign: "top",
        halign: "left",
        valignBox: "top",
        halignBox: "left",
        tpl: function(data) {
            return '<p class="cy-title__p1">' + data.id + '</p>' + '<p  class="cy-title__p2">' + data.name + '</p>';
        }
    },
    {
        query: '.l2',
        tpl: function(data) {
            return '<p class="cy-title__p1">' + data.id + '</p>' + '<p  class="cy-title__p2">' + data.name + '</p>';
        }
    },
    {
        query: '.e1',
        ealign: 'midpoint',
        tpl: function(data) {
            return '<b>' + data.id + '</b>';
        }
    }
]);
```

Demo here: https://onitsin.github.io/cytoscape-html-label/


## how to build and develop:
2) Run `npm start`
2) Create change in src/cytoscape-html-label.ts
2) When finished => `npm run test`
2) Prepare js and min files: `npm run build`
2) `git commit`
Then, for version update and publish:
2) Create new npm version: `gulp patch`, `gulp feature` or `gulp release`
2) `npm publish`
