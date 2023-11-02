/**
 * This script clicks all [+] buttons in a Splunk Cloud page upon any mutation,
 * effectively keeping all JSON event fields permanently expanded.
 */

function autoExpand() {
  function expand() {
    document.querySelectorAll(".jsexpands").forEach((expandButton) => {
      if (expandButton.innerText == "[+]") {
        expandButton.click();
      }
    });

    // exit table overlay (for event highlight) if it's present
    document.querySelector(".modalize-table-overlay")?.click();
  }

  if (document.readyState != "loading") {
    expand();
  } else {
    document.addEventListener("DOMContentLoaded", () => expand());
  }
}

let observer = new MutationObserver(function (_mutations) {
  autoExpand();
});

observer.observe(document.body, {
  attributes: true,
  childList: true,
  characterData: true,
  subtree: true,
});
