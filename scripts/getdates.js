const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();


const lastModifiedP = document.getElementById("lastModified");
lastModifiedP.textContent = document.lastModified;