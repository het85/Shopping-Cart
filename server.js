const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ShoppingCart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Product = mongoose.model('Product', new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    quantity: Number,
}));

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
