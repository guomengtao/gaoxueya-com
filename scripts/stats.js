import { sendVisitData } from './supabase.js';
import { initBusuanzi } from './busuanzi.js';

(function(){
    sendVisitData();
    initBusuanzi();

    // --- 增加日期提示 ---
    const dateContainer = document.createElement('div');
    dateContainer.style.position = 'fixed';
    dateContainer.style.bottom = '10px';
    dateContainer.style.right = '10px';
    dateContainer.style.padding = '6px 12px';
    dateContainer.style.background = 'rgba(0,0,0,0.6)';
    dateContainer.style.color = '#fff';
    dateContainer.style.fontSize = '14px';
    dateContainer.style.borderRadius = '4px';
    dateContainer.style.zIndex = '9999';
    dateContainer.style.fontFamily = 'monospace';
    dateContainer.textContent = 'Script executed at: ' + new Date().toLocaleString();

    document.body.appendChild(dateContainer);
})();
