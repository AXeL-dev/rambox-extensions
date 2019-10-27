function checkUnread() {
  var e = null !== document.querySelector(".ms-FocusZone i[data-icon-name=Inbox]").parentNode.querySelector("span span") ? parseInt(document.querySelector(".ms-FocusZone i[data-icon-name=Inbox]").parentNode.querySelector("span span").innerText) : 0;
  updateBadge("" === e ? 0 : parseInt(e));
}
function updateBadge(e) {
  1 <= e ? rambox.setUnreadCount(e) : rambox.clearUnreadCount();
}
setInterval(checkUnread, 3000);
