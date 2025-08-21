export function initBusuanzi() {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js";
    document.head.appendChild(script);

    const container = document.createElement('span');
    container.id = 'busuanzi_container_site_pv';
    container.innerHTML = 'PV <span id="busuanzi_value_site_pv"></span> times';
    document.body.appendChild(container);
}
