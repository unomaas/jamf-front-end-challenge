//#region ⬇⬇ All document setup below:
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');
//#endregion ⬆⬆ All document setup above. 


/** ⬇ GET /userGroups:
 * Router function to handle the GET part of the server-side logic.  Will send SQL query to pull all of the entries from the DB to update on the DOM.
 */
router.get('/', (req, res) => {
  console.log('In GET /userGroups');
  // ⬇ Declaring SQL commands to send to DB: 
  const sqlText = `SELECT * from "userGroups";`;
  // ⬇ Sending the query to the DB:
  pool.query(sqlText)
    .then((result) => {
      console.log('In /userGroups GET, result is:', result.rows);
      // ⬇ Sends back the results in an object, we always want rows:
      res.send(result.rows);
    }) // End .then
    .catch((error) => {
      console.log('In /userGroups GET, error is:', error);
      res.sendStatus(500); // Server error. 
    }); // End .catch
}) // End GET /userGroups


module.exports = router;