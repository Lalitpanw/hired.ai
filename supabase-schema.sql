-- Run in Supabase SQL editor

create table public.users (
  id uuid references auth.users primary key,
  email text, name text,
  plan text default 'free',
  sessions_remaining int default 2,
  created_at timestamptz default now()
);

create table public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text, role text,
  created_at timestamptz default now()
);

create table public.sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  role text, jd_snippet text,
  readiness_score int,
  entries jsonb default '[]',
  created_at timestamptz default now()
);

-- RLS
alter table public.users enable row level security;
alter table public.sessions enable row level security;
alter table public.waitlist enable row level security;

create policy "own user" on public.users for all using (auth.uid() = id);
create policy "own sessions" on public.sessions for all using (auth.uid() = user_id);
create policy "insert waitlist" on public.waitlist for insert with check (true);

-- Auto-create user profile on signup
create or replace function handle_new_user() returns trigger language plpgsql security definer as $$
begin
  insert into public.users (id, email, name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();
