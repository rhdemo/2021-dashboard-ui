const template = `
<style>
	:host {
		display:block;
		width: 100%;
	}
</style>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 410">             <defs>                 
		<style>                     
			.boardcell {                         
			fill: var(--ocean);                         
			stroke: #fff;                         
			stroke-width: 2px;                     
			}                     
			.boardcont { stroke: #fff; stroke-width: 2px;}                 
		</style>                 
		<pattern id="p1board" width="40" height="40" patternUnits="userSpaceOnUse">                   
			<rect class="boardcell" width="40" height="40"></rect>                 
		</pattern>                 
		<pattern id="p2board" width="40" height="40" y="10" patternUnits="userSpaceOnUse">                     
			<rect class="boardcell" width="40" height="40"></rect>                 
		</pattern>             
	</defs>             
	<rect class="boardcont" x="0" y="0" width="200" height="200" fill="url(#p1board)"></rect>             
	<rect class="boardcont" x="0" y="210" width="200" height="200" fill="url(#p2board)"></rect>             
	<image x="5" y="5" width="30" height="30" xlink:href="/img/hit-peg.png"></image>             
	<image x="50" y="10" width="20" height="20" xlink:href="/img/hit-peg.png"></image>             
	<image x="90" y="10" width="20" height="20" xlink:href="/img/hit-peg.png"></image>             
	<image x="130" y="10" width="20" height="20" xlink:href="/img/hit-peg.png"></image>             
	<image x="170" y="10" width="20" height="20" xlink:href="/img/hit-peg.png"></image>          
</svg>`;

export class RHReplay extends HTMLElement {
constructor() {
super();
this.attachShadow({mode:"open"});
let tmpl = document.createElement('template');
tmpl.innerHTML = template;
this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
}

connectedCallback() {

}
}
window.customElements.define('rh-replay', RHReplay);
