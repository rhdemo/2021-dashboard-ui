document.addEventListener('cpx-socket-ready', e=>{
	if (e.target.id==='stats') {
		let status = document.querySelector('#status');
        let targetNode = e.target.shadowRoot.querySelector('[data-attr="game-state"]');
        let mutConfig = {attributes:true};
		const callback = (mutationList, observer) => {
            for(const mutation of mutationList) {
                if (mutation.type === 'attributes') {
					switch (mutation.target.getAttribute('data-game-state')) {
						case 'replay':
							status.innerHTML = "REPLAY";
							console.log('Replay Active');
						break;
						case 'lobby':
							status.innerHTML = "LOBBY";
							console.log('Lobby Active');
							break;
						case 'paused':
							status.innerHTML = "PAUSED";
							console.log('Game Paused');
							break;
						default:
							status.innerHTML = "GAME ON!";
							console.log('Game Active');
							break;
					}
                }
            }
        };

        const observer = new MutationObserver(callback);
		observer.observe(targetNode,mutConfig);
	}
});
