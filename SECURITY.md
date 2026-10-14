# Politique de sécurité

## Signaler une faille

**N'ouvre pas d'issue publique.** Passe par les [security advisories
GitHub](../../security/advisories/new), ou écris à **hamza.karrouchi.dev@gmail.com**.

Réponse sous 72 heures.

## Ce qui nous intéresse particulièrement

Dans un jeu d'information cachée, **une fuite d'information est une faille de sécurité**, pas
un simple bug. Sont donc prioritaires :

- Un moyen pour un client d'apprendre le rôle d'un autre joueur
- Un moyen de voir ou deviner les actions de nuit qui ne le concernent pas
- Une action jouable hors de son tour, ou par un joueur mort
- Une usurpation de l'identité d'un autre joueur
- Une injection dans le chat (XSS)
- Une prise de contrôle d'un salon par un joueur qui ne l'a pas créé

Si tu as trouvé comment tricher, c'est exactement ce qu'on veut savoir.

## Hors périmètre

- Les attaques par déni de service par volume
- Les failles nécessitant un accès physique à la machine du joueur
- Les signalements automatisés sans démonstration d'impact

## Versions suivies

Le projet est en développement actif. Seule la branche `main` est maintenue.
