
# Project Title - Fizzbuzz & Palindrome Mini Apps

Aplikasi Sederhana Fizzbuzz & Palindrome


## Tech Stack

**Client:** ReactJS 17(Typescript), Material UI

**Server:** NodeJS 16.18, NestJS(Typescript), NPM 8.19


## Live Demo

http://178.128.54.119:3006


## Installation
Prerequisites :
1. NodeJS version 16++
2. NPM version 8++


Step Install

1. Clone this repository
```bash
  git clone https://github.com/fikryaoza/fizzbuzz_palindrome.git
  cd fizzbuzz_palindrome
```
2. Install backend
```bash
  cd backend
  npm install
  npm run start:dev
```
3. Install frontend
```bash
  cd frontend
  npm install
  npm run start
```
4. Backend can be accessed at http://localhost:3000
5. Frontend can be accessed at http://localhost:3006
## API Reference

#### Fizzbuzz Generator

```http
  POST /fizzbuzz
```
Body Request :
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `length` | `number` | **Required**. Length Data to be generated |


#### Palindrome Validator

```http
  POST /palindrome
```
Body Request :
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `keyword`      | `string` | **Required**. Word / Sentence to be checked |


