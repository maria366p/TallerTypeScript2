//tsc -p .\tsconfig.json --> crear el javascript usando tsconfig.json
//tsc serie.ts -outDir scripts --> crear, compilar el javascript sin usar nada
// node .\scripts\serie.js --> imprimir lo que hay en consola
import { Serie } from "./serie.js";
//Crear lista de series
export var series = [new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg")];
//Invocar el elemento html que contiene el html para la tabla series
var seriesTable = document.getElementById("series");
// Obtener el contenedor de la tabla
var seriesContainer = document.getElementById("series-container");
mostrarSeries(series);
mostrarPromedioTemporadas(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n        \n        <td class=\"bold-first-column\">".concat(serie.numlista, " </td>\n        <td>").concat(serie.nombreSerie, " </td>\n        <td>").concat(serie.canal, " </td>\n        <td>").concat(serie.temporadas, " </td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
// Calcula el promedio de temporadas de todas las series
function mostrarPromedioTemporadas(series) {
    var totalTemporadas = series.reduce(function (acumulador, serie) { return acumulador + serie.temporadas; }, 0);
    var promedioTemporadas = totalTemporadas / series.length;
    // Obtén el elemento tbody de la tabla
    var seriesTable = document.getElementById("series");
    var tbodyElement = seriesTable.querySelector("tbody");
    if (tbodyElement) {
        // Crear una fila de resumen para el promedio
        var promedioRow = document.createElement("tr");
        promedioRow.innerHTML =
            "\n        <td colspan=\"4\" class = \"no_bold\" >Seasons Average: ".concat(promedioTemporadas.toFixed(0), "</td>\n        ");
        // Insertar la fila de resumen al final de la tabla
        tbodyElement.appendChild(promedioRow);
    }
}
