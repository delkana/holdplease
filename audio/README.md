# Sound

Drop files in here and the game uses them instead of its generated sounds. Anything
missing falls back automatically, so you can add one at a time and hear each swap.

Name the file after the slot, in `.mp3`, `.ogg` or `.wav` — e.g. `plug.wav`, `ring.ogg`.

## Slots

| file | when it plays | notes |
|---|---|---|
| `plug` | a plug seats in a jack | the most-repeated sound in the game |
| `plug-trunk` | a plug seats in a **trunk** jack | optional — without it, `plug` is pitched down 12% |
| `unplug` | a plug is pulled out of a jack | |
| `reel` | a cord runs home to its spring | gain scales with how far it travelled |
| `seat` | the plug drops into the spring | the knock at the end of the run |
| `snag` | you grab a plug whose cord is crossed | |
| `ring` | **loops** while the ringing key is held | must loop cleanly |
| `lamp` | a lamp or relay changes state | very short |
| `click` | a key, and a flick-test on a free line | very short |
| `busy` | a flick-test on a **busy** line | the classic double click |
| `trunk` | the distant operator comes on | |
| `slip` | a call-back ticket is filed or picked up | paper |
| `complete` | a call is put through and taken down | |
| `error` | a mark against you | |
| `lost` | a caller rings off without you | |
| `warn` | three seconds before someone gives up | short, gets attention, not alarming |
| `bell` | end of shift | |
| `dismissed` | the chief takes you off the position | |

## The two with no fallback

These stay **silent** until you supply them. There is no generated equivalent.

| file | when it plays |
|---|---|
| `room` | **loops** continuously under everything — exchange ambience |
| `voice/1` … `voice/6` | a wordless murmur whenever you hear somebody speak with the listening key thrown |

`room` wants 20–40 seconds of quiet tone that loops without a seam: distant operators,
relays chattering, nothing identifiable. It plays at 20% and does more for the atmosphere
than any single effect.

`voice/N` wants short **wordless** murmurs, roughly 0.6–2 seconds — a cadence, not words.
One is picked at random and pitched ±6% each time, so six gives plenty of variety. Real
words would fight the written dialogue on the ticket.

## Avoiding the probe requests

Without a manifest, each slot is tried as `.mp3`, `.ogg`, then `.wav` once, on your first
click. That is a burst of harmless 404s. To skip it, list exactly what you have:

```json
["plug.wav", "unplug.wav", "ring.ogg", "room.ogg", "voice/1.mp3", "voice/2.mp3"]
```

Save that as `audio/manifest.json` and only those files are fetched.

## Levels

Everything routes through the game's master volume, so the in-game slider and mute still
work. Master your files at a consistent, fairly quiet level — the game plays several at
once when the board is busy, and the generated sounds they sit alongside are deliberately
restrained.
