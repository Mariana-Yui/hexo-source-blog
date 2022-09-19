var banner = document.getElementById("banner");

if (["/archives/", "/tags/"].includes(location.pathname)) {
  banner.style.backgroundPositionY = "20%";
}

jQuery("figure.highlight").click(function (e) {
  if ($(e.target).hasClass("icon-arrowdown")) {
    $(e.target).removeClass("icon-arrowdown").addClass("icon-arrowup");
    $(this).removeClass("fold");
  } else if ($(e.target).hasClass("icon-arrowup")) {
    $(e.target).removeClass("icon-arrowup").addClass("icon-arrowdown");
    $(this).addClass("fold");
  }
});

jQuery("figure.highlight").each((idx, val) => {
  $(val).addClass("fold");
});
