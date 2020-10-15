# Contributing

- Fork the repository
- Append your changes to the `/src/content.js` file, following the guide for each section below.
- Commit your changes with an appropriate message including #{ID} of the issue it solves.
- Push your changes to your repository.
- Create a pull request from your forked repository to the main repository.
- Make sure that your branch is up-to-date with the `master` by fetching any changes and rebasing using `git fetch upstream && git rebase upstream/master`. Otherwise you will need to resolve your conflicts before it gets approved and merged.

_Please make sure you include all necessary fields and try to stick to the format given below. Replace any [] or {} tokens with the relevant information stated_

Your PR will be reviewed carefully to see if it fits the bill, with very loose guidelines. The URL format doesn't matter so much as long as the link works and a video can be retrieved.

## Important

Remember that the video URLs should reference snippets or clips from your favourite scene of the movie or show. We aren't hosting trailers, credits or fan videos.

Also, bear in mind that that only one entry to the content will be accepted at a time. You should raise additional PR's for extra content. This allows us to validate each PR in isolation.

The image that is added to support the content should be a JPEG and added to the `/public/assets/images` folder. Make sure the quality of the image is decent and preferably represents the scene from the video you are referencing rather than title screens. The images are resampled to be 600(w)x~350(h) with a resolution of 300ppi. This helps to keep the image sizes down.

## Genres supported

- All
- Action
- Adventure
- Animation
- Comedy
- Crime
- Drama
- History
- Mystery
- Romance
- Sci-Fi
- Thriller
- Horror

## Individual cards

### TV Shows

```
{
  type: "tv_show",
  title: "{TV_TITLE}",
  description: "{DESCRIPTION}",
  short: "{SHORT_DESCRIPTION}",
  season: {SEASON_NUMBER},
  episode: {EPISODE_NUMBER},
  episode_title: "{EPISODE_TITLE}",
  imdb: "{IMDB_URL_FOR_SHOW_EPISODE}",
  url: "https://www.youtube.com/watch?v={YOUTUBE_VIDEO_ID_HERE}",
  thumbnail: "{IMAGE_ASSET_FILENAME}.jpg",
  genre: [<genre>]
}
```

### Films

```
{
  type: "movie",
  title: "{FILM TITLE HERE}",
  description: "{DESCRIPTION}",
  short: "{SHORT_DESCRIPTION}",
  year: {FILM_YEAR},
  imdb: "{IMDB_URL_HERE}",
  url: "https://www.youtube.com/watch?v={YOUTUBE_VIDEO_ID_HERE}",
  thumbnail: "{IMAGE_ASSET_FILENAME}.jpg",
  genre: [<genre>]
}
```

## Multi cards

### TV Shows

```
{
  type: "tv_show",
  title: "{TV_TITLE}",
  genre: [<genre>],
  content: [
    description: "{DESCRIPTION}",
    short: "{SHORT_DESCRIPTION}",
    season: {SEASON_NUMBER},
    episode: {EPISODE_NUMBER},
    episode_title: "{EPISODE_TITLE}",
    imdb: "{IMDB_URL_FOR_SHOW_EPISODE}",
    url: "https://www.youtube.com/watch?v={YOUTUBE_VIDEO_ID_HERE}",
    thumbnail: "{IMAGE_ASSET_FILENAME}.jpg"
  ]
}
```

### Films

```
{
  type: "movie",
  title: "{FILM TITLE HERE}",
  genre: [<genre>],
  content: [
    description: "{DESCRIPTION}",
    short: "{SHORT_DESCRIPTION}",
    year: {FILM_YEAR},
    imdb: "{IMDB_URL_HERE}",
    url: "https://www.youtube.com/watch?v={YOUTUBE_VIDEO_ID_HERE}",
    thumbnail: "{IMAGE_ASSET_FILENAME}.jpg"
  ]
}
```

## Contributors

If this is your first PR, don't forget to add yourself to the `CONTRIBUTORS.md`. Once your PR has been approved and merged, you will have your name in lights!

```
#### Name: [FULLNAME](PERSONAL_URL_OR_GITHUB)
- Role: Contributor
- Place: {LOCATION}
- GitHub: [USERNAME](URL)
```
