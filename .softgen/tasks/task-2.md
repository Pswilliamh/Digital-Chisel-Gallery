---
title: The Soundscape Gallery
status: in_progress
priority: high
type: feature
tags: [tab2, gallery, masonry]
created_by: agent
created_at: 2026-05-16T08:04:20Z
position: 2
---

## Notes
Masonry grid gallery of Indonesian wood-relief prints with modal detail view. Each thumbnail shows subtle Ken Burns motion. Clicking opens full-screen modal with quote overlay and download option. Now displays user's actual uploaded images with orientation detection.

**Design constraints:**
- Clean masonry layout (1/2/3 columns based on breakpoint)
- Ken Burns effect on thumbnails (30s cycle, faster than main screen)
- Modal shows full image with quote + download button
- Auto-detects device orientation (portrait → vertical images, landscape → horizontal images)

## Checklist
- [x] Create SoundscapeGallery.tsx with masonry grid layout
- [x] Implement modal/dialog for full-screen image viewing
- [x] Add Ken Burns effect to thumbnails (30s cycle)
- [x] Display random wisdom quote in modal overlay
- [x] Load user's uploaded images with orientation detection
- [ ] Implement volume fader for audio breathing effect — requires audio file
- [ ] Ensure audio plays continuously across tab switches without restarting — requires audio file

## Acceptance
- Gallery displays all uploaded images in masonry layout
- Modal opens with full-screen image and wisdom quote
- Ken Burns effect visible on all thumbnails
- Correct image orientation loads based on device