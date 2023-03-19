/**
* Good day, and welcome to main.js.
* 
* @module main
*/

console.log(`Are we cross-origin isolated? ${crossOriginIsolated}`);

import { store, component, render } from './modules/reef.es.min.js';
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import microlight from './modules/microlight.min.js';
import MarkdownIt from 'https://cdn.jsdelivr.net/npm/markdown-it@13.0.1/+esm';
import markdownItFootnote from 'https://cdn.jsdelivr.net/npm/markdown-it-footnote@3.0.3/+esm'

// Get the markdown into the DOM
const md = new MarkdownIt({ html: true }).use(markdownItFootnote);
const mdContent = await d3.text("./index.md");
const readHTML = new DOMParser();
const contentParsed = readHTML.parseFromString(md.render(mdContent), "text/html");
const bodyContent = contentParsed.getElementsByTagName("body")[ 0 ];
const content = document.getElementById("content")
while (bodyContent.childNodes.length > 0) {
	content.appendChild(bodyContent.childNodes[ 0 ]);
}

// setup code highlighting
microlight.reset();

// utility functions which would likely go into a separate module in a real app

// SET UP REACTIVE VALUES

// this one is for the loading message you see below the title.
// the blue dot == proper headers are in place
let message = store({ text: "Executing WebR chunks…" })

function showMessage() {
	const { text } = message;
	return `${text}`
}

// whenever we message.text = "something", that "something" will be put in the div in index.md
component('#message', showMessage);

// ========

let rversion = store({ string: "" })

function showRVersion() {
	const { string } = rversion;
	return `${string}`
}

component('#r-version', showRVersion);

// done setting up reactive values

message.text = "Loading WebR from r-wasm.org…";

// the normal WebR dance from the main site

console.time('Execution Time'); // yeah i still care about this

import('https://webr.r-wasm.org/latest/webr.mjs').then(
	async ({ WebR }) => {
		
		globalThis.webR = new WebR({
			WEBR_URL: "https://webr.r-wasm.org/latest/",
			SW_URL: "/webr-app/"
		});
		await globalThis.webR.init();
	
	  const timerEnd = performance.now();
	  console.timeEnd('Execution Time');

    message.text = `${crossOriginIsolated ? '🔵' : '🌕'} WebR Initialized!`;

    rversion.string = await globalThis.webR.evalRString(`R.version.string`);
	
});