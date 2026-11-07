// Blog pages: theme switch, mobile menu, WhatsApp links. (site.js expects the home page sections.)
const WA = "918922962849";
const root = document.documentElement;
const isDark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
function syncShots() {
  const want = isDark() ? "/dark/" : "/light/";
  document.querySelectorAll('img[src*="assets/screens/"]').forEach(img => {
    const src = img.getAttribute("src").replace(/\/(dark|light)\//, want);
    if (src !== img.getAttribute("src")) img.setAttribute("src", src);
  });
}
syncShots();
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncShots);
document.getElementById("themeBtn")?.addEventListener("click", () => {
  root.dataset.theme = isDark() ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
  syncShots();
});
const menuBtn = document.getElementById("menuBtn"), navLinks = document.getElementById("navLinks");
menuBtn?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
document.querySelectorAll("[data-wa-text]").forEach(a => {
  a.href = `https://wa.me/${WA}?text=${encodeURIComponent(a.dataset.waText)}`;
  a.target = "_blank"; a.rel = "noopener";
});
