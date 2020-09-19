## UIR-Editor Bachelor Project

UIR-Editor

A web application used to display TCPH-queries compiled in the Umbra Intermediate Representation language, built with React, TypeScript and CSS.

## Project Screenshots

![Screenshot](public/screenshots/showcaseapp.png?raw=true 'UIR-Editor: App')
![Screenshot](public/screenshots/showcasechildparent.png?raw=true 'UIR-Editor: Child / Parent')
![Screenshot](public/screenshots/showcaserename.png?raw=true 'UIR-Editor: Renaming')
![Screenshot](public/screenshots/showcasecomment.png?raw=true 'UIR-Editor: Comments')
![Screenshot](public/screenshots/showcasefolding.png?raw=true 'UIR-Editor: Folding')
![Screenshot](public/screenshots/showcasetargettree.png?raw=true 'UIR-Editor: Target Tree')

## Installation and Setup

Clone this repository. Node and npm is required.

1. `npm install`

2. optional: start python server by running the file: `server/static_server.py` (alternatively local files will be used)

3. `npm start`

App is hostet on `localhost:3000`

Server is hostet on `localhost:8000`

## Description

# Background

# Features

## Reflection

-   This project was created as my Bachelors Project at the chair for database systems of the Technical University of Munich.

-   The goal was to build a tool for visualizing dynamically generated database code of the compiler language Umbra Intermediate Representation (UIR).

-   The main focus of this project was to make it easier to engage with UIR code. This includes helping professionals analyzing and debugging the code as well as providing an easy entry point for interested users to start understanding the UmbraIR language.

-   Some challenges occurred when combining the monaco editor framework (on which this application is based) together with TypeScript as little documentation for this exists so far. It was also challenging to make sure that the provided .json files of the UIR code would be represented correctly within the editor and could be analyzed.

-   The tools used for this project were mainly [VS Code](https://code.visualstudio.com/) as a code editor and reference for some features, [Monaco Editor Playground](https://microsoft.github.io/monaco-editor/playground.html) for exploring monaco features and [D3js](https://d3js.org/) for visualization.
