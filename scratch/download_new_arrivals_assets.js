const http = require('http');
const fs = require('fs');
const path = require('path');

const assets = [
  { url: "http://localhost:3845/assets/03be42cc336bd696e80df1f1e839fb35c8ba1206.png", filename: "new-hero-vasos.png" },
  { url: "http://localhost:3845/assets/c4f93d969b264319f6fcf4a6a2f8ac830340c0c0.png", filename: "new-trend-1.png" },
  { url: "http://localhost:3845/assets/5e3012afd02c1bc2ce30af0d7f4ad0a6c5867576.png", filename: "new-trend-2.png" },
  { url: "http://localhost:3845/assets/12c17f0b27fcc2f52a8806a9b6f90296e2234a3e.png", filename: "new-trend-3.png" },
  { url: "http://localhost:3845/assets/19cbcf6eb272ce916c47798d7c29e13c2434a0f8.png", filename: "new-trend-4.png" },
  { url: "http://localhost:3845/assets/e052c438127b8c5fe7b9cd040ba5fa127dd846aa.png", filename: "new-more-1.png" },
  { url: "http://localhost:3845/assets/30c3a1c9f3cd3087aef873548f6937dc9530ec50.png", filename: "new-more-2.png" },
  { url: "http://localhost:3845/assets/06fdacbb95aa007a9e98cd56b2241a8b17adb48f.png", filename: "new-more-3.png" },
  { url: "http://localhost:3845/assets/92732f6122d8a3c0c6ab37087630c16f332c2b31.png", filename: "new-more-4.png" },
  { url: "http://localhost:3845/assets/b749ab4b060441a431d355e2d54a5ed8380e62d3.png", filename: "new-more-5.png" }
];

const destDir = path.join(__dirname, '..', 'assets');

assets.forEach(({ url, filename }) => {
  const filePath = path.join(destDir, filename);
  const file = fs.createWriteStream(filePath);
  http.get(url, (res) => {
    if (res.statusCode === 200) {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved ${filename}`);
      });
    } else {
      console.error(`Failed ${filename}: HTTP ${res.statusCode}`);
      file.close();
    }
  }).on('error', (err) => {
    console.error(`Error ${filename}:`, err.message);
  });
});
