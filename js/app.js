async function loadTours(){

    const res =
    await fetch("/api/tours");

    const tours =
    await res.json();

    let table = `
    <table>
        <tr>
            <th>ツアー</th>
            <th>予約済人数</th>
        </tr>
    `;

    let options = "";

    tours.forEach(t=>{

        table += `
        <tr>
            <td>${t.tour_time}</td>
            <td>${t.reserved_count}/15</td>
        </tr>
        `;

        if(t.reserved_count < 15){

            options += `
            <option value="${t.id}">
                ${t.tour_time}
            </option>
            `;
        }

    });

    table += "</table>";

    document
    .getElementById("tourTable")
    .innerHTML = table;

    document
    .getElementById("tourSelect")
    .innerHTML = options;
}

async function reserve(){

    const id =
    document
    .getElementById("tourSelect")
    .value;

    const name =
    document
    .getElementById("name")
    .value;

    const people =
    Number(
        document
        .getElementById("people")
        .value
    );

    const res =
    await fetch(
        "/api/reserve",
        {
            method:"POST",

            headers:{
                "Content-Type":
                "application/json"
            },

            body:JSON.stringify({
                id,
                name,
                people
            })
