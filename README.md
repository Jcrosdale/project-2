Reflection:

Through this project, I took the previous REST Countries API and converted it to React and TypeScript. I began by breaking down the application into reusable components such as a header, search bar, region filter, an individual country card, and a display list. I also utilized a custom useCountries hook to manage API requests and a Context API to set theme state throughout each of the components. More time was spent on the initial planning phase due to having to visually organize and break down what should be reusable and grouped together.

Challenges I faced included successfully fetching data from the API. There were multiple points where the country properties did not match the interfaces in TypeScript, which required me to inspect through console loggging the API throughout the process. One example is when the information for the capital was stored in an array instead of as a single property. A similar problem happened with the flag images, where I added conditional rendering and error handling. Overall, it was challenging to organize the states and understand how components communicate with each other. 

If I had more time, I would improve the application's responsive styling with ARIA attributes or run through accessibility standards. I also would have added additional conditional rendering for flag images that weren't loading. I would also try using more properties in the API to add more information and personalization to the application.

Deployed Server: https://preeminent-flan-78cbfd.netlify.app/
