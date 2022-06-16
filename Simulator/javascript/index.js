let safeQueens = [];
let topQueens = [];
let bottomQueens = [];
let highQueens = [];
let lowQueens = [];
let top2 = [];
let episodeCount = 0;
let entranceQueens = [];
let readQueens = [];
let reactq = [];
let used = [];
let currentCast = [];
let judgingQueens = [];
let highstart = false;

function randomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

class Queen {
    constructor(name, acting, comedy, dance, design, improv, runway, lipsync, shade, image = "noimage", custom = false, original) {
        this.trackRecord = [];
        this.relationships = [];
        this.alliances = [];
        this.runwayScore = 0;
        this.lipsyncScore = 0;
        this.performanceScore = 0;
        this.finaleScore = 0;
        this.winCount = 0;
        this.miniwinCount = 0;
        this.btmCount = 0;
        this.favoritism = 0;
        this.unfavoritism = 0;
        this.ppe = 0;
        this.episodesOn = 0;
        this.votes = 0;
        this.original = original;
        this.QueenDisqOrDept = false;
        this.customqueen = false;
        this.chocolate = false;
		this.notsafe = false;
        this._name = name;
        this._actingStat = acting;
        this._comedyStat = comedy;
        this._danceStat = dance;
        this._designStat = design;
        this._improvStat = improv;
        this._runwayStat = runway;
        this._lipsyncStat = lipsync;
		this._shadeStat = shade;
		this._liked = 1;
        if (image == "noimage")
            this.image = "image/queens/noimage.jpg";
        else if (custom == true)
            this.image = image;
        else
            this.image = "Images/Queens/" + image + ".webp";
    }
    _calculateScores(min, max, stat = 0) {
        let score = randomNumber(min, max);
        return score - stat;
    }
    getName() {
        return this._name;
    }
	
	getSeason() {
        return this.original;
    }

    AddRelation(Queen) {
        let newRel = new Relation(Queen)
        this.relationships.push(newRel);
    }

    UpdateAllRelations(Queen, points) {
        for(let i = 0; i<this.relationships.length; i++)
        {
            this.relationships[i].UpdateStatus();
        }
    }

    ResetRelations()
    {
        this.relationships = [];
    }

    GetRelation(Queen)
    {
        for(let i = 0; i<this.relationships.length; i++)
        {
            if(this.relationships[i].GetQueen().getName()==Queen)
            {
                return(this.relationships[i].GetPoints());
            }
        }
    }

    ChangeRelation(Queen, points)
    {
        for(let i = 0; i<this.relationships.length; i++)
        {
            if(this.relationships[i].GetQueen().getName()==Queen)
            {
                this.relationships[i].ChangePoints(points);
            }
        }
    }

    AddAlliance(Queen)
    {
        this.alliances.push(Queen);
    }

    IsAlliedTo(Queen)
    {
        let found = false;
        for(let a = 0; a<this.alliances.length; a++)
        {
            if(this.alliances[a]==Queen)
            {
                found = true;
            }
        }
        return(found);
    }

    RemoveAlliance(Queen)
    {
        this.alliances.slice(this.alliances.indexOf(Queen),1);
    }

    getFirstSeason() {
        return this.OriginalSeason;
    }

    getLipSyncStat() {
        return this._lipsyncStat;
    }
    getActing() {
        this.performanceScore = this._calculateScores(15, 35, this._actingStat);
    }
    getComedy() {
        this.performanceScore = this._calculateScores(15, 35, this._comedyStat);
    }
    getMarketing() {
        this.performanceScore = this._calculateScores(25, 45, this._comedyStat + this._actingStat);
    }
    getDance() {
        this.performanceScore = this._calculateScores(15, 35, this._danceStat);
    }
    getDesign() {
        this.performanceScore = this._calculateScores(15, 35, this._designStat);
    }
    getImprov() {
        this.performanceScore = this._calculateScores(15, 35, this._improvStat);
    }
    //special 'gets':
    getSnatch() {
        this.performanceScore = this._calculateScores(25, 45, this._improvStat + this._comedyStat);
    }
    getRusical() {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._lipsyncStat);
    }
    getBall() {
        this.performanceScore = this._calculateScores(25, 45, this._designStat + this._runwayStat);
    }
    getRumix() {
        this.performanceScore = this._calculateScores(25, 45, this._danceStat + this._improvStat);
    }
    getTalentShow() {
        this.performanceScore = this._calculateScores(40, 70, this._actingStat + this._comedyStat + this._danceStat + this._designStat + this._improvStat + this._lipsyncStat);
    }
    getFinale() {
        this.finaleScore = this.favoritism - this.unfavoritism;
    }
    getRunway() {
        this.runwayScore = this._calculateScores(12, 35, this._runwayStat);
    }
	getLiked() {
        return this._liked;
    }
    getLipsync() {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat, this.unfavoritism) + this.favoritism;
    }
	getShade() {
		this.shadeScore = this._calculateScores(0, this._shadeStat);
    }
    getASLipsync() {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat);
    }
    addToTrackRecord(placement) {
        this.trackRecord.push(placement);
    }
}
//US Season 1: 
let akashia = new Queen("Akashia", 3, 2, 7, 3, 2, 7, 11, 12, "Akashia",false,"S");
let bebe = new Queen("BeBe Zahara Benet", 6, 7, 8, 12, 6, 10, 9, 10, "BeBe",false, "S");
let jade = new Queen("Jade Sotomayor", 3, 3, 8, 7, 3, 7, 7, 13, "Jade",false, "S");
let ninaf = new Queen("Nina Flowers", 7, 5, 5, 11, 6, 10, 6, 6, "NinaFlowers",false, "S");
let ongina = new Queen("Ongina", 9, 8, 7, 9, 10, 9, 8, 4, "Ongina",false, "S");
let rebecca = new Queen("Rebecca Glasscock", 3, 3, 6, 4, 2, 6, 5, 12, "Rebecca",false, "S");
let shannel = new Queen("Shannel", 5, 5, 5, 9, 4, 11, 7, 12, "Shannel",false, "S");
let tammie = new Queen("Tammie Brown", 6, 7, 5, 7, 6, 7, 6, 7, "Tammie",false, "S");
let victoria = new Queen("Victoria 'Porkchop' Parker", 3, 6, 4, 3, 6, 5, 4, 5, "Victoria",false, "S");
let us_season1 = [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria];
//US Season 2
let jessica = new Queen("Jessica Wild", 8, 6, 9, 7, 8, 8, 10, 4, "Jessica",false, "S");
let jujubee = new Queen("Jujubee", 9, 11, 7, 8, 12, 6, 12, 14, "Jujubee",false, "S");
let morgan = new Queen("Morgan McMichaels", 6, 6, 10, 9, 5, 10, 10, 12, "Morgan",false, "S");
let mystique = new Queen("Mystique Summers Madison", 4, 5, 3, 3, 3, 5, 6, 13, "Mystique",false, "S");
let nicole = new Queen("Nicole Paige Brooks", 4, 4, 4, 6, 4, 7, 6, 11, "Nicole",false, "S");
let pandora = new Queen("Pandora Boxx", 12, 11, 6, 8, 10, 8, 7, 12, "Pandora",false, "S");
let raven = new Queen("Raven", 5, 8, 9, 10, 5, 8, 11, 8, "Raven",false, "S");
let sahara = new Queen("Sahara Davenport", 6, 6, 10, 4, 6, 7, 10, 7, "Sahara",false, "S");
let shangela = new Queen("Shangela", 14, 13, 10, 3, 9, 9, 12, 12, "Shangela",false, "S");
let sonique = new Queen("Kylie Sonique Love", 11, 9, 10, 9, 8, 11, 11, 8, "Kylie",false, "S");
let tatianna = new Queen("Tatianna", 8, 11, 8, 8, 10, 8, 10, 12, "Tatianna",false, "S");
let tyra = new Queen("James", 11, 7, 8, 11, 8, 9, 10, 10, "Tyra",false, "S");
let us_season2 = [jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra];

let allQueens = [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria,
jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra]

let allQueensC = [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria,
jessica, jujubee, morgan, mystique, nicole, pandora, raven, sahara, shangela, sonique, tatianna, tyra]

function predefCast(cast, format, finale, premiere = '', returning = '') {
    currentCast = cast;
    totalCastSize = cast.length;
    newEpisode();
}

function generateSpace() {
    let castSize = document.querySelector("input#castSize").valueAsNumber;
    totalCastSize = castSize;
    let castSelection = document.querySelector("p#castSelection");
    castSelection.innerHTML = '';
	if (totalCastSize < 3 && noLimits == false)
        window.alert("The simulator will not start without 3+ queens!");
	else
        for (let i = 0; i < castSize; i++) {
            let select = document.createElement("select");
            select.setAttribute("class", "queenList");
            select.setAttribute("id", i.toString());
            select.setAttribute("onchange", "setImage()");
            let img = document.createElement("img");
            img.setAttribute("class", "images");
            img.setAttribute("id", "image" + i.toString());
            img.setAttribute("style", "width: 105px; height: 105px;")
            let p = document.createElement("p");
            p.appendChild(img);
            for (let k = 0; k < allQueensC.length; k++) {
                let option = document.createElement("option");
                option.innerHTML = allQueensC[k].getName();
                option.value = allQueensC[k].image;
				//allQueensC.splice(allQueensC.indexOf(allQueensC[k]),1);
                select.add(option);
            }
			let selectqueen = randomNumber(0, allQueensC.length - 1);
            select.selectedIndex = 	selectqueen
            let br = document.createElement("br");
            castSelection.appendChild(p);
            castSelection.appendChild(select);
            castSelection.appendChild(br);
        }
    setImage();
	
}

function setImage() {
    let images = document.getElementsByClassName("images");
    for (let i = 0; i < images.length; i++) {
        let img = document.getElementById("image" + i.toString());
        let select = document.getElementById(i.toString());
        img.src = select.options[select.selectedIndex].value;
    }
}

function startSimulation(challenge = "") {
    //get selected names and compare them to the all queens list:
    for (let i = 0; i < document.getElementsByClassName("queenList").length; i++) {
        let select = document.getElementById(i.toString());
        let value = select.options[select.selectedIndex].text;
        for (let k = 0; k < allQueens.length; k++) {
            if (value == allQueens[k].getName()) {
                currentCast.push(allQueens[k]);
                break;
            }
        }
    }
    if (currentCast.length == 0) {
        window.alert("You can't have a season without queens lmao..");
	} else {
        newEpisode();
    }
}

function newEpisode() {
    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];
    episodeCount++;
    let queensRemainingScreen = new Scene();
    queensRemainingScreen.clean();
	if (episodeCount == 1) {
		queensRemainingScreen.createBigText("Its time to meet the cast..");
		queensRemainingScreen.createHorizontalLine();
		for (let i = 0; i < currentCast.length; i++) {
			entranceQueens.push(currentCast[i]);
		}
		entrance();
	} else {
		miniChallenge();
	}
}

let entranceLine = [
    "Oh? This isn't America's Next Top Model?",
	"Rupaul! Its time to crown a winner!!",
	"Oh? Thats it?",
	"*silence*.. Oh? Do i need a entrance?",
	"I came here to FIGHT!",
	"I look pretty good for a dead bitch!",
	"This is JUST.. the entrance line!",
	"I'm the queen yall want to see, cmon baby crown me.. ok.. ok.. ok.. get into it!",
	"Bonjour, Bonjour!!",
	"Don't be bitter ladies! Second place isn't too bad..",
	"The race has JUST.. begun!",
	"Oohlalalala!",
	"I auditioned for the pitcrew.. but this is gonna be much more fun!",
	"HA!.. What's my line again?",
	"Hey gossip girl! Look who I just spotted.. A BAD BITCH!",
	"Oh baby.. I'm just here for the fame..",
	"Pack your bag girls, cause the winner has arrived!",
	"*literally says nothing*",
	"Munch munch, crunch crunch.. Im gonna eat yall for lunch!",
	"Why yall looking at me like that? I know you've never seen a stunning bitch, but damn.",
	"*screams*",
	"Where am I?",
	"They tried to make me go to rehab, I said no no no…",
	"Hey guys! Welcome back to another video, today I am gonna slaughter some flops!",
	"..Whores..",
	"They needed someone to go home first..",
	"Watch out sisters, head cheerleader is gonna be me!",
	"Just cast a curse, thou shall get eliminated!",
	"Cash me outside how bout that!",
	"There's room for everybody, lets just say that!",
	"Does anyone know where I can get some blunt?",
	"Lets make drag great again!",
	"Its not the edit thats gonna make me seem like a bitch.. It's the anger issues!",
	"Oh yall wanted a twist??? Come on anxiety lets get panicking!",
	"999.. I need to report a robbery.. these wigs have been snatched!!",
	"Filler queen!",
	"Ugh.. It must be so hard not being me!"
];

let reactLine = [
    "Ok sis...",
	"Ok werk!",
	"Oh.. ok..",
	"YASS!!",
	"Oh my god!",
	"Oh.",
	"*rolls eyes*",
	"Girl atleast she tried..",
	"Ugh, not this bitch..",
	"I'm not gagging..",
	"Yass, mama!",
	"NURSE-",
	"Ew, michelle.."
];

let flopLine = [
	"tables and gossips.",
	"tables and sits.",
	"tables and stands.",
	"mirrors and feels her oats."
];


function entrance() {
    let screen = new Scene();
	screen.clean();
	//document.body.style.backgroundImage = "url('image/entrance.webp')";
	if (entranceQueens.length > 1) {
		screen.createBigText("A queen walks in...");
		screen.createHorizontalLine();
		let react = randomNumber(0, reactLine.length - 1);
		let used = []
		screen.createImage("Images/Queens/Question.webp", 'gold');
		screen.createBold(`A queen walks in..`);
		let line = randomNumber(0, entranceLine.length - 1);
		screen.createBold(`"${entranceLine[line]}"`);
		entranceLine.splice(entranceLine[line], 1);
		let shadee = randomNumber(0, reactq.length - 1);
		if (reactq.length < 1 || reactq.length < 0) {
			let flop = randomNumber(0, flopLine.length - 1);
		//} else if(reactq[shadee].getName()==currentCast[i].getName()) { 
			//let flop = randomNumber(0, flopLine.length - 1);
		} else {
			screen.createBold(`${reactq[shadee].getName()}: "${reactLine[react]}"`);
			let flop = randomNumber(0, flopLine.length - 1);
		}
		//screen.createHorizontalLine();
		screen.createButton("Reveal Queen", "entrance2()");
		screen.createHorizontalLine();
	} else if (entranceQueens.length == 1) {
		screen.createBigText("A queen walks in...");
		screen.createHorizontalLine();
		let react = randomNumber(0, reactLine.length - 1);
		let used = []
		screen.createImage("Images/Queens/Question.webp", 'gold');
		screen.createBold(`A queen walks in..`);
		let line = randomNumber(0, entranceLine.length - 1);
		screen.createBold(`"${entranceLine[line]}"`);
		entranceLine.splice(entranceLine[line], 1);
		let shadee = randomNumber(0, reactq.length - 1);
		if (reactq.length < 1 || reactq.length < 0) {
			let flop = randomNumber(0, flopLine.length - 1);
		//} else if(reactq[shadee].getName()==currentCast[i].getName()) { 
			//let flop = randomNumber(0, flopLine.length - 1);
		} else {
			screen.createBold(`${reactq[shadee].getName()}: "${reactLine[react]}"`);
			let flop = randomNumber(0, flopLine.length - 1);
		}
		//screen.createHorizontalLine();
		screen.createButton("Reveal Queen", "entrance2()");
		screen.createHorizontalLine();
	} else {
		miniChallenge();
	}
}

function entrance2() {
    let screen = new Scene();
	screen.clean();
	screen.createBigText("A queen walks in...");
	screen.createHorizontalLine();
	let react = randomNumber(0, reactLine.length - 1);
	reactq.push(entranceQueens[0])
	screen.createImage(entranceQueens[0].image);
	screen.createBold(`${entranceQueens[0].getName()} has walked in.`);
	entranceQueens.splice(entranceQueens.indexOf(entranceQueens[0]),1);
	screen.createButton("Next Queen", "entrance()");
	screen.createHorizontalLine();
}

function miniChallenge() {
    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];
    let Screen = new Scene();
    Screen.clean();
	document.body.style.backgroundImage = "url('Images/Backgrounds/TV.webp')";
	Screen.createBigText("The TV plays...");
	Screen.createHorizontalLine();
	readQueens = [];
	for (let i = 0; i < currentCast.length; i++) {
		readQueens.push(currentCast[i]);
	}
	if (episodeCount == 1) {
		Screen.createImage("Images/Queens/Rupaul.webp", 'gold');
		Screen.createBold(`To win Drag Race you have to show that you are the cuntiest bitch in the building.. OKAYYY!`);
		Screen.createBold(`If you don't stand out then how are you gonna stand in..`);
		Screen.createBold(`So put your glasses on.. cause y'all are gonna have to get literate in here, OKURR!!`);
		Screen.createHorizontalLine();
		Screen.createButton("Continue", "reading()");
	}
}

function createPerformanceDesc(slay, great, good, bad, flop) {
    let screen = new Scene();
    if (slay.length !== 0) {
        for (let i = 0; i < slay.length; i++)
            screen.createImage(slay[i].image, "darkblue");
        screen.createBold("", "slay");
        let slayText = document.getElementById("slay");
        for (let i = 0; i < slay.length; i++)
            slayText.innerHTML += `${slay[i].getName()}, `;
        slayText.innerHTML += "slayed the challenge!";
    }
    if (great.length !== 0) {
        for (let i = 0; i < great.length; i++)
            screen.createImage(great[i].image, "royalblue");
        screen.createBold("", "great");
        let greatText = document.getElementById("great");
        for (let i = 0; i < great.length; i++)
            greatText.innerHTML += `${great[i].getName()}, `;
        greatText.innerHTML += "had a great performance!";
    }
    if (good.length !== 0) {
        for (let i = 0; i < good.length; i++)
            screen.createImage(good[i].image);
        screen.createBold("", "good");
        let goodText = document.getElementById("good");
        for (let i = 0; i < good.length; i++)
            goodText.innerHTML += `${good[i].getName()}, `;
        goodText.innerHTML += "had a good performance.";
    }
    if (bad.length !== 0) {
        for (let i = 0; i < bad.length; i++)
            screen.createImage(bad[i].image, "pink");
        screen.createBold("", "bad");
        let badText = document.getElementById("bad");
        for (let i = 0; i < bad.length; i++)
            badText.innerHTML += `${bad[i].getName()}, `;
        badText.innerHTML += "had a bad performance...";
    }
    if (flop.length !== 0) {
        for (let i = 0; i < flop.length; i++)
            screen.createImage(flop[i].image, "tomato");
        screen.createBold("", "flop");
        let flopText = document.getElementById("flop");
        for (let i = 0; i < flop.length; i++)
            flopText.innerHTML += `${flop[i].getName()}, `;
        flopText.innerHTML += "flopped the challenge...";
    }
}

function sortPerformances(cast) {
    cast.sort((a, b) => (a.performanceScore - b.performanceScore));
}

class Reading {
    generateDescription() {
        let description = document.querySelector("p#Description");
        description.innerHTML = "In this mini challenge, the queens will have to read eachother to fifth!";
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getShade();
        sortPerformances(currentCast);
    }
}

class ImprovChallenge {
    generateDescription() {
        let description = document.querySelector("p#Description");
        let desc1;
        let whatChallengeIs = randomNumber(0, 12);
        (function (desc1) {
            desc1[desc1["political debate."] = 0] = "political debate."; {
            } desc1[desc1["celebrity interview."] = 1] = "celebrity interview."; { 
            } desc1[desc1["modern morning TV show."] = 2] = "modern morning TV show."; {
			} desc1[desc1["late-night TV show."] = 3] = "late-night TV show."; {
			} desc1[desc1["new Bossy Rossy episode."] = 4] = "new Bossy Rossy episode."; {
			} desc1[desc1["suggestive kids TV show."] = 5] = "suggestive kids TV show."; {
            } desc1[desc1["Bitchelor show."] = 6] = "Bitchelor show."; {
            } desc1[desc1["Jersey Justice show."] = 7] = "Jersey Justice show."; {
            } desc1[desc1["diva worship talk show."] = 8] = "diva worship talk show."; {
            } desc1[desc1["talent show for people with little talent."] = 9] = "talent show for people with little talent."; {
            } desc1[desc1["drag queen spoof of the celebrity gossip and drama television show."] = 10] = "drag queen spoof of the celebrity gossip and drama television show."; {
            } desc1[desc1["pageant, the Miss Loose Jaw Pageant."] = 11] = "pageant, the Miss Loose Jaw Pageant."; {
            } desc1[desc1["intimate chat show called Pink Table Talk."] = 12] = "intimate chat show called Pink Table Talk."; {
			}
        })(desc1 || (desc1 = {}));
        description.innerHTML = "The queens will improvise in a " + desc1[whatChallengeIs];
    }
    rankPerformances() {
        for (let i = 0; i < currentCast.length; i++)
            currentCast[i].getImprov();
        sortPerformances(currentCast);
    }
}

function reading() {
    let challengeScreen = new Scene();
	document.body.style.backgroundImage = "url('Images/Backgrounds/TV.webp')";
    challengeScreen.clean();
    //challengeScreen.createHeader("Mini-challenge!");
    challengeScreen.createParagraph("", "Description");
	//performances
    let challenge = new Reading();
    challenge.generateDescription();
    //queenTalents();
    challenge.rankPerformances();
    //reads
	challengeScreen.createHorizontalLine();
	while (readQueens.length > 1 || readQueens.length == 1) {
		reads();
	}
	challengeScreen.createButton("Continue", "miniJudging()");
    //episodeChallenges.push("Talent Show");
}

let readLineGreat = [
    "Is the bus still runnin? Cause you'll need to leave real soon.",
	"LOOK OVER THERE! It's the exit.",
	"Your beauty is listed right on the side of the carton.. under missing.",
	"If you are America’s sweetheart then America needs a heart transplant."
];

let readLineGood = [
	"Is your grill fucked? Because those ones sure are.",
	"Next time you death drop, reverse that and drop dead.",
	"You should just really make like you hairline.. and recede.",
	"My darling dear.. I can't stand it when you're near.",
	"Have you ever tried eating your makeup? So you'll be pretty on the inside, too.",
	"It's good to see a filler bitch this season, and I'm not talking about that ass."
];

let readLineFine = [
	"You know people say you aren't talented and your mug is fucked. That is so wrong.. your mug isn't fucked.",
	"There are two types of peanut butter.. creamy and crunchy.",
	"Haute couture? More like haute glue.",
	"I once told you, you're so beautiful inside and out... I lied.",
	"Your wardrobe sure does look expensive, but money can't buy talent.",
	"I don't have a read for you.. please just fuck me.",
	"Here's a cape.. Go and fly your ass home girl!"
];

let readLineBad = [
	"Here's a cape.. Go be supergirl and fly your ass home girl!",
	"If I was as untalented and unoriginal as you, I also would spend all my time trying to be somebody more talented than I.",
	"I'm sure everyone can see you from their backyard.",
	"I- I'm sorry i can't do this..",
	"I don't have a read for you.. please just fuck me.",
	"Did you see her? Her dress is so tacky... Who wears cheetah."
];

function reads() {
	let screen = new Scene();
	//screen.createBigText("A queen walks in...");
	screen.createImage(readQueens[0].image);
	screen.createBold(`${readQueens[0].getName()} you are up.`);
	let i = randomNumber(0, currentCast.length - 1);
	while (currentCast[i].getName() == readQueens[0].getName()) {
		i = randomNumber(0, currentCast.length - 1);
	}
	if (currentCast[i].shadeScore > 5 || currentCast[i].shadeScore == 5) {
		let read = randomNumber(0, readLineBad.length - 1);
		screen.createBold(`${currentCast[i].getName()}.. ${readLineBad[read]}`);
		readLineBad.splice(readLineBad.indexOf(readLineBad[read]),1);
	} else if (currentCast[i].shadeScore > 5 && currentCast[i].shadeScore < 9 || currentCast[i].shadeScore > 5 && currentCast[i].shadeScore == 9) {
		let read = randomNumber(0, readLineFine.length - 1);
		screen.createBold(`${currentCast[i].getName()}.. ${readLineFine[read]}`);
		readLineFine.splice(readLineFine.indexOf(readLineFine[read]),1);
	} else if (currentCast[i].shadeScore > 9 && currentCast[i].shadeScore < 12 || currentCast[i].shadeScore > 9 && currentCast[i].shadeScore == 12) {
		let read = randomNumber(0, readLineGood.length - 1);
		screen.createBold(`${currentCast[i].getName()}.. ${readLineGood[read]}`);
		readLineGood.splice(readLineGood.indexOf(readLineGood[read]),1);
	} else {
		let read = randomNumber(0, readLineGreat.length - 1);
		screen.createBold(`${currentCast[i].getName()}.. ${readLineGreat[read]}`);
		readLineGreat.splice(readLineGreat.indexOf(readLineGreat[read]),1);
	}
	readQueens.splice(readQueens.indexOf(readQueens[0]),1);
	screen.createHorizontalLine();
}

function queensPerformances() {
    let performanceScreen = new Scene();
    performanceScreen.createHorizontalLine();
    performanceScreen.createBigText("Queens' performances...");
    let slay = currentCast.filter(function (queen) { return queen.performanceScore < 6; });
    let great = currentCast.filter(function (queen) { return queen.performanceScore >= 6 && queen.performanceScore < 16; });
    let good = currentCast.filter(function (queen) { return queen.performanceScore >= 16 && queen.performanceScore < 26; });
    let bad = currentCast.filter(function (queen) { return queen.performanceScore >= 26 && queen.performanceScore < 31; });
    let flop = currentCast.filter(function (queen) { return queen.performanceScore >= 31 && queen.performanceScore < 50; });
    createPerformanceDesc(slay, great, good, bad, flop);
}

function challengeScreen() {
	let screen = new Scene();
	screen.clean();
	document.body.style.backgroundImage = "url('Images/Backgrounds/Ru-Talk.webp')";
	screen.createBigText("HA! I'm acting.");
	screen.createImage("Images/Queens/RuOut.webp", 'gold');
	screen.createBold(`You better put your crazy to a max because you are gonna need it!`);
	screen.createButton("Continue", "improvChallenge()");
}

function miniJudging() {
	let screen = new Scene();
	screen.clean();
	screen.createBigText("The winner of the mini challenge is..");
	currentCast.sort((a, b) => (a.shadeScore - b.shadeScore));
    topQueens.push(currentCast[0]);
	screen.createImage(topQueens[0].image);
	screen.createBold(`${topQueens[0].getName()}.. Condragulations you are the winner!`);
	screen.createButton("Continue", "challengeScreen()");
}

function improvChallenge() {
    let challengeScreen = new Scene();
	document.body.style.backgroundImage = "url('Images/Backgrounds/Workroom.png')";
    challengeScreen.clean();
    challengeScreen.createParagraph("", "Description");
    let challenge = new ImprovChallenge();
    challenge.generateDescription();
    challenge.rankPerformances();
    queensPerformances();
	currentCast.sort((a, b) => (a.performanceScore - b.performanceScore));
    topQueens.push(currentCast[0]);
    highQueens.push(currentCast[1]);
	bottomQueens.push(currentCast[currentCast.length - 1]);
    bottomQueens.push(currentCast[currentCast.length - 2]);
	lowQueens.push(currentCast[currentCast.length - 3]);
	for (let i = 0; i < topQueens.length; i++) {
		judgingQueens.push(topQueens[i])
		topQueens[i].notsafe = true;
	}
	for (let i = 0; i < highQueens.length; i++) {
		judgingQueens.push(highQueens[i])
		highQueens[i].notsafe = true;
	}
	for (let i = 0; i < lowQueens.length; i++) {
		judgingQueens.push(lowQueens[i])
		lowQueens[i].notsafe = true;
	}
	for (let i = 0; i < bottomQueens.length; i++) {
		judgingQueens.push(bottomQueens[i])
		bottomQueens[i].notsafe = true;
	}
	challengeScreen.createButton("Continue", "judging()");
}

function judging() {
    let screen = new Scene();
	document.body.style.backgroundImage = "url('Images/Backgrounds/MS.png')";
    screen.clean();
	if (judgingQueens.length > 1) {
		screen.createImage("Images/Queens/Rupaul.webp", 'gold');
		screen.createBigText("If I call your name, please step forward.");
		screen.createButton("Continue", "judging2()");
	} else {
		screen.createImage("Images/Queens/Rupaul.webp", 'gold');
		screen.createBigText("The rest of you are safe. You may step to the back.");
		for (let i = 0; i < currentCast.length; i++) {
			if (currentCast[i].notsafe == false) {
				safeQueens.push(currentCast[i])
			}
		}
		//screen.createButton("Continue", "judging2()");
	}
}

function judging2() {
    let screen = new Scene();
	screen.clean();
	screen.createImage("Images/Queens/Rupaul.webp", 'gold');
	screen.createBigText("...");
	screen.createImage(judgingQueens[0].image);
	screen.createBold(`${judgingQueens[0].getName()}..`);
	judgingQueens.splice(judgingQueens.indexOf(judgingQueens[0]),1);
	screen.createButton("Continue", "judging()");
	screen.createHorizontalLine();
}

class Scene {
    constructor() {
        this._MainBlock = document.querySelector("div#MainBlock");
    }
    clean() {
        this._MainBlock.innerHTML = '';
    }
    createHeader(text) {
        let title = document.getElementById("h1");
        title.innerHTML = text;
    }
    createBigText(text) {
        let big = document.createElement("big");
        let p = document.createElement("p");
        big.innerHTML = text;
        p.appendChild(big);
        this._MainBlock.appendChild(p);
    }
    createParagraph(text, id = '') {
        let p = document.createElement("p");
        p.innerHTML = text;
        p.setAttribute("id", id);
        this._MainBlock.appendChild(p);
    }
    createBold(text, id = '', id1 = '') {
        let p = document.createElement("p");
        let bold = document.createElement("b");
        bold.innerHTML = text;
        bold.setAttribute("id", id);
        p.setAttribute("id", id1);
        p.appendChild(bold);
        this._MainBlock.appendChild(p);
    }
    createButton(text, method, id = '') {
        let button = document.createElement("a");
        button.innerHTML = text;
        button.setAttribute("onclick", method);
        button.setAttribute("id", id);
        this._MainBlock.appendChild(button);
    }
    createHorizontalLine() {
        let hr = document.createElement("hr");
        this._MainBlock.appendChild(hr);
    }
    createImage(Source, Color) {
		let image = document.createElement("img");
		image.src = Source;
		image.setAttribute("style", 'margin: 7px; width: 105px; height: 105px; border-radius: 30px; border: 3px solid; border-color: '+Color+';');
		this._MainBlock.appendChild(image); 
	}
}