$('body').scrollspy({ target: '#navbar-example' })

const habilidades = [
    {
        id: "collapseOne",
        heading: "headingOne",
        title: "HTML5 y CSS3",
        text: `Maquetación web, usando HTML 5 y su sintaxis semantica. <br />
        También el uso de flex box, y animaciones basicas mediante el uso de CSS.`
    },
    {
        id: "collapseTwo",
        heading: "headingTwo",
        title: "Javascript",
        text: `Capacidad de poder crear la interaccion de una aplicacion, mediante el uso de
        Javascript. <br>
        Ejemplos: <span><a href="gymapp.gastongraciani.me">gymapp.gastongraciani.me</a></span> y
        mas en mi <span><a href="https://github.com/Yegaston">Github</a></span>`
    },
    {
        id:"collapseThree",
        heading: "headingTrhee",
        title: "Phonegap/Cordova",
        text: `  Creacion de Aplicaciones moviles, usando Cordova/Phonegap. La versatilidad de esta
        herramienta, permite usar conocimientos en HTML y Javascript para crear aplicaciones en
        android y iOs, con un unico desarrollo. Tambien, permite el uso de frameworks como
        Ionic, Framework 7, para crear aplicaciones que parecen nativas al sistema operativo
        host. <br>
        Graduado de ComunidadIt, en el curso intensivo de Desarrollo Mobile en esta tecnologia. 100 Horas. 
        `
    },
    {
        id: "collapseFour",
        heading: "headingFour",
        title: "React JS",
        text: `  Programación mediante componentes en React JS. Creación de aplicaciones SPA (Single-Page-Apps), consultas a APIS.
        Proyecto de ejemplo hecho en ReactJS. <a href="https://findmypet.gastongraciani.me">findmypet.gastongraciani.me</a>. El código del mismo se puede ver en mi <a href="https://github.com/Yegaston/Find-My-Pet">Github </a>.
             
        `
    },

]

habilidades.forEach(hab => {
    $('#accordion').append(`
    <div class="card">
        <div class="card-header" ${hab.heading}>
            <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#${hab.id}"
                    aria-expanded="true" aria-controls="${hab.id}">
                    ${hab.title}
                </button>
            </h5>
        </div>

        <div id="${hab.id}" class="collapse" aria-labelledby="${hab.heading}" data-parent="#accordion">
            <div class="card-body">
                ${hab.text}
            </div>
        </div>
    </div>

`);
});

