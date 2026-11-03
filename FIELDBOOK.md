# Atlas Foundry Fieldbook — v0.1
Free device-local field observation PWA prototype. No backend, accounts, telemetry, external map tiles, or private engineering-plugin code. Retains the existing fieldandsignal.tech domain.

## Included
IndexedDB notebook, editing, search/category filters, recoverable trash/restore, one resized JPEG per record, optional user-initiated GPS with accuracy and timestamp, four-item manual review checklist, CSV export, WGS84 GeoJSON (null geometry when unlocated), JSON backup/restore. Restore validates records before a single transaction and preserves existing IDs. Full backup includes trash and photos; CSV/GeoJSON include active records only. A photo download is available per record.

PWA manifest, 192/512 icons, and a versioned allowlisted service worker cache only the public app assets. The portfolio and private downloads are never cached. Browser-record data is separate from the app cache. No native iOS/Android package or store listing is included.

## Deployment
Upload fieldbook.html, fieldbook.css, fieldbook.mjs, fieldbook-core.mjs, fieldbook-sw.js, fieldbook.webmanifest, fieldbook-icon-192.png, fieldbook-icon-512.png at the portfolio root. The updated index.html links to it. Do not upload any private GIS/CAD source folders. Serve over HTTPS, keeping .mjs JavaScript MIME types. The current pending portfolio commit includes Atlas Foundry branding, GIS emphasis, engineering samples and Trail Ledger; deploy those separately only from the public checkout.

## Device acceptance gate — still pending
1. Open fieldbook.html online over HTTPS on iPhone Safari and Android Chrome.
2. Save, edit and reload synthetic observations. Add a permitted JPEG and verify photo reload/download. Check unsupported format and oversized photo errors.
3. Allow and deny GPS; verify the accuracy and timestamp. No real location is required for synthetic demos.
4. Export CSV/GeoJSON/backup and inspect files. Restore into a fresh browser profile; verify photos, counts, trash and duplicate-ID preservation. Invalid backup must not partially import.
5. Add to Home Screen. Close/reopen in airplane mode after the first online cache completes. Verify app launch, saved observations, edits, and export. Install on each platform separately; browser profiles may have different storage.
6. Test portrait 390px and tablet/desktop widths, keyboard navigation, VoiceOver/TalkBack labels, and download/save UI.
7. Verify a new service-worker version activates after all controlled tabs close. Increment af-fieldbook-v1 for changed assets. No skipWaiting forced data loss.

## Validation completed in this environment
- Node tests: 8 passing cases covering coordinate validation/order, null geometry, CSV quoting/formula handling, manifest/assets and cache scope.
- Browser: initialized IndexedDB; synthetic save; edit; reload persistence; checklist persistence; search; trash and restore passed.
- Browser photo picker stalled, so photo attachment/backup restore were not completed end to end. Browser download event timed out; export content functions passed unit checks but actual phone file delivery remains pending.
- HTTP preview cannot validate secure-context service-worker installation or GPS. No claim of offline or native-device acceptance testing.
- GitHub publishing is blocked by required 2FA verification. No live Fieldbook URL is claimed yet.

## Data notes
Records/photos are not encrypted or synced. Browser data clearing, eviction, or private browsing can remove them. Export backups regularly. Use one editing tab and your organization's approved systems for confidential data. GPS is approximate, not survey-grade; checklist completion is not certification. This app is not a drainage model, design tool, or substitute for field safety procedures. App source delivered to a browser is visible; private Civil 3D/OpenRoads/GIS implementation remains in a separate private repository.

Run checks: `node --test tests/fieldbook.test.mjs`.
