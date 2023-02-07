

  const btnnext = document.getElementById("btnnext");
  btnnext.addEventListener("click", function() {
    let currentSection = window.location.hash;
    switch (currentSection) {
      case "#card-section":
        window.location.hash = "#tile-section";
        break;
      case "#tile-section":
        window.location.hash = "#hacker-section";
        break;
        case "#hacker-section":
            window.location.hash = "#hacker-section";
            break;
      default:
        window.location.hash = "#card-section";
        break;
    }
  });

  const  btnprev= document.getElementById("btnprev");
  btnprev.addEventListener("click", function() {
    let currentSection = window.location.hash;
    switch (currentSection) {
      case "#hacker-section":
        window.location.hash = "#tile-section";
        break;
      case "#tile-section":
        window.location.hash = "#card-section";
        break;
        case "#card-sectionn":
            window.location.hash = "#card-section";
            break;
      default:
        window.location.hash = "#card-section";
        break;
    }
  });

