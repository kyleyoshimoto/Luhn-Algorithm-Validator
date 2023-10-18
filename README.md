# Luhn Algorithm Validator
 Codecademy Challenge Project: validates or invalidates credit card numbers using the Luhn algorithm. (Javascript)

Credit Card Validator - README

### Table of Contents

[Overview](https://github.com/kyleyoshimoto/Luhn-Algorithm-Validator/edit/main/README.md?plain=1#L18)
[Project Description](https://github.com/kyleyoshimoto/Luhn-Algorithm-Validator/edit/main/README.md?plain=1#L22)
[Getting Started](https://github.com/kyleyoshimoto/Luhn-Algorithm-Validator/edit/main/README.md?plain=1#L33)
[Prerequisites](https://github.com/kyleyoshimoto/Luhn-Algorithm-Validator/edit/main/README.md?plain=1#L37)
[Installation](https://github.com/kyleyoshimoto/Luhn-Algorithm-Validator/edit/main/README.md?plain=1#L40)
[Usage](https://github.com/kyleyoshimoto/Luhn-Algorithm-Validator/edit/main/README.md?plain=1#L50)

## Overview

Welcome to the Credit Card Validator project! This project is designed to help optimize the credit card validation process by leveraging JavaScript. While many professionals in this field still use manual methods, such as pencil and paper, we have developed a more efficient and automated solution using functions and loops. This allows you to validate multiple credit cards simultaneously, saving you time and effort. Now, you can focus on relaxing while ensuring the accuracy of credit card validation.

## Project Description

The primary objective of this project is to create a JavaScript script that efficiently validates credit card numbers using the Luhn algorithm. Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. The calculations in the Luhn algorithm can be broken down as the following steps:

1. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
2. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
Sum up all the digits in the credit card number.
3. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

 The script employs various algorithms and checks to determine the validity of a given credit card number. By automating this process, you not only improve the accuracy of card validation but also save time compared to manual validation methods.

## Getting Started

Before you can start validating credit cards, you need to set up the project.

#### Prerequisites
To run this project, you need to have a JavaScript runtime environment installed on your system. If you don't already have one, you can use a browser console or Node.js. Download and install Node.js from the official Node.js website.

#### Installation
Clone this repository to your local machine.
shell
Copy code
git clone https://github.com/kyleyoshimoto/credit-card-validator.git
Navigate to the project directory.
shell
Copy code
cd credit-card-validator

## Usage

Validating Credit Cards
To validate credit cards, follow these steps:

Open a terminal or command prompt and navigate to the project directory.
Run the JavaScript script that performs credit card validation. You can do this by executing the following command:
shell
Copy code
node validate_credit_cards.js
Follow the on-screen instructions to input the credit card numbers you want to validate.
The script will process the numbers and display the validation results.

## Contributing

Contributions to this project are welcome. If you have suggestions for improvements or find any issues, please open an issue in this repository. To contribute, follow these general steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and test them thoroughly.
Submit a pull request.

Happy credit card validation and relaxing! If you have any questions or need assistance, feel free to reach out to me.
