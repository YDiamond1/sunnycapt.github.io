function runSounds(){
  Array('psx.wav', 'boon.wav').forEach(v=>{
	 var audio=new Audio('/static/sound/' + v);
	 audio.loop=true;
   audio.autoplay=true;
	 audio.play().catch(err=>{document.getElementById('gf1').addEventListener('click', runSounds)});
   document.getElementById('gf1').removeEventListener('click', runSounds);
  });
}

async function setPGPpk(){
  let pgpArticle = document.getElementById('PGP')
  let response = await fetch('static/public_key.asc');
  let key = await response.text();
  pgpArticle.innerText = key;
}

setPGPpk();
runSounds();