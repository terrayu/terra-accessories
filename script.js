
function setLang(lang) {
  document.querySelectorAll('.en').forEach(e => e.style.display = lang === 'en' ? 'block' : 'none');
  document.querySelectorAll('.mm').forEach(e => e.style.display = lang === 'mm' ? 'block' : 'none');
}

document.querySelectorAll('.price').forEach(p => {
  p.innerText = p.dataset.price + " MMK";
});

function orderTikTok(product) {
  const msg = `Hello TERRA Accessories,
Product: ${product}
Quantity:
Township:`;
  navigator.clipboard.writeText(msg);
  window.open("https://www.tiktok.com/@youraccount", "_blank");
}
