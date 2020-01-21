function solve(input) {
    let gladiatorsData = {};
    for (let data of input) {
        if (data.includes("->")) {
            let [gladiator, arena, skills] = data.split(" -> ");
            skills = Number(skills);

            if (!gladiatorsData.hasOwnProperty(gladiator)) {
                gladiatorsData[gladiator] = {};
                gladiatorsData[gladiator][arena] = skills;
            } else {
                if (!gladiatorsData[gladiator].hasOwnProperty(arena)) {
                    gladiatorsData[gladiator][arena] = skills;
                } else {
                    if (gladiatorsData[gladiator][arena] < skills) {
                        gladiatorsData[gladiator][arena] = skills;
                    }
                }
            }
        } else if (data === "Ave Cesar") {
            break;
        } else {
            let [gladiator1, gladiator2] = data.split(" vs ");
            let g1Data = {};
            let g2Data = {};

            if (gladiatorsData.hasOwnProperty(gladiator1) &&
                gladiatorsData.hasOwnProperty(gladiator2)) {
                g1Data = gladiatorsData[gladiator1];
                g2Data = gladiatorsData[gladiator2];
            }

            for (let arena in g1Data) {

                for (let arena1 in g2Data) {
                    if (arena === arena1) {
                        if (gladiatorsData[gladiator1][arena] > gladiatorsData[gladiator2][arena]) {
                            delete gladiatorsData[gladiator2];
                        } else if (gladiatorsData[gladiator1][arena] < gladiatorsData[gladiator2][arena]) {
                            delete gladiatorsData[gladiator1];
                        }
                    }
                }
            }
        }
    }

    let gladiatorTotalSkills = {};

    for (let gladiator in gladiatorsData) {
        let currentSkills = 0;
        let arenas = gladiatorsData[gladiator];
        for (let arena in arenas) {
            currentSkills += gladiatorsData[gladiator][arena];
        }
        gladiatorTotalSkills[gladiator] = currentSkills;
    }

    let keys = Object.keys(gladiatorTotalSkills).sort(
        (a, b) => gladiatorTotalSkills[b] - gladiatorTotalSkills[a]);

    for (const key of keys) {
        console.log(`${key}: ${gladiatorTotalSkills[key]} skill`);
        let arenas = gladiatorsData[key];

        let arenaKeys = Object.keys(arenas).sort((a, b) =>
            gladiatorsData[key][b] > gladiatorsData[key][a] ? 1 :
                gladiatorsData[key][b] < gladiatorsData[key][a] ? -1 : 0);

        for (const arena of arenaKeys) {
            console.log(`- ${arena} <!> ${gladiatorsData[key][arena]}`);
        }
    }
}

let test0 = ['Pesho -> BattleCry -> 400',
    `Gosho -> PowerPunch -> 300`,
    `Stamat -> Duck -> 200`,
    `Stamat -> Tiger -> 250`,
    `Ave Cesar`
];

let test1 = ['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
];
solve(test1);