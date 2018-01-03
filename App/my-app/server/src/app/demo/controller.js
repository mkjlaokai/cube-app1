// [POST] /demo
export const sayDemo = (request, reply) => {
  const { input } = request.payload;
  return reply({ message: `${input}, I am Cube Demo` });
};
