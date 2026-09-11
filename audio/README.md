# Sound

**One folder per sound. Drop a file in and it gets used.** The filename doesn't matter —
spaces, brackets, whatever the download came as. `.mp3`, `.ogg`, `.wav`, `.m4a` and `.flac`
all work.

```
audio/plug/Switchboard Plug 03 (CC0).wav      ← just works
audio/ring/magneto-ring.ogg
audio/voice/murmur_a.mp3
```

Any folder you leave empty falls back to the game's generated sound, so you can add one at
a time and hear each swap.

**Put more than one file in a folder and they become variants** — a different one is picked
each time it plays. Three plug sounds means the board stops sounding mechanical.

## The folders

| folder | when it plays | notes |
|---|---|---|
| `plug/` | a plug seats in a jack | the most-repeated sound in the game |
| `plug-trunk/` | a plug seats in a **trunk** jack | optional — without it, `plug` is pitched down 12% |
| `unplug/` | a plug is pulled out of a jack | |
| `reel/` | a cord runs home to its spring | louder the further it travelled |
| `seat/` | the plug drops into the spring | the knock at the end of the run |
| `snag/` | you grab a plug whose cord is crossed | |
| `ring/` | **loops** while the ringing key is held | must loop cleanly; first file is used |
| `lamp/` | a lamp or relay changes state | very short |
| `click/` | a key, and a flick-test on a free line | very short |
| `busy/` | a flick-test on a **busy** line | the classic double click |
| `trunk/` | the distant operator comes on | |
| `slip/` | a call-back ticket filed or picked up | paper |
| `complete/` | a call put through and taken down | |
| `error/` | a mark against you | |
| `lost/` | a caller rings off without you | |
| `warn/` | three seconds before someone gives up | short, gets attention, not alarming |
| `bell/` | end of shift | |
| `dismissed/` | the chief takes you off the position | |

## The two with no fallback

These stay **silent** until you supply them — there is no generated equivalent.

| folder | when it plays |
|---|---|
| `room/` | **loops** continuously under everything, at 20% |
| `voice/` | a wordless murmur whenever somebody speaks with the listening key thrown |

`room/` wants 20–40 seconds of quiet tone that loops without a seam: distant operators,
relays chattering, nothing identifiable. It does more for the atmosphere than any single
effect.

`voice/` wants short **wordless** murmurs, roughly 0.6–2 seconds — a cadence, not words.
One is picked at random and pitched ±6% each time, so five or six gives plenty of variety.
Real words would fight the written dialogue on the ticket.

## How it finds them

Served by `npm start`, the game asks the server what is in each folder, so any filename
works. On a plain static host it reads the directory listing instead. Opened straight off
disk as `file://`, neither is available — there, name the file after the folder and put it
alongside (`audio/plug.wav`), or just run `npm start`.

## Files are trimmed to fit

Downloads usually need no editing. Any silence at the start is skipped, so the sound is
prompt, and anything longer than the board wants is faded out at its limit — a four second
switch recording becomes a 0.35s click. Caps are roughly: clicks and lamps a third of a
second, plugs and cords about one, the bell four. `ring/` and `room/` loop instead and are
not capped.

If a sound feels clipped, trim the file yourself and it will play in full.

## Levels are handled for you

You do not need to match levels. Downloads arrive normalised near full scale; the generated
sounds they sit beside peak between 0.05 and 0.22, so a raw file would bury them. Each slot
has a level it should land at, and whatever you drop in is scaled to reach it — loud or
quiet, it sits in the mix. A sharp transient gets a little back, since it reads quieter than
its peak suggests.

Everything still routes through the game's master volume, so the in-game slider and mute
work as before.

If a sound feels wrong against the others, the levels live in `SLOT_LEVEL` near the top of
the script in `index.html`.
