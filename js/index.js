const equipo = async () => {
    const personas= await fetch("https://crud-firebase-api-aldair-munoz-dev.apps.sandbox.x8i5.p1.openshiftapps.com/persona/api/v1/all");
    const data= await personas.json();

    let tableBody = ``;
    data.forEach((persona , index) => {
        tableBody+=`<tr>
        <th>${persona.id}</th>
        <th>${persona.nombre}</th>
        <th>${persona.edad}</th>
        </tr>`;
    });
    document.getElementById("contenidoTabla").innerHTML =tableBody;
};

window.addEventListener("load",function(){
    equipo();
});