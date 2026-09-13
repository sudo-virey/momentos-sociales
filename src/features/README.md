# Feature organization

The app is organized by product area so it can grow without turning route files into large files.

- `catalog/`: public catalog UI and catalog-specific components.
- `templates/`: template definitions, public catalog metadata, and helper exports.

Recommended next feature folders as the product grows:

- `checkout/`: payment flow, selected package, order confirmation.
- `plans/`: package limits such as publication days, visits, and ad-free availability.
- `invitations/`: editor, preview, public invitation rendering, RSVP experience.
- `auth/`: auth-specific UI and session helpers when real auth is connected.

Route files in `src/app` should stay small. They should import feature components and handle Next.js routing concerns only.

Server-side persistence boundaries live in `src/server`. Pages and API routes should call repositories/services there instead of calling Supabase or payment providers directly.
