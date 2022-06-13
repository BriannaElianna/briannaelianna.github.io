let safeQueens = [];
topQueens = [];
bottomQueens = [];
top2 = [];
let episodeCount = 0;
let entranceQueens = [];
let reactq = [];
let used = [];

function randomNumber(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

class Queen {
    constructor(name, acting, comedy, dance, design, improv, runway, lipsync, image = "noimage", custom = false, original) {
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
        this._name = name;
        this._actingStat = acting;
        this._comedyStat = comedy;
        this._danceStat = dance;
        this._designStat = design;
        this._improvStat = improv;
        this._runwayStat = runway;
        this._lipsyncStat = lipsync;
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
    getASLipsync() {
        this.lipsyncScore = this._calculateScores(0, this._lipsyncStat);
    }
    addToTrackRecord(placement) {
        this.trackRecord.push(placement);
    }
}
//Judges
//QUEENS:
//SEASON 1: 
let akashia = new Queen("Akashia", 3, 2, 7, 3, 2, 7, 11, "Akashia",false,"S");
let bebe = new Queen("BeBe Zahara Benet", 6, 7, 8, 12, 6, 10, 9, "BeBe",false, "S");
let jade = new Queen("Jade Sotomayor", 3, 3, 8, 7, 3, 7, 7, "Jade",false, "S");
let ninaf = new Queen("Nina Flowers", 7, 5, 5, 11, 6, 10, 6, "NinaFlowers",false, "S");
let ongina = new Queen("Ongina", 9, 8, 7, 9, 10, 9, 8, "Ongina",false, "S");
let rebecca = new Queen("Rebecca Glasscock", 3, 3, 6, 4, 2, 6, 5, "Rebecca",false, "S");
let shannel = new Queen("Shannel", 5, 5, 5, 9, 4, 11, 7, "Shannel",false, "S");
let tammie = new Queen("Tammie Brown", 6, 7, 5, 7, 6, 7, 6, "Tammie",false, "S");
let victoria = new Queen("Victoria 'Porkchop' Parker", 3, 6, 4, 3, 6, 5, 4, "Victoria",false, "S");
let us_season1 = [akashia, bebe, jade, ninaf, ongina, rebecca, shannel, tammie, victoria];

function predefCast(cast, format, finale, premiere = '', returning = '') {
    currentCast = cast;
    totalCastSize = cast.length;
    newEpisode();
}

function newEpisode() {
    safeQueens = [];
    topQueens = [];
    bottomQueens = [];
    top2 = [];
    episodeCount++;
    let queensRemainingScreen = new Scene();
    if (episodeCount == 1 && speed == true || premiereCounter <= 2 && (s12Premiere && speed == true || porkchopPremiere && speed == true || s6Premiere && speed == true || s14Premiere && speed == true ) || episodeCount == 1 && (uk3Premiere && speed == true || s9Premiere) && speed == true) {
        queensRemainingScreen.clean();
        queensRemainingScreen.createHeader("Entrances");
		entrance();
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
    queensRemainingScreen.createBold(`It's time to meet the cast.`);
	queensRemainingScreen.createHorizontalLine();
	//for (let i = 0; i < currentCast.length; i++) {
		//entranceQueens.push(currentCast[i]);
	//}
	entranceQueens = currentCast;
	entrance();
}

class Scene {
    constructor() {
        this._MainBlock = document.querySelector("div#MainBlock");
    }
    clean() {
        this._MainBlock.innerHTML = '';
    }
    createHeader(text) {
        let title = document.getElementById("MainTitle");
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
    createImage(source, color = "black") {
        let image = document.createElement("img");
        image.src = source;
        image.setAttribute("style", `border-color: ${color}; width: 105px; height: 105px;`);
        this._MainBlock.appendChild(image);
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
		screen.createImage("Images/Queens/Question.webp", "gold");
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
		screen.createImage("Images/Queens/Question.webp", "gold");
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
		screen.createBigText("WORKING ON IT BITCH");
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
