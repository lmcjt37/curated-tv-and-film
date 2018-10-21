# Contributing

* Fork the repository
* Append your changes to the `main/src/content.js` file, following the guide for each section below.
* Commit your changes with an appropriate message including #{ID} of the issue it solves.
* Push your changes to your repository.
* Create a Pull Request from your forked repo to the main repo

## TV Shows

```
{
  type: "tv_show",
  title: "{TV_TITLE}",
  description: "{DESCRIPTION}",
  season: {SEASON_NUMBER},
  episode: {EPISODE_NUMBER},
  episode_title: "{EPISODE_TITLE}",
  imdb: "{IMDB_URL_FOR_SHOW_EPISODE}",
  url: "https://www.youtube.com/watch?v={YOUTUBE_VIDEO_ID_HERE}",
  thumbnail: "https://img.youtube.com/vi/{YOUTUBE_VIDEO_ID_HERE}/0.jpg"
}
```

## Films

```
{
  type: "movie",
  title: "{FILM TITLE HERE}",
  description: "{DESCRIPTION}",
  year: {FILM_YEAR},
  imdb: "{IMDB_URL_HERE}",
  url: "https://www.youtube.com/watch?v={YOUTUBE_VIDEO_ID_HERE}",
  thumbnail: "https://img.youtube.com/vi/{YOUTUBE_VIDEO_ID_HERE}/0.jpg"
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

_Replace any [] or {} tokens with the relevant information stated_

Your PR will be reviewed carefully to see if it fits the bill. Don’t worry too much though, there are no specific guidelines so you should be good
