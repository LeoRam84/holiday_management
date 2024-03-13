# Project README

## Holiday Plan Management Interface SPA

A user-friendly interface (SPA - Single Page Application) for performing CRUD operations on holiday plans. It displays all holiday plans with their titles, descriptions, dates, locations, number of participants and also a Dashboard with additional detailed information. The interface also includes a button to print the selected holiday plan to PDF. Built with React, React Router, Vite, CSS, and Node.js.

## Features

  Dashboard displaying:
  - Total holiday plans number
  - Total people across all events
  - Quantity of holiday plans added in the last 10 minutes
  - List of holiday plans added in the last 10 minutes
  - Quantity of holiday plans for up to 3 people
  - List of holiday plans for up to 3 people
  - Show button (click to view selected plan)

  Holiday plans list page with:
  - Table displaying summarized holiday plans information
  - Buttons to show more details, update, and delete each plan

  Detailed holiday plan information page (triggered by clicking 'show') with:
  - All item properties (event name, number of people, date and hour, location, description)
  - Buttons to update, delete and print to PDF the selected holiday plan.

  Create a new holiday plan page with fields for:
  - Event name (type)
  - Number of people (select)
  - Date and hour (select or type)
  - Location (select: drop-down menu button)
  - Description (type)
  - Save button (click to save the new plan)

- Update holiday plan page with the same format as the new holiday plan creation page.

- Client-side form validation, error handling and navigation for a seamless user experience.

- Data persistence using local storage to preserve data between sessions.

- Responsive Design

- Search Engine Optimization (SEO)

## Features coming very soon !!!

- API Development (creation of an API to save the project information)

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Install Node.js, npm and Vite.

2. Clone the repository:

   ```bash
   git clone https://github.com/LeoRam84/holiday_management
   cd holiday_management

3. Execute the 'npm run dev' command in your terminal within the project directory, after installing Node.js, npm and Vite.


------------------------------------------------------------------------------------------------------------------

## Node.js and npm

https://nodejs.org/en/download

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh