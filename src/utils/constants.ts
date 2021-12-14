export const formatDate = (view: string) => {
  return new Date(view).toISOString().slice(0, 10)
}
