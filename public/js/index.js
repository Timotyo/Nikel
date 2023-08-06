const myModal = new bootstrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorege.getItem("session");

checkLogget();

//LOGAR NO SISTEMA
document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checksession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(!account) {
        alert("Opps! Verifique o usuário uo a senha.");
        return;
    }

    if(account) {
        if(account.password !== password) {
            alert("Opps! Verifique o usuário uo a senha.");
            return;
        }

        saveSession(email, checksession)

        window.location.href = "home.html";
    }

    

});

//CRIAR CONTA

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const senha = document.getElementById("password-create-input").value;

    if(email.length < 5) {
        alert("Preencha o camopo com um email valido.");
        return;
    }

    if(password.length < 4) {
        alert("Preencha a senha com no mínimo 4 digitos.")
    }

    saveAccount({
        login: email,
        password: password,
        transactions: []
    });

    myModal.hide();

    alert("Conta criada com sucesso.")
});

function checkLogget() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if(logged) {
        saveSession(logged, session);

        window.location.href = "home.html";
    }
}

function saveAccount(data) {
    localStorage.setItem(data.login, JSSON.stringift(data));

}

function saveSession(data, savesession) {
    if(saveSession) {
        localStorage.setItem("session, data");

    }

    sessionStorage.setItem("logged", data);
}

function getAccount(key) {
    const accout = localStoragr.getItem(key);

    if(account) {
        return JASON.parese(account)
    }


}