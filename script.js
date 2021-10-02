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
    var order = data.mvPurchaseOrders[orderId];
    console.log(order);
    var poAddress = document.getElementById("poAddress");
    poAddress.innerHTML = order.PurchaseOrderAddress;
    var poContact = document.getElementById("poContact");
    poContact.innerHTML = order.PurchaseOrderContactPerson;
    var poStatus = document.getElementById("poStatus");
    poStatus.innerHTML = order.PurchaseOrderStatus;
    var poDetails = document.getElementById("poDetails");
    for (var i = 0; i < order.PurchaseOrderDetails.length; i++) {
      var detRow = document.createElement("tr");
      poDetails.appendChild(detRow);
      var prodSKU = document.createElement("td");
      prodSKU.innerHTML =
        order.PurchaseOrderDetails[i].PurchaseOrderRowProductSKU;
      var quantity = document.createElement("td");
      quantity.innerHTML =
        order.PurchaseOrderDetails[i].PurchaseOrderRowQuantity;
      var unitPrice = document.createElement("td");
      unitPrice.innerHTML =
        order.PurchaseOrderDetails[
          i
        ].PurchaseOrderRowUnitPriceWithoutTaxOrDiscount;
      var totalAmount = document.createElement("td");
      totalAmount.innerHTML =
            order.PurchaseOrderDetails[i].PurchaseOrderRowTotalAmount;
        
        detRow.appendChild(prodSKU);
        detRow.appendChild(quantity);
        detRow.appendChild(unitPrice);
        detRow.appendChild(totalAmount);
    }
  });
}
