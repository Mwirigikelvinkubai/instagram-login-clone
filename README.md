
Step-by-Step Guide: Build a Simple Instagram Login Screen with Vite, React, and Plain CSS (No Code)
Step 1: Set Up Your Project with Vite
Open your terminal or command prompt on your computer.
Use a command to create a new Vite project with React, name it “instagram-login-clone.”
Move into the project folder using a command to change directories.
Install the necessary dependencies with a command to set up React and Vite (no extra styling libraries needed).
Step 2: Prepare Your Files
Open the main app file (usually src/App.jsx) in a text editor like VS Code.
Clear out the default content to start fresh, keeping just the basic structure of a React component.
Create a new CSS file (e.g., src/App.css) in the same folder to hold your styles.
Link the CSS file to your app file by adding an import statement at the top.
Open the global CSS file (like src/index.css) and remove its contents to keep styling focused in one place.
Add a basic rule in your CSS file to remove default margins and padding from the page.
Start the project with a command in the terminal to launch it in your browser and test it.
Step 3: Build the Login Screen
Here’s how to structure and style the login screen, piece by piece:

3a. Create a Container
In your app file, add a main outer div to hold everything, giving it a class name like “app-container.”
Inside that, add a second div for the login box itself, with a class name like “login-box.”
Add a heading (like an h1) inside the login box with the text “Instagram” to act as the logo.
In your CSS file, style the outer container to center everything on the screen with a light gray background and full height.
Style the login box with a fixed width, white background, padding, rounded corners, and a subtle shadow.
3b. Style the Instagram Logo
Give the “Instagram” heading a class name like “logo.”
In your CSS, make the logo text larger, bold, centered, and add some space below it to separate it from what’s next.
3c. Add Username and Password Fields
Below the logo in your app file, add an input field for the username or email with a placeholder text like “Username or email.”
Add another input field below it for the password, setting its type to “password” and giving it a placeholder like “Password.”
Give both inputs the same class name, like “input-field.”
In your CSS, style the input fields to take up the full width of the box, with padding, a light gray border, rounded corners, and some space below each one.
3d. Add a Login Button
Below the password field, add a button with the text “Log In” and a class name like “login-button.”
In your CSS, make the button full-width, with a blue background, white text, no border, rounded corners, and a slightly darker blue color when hovered over.
3e. Add the “OR” Divider
Below the button, add a div with a class like “divider” to hold the “OR” section.
Inside that div, add a div for a line on the left, a span with the text “OR,” and another div for a line on the right.
Give the line divs a class like “line.”
In your CSS, style the divider as a horizontal row with centered items and space above and below.
Make the lines stretch to fill space on both sides, with a thin gray height.
Style the “OR” text with some space around it and a gray color.
3f. Add “Forgot Password?” Link
Below the divider, add a paragraph with the text “Forgot password?” and a class like “forgot-link.”
In your CSS, center the text, make it small, and color it blue to look like a link.
Step 4: Test Your Work
Save all your files and check your browser (it should update automatically with Vite).
Make sure you see a centered white box with the Instagram text, two input fields, a blue button, an “OR” divider with lines, and a “Forgot password?” link.
Step 5: Bonus (Optional Additions)
Add a Signup Prompt:
Below the login box (but still inside the main container), add another div with a class like “signup-box.”
Inside it, add a paragraph saying “Don’t have an account?” followed by a span with “Sign up” text.
In CSS, style the signup box like the login box (white, padded, rounded) with centered text, and make “Sign up” blue.
Make the Form Interactive:
At the top of your app file, import a tool from React to track input values (like useState).
Create variables to store the username and password values.
Add a function to show an alert with the entered values when the button is clicked.
Link the input fields to these variables so they update as you type, and connect the button to the function.