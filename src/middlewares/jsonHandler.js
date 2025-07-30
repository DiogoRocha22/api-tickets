export async function jsonHandler(req, res) {
  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  }
  catch (error) {
    console.log(error);
    req.body = null;
  }

  res.setHeader('Content-Type', 'application/json');
} // eslint-disable-line no-unused-vars, no-empty-function