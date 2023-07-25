const Product = require("../models/Product");

exports.newProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
};

exports.getProduct = async (req, res) => {
  const products = await Product.findAll();

  res.send(products);
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.update(req.body, { where: { id } });
  res.send("actualizado");
};
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  await Product.destroy({
    where: {
      id,
    },
  });
  res.send("borrado");
};
