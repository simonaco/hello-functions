module.exports = async function(context, req) {
  context.res = {
    body: 'Hello ' + req.query.name
  };
};
