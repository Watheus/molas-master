$(function(){
	$(window).scroll(function(){
        // Captura o evento scroll da pÃ¡gina
		var window_scrolltop = $(this).scrollTop();
		
		// Passa por cada elemento com a classe .parallax
		$('#home').each(function(){
            // Joga o objeto $('.parallax')em uma variÃ¡vel
			var obj = $(this);
			
			// Garante que apenas trabalhemos no elemento que estÃ¡ visÃ­vel na tela
			if ( window_scrolltop >= obj.position().top - obj.height() 
				&& window_scrolltop <= obj.position().top + obj.height()) {
				
				// O atributo data-divisor vai definir a velocidade do efeito
				var divisor = typeof obj.attr('data-divisor') == 'undefined' ? 4 : obj.attr('data-divisor');
				
				// Corrige a diferenÃ§a do primeiro elemento
				if ( obj.is(':first-child') ) {
					var bg_pos = ( window_scrolltop - obj.position().top ) / divisor;
				} else {
					var bg_pos = ( window_scrolltop - obj.position().top + ( obj.height() - 100 ) ) / divisor;
				}
				
				// Modifica a posiÃ§Ã£o do background
				obj.css({
					'background-position' : '50% -' + bg_pos + 'px'
				});
			}
		});
	});
});