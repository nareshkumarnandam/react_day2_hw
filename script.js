
const h2 = React.createElement('h2', {id: "h2"} , "Topics Covered");
const p1 = React.createElement('p' , {}, "The following is a list of all the topics we cover in the MDN learning area.")
const topic1 = React.createElement('a', { className: "topic" , href: "href1"} , 'Getting started with the web');
const topic1text = React.createElement('p', {className: "text" } , 'Provides a practical introduction to web development for complete beginners.');
const topic2 = React.createElement('a' , {className: "topic" , href: "href2"} , 'HTML - Structuring the web');
const topic2text = React.createElement('p', {className: "text" } , 'HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.');
const topic3 = React.createElement('a' , {className: "topic" , href: "href3"} , 'CSS - Styling the web');
const topic3text = React.createElement('p', {className: "text" } , "CSS is the language that we use to control our web content's style and layout, as well as adding behaviour like animation. This topic provides comprehensive coverage of CSS.");


const content = React.createElement('div', {} ,[topic1, topic1text, topic2, topic2text, topic3, topic3text])


const div1 = React.createElement('div', {className: "div1"} , [h2, p1]);
const div2 = React.createElement('div',{ className: "content"}, [content]);
const mainDiv = React.createElement('div', {className: "mainDiv"} ,[div1, div2]);


ReactDOM.render(mainDiv, document.getElementById('root'));