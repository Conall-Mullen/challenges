console.clear();
const pixelValues = [
  [
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
  ],
  [
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
  ],
];

const canvas = document.querySelector('[data-js="canvas"]');
for (let i = 0; i < pixelValues.length; i++) {
  for (let j = 0; j < pixelValues[i].length; j++) {
    const pixel = document.createElement("div");
    pixel.style["background-color"] = pixelValues[i][j];
    canvas.append(pixel);
  }
}
