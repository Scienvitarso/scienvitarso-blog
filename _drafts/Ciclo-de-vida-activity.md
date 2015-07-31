---
layout: post
title: "Activity Life Cicle"
description: "Ciclo de vida da activity"
author: "Fábio da Silva Santana"
category: "Android"
subcategory: "interface"
image: "avatar.jpg"
imageCover: ""
---

<h3>Activity, o que é?Como são criadas? Como sobrevivem? Não perca</h3>
<h4> Uma pequena consideração antes de começar</h4>

<p>
    Primeiramente Muito prazer a você que está lendo meu blog, eu sou Fábio e toda a descrição, ou pelo um pouco dela
    está nesse link, e esse é meu primeiro post!!! \o/.
</p>

<h4>Activity o que é?</h4>
<p> 
    Uma definição simples sem muito conceito técnico é que: a activity é o meio por qual o usuário faz a interação 
    com o aplicativo. Nela podemos carregar aquele layout bonito que os caras de Desginer fazem <strike>em 5 minutos</strike>
    e fica mais bonito que os nossos depois de 20 horas tentando fazer qualquer tela descente.<br>
    Acredito que como tudo nessa vida a Activity tem um ciclo de vida e compreender o ciclo de vida da Activity é 
    de fundamental importância para compreender o comportamento do seu aplicativo.
</p>
<p> Para criar uma Activity sua classe deve extender a classe Activity</p>

<pre class="prettyprint language-java" >
public class MyActivity extends Activity {
	
	@Override
	protected void onCreate (Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.my_layout);
	}
	...
}
</pre>

<p> Toda Activity precisa ser declarada no arquivo Manifest </p>

<pre class="prettyprint language-xml">
	&lt;activity
		android:name = ".MyActivity"
		android:label = "MyActivity" &gt;
	&lt; !-- Outras configurações -- &gt;
      &lt;/activity&gt;
</pre>


<h4>Ciclo de vida?</h4>

<p>
    Dentro do android existe uma stack em que as Activitys são empilhadas de acordo com seu uso. Imagine que você
    está usando uma aplicação e dentro da sua aplicação existem duas Activitys, quando a segunda Activity é invocada
	ela sobrepoe a primeira ficando no topo da pilha. Caso você abra outra aplicação enquanto a sua é executada o mesmo irá
	acontecer e sua activity ficará na parte inferior da stack. Toda essa interação que existe da activity ir para para o topo da pilha ficar rodando em background, alguns metodos são invocados durante todo esse processo, esses metodos são descritos logo abaixo.  Devido as limitações dos dispositivos android, o próprio android
	pode finalizar as activitys que julgar necessário para liberar recursos no sistema para executar tarefas mais importantes ou
	as novas que o usuário requisitar.
</p>
<p>
   <a href=""> onResume </a>- É o estado em que a activity está no topo da pilha e o usuário pode interagir com ela.<br>
   <a href=""> onPause </a> - É o estado em que a acvitivy está parcialmente coberta. O usuário perde a interação com a mesma
    e nenhum codigo é executado nesse estado.<br>
  <a href="">  onStop </a>- Quando a activity não está mais visível para o usuário ela está no estado de onStop rodando em background.
    nesse estado os valores de variaveis e outras instancias dentro da activity é mantida, porem não é possível executar
    nenhum código.<br>
  <a href="">  onCreate </a>- Método inicial para a criação da activity, esse método é o único que precisa ser obrigatóriamente inciado
    também é aqui definimos a interface que será mostrada para o usuário e podemos inicializar algumas variaveis membros
    e algumas customizações de UI.<br>
  <a href="">  onStart </a>- logo após o onCreate, esse metodo é chamado a tela se torna visível para o usuário porem o mesmo ainda não
    tem o controle de interação sobre ela.<br>
  <a href="">  onResume </a>- é quando a activity está disponível para o usuário utilizar.<br>
    (Note: as chamadas de onCreate para onStart e onResume, são transações rapídas, então coloque no onCreate e onStart
    somente o necessário e nada de processos pesados).<br>
</p>
   <!--imagem life-cicle -->
   <figure>
   <img class="responsive-img" src="{{site.baseurl}}/img/basic-lifecycle-create.png">
   <figcaption>Imagem demonstrando o ciclo de vida da activity. by <a 
   href="http://developer.android.com/training/basics/activity-lifecycle/starting.html">Android developers</a> 
   </figcaption>
   </figure>
