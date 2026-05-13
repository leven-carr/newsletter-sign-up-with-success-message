# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Setup steps: Create an assets folder, and place the images folder within it. Also create folders for css and js inside assets, then create a styles.css file and a script.js file inside their respective folders. Link the favicon, font, and styles.css in the head. Include the script tag in the head as well, with a defer attribute. Write the custom variables and the universal reset in styles.css.

Working on the HTML: Create a main element to hold the content, and a class of flex-container to be used to center it on the page. Create an article element to be the card, and give it two direct children: a div to hold the <picture> element, and another div to hold the textual content of the card. Use the mobile version for the default image inside the picture element, and the desktop version for larger screens. Inside div.content, add the necessary elements including an h1, p, ul, lis, and form. The form contains a div for styling purposes, which holds the label and the span that acts as the error message. Outside that div it has the input field and the button.

Styling: Write the flexbox rules, with a set of "defaults" for .flex-container and then more specific rules for any containers that require a different flex-direction, or alignment, etc. Then set overall styles on the body and main, including background-color, font-family, and min-height. The card is also styled in its .flex-container.card rule. After the flex container rules, move down the card styling the various elements. The li::before pseudo-element is used to add the favicon marker; I opted not to use the ::marker pseudo-element because I couldn't vertically align it properly. The .error-message span was set to display: none, hiding it both visually and from screenreaders. After the elements in their default states were styled, I moved onto the dialog element in its open state, and its descendant elements. The ::backdrop of the dialog was set to the body background color so that the sign-up card is completely covered when the dialog is open. Next I did the hover and active states of the input and buttons, and the error state (applied via the error class). The .error-message span is set to display: initial when the error class is added, so that it becomes visible. Lastly I adjusted some styles for larger screens.

JavaScript: Create variables to access the form itself, the input field, and the error message; also create variables to access the success modal, the given email shown in the success modal, and the modal's dismiss button. Add a click event listener on form submission that prevents default behavior, and defines a variable containing the trimmed value of the email input, as well as a variable containing a regular expression that should work for most email addresses. The function then opens an if statement; the first condition checks to see if no input was given by the user (or if an empty string was passed in), in which case it invokes a showError function with the message "Email is required". Otherwise, it checks to see if the email did not match the regular expression, in which case it invokes showError with the message "Please enter a valid email". If it moves past those conditions (meaning the user did enter a valid email), then it clears any errors, shows the success modal, shows the given email in the success modal, and resets the form. Outside of the submit event listener, there is an event listener that triggers whenever the user begins typing in the input field, clearing the error. There is also an event listener on the dismiss button that closes the success modal when the dismiss button is clicked. After those event listeners, the helper functions are defined. The first of these is showError, which takes in a message as its argument. The function sets the errorMessage element's textContent to the given message, adds the error class to it, and also adds the error class to the input field. Next is the clearError function, which sets the errorMessage element to an empty string, and removes the error styles from it and the input field. Lastly we have the function showGivenEmail, which takes in an email as its argument, and sets the textContent of the givenEmail span in the success modal to that email.

### Built with

HTML, CSS, and vanilla JS

### What I learned

The <dialog> and <picture> elements were both new to me, so I learned how to use those. I also looked up a regular expression to use for testing email addresses; I have worked with regular expressions a little bit before but nothing nearly that complicated.

### Continued development

In the future I just want to continue getting more comfortable writing practical JS, especially in regards to making it concise and following best practices.

### Useful resources

- [MDN <dialog> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) - I had never used a <dialog> element before, so this page was helpful for learning the methods to show and close the modal, as well as for styling its backdrop pseudo-element.
- [MDN <picture> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture) - The <picture> element is another one I had never used before; this article explained how to use it to offer alternative versions of the image for different screen sizes.

## Author

- Frontend Mentor - [@leven-carr](https://www.frontendmentor.io/profile/leven-carr)
- GitHub - [@leven-carr](https://github.com/leven-carr)
