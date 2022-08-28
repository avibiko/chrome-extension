const oldFun = window.ethereum.request;
const dangerous_methods = ['eth_sign', 'personal_sign', 'eth_accounts'];
window.ethereum.request = (x) => {
  if(x.method && dangerous_methods.indexOf(x.method) > -1 ){
    alert(`Alert: this action ${methodToDescription[x.method]}`);
  }

  console.log(JSON.stringify(x));
  return oldFun(x);
}

const methodToDescription = {
  "eth_accounts": "will return the address of the most recently used account on your metamask extension",
  "eth_sign": "can be used to get your approval on transactions, or any other data, making it a dangerous",
}