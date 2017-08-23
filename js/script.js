$(document).ready(function() {
  // Get JSON

  $.getJSON("./js/table.json", function(data) {
    var tr;
    for (var i = 0; i < data.length; i++) {
      switch (data[i].browser) {

        case "IE":
          create("iecol");
          break;

        case "GC":
          create("gccol");
          break;

        case "MF":
          create("mfcol");
          break;

        case "SF":
          create("sfcol");
          break;
      }
    }

    function create(browser) {
      // console.log(data.length);
      div = $("#" + browser);
      div.append('<div id="box" class="' + data[i].class + '" title="' + data[i].comment + '">' + data[i].os + " / " + ' <a href=" ' + data[i].link + '" id="link" target="_blank" data-link="'+ data[i].link + '"> ' + data[i].ver + ' </a> <span aria-hidden="true" class="glyphicon glyphicon-'+ data[i].icon +'"></div>');
      $(browser).append(div);
    }
  });


  $('body').on('click', 'div#box', function(e) {
    var comment = $(this).attr("title");
    var className = $(this ).attr("class");
    var link =   $(this).daa("[data-link]");
    var os = $(e.target).text();
    var browser = $(e.target).parent().find('h4').html();
    console.log(link)
    // console.log("I am the text variable" + os);
    // console.log("I am the text variable" + browser);
    // console.log(className);
    // console.log(comment);
    switch (className) {
      case "box-danger":
        $(".keytext").hide().eq(0).show(500);
        appendComment(comment, os, browser);
        addActive();
        break;

      case "box-warning":
        $(".keytext").hide().eq(1).show(500);
        appendComment(comment, os, browser);
        addActive();
        break;

      case "box-info":
        $(".keytext").hide().eq(2).show(500);
        appendComment(comment, os, browser);
        addActive();
        break;

      case "box-success":
        $(".keytext").hide().eq(3).show(500);
        appendComment(comment, os, browser);
        addActive();
        break;

      case "undefined":
        $(".keytext").hide();
        break;
    }

    function addActive() {
      $('div, span').removeClass('active');
      if($(e.target).is('#box')) {
      $(e.target).toggleClass('active');
      }
      else{
        $(e.target).closest('div').addClass('active');
      }

      // console.log("i am the e target" + e.target.nodeName);
      // console.log("i am the e target");
    }

    function appendComment(text, os) {
      if(typeof text === 'undefined'){
      $(".comment").empty();
      $(".device").empty();
      }
      else {
        $(".device").empty().append('<h2>' + browser + ' - '+ os + '</h2>');
        $(".comment").empty().append('<h3>Updates</h3>');
        $(".comment").append('<p>' + comment + '</p>');
      }

    }
  });
});
