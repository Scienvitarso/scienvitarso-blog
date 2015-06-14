---
layout: post
title: "Shared Provider"
description: "Compartilhando informações com outras aplicações"
author: "Fábio da Silva Santana"
image: "avatar.jpg"
imageCover: "android-sharedProvider.png"
---

<h2 class="header">Shared Provider</h2>
<p> A partir do android 4.0 foi implementada uma função interessante para compartilhar ações entre aplicativos chamado ShareActionProvider. Essa função é adicionada na sua Action Bar é serve para compartilhar informações entre aplicativos. É possível usar essa informação para compartilhar algo do seu aplicativo como uma menesagem do facebook ou do whatsup, enviar informações através do bluetooth entre outras coisas. 
Caso esteja trabalhando com um target menor que o a API 14 o android disponibiliza essa função na support library.</p>
 
<p>Inserindo o ShareActionProvider na Action bar Para app's com versão igual o superior a API 14 inserimos o seguinte item no menu.xml </p>
<?prettify lang=html linenums=true?>
<pre class="prettyprint language-xml" >
&lt;menu xmlns:android="http://schemas.android.com/apk/res/android"&gt; 
    &lt;item 
            android:id="@+id/menu_item_share" 
            android:showAsAction="ifRoom" 
            android:title="Share" 
            android:actionProviderClass= 
                "android.widget.ShareActionProvider" /&gt;
    &lt;!-- Outros itens que desejar no menu --&gt;
&lt;/menu&gt;
</pre>
<p> Caso esteja usando uma versão inferior a API 14 use o ShareActionProvider da support Library </p>

<?prettify lang=html linenums=true?>
<pre class="prettyprint language-xml" >
&lt;menu xmlns:android="http://schemas.android.com/apk/res/android" 
xmlns:app="http://schemas.android.com/apk/res-auto" &gt;
 
&lt;item 
android:id="@+id/menu_item_share" 
android:title="Share" 
app:showAsAction="Aways" 
app:actionProviderClass = "android.support.v7.widget.ShareActionProvider" /&gt; 
&lt;!-- Outros itens que desejar no menu --&gt; 
&lt;/menu>&gt;
</pre>

<p>Com isso o icone de Compartilhar já deve aparecer na sua ActionBar.</p>

<!--imagem celular -->
<img class="responsive-img" src="{{site.url}}/img/android-sharedProvider.png">

<p>Após adicionar o ícone na ActionBar temos que inserir a função de compartilhamento no item dentro do método onCreateOpitionsMenu. Vamos pergar a referência do item com o método findItem disponibilizada pela classe Menu que irá retornar um MenuItem , após isso vamos recuperar o ActionProvider com o método getActionProvider, que é feito de maneira distinta dependendo da API minima utilizada. Para API 14 ou maior utilizamos o MenuItem recuperado do metodo findItem. Para API com suporte a library v7 utilizamos  MenuItemCompat.getActionProvider e passamos como paramêtro o MenuItem. Finalmente com o ActionProvider recuperada temos que colocar uma Intent para ele usando o método setShareIntent.</p>

<p> usando API 14 ou maior </p>

<?prettify lang=java linenums=true?>
<pre class="prettyprint">
<code class="language-java">
private ShareActionProvider mShareActionProvider; 
 
... 
 
public boolean onCreateOptionsMenu(Menu menu) { 
    getMenuInflater().inflate (R.menu.detail_menu, menu); 
    MenuItem item = menu.findItem(R.id.menu_item_share); 
    mShareActionProvider = ( ShareActionProvider ) item.getActionProvider(); 
    mShareActionProvider.setShareIntent(shareIntent());  
    return true; 
} 
 
private Intent shareIntent() { 
    Intent intent = new Intent(Intent.ACTION_SEND); 
    intent.setType("text/plain"); 
    intent.putExtra(Intent.EXTRA_TEXT, "MENSAGEM QUE DESEJA ENVIAR"); 
    return intent; 
} 
</code>
</pre>

<p> Usando support library v7 </p>

<?prettify lang=java linenums=true?>
<pre class="prettyprint">
<code class="language-java">
private ShareActionProvider mShareActionProvider; 
 
... 
 
public boolean onCreateOptionsMenu(Menu menu) { 
    getMenuInflater().inflate (R.menu.detail_menu, menu); 
    MenuItem item = menu.findItem(R.id.menu_item_share); 
    mShareActionProvider = (ShareActionProvider ) MenuItemCompat.getActionProvider(item); 
    mShareActionProvider.setShareIntent(shareIntent());  
    return true; 
} 
 
private Intent shareIntent( ) { 
    Intent intent = new Intent(Intent.ACTION_SEND); 
    intent.setType("text/plain"); 
    intent.putExtra(Intent.EXTRA_TEXT, "PIPMENSAGEM QUE DESEJA ENVIAROCA"); 
    return intent; 
} 
</code>
</pre>


