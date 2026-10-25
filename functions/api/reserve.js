export async function onRequestPost(
context
){

const body =
await context.request.json();

const tour =
await context.env.DB
.prepare(
`
SELECT reserved_count
FROM tours
WHERE id=?
`
)
.bind(body.id)
.first();

if(
tour.reserved_count
+
body.people
>
15
){

return Response.json({
success:false
});

}

await context.env.DB
.prepare(
`
UPDATE tours
SET reserved_count=
reserved_count+?
WHERE id=?
`
)
.bind(
body.people,
body.id
)
.run();

return Response.json({
success:true
});

}