# Invitations data layer

This folder contains the invitation persistence boundary. The app currently uses `mock-invitation-repository.ts` so the product can run without external services.

When Supabase is connected, add a `supabase-invitation-repository.ts` with the same exported functions and switch the exports in `index.ts`. Pages and API routes should keep importing from `@/lib/invitation-store` or `@/server/invitations` instead of calling Supabase directly.
