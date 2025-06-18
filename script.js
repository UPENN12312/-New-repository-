const tips = [
  "Always know your customer before launching a product.",
  "Cash flow is more important than profit in the early stages.",
  "Invest in branding — people buy from companies they remember.",
  "Keep learning — business trends change fast.",
  "Build a network; opportunities come from connections.",
  "Test your ideas before going all in.",
  "Understand your numbers: sales, expenses, and margins.",
  "Great teams build great businesses.",
  "Automate what you can, delegate what you can’t.",
  "Listen more than you talk in business meetings."
];

const today = new Date();
const tipIndex = today.getDate() % tips.length;
document.getElementById('daily-tip').textContent = tips[tipIndex];
