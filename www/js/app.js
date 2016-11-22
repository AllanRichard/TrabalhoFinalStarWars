$('.buscarPersonagem').on('click', function() {
	var valorSelecionado = $('#selectPersonagem').val();
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/people/' + valorSelecionado + '/',
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) 
		{
			alert(erro.responseText);
		},
		success: function(data) 
		{
			var divPerson = document.querySelector("#informacaoPersonagem");
			divPerson.innerHTML = "";
			divPerson.innerHTML += "Nome: " + data.name + 
								"<br/>Altura:" + data.height + 
								"<br/>Ano Nasc.: " + data.birth_year +
								"<br/>Genero: " + data.gender + 
								"<br/>";
}});
});

$('.buscarPlaneta').on('click', function() {
	var valorSelecionado = $('#selectPlaneta').val();
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/planets/' + valorSelecionado + '/',
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) 
		{
			alert(erro.responseText);
		},
		success: function(data) 
		{
			var divPerson = document.querySelector("#informacaoPlaneta");
			divPerson.innerHTML = "";
			divPerson.innerHTML += "Nome: " + data.name + 
			                       "<br/>Periodo de Rotacao:" + data.rotation_period + 
			                       "<br/>Perioro de Orbita: " + data.orbital_period +
								   "<br/>Populacao: " + data.population + 
								   "<br/>";
}});
});

$('.buscarNave').on('click', function() {
	var valorSelecionado = $('#selectNave').val();
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/starships/' + valorSelecionado + '/',
		dataType:'json',
		data: { get_param: 'value' },
		error: function(erro) 
		{
			alert(erro.responseText);
		},
		success: function(data) 
		{
			var divPerson = document.querySelector("#informacaoNave");
			divPerson.innerHTML = "";
			divPerson.innerHTML += "Nome: " + data.name + 
								   "<br/>Modelo:" + data.model + 
								   "<br/>Fabricante: " + data.manufacturer +
								   "<br/>Comprimento: " + data.length + 
								   "<br/>Passageiros: " + data.passengers + 
								   "<br/";
}});
});