export const fakeApi = (str, callback) => {
  console.log('I am fake')
  setTimeout(function() {
      callback('your data');
  }, 3000);
}