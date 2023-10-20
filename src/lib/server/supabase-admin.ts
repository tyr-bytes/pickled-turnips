import type { Database } from "$lib/supabase-types";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_SERVICE_ROLE_KEY } from "$env/static/private";
import { PUBLIC_SUPABASE_URL } from "$env/static/public";

export const supabaseAdmin = createClient<Database>(PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);