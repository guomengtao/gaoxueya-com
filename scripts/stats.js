(function(){
    const domain = new URLSearchParams(window.location.search).get('domain') || location.hostname;

    const data = {
        domain: domain,
        path: location.pathname,
        title: document.title,
        user_agent: navigator.userAgent,
        timestamp: new Date().toISOString()
    };

    // Supabase 配置
    const SUPABASE_URL = 'https://your-project.supabase.co';
    const SUPABASE_ANON_KEY = '你的匿名公钥';

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

    // --- Busuanzi 集成（可选） ---
    var busuanziScript = document.createElement('script');
    busuanziScript.async = true;
    busuanziScript.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    document.head.appendChild(busuanziScript);

    var container = document.createElement('span');
    container.id = 'busuanzi_container_site_pv';
    container.innerHTML = '本站总访问量 <span id="busuanzi_value_site_pv"></span> 次';
    document.body.appendChild(container);

})();
