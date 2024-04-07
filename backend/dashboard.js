const DEPOP_URL = "https://www.depop.com";

document.getElementById("btn_start").addEventListener("click", function () {
  const keywords = document.getElementById("inp_keywords").value;
  window.open(
    DEPOP_URL + "/search?" + new URLSearchParams({ q: keywords }).toString()
  );
});
