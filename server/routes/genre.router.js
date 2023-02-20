const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
    //query runs correctly in postico. Replace id number with '$x' to represent user selected movie. 
  const query = `SELECT "movies"."title", "genres"."name" AS "genres" FROM "movies"
  JOIN "movies_genres" ON "movies_genres"."movie_id" = "movies"."id"
  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id" WHERE "movies"."id" = $1;`;
  
  pool.query(query, [req.params.id])
    .then(result => {
      console.log(result);
      res.send(result.rows);
    }).catch(err => {
      console.log('Error with genre.router router.get: ', err);
      res.sendStatus(500)
    })
    
});

module.exports = router;