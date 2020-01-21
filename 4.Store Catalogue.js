function solve(input) {
    const alphaSort = (a, b) => a.localeCompare(b);
    let catalogue = {};

    for (let line of input) {
        let [productName, productPrice] = line.split(" : ");
        productPrice = Number(productPrice);
        let firstLetter = productName.charAt(0);
        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = {};
            catalogue[firstLetter][productName] = productPrice;
        } else {
            catalogue[firstLetter][productName] = productPrice;
        }
    }

    let sortedInitials = Object.keys(catalogue)
        .sort(alphaSort);

    for (let initial of sortedInitials) {
        console.log(initial);
        let products = catalogue[initial];
        let keys = Object.keys(products).sort(alphaSort);
        for (let key of keys) {
            console.log(`${key}: ${catalogue[initial][key]}`);
        }
    }
}

let test0 = ['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'];

let test1 = ['Banana : 2', 'Rubic Cube : 5',
'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'];
solve(test1);