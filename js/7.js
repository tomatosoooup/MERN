// Я використовую https модуль для того щоб зробити HTTP запит і отримати дані зображення з url
const https = require("https");

const getBase64FromUrl = (url) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        // Я очікую поки всі дані було отримано
        response.on("end", () => {
          // Конвертую
          const base64 = Buffer.from(data).toString("base64");
          const mimeType = "image/png";
          const base64String = `data:${mimeType};base64,${base64}`;
          resolve(base64String);
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
};

getBase64FromUrl(
  "https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8"
)
  .then(console.log)
  .catch(console.error);
