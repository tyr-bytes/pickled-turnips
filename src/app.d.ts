import type { Session, SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "$lib/supabase-types.ts";

declare global {
	///<reference types="stripe-events-types" />
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient<Database>;
			getSession(): Promise<Session | null>;
		}
		interface PageData {
			session: Session | null;
		}
		// interface Platform {}
	}
}

export {};
