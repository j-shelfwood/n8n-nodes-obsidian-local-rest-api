# n8n-nodes-obsidian-local-rest-api

A community node for n8n that allows you to interact with your Obsidian Vault via a REST API.

![Banner](banner.webp)

## Prerequisites

Before using this node, you must have the [Obsidian Vault REST API](https://github.com/j-shelfwood/obsidian-local-rest-api) set up and running (e.g. at `http://localhost:8000`). Follow that repository's README to install and start the API.

## Installation

```bash
npm install n8n-nodes-obsidian-local-rest-api
```

## Credentials

When adding the node, create **Bearer Token** credentials with:

- **Host**: URL of your Obsidian Vault REST API (e.g. `http://localhost:8000`)
- **Access Token**: Your bearer token

## Node

After installing and connecting your credentials, add the **Obsidian Vault REST API** node. Select your **Resource** and **Operation** as defined in the bundled OpenAPI spec.

## Building & Publishing

- Source TypeScript lives under `src/`.
- On `npm install` or before publishing, the `prepare` script runs `npm run build` to compile TypeScript and bundle the OpenAPI spec & icon into `dist/`.
- CI (GitHub Actions) does `npm ci`, `npm run build`, then `npm publish` on tags `v*.*.*`.

---

_Feedback and contributions welcome!_
