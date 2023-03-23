<h1>INDEX</h1>
<p>
  This application is built using React.js and TypeScript, along with StyledComponents to provide a seamless user experience. The application fetches cards from an API and displays them to the user in an organized and visually pleasing way.

With the help of TypeScript, the codebase is easy to maintain and extend, providing a solid foundation for the application. The use of StyledComponents ensures that the application is not only functional but also aesthetically pleasing, with a clean and modern look and feel.

In addition to displaying the fetched cards, the application offers a number of features to enhance the user experience. Users can change the layout of the cards, from a square to a rectangle, and their preferences will be saved using LocalStorage. The cards are displayed in an animated slider, with random photos pulled from the unsplashAPI.

To make navigation through the cards easier, the application offers pagination, allowing users to click on a button to view more cards. Additionally, when a request is being fetched, animated skeletons and spinners are displayed to provide visual feedback to the user.

The application also handles errors gracefully, displaying an ErrorBoundary if an unexpected error occurs. Finally, users can save cards to their favorites by clicking on an icon, and if they scroll down more than 100px from the top, a scroll-up button is displayed to help them navigate back to the top of the page.
</p>
<h2>Features</h2>
<ul>
  <li>The user can change the layout from a square card to a rectangular card, and the state will be saved in LocalStorage.</li>
  <li>Images are displayed in an animated slider.</li>
  <li>The slider displays random photos from the unsplashAPI.</li>
  <li>Pagination is achieved by clicking on a button.</li>
  <li>Animated skeletons and spinners are displayed while a request is being fetched.</li>
  <li>Errors are displayed if there is an error while the user is making a request, and the user is allowed to make the request again.</li>
  <li>A single page card can be accessed by clicking on the title of the card.</li>
  <li>Users can save cards to their favorites by clicking on an icon.</li>
  <li>An ErrorBoundary has been added to handle unexpected errors.</li>
  <li>If the user scrolls down more than 100px from the top, a scroll-up button is displayed.</li>
</ul>
<h2>Installation</h2>
<ul>
  <li>Clone the repository to your local machine.</li>
  <li>Run `npm install` to install the necessary dependencies.</li>
  <li>Run `npm start` to start the application.</li>
</ul>
<h2>Feedback</h2>
<p>If you have any comments or suggestions about this application, please fill out the feedback form available in the application. Your feedback is greatly appreciated!</p>
