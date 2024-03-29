const productsArray = [
    {
        id: "price_1Ox1Ow014fJ6KIWcQJrFT4YX",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1Ox1RD014fJ6KIWcM4oMEoYJ",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1Ox1SU014fJ6KIWcn7fLrNX4",
        title: "Camera",
        price: 39.99
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
