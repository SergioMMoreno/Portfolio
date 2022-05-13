/* ========== Animacion de tipeo ========== */
var typed = new Typed(".typing", {
    strings:["","diseñador UX/UI","diseñador de aplicaciones"," diseñador de productos digitales"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ========== Aside ========== */
const nav = document.querySelector(".nav"), //con esto al hacer click nos dara el elemento (dentro de nav)
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

    for (let i=0; i<totalNavList; i++){

        const a = navList[i].querySelector("a");
        a.addEventListener("click", function () {

            removeBackSection();
            for(let j=0; j<totalNavList; j++){

                if(navList[j].querySelector("a").classList.contains("active")){

                    addBackSection(j);
                    // allSection[j].classList.add("back-section")
                }
                navList[j].querySelector("a").classList.remove("active")//sacamos el activo al texto
            }
            this.classList.add("active") //cambiamos por activo al texto
            showSection(this);
            if(window.innerWidth < 1080){
                asideSectionTogglerBtn();
            }
        })
    }
    function removeBackSection(){
        for (let i = 0; i<totalSection; i++){
            allSection[i].classList.remove("back-section")
        }
    }
    function addBackSection(num){
        allSection[num].classList.add("back-section")
    }
    function showSection(element){ //mostrar la seleccion
        //console.log(element.getAttribute("href").split("#"));
         //recuperamos la referencia
        for (let i = 0; i<totalSection; i++){
            allSection[i].classList.remove("active")
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active") //para cambiar entre secciones del html (le agrega el active)
    }

    function updateNav(element){ //agrega el "activo" al aside
        for(let i=0; i<totalNavList; i++){
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }

    document.querySelector(".hire-me").addEventListener("click", function() //cuando hacemos click en el boton de contactarme
    {
        const sectionIndex = this.getAttribute("data-section-index");
        //console.log(sectionIndex);
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    })

    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click", () => {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
            for(let i=0; i<totalSection; i++){   //Corre el contenido
                allSection[i].classList.toggle("open")
            }
        }

/* con esto al hacer click nos dara el elemento (dentro de nav)

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for (let i=0; i<totalNavList; i++){
        
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function () {
            console.log(this);
        })
    }
*/

