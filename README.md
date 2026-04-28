# RE/MAX Preferred Office Map

Static directory with Cloudflare Pages live-edit support.

## Cloudflare Pages Settings

- Build command: leave blank
- Build output directory: `/`
- Root directory: leave blank
- Custom domain: `rp-officemap.ideatransmuter.com`

## Required Cloudflare Bindings

Create a Workers KV namespace and bind it to:

```text
DIRECTORY_KV
```

Add an environment variable:

```text
ADMIN_PASSWORD=your-admin-password
```

The browser never receives this secret. Admin edits are saved through `functions/api/directory.js`.
