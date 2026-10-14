# 🚀 Déploiement

> Cible : un VPS. Les WebSockets exigent un processus Node permanent — un hébergement
> mutualisé PHP ne convient pas.

## Ce qu'il faut sur la machine

- Node ≥ 22 (voir [`.nvmrc`](../.nvmrc))
- PostgreSQL (comptes et historique uniquement — pas les parties en cours)
- Un reverse proxy terminant le TLS et **sachant relayer les WebSockets**

## Le piège du reverse proxy

C'est l'erreur la plus courante : une configuration Nginx par défaut coupe les WebSockets.
Les deux lignes qui comptent :

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;      # ← indispensable
    proxy_set_header Connection "upgrade";       # ← indispensable
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_read_timeout 3600s;                    # une partie dure longtemps sans trafic
}
```

Sans `proxy_read_timeout` généreux, les joueurs sont déconnectés pendant les phases calmes.

## Mise en service

```bash
npm ci
npm run build
cp .env.example .env    # puis remplir, notamment SESSION_SECRET
npm start --workspace @wolfsona/server
```

`SESSION_SECRET` en production :

```bash
openssl rand -hex 32
```

## Assets

Déposer les cartes dans `assets/arcanes/` **sur le serveur**, après le déploiement. Elles ne
sont jamais dans le dépôt — voir [ASSETS.md](ASSETS.md). Sans elles, le jeu tourne avec son
repli typographique.

## À savoir avant de redémarrer

**Un redémarrage interrompt toutes les parties en cours** : elles vivent en mémoire. Prévenir
les joueurs, ou attendre un creux. C'est un compromis assumé de la v1 ([ARCHITECTURE.md](ARCHITECTURE.md)).
