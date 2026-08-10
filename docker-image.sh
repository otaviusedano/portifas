#!/usr/bin/env bash
# Rotina de build/export da imagem Docker para subir no Portainer.
#
# Uso:
#   ./docker-image.sh build     -> gera a imagem local (portfolio-otavio:latest)
#   ./docker-image.sh export    -> exporta a imagem para portfolio-otavio.tar
#   ./docker-image.sh all       -> faz build + export
set -euo pipefail

IMAGE_NAME="portfolio-otavio"
IMAGE_TAG="latest"
IMAGE_REF="${IMAGE_NAME}:${IMAGE_TAG}"
OUTPUT_TAR="${IMAGE_NAME}.tar"

build() {
  echo "==> Gerando imagem ${IMAGE_REF}..."
  docker build -t "${IMAGE_REF}" .
  echo "==> Imagem ${IMAGE_REF} criada."
}

export_image() {
  echo "==> Exportando ${IMAGE_REF} para ${OUTPUT_TAR}..."
  docker save -o "${OUTPUT_TAR}" "${IMAGE_REF}"
  echo "==> Arquivo gerado: ${OUTPUT_TAR}"
  echo "    Importe em Portainer > Images > Import."
}

case "${1:-all}" in
  build)  build ;;
  export) export_image ;;
  all)    build && export_image ;;
  *)
    echo "Comando inválido: ${1}"
    echo "Use: build | export | all"
    exit 1
    ;;
esac
