
function doSomethingInterval() 
{
  setTimeout(sac2,2000);
  function sac2()
  {
	  console.log('test relay function');
  }
 }


module.exports.doSomethingInterval = doSomethingInterval;

