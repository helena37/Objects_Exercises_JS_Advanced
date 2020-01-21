function solve(input) {
    let carsCatalogue = {};

    for (let data of input) {
        let [carBrand, carModel, producedCars] = data.split(" | ");
        producedCars = Number(producedCars);
        if (!carsCatalogue.hasOwnProperty(carBrand)) {
            carsCatalogue[carBrand] = {};
            carsCatalogue[carBrand][carModel] = producedCars;
        } else {
            if (!carsCatalogue[carBrand].hasOwnProperty(carModel)) {
                carsCatalogue[carBrand][carModel] = producedCars;
            } else {
                carsCatalogue[carBrand][carModel] += producedCars;
            }
        }
    }

    for (let carBrand in carsCatalogue) {
        if (carsCatalogue.hasOwnProperty(carBrand)) {
            console.log(carBrand);
            let models = carsCatalogue[carBrand];
            let cars = Object.keys(models);

            for (let car of cars) {
                console.log(`###${car} -> ${carsCatalogue[carBrand][car]}`);
            }
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);