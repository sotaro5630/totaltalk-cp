export async function onRequestGet(context) {

    const passwords = [
        "A","B","C","D","E","F","G","H","I","J",
        "K","L","M","N","O","P","Q","R","S","T",
        "U","V","W","X","Y","Z",
        "AA","BB","CC","DD","EE","FF","GG","HH"
    ];

    let index = 0;

    let tours = [];

    let t1 = new Date("2026-10-31T09:20:00");

    for(let i=0;i<20;i++){

        tours.push({
            time:t1.toLocaleString("ja-JP"),
            password:passwords[index++]
        });

        t1.setMinutes(
            t1.getMinutes()+20
        );
    }

    let t2 = new Date("2026-11-01T09:20:00");

    for(let i=0;i<14;i++){

        tours.push({
            time:t2.toLocaleString("ja-JP"),
            password:passwords[index++]
        });

        t2.setMinutes(
            t2.getMinutes()+20
        );
    }

    for(const tour of tours){

        await context.env.DB
        .prepare(`
            INSERT INTO tours
            (tour_time,reserved_count,password)
            VALUES(?,?,?)
        `)
        .bind(
            tour.time,
            0,
            tour.password
        )
        .run();

    }

    return new Response("OK");
}
