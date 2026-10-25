export async function onRequestPost(
context
){
 
const body=
await context.request.json();
 
await context.env.DB
.prepare(
`
DELETE FROM tours
WHERE id=?
`
)
.bind(body.id)
.run();
 
return new Response("OK");
 
}