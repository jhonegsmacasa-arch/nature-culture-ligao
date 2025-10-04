
const data = {
  1:{title:'St. Stephen Protomartyr Church', long:'Historic parish and community landmark.'},
  2:{title:'Fallen Sons of Ligao', long:'Memorial honoring local heroes.'},
  3:{title:'Divine Mercy Shrine and Monastery of the Carmelite Nuns of the Holy Trinity', long:'A peaceful spiritual retreat.'},
  4:{title:'Bambusetum Park', long:'Bamboo groves and picnic areas.'},
  5:{title:'Kawa-kawa Hill', long:'Scenic hill popular at sunrise and sunset.'},
  6:{title:'Ilah Nature Park', long:'Nature trails and birdwatching.'},
  7:{title:'Paayahayan sa Bulod', long:'Lookout with expansive valley views.'},
  8:{title:'Hobbit Hill', long:'Whimsical family-friendly hill with cottages.'},
  9:{title:'Tigbao Highlands', long:'Highlands ideal for camping and stargazing.'},
  10:{title:'Coco Farm Resort', long:'Resort with pools and cottages.'},
  11:{title:'Burok-burukan Hidden Spring Resort', long:'Hidden springs and natural pools.'},
  12:{title:'The Campsite — Mt. Masaraga', long:'Trailhead and campsite for trekkers.'},
  13:{title:'Ligao City Library', long:'Public library with programs and archives.'}
};

document.querySelectorAll('.card .view').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const id = e.currentTarget.getAttribute('data-id');
    showModal(id);
  });
});

function showModal(id){
  const modal = document.getElementById('modalBackdrop');
  const content = document.getElementById('modalContent');
  const item = data[id];
  content.innerHTML = `
    <h2>${item.title}</h2>
    <p style="color:#6b7280">${item.long}</p>
    <div style="margin-top:8px;display:flex;gap:8px">
      <a class="btn" target="_blank" href="https://www.google.com/maps/search/${encodeURIComponent(item.title + ' Ligao City')}">Open in Google Maps</a>
      <button class="btn ghost" id="closeInModal">Close</button>
    </div>
  `;
  modal.style.display = 'flex';
  document.getElementById('closeInModal').addEventListener('click', closeModal);
}

function closeModal(){ document.getElementById('modalBackdrop').style.display='none' }
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('modalBackdrop').addEventListener('click', e=>{ if(e.target.id==='modalBackdrop') closeModal(); });

// search filter
const filter = document.getElementById('filter');
const clearBtn = document.getElementById('clearBtn');
filter.addEventListener('input', ()=>{
  const q = filter.value.trim().toLowerCase();
  document.querySelectorAll('.card').forEach(card=>{
    const title = card.dataset.title.toLowerCase();
    const type = card.dataset.type.toLowerCase();
    const text = card.querySelector('.short').innerText.toLowerCase();
    if(!q || title.includes(q) || type.includes(q) || text.includes(q)) card.style.display = '';
    else card.style.display = 'none';
  });
});
clearBtn.addEventListener('click', ()=>{ filter.value=''; filter.dispatchEvent(new Event('input')); });
