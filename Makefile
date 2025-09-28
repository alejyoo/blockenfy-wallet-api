COMPOSE_DEV = docker-compose -f docker-compose.yml

.PHONY: dev
dev:
    @echo ":rocket: Starting development environment"
    ${COMPOSE_DEV} up --build

.PHONY: dev-d
dev-d:
    @echo ":rocket: Start the development environment in the background"
    $(COMPOSE_DEV) up --build -d
