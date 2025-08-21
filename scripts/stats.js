import { sendVisitData } from './supabase.js';
import { initBusuanzi } from './busuanzi.js';

(function(){
    console.log('[Stats] Script started');

    sendVisitData();
    console.log('[Stats] sendVisitData() called');

    initBusuanzi();
    console.log('[Stats] initBusuanzi() called');

    // --- 测试静态文字 ---
    const testContainer = document.createElement('div');
    testContainer.style.position = 'fixed';
    testContainer.style.bottom = '50px'; // 避免与日期重叠
    testContainer.style.right = '10px';
    testContainer.style.padding = '6px 12px';
    testContainer.style.background = 'rgba(0,0,0,0.6)';
    testContainer.style.color = '#fff';
    testContainer.style.fontSize = '14px';
    testContainer.style.borderRadius = '4px';
    testContainer.style.zIndex = '9999';
    testContainer.style.fontFamily = 'monospace';
    testContainer.textContent = 'Hello World!';

    document.body.appendChild(testContainer);
    console.log('[Stats] Hello World div appended');

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
    console.log('[Stats] Date div appended');
})();
