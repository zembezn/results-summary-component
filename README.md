# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview
In this project I built the results-summary component using styled components, flexbox and react javascript. I populated the content from the provided JSON data file.
### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./Screenshot.png)
### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
export const Flex = styled.div`
display: flex;
flex-direction: column;
`
export const FlexContainer = styled.div`
display: flex;
border-radius: 30px;
box-shadow: 10px 15px 30px 5px hsla(0, 0%, 50%, 0.3);

@media (max-width: 375px) {
    flex-direction: column;
}
`

export const Attribution = styled.div`
display: flex;
width: 100%;
font-size: 62%; 
align-items: center;
justify-content: center;
margin-top: 30px;
color: hsl(228, 45%, 44%); 
`
```
```js
  const [results, setResults] = useState([])
  
  useEffect(() => {
    const getResults = async () => {
      const resultsFromServer = await fetchResults()
      setResults(resultsFromServer)
    }
  
    getResults()
  }, [])

  //Fetch Results from Backend
  const fetchResults = async () => {
    const res = await fetch("http://localhost:5000/results")
    const data = await res.json()

    return data
    }
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@jinxmonsoon](https://www.frontendmentor.io/profile/jinxmonsoon)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Thank you to my friend James Nicholson for the sound advice and guidance. 
