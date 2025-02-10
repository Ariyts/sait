function toggleAnswer(id) {
  const answer = document.getElementById(id);
  const icon = document.getElementById('icon' + id.slice(-1));
  if (answer.style.display === "none") {
    answer.style.display = "block";
    icon.style.transform = "rotate(180deg)";
  } else {
    answer.style.display = "none";
    icon.style.transform = "rotate(0deg)";
  }
}