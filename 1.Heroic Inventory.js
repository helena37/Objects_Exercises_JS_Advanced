function main(array) {
    let heroes = [];

    for (let i = 0; i < array.length; i++) {
        // let [name, level, items] = array[i].split(' / '); => Destructuring assignment in JS
        //price = Number(price);
        // items = items ? items.split(", ") : [];
        // heroes.push({ name, level, items});

        let heroData = {
            name: "",
            level: 0,
            items: []
        };

        let data = array[i].split(" / ");
        let heroName = data[0];
        let heroLevel = Number(data[1]);

        heroData.name = heroName;
        heroData.level = heroLevel;

        if (data.length > 2) {
            let heroItems = data[2].split(", ");
            heroData.items = heroItems;
        }
        heroes.push(heroData);
    }

    console.log(JSON.stringify(heroes));
}

main(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);
