export async function onRequestGet(
context
){

    const result =
    await context.env.DB
    .prepare(`
        SELECT
        id,
        tour_time,
        reserved_count,
        password
        FROM tours
        ORDER BY id
    `)
    .all();

    return Response.json(
        result.results
    );
}
