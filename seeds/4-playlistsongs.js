
exports.seed = function (knex) {
  return knex('playlistsongs').insert([
    { id: 1, playlist_id: 1, song_id: 1 },
    { id: 2, playlist_id: 1, song_id: 2 },
    { id: 3, playlist_id: 1, song_id: 3 },
    { id: 4, playlist_id: 1, song_id: 4 },
    { id: 5, playlist_id: 1, song_id: 5 },
    { id: 6, playlist_id: 2, song_id: 6 },
    { id: 7, playlist_id: 2, song_id: 7 },
    { id: 8, playlist_id: 2, song_id: 8 },
    { id: 9, playlist_id: 2, song_id: 9 },
    { id: 10, playlist_id: 2, song_id: 10 },
    { id: 11, playlist_id: 3, song_id: 11 },
    { id: 12, playlist_id: 3, song_id: 12 },
    { id: 13, playlist_id: 3, song_id: 13 },
    { id: 14, playlist_id: 3, song_id: 14 },
    { id: 15, playlist_id: 3, song_id: 15 },
    { id: 16, playlist_id: 4, song_id: 16 },
    { id: 17, playlist_id: 4, song_id: 17 },
    { id: 18, playlist_id: 4, song_id: 18 },
    { id: 19, playlist_id: 4, song_id: 19 },
    { id: 20, playlist_id: 4, song_id: 20 },
    { id: 21, playlist_id: 5, song_id: 21 },
    { id: 22, playlist_id: 5, song_id: 22 },
    { id: 23, playlist_id: 5, song_id: 23 },
    { id: 24, playlist_id: 5, song_id: 24 },
    { id: 25, playlist_id: 5, song_id: 25 },
    { id: 26, playlist_id: 6, song_id: 26 },
    { id: 27, playlist_id: 6, song_id: 27 },
    { id: 28, playlist_id: 6, song_id: 28 },
    { id: 29, playlist_id: 6, song_id: 29 },
    { id: 30, playlist_id: 6, song_id: 30 },
    { id: 31, playlist_id: 7, song_id: 31 },
    { id: 32, playlist_id: 7, song_id: 32 },
    { id: 33, playlist_id: 7, song_id: 33 },
    { id: 34, playlist_id: 7, song_id: 34 },
    { id: 35, playlist_id: 7, song_id: 35 },
    { id: 36, playlist_id: 8, song_id: 36 },
    { id: 37, playlist_id: 8, song_id: 37 },
    { id: 38, playlist_id: 8, song_id: 38 },
    { id: 39, playlist_id: 8, song_id: 39 },
    { id: 40, playlist_id: 8, song_id: 40 },
    { id: 41, playlist_id: 9, song_id: 41 },
    { id: 42, playlist_id: 9, song_id: 42 },
    { id: 43, playlist_id: 9, song_id: 43 },
    { id: 44, playlist_id: 9, song_id: 44 },
    { id: 45, playlist_id: 9, song_id: 45 },
    { id: 46, playlist_id: 10, song_id: 46 },
    { id: 47, playlist_id: 10, song_id: 47 },
    { id: 48, playlist_id: 10, song_id: 48 },
    { id: 49, playlist_id: 10, song_id: 49 },
    { id: 50, playlist_id: 10, song_id: 50 },
  ])
}
