# Transformix Creative

Arabic (RTL) marketing site built from the Figma file
[`transformix-2`](https://www.figma.com/design/pHGOfIO1OjKFjB34xtlRRf/transformix-2?node-id=1536-22167),
frame `1536:22167` (1440 × 8330).

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the build
npm run lint
```

## Design fidelity

Every section was measured against a full-resolution Figma render rather than
eyeballed. Section offsets land within 2px of the canvas and the full page is
8329px against the design's 8330px.

| Section | Figma node | Differing pixels @1440 |
|---|---|---|
| Hero + header | `1536:22169` | 1.75% |
| Client strip | `1536:22194` | — |
| Services | `1536:22252` | 2.67% |
| Mid CTA | `1536:22346` | 2.51% |
| Portfolio | `1536:22354` | 3.64% |
| Process + CTA | `1536:22430` | 3.65% |
| Testimonials | `1536:22449` | 4.89% |
| Footer | `1536:22495` | 4.28% |

The residual is text antialiasing (Figma renders greyscale, Chrome subpixel) and
image resampling. No layout, size, colour or spacing differences remain.

### Things worth knowing

- **Icon exports carry their backdrop.** Figma bakes whatever sits behind a node
  into a PNG export — none of the hero icons has an alpha channel. Exporting one
  from the bare canvas yields an opaque `#272727` square; exporting the same node
  over a white ground yields opaque white, which is invisible against the page.
  Every icon in `public/assets/hero` is therefore white-backed, and any re-export
  has to be staged on a white frame or it will ship a black box.

- **Leading.** Figma's "auto" line height for Noto Kufi Arabic is CSS
  `line-height: normal`, *not* Tailwind's `leading-normal` (1.5). Using 1.5
  compressed every text block by ~20%, so `normal` is set in the base layer.
- **Gradients.** Figma interpolates gradient alpha un-premultiplied; CSS
  premultiplies. The hero's cream washes are written as explicit mid-stops so the
  tint survives — see `cardWash()` in `Hero.tsx`.
- **Shadows.** A Figma drop shadow follows a layer's *rendered* bounds, including
  overflowing children. The service-card elevation therefore belongs on the
  450×330 media box, not the 304px frame it is attached to in the file.
- **Scaling.** The hero is one absolutely-positioned composition, so it is driven
  by a container query in `cqw` units: exact Figma pixels at 1440, proportional
  below. Other desktop blocks use percentages that resolve to the design's exact
  pixel values at 1440 and stay fluid down to 1024.

### Deliberate deviations

Four points where the shipped build departs from the file.

1. **Hero "layers" icon backdrop — removed on request.** In Figma this icon
   paints its four bars on a solid black rounded square, which reads as a black
   tile against the white hero. The backdrop is a 75.9x75.9 black `Vector`
   sitting under the bars; it is hidden in the exported frames, leaving the bars
   on white like every other icon. Note the icon *also* contains an 86x86 black
   `Vector` inside `__lottie_element_1472`, which is the group's mask shape —
   hiding that one clips the whole icon away, so only the inner one comes out.
2. **Process step 2's badge.** In Variant3 and Variant4 its number reads "3"
   while its label still reads نخطط — the first two variants read "2". Shipping
   a duplicated step number would be a visible defect, so the badge stays "2"
   throughout.
3. **Portfolio card 1 tag row.** Its pill row is authored 37px past the card's
   right edge; the other three align to the edge. All four align here.
4. **Placeholder logos.** Six client-strip cells are empty template frames. Only
   the eight real logos are rendered, cycling in the marquee.

## Video

Eight layers in the design are named `Video` and painted with video fills,
carrying four distinct clips between them. Figma exposes no route to a fill's
source bytes — `download_assets` returns only the first frame, and
`export_video` holds that frame for ~2s rather than playing it — so the clips
are the originals, supplied directly and matched back to their nodes by
comparing each node's Figma poster against the video's own frames.

| Figma `videoHash` | Card | Ships as |
|---|---|---|
| `493c0fa7…` | all four service cards + بناء العلامات التجارية | `brand-guidelines.mp4` |
| `51b9ffaa…` | تصميم وجهات وتجربة المستخدم | `mobile-ux.mp4` |
| `cb744930…` | تصميم المواقع الالكترونية | `website-promo.mp4` |
| `49081cdd…` | انتاج و صناعة الفديوهات | `video-production.mp4` |

Re-encoded from the 10–19MB sources to 1280×720, 30fps, audio stripped, H.264
CRF 30 with `+faststart` — 0.7–1.8MB each. A VP9/webm pass was tried and
dropped: it came out *larger* than x264 on all four, so a second format would
only have cost bytes.

The still under each clip is its own frame 0. `brand-still.png` and `work-2.png`
match theirs to within codec rounding (mean luma delta 0.68 and 0.92 of 255), so
the poster hands off without a visible step. The other two cards need no still
at all — their clips open on a flat frame, measured back as `#ffffff` and
`#b702f7`, which is why the design reads as flat colour there and why the slot
background already *is* frame 0.

`CardVideo` plays muted, looped and `playsInline`, at `preload="none"` behind an
IntersectionObserver — nothing is fetched until a card scrolls into view, and
each clip pauses when it leaves. The video fades in only once the browser
reports it can play, so a decode failure falls back to the still with no extra
branching. Under `prefers-reduced-motion` the element is never mounted, and the
hook is live, so toggling the OS setting pulls or restores the clips without a
reload.

## Structure

```
src/
  app/          layout (fonts, RTL, metadata), globals.css (design tokens), page
  components/
    layout/     Header (with mobile drawer), Footer
    sections/   Hero, ClientMarquee, Services, MidCta, Work, Process, Testimonials
    ui/         Button15, ServiceCard, WorkCard, CardVideo, ProcessTimeline,
                SectionHeading, Reveal
  data/         copy + per-node layout metrics, kept out of the components
  lib/          cn()
public/assets/  brand, icons, hero, clients, media, reviews
```

Design tokens from the Figma variable collection live in the `@theme` block of
`src/app/globals.css` (colours, the H1–H4 type scale, `Button Shadow`,
`Shadow 2`, motion easing).

## Motion

Only motion the design actually encodes, plus scroll reveals:

- **Client strip** — the file lays the logos on a 2403px track inside a 1440px
  frame and repeats the set, i.e. it is authored as a marquee. Loops seamlessly,
  pauses on hover.
- **Button 15** — the two clipped rows of purple bars sitting just outside the
  pill (groups "U" and "L" in Figma) slide in and interlock on hover, staggered
  from the centre pair outwards.
- **Scroll reveals** on section blocks, card hover lift, media zoom, arrow nudge.
- **Hero orbit** — the designer authored the hero as a nine-variant animation
  (`COMPONENT_SET 783:16277` on page HOME). Each variant holds ~2s then
  `CHANGE_TO`s the next with `SMART_ANIMATE` 0.3s `LINEAR`, and Variant9 closes
  the loop. The nine variants are nine equally-spaced phases of one revolution:
  all eight icons ride the same dashed ellipse, each at its own phase, and the
  two that sit on the path spin to stay tangent — both unwrap to exactly 360°
  across the 21.14s cycle. Reproduced stop-for-stop as CSS keyframes generated
  from `data/hero.ts`, so the hold-then-glide cadence matches the prototype
  rather than being smoothed into a continuous drift. The orbit, both cards and
  the button never move, exactly as in the file.
- **Hero icons, individually** — three of the eight are animated components in
  their own right, cycling their own variants on their own clocks while the orbit
  carries them around: `icon-layers` (3 states, 0.8s each, 3.3s loop),
  `icon-cube` (3 states, 0.5/0.8/1.0s, 3.2s) and `icon-dots` (5 states,
  0.3/0.3/0.6/0.8/0.8s, 4.3s). The only thing that differs between an icon's
  variants is fill colour — no geometry moves — so each state ships as a frame and
  they cross-fade. For identical geometry a cross-fade is arithmetically the same
  as interpolating the fills, which is what `SMART_ANIMATE` does. Watch out for
  `icon-dots`: its set stores children as Default, V2, V4, V3, V5 while the
  reaction chain runs Default → V2 → V3 → V4 → V5, so child order is not playback
  order.
- **Process timeline** — also a variant animation (`COMPONENT_SET 730:12467`),
  four states holding 1.6s each with the same 0.3s `LINEAR` smart-animate, on a
  7.6s loop. It is a progressive fill: step 1 lit, then 1-2, then 1-2-3, then all
  four, while the rail's grey/purple boundary sweeps 71.16% → 48.56% → 24.52% →
  0%. Colours and both gradient stops are driven through `@property`-registered
  custom properties — unregistered ones flip halfway through a keyframe instead
  of blending, so registering them is what reproduces the continuous blend.
- **Closing logomark** — node `1536:22448` ("icon-3d-spin-slow") is a *video*
  fill, and `process-spin.png` is byte-identical to its Figma poster, i.e. the
  clip's first frame. The clip cannot be pulled out of Figma, so the slot turns
  the mark on its own axis at 14s, the motion the layer name describes. A bare
  `rotateY` with no `perspective` on the parent resolves to a horizontal
  squash, so it never grows past its window and never needs clipping. Supplying
  the real clip supersedes this.
- **Card clips** play while their card is on screen — see [Video](#video).

That is the whole set: a sweep of the composed frame turns up 13 prototype
reactions — six Button 15 hovers, the hero orbit, the eight-icon set's three
inner loops, the process timeline, and two on a node parked at x=1672 that never
renders. Nothing else in the file animates.

Everything collapses under `prefers-reduced-motion`, which also pins the reveals
open so no content depends on animation. Each animated block falls back to its
Default variant, not to a blank state.

## Responsive

Pixel-exact at 1440; proportional 1024–1440; purpose-built layouts below that —
stacked hero, single-column cards, a vertical process rail, and a full-screen
nav drawer. Verified free of horizontal overflow at 390 / 768 / 1024 / 1280 / 1440.
