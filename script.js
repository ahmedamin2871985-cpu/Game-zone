function showToast(message){const t=document.getElementById('toast');t.textContent=message;t.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>t.classList.remove('show'),2600)}
function playGame(name){showToast('🎮 جاري فتح '+name+' — هذه نسخة تجريبية للموقع');}
