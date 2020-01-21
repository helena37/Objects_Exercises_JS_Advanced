function solve(input) {
    const ascendingSort = (a, b) => a.localeCompare(b);
    const descendingNumberSort = (a, b) => b - a;
    let database = {};

    for (let line of input) {
        let [systemName, componentName, subComponentName] = line.split(" | ");

        if (!database.hasOwnProperty(systemName)) {
            database[systemName] = {};
            database[systemName][componentName] = new Set();
            database[systemName][componentName].add(subComponentName);
        } else {
            if (!database[systemName].hasOwnProperty(componentName)) {
                database[systemName][componentName] = new Set();
                database[systemName][componentName].add(subComponentName);
            } else {
                database[systemName][componentName].add(subComponentName);
            }
        }
    }

    function sortSystemComparator(sysA, sysB, database) {
        let aComponents = database[sysA].length;
        let bComponents = database[sysB].length;
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return sysA.toLowerCase().localeCompare(sysB.toLocaleLowerCase());
    }

    let systems = Object.keys(database).sort((a, b) =>
        sortSystemComparator(a, b, database));


    for (let system of systems) {
        console.log(system);
        let components = database[system];
        for (let component in components) {
            console.log(`|||${component}`);
            for (let subComponent of components[component]) {
                console.log(`||||||${subComponent}`);
            }
        }
    }
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
);