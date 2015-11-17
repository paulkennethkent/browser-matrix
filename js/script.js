$(document).ready(function() {
  // Get JSON

  $.getJSON("js/table.json", function(data) {
        var tr;
        for (var i = 0; i < data.length; i++) {
          switch(data[i].browser){

          case "IE" :
          create("iecol");
          break;

          case "GC" :
          create("gccol");
          break;

          case "MF" :
          create("mfcol");
          break;

          case "SF" :
          create("sfcol");
          break;
    }
  }
    function create(browser){
      console.log(data.length);
        div = $("#"+browser);
        div.append('<div class='+data[i].class+' title='+(escape(data[i].comment))+'>'+ data[i].os +" / "+ data[i].ver + ' <span aria-hidden="true" class="glyphicon glyphicon-'+data[i].icon+'"></span>' + '</div>');
        $(browser).append(div);
    }
  });


  //KEY clicks
  var $b = $('button');
  var $p = $('.keytext');

  $b.click(function() {
    var i = $b.index(this);
    console.log(i);
    $p.hide().eq(i).show("slow");
    console.log($p);
  });

  // Table Hover
  $("td").hover(function() {
    var className = $(this).attr('class');
    console.log(className);
    switch (className) {
      case "danger":
        $(".keytext").hide().eq(0).show(500);
        break;

      case "warning":
        $(".keytext").hide().eq(1).show(500);
        break;

      case "info":
        $(".keytext").hide().eq(2).show(500);
        break;

      case "success":
        $(".keytext").hide().eq(3).show(500);
        break;

      case "undefined":
        $(".keytext").hide();
        break;
    }
  });
});
