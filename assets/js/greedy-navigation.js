const nav = document.querySelector("#site-nav");
const visible = nav.querySelector(".visible-links");
const hidden = nav.querySelector(".hidden-links");
const button = nav.querySelector("button");

const PERSIST_CLASS = "persist";
const BUFFER = 16; // spacing buffer
const COLLAPSE_BUTTON_WIDTH_FALLBACK = 40;

button.addEventListener("click", () => {
  hidden.classList.toggle("hidden");
  button.classList.toggle("close");
  button.setAttribute("aria-expanded", String(!hidden.classList.contains("hidden")));
});

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target)) {
    hidden.classList.add("hidden");
    button.classList.remove("close");
    button.setAttribute("aria-expanded", "false");
  }
});

function restoreAll() {
  const items = Array.from(hidden.children);
  items.forEach(item => {
    const persistTail = visible.querySelector(`.${PERSIST_CLASS}:last-child`);
    if (persistTail) {
      visible.insertBefore(item, persistTail);
    } else {
      visible.appendChild(item);
    }
  });
}

function getCollapseButtonWidth() {
  const value = getComputedStyle(nav).getPropertyValue("--nav-control-size").trim();
  const amount = parseFloat(value);

  if (!Number.isFinite(amount)) {
    return COLLAPSE_BUTTON_WIDTH_FALLBACK;
  }

  if (value.endsWith("rem")) {
    return amount * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }

  if (value.endsWith("em")) {
    return amount * parseFloat(getComputedStyle(nav).fontSize);
  }

  return amount;
}

function getAvailableWidth() {
  const navWidth = nav.clientWidth;
  const persistWidth = Array.from(visible.children)
    .filter(item => item.classList.contains(PERSIST_CLASS))
    .reduce((total, item) => total + item.offsetWidth, 0);
  const buttonWidth = button.offsetWidth || getCollapseButtonWidth();

  return navWidth - persistWidth - buttonWidth - BUFFER;
}

function updateNav() {
  restoreAll();

  const items = Array.from(visible.children);
  const available = getAvailableWidth();

  let used = 0;

  for (let item of items) {
    const isPersist = item.classList.contains(PERSIST_CLASS);
    const width = item.offsetWidth;

    if (isPersist) {
      continue;
    }

    if (used + width > available) {
      hidden.appendChild(item);
    } else {
      used += width;
    }
  }

  if (hidden.children.length > 0) {
    button.classList.remove("hidden");
    nav.classList.add("has-hidden-links");
  } else {
    button.classList.add("hidden");
    nav.classList.remove("has-hidden-links");
    hidden.classList.add("hidden");
    button.classList.remove("close");
    button.setAttribute("aria-expanded", "false");
  }
}

const observer = new ResizeObserver(() => {
  updateNav();
});

observer.observe(nav);

window.addEventListener("DOMContentLoaded", updateNav);
