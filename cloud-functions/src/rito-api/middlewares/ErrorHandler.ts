export const errorHandler = (err: any, req: any, res: any, next: any) => {
  console.error(err.stack)
  const code = err.status || 500
  const message = err.message || err.statusText || 'Internal Server Error'
  res.status(code).send({ message, code })
}
