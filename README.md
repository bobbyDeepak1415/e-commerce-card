1. inside source folder created a folder called components and inside it created a Card.jsx component which is the wrapper.

2. The Card component accepts props like variant,padding,hover,children,className. variant,padding and hover, we receive and dynamically render them from app.jsx. ClassName is for extra css classes, and children are what we receive from the app.jsx

3. created the baseStyles in card component. these will be applied to everything
4. created the variants object(different colors) primnary,default,success,dark
5. created hoverStyles(true or false) if hover is true then we add some extra shadow and transition it to lift up

6. created paddingStyles for different cases like none,small,medium,large
