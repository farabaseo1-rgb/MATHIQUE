import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://nnvtbmsmxyuoycqwydny.supabase.co/rest/v1/';
const supabasePublishableKey = 'sb_publishable_wbBcFuv6yOH84WwWdf-vDg_IahE-JoW';

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);
