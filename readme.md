# Setup 

Make sure gulp is installed on your machine by running 

`npm install gulp`

Run `gulp` to start the webserver. 

# Browser Matrix
This grid is designed to show the user which browsers is supported by platform.

## JSON
The data to build this page is stored in JSON and is loaded when the page renders. Here is an empty JSON object -

### Empty object

`  {
    "browser": "",
    "ver": "",
    link: "" ,"link" : "" ,"os": "",
    "class": "",
    "comment": "",
    "icon" : ""
  } `

### Data   

  "browser" = Internet Browser - IE, GC, MF, SF
  "ver" = Version - Free text
  link: "" ,"link" : "" ,"os" = Operating System - Free text
  "class" = CSS Class - box-danger, box-warning, box-info, box-success
  "comment" = Comment - Free Text
  "icon" = Icon to be displayed - remove, warning-sign, cog, ok

### Example

`{
"browser": "IE",
"ver": "Version 11",
link: "" ,"link" : "" ,"os": "Win 7",
"class": "box-success",
"comment": "Edge 2.0 is fully supported",
"icon" : "ok"
},` 
