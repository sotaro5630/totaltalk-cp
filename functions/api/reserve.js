export async function onRequestPost(context) {

  const body = await context.request.json();

  return Response.json({
    success: true,
    name: body.name
  });

}
