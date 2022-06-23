var keycloak = new Keycloak();

function initKeycloak() {
    keycloak
        .init({ onLoad: "login-required" })
        .then(function () {
            constructTableRows(keycloak.idTokenParsed);
            pasteToken(keycloak.token);
        })
        
}



const logout = function () {
    keycloak.logout(
        window.location.href = '/logout.html'
    );
};
