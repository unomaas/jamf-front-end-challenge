# Add New User Profile Wizard - Ryan's Front-end Challenge Project

Thanks for looking into my front-end challenge project, the 'Add New User Profile' wizard! 



## Description:

This is a web based application that uses React to interact with a virtual server and database.  This challenge was given to me as a front-end assessment, and the objective was to follow three mock-ups and closely as possible, while still being able to improve on the UI/UX flow and overall feel of the application. 

The app functionality is meant to simulate a user using a wizard to create a new User Profile.  Throughout the wizard, they are asked to enter an email, choose a password and User Group, and then verify the information before submitting.  I added as many little Quality-of-Life features as I could, including but not limited to: Snackbar alerts for errors/successes; Password matching verification; Email formatting verification; Conditional rendering to re-use the buttons; Responsive screen-size design; A custom favicon logo; etc. 

To view the instructions I was given, and compare them to my build, please use the following links:

- Instructions: https://i.imgur.com/id5tOX5.png

- Mock-up Page #1: https://i.imgur.com/HHDSgCv.png 

- Mock-up Page #2: https://i.imgur.com/fl605qJ.png  

- Mock-up Page #3: https://imgur.com/HHDSgCv 



## Prerequisites:

- Node.js: https://nodejs.org/en/

- PostgreSQL: https://www.postgresql.org/



## Installation:

To run this program, you will need to:

- [] Build the database in your SQL server with the code in "database.sql" file. 

- [] Run 'npm install' in your terminal to install the dependencies.

- [] Run 'npm run server' in one terminal, and 'npm run client' in another terminal.



## Usage:

- #1. To use this app, start the server and client in your terminal.  React will navigate to http://localhost:3000/ in your browser.  

- #2. The app will require the user to enter an email, password, and verify the password.  There is form validation on both having the email formatted correctly, and the passwords must match.  The user will press Next to proceed. 

- #3. The next page will require the user to select a User Group to be added to.  The User Group options are populated from a virtual server via a GET request, and .mapped to the drop-down menu.  There is form validation on selecting an appropriate User Group.  The user will press Next to proceed. 

- #4. The next page will have the user verify the information they entered on the prior two steps, by showing them their email and selected User Group, both of which are read-only.  There is form validation to make sure that the user has done both of those steps before being able to Submit.  The user will press Submit to proceed. 

- #5. That's it!  The user will see a success verification if they followed the steps appropriately, or they will be shown an error message if they did not.  At any point, the user can press Cancel to have the wizard reset and start over.  



### Accessibility: 

I strive to make my apps accessible to all!  

This specific app has all of the images alt text appropriately recorded for text readers. 

I would love to incorporate my standard dyslexia-enabled font, OpenDyslexia -- however, this challenge was set to specifically imitate the mock-ups provided, so I chose not to incorporate that to adhere closer to the rules. 


### Built With:

JavaScript/HTML/CSS, React, Redux, Redux Saga, React Router, Passport, Node.js, Express, SQL, Material-UI, Axios, PG. 



### Acknowledgement:

I'd like to give thanks to Dane Smith, and everyone in Prime Academy's Genocchi cohort for teaching me everything at Prime Digital Academy!  I wouldn't be here today without them.  
 


### Support:

If you have suggestions, comments, or issues, please contact me at rdmjobs@live.com.  Thanks for reviewing my project!  Stay wonderful. <3
