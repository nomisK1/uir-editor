# UIR-Editor

The Umbra database system generates the Umbra Intermediate Representation for efficient query compilation.
Especially for large requests, the data layout of the generated UmbraIR can be expansive.
This makes it difficult to understand the logical structure of the code and complicates the debugging process.

In the context of this thesis, an explorer application is developed that is optimized to display UmbraIR code.
The UIR-Editor is a visualization tool for UmbraIR that supports code interaction through intuitive routines.
The primary goal of the UIR-Editor is to make UmbraIR more understandable by providing helpful features.
The application focuses on increasing the productivity for analysis and debugging workflows.
Therefore the UIR-Editor presents UmbraIR visually and improves transparency through context information.
In addition, convenient navigation features make the code more accessible.

This thesis describes the basic structure of UmbraIR upon which the UIR-Editor is built.
The implemented features of the tool are first documented and then applied in example use case scenarios.

# Documentation

The associated bachelor thesis is located in the project: `public\thesis.pdf`

# Installation and Setup

1. `npm install`

2. `npm start`

Hosted on: `localhost:3000`

Webserver: `https://umbra.db.in.tum.de:25992/irJson`
