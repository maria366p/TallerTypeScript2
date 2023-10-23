//tsc -p .\tsconfig.json --> crear el javascript usando tsconfig.json
//tsc serie.ts -outDir scripts --> crear, compilar el javascript sin usar nada
// node .\scripts\serie.js --> imprimir lo que hay en consola

import {Serie} from "./serie.js"

//Crear lista de series
export const series = [new Serie(1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
"https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpg"),

    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
    "https://i.imgur.com/TDCEV1S.jpg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
    "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
    "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
    "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg")]

//Invocar el elemento html que contiene el html para la tabla series
let seriesTable: HTMLElement = document.getElementById("series")!;




mostrarSeries(series);
mostrarPromedioTemporadas(series);

function mostrarSeries(series:Serie[]):void{
    let seriesTbody: HTMLElement = document.createElement("tbody");
    for (let serie of series)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
        
        <td class="bold-first-column">${serie.numlista} </td>
        <td>${serie.nombreSerie} </td>
        <td>${serie.canal} </td>
        <td>${serie.temporadas} </td>`
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

// Calcula el promedio de temporadas de todas las series
function mostrarPromedioTemporadas(series: Serie[]): void {
    let totalTemporadas = series.reduce((acumulador, serie) => acumulador + serie.temporadas, 0);
    let promedioTemporadas: number = totalTemporadas / series.length;

    // Obtén el elemento tbody de la tabla
    let seriesTable: HTMLElement = document.getElementById("series")!;
    let tbodyElement: HTMLElement | null = seriesTable.querySelector("tbody");

    if (tbodyElement) {
        // Crear una fila de resumen para el promedio
        let promedioRow: HTMLElement = document.createElement("tr");
        promedioRow.innerHTML =
        `
        <td colspan="4" class = "no_bold" >Seasons Average: ${promedioTemporadas.toFixed(0)}</td>
        `;

        // Insertar la fila de resumen al final de la tabla
        tbodyElement.appendChild(promedioRow);
    }
}

function mostrarDetalleSerie(series: Serie[]) {
    // Obtener todas las celdas de la columna "Name"
    const nameCells = document.querySelectorAll("#series tbody tr td:nth-child(2)");
    

    // Agregar un evento de clic a cada celda de la columna "Name"
    nameCells.forEach((cell, index) => {
        cell.addEventListener("click", () => {
            // Obtener la serie correspondiente desde el arreglo "series"
            const serie = series[index];

            // Actualizar el contenido de la tarjeta con la información de la serie
            // Obtener el elemento de la imagen de la tarjeta
            const serieImagen = document.getElementById("serie-imagen") as HTMLImageElement;

            serieImagen.src = serie.linkImagen; // Establecer la URL de la imagen
            

            const serieNombre = document.getElementById("serie-nombre");

            if (serieNombre) {
                serieNombre.textContent = serie.nombreSerie;
            }

            const serieDescripcion = document.getElementById("serie-descripcion");
            if (serieDescripcion) {
                serieDescripcion.textContent = serie.descripcion;
            }

            const serieLink = document.getElementById("serie-link") as HTMLAnchorElement;
            if (serieLink) {
                serieLink.href = serie.linkStreaming;
                serieLink.textContent = serie.linkStreaming;
            }
        });
    });
}



document.addEventListener("DOMContentLoaded", function () {
    // Este código se ejecutará cuando el DOM se haya cargado completamente.

    // Llamar a la función mostrarDetalleSerie
    mostrarDetalleSerie(series);
});










