// JavaScript
$(document).ready(function () {
  $.get("https://jsonplaceholder.typicode.com/albums", function (albums) {
    albums.slice(0, 10).forEach((album) => {
      $("#albums").append(
        `<div class="album" data-id="${album.id}">${album.title}</div>`
      );
    });
  });

  $(document).on('click', '.album', function() {
    let albumId = $(this).data('id');
    $.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, function(data) {
      photos = data.slice(0, 20);
      $('#photos').empty().show();
      photos.forEach((photo, index) => {
        $('#photos').append(`<div class="photo" data-url="${photo.url}" data-index="${index}"> <h4>${photo.title}</h4> <img src="${photo.thumbnailUrl}" alt="${photo.title}"></div>`);
      });
    });
  });
  $(document).on('click', '.photo', function() {
    currentPhotoIndex = $(this).data('index');
    updateLightbox();
    $('#lightbox').show();
  });

  $('#prev').click(function(e) {
    e.stopPropagation();
    if (currentPhotoIndex > 0) {
      currentPhotoIndex--;
      updateLightbox();
    }
  });

  $('#next').click(function(e) {
    e.stopPropagation();
    if (currentPhotoIndex < photos.length - 1) {
      currentPhotoIndex++;
      updateLightbox();
    }
  });

  function updateLightbox() {
    $('#lightbox-img').attr('src', photos[currentPhotoIndex].url);
  }
  $("#lightbox").click(function () {
    $(this).hide();
  });
$("#new-photo-form").submit(function (e) {
    e.preventDefault();
    let formData = $(this).serialize();
    $.post(
        "https://jsonplaceholder.typicode.com/photos",
        formData,
        function (response) {
            console.log(response);
            $("#new-photo-form input[type='text']").val("");
            $("#new-photo-form textarea").val("");
            $("#communication").text("Photo created successfully!");
        }
    );
});
  $(document).keyup(function(e) {
  if (e.key === "Escape") { 
    $('#lightbox').hide();
  } else if (e.key === "ArrowRight") {
    if (currentPhotoIndex < photos.length - 1) {
      currentPhotoIndex++;
      updateLightbox();
    }
  } else if (e.key === "ArrowLeft") {
    if (currentPhotoIndex > 0) {
      currentPhotoIndex--;
      updateLightbox();
    }
  }
});
});
