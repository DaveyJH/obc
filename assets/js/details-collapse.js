const summary = document.querySelector("details>summary");
const detailsContent = document.querySelector("details>div");
let opened = false;

const changeTitleAttribute = () => {
  opened = !opened;
  summary.setAttribute(
    "title",
    "Click to" + (opened ? " collapse" : " expand")
  );
};

summary.addEventListener("click", changeTitleAttribute);
detailsContent.addEventListener("click", () => summary.click());
