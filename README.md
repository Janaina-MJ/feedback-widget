# Note: Under development

# Feedback Widget

This application was made in order to improve my skills with TypeScript and React JS.

## Overview

This is a Single Page Application (SPA), which consists of a feedback widget developed not only for the specific use of this application, but that can be applied to any other website or web app to collect user feedback. The application consists of a button in the lower corner of the browser, which, when clicked, expands a small integrated screen, with a form for leaving feedback. The form contains a comment field and an optional browser screenshot button. The feedback is saved in the database and automatically sent by email to the application developer team.

It works as follows: the user clicks on the feedback widget button, which will expand a small integrated screen containing 3 buttons to choose the type of feedback that will be left (which are: BUG, IDEA, OTHER). When choosing one of these options, the next step will be a form screen for the user to leave a comment and also a browser screenshot button (the screenshot is automatically attached to the form without the user having to upload it). By clicking send, the application will send the feedback and the screenshot to the backend, where they will be saved in the database and sent by email to the website's developer team.

## Project Intro

* Building a web app that allows users to leave feedback about the website or web app, whether it be BUG, IDEA or OTHER.

* The goal of this project is to get practice with:
  - Developing applications using React
  - Using Typescript language for static typing
  - Setting up Vite.js as building tool
  - Styling elements using the Tailwind CSS framework
  - Uusing the Headless UI library, to promote accessibility in the web environment
  - Setting up a server environment
  - Setting up database
  - Sending emails from server using Nodemailer

* Language and tools for this project:
  - Node.js & Express: For server side development
  - React and TypeScript: For client side development
  - Tailwind CSS to build designs, directly in the markup
  - Vite.js: build tool
  - Headless UI library to create fully accessible UI components
  - Nodemailer to send emails from server side
  - Prisma to provide an abstraction layer to write data to the database and work with relational database
  - SQLite database
  - Insomnia API Client for testing the REST API requests
