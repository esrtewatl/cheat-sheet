export const questions = [
  {
    id: 1,
    category: 'React',
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.'
  },
  {
    id: 2,
    category: 'React',
    question: 'What are the features of React?',
    answer: 'The features of React include virtual DOM, JSX, component-based architecture, and unidirectional data flow.'
  },
  {
    id: 3,
    category: 'JavaScript',
    question: 'What is a closure in JavaScript?',
    answer: 'A closure is a function that has access to variables in its outer scope, even after the outer function has returned.'
  },
  {
    id: 4,
    category: 'JavaScript',
    question: 'What is the difference between let and var in JavaScript?',
    answer: 'let is block-scoped, while var is function-scoped.'
  },
  {
    id: 5,
    category: 'HTML',
    question: 'What does the <!DOCTYPE html> declaration do?',
    answer: 'The <!DOCTYPE html> declaration is used to tell the browser which version of HTML the document is written in.'
  },
  {
    id: 6 ,
    category: 'Rest',
    question:'Describe the advantages of REST web services?',
    answer: 'I believe that REST provides several advantages that are beneficial to the development process. Such as Scalibility and  Flexibility. It is a lightweight protocol and has a simple learning curve.'
  },
  {
    id: 6 ,
    category: 'UI',
    question:'Way to decrease page load times?',
    answer: 'Image optimization and stylesheet at the top of page,'
  },
  {
    id: 7 ,
    category: 'Javascript',
    question:'What is stringify?',
    answer: 'IN a JSON method, stringify is used to transform a JavaScript object into a string. JSON is a common structure to receive and send data between the web server and the client, and when we wish to send data to the webserver, the object ought to be a string.'
  },
  {
    id: 8 ,
    category: 'CSS',
    question:'What are elements of a Box Model?',
    answer: 'Margin, Border,Padding and Content'
  },
  {
    id: 9 ,
    category: 'UI',
    question:'What is progressive rendering?',
    answer: 'Used to boost pages rendering content by prioritizing visible content for mobile uses and lazy loading of images.'
  },
  {
    id: 10 ,
    category: 'Mongo',
    question:'What is MongoDB connection?',
    answer: 'MongoDB is a NoSQL database that utilizes the JSON-like structure to stow data elements. To modify and access data in MongoDB, the programmer ought to make use of the MongoDB Query Language (MQL)'
  },
  {
    id: 11  ,
    category: 'Javasript',
    question:'Define the Anonymous function in JS',
    answer: 'The function is not defined like a normal function but instead we make use of an assignment operator and variable to stow the function as an object, then utilizing that variable, we will be capable to invoke the function itself'
  },
  {
    id: 12 ,
    category: 'CSS',
    question:'What do you know about the CSS image sprites and why it is utilized?',
    answer: ' In a nutshell, the CSS sprites merge numerous photos into a single large image.'
  },
  {
    id: 13 ,
    category: 'Dom',
    question:' What is the difference between attribute and property?',
    answer: 'Attributes are an element of an HTML document while properties are a part of the Document Object Model (DOM).'
  },
  {
    id: 14 ,
    category: 'Javascript',
    question:'State the difference between == and ===?',
    answer: ' == denotes abstract equality operator, and it inspects if two values are equal or not apart from their data types. Automatically, it transforms the type of both the operands and compares them.'
  },
  {
    id: 15  ,
    category: 'Javascript',
    question:'Why do we utilize the “use strict”; statement?',
    answer: 'The ‘use strict’ statement sets a few restrictions in the script. Typically, it is utilized to facilitate the strict mode of the script, making sure there could be no loose coupling like undeclared variables' 
  },
  {
    id: 16 ,
    category: 'HTTP',
    question:'Name the major HTTP requests',
    answer: 'Get, Head, Trace, Post, Put and Patch '
  },
  {
    id: 17 ,
    category: 'React',
    question:'What are pure components?',
    answer: 'Components that dont produce any side effects. For the same input, it returns the same output'
  },
  {
    id: 18  ,
    category: 'React',
    question:'What are the different lifecycle methods that you know?',
    answer: 'componentDidMount, shouldComponentUpdate, componentWillUnmount. There’s also the deprecated componentWillMount, componentWillReceiveProps, and componentWillUpdate. Others include: getDerivedStateFromProps, and getSnapshotBeforeUpdate '
  },
  {
    id: 19 ,
    category: 'React',
    question:'How did you go about writing your unit tests? What testing frameworks have you used in the past? ',
    answer: ' focus on testing how different components interact with each other, and end-to-end tests, which test the entire application from a users perspective. Jest is one of the most popular choices for React developers, as it comes with a number of features specifically tailored to testing React components, such as snapshot testing and support for mocking and stubbing'
  },
  {
    id: 20  ,
    category: 'GitHub',
    question:'What kind of version control were you using?',
    answer: 'it involves creating a repository, cloning it to your local machine, creating a branch, making changes, committing and pushing changes to GitHub, creating a pull request, reviewing and merging changes. Its important to follow best practices such as creating small, focused commits and frequently pulling changes from the main branch.'
  },
  {
    id: 21 ,
    category: 'React',
    question:'What is dependency injection?',
    answer: 'dependency injection means passing the required dependencies as props to a component from its parent component.'
  },
  {
    id: 22 ,
    category: 'Debugging',
    question:'How would you go about debugging a website?',
    answer: 'Some of the most common methods include using the browser’s developer tools, using an automated quality assurance suite, debugging the code line-by-line,'
  },
  {
    id: 23 ,
    category: 'Capatibily',
    question:'What are some common issues that you have faced with cross-browser compatibility?',
    answer: 'different browsers rendering CSS differently, different browsers supporting different HTML and CSS features, and different browsers having different levels of support for standards.'
  },
  {
    id: 24 ,
    category: 'Work Enviroment',
    question:'What are some of the common front-end development challenges that you have faced?',
    answer: 'Some of the most common front-end development challenges include cross-browser compatibility issues, dealing with legacy code, and optimizing website performance. Another issue developers frequently run into (but unfortunately less frequently address) is the ability to make their code ADA compliant.'
  },
  {
    id: 25 ,
    category: 'HTML',
    question:'What are the differences between HTML5 and HTML4?',
    answer: 'HTML5, the latest version of HTML, includes several new elements and attributes. It also supports audio and video playback and introduces support for local storage.'
  },
  {
    id: 26 ,
    category: 'Error',
    question:'How would you create a custom error page?',
    answer: 'A custom error page is a page that is displayed when an error occurs. To create a custom error page, you would first need to create a file called "error.php" or "error.html." Then, you would need to edit the .htaccess file to point to the custom error page.'
  },
  {
    id: 27,
    category: 'Javascript',
    question:' What is the difference between an anonymous function and a named function?',
    answer: 'A named function can be referenced in the future from anywhere in the code, whereas an anonymous function cannot — although it will run when it occurs in-line.'
  },
  {
    id: 28,
    category: 'React',
    question:'What is an event loop?',
    answer: 'An event loop is the foundation of real-time JavaScript response. It runs at intervals to test for an event. You will need to initiate event loops to scan for user behaviors like clicks.'
  },
  // {
  //   id: 29 ,
  //   category: '',
  //   question:'',
  //   answer: '',
  // }
  // {
  //   id:  ,
  //   category: '',
  //   question:'',
  //   answer: '',
  // }
  // {
  //   id:  ,
  //   category: '',
  //   question:'',
  //   answer: '',
  // }
  // {
  //   id:  ,
  //   category: '',
  //   question:'',
  //   answer: '',
  // }
  // {
  //   id:  ,
  //   category: '',
  //   question:'',
  //   answer: '',
  // }
  // {
  //   id:  ,
  //   category: '',
  //   question:'',
  //   answer: '',
  // }
  // {
  //   id:  ,
  //   category: '',
  //   question:'',
  //   answer: '',
  // }

];