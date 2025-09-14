
function getCarAge(yearManufactured) {
    const currentYear = 2025; 
    let age = currentYear - yearManufactured; 
    return age > 0 ? age : 0; 
  }
  
  // Function to format car details 
  function formatCarDetails(carName, year) {
    const age = getCarAge(year); 
    return `${carName} (${year}) - ${age} years old`;
  }
  
  // Example usage of functions 
  function displayCarInfo() {
    let carName = "Shelby Cobra"; 
    const year = 1967; 
    console.log(formatCarDetails(carName, year)); 
  }
  

  displayCarInfo();
  
  // Part 3:
  function toggleCardFlip(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle("flipped"); 
  }
  
  // Function to toggle modal visibility 
  function toggleModal(modalId, show) {
    const modal = document.getElementById(modalId);
    modal.style.display = show ? "flex" : "none"; 
  }
  
  // Interactive Elements
  document.getElementById("flipButton").addEventListener("click", () => {
    toggleCardFlip("carFlipCard"); 
  });
  
  document.getElementById("openModal").addEventListener("click", () => {
    toggleModal("modal", true); 
  });
  
  document.getElementById("closeModal").addEventListener("click", () => {
    toggleModal("modal", false); 
  });
  

  document.getElementById("modal").addEventListener("click", (event) => {
    if (event.target === document.getElementById("modal")) {
      toggleModal("modal", false);
    }
  });