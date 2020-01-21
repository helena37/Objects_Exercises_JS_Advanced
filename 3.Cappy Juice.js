function solve(input) {
    let juices = {};
    let bottles = {};

    input
        .forEach((line) => {
            let [name, quantity] = line.split(" => ");
            quantity = Number(quantity);

            if (!juices.hasOwnProperty(name)) {
                juices[name] = 0;
            }

            juices[name] += quantity;
            let currentQuantity = juices[name];

            if (currentQuantity >= 1000) {
                bottles[name] = Math.trunc(currentQuantity / 1000);
            }
        });
    // for (let line of input) {
    //     let tokens = line.split(" => ");
    //     let product = tokens[0];
    //     let quantity = Number(tokens[1]);
    //     if (typeof juices[product] === "undefined") {
    //         juices[product] = quantity;
    //     } else {
    //         juices[product] += quantity;
    //     }
    //
    //     if (juices[product] >= 1000) {
    //         if (typeof bottles[product] === "undefined") {
    //             bottles[product] = Math.floor(juices[product] / 1000);
    //             juices[product] %= 1000;
    //         } else {
    //             let add = Math.floor(juices[product] / 1000);
    //             bottles[product] += add;
    //             juices[product] %= 1000;
    //         }
    //     }
    // }

    // let keys = Object.keys(bottles);
    //
    // for (let name of keys) {
    //     let quantity = bottles[name];
    //     console.log(`${name} => ${quantity}`);
    // }

    for (let resultKey in bottles) {
        if (bottles.hasOwnProperty(resultKey)) {
            console.log(`${resultKey} => ${bottles[resultKey]}`);
        }
    }


}


let test0 = ['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'];

let test1 = ['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'];

solve(test0);

