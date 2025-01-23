$(document).ready(function () {

    var imageModal = $("#image-modal")
    var pageHeader = $(".page-header")

    $(".project-image").click(function () {
        imageModal.css("display", "block");
        $("#img-container").attr("src", $(this).attr("src"));
        $("#caption").text($(this).attr("alt"));
        pageHeader.css("position", "static");
    })

    $("#image-modal .close").click(function () {
        imageModal.css("display", "none");
        pageHeader.css("position",  "fixed");
    })
});
/* // Get the modal
var modal = document.getElementById("image-modal");

var header = document.getElementsByClassName("page-header")[0];

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img01 = document.getElementById("image-01");
var modalImg = document.getElementById("img-container");
var captionText = document.getElementById("caption");
img01.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    header.style.position = "static";
}

// Get the <span> element that closes the modal
var closeSpan = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function () {
    modal.style.display = "none";
    header.style.position = "fixed";
} */