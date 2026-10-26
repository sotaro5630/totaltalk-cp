export async function onRequestGet(
context
){

    const result =
    await context.env.DB
    .prepare(`
        SELECT *
        FROM tours
        ORDER BY id
    `)
    .all();

    return Response.json(
        result.results
    );
}
