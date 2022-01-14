
// Client facing scripts here
$(document).ready(function () {

  // Attach a submit handler to the form
  $(".like-icon").on("click", function () {
    const id = $(this).attr("id");
    $(this).css("color", "red");

    $.ajax({
      type: "POST",
      url: "/books/favorites",
      data: {id: id},
      success: function (data) {
        console.log("success");
      },
    });
  });

  const getUser =  function(id){
    console.log("line21app");
    return db.query(`SELECT * FROM users WHERE id = $1`, [id])

    .then(data => {
    const user = console.log("userObj", data.rows);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }
  getUser(5);

  $('#sold').on("click", (function() {$(this).css('color', 'blue') }));

});




