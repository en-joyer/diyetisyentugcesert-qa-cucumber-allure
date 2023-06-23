Diyetisyen Tuğçe Sert - Test Automation

Project Name
============

This project includes automated tests for the home page of the website of Diyetisyen Tuğçe Sert.

How to Run
----------

1.  Clone this project.
2.  Navigate to the project folder.
3.  Run `npm install` command in the terminal.
4.  Run `npm run cypress:open` command in the terminal.
5.  Cypress test runner will open.
6.  Click on the "Run all specs" button in the top left corner of the test runner.
7.  Tests will start and the results will be displayed in the right panel of the test runner.
8.  For Allure: `npm run allure:report`and`allure open`

Technologies Used
-----------------

*   Cypress
*   Cucumber
*   Allure

Test Scenarios
--------------

### Home Page Check

In this scenario, it is checked whether the images on the home page are loaded and visible, whether the links redirect to the correct addresses, and whether the page title is correct.

#### Features:

*   All images on the home page must be loaded and visible.
*   Links must redirect to the correct addresses.
*   The URL value must be correct.
*   The title must contain "Diyetisyen Tuğçe Sert".

Test Code
---------

Test scenarios are coded using Cucumber and Cypress. The code for the test scenarios is located in the `cypress/e2e/features/anasayfa.feature` file. Also, the necessary JavaScript code to run the test scenarios is available in the `anasayfa.js` file.

Notes
-----

*   This project can be run via the Cypress test runner using the `npm run cypress:open` command.
*   This project was written in 2021, and the Cypress and Cucumber versions should be updated to make it work properly.

_Boilerplate used: https://github.com/JoanEsquivel/cypress-cucumber-boilerplate_
