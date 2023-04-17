const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is a h1 tag"),
    React.createElement("h2", {}, "This is a h2 tag"),
  ])
);

const head = React.createElement("h1", { xyz: "abc" }, "First React Code ");

console.log(head);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
