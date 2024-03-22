export default defineEventHandler((event) => {
  // Extends or modify the event
  console.log(event)
  const auth = getHeader(event, 'Authorization')
  if (auth !== 'me') {
    throw createError({
      status: 401,
      message: 'Unauthorized',
    });
  }
  event.context.user = 'me'
})