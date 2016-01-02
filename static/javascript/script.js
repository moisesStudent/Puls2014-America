var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$boton = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();


//Almacenar temporalmete texto de los formularios..
if (localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
};

var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000);


//Funcion para Mostrar el Formulario para Agregar Post..
function mostrarFormulario(){
	$('#publicar_nav a').toggleClass('disabled');
	$form.slideToggle();
	$list.slideToggle();
	return false;
}


//Funcion para Agregar post..
function agregarPost(){
	mostrarFormulario()
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$list.prepend($clone);

	$titulo.val('');
	$url.val('');

	$clone.fadeIn();

	return false
}


// Eventos..
$boton.click( mostrarFormulario );
$form.on('submit', agregarPost );