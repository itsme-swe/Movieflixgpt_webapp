# Project Steps

1. Create components and utils folder inside src folder

   - /components

     1. Header Component :

        - Netflix Logo added inside &lt;img /&gt; tag

     2. Login Component

        - &lt;Header /&gt; component added inside &lt;Login /&gt; component
        - Background image added below the &lt;Header /&gt; component inside &lt;div /&gt; tag.
        - Created &lt;form&gt;Sign In&lt;/form&gt;
        - Writing an function to toggle **Sign In Form**, if somebody click on **Sign Up** button the **Sign In** form get changed into **Signup** Form.
        - Writing validation_logic to authenticate the information entered by user while Sign IN or Sign Up. Created seprate file **validationLogic.js** in **utils folder .**
        - After validation logic we need to write logic for **Sign UP** and **Sign In** user to our firebase. And this logic is to be written inside onclick function **handleButtonClick( ) .**

     3. Browse Component

2. Setting up Google firebase to deploy our app

   - Now after setting up firebase, we'll try to register first user in firebase.
   - For registering user to firebase we need to use **createUserByEmailAndPassword** and **signInUserByEmailAndPassword** API's given by firebase.
