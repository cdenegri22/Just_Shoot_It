//collegato a gallery.html

//creazione nuovo elemento background
const lightboxBg = document.createElement('div');
lightboxBg.id = "lightboxBg"; //aggiunge id a nuovo elemento div
document.body.appendChild(lightboxBg); //inserisce background nel body dell'html


const images = document.querySelectorAll('.zoom_img'); //seleziona tutte le immagini della galleria
images.forEach(image=>{ //per ogni immagine aggiunge un evento
    image.addEventListener('click', e =>{
        let width = image.width;
        let height = image.height;
        lightboxBg.classList.add('active'); //attiva
        const lightboxImg = document.createElement('img'); //crea elemento immagine
        const btn_left = document.createElement('button');
        const imm_left = document.createElement('img');
        imm_left.setAttribute("src", "images/arrow_left.png");
        imm_left.setAttribute("width", "20px");
        imm_left.setAttribute("height", "20px");
        btn_left.id= "btn";
        const btn_right = document.createElement('button');
        const imm_right = document.createElement('img');
        imm_left.setAttribute("src", "images/arrow_right.png");
        imm_left.setAttribute("width", "20px");
        imm_left.setAttribute("height", "20px");
        btn_right.id= "btn";
        lightboxImg.src = image.src; //collega la foto a lightboxImg
        lightboxImg.id = "lightboxImg"; //crea id
        if(height>width) { //controlla se foto è verticale
            lightboxImg.style.width = '35vw';
            lightboxImg.style.height = 'auto';
        }
        while(lightboxBg.firstChild){
            lightboxBg.removeChild(lightboxBg.firstChild);
        }
       lightboxBg.appendChild(lightboxImg);
    })
})

lightboxBg.addEventListener('click', e=>{
    lightboxBg.classList.remove('active'); //disattiva
})





































