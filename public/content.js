const oldFun = window.ethereum.request;
console.log('bfnim');
const dangerous_methods = ['eth_sign', 'personal_sign'];
window.ethereum.request = (x) => {
  if(x.method && dangerous_methods.indexOf(x.method) > -1 ){
    alert('tizaer ya zabal');
  }
  // If you stay here more than 30 seconds then you migth get called again
  console.log(JSON.stringify(x));
  return oldFun(x);
}