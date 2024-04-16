# Personal Blog

## Description
This project is a personal blog where users can create and view blog posts. It includes functionality to toggle between light and dark modes and stores blog post data locally.

## User Story
As a marketing student, I want a personal blog so that I can showcase my thoughts and experiences.

## Acceptance Criteria
- When the app loads, users are presented with a landing page containing a form to input username, blog title, and blog content.
- Upon submitting the form, blog post data is stored to localStorage.
- After submission, users are redirected to the posts page.
- If the form is submitted without a username, title, or content, users are presented with a message prompting them to complete the form.
- The posts page displays a header with a light mode/dark mode toggle and a "Back" button.
- Clicking the light mode/dark mode toggle updates the page content's styles to reflect the selection.
- Clicking the "Back" button redirects users back to the landing page to input more blog entries.
- The main content of the posts page displays a list of blog posts pulled from localStorage.
- The localStorage contains a JSON array of blog post objects, each including the post author's username, title of the post, and post content.
- Each blog entry in the list displays the title, content, and author.
- The footer includes a link to the developer's portfolio.

## Getting Started
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open index.html in your web browser to view the landing page.

## File Structure
my-blog
├── assets
│ ├── css
│ │ ├── blog.css
│ │ ├── form.css
│ │ └── styles.css
│ └── js
│ ├── blog.js
│ ├── form.js
│ └── logic.js
├── index.html
├── blog.html
└── README.md

markdown
Copy code

## Deployment
The application can be deployed at a live URL. Make sure the application loads with no errors.

## Repository Quality
- The repository has a unique name and follows best practices for file structure and naming conventions.
- Descriptive commit messages are used.
- The README.md file includes a description of the project, user story, acceptance criteria, instructions for getting started, file structure, and deployment details.

## Grading Requirements
- **Technical Acceptance Criteria**: 40%
- **Deployment**: 32%
- **Application Quality**: 15%
- **Repository Quality**: 13%
