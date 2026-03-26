
const SUPABASE_URL="https://yjwgrbnjgsjpbxmevbxb.supabase.co";
const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";
const s=document.createElement("script");
s.src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
document.head.appendChild(s);
s.onload=()=>{window.db=supabase.createClient(SUPABASE_URL,SUPABASE_KEY);}
