To start working with the application, follow these steps:
1. Clone the repository using Git:
```
git clone https://github.com/justa8866/EmployeesKit.git
```
2. Install the dependencies using NPM:
```
npm i
```
3. Copy .env-example to .env of the project. This file contains the API credentials for Firebase, which is not included in the repository for security reasons.

```
cp .env-example .env
```

4. Start the development server:
```
npm run dev
```
Once the server is running, you can view the application by opening your web browser and navigating to 

http://127.0.0.1:5173

<br>Tools that I used: 

•	For linting: eslint,  prettier.

•	For precommit checking staged files: husky, lintstaged

•	Git workflow, Commits checks commitlint, commitizen, conventional commits

•	Project was deployed though cli to netlify: https://employees-kit.netlify.app/

<br>Tech stack:

•	I used vite to create react project,

•	Typescript for type checks and faster development,

•	Mui design library

•	React-hook-form, zod for form validation

•	Firebase as BaaS 

•	ContextApi, reducer from React

•	Moment.js for date calculation

<br>Directories structures:

•	.husky – directory with husky config,

•	Node_modules – directory with dependencies

•	Dist – build directory

•	Public – files that will be copy to dist directory after build

•	Src – source code of the application

•	Assests – icon/images that i often use

•	Common – components which i use more than once/twice, general components like layout grid or modal

•	Domain – My domain of this application, 2 logical points employee and task, this is my entities

•	Firebase – firebase config, interfaces, exports

•	Pages- pages that I presents through react router

•	Router – directory to hold routes of my applications

•	Theme – theme of my application

•	Components – directory for components with styles

•	CreateEmployee- general form thats creates new employee

•	Create task – general form thats creates new task

•	Edit task – form to edit current task

•	Edit employee – form to edit current employee

•	Employee – components to show list of employees

•	StatisticsEmployee – components to display 5 employees with largest numer from past month

•	Task – components to show list of tasks

•	Footer, header, Navbar – components of layout 




 
