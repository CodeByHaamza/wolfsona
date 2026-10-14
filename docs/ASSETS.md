# 🖼️ Assets

## Pourquoi ce dépôt ne contient aucune image d'arcane

Les illustrations utilisées en production viennent de *Persona* et appartiennent à
**ATLUS / SEGA**. Le dépôt est public : redistribuer ces fichiers reviendrait à les publier,
pas seulement à les utiliser. C'est une différence qui compte.

Le code est donc ouvert, les assets restent dehors. `.gitignore` et un contrôle automatique
en CI empêchent de les commiter par mégarde.

## Le jeu fonctionne sans eux

En l'absence d'images, l'interface retombe sur des **cartes typographiques** : chiffre romain,
nom de l'arcane, couleur du camp. Ce n'est pas un écran d'erreur, c'est une présentation
volontairement sobre et entièrement jouable.

Ce repli n'est pas facultatif : il garantit qu'un contributeur peut cloner le dépôt, lancer le
jeu et développer sans avoir à se procurer quoi que ce soit.

## Convention de nommage

```
assets/arcanes/<minuscules_underscore>.webp
```

Exemples : `le_mat.webp`, `les_amoureux.webp`, `la_lune.webp`.

Format **WebP**, largeur maximale **512 px**, poids visé **sous 100 Ko** par carte.

## Déploiement

Les assets sont déposés sur le serveur au moment du déploiement, hors du dépôt Git. Voir
[DEPLOY.md](DEPLOY.md).

## Si tu veux publier le jeu sans dépendre d'ATLUS

Deux voies, toutes deux viables :

1. **Le tarot de Marseille.** Les illustrations historiques sont dans le domaine public et
   collent parfaitement aux arcanes. Ambiance tarot ancien plutôt que Persona moderne.
2. **De l'art original.** Des cartes dessinées pour le jeu — ce qui, accessoirement, rend
   le projet distribuable sans réserve.
