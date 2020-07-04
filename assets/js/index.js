let intercomHasOpened = false;

$(".btn-intercom-init").click(function () {
  if (intercomHasOpened) {
    intercomHasOpened = false;
    $(".btn-intercom-icon").removeClass("btn-intercom-open");
    $(".btn-intercom-icon").addClass("btn-intercom-close");
    $(".popup-intercom").removeClass("popup-intercom-open");
  } else {
    intercomHasOpened = true;
    $(".btn-intercom-icon").removeClass("btn-intercom-close");
    $(".btn-intercom-icon").addClass("btn-intercom-open");

    $(".popup-intercom").addClass("popup-intercom-open");
  }
});
