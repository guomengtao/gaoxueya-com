// supabase.js

// --- 临时配置（你可以改成自己真实的 Supabase 项目地址和 key） ---
const SUPABASE_URL = "https://your-project.supabase.co"; 
const SUPABASE_ANON_KEY = "your-anon-key";

// --- 辅助函数 ---
function getDomain() {
  return window.location.hostname || "unknown-domain";
}

function getTimestamp() {
  return new Date().toISOString();
}

// --- 主函数 ---
export function sendVisitData() {
  const data = {
    domain: getDomain(),
    path: location.pathname,
    title: document.title,
    user_agent: navigator.userAgent,
    timestamp: getTimestamp()
  };

  console.log("[Stats] sendVisitData called", data);

  fetch(`${SUPABASE_URL}/rest/v1/site_visits`, {
    method: "POST",
    headers: {
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": "Bearer " + SUPABASE_ANON_KEY,
      "Content-Type": "application/json",
      "Prefer": "return=minimal"
    },
    body: JSON.stringify(data)
  }).catch(err => console.error("[Stats] Supabase 访问统计错误:", err));
}
