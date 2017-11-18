export default (errors) => {
  return Object
  .values(errors)
  .map(item => !item)
  .reduce((a, b) => a && b, true)
}
