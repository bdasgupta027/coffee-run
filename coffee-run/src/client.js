import { createClient } from "@supabase/supabase-js";

const URL = "https://jpokazoongmqwztstssz.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impwb2them9vbmdtcXd6dHN0c3N6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTAxMTY3NSwiZXhwIjoxOTk2NTg3Njc1fQ.B_KjMGUORznoet2maACdTqAdYsMcoSFM3ys90mm8P6o";
const supabase = createClient(URL, API_KEY);

export { supabase };