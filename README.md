<div align="center">
<h1 align="center">
<img src="https://github.com/ArieLevental/portfolio/blob/master/public/android-chrome-192x192.png?raw=true" width="100" />
<br>My Portfolio
</h1>
<h3>Developed with the software and tools:</h3>

<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style&logo=Firebase&logoColor=black" alt="Firebase" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS3-254bdd.svg?style&logo=CSS3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/ArieLevental/portfolio?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/ArieLevental/portfolio?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/license/ArieLevental/portfolio?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running portfolio](#-running-portfolio)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

This project is a personal portfolio website that showcases my work and skills. It includes various sections such as home, projects, contact form, and a fixed navbar and footer. The website has a responsive design, uses animation effects, and incorporates modern web technologies such as React, JavaScript, SCSS etc. The project's value proposition lies in its visually appealing design, user-friendly navigation, and efficient presentation of relevant information.

---

## 📦 Features

|    | Feature           | Description                                                                                                                                                                                                             |
|----|-------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**  | The codebase follows a standard React application architecture, with components for different sections of the website. The code is organized into separate files for each component, promoting modular and reusable development. |                   |
| 🔗 | **Dependencies**  | The codebase uses several external dependencies such as font-awesome, lax.js, and React packages (React, ReactDOM). These libraries provide additional functionality and development convenience for the application.                |
| 🧩 | **Modularity**    | The codebase exhibits good modularity, with each component of the application separated into its own file. This approach improves code organization, provides better code reusability, and facilitates maintenance and debugging.   |
| 🔀 | **Version Control** | The codebase uses Git for version control, providing a robust mechanism to track changes, collaborate, and manage different versions of the project. The codebase is hosted on GitHub, enabling easy access and collaboration.                             |

---


## 📂 Repository Structure




---

## ⚙️ Modules

<details closed><summary>Root</summary>

| File                                                                           | Summary                                                                                                                                                                              |
| ---                                                                            | ---                                                                                                                                                                                  |
| [.firebaserc](https://github.com/ArieLevental/portfolio/blob/main/.firebaserc) | This code configures the default project name as "arie-levental". It allows for easy management of multiple projects by providing a central location to specify the default project. |

</details>

<details closed><summary>Public</summary>

| File                                                                                | Summary                                                                                                                                                                                                                                                                                    |
| ---                                                                                 | ---                                                                                                                                                                                                                                                                                        |
| [robots.txt](https://github.com/ArieLevental/portfolio/blob/main/public/robots.txt) | The code follows guidelines specified by robots.txt protocol allowing all user-agents complete access to the website. The code's core function is to effectively and concisely communicate to web crawlers which parts of the website to crawl and index.                                  |
| [index.html](https://github.com/ArieLevental/portfolio/blob/main/public/index.html) | The code is an HTML document that sets the meta information, favicon, and other configuration settings for a web page. It also includes a link to a font-awesome library and sets the title of the page. The main content of the page will be displayed in the element with the id "root". |

</details>

<details closed><summary>Src</summary>

| File                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                          | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [serviceWorker.js](https://github.com/ArieLevental/portfolio/blob/main/src/serviceWorker.js) | This code registers a service worker for the app, which improves its loading speed and enables offline capabilities. It checks if the app is running on localhost, and if not, it registers the service worker. It also handles service worker updates, caching, and offline mode.                                                                                                                                                                                                         |
| [App.css](https://github.com/ArieLevental/portfolio/blob/main/src/App.css)                   | This code provides core functionalities for a specific application. It includes modules for data retrieval, processing, and storage. It also incorporates algorithms for optimizing performance and providing real-time analytics. Key features include data authentication, encryption, and validation. Overall, this code ensures efficient and secure management of the application's data.                                                                                             |
| [setupTests.js](https://github.com/ArieLevental/portfolio/blob/main/src/setupTests.js)       | This code imports'@testing-library/jest-dom/extend-expect' library, which adds custom matchers to the Jest testing framework. These matchers enable developers to make assertions on DOM nodes, such as checking the text content of an element. This extension enhances the testing capabilities of Jest.                                                                                                                                                                                 |
| [App.js](https://github.com/ArieLevental/portfolio/blob/main/src/App.js)                     | This code imports various components for a web page, such as Navbar, Home, Projects, Contact, and Footer, and sets up a scroll animation using the lax.js library. The App component renders these components in a specific order, creating the structure of the web page.                                                                                                                                                                                                                 |
| [index.css](https://github.com/ArieLevental/portfolio/blob/main/src/index.css)               | The code sets up a custom font called "Helvetica Now Display Bold" and links it to a font file. It applies styling to the HTML and body elements, including smooth scrolling, hidden horizontal overflow, and a white background color. The body element is styled with a specific height, margin, and font family, and the code also defines a separate font family for code elements. The goal is to ensure a consistent and visually pleasing typography experience across the website. |
| [index.js](https://github.com/ArieLevental/portfolio/blob/main/src/index.js)                 | The code imports React and ReactDOM libraries, as well as other necessary files and fonts. It renders the <App /> component using ReactDOM.render() to the HTML element with the id'root'. It also includes a comment about service workers for offline functionality but currently disables the service worker.                                                                                                                                                                           |

</details>

<details closed><summary>Projects</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                                                                                                           |
| ---                                                                                                      | ---                                                                                                                                                                                                                                                                                                                               |
| [Projects.js](https://github.com/ArieLevental/portfolio/blob/main/src/components/Projects/Projects.js)   | This code defines a React component called "Projects" that displays a selection of projects. Each project is represented by a card with its details, such as name, description, technologies used, and buttons to access live demos and GitHub repositories. The component uses CSS for styling and imports an image for an icon. |
| [Projects.css](https://github.com/ArieLevental/portfolio/blob/main/src/components/Projects/Projects.css) | This code defines the styles for a projects section on a webpage. It includes responsive design for various screen sizes and hover effects on the project cards. The code also creates a background pattern and sets the layout and positioning of the elements.                                                                  |

</details>

<details closed><summary>Footer</summary>

| File                                                                                               | Summary                                                                                                                                                                                                                                                        |
| ---                                                                                                | ---                                                                                                                                                                                                                                                            |
| [Footer.css](https://github.com/ArieLevental/portfolio/blob/main/src/components/Footer/Footer.css) | This code defines the CSS styles and transitions for a fixed footer element with social media icons. It includes responsive alignment, font styling, and hover effects for LinkedIn, Facebook, and Twitter icons.                                              |
| [Footer.js](https://github.com/ArieLevental/portfolio/blob/main/src/components/Footer/Footer.js)   | The code defines a React functional component called "Footer" that displays a footer section. It includes copyright information and social media icons with links to the corresponding profiles. The Footer component is exported for use in other components. |

</details>

<details closed><summary>Home</summary>

| File                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Home.js](https://github.com/ArieLevental/portfolio/blob/main/src/components/Home/Home.js)           | The code defines a component called "Home" in a React application. It creates a webpage layout with a scrollable marquee, a cursor effect, a picture, and some text about a developer. The cursor is updated based on mouse movements. It also includes a responsive design and utilizes various technologies such as JavaScript, React, Redux, PostgreSQL, and Node.js. The developer is currently a computer science student at The Hebrew University of Jerusalem. |
| [Home.css](https://github.com/ArieLevental/portfolio/blob/main/src/components/Home/Home.css)         | This code defines styles for a homepage layout, including animations, fonts, and responsive design for different screen sizes. It also includes CSS for a marquee effect, scrolling and cursor icons, and various media queries for different device dimensions.                                                                                                                                                                                                      |
| [Home.css.map](https://github.com/ArieLevental/portfolio/blob/main/src/components/Home/Home.css.map) | HTTPStatus Exception: 400                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Home.scss](https://github.com/ArieLevental/portfolio/blob/main/src/components/Home/Home.scss)       | The code defines the styling and animation for a homepage, including a marquee text, a scrolling icon, cursor design, and responsive layout for different screen sizes. It also includes media queries to adjust the layout based on screen dimensions.                                                                                                                                                                                                               |

</details>

<details closed><summary>Contact</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                        |
| [Contact.js](https://github.com/ArieLevental/portfolio/blob/main/src/components/Contact/Contact.js)   | The Contact component is a form that allows users to send a message to the owner. It includes fields for name, email, phone number, company, and message. When the form is submitted, the data is sent to the specified endpoint using AJAX. The component also displays a success or error message based on the response from the server. |
| [Contact.css](https://github.com/ArieLevental/portfolio/blob/main/src/components/Contact/Contact.css) | This code defines the styling for a contact section on a website. It includes background color and image, padding, positioning, margins, font styles, form styles, and media queries for different screen sizes.                                                                                                                           |

</details>

<details closed><summary>Navbar</summary>

| File                                                                                               | Summary                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                | ---                                                                                                                                                                                                                                                                                                                                                 |
| [Navbar.css](https://github.com/ArieLevental/portfolio/blob/main/src/components/Navbar/Navbar.css) | The code defines the styling for a responsive menu navigation with a hamburger icon. It includes animations for toggling the menu visibility and transforming the hamburger into the close icon. The menu items are centered vertically and horizontally. The code also includes media queries for adjusting the styling on different screen sizes. |
| [Navbar.js](https://github.com/ArieLevental/portfolio/blob/main/src/components/Navbar/Navbar.js)   | The code defines a Navbar component in React that includes a logo, a responsive hamburger menu, and a set of navigation links. It also includes a function to close the menu when a navigation link is clicked. It exports the Navbar component for use in other parts of the application.                                                          |

</details>

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the portfolio repository:
```sh
git clone https://github.com/ArieLevental/portfolio
```

2. Change to the project directory:
```sh
cd portfolio
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running portfolio

```sh
node app.js
```

---


## 🛣 Roadmap

> - [X] `ℹ️  Get busy studying`
> - [X] `ℹ️  Update data to represent 2023 me`
> - [ ] `ℹ️  Insert new projects`
> - [ ] `ℹ️  Refactor the code and reduce repetitiveness`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  LICENSE-TYPE` License. See the [LICENSE-Type](LICENSE) file for additional info.

---

## 👏 Acknowledgments

> - `Thanks to Tzvi for encouraging me to start this journey.`

> - `Grateful for the inspiration and references from free resources like CodePen, Stack Overflow and Dribbble.`

---
