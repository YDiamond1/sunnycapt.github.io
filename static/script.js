function runSounds(){
  Array('psx.wav', 'boon.wav').forEach(v=>{
	 var audio = new Audio('/static/sound/' + v);
	 audio.loop = true;
   audio.autoplay = true;
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

function showRepo(jsonRepo){
  let tmp = document.createElement('div');
  tmp.classList.add('blacked', 'repo');
  tmp.innerHTML = '<div class="link">' + 
                    `<a href="${jsonRepo.html_url}">${jsonRepo.name}</a>` +
                  '</div>' +
                  '<div class="details">' +
                    jsonRepo.description
                  '</div>';
  document.getElementById('projects').append(tmp);
}

async function setRepos(userName){
  let response = await fetch(`//api.github.com/users/${userName}/repos`);
  let jsonRepos = await response.json();
  jsonRepos.forEach(jsonRepo=>showRepo(jsonRepo));
}

function onLoad(){
  setPGPpk();
  setRepos('SunnyCapt');
  runSounds();
};