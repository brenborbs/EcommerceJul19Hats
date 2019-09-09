## Hats E-Commerce Website built in React

The link for the E-commerce website: https://hats-live.herokuapp.com/

App features:

- Back-end authentication and DB powered by Google firebase

1st commit:

- After lesson 8
- Set up Google firebase

2nd commit:

- Added google firebase authentication

3rd commit:

- Created Sign up component
- Completed sign in and sign out with email and password

4th commit:

- Added Redux and Redux store
- Redirect after sign-in

5th commit:

- Added cartIcon and cartDropwdown
- Added cart-reducer

Important Notes for rest of commits:

- update app with reselect , replaced cart selectors with memoized
- added checkout item component
- added additem and remove item functionality to checkout component

Notes after adding styled-components, converted homepage, header and custom button to styled-components.

- The collection-item.component css breaks
- Reason, The style is breaking as the button no longer has custom-button css class tag. So the parent element of the button, collection-item, is not able to apply the css properties defined in collection-item.styles.scss for the custom-button.
- To fix the issue, one easy way would be to just rename .custom-button to button in the collection-item.styles.scss
- a note has been written on the collection-item.styles.scss

To start the app, "yarn start"
