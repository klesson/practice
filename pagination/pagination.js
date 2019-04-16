(function() {
	window.onload = function() {			
		var buttons = document.getElementsByClassName('button');
		var curSelected = buttons.item(3);
		for(var i = 0; i < buttons.length; i++) {
			var btn = buttons.item(i);
			btn.addEventListener('click', function(event) {
				console.log('click', event, event.target);
				curSelected.classList.remove('selected');
				event.target.classList.add('selected');
				curSelected = event.target;
			});
		}
	}
})();