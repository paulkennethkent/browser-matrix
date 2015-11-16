// $('#blockBtn').on('click', function (e) {
//   $( ".keytext" ).show("slow");
// });


$(document).ready(function() {
    var $b = $('button');
    var $p = $('.keytext');

    $b.click(function() {
        var i = $b.index(this);
        console.log(i);
        $p.hide().eq(i).show("slow");
        console.log($p);
    });
});

$(document).ready(function() {
    // var $b = $('td');
    // var $p = $('.keytext');
    //
    // $b.hover(function() {
    //     var i = $b.index(this);
    //     console.log(i);
    //     $p.hide().eq(i).show("slow");
    //     console.log($p);
    // })
});

$("td").hover(function() {

    // if ( $( this ).hasClass( "success" ) ) {
    //   $( ".keytext" ).eq(1).show("slow");
    // }
    // else {
    //   $( ".keytext" ).eq(2).show("slow");
    // }

var className = $(this).attr('class');
console.log(className);
switch(className) {
  case "danger":
  $( ".keytext" ).hide().eq(0).show("slow");
  break;

  case "warning":
  $( ".keytext" ).hide().eq(1).show("slow");
  break;

  case "info":
  $( ".keytext" ).hide().eq(2).show("slow");
  break;

  case "success":
  $( ".keytext" ).hide().eq(3).show("slow");
  break;
}


});
