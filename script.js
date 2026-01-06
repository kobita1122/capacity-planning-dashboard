const data = [
  { resource: "CPU", current: 60, projected: 0 },
  { resource: "Memory", current: 70, projected: 0 },
  { resource: "Storage", current: 80, projected: 0 }
];

const tbody = document.getElementById("capacity");

function render() {
  tbody.innerHTML = "";
  data.forEach(r => {
    const status = r.projected > 85 ? "alert" : "safe";
    tbody.innerHTML += `
      <tr>
        <td>${r.resource}</td>
        <td>${r.current}%</td>
        <td>${r.projected}%</td>
        <td class="${status}">
          ${status === "alert" ? "Scale Needed" : "OK"}
        </td>
      </tr>
    `;
  });
}

function forecast() {
  data.forEach(r => {
    r.projected = r.current + Math.floor(Math.random() * 30);
  });
  render();
}

render();
