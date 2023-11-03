## Links

### Project Links

- https://www.amazon.com/Best-Sellers-Books/zgbs/books/

### Tutorials

#### Youtube

- https://youtube.com/playlist?list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&si=T8lTmnopMeXKEkLo - JavaScript Nuggets

#### Text

- https://legacy.reactjs.org/docs/events.html - React Events
- https://www.javascripttutorial.net/es6/ - ES6 Tutorial

#### Tools

- https://github.com/tonsky/FiraCode
- https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions - Fira code font

#### Chrome extensions

- React Developer Tools

## Keyboard shortcuts and terminal commands

### Create app

Note: Try to install from the VS Code instead

1. open terminal
2. navigate to a folder

- use "dir" to see the current folder
- use cd to navigate to subfolder, like a "C:\Users\alexa\OneDrive\Util\Video Lessons>"
- if needed, create a new directory: mkdir "React 3" (quotes needed because of space in the name)
- and then go there "cd React 3"

3. "npx create-react-app my-app" - create app (use your name instead of "my-app") The command is taken from https://create-react-app.dev/
4. open in VS Code (you can use drag-n-drop the folder)
5. "npm start" - start the server

### Stop the server

- If needed to stop the server "CTRL + C" (so far didn't work for me)

### Build app

- "npm run build"

### Deployment

- https://www.netlify.com/
- Add new site -> Deploy manually
- Drag and drop the "build" folder
- Site Configuration -> Change Site Name

### Continuos deployment

#### Get to github

- fix warnings (About Section)

- netlify account
- github account
- basic git commands :

  - remove existing git repo

    - Windows : rmdir -Force -Recurse .git
    - Windows : rd /s /q .git
      Windows commands were shared by students and I have not personally tested them.

  - setup new repo
    - git init
      create an empty git repository
    - git add
      adds new or changed files in your working directory
      to the Git staging area
    - git add .
      adds entire project
      apart from files/directories specified in .gitignore
    - git commit -m "first commit"
      A shortcut command that immediately creates a commit
      with a passed commit message.
    - push to github
      git remote add origin git@github.com:your-profile/repo-name.git
      git branch -M main
      git push -u origin main

#### Download from GitHub

- Remove from PC (rename, whatever)
- Go to GitHub and copy the link
  - Code -> Clone -> HTTPS -> Copy link
- Open CMD
  - cd C:\Users\alexa\OneDrive\Util\Video Lessons\React 3
  - git clone https://github.com/alexmeyercz/temp-backroads-app-1.git
- Open VS Code
  - Open the new folder in VS Code
  - Open terminal
  - "npm install" (all the packages are in package.json, so all the packages and commands need to be installed)
  - "npm start"

#### Updating after making the changes

- After CTRL + C (to stop the server)
  A. do again

  - git add .
  - git commit -m "message"
  - git push -u origin main

  OR

  B. There is an icon with changes on the top left in VS Code (like link or share, usually with a blue number)

  - If you click on it, you see the list of changed files
  - add message
  - click commit
  - click sync

- Reopen again (refreshing doesn't have to help) site on https://netlify.app/

### Terminal commands

- clear -> Clear terminal

### Keyboard Shortcuts

CTRL + B -> toggle sidebar
CTRL + C -> stop the server (you have to be in the "node" terminal, not "powershell")
CTRL + D -> add the next to selection (e.g., if you selected "class", CTRL + D, will select the next "class")
SHIFT + CTRL + L -> select all other snippets like the selection (e.g. if you select "class", SHIFT + CTRL + L will select all the "class" instances )
CTRL + SHIFT + ` -> open terminal
CTRL + \ -> split window
... then ALT + <- to switch to the original one and CTRL + W to close that

## Snippets

### VS Code Snippets (from the React Snippets Extension)

imr → import React from 'react'
imrd → import ReactDOM from 'react-dom' (add /client)
rafce → arrow func with export
rfce → regular func with export
clg → console.log()
ccl → console.clear()
nfn → const functionName = (params) => { }

### Snippets for a standard document

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books'
import Book from './Book'
...
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

### Other

- <React.Fragment></React.Fragment> - root element without actual tag
- Alternatively <></>
- HTML attributes in React: onClick, onChange, onSubmit, htmlFor, readOnly, className, tabIndex

## VS Code extensions

- Auto Rename Tag / Jan Han
- Code Spell Checker / Street Side Software
- ES+ React/Redux... snippets / dsznajder
- Highlight Matching Tag / vincaslt
- Indent-rainbow / oderwat
- Prettier - Code formatter / Prettier
- vscode-icons / VSCode Icons Team

## Open to VS Code instances at once

Yes, it is possible to open multiple instances of Visual Studio Code simultaneously. Here's how you can do it:

1. Press `Ctrl + Shift + N` on Windows or `Command + Shift + N` on Mac to open a new window.
2. Alternatively, press `Ctrl + K` and then release the keys, and press `O` to open the current tab in a new window.
3. You can then use the menu `File → Open Folder` to have two instances of Visual Studio Code with different folders in each window ¹.

I hope this helps!

Source: Conversation with Bing, 11/2/2023
(1) How do I open multiple instances of Visual Studio Code?. https://stackoverflow.com/questions/29964825/how-do-i-open-multiple-instances-of-visual-studio-code.
(2) visual studio code - Is it possible to open multiple VSCode windows at .... https://stackoverflow.com/questions/62240080/is-it-possible-to-open-multiple-vscode-windows-at-the-same-time.
(3) VS Code: Opening Multiple Windows/Projects Simultaneously. https://www.kindacode.com/article/vs-code-opening-multiple-windows-projects-simultaneously/.
(4) Running two projects at once in Visual Studio Code. https://stackoverflow.com/questions/38529937/running-two-projects-at-once-in-visual-studio-code.
