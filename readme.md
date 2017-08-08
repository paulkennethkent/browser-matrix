#Setup 
This REPO uses GULP to compile SASS and to run the website locally. 

Make sure gulp installed globally on your machine by running 

npm install gulp -g 

In the route of the folder the run gulp in your terminal to launch the website. 

#Browser Matrix
This grid is designed to show the user which browsers you platform supports.

##JSON
The data to build this page is stored in JSON and is loaded when the page renders. Here is an empty JSON object -

###Empty object

`  {
    "browser": "",
    "ver": "",
    link: "" ,"link" : "" ,"os": "",
    "class": "",
    "comment": "",
    "icon" : ""
  } `

###Data   

  "browser" = Internet Browser - IE, GC, MF, SF
  "ver" = Version - Free text
  link: "" ,"link" : "" ,"os" = Operating System - Free text
  "class" = CSS Class - box-danger, box-warning, box-info, box-success
  "comment" = Comment - Free Text
  "icon" = Icon to be displayed - remove, warning-sign, cog, ok

###Example

`{
"browser": "IE",
"ver": "Version 11",
link: "" ,"link" : "" ,"os": "Win 7",
"class": "box-success",
"comment": "Edge 2.0 is fully supported",
"icon" : "ok"
},` 
