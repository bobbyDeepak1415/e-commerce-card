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

14. CardHeader is the section of the card component where we can have titles or badges or any other content like rating. this takes children and a className, we add simple styling to this and test it out by adding it in the card in app.jsx

15. The cardTitle is inside of the cardHeader,for the title. this is styled to be big and bold. apply styling accordingly and test it out in the app.jsx.

16. In the cardBody we put the description or the main content.this also takes children and className. add styling and test it in the app.jsx

17. inside cardFooter component, we can have prices or buttons,links or secondary info. This component also takes children and className. add styling and test it out in app.jsx

18. in app.jsx we remove everything and open a div which will be the outer div. Inside of it we have another div which will be the content wrapper. add styling to both. Inside of this content wrapper div we will have everything else

19. inside this content wrapper we have 3 different divs. the first one is for the header of the layout.this contains a h1 and a p tag for subtext.style it accordingly

20. the second div is the actual card grid.Here we map through the objects in the cardsData array and return a Card. This card will furthur contain all the card children like cardheader,cardTitle,CardBody,CardFooter etc. this second div is the cards grid.

21. we add the grid property to this div for different screen sizes.

22. we map and return a card and use its id as the key. we conditionally change the variant color if the id is divisible by 2 or not.

23. we conditionally render the CardImage here if there is an image available.

24. below this image we have a div which is the inner content wrapper

25. in this content wrapper we first have cardHeader. here if there is a category present we conditionally render it in a span which will be a child to CardHeader.

26. Below this category span we render the CardTitle. here too if the id is divisible by 2 we conditionally change the text color to blue.

27. below this category we conditionally render if there is a rating, inside a span tag inside of a div

28. below this if there is a description,then we conditionally render a CardBody with the description inside of it and if there isnt then we render a CardBody and return a fallback text("no description"). here too we change the text color if the id is divisible by 2

29. below the cardBody we have render the CardFooter inside which there is a div. here we conditionally render the price in a span if the price is available or we render another span with a fallback text.

30. after this price span, we add a call to action button and style it

31. after this, inside this content wrapper div(the second div), below the second second div(card grid),now we have another div,where we simply explain the project structure.

32. in this div we render another card. for the project structure
