export default defineEventHandler(async (event) => {
  return  await event.context.kinde.getOrganization();
});
