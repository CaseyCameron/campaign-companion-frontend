VERSION ?= latest
CURRENT_DIR ?= $(shell pwd)
HOST_UID ?= 1000
HOST_GID ?= 1000
DOCKER_FLAGS ?=
PROJECT_NAME = 'campaign-companion-frontend'
DOCKER_RUN = docker run ${DOCKER_FLAGS} -t --rm \
	--env="HOST_UID=${HOST_UID}" \
	--user=${HOST_UID}:${HOST_GID} \
	--workdir=/data \
	-v ${CURRENT_DIR}:/data \
	node:16.13-bullseye

.PHONY: all
all: docker_build build
	@echo "Build complete."

.PHONY: clean
clean: 
	rm -rf version.txt
	rm -rf node_modules
	@echo "Done."

.PHONY: docker_build
docker_build: 
	docker build --tag $(PROJECT_NAME):$(VERSION) .

.PHONY: build
build: 
	git rev-parse --short HEAD > version.txt
	${DOCKER_RUN} npm install
