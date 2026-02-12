function InitExternEval(){
	if (window.GameBreak) return;
	window.GameBreak = {
		openGame: function(url, options){
			options = options || {};
			var features = options.features || 'width=1100,height=800';
			window.open(url, options.windowName || '_blank', features);
		},
		getGamesList: async function(){
			try{
				var res = await fetch('/games_list.json');
				if (!res.ok) return [];
				return await res.json();
			}catch(e){
				console.error('GameBreak.getGamesList error', e);
				return [];
			}
		},
		log: function(){
			console.log.apply(console, arguments);
		}
	};
	console.info('GameBreak API initialized');
}
