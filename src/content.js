const content = [
  {
    type: 'tv_show',
    title: 'The Walking Dead',
    genre: ['Drama', 'Horror', 'Action'],
    content: [
      {
        description:
          'Following on from where Rick Grimes wakes up from a coma and tries to find his family. He gets to Atlanta, surrounded by walkers, he is thrown from his horse and ends up in a tank. This is where someone on the walkie talkie, Glenn, helps him out of the tight situation.',
        short:
          'Rick Grimes arrives in a dystopian Atlanta surrounded by walkers and is thrown from his horse',
        season: 1,
        episode: 2,
        episode_title: 'Guts',
        imdb: 'https://www.imdb.com/title/tt1628064/?ref_=ttep_ep2',
        url: 'https://www.youtube.com/watch?v=ZxmWhlidAZ8',
        thumbnail: '/assets/images/walking-dead_1_2.jpg'
      },
      {
        description:
          'The Saviours have captured Rick and the group. They kneel at the mercy of Negan who makes an example of 2 of the groups members. Not for the faint of heart.',
        short:
          "Rick and the group are captured by the Saviours, which doesn't end well for the group.",
        season: 7,
        episode: 1,
        episode_title: "The Day Will Come When You Won't Be",
        imdb: 'https://www.imdb.com/title/tt5164772/?ref_=ttep_ep1',
        url: 'https://www.youtube.com/watch?v=d3LDG5CCOPQ',
        thumbnail: '/assets/images/walking-dead_7_1.jpg'
      }
    ]
  },
  {
    type: 'tv_show',
    title: 'The Newsroom',
    description:
      "Will McAvoy (Jeff Daniels) hits the nail straight on the head in the opening minutes on HBO's new series 'The Newsroom'. He is asked by a college student a simple question during a campus debate. 'What makes America the greatest country in the world?'. Daniels initially goes the politically correct route then at the last minute goes with a honest, bold, straight forward answer that sums up a lot of the worlds problems that so many are afraid to accept because we all want to believe in our system and that it is our system that works. The evidence that is out there today is to the contrary and he discloses such information in his argument. We used to be the worlds best of the best and now we are just pretending. The first step to solving a problem is to admit there is one.",
    short:
      'Will McAvoy\'s opening statement to the show about "what makes America great?"',
    season: 1,
    episode: 1,
    episode_title: 'We Just Decided To',
    imdb: 'http://www.imdb.com/title/tt1870479/',
    url: 'https://www.youtube.com/watch?v=wTjMqda19wk',
    thumbnail: '/assets/images/the-newsroom.jpg',
    genre: ['Drama', 'History']
  },
  {
    type: 'tv_show',
    title: 'Mr.Robot',
    description:
      "Elliot Alderson's powerful speech about control and the effects that religion and mindless following create.",
    short:
      "Elliot Alderson's powerful speech about control and the effects that religion and mindless following create.",
    season: 2,
    episode: 3,
    episode_title: 'eps2.1_k3rnel-pan1c.ksd',
    imdb: 'http://www.imdb.com/title/tt4158110/',
    url: 'https://www.youtube.com/watch?v=AZeLHD-725o',
    thumbnail: '/assets/images/mr-robot.jpg',
    genre: ['Crime', 'Drama', 'Thriller']
  },
  {
    type: 'tv_show',
    title: 'Silicon Valley',
    description:
      "The guys start calculating how most efficiently a mass jerk-off session can be carried out, which eventually also leads to a finding a new solution for Pied Piper's problems.",
    short:
      "Pied piper's jerk-off conversation leads to a break through for Richard.",
    season: 1,
    episode: 8,
    episode_title: 'Optimal Tip-To-Top Efficiency',
    imdb: 'http://www.imdb.com/title/tt2575988/',
    url: 'https://www.youtube.com/watch?v=mMeqEDEfniA',
    thumbnail: '/assets/images/silicon-valley.jpg',
    genre: ['Comedy']
  },
  {
    type: 'tv_show',
    title: 'Game of Thrones',
    genre: ['Action', 'Adventure', 'Drama'],
    content: [
      {
        description:
          'In Winterfell, Jon Snow, Sansa, Davos and Tormund meet with Ramsay, and Jon Snow proposes a dispute between them instead of sacrificing lives in a battle. Ramsay does not accept and they schedule the battle in the morning. Jon Snow plots a scheme with Davos and Tormund and Sansa warns that Ramsay plays dirty. When both armies are ready to battle, Ramsay brings a surprise.',
        short:
          'John tries to tempt Ramsay into combat between them, but Ramsay has other plans.',
        season: 6,
        episode: 9,
        episode_title: 'Battle of the Bastards',
        imdb: 'https://www.imdb.com/title/tt4283088/',
        url: 'https://www.youtube.com/watch?v=m8rURwkvOx0',
        thumbnail: '/assets/images/game-of-thrones_6_9.jpg'
      },
      {
        description:
          "Jon Snow fights off and kills a White Walker with Valyrian Steel in Hardhome along with the Army of the Dead. A white walker strides into the burning hall. Thenn moves to fight him while Jon Snow finds the glass. The Walker's weapon shatters Thenn's axe, and the White Walker kills him. The Walker moves to attack Jon. Jon picks up a sword from the ground, but the White Walker shatters it and knocks Jon down. Jon picks up Longclaw, made of Valyrian Steel, and it withstands the White Walker’s attack. Jon uses it to kill the Walker. The Night’s King sees this happen. After a moments respite, the Night’s King sends a legion of Wights tumbling over the mountain to continue the attack in the battle of Hardhome.",
        short:
          'Jon Snow fights off and kills a White Walker with Valyrian Steel in Hardhome along with the Army of the Dead.',
        season: 5,
        episode: 8,
        episode_title: 'Hardhome',
        imdb: 'https://www.imdb.com/title/tt3866850/',
        url: 'https://www.youtube.com/watch?v=fC1dVsTkmSI',
        thumbnail: '/assets/images/game-of-thrones_5_8.jpg'
      }
    ]
  },
  {
    type: 'movie',
    title: 'Oldboy',
    description:
      "The corridor fight scene took seventeen takes in three days to perfect, and was one continuous take -- there was no editing of any sort except for the knife that was stabbed in Oh Dae-su's back, which was computer-generated imagery. Though the scene has often been compared visually to side scrolling beat 'em up video games, director Park Chan-wook has stated that the similarity was unintentional.",
    short:
      'The corridor fight scene took seventeen takes in three days to perfect, and was one continuous take.',
    year: 2003,
    imdb: 'http://www.imdb.com/title/tt0364569/',
    url: 'https://www.youtube.com/watch?v=VwIIDzrVVdc',
    thumbnail: '/assets/images/oldboy.jpg',
    genre: ['Action', 'Drama', 'Mystery']
  },
  {
    type: 'movie',
    title: 'Olympus has fallen',
    description:
      'During a diplomatic talk between Korea and the United States, a secret Korean organisation has plotted a takeover of the White House with little resistance due to being caught off guard.',
    short:
      'A secret Korean organisation has plotted a takeover of the White House',
    year: 2013,
    imdb: 'https://www.imdb.com/title/tt2302755/',
    url: 'https://www.youtube.com/watch?v=N8WXitDnA_U',
    thumbnail: '/assets/images/olympus.jpg',
    genre: ['Action', 'Thriller']
  },
  {
    type: 'tv_show',
    title: 'Rick and Morty',
    description:
      'Rick, still in galactic prison, puts an intricate escape plan into action. Which then leads to a standoff in which he kills the council of Ricks.',
    short:
      'Rick, still in galactic prison, puts an intricate escape plan into action.',
    season: 3,
    episode: 1,
    episode_title: 'Rickshank Redemption',
    imdb: 'https://www.imdb.com/title/tt2861424/',
    url: 'https://www.youtube.com/watch?v=uzeODC-_IHw&t=81',
    thumbnail: '/assets/images/rick-and-morty.jpg',
    genre: ['Animation', 'Adventure', 'Comedy', 'Sci-Fi']
  },
  {
    type: 'movie',
    title: 'Kingsman: The Secret Service',
    description:
      'Colin Firth’s character, an impossibly cool secret agent named Harry Hart, ends up in a church participating in a gigantic killing free-for-all. It happens because the main bad guy in the movie, Samuel L. Jackson’s Richmond Valentine, inserts SIM cards into free cellphones he gives away that, when activated, emit a sound that turns everybody within earshot super violent. In a little under four minutes, Harry kills nearly 40 people, some of whom are killed in quick and obvious ways (like shooting them in the head), others of whom are killed in impromptu and gruesome ways (like breaking a wooden rod in half and then stabbing a guy in the chest with it).',
    short:
      "Harry get's triggered into participating in a mass killing in a church.",
    year: 2014,
    imdb: 'https://www.imdb.com/title/tt2802144/',
    url: 'https://www.youtube.com/watch?v=z7-tkkcC6d0',
    thumbnail: '/assets/images/kingsman.jpg',
    genre: ['Action', 'Adventure', 'Comedy']
  },
  {
    type: 'movie',
    title: 'Kill Bill: Vol 1',
    description:
      "The Bride (Uma Thurman) must defeat O-Ren Ishii's (Lucy Liu) personal army, The Crazy 88's, before she can strike off the first name on her death list.",
    short: "The Bride must defeat O-Ren Ishii's personal army, the Crazy 88's.",
    year: 2003,
    imdb: 'https://www.imdb.com/title/tt0266697/',
    url: 'https://www.youtube.com/watch?v=_B_1IMstVzs',
    thumbnail: '/assets/images/kill-bill.jpg',
    genre: ['Action', 'Crime', 'Thriller']
  },
  {
    type: 'movie',
    title: 'Interstellar',
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    short:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    year: 2014,
    imdb: 'https://www.imdb.com/title/tt0816692/',
    url: 'https://www.youtube.com/watch?v=p3PfKf0ndik',
    thumbnail: '/assets/images/interstellar.jpg',
    genre: ['Adventure', 'Drama', 'Sci-Fi']
  },
  {
    type: 'movie',
    title: 'There Will Be Blood',
    description:
      'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.',
    short:
      'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.',
    year: 2007,
    imdb: 'https://www.imdb.com/title/tt0469494/',
    url: 'https://www.youtube.com/watch?v=ugTbwvVuLKA',
    thumbnail: '/assets/images/there-will-be-blood.jpg',
    genre: ['Drama']
  },
  {
    type: 'movie',
    title: 'Fight Club',
    description:
      'The movie all comes to a culmination as Tyler Durden and Marla singer watch all of the buildings around them explode.',
    short:
      'The movie all comes to a culmination as Tyler Durden and Marla singer watch all of the buildings around them explode.',
    year: 1999,
    imdb: 'https://www.imdb.com/title/tt0137523/',
    url: 'https://www.youtube.com/watch?v=VC6Z_kdQoHw',
    thumbnail: '/assets/images/fight-club.jpg',
    genre: ['Drama']
  },
  {
    type: 'tv_show',
    title: 'Sherlock',
    description:
      'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    short:
      'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    season: 1,
    episode: 1,
    episode_title: 'A Study in Pink',
    imdb: 'https://www.imdb.com/title/tt1665071/',
    url: 'https://www.youtube.com/watch?v=VaT7IYQgyqo',
    thumbnail: '/assets/images/sherlock.jpg',
    genre: ['Crime', 'Drama', 'Mystery']
  },
  {
    type: 'tv_show',
    title: 'Suits',
    description:
      "On the run from a drug deal gone bad, Mike Ross, a brilliant college dropout, finds himself a job working with Harvey Specter, one of New York City's best lawyers.",
    short:
      "Mike Ross, a brilliant college dropout, finds himself a job working with Harvey Specter, one of New York City's best lawyers.",
    season: 1,
    episode: 1,
    episode_title: 'Pilot',
    imdb: 'https://www.imdb.com/title/tt1632701/',
    url: 'https://www.youtube.com/watch?v=Z5FgMCTreXE',
    thumbnail: '/assets/images/suits.jpg',
    genre: ['Comedy', 'Drama']
  },
  {
    type: 'tv_show',
    title: 'How I Met Your Mother',
    description:
      "It's the year 2030 and an older Ted Mosby is telling the story to his son and daughter about how he met and will eventually marry their mother. This is where we meet for the first time Ted, Lily, Marshall, Barney and Robin.",
    short:
      'This is where we meet for the first time Ted, Lily, Marshall, Barney and Robin.',
    season: 1,
    episode: 1,
    episode_title: 'Pilot',
    imdb: 'https://www.imdb.com/title/tt0460649/',
    url: 'https://www.youtube.com/watch?v=GAx0DYI3los',
    thumbnail: '/assets/images/how-i-met-your-mother.jpg',
    genre: ['Comedy', 'Romance']
  },
  {
    type: 'tv_show',
    title: 'Friends',
    description:
      'Rachel Green, Ross Geller, Monica Geller, Joey Tribbiani, Chandler Bing and Phoebe Buffay are six 20 something year-olds, living off of one another in the heart of New York City. Over the course of ten years, this average group of buddies goes through massive mayhem, family trouble, past and future romances, fights, laughs, tears and surprises as they learn what it really means to be a friend.',
    short:
      'Monica and the gang introduce Rachel to the "real world" after she leaves her fiancé at the altar.',
    season: 1,
    episode: 1,
    episode_title: 'The One Where It All Began',
    imdb: 'https://www.imdb.com/title/tt0108778/',
    url: 'https://www.youtube.com/watch?v=IzfZf1kxxI4',
    thumbnail: '/assets/images/friends.jpg',
    genre: ['Comedy', 'Romance']
  },
  {
    type: 'movie',
    title: 'The Godfather',
    description:
      "Don Corleone's dialogue - I'll make you an offer you can't refuse",
    short: "Don Corleone's dialogue - I'll make you an offer you can't refuse",
    year: 1972,
    imdb: 'https://www.imdb.com/title/tt0068646/',
    url: 'https://www.youtube.com/watch?v=fmX2VzsB25s',
    thumbnail: '/assets/images/the-godfather.jpg',
    genre: ['Crime', 'Drama']
  },
  {
    type: 'movie',
    title: 'The Matrix',
    description:
      "Neo stops the bullets and agent Smith realises he's got to up his game by like a million.",
    short:
      "Neo stops the bullets and agent Smith realises he's got to up his game by like a million.",
    year: 1999,
    imdb: 'https://www.imdb.com/title/tt0133093/',
    url: 'https://www.youtube.com/watch?v=2oHOv9p9dHQ',
    thumbnail: '/assets/images/the-matrix.jpg',
    genre: ['Action', 'Sci-Fi']
  },
  {
    type: 'tv_show',
    title: 'House',
    description:
      'Gregory House, M.D., often construed as a misanthropic medical genius, heads a team of diagnosticians at the Princeton–Plainsboro Teaching Hospital in New Jersey.',
    short:
      "House wagers Wilson that the patient's symptoms are attributed to new cancer cells.",
    season: 6,
    episode: 9,
    episode_title: 'Wilson',
    imdb: 'https://www.imdb.com/title/tt0412142/',
    url: 'https://www.youtube.com/watch?v=tLMzEOoSjc4',
    thumbnail: '/assets/images/house.jpg',
    genre: ['Drama', 'Mystery']
  },
  {
    type: 'tv_show',
    title: 'The Office',
    description:
      'The Dunder Mifflin crew holds a casino party at the warehouse and Michael has two dates.',
    short:
      'The Dunder Mifflin crew holds a casino party at the warehouse and Michael has two dates.',
    season: 2,
    episode: 22,
    episode_title: 'Casino Night ',
    imdb: 'https://www.imdb.com/title/tt0800604/',
    url: 'https://www.youtube.com/watch?v=ZymIQU4e1W4',
    thumbnail: '/assets/images/the-office.jpg',
    genre: ['Comedy']
  },
  {
    type: 'movie',
    title: 'Get Out',
    description:
      "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    short:
      "A young African-American visits his white girlfriend's parents for the weekend, but something's not right.",
    year: 2017,
    imdb: 'https://www.imdb.com/title/tt5052448/',
    url: 'https://www.youtube.com/watch?v=kBwVWrBk_uo',
    thumbnail: '/assets/images/get-out.jpg',
    genre: ['Horror', 'Mystery', 'Thriller']
  },
  {
    type: 'movie',
    title: 'Forrest Gump',
    description:
      "A young Forrest Gump, still sporting his leg braces, get's picked on and chased by some local bullies. As he's chased, his childhood friend Jenny shouts the iconic quote \"Run, Forrest! Run!",
    short:
      "A young Forrest Gump, still sporting his leg braces, get's picked on and chased by some local bullies.",
    year: 1994,
    imdb: 'https://www.imdb.com/title/tt0109830/',
    url: 'https://www.youtube.com/watch?v=v3qlBM9vAW8',
    thumbnail: '/assets/images/forrest-gump.jpg',
    genre: ['Drama', 'Romance']
  },
  {
    type: 'movie',
    title: 'Shrek',
    description:
      'Shrek and Donkey arrive at Duloc to demand Farquaad gives Shrek his swamp back. With hardly anyone around they go to the information booth.',
    short:
      'Shrek and Donkey visit the information booth when they arrive at Duloc.',
    year: 2001,
    imdb: 'https://www.imdb.com/title/tt0126029/',
    url: 'https://www.youtube.com/watch?v=vKTd-N4djSY',
    thumbnail: '/assets/images/shrek.jpg',
    genre: ['Animation', 'Adventure', 'Comedy']
  },
  {
    type: 'movie',
    title: 'Armageddon',
    description:
      'After drawing straws with A.J. (Ben Affleck) at the losing end, Harry (Bruce Willis) turns the tables and decides to sacrifice himself instead.',
    short:
      'Harry (Bruce Willis) turns the tables and decides to sacrifice himself.',
    year: 1998,
    imdb: 'https://www.imdb.com/title/tt0120591/',
    url: 'https://www.youtube.com/watch?v=OYcTmiCtCv8',
    thumbnail: '/assets/images/armageddon.jpg',
    genre: ['Action', 'Adventure', 'Sci-Fi']
  },
  {
    type: 'tv_show',
    title: 'Archer',
    description:
      "When Archer discovers the chemotherapy drugs he's been taking for his breast cancer are counterfeit, he sets out to destroy the criminals behind the scheme.",
    short:
      'Archer discovers his chemotherapy drugs are counterfeit, and sets out to destroy the criminals behind the scheme.',
    season: 2,
    episode: 9,
    episode_title: 'Placebo Effect',
    imdb: 'https://www.imdb.com/title/tt1883469/',
    url: 'https://www.youtube.com/watch?v=UeBt26IHIzU',
    thumbnail: '/assets/images/archer.jpg',
    genre: ['Animation', 'Action', 'Comedy']
  },
  {
    type: 'movie',
    title: 'Braveheart',
    description:
      'William Wallace is captured and brought for execution for his crimes of treason against the English crown. In his final moments he screams out the word "Freedom" as a final act of defiance before being executed.',
    short:
      'William Wallace is brought for execution and in his final moments he screams out "Freedom" as a final act of defiance.',
    year: 1995,
    imdb: 'https://www.imdb.com/title/tt0112573/',
    url: 'https://www.youtube.com/watch?v=cCHf8FxqzJc',
    thumbnail: '/assets/images/braveheart.jpg',
    genre: ['Biography', 'Drama', 'History']
  },
  {
    type: 'movie',
    title: 'I, Robot',
    description:
      "While searching for clues at Dr. Lanning's house, a giant demolition robot almost kills Spooner (Will Smith)",
    short:
      "While searching for clues at Dr. Lanning's house, a giant demolition robot almost kills Spooner (Will Smith)",
    year: 2004,
    imdb: 'https://www.imdb.com/title/tt0343818/',
    url: 'https://www.youtube.com/watch?v=KBuvlaycAXs',
    thumbnail: '/assets/images/i-robot.jpg',
    genre: ['Action', 'Crime', 'Drama']
  },
  {
    type: 'movie',
    title: 'Nightmare before Christmas',
    description:
      "Jack Skellington stumbles across a circle of holiday tress and gets sucked into Christmas Town, which leads him to perform 'What's This?' as he explores this alternate holiday town which seems so unique and inspiring to him.",
    short:
      'Jack Skellington gets sucked into Christmas Town, where he explores this alternate holiday town which seems so unique and inspiring to him.',
    year: 1993,
    imdb: 'https://www.imdb.com/title/tt0107688/',
    url: 'https://www.youtube.com/watch?v=Z7uJMyPOBGA',
    thumbnail: '/assets/images/nightmare-before-christmas.jpg',
    genre: ['Animation', 'Family', 'Fantasy']
  },
  {
    type: 'movie',
    title: 'Love Actually',
    description:
      "After Juliet finds out that Mark's focus at her and his best mates wedding, is solely on her. She realises that his coldness towards her is actually his obsession. Mark finally expresses his hidden, unrequited love for Juliet.",
    short: 'Mark finally expresses his hidden, unrequited love for Juliet.',
    year: 2003,
    imdb: 'https://www.imdb.com/title/tt0314331/',
    url: 'https://www.youtube.com/watch?v=B7u6bMBlCXw',
    thumbnail: '/assets/images/love-actually.jpg',
    genre: ['Comedy', 'Drama', 'Romance']
  },
  {
    type: 'movie',
    title: 'Serenity',
    description:
      "River hears the words 'Miranda', which we find out is a trigger word for turning her into a weapon. She starts to fight the entire bar until her brother intervenes.",
    short:
      "River get's triggered and starts fighting the entire bar until her brother intervenes.",
    year: 2005,
    imdb: 'https://www.imdb.com/title/tt0379786/',
    url: 'https://www.youtube.com/watch?v=3FJatsqNdf4',
    thumbnail: '/assets/images/serenity.jpg',
    genre: ['Action', 'Adventure', 'Sci-Fi']
  },
  {
    type: 'movie',
    title: 'Now You See Me 2',
    description:
      'The scene where the four Horsemen successfully attempt to steal the chip from tight security.',
    short:
      'The scene where the four Horsemen successfully attempt to steal the chip from tight security.',
    year: 2016,
    imdb: 'https://www.imdb.com/title/tt3110958/',
    url: 'https://www.youtube.com/watch?v=_4rndwJWiSE',
    thumbnail: '/assets/images/now-you-see-me-2.jpg',
    genre: ['Action', 'Adventure', 'Comedy']
  },
  {
    type: 'movie',
    title: 'Polar',
    description:
      "The world's top assassin, Duncan Vizla, is settling into retirement when his former employer marks him as a liability to the firm. Against his will, he finds himself back in the game going head to head with an army of younger killers.",
    short:
      'Duncan Vizla escapes from being captured and fights his way through his captors',
    year: 2019,
    imdb: 'https://www.imdb.com/title/tt4139588/',
    url: 'https://www.youtube.com/watch?v=ooqhwWWnlu8',
    thumbnail: '/assets/images/polar.jpg',
    genre: ['Action', 'Crime']
  },
  {
    type: 'tv_show',
    title: 'Squid Game',
    description:
      'Hoping to win easy money, a broke and desperate Gi-hun agrees to take part in an enigmatic game. Not long into the first round, unforeseen horrors unfold.',
    short:
      'A broke man takes part in a game that quickly turns into a horror show.',
    season: 1,
    episode: 1,
    episode_title: 'Red light, green light',
    imdb: 'https://www.imdb.com/title/tt11979940/',
    url: 'https://www.youtube.com/watch?v=EQj00Y2sOi8',
    thumbnail: '/assets/images/squidgame.jpg',
    genre: ['Action', 'Adventure', 'Drama']
  }
];

export default content;
