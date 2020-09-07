export const url =
  "http://newsapi.org/v2/top-headlines?" +
  "country=us&" +
  "apiKey=1d02c3b288344c9db8d4d86966f8412c";

export const urlEverything =
  "http://newsapi.org/v2/everything?" +
  "country=us&" +
  "apiKey=1d02c3b288344c9db8d4d86966f8412c";

var oldDate = new Date();
oldDate.setDate(oldDate.getDate() - 10);
oldDate.toISOString().slice(0, 10);

var todayDate = new Date().toISOString().slice(0, 10);

export const urlTechAndroid = `https://newsapi.org/v2/everything?q=android&from=${oldDate}&to=${todayDate}&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlTechAndroidPopular = `https://newsapi.org/v2/everything?q=android&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlTechApple = `https://newsapi.org/v2/everything?q=apple&from=${oldDate}&to=${todayDate}&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlTechApplePopular = `https://newsapi.org/v2/everything?q=apple&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlSciencePopular = `https://newsapi.org/v2/everything?q=science&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
