exports.seed = function (knex) {  
  return knex('songs').insert([
    { id: 1, artist: 'Dua Lipa', song_name: 'Levitating' },
    { id: 2, artist: 'Miley Cyrus', song_name: 'Midnight Sky' },
    { id: 3, artist: '24kGoldn feat. Iann Dior', song_name: 'Mood' },
    { id: 4, artist: 'Joel Corry x MNEK', song_name: 'Head & Heart' },
    { id: 5, artist: 'Billie Eilish', song_name: 'Therefore I Am' },
    { id: 6, artist: 'Miley Cyrus feat. Dua Lipa', song_name: 'Prisoner' },
    { id: 7, artist: 'Tones And I', song_name: 'Fly Away' },
    { id: 8, artist: 'Taylor Swift', song_name: 'willow' },
    { id: 9, artist: 'Sigala x James Arthur', song_name: 'Lasting Lover' },
    { id: 10, artist: 'Ariana Grande', song_name: 'positions' },
    { id: 11, artist: 'Travis Scott', song_name: 'Goosebumps' },
    { id: 12, artist: 'Kanye West', song_name: 'I Love It' },
    { id: 13, artist: 'Bruno Mars', song_name: '24K Magic' },
    { id: 14, artist: 'J. Cole', song_name: 'Work Out' },
    { id: 15, artist: 'Jack Harlow', song_name: 'Tyler Herro' },
    { id: 16, artist: 'Big Sean', song_name: 'Wolves' },
    { id: 17, artist: 'DaBaby', song_name: 'BOP' },
    { id: 18, artist: 'Roddy Ricch', song_name: 'High Fasion' },
    { id: 19, artist: 'Playboi Carti', song_name: 'Slay3r' },
    { id: 20, artist: 'Hp Boyz', song_name: 'Rumours' },
    { id: 21, artist: 'Gorgon City', song_name: 'There For You' },
    { id: 22, artist: 'Diplo', song_name: 'Turn Back Time' },
    { id: 23, artist: 'Camelphat', song_name: 'Easier' },
    { id: 24, artist: 'Sonny Fodera', song_name: 'Moving Blind (Biscits Remix)' },
    { id: 25, artist: 'MK', song_name: '17' },
    { id: 26, artist: 'Decyfer Down', song_name: 'Fading' },
    { id: 27, artist: 'Alterbridge', song_name: 'Buried Alive' },
    { id: 28, artist: 'Puddle Of Mudd', song_name: 'Blurry' },
    { id: 29, artist: 'Disturbed', song_name: 'Prayer' },
    { id: 30, artist: 'Breaking Benjamin', song_name: 'Psycho' },
    { id: 31, artist: 'Stormzy', song_name: 'Superheroes' },
    { id: 32, artist: 'Stormzy', song_name: 'Own it' },
    { id: 33, artist: 'Stormzy', song_name: 'Audacity' },
    { id: 34, artist: 'Stormzy', song_name: 'Rainfall' },
    { id: 35, artist: 'Stormzy', song_name: 'Vossi Bop' },
    { id: 36, artist: 'Stormzy', song_name: 'Handsome' },
    { id: 37, artist: 'Stormzy', song_name: 'Do better' },
    { id: 38, artist: 'Stormzy', song_name: 'Big Michael' },
    { id: 39, artist: 'Stormzy', song_name: 'Lessons' },
    { id: 40, artist: 'Stormzy', song_name: 'Bronze' },
    { id: 41, artist: 'Frozen', song_name: 'Let It Go' },
    { id: 42, artist: 'Aladdin', song_name: 'A Whole New World' },
    { id: 43, artist: 'The Lion King', song_name: 'Circle Of Life' },
    { id: 44, artist: 'The Lion King', song_name: 'Hakuna Matata' },
    { id: 45, artist: 'Toy Story', song_name: `You've Got a Friend in Me` },
    { id: 46, artist: 'Cat Stevens', song_name: 'Father and Son' },
    { id: 47, artist: 'John Denver', song_name: 'Country Roads' },
    { id: 48, artist: 'John Denver', song_name: 'Leaving On A Jet Plane' },
    { id: 49, artist: 'Disturbed', song_name: 'The Sound of Silence' },
    { id: 50, artist: 'Rick Astley', song_name: 'Never Gonna Give You Up' },
  ])
}
