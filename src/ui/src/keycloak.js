import Keycloak from 'keycloak-js'

const keycloakConfig = {
    url: 'http://localhost:8081',
    realm: 'monitors',
    clientId: 'monitors',
}

const keycloak = new Keycloak(keycloakConfig)
export default keycloak