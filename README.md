# Movie App 2019
## Getting Started
It shows 20 movies on the page with title, rating, year, and summary.
### Used
- HTML
- CSS
- Javascript
- ReactJs
- [Creat React App](https://github.com/facebook/create-react-app)
`npx creat-react-app movie_app_2019`
- [Movie API](https://yts-proxy.now.sh/list_movies.json)
### Explanation for functions
#### How to implement React in `.js`file?
`import React from 'react';`
#### How can I check I'm getting right propTypes?
```js
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
```
#### Sample image
![alt text](https://user-images.githubusercontent.com/47588349/66626316-bde60880-ec32-11e9-82a3-78a89c83e65c.png)

#### Things to fix and work on with this project
- CSS styling : I couldn't really organize the website since I wasn't really comfortable with flex. I should work on that
- Converting it to responsive web
