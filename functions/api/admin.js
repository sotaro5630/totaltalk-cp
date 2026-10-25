export async function onRequestGet(
context
){

const tours =
await context.env.DB
.prepare(
`
SELECT *
FROM tours
`
)
.all();

return Response.json(
tours.results
);

}