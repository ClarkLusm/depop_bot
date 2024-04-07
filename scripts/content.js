const DEPOP_URL = "https://www.depop.com";

function findSellers() {
  if (window.location.pathname === "/search/") {
    const imgs = document.querySelectorAll(
      'div[data-testid="primaryProductImage"] .fmdgqI'
    );
    imgs.forEach((img, i) => {
      if (i) return;
      if (img) {
        const sellerText = img.getAttribute("alt");
        if (sellerText) {
          const sellerArrs = sellerText.split(' ');
          const seller = sellerArrs[sellerArrs.length - 1]
          if (seller) {
            window.open(`/${seller.trim()}/sold`);
          }
        }
      }
    });
  }
}

findSellers();
