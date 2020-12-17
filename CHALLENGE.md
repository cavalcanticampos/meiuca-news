# The Challenge

Creating a Design System is not an easy task even more in 72 hours. I needed to develop a simple architecture, easy to understand, maintain and replicable.

I started by adding React as the client layer to take care of logic and web components.

I quickly realized that I would need a server if I wanted to improve maintenance by working with .yml files. Unfortunately I didn't have time to create this server, despite having designed the architecture with node.js and express.

I understood another way, perhaps with more advantages for a developer, which would be to create a yml parser for json and host in a cloud to be consumed via an HTTP server for the client to always load on the first load of the project. It would also cost me more time than I had. An advantage of this approach is that with enough time it is possible to create a Backoffice for designers, developers or other people to be able to change Design Token properties or create new ones via interface.

### The MVP

Although I like the architecture designed, my time was limited and I opted for an MVP thinking only of a Client. For this I chose to use Atomic Design as a Methodology for the development of web components and Styled-Components to style these components. I created global assets to the application within the project itself so that any components could use them and are easy to maintain, since only by changing the design tokens in one file you will change the entire project with your change.
