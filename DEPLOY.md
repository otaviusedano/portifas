# Deploy no Portainer (servidor x86)

Guia rápido para gerar a imagem Docker e subir no Portainer.

> ⚠️ **Ponto de atenção:** o build é feito num Mac (ARM / Apple Silicon), mas o
> servidor do Portainer é **x86 (amd64)**. Se você buildar sem forçar a
> arquitetura, a imagem sai em ARM e **não roda** no servidor
> (erro típico: `exec format error`). Por isso todos os comandos abaixo usam
> `--platform linux/amd64`.

---

## Comando rápido (build x86 + export .tar)

```bash
docker build --platform linux/amd64 -t portfolio-otavio:latest . \
  && docker save -o portfolio-otavio.tar portfolio-otavio:latest
```

Isso gera o arquivo **`portfolio-otavio.tar`** na raiz do projeto, pronto para
importar no Portainer.

---

## Usando o script `docker-image.sh`

O script já faz `build` + `export`, mas **não** força a arquitetura sozinho.
Rode passando a variável de ambiente para garantir o x86:

```bash
DOCKER_DEFAULT_PLATFORM=linux/amd64 ./docker-image.sh all
```

Comandos do script:

| Comando                   | O que faz                                          |
| ------------------------- | -------------------------------------------------- |
| `./docker-image.sh build` | Gera a imagem local `portfolio-otavio:latest`      |
| `./docker-image.sh export`| Exporta a imagem para `portfolio-otavio.tar`       |
| `./docker-image.sh all`   | Faz build **+** export (padrão)                    |

Sempre com o prefixo `DOCKER_DEFAULT_PLATFORM=linux/amd64` quando o destino é x86.

---

## Subindo no Portainer

1. **Images → Import** e selecione o arquivo `portfolio-otavio.tar`.
2. Crie/atualize o container (ou use uma **Stack** com o `docker-compose.yml`)
   apontando para a imagem `portfolio-otavio:latest`.
3. Mapeamento de porta: **`8080:80`** (a app roda em nginx na porta 80 dentro do
   container; fica acessível na porta `8080` do host).

Exemplo de Stack (mesmo conteúdo do `docker-compose.yml`):

```yaml
services:
  portfolio-otavio:
    image: portfolio-otavio:latest
    container_name: portfolio-otavio
    restart: unless-stopped
    ports:
      - "8080:80"
```

---

## Como a imagem é montada

O `Dockerfile` usa **multi-stage build**:

1. **Stage `build`** — `node:22-alpine`: instala dependências (`npm ci`) e gera
   o build de produção do Vite (`npm run build` → pasta `dist/`).
2. **Stage `runtime`** — `nginx:1.27-alpine`: serve os arquivos estáticos com
   fallback de SPA (config em `nginx.conf`). Expõe a porta `80`.

---

## Troubleshooting

- **`exec format error` ao rodar no servidor** → a imagem foi buildada em ARM.
  Refaça o build com `--platform linux/amd64`.
- **`--platform` falha no build (Mac ARM)** → a emulação QEMU/binfmt do Docker
  Desktop precisa estar ativa (vem habilitada por padrão). Se persistir, use o
  buildx:

  ```bash
  docker buildx build --platform linux/amd64 -t portfolio-otavio:latest --load .
  ```
