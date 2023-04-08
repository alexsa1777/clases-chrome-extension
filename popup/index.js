const btnScripting = document.getElementById("btncomunicacion");
const btnScriptingBackground = document.getElementById("btncomunicacionbckg");

btnScripting.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  let port = chrome.tabs.connect(tab.id, { name: "popup" });
  port.postMessage({ message: "hola" });
  port.onMessage.addListener(function ({ message }) {
    alert(message);
  });
});

btnScriptingBackground.addEventListener("click", async () => {
  var port = chrome.runtime.connect({ name: "popup-background" });
  port.postMessage({ message: "Hola BD" });
  port.onMessage.addListener(function ({ message }) {
    alert(message);
  });
});

// function alertHelloWorld() {
//   // alert("Hello World");
//   let getJobs = [...document.querySelectorAll('[id*="jobcard-"]')]
//   const jobs = getJobs.map((jobcard) => {
//     const [
//       { href: url },
//       {
//         children: [
//           {
//             children: [
//               { innerText: date },
//               { innerText: title },
//               { innerText: rangeSalary },
//               { innerText: benefits },
//               { innerText: description },
//               { innerText: company },
//             ],
//           },
//         ],
//       },
//     ] = jobcard.children;
//     return {
//       date: date.split("\n")[0],
//       title,
//       rangeSalary,
//       benefits: benefits.split("\n"),
//       description,
//       company: company.split("\n")[0],
//       url,
//     };
//   });
//   console.log(jobs);
// };
