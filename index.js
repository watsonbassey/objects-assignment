// Question-1

function instagramPost(handler, content, link, views, likes) {
this.handler = handler;
this.content = content;
this.link = link;
this.views = views;
this.likes = likes
}

// Question-2

let newPost = new instagramPost("watsonbassey", "sportUpdate", "livescores.com", 850, "3k");
console.log(newPost);

let newPost2 = new instagramPost("ebson", "electionReports", "news.ng", 684, "1.7k");
console.log(newPost2);

// Question-3 (a)

function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    };
}

const jambStudent = createPerson("Musa", 19, "Lekki-Lagos");
console.log(jambStudent);

// Question-3 (b)

function createJambScores(eng, govt, lit, crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    };
}

const jambScores = createJambScores(70, 85, 82, 94);
console.log(jambScores);

const createPerson1 = {
    name: "Musa",
    age: 19,
    location: "Lekki-Lagos",
    jambScores: {
        jambScores,
    }
};

console.log(createPerson1);

// Question-4

    /**the different ways to clone an object includes;
     * Using object.assign()
     * Using spread syntax
     * Using the JSON.parse method. */
    
        // Examples:

        const clone1 = {
            name: "Musa",
            age: 19,
            location: "Lekki-Lagos",
        };
        const cloneA1 = object.assign({}, clone1);
        console.log(clone1);
        console.log(cloneA1);



// Question-5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
};
    let candidate1 = "";
    for (let AAC in presidentialCandidates) {
        candidate1 = presidentialCandidates['AAC'];
    }
    console.log(candidate1 + ' is the presidential candidate of AAC');
    
    let candidate2 = "";
    for (let ACCORD in presidentialCandidates) {
        candidate2 = presidentialCandidates['ACCORD'];
    }
    console.log(candidate2 + ' is the presidential candidate of ACCORD');
    
    let candidate3 = "";
    for (let APC in presidentialCandidates) {
        candidate3 = presidentialCandidates['APC'];
    }
    console.log(candidate3 + ' is the presidential candidate of APC');
    
    let candidate4 = "";
    for (let LP in presidentialCandidates) {
        candidate4 = presidentialCandidates['LP'];
    }
    console.log(candidate4 + ' is the presidential candidate of LP');
    
    let candidate5 = "";
    for (let NNPP in presidentialCandidates) {
        candidate5 = presidentialCandidates['NNPP'];
    }
    console.log(candidate5 + ' is the presidential candidate of NNPP');
    
    let candidate6 = "";
    for (let PDP in presidentialCandidates) {
        candidate6 = presidentialCandidates['PDP'];
    }
    console.log(candidate6 + ' is the presidential candidate of PDP');

