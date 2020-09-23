# UIR-Editor Bachelor Project

UIR-Editor

A web application used to display TPC-H queries compiled in the Umbra Intermediate Representation language, built with React, TypeScript and CSS.

# Installation and Setup

Clone this repository. Node and npm is required.

1. `npm install`

2. **optional**: Start python development server by running the file: `server/static_server.py`

3. `npm start`

App is hosted on `localhost:3000`

Server is hosted on `localhost:8000` (alternatively local files will be used)

# Description

## Motivation & Goal

Reading and analyzing blanc UmbraIR code is strenuous for the user and can lead to mistakes.
Important insights are hard to detect even with sufficient knowledge of the context.
Some details might be missed in the process.
UIR code can contain multiple 100 lines per TPC-H query which makes it quite convoluted.
Available code editors do not offer functionality to traverse such amount of code lines effectively.
The best a user can do currently is scroll through the code.
Additionally there are no tools available to increase perception of context or detail awareness.
This leads to increased time when looking for specific code parts or tracing the code flow.
All these factors can make it hard to understand blanc UIR code and lead to a bad user experience.

The goal of this thesis and the UIR-Editor is to fix these problems for UmbraIR.
By developing a Editor specifically for the UIR language it is possible to tailor its features to best fit the code.
All the features aim to make the code more clear, comprehensive and improve the user experience when working with UIR.
The editor is designed for experienced users of UIR that want to work with the code in a more effective way as well as inexperienced users by providing features that make code digestion easier.
It delivers UIR in colors that highlights the code logic, provides quick content based navigation and follows routines that are familiar to the user.

## Background

UmbraIR is a subset of the popular compiler language LLVM.
UIR provides a similar operation library but includes only the minimal functionality to support the Umbra database system.
This minimizes the overhead of unused code and therefore increases performance in the database.
The UIR-Editor is built specifically for the UIR language and depends on its structure.
In this section we will look at the content most of the UIR-Editor features depend on.
The UML diagram of figure X will be referenced to highlight relationships within the content structure.

content structure erklären pro token / farbe
uml highlight + codezeilen beispiele

-   components: globals, functions -> declarations, definitions (showcasefoldall)
-   blocks: labels (showcasefoldblocks)
-   instructions -> assignments, operation
-   targets -> labels
-   values: variables, constants

## Features

### `Basic`

The UIR-Editor changes the following default settings of the Monaco Editor framework.

-   **Content**: Read only
-   **Font**: 'Courier New', monospace, 14px
-   **Glyph margin**: Activated
-   **Minimap**: Characters disabled

Additionally cursor decoration was added to highlight the current position with a yellow glyph.
Most of the implemented features can also be accessed via the context menu when right clicking on the editor.
A modal containing all the custom keybindings can be opened by pressing `shift + s`.

### `Query Fetching`

On startup the UIR-Editor looks for the Umbra webserver containing the raw TCP-H query files.
If a server is found at the specified URL the 22 TCP-H queries will be requested.
Otherwise the default queries will be loaded.
After that the queries will be converted from .json format to TypeScript objects and saved for the duration of the session.

### `User Interface`

The user interface consists of three main parts:

1. The **TCP-H dropdown** on the top left can be used to change the currently displayed query. Alternatively the shortcut `q` displays the next and `shift + q` the last query.
2. The **text bar** on the top right changes its functionality according to the current status. It is used to display and input information. The user can jump back to the editor by pressing `Enter`.
3. The **status display** in the middle indicates which action will be performed once `Enter` is pressed in the text bar. The status changes depending on the shortcut used and can be set one of the following: (Clicking on the text bar witch the mouse will set the status to SEARCH NODE)

| Status       | Action                                               |
| ------------ | ---------------------------------------------------- |
| CURRENT NODE | Shows the Node selected by the cursor                |
| SEARCH NODE  | Searches the query for a node that matches the input |
| ADD COMMENT  | Adds a comment to the selected Node                  |
| RENAME NODE  | Changes the name of the selected node to the input   |

### `Syntax Highlighting`

Monarch library
Regular Expressions
Tokens & Colors
Theme

### `Node Highlighting`

Similar Nodes
Minimap
Equal name
Globals
Functions

### `Folding`

Definitions
Blocks
Unfold all

### `Hovering`

Variable Occurrences
Comments
Block Tree string

### `Position Grid`

Mouse click or navigation keys set grid
on up / down: cX <= lx ? maxX : lx

### `Feature Toggle`

Toggle features
Tab + StrgF for searching

### `Bookmarks`

Add Bookmark
Remove Bookmark
Reveal Bookmark
Per Query Bookmarks
LocalStorage

### `Comments`

Add Comment
Remove Comment
Remove all Comments
How to see Comment
Comment layering
Comment jumping
Per Query Comments
LocalStorage

### `Renaming`

Add Name
Remove Name
Remove all Names
Per Query Names
LocalStorage

### `Variable Flow`

Occurrence Decorations (Hover)
Current Decorations
Child Decorations
Parent Decorations
MaxDepth

### `Code Jumping`

Search node (Back / Slash)
Next / Prev Node (enter / n)
Jump Back

### `Basic Navigation`

vim no mouse
arrows + hjkl
move left right (m)
Reveal cursor
move start / end

### `Block Tree`

String Representation (hover)
TargetTree Modal

# Future Work

Context Menu submenus
More info
SQL-Inspektor

# Use Cases

## UC#1: Compare C++ to UmbraIR

Showcase data flow in @\_Compare:

1. Start by defining input parameters via RENAME (left -> A / right -> B)
2. Click on variable to find child node and jump to it.
3. RENAME child according to operation context.
   => For reference: LLVM Doc / Info Button
   **optional:** Add comments for reference

## UC#2: Analyzing big plan_steps

Example TPC-H 1: plan_step_11

1. Start by analyzing body block according to UC#1.
2. Hover over body label or use Block Tree modal (s) to see following blocks.
3. Look for desired target at last line of the block or use target key (t) to jump to next target. (target reference)
4. Use go to block key (g) to jump to the referenced blocks label

## UC#3: Increase Convenience

For regular users:

1. Comments, Names and Bookmarks get saved in local storage
2. Use Bookmarks to instantly find last position (b)
3. Jump between Comments and use them as reference (x)
4. Jump to variables with the same name (n / Enter)
5. Use Folding (f) for better overview of the whole query
6. Use Undo key (u) to go back to last node
7. Change to next query fast (q)
8. Show all keybinds (shift + s)

# Reflection

-   This project was created as my Bachelors Project at the chair for database systems of the Technical University of Munich.

-   The goal was to build a tool for visualizing dynamically generated database code of the compiler language Umbra Intermediate Representation (UIR).

-   The main focus of this project was to make it easier to engage with UIR code. This includes helping professionals analyzing and debugging the code as well as providing an easy entry point for interested users to start understanding the UmbraIR language.

-   Some challenges occurred when combining the monaco editor framework (on which this application is based) together with TypeScript as little documentation for this exists so far. It was also challenging to make sure that the provided .json files of the UIR code would be represented correctly within the editor and could be analyzed.

-   The tools used for this project were mainly [Visual Studio Code](https://code.visualstudio.com/) as a code editor and reference for some features, [Monaco Editor Playground](https://microsoft.github.io/monaco-editor/playground.html) for exploring monaco features and [D3js](https://d3js.org/) for visualization.

# Project Images

#### _UIR-Editor_

![Screenshot](public/img/showcaseapp.png?raw=true 'UIR-Editor: App')

#### _Folding_

![Screenshot](public/img/showcasefolding.png?raw=true 'UIR-Editor: Folding')

#### _Variable Flow_

![Screenshot](public/img/showcasechildparent.png?raw=true 'UIR-Editor: Child / Parent')

#### _Renaming_

![Screenshot](public/img/showcaserename.png?raw=true 'UIR-Editor: Renaming')

#### _Comments_

![Screenshot](public/img/showcasecomment.png?raw=true 'UIR-Editor: Comments')

#### _Block Tree_

![Screenshot](public/img/showcasetargettree.png?raw=true 'UIR-Editor: Block Tree')

#### _Keybindings_

![Screenshot](public/img/keybinds.png?raw=true 'UIR-Editor: Keybindings')

#### _Project Structure_

![Screenshot](public/img/structure.png?raw=true 'UIR-Editor: Project Structure')
