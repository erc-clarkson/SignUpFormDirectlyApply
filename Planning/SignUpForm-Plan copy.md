## Tech Test 

**tech stack** 

- React 

- bootstrap for styling 

  

**The form** 

labels/inputs: 

- first name 
  - function to update state 
  - function to validate: field is not empty 
  - error message: ternary statement if valid = false. 
- last name 
  - function to update state 
  - function to validate: field is not empty 
  - error message: ternary statement if valid = false. 
- email 
  - function to update state 
  - function to validate: field is not empty & matches regex 
  - error message: ternary statement if valid = false. 
- phone number 
  - function to update state 
  - function to validate: field is not empty & matches regex 
  - error message: ternary statement if valid = false. 
- password 
  - function to update state 
  - function to validate: field is not empty
  - error message: ternary statement if valid = false. 
- confirm password
  - function to update state 
  - function to validate: field is not empty & matches password
  - error message: ternary statement if valid = false. 
- How did you find out about us? 
  - drop down list 
  - function to update state with option 

- Button: 'Sign up' : submit form 
  - On submit function attached to form 
  - This function needs to check valid states = true & states != null (if statement)
  - Error message: ternary statement for showing if information has not passed this if statement. 



**Form action**

- add the form data into an object 
- output to the console : console.log



**Planning Order** 

1. Design concept
   - screenshot of their website (for colours/styles). 
   - Look into design references. 
   - low-fidelity wireframe. 

2. build form in HTML
   - Add all labels/inputs for form 
   - Style with bootstrap 
   - mobile & desktop responsive 

3. Validation (JavaScript)

   - all fields are filled in
   - phone is valid 

   - email is valid 

   - passwords match 

   - error messages for above. 
   - Test 

4. Form action: when info is clicked: send to object. 

   - handleSubmit function

   - inside create a new object, put useStates inside 

   - console.log object

5. Styling of page 

   - add styling to app page
   - mobile & desktop responsive



**If I had more time**

1. Regex: used simple forms for email and phone HOWEVER, if deployed would spend more time testing and researching better regex for phone numbers. 
2. Would do more testing! Currently checking that error messages do work, trying different texts to see if it gets past the submit function HOWEVER, would like to do a variety of testing to find issues. 
3. Styling: have made styling for Mobile and desktop (done checking inspector). The form does change size depending on these models. However, i would like to of spent more time on the transition of windows and include styling on the ipad views. 
4. Also, if i had more time, would have developed a few designs to select from before going into code. 
5. Design had nav bar but wanted to be true to the 2-3 hour window you gave so did not add. 

