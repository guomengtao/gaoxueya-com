export function initBusuanzi() {
    // 加载 Busuanzi 脚本
    const script = document.createElement('script');
    script.async = true;
    script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    document.head.appendChild(script);

    // 创建显示容器
    const container = document.createElement('div');
    container.id = 'busuanzi_container';
    container.style.fontSize = '16px';
    container.style.margin = '10px 0';
    container.style.lineHeight = '1.6';

    container.innerHTML = `
        <div>Total site visits: <span id="busuanzi_value_site_pv"></span></div>
        <div>Total unique visitors: <span id="busuanzi_value_site_uv"></span></div>
        <div>Total page views: <span id="busuanzi_value_page_pv"></span></div>
    `;

    document.body.appendChild(container);
}
