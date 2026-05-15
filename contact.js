const button = document.getElementById('send');

function addContent(index, content) {
    const container = document.getElementById('cont');
    container.innerHTML += ("<br>"+ index + ": "+ content);
}

button.onclick = () => {
    let nome = document.modulo.fname.value;
    alert("Thanks for your message "+ nome+ "! We'll soon get in touch with you!");
    let cognome = document.modulo.lname.value;
    let email= document.modulo.email.value;
    let message= document.modulo.message.value;
    let documenti={"nome": nome, "cognome": cognome, "email": email, "messaggio": message};
    for(let i in documenti){
        addContent(i, documenti[i]);
    }
};