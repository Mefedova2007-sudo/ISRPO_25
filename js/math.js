function square(x) {
  if (typeof x !== 'number') {
    throw new Error('Аргумент должен быть числом');
  }
  return x * x;
}
function cube(x) {
  if (typeof x !== 'number') {
    throw new Error('Аргумент должен быть числом');
  }
  return x * x * x;
}
const E = 2.718;
export { square, cube, E };