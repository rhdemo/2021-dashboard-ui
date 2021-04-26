/*
	PlayerA Board
		20,20	60,20	100,20		140,20		180,20
		20,60	60,60	100,60		140,60		180,60
		20,100	60,100	100,100		140,100		180,100
		20,140	60,140	100,140		140,140		180,140
		20,180	60,180	100,180		140,180		180,180

*/

const template = `
<style>
	:host {
		display:block;
		width: 100%;
	}
</style>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 410">
	<defs>
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
	<g id="turns">
	</g>
</svg>`;

export class RHReplay extends HTMLElement {
	turn = 0;
	turns = [];
	[Symbol.iterator]() {
		return this;
	}
	next() {
		if (this.turn >= this.turns.length) {
			let turnsCont = this.shadowRoot.querySelector('#turns');
			while (turnsCont.firstChild) { turnsCont.removeChild(turnsCont.firstChild); }
			this.turn = 0;
		}
		return {
			value: this.turns[this.turn++],
			done: false
		}
	}
	
	constructor() {
		super();
		this.attachShadow({mode:"open"});
		let tmpl = document.createElement('template');
		tmpl.innerHTML = template;
		this.shadowRoot.appendChild(tmpl.content.cloneNode(true));
	}

	connectedCallback() {
		top.addEventListener('next-turn', e => {
			console.log('Next Turn:', this.next().value);
		});
	}
}

window.customElements.define('rh-replay', RHReplay);
