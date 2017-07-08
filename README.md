<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>Typer - Game</title>
	<link rel="stylesheet" href="css/libs/materialize.min.css">
	<link rel="stylesheet" href="css/estilos.css">
	<link rel="stylesheet" href="css/libs/google-fonts.css">
</head>
<body>
<div class="container">
	<h1 class="center">Typer - Game</h1>
	<p class="frase center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut pretium nulla. Donec luctus consequat iaculis. Nulla in tristique mi, a sollicitudin nibh. In suscipit tincidunt mauris ut vestibulum. Aenean at sapien tincidunt, semper quam ornare, bibendum odio.</p>

	<ul class="informacoes center">
		<li>
			<i class="small material-icons icones">description</i>
			<span id="tamanho-frase">0</span> palavras
		</li>
		<li>
			<i class="small material-icons icones">query_builder</i>
			<span id="tempo-digitacao">10</span> segundos
		</li>
	</ul>

	<textarea class="campo-digitacao" rows="8" cols="40"></textarea>

    <div class="botoes">
        <button class="btn-floating btn-large waves-effect waves-light red" id="botao-reiniciar">
            <i class="material-icons">restore</i>
        </button>
    </div>
	<ul class="center">
		<li><span id="contador-caracteres">0</span> caracteres</li>
		<li><span id="contador-palavras">0</span> palavras</li>
	</ul>

	<section class="placar">
		<h3 class="center">Placar</h3>
		<table class="centered bordered" >
			<thead>
				<tr>
					<th>Nome</th>
					<th>Nº de palavras</th>
					<th>Remover</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</table>
	</section>
</div>
<script src="js/jquery.js"></script>
<script src="js/main.js"></script>
<script src="js/placar.js"></script>
</body>
</html>
Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help
