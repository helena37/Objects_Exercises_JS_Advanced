function solve(input) {
    let names = new Set();

    input.sort((a, b) => {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;

        return a.localeCompare(b);
    });

    for (let name of input) {
        names.add(name);
    }
    names.forEach(n => console.log(n));
}

solve(['Denise',
    'Ignatius',
    'Iris',
    `Iris`,
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']
);