const { Plugin } = require(`powercord/entities`)

var quotes = Array(  
   "2024",
    "All you have to be is yourself",
    "Believe in your flyness...conquer your shyness.",
    "Burn that excel spread sheet",
    "Decentralize",
    "Distraction is the enemy of vision",
    "Everything you do in life stems from either fear or love",
    "For me giving up is way harder than trying.",
    "For me, money is not my definition of success. Inspiring people is a definition of success",
    "Fur pillows are hard to actually sleep on",
    "George Bush doesn't care about black people",
    "Have you ever thought you were in love with someone but then realized you were just staring in a mirror for 20 minutes?",
    "I care. I care about everything. Sometimes not giving a f#%k is caring the most.",
    "I feel calm but energized",
    "I feel like I'm too busy writing history to read it.",
    "I feel like me and Taylor might still have sex",
    "I give up drinking every week",
    "I leave my emojis bart Simpson color",
    "I love sleep; it's my favorite.",
    "I make awesome decisions in bike stores!!!",
    "I really love my Tesla. I'm in the future. Thank you Elon.",
    "I still think I am the greatest.",
    "I think I do myself a disservice by comparing myself to Steve Jobs and Walt Disney and human beings that we've seen before. It should be more like Willy Wonka...and welcome to my chocolate factory.",
    "I want the world to be better! All I want is positive! All I want is dopeness!",
    "I wish I had a friend like me",
    "I'd like to meet with Tim Cook. I got some ideas",
    "I'll say things that are serious and put them in a joke form so people can enjoy them. We laugh to keep from crying.",
    "I'm a creative genius",
    "I'm nice at ping pong",
    "I'm the best",
    "If I don't scream, if I don't say something then no one's going to say anything.",
    "If I got any cooler I would freeze to death",
    "Just stop lying about shit. Just stop lying.",
    "Keep squares out yo circle",
    "Keep your nose out the sky, keep your heart to god, and keep your face to the rising sun.",
    "Let's be like water",
    "Man... whatever happened to my antique fish tank?",
    "My dad got me a drone for Christmas",
    "My greatest award is what I'm about to do.",
    "My greatest pain in life is that I will never be able to see myself perform live.",
    "One day I'm gon' marry a porn star",
    "One of my favorite of many things about what the Trump hat represents to me is that people can't tell me what to do because I'm black",
    "Only free thinkers",
    "People always say that you can't please everybody. I think that's a cop-out. Why not attempt it? Cause think of all the people that you will please if you try.",
    "People always tell you 'Be humble. Be humble.' When was the last time someone told you to be amazing? Be great! Be awesome! Be awesome!",
    "People only get jealous when they care.",
    "Perhaps I should have been more like water today",
    "Pulling up in the may bike",
    "Shut the fuck up I will fucking laser you with alien fucking eyes and explode your fucking head",
    "Sometimes I push the door close button on people running towards the elevator. I just need my own elevator sometimes. My sanctuary.",
    "Sometimes you have to get rid of everything",
    "Style is genderless",
    "The thought police want to suppress freedom of thought",
    "The world is our family",
    "The world is our office",
    "Today is the best day ever and tomorrow's going to be even better",
    "Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth",
    "Tweeting is legal and also therapeutic",
    "We all self-conscious. I'm just the first to admit it.",
    "We came into a broken world. And we're the cleanup crew.",
    "You can't look at a glass half full or empty if it's overflowing.",
    "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle",
    "All the musicians will be free",
    "Artists are founders",
    "Buy property",
    "Culture is the most powerful force in humanity under God",
    "Empathy is the glue",
    "I am one of the most famous people on the planet",
    "I am running for President of the United States",
    "I am the head of Adidas. I will bring Adidas and Puma back together and bring me and jay back together",
    "I channel Will Ferrell when I'm at the daddy daughter dances",
    "I don't wanna see no woke tweets or hear no woke raps ... it's show time ... it's a whole different energy right now",
    "I hear people say this person is cool and this person is not cool. People are cool. Man has never invented anything as awesome as a an actual person but sometimes we value the objects we create over life itself",
    "I honestly need all my Royeres to be museum quality... if I see a fake Royere Ima have to Rick James your couch",
    "I love UZI. I be saying the same thing about Steve Jobs. I be feeling just like UZI",
    "I need an army of angels to cover me while I pull this sword out of the stone",
    "I spoke to Dave Chapelle for two hours this morning. He is our modern day Socrates",
    "I was just speaking with someone that told me their life story and they used to be homeless.",
    "I watch Bladerunner on repeat",
    "I'm giving all Good music artists back the 50% share I have of their masters",
    "I'm going to personally see to it that Taylor Swift gets her masters back. Scooter is a close family friend",
    "I'm the new Moses",
    "Life is the ultimate gift",
    "Ma$e is one of my favorite rappers and I based a lot of my flows off of him",
    "Manga all day",
    "My first pillar when I'm on the board of adidas will be an adidas Nike collaboration to support community growth",
    "My mama was a' English teacher. I know how to use correct English but sometimes I just don't feel like it aaaand I ain't got to",
    "My memories are from the future",
    "My mother in law Kris Jenner ... makes the best music playlist",
    "People say it's enough and I got my point across ... the point isn't across until we cross the point",
    "People tried to talk me out of running for President. Never let weak controlling people kill your spirit",
    "So many of us need so much less than we have especially when so many of us are in need",
    "Speak God's truth to power",
    "The media tries to kill our heroes one at a time",
    "The world needs more Joy... this idea is super fresh",
    "There are 5 main pillars in a professional musicians business - Recording, Publishing, Touring, Merchandise & Name and likeness",
    "There are people sleeping in parking lots",
    "There's a crying need for civility across the board. We need to and will come together in the name of Jesus.",
    "There's so many lonely emojis man",
    "Trust me ... I won't stop",
    "Two years ago we had 50 million people subscribed to music streaming services around the world. Today we have 400 million.",
    "We are here to complete the revolution. We are building the future",
    "We as a people will heal. We will insure the well being of each other",
    "We have to evolve",
    "We must and will cure homelessness and hunger. We have the capability as a species",
    "We must form a union. We must unify",
    "We used to diss Michael Jackson the media made us call him crazy ... then they killed him",
    "We will be recognized",
    "We will change the paradigm",
    "We will cure hunger",
    "We will heal. We will cure.",
    "We're going to move the entire music industry into the 21st Century",
    "We've gotten comfortable with not having what we deserve",
    "Who made up the term major label in the first place???",
    "Winning is the only option",
    "You can say anything as long as you put the right emoji next to it",
    "Everyone should be their own biggest fan",
    "I hate when I'm on a flight and I wake up with a water bottle next to me. Like oh great. Now I gotta be responsible for this water bottle",
    "Have you ever thought you were in love with someone, but then realized you were just staring in a mirror for 20 minutes?",
    "You may be talented, but you're not Kanye West",
    "Sometimes I get emotional over fonts",
    "Sometimes you have to get rid of everything",
    "If I got any cooler I would freeze to death"
)

function kanyerest() {
	var phrase = '"***' + quotes[Math.floor(Math.random()*quotes.length)] + '***" *- Kanye West*';
	return quotes
}
};

module.exports = class Sender extends Plugin {
  constructor() {
    super();

  }
  startPlugin() {
    powercord.api.commands.registerCommand({
      command: `kanye`,
      description: `Gets a quote from https://api.kanye.rest/`,
      usage: `{prefix}kanye`,
      executor: _ => {
        return {
          send: true,
          result: kanyerest()
        }
      }
    });
   
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand(`kanye`);
 
  }

}
