import { sendVisitData } from './supabase.js';
import { initBusuanzi } from './busuanzi.js';

(function(){
    sendVisitData();
    initBusuanzi();
})();
