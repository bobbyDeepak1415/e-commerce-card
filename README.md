1. inside source folder created a folder called components and inside it a folder called card and inside it created a Card.jsx component which is the wrapper.

2. The Card component accepts props like variant,padding,hover,children,className. variant,padding and hover, we receive and dynamically render them from app.jsx. ClassName is for extra css classes, and children are what we receive from the app.jsx

3. created the baseStyles in card component. these will be applied to everything
4. created the variants object(different colors) primnary,default,success,dark
5. created hoverStyles(true or false) if hover is true then we add some extra shadow and transition it to lift up

6. created paddingStyles for different cases like none,small,medium,large

7. we combine all these styles using template literals with back ticks in the className for the card component

8. added basic styling to the outermost div in the app.jsx
9. in the app.jsx component added a few children inside the Card component to test if evrything is working

10. pass the variant and padding to card in app.jsx

11. inside card folder created components like cardHeader,cardBody,cardTitle,cardImage,cardFooter

12. In the cardImage component we gracefully render a placeholder fallback ui in case the src link fails(defensive programming). this component takes src for the image link and then alt tag for accessibility and a className for additional custom css styles

13. we conditionally render, if the src link exists then we render an image or we render a span saying no image available.we also add styling.

14. CardHeader is the top section of the card component where we can have titles or  badges or any other content
