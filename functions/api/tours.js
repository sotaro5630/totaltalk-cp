export async function onRequestGet(context){
 
const data=
await context.env.DB
.prepare(
"SELECT * FROM tours"
)
.all();
 
return Response.json(
data.results
);
 
}