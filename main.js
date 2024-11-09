// Vars:
const upMom = document.querySelector('.timeline-up');
const downMom = document.querySelector('.timeline-down');

// Functions:

function addClass(element, cssClass) {
    element.classList.add(cssClass);
}

function addChild(mother, childs) {
    for (let i = 0; i < childs.length; i++) {
        mother.appendChild(childs[i]);
    }
}

function createHTMLEvent(title, description, src, upOrDown) {
    let sectEvent = document.createElement('section');
    let titleForEvent = document.createElement('h3');
    let pDescriptionForEvent = document.createElement('p');
    let img = document.createElement('img');

    titleForEvent.textContent = title;
    pDescriptionForEvent.textContent = description;

    addClass(sectEvent, 'timeline-event');
    addClass(titleForEvent, 'event-title');
    addClass(pDescriptionForEvent, 'event-description');
    addClass(img, 'event-image');

    img.setAttribute('src', src)
    img.setAttribute('alt', 'Si me lees es por que no cargo la imagen, pero aqui iba una imagen relacionada al evento')

    let family = [titleForEvent, pDescriptionForEvent, img];
    addChild(sectEvent, family);

    if(upOrDown == 'up') {
        upMom.appendChild(sectEvent);
    } else if(upOrDown == 'down') {
        downMom.appendChild(sectEvent);
    } else {
        alert('Lo lamento hubo un error de nuestra parte(esto no se deberia de mostrar)');
    }
}

// Run code:

createHTMLEvent('Ascenso de las Tensiones Globales (1919-1939)', 'Tras el Tratado de Versalles en 1919, Alemania quedó en una situación económica y política desastrosa, lo que facilitó la llegada de Adolf Hitler al poder en 1933. Las potencias del Eje (Alemania, Italia y Japón) empezaron a expandirse agresivamente, y en 1939, la invasión alemana a Polonia desató el inicio de la Segunda Guerra Mundial.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qbWJBgnf3Vapcdnpx1DdZAHaEJ%26pid%3DApi&f=1&ipt=5b65319e889a0daec76aa84bcb681a88abdb800d7d42406ea88cc95973264d60&ipo=images', 'up');
createHTMLEvent('Segunda Guerra Mundial (1939-1945): El Mundo en Llamas', 'La guerra comenzó con la invasión de Polonia por parte de Alemania en septiembre de 1939, y rápidamente se expandió a nivel mundial. El conflicto enfrentó a las Potencias del Eje contra los Aliados (principalmente Estados Unidos, Reino Unido, y la Unión Soviética). La guerra terminó con la rendición de Alemania en mayo de 1945 y la capitulación de Japón en septiembre de 1945, después de los bombardeos atómicos en Hiroshima y Nagasaki.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.htYvbcfiPo32qQWrRQX_TwHaFs%26pid%3DApi&f=1&ipt=966a6dd64aa0fdfc081cca50ca98efd13aedfcc51a6fbfd7e47f039fa90f132e&ipo=images', 'down');
createHTMLEvent('Creación de Naciones Unidas (1945): Un Nuevo Orden Mundial', ' En octubre de 1945, se estableció oficialmente la Organización de las Naciones Unidas (ONU) con el objetivo de fomentar la paz, la cooperación y la seguridad internacional. Los países esperaban prevenir futuras guerras mundiales mediante este organismo multilateral.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP._5-3pOCfZFw5lacJKzK1EQHaEJ%26pid%3DApi&f=1&ipt=54927ef9008ee3a059fdbe9ea906b0b0f0c9dc33ac2062ef0448c5a9e4b62f8f&ipo=images', 'up');
createHTMLEvent('Guerra Fría (1947-1991): Una Paz Tensa', 'Después de la Segunda Guerra Mundial, se consolidó la rivalidad entre Estados Unidos y la Unión Soviética, dos superpotencias con ideologías opuestas: capitalismo y comunismo. Este periodo se caracterizó por una "guerra sin combates directos" que incluyó una carrera armamentista y espacial, conflictos por poderes en países como Corea y Vietnam, y una constante amenaza nuclear.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Z2-nQ8vhBLB4SSty67MCbQHaD8%26pid%3DApi&f=1&ipt=ad7ece366244ba5f57f5e7e134c80e7f90acfc8a5156323472866fdba41e60d9&ipo=images', 'down');
createHTMLEvent('Construcción del Muro de Berlín (1961): Un Muro de División Ideológica', 'En agosto de 1961, la RDA (Alemania del Este), apoyada por la Unión Soviética, construyó el Muro de Berlín para detener el éxodo de personas hacia la RFA (Alemania Occidental). El muro se convirtió en un símbolo de la división ideológica y física entre el Este comunista y el Oeste capitalista.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.LTaWy_ldNo_Rf2PqYRCTmAHaFV%26pid%3DApi&f=1&ipt=00cbd1e6db0e99dcd7f21bd2019a3a8afcb48e77ae30c8022d09dcd4eb695a0f&ipo=images', 'up');
createHTMLEvent('Crisis de los Misiles en Cuba (1962): La Hora Cero', 'En octubre de 1962, el mundo estuvo al borde de una guerra nuclear cuando Estados Unidos descubrió misiles soviéticos en Cuba, a solo 150 km de sus costas. La crisis terminó con un acuerdo entre el presidente estadounidense Kennedy y el líder soviético Jrushchov, quien retiró los misiles a cambio de que Estados Unidos no invadiera Cuba.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.fbkrL2_8xjd7ATWlDIMsjgHaEK%26pid%3DApi&f=1&ipt=8a13d77553d85fa43a8c3cb2f60d7e80079f74541529e643571c25ade7281b55&ipo=images', 'down');
createHTMLEvent('Caída del Muro de Berlín (1989): El Comienzo del Fin de la Guerra Fría', 'El 9 de noviembre de 1989, después de años de tensiones y protestas en Alemania del Este, el gobierno anunció la apertura de las fronteras con el Oeste. Multitudes de ciudadanos de ambos lados comenzaron a derribar el Muro de Berlín. Este evento marcó simbólicamente el colapso del bloque comunista y la reunificación de Alemania.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mvSScVICk2fpxRUbxdwmCAHaE9%26pid%3DApi&f=1&ipt=c739fda29e4557b61f0aea559538c85da3e61c832c36768b79123f57f8906862&ipo=images', 'up');
createHTMLEvent('Disolución de la Unión Soviética (1991)', 'En diciembre de 1991, la Unión Soviética se disolvió oficialmente, poniendo fin a la Guerra Fría. La caída de este bloque comunista y el surgimiento de nuevos estados independientes transformaron el mapa geopolítico mundial, dando inicio a un nuevo orden basado en un sistema de influencia global multipolar.', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gBurMsa7ztsSoEhYjx4TWgHaFB%26pid%3DApi&f=1&ipt=06f8f1bf8cb0636e6c286075bde0fe7693d52fae02f30c848e7c67e094d99a8d&ipo=images', 'down')

