export async function onRequestPost(context) {

  const body = await context.request.json();

  return Response.json({
    success: true,
    name: body.name
  });
  await context.env.DB
    .prepare(`
      INSERT INTO reservations
      (name,reserve_date,reserve_time)
      VALUES (?,?,?)
    `)
    .bind(
      body.name,
      body.date,
      body.time
    )
    .run();

  return Response.json({
    success:true
  });
}
