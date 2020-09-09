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

export const urlFood = `https://newsapi.org/v2/everything?q=food&from=${oldDate}&to=${todayDate}&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlTechAndroidPopular = `https://newsapi.org/v2/everything?q=android&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlTechApplePopular = `https://newsapi.org/v2/everything?q=apple&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlSciencePopular = `https://newsapi.org/v2/everything?q=science&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlShopping = `https://newsapi.org/v2/everything?q=shopping&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlMicrosoft = `https://newsapi.org/v2/everything?q=microsoft&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlTechnology = `https://newsapi.org/v2/everything?q=technology&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlLockheedMartin = `https://newsapi.org/v2/everything?q=lockheed-martin&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlPolitics = `https://newsapi.org/v2/everything?q=politics&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlMovies = `https://newsapi.org/v2/everything?q=movies&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlClothes = `https://newsapi.org/v2/everything?q=clothes&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlTravel = `https://newsapi.org/v2/everything?q=travel&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlPlayStation = `https://newsapi.org/v2/everything?q=play-station&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlNintendo = `https://newsapi.org/v2/everything?q=nintendo&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlXbox = `https://newsapi.org/v2/everything?q=xbox&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlCars = `https://newsapi.org/v2/everything?q=cars&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlWalmart = `https://newsapi.org/v2/everything?q=walmart&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlAmazon = `https://newsapi.org/v2/everything?q=amazon&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
export const urlStartUps = `https://newsapi.org/v2/everything?q=start-up&from=${oldDate}&to=${todayDate}&sortBy=popularity&apiKey=1d02c3b288344c9db8d4d86966f8412c`;
