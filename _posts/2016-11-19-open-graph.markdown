---
layout: post
title:  'Open Graph'
date:   2016-11-19 14:37:30
author: Simon Österdahl
image: open_graph.png
image-alt: 
comments: true
---
Open Graph är ett protokoll som vill vara en standard för hur webbplatser visar förhandsvisningar av andra webbplatser. Om någon exempelvis delar en länk till en webbplats på Facebook så är det ganska trevligt om en förhandsvisning av de delade webbplatsen visas. Denna förhandsvisning kan vara en titel, en bild och en liten del av texten från den delade webbplatsen.

För att Facebook och andra sociala medier ska veta vilken titel, bild och text som ska visas används protokollet Open Graph. Med Open Graph kan man ange titel, bild, text och många andra parametrar som visas i förhandsvisningar i andra webbplatser.

När jag implementerade Open Graph på denna webbplats gjorde jag det på ungefär följande sätt. Observera att följande kod är html-kod skrivet i Jekyll.

{% highlight html %}
<!-- OPEN GRAPH -->
<meta property='og:title' content='{ page.title }'>
<meta property='og:url' content='{ site.url }'>
<meta property='og:description' content='{ page.content }'>
<meta property='og:image' content='{ site.url }/images/{ page.image }'>
<meta property='og:type' content='article'>
{% endhighlight %}
