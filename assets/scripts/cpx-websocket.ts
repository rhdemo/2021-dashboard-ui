export class CPXWebSocket extends HTMLElement {
    template;

    _url = '';
    get url() { return this._url; }
    set url(val) {
        if (this._url === val) return;
        this._url = val;
        this.setAttribute('url',this._url);
    }

    get state() { return ['connecting','open','closing','closed'][this.socket.readyState]}

    _socket:WebSocket;
    get socket() { return this._socket; }
    set socket(val) {
        if (this._socket === val) return;
        this._socket = val;
    }

    _data:any;
    get data() { return this._data; }
    set data(val) {
        if (this._data === val) return;
        this._data = val;
        this.render();
    }
    
    // get cssStyles() {
    //     let css = document.createElement('style');
    //     css.type = 'text/css';
    //     let styles = `
    //         :host {
    //             display:block;
    //         }
    //     `;
    //     if (css.styleSheet) css.styleSheet.cssText = styles;
    //     else css.appendChild(document.createTextNode(styles))
    //     return css;
    // }

    constructor(url:string) {
        super();
        this.attachShadow({ mode: "open" });
        this.template = this.querySelector('template').cloneNode(true);
        //document.createElement('template');

        this.logState = this.logState.bind(this);
        this.logMessage = this.logMessage.bind(this);
        this.logError = this.logError.bind(this);
    }

    connectedCallback() {
        //this.template.innerHTML = this.querySelector('template').innerText;
        // this.shadowRoot.appendChild(this.cssStyles);
        
        this.socket = new WebSocket(this.url);
        this.socket.addEventListener('open', this.logState);
        this.socket.addEventListener('message', this.logMessage);
        this.socket.addEventListener('close', this.logState);
        this.socket.addEventListener('error', this.logError);
        this.render();
    }

    static get observedAttributes() {
        return ['url']
    }

    attributeChangedCallback(name:string, oldVal, newVal:any) {
        this[name] = newVal;
    }

    render() {
        /*
        data-key = in the scope, place the data[key] in any delimiter
        data-repeat = iterate over the scoped item
        */
       if(this.data) {
           //console.log(this.data);
        this.template = this.querySelector('template').cloneNode(true);
        let tmplKeys = this.template.content.querySelectorAll('[data-key]');
        tmplKeys.forEach(el => {
            //console.log(this.data[el.getAttribute('data-key')]);
            el.innerHTML = el.innerHTML.replace(/\${([^{]+[^}])}/g, this.data[el.getAttribute('data-key')]||'');
        });
        let tmplRepeats = this.template.content.querySelectorAll('[data-repeat]');
        tmplRepeats.forEach(el => {
            let attr = el.getAttribute('data-repeat');
            let scope = attr === 'data' ? this.data : this.data[attr];
            let items = el.innerHTML.match(/\${[^{]+[^}]}/g);
            if(items && items.length > 0) {
                let html = el.outerHTML;
                let result = '';
                for(let i=0; i<scope.length; i++) {
                    result = `${result}
                    ${items.reduce((a,c) => {
                        //console.log(`Reduce: ${a},${c},${scope[i][c.replace(/[\$\{\}]/g,'')]}`);
                        return a.replace(c,scope[i][c.replace(/[\$\{\}]/g,'')]);
                    },html)}`;
                }
                el.parentNode.innerHTML = result;
            }
        });
        while (this.shadowRoot.firstChild) { this.shadowRoot.removeChild(this.shadowRoot.firstChild); }
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        }
    }

    start() {
        if (this.state !== 'open' && this.state !== 'connecting') {
            this.socket = new WebSocket(this.url);
        }
    }

    stop() { return this.close; }
    close() {
        this.socket.close()
    }
    
    logState(e) {
        console.log('ReadyState:', ['connecting','open','closing','closed'][this.socket.readyState]);
    }

    logMessage(e) {
        this.data = JSON.parse(e.data);
        //console.log(e.data);
    }

    logError(e) {
        console.log('Error:', e);
    }
}
window.customElements.define('cpx-websocket', CPXWebSocket);
