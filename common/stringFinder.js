const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500},
    {"name":"Peter","salary":1700},
    {"name":"Michael","salary":900}
];

    const getWorthyWorkers = listOfWorkers => {
        const filteredWorkers = [];

        for (let i=0; i < listOfWorkers.length; i++) {
            if (listOfWorkers[i].salary > 1000) {
                filteredWorkers.push(listOfWorkers[i].name);
            }
        }

        return filteredWorkers;
    }

console.log(getWorthyWorkers(workers))