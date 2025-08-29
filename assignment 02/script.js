
//brand and mobile
const mobile = {
  Samsung: ["Galaxy s22", "Galaxy s33", "Galaxy A45s"],
  Oppo: ["OPPO F11", "OPPO Reno 3", "OPPO A25S"],
  Realme: ["Realme C63", "Realme A5s0", "Realme C2i"],
  Tecno: ["Tecno Cammon 16 Premier", "Tecno A3pro", "Tecno Cammon 30"],
};

const brandSelect = document.getElementById("brand");
const modelSelect = document.getElementById("model");
const searchButton = document.getElementById("searchBtn");
const result = document.getElementById("result");

for (let brand in mobile) {
  let option = document.createElement("option");
  option.value = brand;
  option.textContent = brand;
  brandSelect.appendChild(option);
}

brandSelect.addEventListener("change", function () {
  let selectedBrand = this.value;
  modelSelect.innerHTML = '<option value="">-- Select Model --</option>'; // reset
  if (selectedBrand) {
    mobile[selectedBrand].forEach((model) => {
      let opt = document.createElement("option");
      opt.value = model;
      opt.textContent = model;
      modelSelect.appendChild(opt);
    });
    modelSelect.disabled = false;
  } else {
    modelSelect.disabled = true;
  }
});

searchButton.addEventListener("click", function () {
  let brand = brandSelect.value;
  let model = modelSelect.value;
  if (brand && model) {
    result.textContent = `You selected: ${brand} - ${model}`;
  } else {
    result.textContent = "Please select both brand and model!";
  }
});

