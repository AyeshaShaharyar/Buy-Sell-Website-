// Client facing scripts here
$(document).ready(function () {

  // Attach a submit handler to the form
  $(".like-icon").on("click", function () {
    const id = $(this).attr("id");
    console.log(id);

    $.ajax({
      type: "POST",
      url: "/books/favorites",
      data: {id: id},
      success: function (data) {
        console.log("success");
      },
    });
  });
});
