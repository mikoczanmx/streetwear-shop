const productTabList = document.querySelector(".product-tabs");

if (productTabList) {
  const productTabs = Array.from(
    productTabList.querySelectorAll('[role="tab"]'),
  );
  const allProductsGrid = document.querySelector("#panel-all .product-grid");

  if (allProductsGrid) {
    document
      .querySelectorAll(".product-panel:not(#panel-all) .product-card")
      .forEach((productCard) => {
        allProductsGrid.append(productCard.cloneNode(true));
      });
  }

  function activateProductTab(tab, moveFocus = false) {
    productTabs.forEach((productTab) => {
      const isActive = productTab === tab;
      const panel = document.getElementById(
        productTab.getAttribute("aria-controls"),
      );

      productTab.classList.toggle("is-active", isActive);
      productTab.setAttribute("aria-selected", String(isActive));
      productTab.tabIndex = isActive ? 0 : -1;

      if (panel) {
        panel.hidden = !isActive;
      }
    });

    if (moveFocus) {
      tab.focus();
    }
  }

  productTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateProductTab(tab));

    tab.addEventListener("keydown", (event) => {
      let nextIndex = index;

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        nextIndex = (index + 1) % productTabs.length;
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        nextIndex = (index - 1 + productTabs.length) % productTabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = productTabs.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      activateProductTab(productTabs[nextIndex], true);
    });
  });
}
