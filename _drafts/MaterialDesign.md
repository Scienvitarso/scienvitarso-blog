---
layout: post
title: "Iniciando Com material Design"
description: "Passo a passo de criação de aplicativo com material Design"
author: "Fábio da Silva Santana"
category: "Android"
image: "avatar.jpg"
---
<h2> Introdução ao Material Design </h2>
<h3> O que é material design? </h3>
<a href="https://developer.android.com/design/material/index.html" target="blank">Introdução para Developer </a>
<a href="http://www.google.com/design/spec/what-is-material/environment.html#" target="blank">Introdução para Design </a>
<h2> Pré requisitos </h2>
<p> para utilizar os recursos em versões anteriores a API 21 do android é necessário usar a support library v7 </p>
<a href="https://developer.android.com/tools/support-library/features.html#v7">Referência das support library v7 </a>
<?prettify lang=html linenums=true?>
<pre class="prettyprint language-xml" >
compile 'com.android.support:appcompat-v7:22.2.0', 'com.android.support:design:22.2.0'
</pre>

<h3> Criando uma paleta de cores customizada </h3>

<p>Com Material Design temos uma forma pratica de definir as cores e como elas irão trabalhar dentro do nosso aplicativo
customizando nossa paleta de cores. Na imagem abaixo tem a descrição de cada propriedade da paleta de cores e onde ela irá 
ser aplicada de acordo com sua aplicação</p>
<img class="responsive-img" src="{{site.baseurl}}/img/pallete-color.png"> 
<p>
<strong>primary color = </strong>cor principal do aplicativo, ela será a cor base do seu aplicativo. <br>
<strong>primary color dark  = </strong>cor que da barra superior. <br>
<strong>Accent color = </strong>cor que irá trabalhar como complemento da primary color, sendo aplicada em botões, checkbox, etc... 
</p> 
<h4> criando Color Pallete </h4>
<p> Em res => values => color.xml </p>
<?prettify lang=html linenums=true?>
<pre class="prettyprint language-xml" >
	color.xml
	&lt;?xml version="1.8" encoding="utf-8"?&gt;
		&lt;resources&gt;
		&lt;color name="primary"&gt; #3F51B5 &lt;/color&gt;
		&lt;color name="primary_dark"&gt; #303F9F &lt;/color&gt;
		&lt;color name="accent"&gt; #C5CAE9  &lt;/color&gt;
		&lt;!-- outras cores que desejar --&gt;
	&lt;/resources&gt; 

</pre>

<p> Site para referência sobre cores </p>
<a href="http://www.google.com/design/spec/style/color.html#color-color-palette" 	target="blank"> Material Design Android </a>
<a href="https://www.materialpalette.com/indigo/red" target="blank"> Material Pallete </a>
