//import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';
//import { getDomain, getTimestamp } from './utils.js';

export function sendVisitData() {
    const data = {
        domain: getDomain(),
        path: location.pathname,
        title: document.title,
        user_agent: navigator.userAgent,
        timestamp: getTimestamp()
    };

    fetch(`${SUPABASE_URL}/rest/v1/site_visits`, {
        method: 'POST',
        headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
            'Content-Type': 'application/json',
            'Prefer': 'return=minimal'
        },
        body: JSON.stringify(data)
    }).catch(err => console.error('Supabase 访问统计错误:', err));
}
