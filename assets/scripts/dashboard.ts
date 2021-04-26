document.addEventListener('cpx-socket-ready', e=>{
	if (e.target.id==='stats') {
		let dashboard = document.querySelector('#dashboard');
		let replay = document.querySelector('#replay');
        let targetDoc = e.target.shadowRoot;
		let gameState =  targetDoc.querySelector('[data-attr="game-state"]');
		let gameId;
        let mutConfig = {attributes:true};
		const callback = (mutationList, observer) => {
            for(const mutation of mutationList) {
                if (mutation.type === 'attributes') {
					switch (mutation.target.getAttribute('data-game-state')) {
						case 'replay':
							gameId = targetDoc.querySelector('[data-attr="game-id"]').getAttribute('data-game-id');
							dashboard.className = 'hidden';
							replay.className = '';
							fetch(`/replay/${gameId}`)
								.then(resp=>resp.json())
								.then(data=>{
data.map(replay=>document.querySelector('#replay').appendChild(document.createElement('rh-replay')));
})
						break;
						case 'lobby':
							dashboard.className = '';
							replay.className = 'hidden';
							break;
						case 'paused':
							dashboard.className = '';
							replay.className = 'hidden';
							break;
						default:
							dashboard.className = '';
							replay.className = 'hidden';
							break;
					}
                }
            }
        };

        const observer = new MutationObserver(callback);
		observer.observe(gameState,mutConfig);
	}
});
