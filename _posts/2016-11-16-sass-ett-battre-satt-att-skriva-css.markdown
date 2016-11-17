---
layout: post
title:  "SASS - ett bättre sätt att skriva CSS?"
date:   2016-11-16 14:37:30
author: Simon Österdahl
image: sass.png
image-alt: Bild med text sass.
comments: true
---
SASS är ett annorlunda sätt att skriva CSS-kod. SASS är en så kallad "CSS pre-compiler", vilket innebär att all SASS-kod man skriver kommer att kompileras. Den kompilerade SASS-koden är vanlig CSS-kod.

SASS är väldigt likt CSS men med några extra funktioner. En av dessa funktioner är möjligheten att använda variabler. En annan skillnad mellan SASS och CSS är att SASS stödjer såkallad "nesting". Här följer ett exempel som visar skillnaden SASS och CSS.

CSS:
{% highlight css %}
header {
    height:300px;
}

header a {
    color:blue;
}
{% endhighlight %}

SASS:
{% highlight css %}
header {
    height:300px;
    
    a {
        color:blue;
    }
}
{% endhighlight %}

När jag skapade denna webbplats använde jag mig av SASS.

Att använda SASS kan ha flera fördelar. Förutom de redan nämnda extra funktionerna gör SASS det möjligt att dela upp sin kod i flera filer. När SASS-koden sedan komileras läggs all resulterande CSS-kod i en och samma fil, vilket är en fördel för att minska antalet anrop klienten gör till servern.

Nackdelar med SASS är att man inte har full kontroll över den resulterande CSS-filen. SASS fungerar som ett extra lager vilket också kan göra en webbplats svårare att underhålla på grund av extra verktyg som används. Det blir dessutom svårare att hitta fel i din kod, eftersom radnummer i webbläsaren är inte samma som i utvecklingsmiljön.
