var content = [
  {
    type: 'tv_show',
    title: 'The Walking Dead',
    genre: ['Drama', 'Horror', 'Action'],
    content: [
      {
        description:
          'Following on from where Rick Grimes wakes up from a coma and tries to find his family. He gets to Atlanta, surrounded by walkers, he is thrown from his horse and ends up in a tank. This is where someone on the walkie talkie, Glenn, helps him out of the tight situation.',
        season: 1,
        episode: 2,
        episode_title: 'Guts',
        imdb: 'https://www.imdb.com/title/tt1628064/?ref_=ttep_ep2',
        url: 'https://www.youtube.com/watch?v=ZxmWhlidAZ8',
        thumbnail: './assets/images/walking-dead_1_2.jpg'
      },
      {
        description:
          'The Saviours have captured Rick and the group. They kneel at the mercy of Negan who makes an example of 2 of the groups members. Not for the faint of heart.',
        season: 7,
        episode: 1,
        episode_title: "The Day Will Come When You Won't Be",
        imdb: 'https://www.imdb.com/title/tt5164772/?ref_=ttep_ep1',
        url: 'https://www.youtube.com/watch?v=d3LDG5CCOPQ',
        thumbnail: './assets/images/walking-dead_7_1.jpg'
      }
    ]
  },
  {
    type: 'tv_show',
    title: 'The Newsroom',
    description:
      "Will McAvoy (Jeff Daniels) hits the nail straight on the head in the opening minutes on HBO's new series 'The Newsroom'. He is asked by a college student a simple question during a campus debate. 'What makes America the greatest country in the world?'. Daniels initially goes the politically correct route then at the last minute goes with a honest, bold, straight forward answer that sums up a lot of the worlds problems that so many are afraid to accept because we all want to believe in our system and that it is our system that works. The evidence that is out there today is to the contrary and he discloses such information in his argument. We used to be the worlds best of the best and now we are just pretending. The first step to solving a problem is to admit there is one.",
    season: 1,
    episode: 1,
    episode_title: 'We Just Decided To',
    imdb: 'http://www.imdb.com/title/tt1870479/',
    url: 'https://www.youtube.com/watch?v=wTjMqda19wk',
    thumbnail: './assets/images/the-newsroom.jpg',
    genre: ['Drama', 'History']
  },
  {
    type: 'tv_show',
    title: 'Mr.Robot',
    description:
      "Elliot Alderson's powerful speech about control and the effects that religion and mindless following create.",
    season: 2,
    episode: 3,
    episode_title: 'eps2.1_k3rnel-pan1c.ksd',
    imdb: 'http://www.imdb.com/title/tt4158110/',
    url: 'https://www.youtube.com/watch?v=AZeLHD-725o',
    thumbnail: './assets/images/mr-robot.jpg',
    genre: ['Crime', 'Drama', 'Thriller']
  },
  {
    type: 'tv_show',
    title: 'Silicon Valley',
    description:
      "The guys start calculating how most efficiently a mass jerk-off session can be carried out, which eventually also leads to a finding a new solution for Pied Piper's problems.",
    season: 1,
    episode: 8,
    episode_title: 'Optimal Tip-To-Top Efficiency',
    imdb: 'http://www.imdb.com/title/tt2575988/',
    url: 'https://www.youtube.com/watch?v=mMeqEDEfniA',
    thumbnail: './assets/images/silicon-valley.jpg',
    genre: ['Comedy']
  },
  {
    type: 'tv_show',
    title: 'Game of Thrones',
    description:
      'In Winterfell, Jon Snow, Sansa, Davos and Tormund meet with Ramsay, and Jon Snow proposes a dispute between them instead of sacrificing lives in a battle. Ramsay does not accept and they schedule the battle in the morning. Jon Snow plots a scheme with Davos and Tormund and Sansa warns that Ramsay plays dirty. When both armies are ready to battle, Ramsay brings a surprise.',
    season: 6,
    episode: 9,
    episode_title: 'Battle of the Bastards',
    imdb: 'https://www.imdb.com/title/tt4283088/?ref_=ttep_ep9',
    url: 'https://www.youtube.com/watch?v=m8rURwkvOx0',
    thumbnail: './assets/images/game-of-thrones.jpg',
    genre: ['Action', 'Adventure', 'Drama']
  },
  {
    type: 'movie',
    title: 'Oldboy',
    description:
      "The corridor fight scene took seventeen takes in three days to perfect, and was one continuous take -- there was no editing of any sort except for the knife that was stabbed in Oh Dae-su's back, which was computer-generated imagery. Though the scene has often been compared visually to side scrolling beat 'em up video games, director Park Chan-wook has stated that the similarity was unintentional.",
    year: 2003,
    imdb: 'http://www.imdb.com/title/tt0364569/',
    url: 'https://www.youtube.com/watch?v=VwIIDzrVVdc',
    thumbnail: './assets/images/oldboy.jpg',
    genre: ['Action', 'Drama', 'Mystery']
  },
  {
    type: 'movie',
    title: 'Olympus has fallen',
    description:
      'During a diplomatic talk between Korea and the United States, a secret Korean organisation has plotted a takeover of the White House with little resistance due to being caught off guard.',
    year: 2013,
    imdb: 'https://www.imdb.com/title/tt2302755/',
    url: 'https://www.youtube.com/watch?v=N8WXitDnA_U',
    thumbnail: './assets/images/olympus.jpg',
    genre: ['Action', 'Thriller']
  },
  {
    type: 'tv_show',
    title: 'Rick and Morty',
    description:
      'Rick, still in galactic prison, puts an intricate escape plan into action. Which then leads to a standoff in which he kills the council of Ricks.',
    season: 3,
    episode: 1,
    episode_title: 'Rickshank Redemption',
    imdb: 'https://www.imdb.com/title/tt2861424/',
    url: 'https://www.youtube.com/watch?v=uzeODC-_IHw&t=81',
    thumbnail: './assets/images/rick-and-morty.jpg',
    genre: ['Animation', 'Adventure', 'Comedy', 'Sci-Fi']
  },
  {
    type: 'movie',
    title: 'Kingsman: The Secret Service',
    description:
      'Colin Firth’s character, an impossibly cool secret agent named Harry Hart, ends up in a church participating in a gigantic killing free-for-all. It happens because the main bad guy in the movie, Samuel L. Jackson’s Richmond Valentine, inserts SIM cards into free cellphones he gives away that, when activated, emit a sound that turns everybody within earshot super violent. In a little under four minutes, Harry kills nearly 40 people, some of whom are killed in quick and obvious ways (like shooting them in the head), others of whom are killed in impromptu and gruesome ways (like breaking a wooden rod in half and then stabbing a guy in the chest with it).',
    year: 2014,
    imdb: 'https://www.imdb.com/title/tt2802144/',
    url: 'https://www.youtube.com/watch?v=z7-tkkcC6d0',
    thumbnail: './assets/images/kingsman.jpg',
    genre: ['Action', 'Adventure', 'Comedy']
  },
  {
    type: 'movie',
    title: 'Kill Bill: Vol 1',
    description:
      "The Bride (Uma Thurman) must defeat O-Ren Ishii's (Lucy Liu) personal army, The Crazy 88's, before she can strike off the first name on her death list.",
    year: 2003,
    imdb: 'https://www.imdb.com/title/tt0266697/',
    url: 'https://www.youtube.com/watch?v=_B_1IMstVzs',
    thumbnail: './assets/images/kill-bill.jpg',
    genre: ['Action', 'Crime', 'Thriller']
  },
  {
    type: 'movie',
    title: 'Interstellar',
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    year: 2014,
    imdb: 'https://www.imdb.com/title/tt0816692/',
    url: 'https://www.youtube.com/watch?v=p3PfKf0ndik',
    thumbnail: './assets/images/interstellar.jpg',
    genre: ['Adventure', 'Drama', 'Sci-Fi']
  },
  {
    type: 'movie',
    title: 'There Will Be Blood',
    description:
      'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.',
    year: 2007,
    imdb: 'https://www.imdb.com/title/tt0469494/',
    url: 'https://www.youtube.com/watch?v=ugTbwvVuLKA',
    thumbnail: './assets/images/there-will-be-blood.jpg',
    genre: ['Drama']
  },
  {
    type: 'movie',
    title: 'Fight Club',
    description:
      'The movie all comes to a culmination as Tyler Durden and Marla singer watch all of the buildings around them explode.',
    year: 1999,
    imdb: 'https://www.imdb.com/title/tt0137523/',
    url: 'https://www.youtube.com/watch?v=VC6Z_kdQoHw',
    thumbnail: './assets/images/fight-club.jpg',
    genre: ['Drama']
  },
  {
    type: 'tv_show',
    title: 'Sherlock',
    description:
      'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    season: 1,
    episode: 1,
    episode_title: 'A Study in Pink',
    imdb: 'https://www.imdb.com/title/tt1665071/',
    url: 'https://www.youtube.com/watch?v=VaT7IYQgyqo',
    thumbnail: './assets/images/sherlock.jpg',
    genre: ['Crime', 'Drama', 'Mystery']
  },
  {
    type: 'tv_show',
    title: 'Suits',
    description:
      "On the run from a drug deal gone bad, Mike Ross, a brilliant college dropout, finds himself a job working with Harvey Specter, one of New York City's best lawyers.",
    season: 1,
    episode: 1,
    episode_title: 'Pilot',
    imdb: 'https://www.imdb.com/title/tt1632701/',
    url: 'https://www.youtube.com/watch?v=Z5FgMCTreXE',
    thumbnail: './assets/images/suits.jpg',
    genre: ['Comedy', 'Drama']
  },
  {
    type: 'tv_show',
    title: 'How I Met Your Mother',
    description:
      "It's the year 2030 and an older Ted Mosby is telling the story to his son and daughter about how he met and will eventually marry their mother. This is where we meet for the first time Ted, Lily, Marshall, Barney and Robin.",
    season: 1,
    episode: 1,
    episode_title: 'Pilot',
    imdb: 'https://www.imdb.com/title/tt0460649/',
    url: 'https://www.youtube.com/watch?v=GAx0DYI3los',
    thumbnail: './assets/images/how-i-met-your-mother.jpg',
    genre: ['Comedy', 'Romance']
  },
  {
    type: 'tv_show',
    title: 'Friends',
    description:
      'Rachel Green, Ross Geller, Monica Geller, Joey Tribbiani, Chandler Bing and Phoebe Buffay are six 20 something year-olds, living off of one another in the heart of New York City. Over the course of ten years, this average group of buddies goes through massive mayhem, family trouble, past and future romances, fights, laughs, tears and surprises as they learn what it really means to be a friend.',
    season: 1,
    episode: 1,
    episode_title: 'The One Where It All Began',
    imdb: 'https://www.imdb.com/title/tt0108778/',
    url: 'https://www.youtube.com/watch?v=IzfZf1kxxI4',
    thumbnail: './assets/images/friends.jpg',
    genre: ['Comedy', 'Romance']
  },
  {
    type: 'movie',
    title: 'The Godfather',
    description:
      "Don Corleone's dialogue - I'll make you an offer you can't refuse",
    year: 1972,
    imdb: 'https://www.imdb.com/title/tt0068646/',
    url: 'https://www.youtube.com/watch?v=fmX2VzsB25s',
    thumbnail: './assets/images/the-godfather.jpg',
    genre: ['Crime', 'Drama']
  },
  {
    type: 'movie',
    title: 'The Matrix',
    description:
      "Neo stops the bullets and agent Smith realises he's got to up his game by like a million.",
    year: 1999,
    imdb: 'https://www.imdb.com/title/tt0133093/',
    url: 'https://www.youtube.com/watch?v=2oHOv9p9dHQ',
    thumbnail: './assets/images/the-matrix.jpg',
    genre: ['Action', 'Sci-Fi']
  },
  {
    type: 'tv_show',
    title: 'House',
    description:
      'Gregory House, M.D., often construed as a misanthropic medical genius, heads a team of diagnosticians at the Princeton–Plainsboro Teaching Hospital in New Jersey.',
    season: 6,
    episode: 9,
    episode_title: 'Wilson',
    imdb: 'https://www.imdb.com/title/tt0412142/',
    url: 'https://www.youtube.com/watch?v=tLMzEOoSjc4',
    thumbnail: './assets/images/house.jpg',
    genre: ['Drama', 'Mystery']
  },
  {
    type: 'tv_show',
    title: 'The Office',
    description:
      'The Dunder Mifflin crew holds a casino party at the warehouse and Michael has two dates.',
    season: 2,
    episode: 22,
    episode_title: 'Casino Night ',
    imdb: 'https://www.imdb.com/title/tt0800604/',
    url: 'https://www.youtube.com/watch?v=ZymIQU4e1W4',
    thumbnail: './assets/images/the-office.jpg',
    genre: ['Comedy']
  },
  {
    type: 'movie',
    title: 'Get Out',
    description: 'Chris is sent to the Sunken Place',
    year: 2017,
    imdb: 'https://www.imdb.com/title/tt5052448/',
    url: 'https://www.youtube.com/watch?v=kBwVWrBk_uo',
    thumbnail: './assets/images/get-out.jpg',
    genre: ['Horror', 'Mystery', 'Thriller']
  },
  {
    type: 'movie',
    title: 'Forrest Gump',
    description:
      "A young Forrest Gump, still sporting his leg braces, get's picked on and chased by some local bullies. As he's chased, his childhood friend Jenny shouts the iconic quote \"Run, Forrest! Run!",
    year: 1994,
    imdb: 'https://www.imdb.com/title/tt0109830/',
    url: 'https://www.youtube.com/watch?v=v3qlBM9vAW8',
    thumbnail: './assets/images/forrest-gump.jpg',
    genre: ['Drama', 'Romance']
  },
  {
    type: 'movie',
    title: 'Shrek',
    description:
      'Shrek and Donkey arrive at Duloc to demand Farquaad gives Shrek his swamp back. With hardly anyone around they go to the information booth.',
    year: 2001,
    imdb: 'https://www.imdb.com/title/tt0126029/',
    url: 'https://www.youtube.com/watch?v=vKTd-N4djSY',
    thumbnail: './assets/images/shrek.jpg',
    genre: ['Animation', 'Adventure', 'Comedy']
  },
  {
    type: 'movie',
    title: 'Armageddon',
    description:
      'After drawing straws with A.J. (Ben Affleck) at the losing end, Harry (Bruce Willis) turns the tables and decides to sacrifice himself instead.',
    year: 1998,
    imdb: 'https://www.imdb.com/title/tt0120591/',
    url: 'https://www.youtube.com/watch?v=OYcTmiCtCv8',
    thumbnail: './assets/images/armageddon.jpg',
    genre: ['Action', 'Adventure', 'Sci-Fi']
  },
  {
    type: 'tv_show',
    title: 'Archer',
    description:
      "When Archer discovers the chemotherapy drugs he's been taking for his breast cancer are counterfeit, he sets out to destroy the criminals behind the scheme.",
    season: 2,
    episode: 9,
    episode_title: 'Placebo Effect',
    imdb: 'https://www.imdb.com/title/tt1883469/',
    url: 'https://www.youtube.com/watch?v=UeBt26IHIzU',
    thumbnail: './assets/images/archer.jpg',
    genre: ['Animation', 'Action', 'Comedy']
  },
  {
    type: 'movie',
    title: 'Training Day',
    description: 
      "On his first day on the job as a LA narcotics officer, a rookie cop goes beyond a full work day in training within the narcotics division of the L.A.P.D. with a rogue detective who isn't what he appears to be.",
    year: 2001,
    imdb: 'https://www.imdb.com/title/tt0139654/',
    url: 'https://www.youtube.com/watch?v=DXPJqRtkDP0',
    thumbnail: './assets/images/Trainingday.jpg',
    genre: ['Action', 'Crime', 'Thriller']
  }
];

export default content;
