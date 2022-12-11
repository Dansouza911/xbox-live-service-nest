import { Prisma, PrismaClient } from '@prisma/client';

export const games: Prisma.gameCreateInput[] = [
  {
    title: 'Apex Legends',
    cover_image_url: 'https://iili.io/SroaWX.jpg',
    description:
      'Apex Legends is the award-winning, free-to-play Hero Shooter from Respawn Entertainment. Master an ever-growing roster of legendary characters with powerful abilities, and experience strategic squad play and innovative gameplay in the next evolution of Hero Shooter and Battle Royale.',
    year: 2020,
    score: 83,
    gameplay_url: 'https://www.youtube.com/watch?v=UPtoIy-oPWQ',
    trailer_url: 'https://www.youtube.com/watch?v=Jcr8qmrnOKE',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'FPS' },
          where: { genre_title: 'FPS' },
        },
      ],
    },
  },
  {
    title: 'Alien Isolation',
    cover_image_url: 'https://iili.io/Sro0fs.jpg',
    description:
      'Discover the true meaning of fear in Alien: Isolation, a survival horror set in an atmosphere of constant dread and mortal danger.',
    year: 2020,
    score: 83,
    gameplay_url: 'https://www.youtube.com/watch?v=BIe58zZ85LQ',
    trailer_url: 'https://www.youtube.com/watch?v=7h0cgmvIrZw',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Survival Horror' },
          where: { genre_title: 'Survival Horror' },
        },
      ],
    },
  },
  {
    title: "Assassin's Creed Valhalla",
    cover_image_url: 'https://iili.io/Sro10G.jpg',
    description:
      "Choose your fate in Assassin's Creed® Valhalla. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Scandinavia.",
    year: 2021,
    score: 83,
    gameplay_url: 'https://www.youtube.com/watch?v=AM8C_68n9_w',
    trailer_url: 'https://www.youtube.com/watch?v=TUbgBVTD7VI',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
        {
          create: { genre_title: 'RPG' },
          where: { genre_title: 'RPG' },
        },
      ],
    },
  },
  {
    title: "Assassin's Creed Odyssey",
    cover_image_url: 'https://iili.io/SroEgf.jpg',
    description:
      "Choose your fate in Assassin's Creed® Odyssey. From outcast to living legend, embark on an odyssey to uncover the secrets of your past and change the fate of Ancient Greece.",
    year: 2018,
    score: 83,
    gameplay_url: 'https://www.youtube.com/watch?v=Q0Fg6jJ9ouI',
    trailer_url: 'https://www.youtube.com/watch?v=EIFHVyPdlBw',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
        {
          create: { genre_title: 'RPG' },
          where: { genre_title: 'RPG' },
        },
      ],
    },
  },
  {
    title: "Baldur's Gate 3",
    cover_image_url: 'https://iili.io/SroMJ4.jpg',
    description:
      'Gather your party, and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.',
    year: 2020,
    score: 83,
    gameplay_url: 'https://www.youtube.com/watch?v=kbeclYDBDbM',
    trailer_url: 'https://www.youtube.com/watch?v=wWHEw36gTwU',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'RPG' },
          where: { genre_title: 'RPG' },
        },
      ],
    },
  },
  {
    title: 'Battlefield V',
    cover_image_url: 'https://iili.io/SroV5l.jpg',
    description:
      'This is the ultimate Battlefield V experience. Enter mankind’s greatest conflict with the complete arsenal of weapons, vehicles, and gadgets plus the best customization content of Year 1 and 2.',
    year: 2018,
    score: 83,
    gameplay_url: 'https://www.youtube.com/watch?v=PW9Vf0wVw2s',
    trailer_url: 'https://www.youtube.com/watch?v=fb1MR85XFOc',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'FPS' },
          where: { genre_title: 'FPS' },
        },
      ],
    },
  },
  {
    title: 'Brawlhalla',
    cover_image_url: 'https://iili.io/SroWe2.jpg',
    description:
      "An epic platform fighter for up to 8 players online or local. Try casual free-for-alls, ranked matches, or invite friends to a private room. And it's free! Play cross-platform with millions of players on PlayStation, Xbox, Nintendo Switch, iOS, Android & Steam! Frequent updates. Over fifty Legends.",
    year: 2017,
    score: 80,
    gameplay_url: 'https://www.youtube.com/watch?v=6ABtV9fiUfc',
    trailer_url: 'https://www.youtube.com/watch?v=Mx25Q3LKQ9Q',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Fight' },
          where: { genre_title: 'Fight' },
        },
      ],
    },
  },
  {
    title: 'Control',
    cover_image_url: 'https://iili.io/SroXbS.jpg',
    description:
      'Winner of over 80 awards, Control is a visually stunning third-person action-adventure that will keep you on the edge of your seat.',
    year: 2020,
    score: 82,
    gameplay_url: 'https://www.youtube.com/watch?v=AJ7U9jHXeWk',
    trailer_url: 'https://www.youtube.com/watch?v=PT5yMfC9LQM',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
      ],
    },
  },
  {
    title: 'Cuphead',
    cover_image_url: 'https://iili.io/Srojz7.jpg',
    description:
      'Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.',
    year: 2017,
    score: 88,
    gameplay_url: 'https://www.youtube.com/watch?v=h8-FvIarRIU',
    trailer_url: 'https://www.youtube.com/watch?v=NN-9SQXoi50',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
        {
          create: { genre_title: 'Indie' },
          where: { genre_title: 'Indie' },
        },
      ],
    },
  },
  {
    title: 'Cyberpunk 2077',
    cover_image_url: 'https://iili.io/SrowX9.jpg',
    description:
      'Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.',
    year: 2020,
    score: 86,
    gameplay_url: 'https://www.youtube.com/watch?v=NtnJENMtZuE',
    trailer_url: 'https://www.youtube.com/watch?v=liuFhVXAlZw',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
        {
          create: { genre_title: 'RPG' },
          where: { genre_title: 'RPG' },
        },
      ],
    },
  },
  {
    title: 'Dead by Daylight',
    cover_image_url: 'https://iili.io/SroNse.jpg',
    description:
      'Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.',
    year: 2016,
    score: 71,
    gameplay_url: 'https://www.youtube.com/watch?v=_rtVoOnwbuI',
    trailer_url: 'https://www.youtube.com/watch?v=Hmnil2MoWQ4',
  },
  {
    title: 'Destiny 2',
    cover_image_url: 'https://iili.io/Sroequ.jpg',
    description:
      'Destiny 2 is an action MMO with a single evolving world that you and your friends can join anytime, anywhere, absolutely free.',
    year: 2017,
    score: 78,
    gameplay_url: 'https://www.youtube.com/watch?v=mG8M5jqH2mA',
    trailer_url: 'https://www.youtube.com/watch?v=RfUoz1_i5_E',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
        {
          create: { genre_title: 'FPS' },
          where: { genre_title: 'FPS' },
        },
      ],
    },
  },
  {
    title: 'Devil May Cry 5',
    cover_image_url: 'https://iili.io/Srok0b.jpg',
    description:
      'The ultimate Devil Hunter is back in style, in the game action fans have been waiting for.',
    year: 2019,
    score: 88,
    gameplay_url: 'https://www.youtube.com/watch?v=4uAGiXow1Vw',
    trailer_url: 'https://www.youtube.com/watch?v=KMSGj9Y2T9Q',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
      ],
    },
  },
  {
    title: 'Dying Light',
    cover_image_url: 'https://iili.io/Srovgj.jpg',
    description:
      'First-person action survival game set in a post-apocalyptic open world overrun by flesh-hungry zombies. Roam a city devastated by a mysterious virus epidemic. Scavenge for supplies, craft weapons, and face hordes of the infected.',
    year: 2015,
    score: 74,
    gameplay_url: 'https://www.youtube.com/watch?v=2rYkrGvh_oI',
    trailer_url: 'https://www.youtube.com/watch?v=CWX6DbAMTR4',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
        {
          create: { genre_title: 'FPS' },
          where: { genre_title: 'FPS' },
        },
      ],
    },
  },
  {
    title: 'FarCry 5',
    cover_image_url: 'https://iili.io/SroSdx.jpg',
    description:
      'Welcome to Hope County, Montana, home to a fanatical doomsday cult known as Eden’s Gate. Stand up to cult leader Joseph Seed & his siblings, the Heralds, to spark the fires of resistance & liberate the besieged community.',
    year: 2018,
    score: 81,
    gameplay_url: 'https://www.youtube.com/watch?v=hseQ1ZD5L3c',
    trailer_url: 'https://www.youtube.com/watch?v=nWAo_PpCpfs',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
        {
          create: { genre_title: 'FPS' },
          where: { genre_title: 'FPS' },
        },
      ],
    },
  },
  {
    title: 'FIFA 22',
    cover_image_url: 'https://iili.io/SroU5Q.jpg',
    description:
      'Powered by Football™, EA SPORTS™ FIFA 22 brings the game even closer to the real thing with fundamental gameplay advances and a new season of innovation across every mode.',
    year: 2021,
    score: 73,
    gameplay_url: 'https://www.youtube.com/watch?v=UlGnKVD1Qao',
    trailer_url: 'https://www.youtube.com/watch?v=SYsi5QuOJNE',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Sports' },
          where: { genre_title: 'Sports' },
        },
      ],
    },
  },
  {
    title: 'For Honor',
    cover_image_url: 'https://iili.io/SrogeV.jpg',
    description:
      'Carve a path of destruction through an intense, believable battlefield in For Honor.',
    year: 2017,
    score: 78,
    gameplay_url: 'https://www.youtube.com/watch?v=BdwZ1Xx081k',
    trailer_url: 'https://www.youtube.com/watch?v=y1HkuGUaNBY',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Fight' },
          where: { genre_title: 'Fight' },
        },
      ],
    },
  },
  {
    title: 'Forza Horizon 5',
    cover_image_url: 'https://iili.io/SrormB.jpg',
    description:
      'Carve a path of destruction through an intense, believable battlefield in For Honor.',
    year: 2021,
    score: 92,
    gameplay_url: 'https://www.youtube.com/watch?v=E2Ah8Dr9o2I',
    trailer_url: 'https://www.youtube.com/watch?v=agI0xMBQo2U',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Sports' },
          where: { genre_title: 'Sports' },
        },
      ],
    },
  },
  {
    title: 'God of War',
    cover_image_url: 'https://iili.io/Sro6zP.jpg',
    description:
      'His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.',
    year: 2018,
    score: 98,
    gameplay_url: 'https://www.youtube.com/watch?v=Wf5tpMhziII',
    trailer_url: 'https://www.youtube.com/watch?v=FyIwEFXOcaE',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
        {
          create: { genre_title: 'RPG' },
          where: { genre_title: 'RPG' },
        },
      ],
    },
  },
  {
    title: 'GTA V',
    cover_image_url: 'https://iili.io/SroPX1.jpg',
    description:
      'Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.',
    year: 2015,
    score: 90,
    gameplay_url: 'https://www.youtube.com/watch?v=I6-Ar6J_5bg',
    trailer_url: 'https://www.youtube.com/watch?v=QkkoHAzjnUs',
  },
  {
    title: 'Halo Infinite',
    cover_image_url: 'https://iili.io/SroiLF.jpg',
    description:
      'The legendary Halo series returns with the most expansive Master Chief campaign yet and a ground-breaking free to play multiplayer experience.',
    year: 2022,
    score: 87,
    gameplay_url: 'https://www.youtube.com/watch?v=NK2nHNMko4Y',
    trailer_url: 'https://www.youtube.com/watch?v=PyMlV5_HRWk',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'FPS' },
          where: { genre_title: 'FPS' },
        },
      ],
    },
  },
  {
    title: "Hellblade: Senua's Sacrifice",
    cover_image_url: 'https://iili.io/SroQ1a.jpg',
    description:
      "From the makers of Heavenly Sword, Enslaved: Odyssey to the West, and DmC: Devil May Cry, comes a warrior's brutal journey into myth and madness. Set in the Viking age, a broken Celtic warrior embarks on a haunting vision quest into Viking Hell to fight for the soul of her dead lover.",
    year: 2018,
    score: 88,
    gameplay_url: 'https://www.youtube.com/watch?v=l7vCzaSmbq0',
    trailer_url: 'https://www.youtube.com/watch?v=FwIppjFePEM',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
      ],
    },
  },
  {
    title: 'Hogwarts Legacy',
    cover_image_url: 'https://iili.io/SroLqg.jpg',
    description:
      'Experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart. Make allies, battle Dark wizards and decide the fate of the wizarding world.',
    year: 2022,
    score: 10,
    gameplay_url: 'https://www.youtube.com/watch?v=73LmbkSq0-8',
    trailer_url: 'https://www.youtube.com/watch?v=yF29baX-IsA',
  },
  {
    title: 'Horizon: Zero Dawn',
    cover_image_url: 'https://iili.io/SroZrJ.jpg',
    description:
      "Experience Aloy's legendary quest to unravel the mysteries of a future Earth ruled by Machines. Use devastating tactical attacks against your prey and explore a majestic open world in this award-winning action RPG!",
    year: 2017,
    score: 89,
    gameplay_url: 'https://www.youtube.com/watch?v=Uv6OvwqEPGM',
    trailer_url: 'https://www.youtube.com/watch?v=u4-FCsiF5x4',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
        {
          create: { genre_title: 'RPG' },
          where: { genre_title: 'RPG' },
        },
      ],
    },
  },
  {
    title: 'Injustice 2',
    cover_image_url: 'https://iili.io/SroDdv.jpg',
    description:
      'Build and power up the ultimate version of your favourite DC legends in INJUSTICE 2. This is your Legend. Your Journey. Your Injustice.',
    year: 2017,
    score: 87,
    gameplay_url: 'https://www.youtube.com/watch?v=BkUQLSe5NNE',
    trailer_url: 'https://www.youtube.com/watch?v=oDav-JfidL0',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Fight' },
          where: { genre_title: 'Fight' },
        },
      ],
    },
  },
  {
    title: 'Star Wars: Jedi Fallen Order',
    cover_image_url: 'https://iili.io/Srob7R.jpg',
    description:
      'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire.',
    year: 2019,
    score: 79,
    gameplay_url: 'https://www.youtube.com/watch?v=0GLbwkfhYZk',
    trailer_url: 'https://www.youtube.com/watch?v=0GLbwkfhYZk',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'FPS' },
          where: { genre_title: 'FPS' },
        },
      ],
    },
  },
  {
    title: 'Madden NFL 23',
    cover_image_url: 'https://iili.io/Sromep.jpg',
    description:
      'Play your way into the history books. Control your impact with every decision in all-new ways. Call the shots in Franchise with free agency and trade logic updates, leave a legacy in Face of the Franchise: The League, and assemble the most powerful roster in all of Madden Ultimate Team™.',
    year: 2022,
    score: 68,
    gameplay_url: 'https://www.youtube.com/watch?v=LklQkylauiw',
    trailer_url: 'https://www.youtube.com/watch?v=Qv6G_w8RUOo',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Sports' },
          where: { genre_title: 'Sports' },
        },
      ],
    },
  },
  {
    title: "Marvel's Spider Man Remastered",
    cover_image_url: 'https://iili.io/SropmN.jpg',
    description:
      "In Marvel's Spider-Man Remastered, the worlds of Peter Parker and Spider-Man collide in an original action-packed story. Play as an experienced Peter Parker, fighting big crime and iconic villains in Marvel's New York.",
    year: 2018,
    score: 87,
    gameplay_url: 'https://www.youtube.com/watch?v=99QO14AClIQ',
    trailer_url: 'https://www.youtube.com/watch?v=1E051WtpyWg',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
      ],
    },
  },
  {
    title: 'Mortal Kombat 11',
    cover_image_url: 'https://iili.io/Srx9II.jpg',
    description:
      'Mortal Kombat is back and better than ever in the next evolution of the iconic franchise.',
    year: 2019,
    score: 88,
    gameplay_url: 'https://www.youtube.com/watch?v=RkAzHyw85h8',
    trailer_url: 'https://www.youtube.com/watch?v=UoTams2yc0s',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Fight' },
          where: { genre_title: 'Fight' },
        },
      ],
    },
  },
  {
    title: 'Monster Hunter World',
    cover_image_url: 'https://iili.io/SrxHXt.jpg',
    description:
      'Welcome to a new world! In Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.',
    year: 2018,
    score: 90,
    gameplay_url: 'https://www.youtube.com/watch?v=q3SSWTqr850',
    trailer_url: 'https://www.youtube.com/watch?v=Ro6r15wzp2o',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'RPG' },
          where: { genre_title: 'RPG' },
        },
      ],
    },
  },
  {
    title: 'Multiversus',
    cover_image_url: 'https://iili.io/Srx31s.jpg',
    description:
      'MultiVersus is a free-to-play platform fighter that lets you team up with your friends using some of the most iconic characters including Batman, Shaggy, & more!',
    year: 2022,
    score: 80,
    gameplay_url: 'https://www.youtube.com/watch?v=zCNAbJ8vOME',
    trailer_url: 'https://www.youtube.com/watch?v=zCNAbJ8vOME',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Fight' },
          where: { genre_title: 'Fight' },
        },
      ],
    },
  },
  {
    title: 'NBA 2k23',
    cover_image_url: 'https://iili.io/SrxJLX.jpg',
    description:
      'Rise to the occasion in NBA 2K23. Showcase your talent in MyCAREER. Pair All-Stars with timeless legends in MyTEAM. Build your own dynasty in MyGM, or guide the NBA in a new direction with MyLEAGUE. Take on NBA or WNBA teams in PLAY NOW and feel true-to-life gameplay.',
    year: 2021,
    score: 80,
    gameplay_url: 'https://www.youtube.com/watch?v=jOCs6ys57L8',
    trailer_url: 'https://www.youtube.com/watch?v=R1RMvl_Ag28',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Sports' },
          where: { genre_title: 'Sports' },
        },
      ],
    },
  },
  {
    title: "No Man's Sky",
    cover_image_url: 'https://iili.io/Srx2Bn.jpg',
    description:
      "No Man's Sky is a game about exploration and survival in an infinite procedurally generated universe.",
    year: 2016,
    score: 71,
    gameplay_url: 'https://www.youtube.com/watch?v=IixH_wRcr_Q',
    trailer_url: 'https://www.youtube.com/watch?v=nLtmEjqzg7M',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Survival' },
          where: { genre_title: 'Survival' },
        },
      ],
    },
  },
  {
    title: "Player's Unknown Battlegrounds",
    cover_image_url: 'https://iili.io/SrxFrG.jpg',
    description:
      'Play PUBG: BATTLEGROUNDS for free. Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds.',
    year: 2017,
    score: 86,
    gameplay_url: 'https://www.youtube.com/watch?v=u1oqfdh4xBY',
    trailer_url: 'https://www.youtube.com/watch?v=nLtmEjqzg7M',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Battle Royale' },
          where: { genre_title: 'Battle Royale' },
        },
        {
          create: { genre_title: 'FPS' },
          where: { genre_title: 'FPS' },
        },
      ],
    },
  },
  {
    title: "Tom Clancy's Rainbow Six Siege",
    cover_image_url: 'https://iili.io/Srxf2f.jpg',
    description:
      "Tom Clancy's Rainbow Six Siege is the latest installment of the acclaimed first-person shooter franchise developed by the renowned Ubisoft Montreal studio.",
    year: 2015,
    score: 73,
    gameplay_url: 'https://www.youtube.com/watch?v=gxl5NdbBOuA',
    trailer_url: 'https://www.youtube.com/watch?v=HKd-mk__BXA',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'FPS' },
          where: { genre_title: 'FPS' },
        },
      ],
    },
  },
  {
    title: 'Red Dead Redemption 2',
    cover_image_url: 'https://iili.io/Srxq74.jpg',
    description:
      'Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.',
    year: 2018,
    score: 97,
    gameplay_url: 'https://www.youtube.com/watch?v=BoohYJlRXa8',
    trailer_url: 'https://www.youtube.com/watch?v=gmA6MrX81z4',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
      ],
    },
  },
  {
    title: 'Resident Evil 2',
    cover_image_url: 'https://iili.io/SrxBkl.jpg',
    description:
      'A deadly virus engulfs the residents of Raccoon City in September of 1998, plunging the city into chaos as flesh eating zombies roam the streets for survivors. An unparalleled adrenaline rush, gripping storyline, and unimaginable horrors await you. Witness the return of Resident Evil 2.',
    year: 2019,
    score: 98,
    gameplay_url: 'https://www.youtube.com/watch?v=sCL6ckm613k',
    trailer_url: 'https://www.youtube.com/watch?v=u3wS-Q2KBpk',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Survival Horror' },
          where: { genre_title: 'Survival Horror' },
        },
      ],
    },
  },
  {
    title: 'Resident Evil Village',
    cover_image_url: 'https://iili.io/SrxCp2.jpg',
    description:
      'Experience survival horror like never before in the 8th major installment in the Resident Evil franchise - Resident Evil Village. With detailed graphics, intense first-person action and masterful storytelling, the terror has never felt more realistic.',
    year: 2021,
    score: 84,
    gameplay_url: 'https://www.youtube.com/watch?v=s8h1Q87IcPo',
    trailer_url: 'https://www.youtube.com/watch?v=Qge5m24C5qs',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Survival Horror' },
          where: { genre_title: 'Survival Horror' },
        },
      ],
    },
  },
  {
    title: 'Sea of Thieves',
    cover_image_url: 'https://iili.io/SrxoIS.jpg',
    description:
      'Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting – everything you need to live the pirate life and become a legend in your own right. With no set roles, you have complete freedom to approach the world, and other players, however you choose.',
    year: 2018,
    score: 69,
    gameplay_url: 'https://www.youtube.com/watch?v=DBGKtb7lbEk',
    trailer_url: 'https://www.youtube.com/watch?v=r5JIBaasuE8',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Action/Adventure' },
          where: { genre_title: 'Action/Adventure' },
        },
        {
          create: { genre_title: 'Multiplayer' },
          where: { genre_title: 'Multiplayer' },
        },
      ],
    },
  },
  {
    title: 'Sekiro: Shadows Die Twice',
    cover_image_url: 'https://iili.io/Srxxh7.jpg',
    description:
      'Game of the Year - The Game Awards 2019 Best Action Game of 2019 - IGN Carve your own clever path to vengeance in the award winning adventure from developer FromSoftware, creators of Bloodborne and the Dark Souls series. Take Revenge. Restore Your Honor. Kill Ingeniously.',
    year: 2019,
    score: 90,
    gameplay_url: 'https://www.youtube.com/watch?v=XA74YQB7X-0',
    trailer_url: 'https://www.youtube.com/watch?v=rXMX4YJ7Lks',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'RPG' },
          where: { genre_title: 'RPG' },
        },
      ],
    },
  },
  {
    title: 'Middle Earth: Shadow of War',
    cover_image_url: 'https://iili.io/SrxzQ9.jpg',
    description:
      'Experience an epic open-world brought to life by the award-winning Nemesis System. Forge a new Ring of Power, conquer Fortresses in massive battles and dominate Mordor with your personal orc army in Middle-earth™: Shadow of War™.',
    year: 2017,
    score: 80,
    gameplay_url: 'https://www.youtube.com/watch?v=DEob4KV4itg',
    trailer_url: 'https://www.youtube.com/watch?v=ESw4dyKPgj8',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'RPG' },
          where: { genre_title: 'RPG' },
        },
      ],
    },
  },
  {
    title: 'The Elder Scrolls V: Skyrim',
    cover_image_url: 'https://iili.io/SrxTBe.jpg',
    description:
      'Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail.',
    year: 2011,
    score: 94,
    gameplay_url: 'https://www.youtube.com/watch?v=f4JuigM40es',
    trailer_url: 'https://www.youtube.com/watch?v=JSRtYpNRoN0',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'RPG' },
          where: { genre_title: 'RPG' },
        },
      ],
    },
  },
  {
    title: 'Street Fighter V',
    cover_image_url: 'https://iili.io/SrxuEu.jpg',
    description:
      'Experience the intensity of head-to-head battles with Street Fighter® V! Choose from 16 iconic characters, then battle against friends online or offline with a robust variety of match options.',
    year: 2018,
    score: 87,
    gameplay_url: 'https://www.youtube.com/watch?v=HE0cMFHN4jo',
    trailer_url: 'https://www.youtube.com/watch?v=0nFd7Iylj5A',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Fight' },
          where: { genre_title: 'Fight' },
        },
      ],
    },
  },
  {
    title: 'Subnautica',
    cover_image_url: 'https://iili.io/Srx52j.jpg',
    description:
      'Descend into the depths of an alien underwater world filled with wonder and peril. Craft equipment, pilot submarines and out-smart wildlife to explore lush coral reefs, volcanoes, cave systems, and more - all while trying to survive.',
    year: 2018,
    score: 87,
    gameplay_url: 'https://www.youtube.com/watch?v=fYLkUOeRFlY',
    trailer_url: 'https://www.youtube.com/watch?v=Rz2SNm8VguE',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Survival' },
          where: { genre_title: 'Survival' },
        },
      ],
    },
  },
  {
    title: 'Star Wars Battlefront 2',
    cover_image_url: 'https://iili.io/SrxArb.jpg',
    description:
      'Be the hero in the ultimate STAR WARS™ battle fantasy with STAR WARS™ Battlefront™ II: Celebration Edition!',
    year: 2017,
    score: 68,
    gameplay_url: 'https://www.youtube.com/watch?v=AG2SZCNwORs',
    trailer_url: 'https://www.youtube.com/watch?v=_q51LZ2HpbE',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'FPS' },
          where: { genre_title: 'FPS' },
        },
      ],
    },
  },
  {
    title: 'The Forest',
    cover_image_url: 'https://iili.io/Srx7Yx.jpg',
    description:
      'As the lone survivor of a passenger jet crash, you find yourself in a mysterious forest battling to stay alive against a society of cannibalistic mutants. Build, explore, survive in this terrifying first person survival horror simulator.',
    year: 2018,
    score: 83,
    gameplay_url: 'https://www.youtube.com/watch?v=UyO72UXmi80',
    trailer_url: 'https://www.youtube.com/watch?v=8KXfxHujIAA',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'Survival' },
          where: { genre_title: 'Survival' },
        },
        {
          create: { genre_title: 'Multiplayer' },
          where: { genre_title: 'Multiplayer' },
        },
      ],
    },
  },
  {
    title: 'The Witcher 3: Wild Hunt',
    cover_image_url: 'https://iili.io/SrxYkQ.jpg',
    description:
      'As war rages on throughout the Northern Realms, you take on the greatest contract of your life — tracking down the Child of Prophecy, a living weapon that can alter the shape of the world.',
    year: 2015,
    score: 93,
    gameplay_url: 'https://www.youtube.com/watch?v=yQiO6-JIG9M',
    trailer_url: 'https://www.youtube.com/watch?v=c0i88t0Kacs',
    genres: {
      connectOrCreate: [
        {
          create: { genre_title: 'RPG' },
          where: { genre_title: 'RPG' },
        },
      ],
    },
  },
];

export const game = async (prisma: PrismaClient) => {
  for (const obj of Object.values(games)) {
    await prisma.game.upsert({
      where: { title: obj.title },
      update: {},
      create: { ...obj },
    });
  }
};
