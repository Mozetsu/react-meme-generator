# Meme Generator that consumes external API
Project built from scratch to test my knowledge in React.

## Objective
Build a web application where users can generate memes. It should be built without entirely fro scratch. Users should be greeted with a form where they can input text for both the top section of the meme as well as the bottom one. Users can type the meme text in inputs of the form and it should be placed on top of the image every time the value of any input changes. Images should be retrieved from an external API and rendered to the screen. A button to get a random new image should be provided.

## Stack
 - Vite
 - React
 
## Features
- Ability to input text to be placed on the image;
- Retrieve images from external API source;
- Controlled forms using useState hook;
- Render new image on app load using useEffect hook;

## Development
Used (Vite)[https://vitejs.dev/] to generate the boilerplate code as it is getting a lot of attention lately. I personally love the build speed to setup new projects. The difference becomes extremely evident when compared to the well known (create-react-app)[https://create-react-app.dev/] alternative.

The project is fairly simple as I was looking to consolidate my concepts of react. I sticked to a simple app where I could focus more on the code rather than the UI/UX. Created three separate components (Header, Form, and Image), each residing on its own folder of same name. By allocating each component into its own separate folder it became extremely easy to manage separate files related to any given component, such as the css files. 

## Conclusion
...
