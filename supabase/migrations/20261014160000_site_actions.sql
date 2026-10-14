create table public.site_actions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  action text not null check (action in ('call', 'form', 'eventbrite', 'email')),
  detail text,
  email text,
  name text,
  phone text,
  traffic_source text not null check (traffic_source in ('google_ads', 'google_organic', 'direct', 'other')),
  page_path text,
  landing_path text,
  landing_query text,
  referrer text,
  gclid text,
  gbraid text,
  wbraid text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  gad_source text,
  gad_campaignid text,
  visitor_id text
);

create index site_actions_created_at_idx on public.site_actions (created_at desc);
create index site_actions_action_idx on public.site_actions (action, created_at desc);
create index site_actions_source_idx on public.site_actions (traffic_source, utm_term);

alter table public.site_actions enable row level security;

revoke all on table public.site_actions from anon, authenticated;
grant select, insert on table public.site_actions to service_role;
grant insert on public.site_actions to anon;

create policy "site can log an action"
on public.site_actions
for insert
to anon
with check (
  action in ('call', 'form', 'eventbrite', 'email')
  and traffic_source in ('google_ads', 'google_organic', 'direct', 'other')
);
