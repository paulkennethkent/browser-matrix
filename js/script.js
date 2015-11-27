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
      div.append('<div class="' + data[i].class + '" title="' + data[i].comment + '">' + data[i].os + " / " + data[i].ver + ' <span aria-hidden="true" class="glyphicon glyphicon-' + data[i].icon + '"></span>' + '</div>');
      $(browser).append(div);
    }
  });


  $('body').on('click', 'div', function() {

    var comment = $(this).attr("title");
    var className = $(this).attr("class");
    console.log(className);
    console.log(comment);
    switch (className) {
      case "box-danger":
        $(".keytext").hide().eq(0).show(500);
        appendComment(comment);
        break;

      case "box-warning":
        $(".keytext").hide().eq(1).show(500);
        appendComment(comment);
        break;

      case "box-info":
        $(".keytext").hide().eq(2).show(500);
        appendComment(comment);
        break;

      case "box-success":
        $(".keytext").hide().eq(3).show(500);
        appendComment(comment);
        break;

      case "undefined":
        $(".keytext").hide();
        break;
    }

    function appendComment(text) {
      if(typeof text === 'undefined'){
      $(".comment").empty();
      }
      else {
        $(".comment").empty().append('<h3>Updates</h3>');
        $(".comment").append('<p>' + comment + '</p>');
      }

    }
  });
});
