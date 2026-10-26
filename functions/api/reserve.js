export async function onRequestPost(
context
){

    const body =
    await context.request.json();

    const tour =
    await context.env.DB
    .prepare(`
        SELECT
        reserved_count,
        password
        FROM tours
        WHERE id=?
    `)
    .bind(body.id)
    .first();

    if(!tour){

        return Response.json({
            success:false
        });

    }

    const newCount =
        tour.reserved_count +
        body.people;

    if(newCount > 15){

        return Response.json({
            success:false
        });

    }

    await context.env.DB
    .prepare(`
        UPDATE tours
        SET reserved_count=?
        WHERE id=?
    `)
    .bind(
        newCount,
        body.id
    )
    .run();

    return Response.json({

        success:true,

        password:
        tour.password

    });

}
