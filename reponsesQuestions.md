- Qu'est-ce que JavaScript vanilla ?
C'est la version de javascript la plus élémentaire possible, sans aucun ajout de librairies 


- Qu'est-ce qu'AJAX ?
C'est une technologie qui permet de communiquer facilement avec le serveur car il utilise le code javascript en arrière plan tout en faisant des requêtes web à partir de celui-ci (ce qui évite de recharger tout le code pour chaque requête faite). C'est une technologie très utile pour des requêtes petites et récurrentes comme la recharge d'un panier sur un site de vente. 
Ca permet donc d'avoir des interactions avec le serveur plus facilement et rapidement.




- Pourquoi JavaScript est parfois mal-aimé des devs ? **(s)**
Car ce langage permet bcp plus de liberté comme il n'est pas typé (contrairement à beaucoup d'autres langages); il va donc de ce fait, être une plus grande source d'erreur lors de l'écriture du code
De plus, ce langage présente parfois des comportements complètement incohérents (dû à des erreurs lors de la conception de celui-ci) et qui peuvent créer des "fausses" erreurs dans le code. 
Ex:  [] + [] vous donne une chaîne vide, [] + {} vous donne [objet, objet], {} + [] vous donne zéro, {} + {} vous donne NaN, etc
Enfin, un des plus gros soucis est l'affichage d'erreur; javascript n'est pas "doué" pour bien cibler les erreurs de notre code (surtout syntaxiques)



- Y a-t-il des types en JavaScript ? Si oui, lesquels ?
il y a seulement 6 types en js , dont 5 qui sont primitifs (Number , String , Boolean , Null et Undefined) et le dernier qui est Object. 
Null et undefined sont des types spéciaux et sont souvent à l'origine d'erreur de code.


- Est-ce que SASS est un langage qui est interprété par les navigateurs ?
Pas du tout, Sass est un langage compilé
En effet, on a besoin de compilé le fichier .sass en fichier.css pour que le navigateur puisse le lire 



- Pourquoi peut-on dire que JavaScript est un langage "multi-paradigmes" ? **(s)**
Car depuis l'arrivée de ES6, JS est capable de prendre en charge la POO (Programmation orientée objet) et donc de créer des classes ou encore des prototypes. 
Seulement, comme c'est assez récent et pas encore développé, JS reste pour l'instant principalement un langage FONCTIONNEL. 



- En JS, une fonction peut-elle retourner une fonction ?
Oui car les fonctions peuvent être de différents types, autant un objet qu'un type primitif (comme une str)
Il est donc possible de retourner une fonction dans une autre , mais aussi de prendre une fonction comme argument d'une autre fonction par exemple 



- Est-ce que `alert` existe en Node.JS ?
oui, c'est une propriété des objets 'window' du navigateur et c'est accessible par javascript (tout comme console.log)



- Est-ce que `window.console.log === console.log` dans le navigateur ?
Oui, car console est un objet de window 



- Quel est votre aspect préféré de JavaScript ? **(s)**
- Facile à prendre en main 



