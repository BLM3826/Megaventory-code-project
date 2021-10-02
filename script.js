function getOrders() {
  $.getJSON("purchaseorders.json", function (data) {
    console.log(data);
    var orderList = document.getElementById("orderList");
    for (var i = 0; i < data.mvPurchaseOrders.length; i++) {
      var li = document.createElement("li");
      orderList.appendChild(li);
      var a = document.createElement("a");
      li.appendChild(a);
      a.innerHTML =
        data.mvPurchaseOrders[i].PurchaseOrderTypeAbbreviation +
        " - " +
        data.mvPurchaseOrders[i].PurchaseOrderNo;
      a.href = "orderInfo.html?id=" + i;
    }
  });
}

function displayOrder() {
  var url = window.location.search.substring(1);
  var orderId = parseInt(url.substring(url.indexOf("=") + 1));
  console.log(orderId);

  $.getJSON("purchaseorders.json", function (data) {
    console.log(data);
    var poAddress = document.getElementById("poAddress");
    var poContact = document.getElementById("poContact");
    var poStatus = document.getElementById("poStatus");
    var poDetails = document.getElementById("poDetails");
  });
}
