function criaSenha() {
    let senha = document.getElementById('senha').value;
    localStorage.setItem('senha', senha);
    
    alert("Senha cadastrada com sucesso!");
    window.location.href = "login.html"; 
    }
    
    function fazerLogin() {
    let senha = document.getElementById('senha').value;
    let storedSenha = localStorage.getItem('senha');
    
    
    if (senha === storedSenha) {
    alert("Login bem-sucedido! Bem-vindo ao seu diário pessoal!");
    window.location = "projetodiario.html"
    } else {
    alert("Senha incorreta. Tente novamente.");
    }
    }

    function pulaLinha() {
        document.write("<hr>");
    }

    function fazerRegistro(){
        var data = document.getElementById("data").value;
        var titulo = document.getElementById("titulo").value;
        var registro = document.getElementById("registro").value;
            if (data && registro && titulo) {
                var registroHTML = '<div class="content"><b>' + titulo + '</b></div><div class="content">' + registro +'</div></div><div class="registro"><div class="data">' + data + '</div><hr class="hr1">';

                var registrosDiv = document.getElementById("registros");
                registrosDiv.innerHTML += registroHTML;

                document.getElementById("data").value = "";
                document.getElementById("titulo").value = "";
                document.getElementById("registro").value = "";
            } else {
                alert("Por favor, preencha a data, o título e adicione um registro antes de confirmar!");
            }
        }