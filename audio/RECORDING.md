# A recording session

Everything here can be done with a phone voice memo in about twenty minutes.

**Do not worry about levels, silence at the start, or exact length.** The game normalises
every file to the right level, skips any silent lead-in, and fades anything over its limit.
Record it, filter it, drop it in.

Keep voice takes **under 2.5 seconds**. That is the cap.

---

## 1. `audio/voice/man/` — six takes

Say them normally. The filtering later is what makes them muffled.

| # | say something like | shape you want |
|---|---|---|
| 1 | "Give me two-fourteen." | brisk, everyday, answering "number please" |
| 2 | "Thirty-six again. I know they're in." | impatient, pressing |
| 3 | "If the bank rings out tonight, it doesn't go through." | clipped, official |
| 4 | "Mm-hm. Mm-hm. That's right." | flat agreement |
| 5 | *a laugh, cut short* | one second, no words |
| 6 | "I don't know what to tell you, Harold." | quiet, trailing off, bad news |

## 2. `audio/voice/woman/` — six takes

| # | say something like | shape you want |
|---|---|---|
| 1 | "Get me the Rectory, would you?" | brisk, everyday |
| 2 | "You'll never guess who I saw." | warm, rising, gossip |
| 3 | "If he rings, I'm not at home." | low and careful, a favour asked |
| 4 | "He's been coughing like that since Tuesday." | worried |
| 5 | "She said yes!" | delighted, under a second |
| 6 | "It gets awful quiet after five." | slow, elderly, trailing — this is Etta |

## 3. `audio/voice/child/` — four takes

| # | say something like | shape you want |
|---|---|---|
| 1 | "I want my mama." | small, wobbling |
| 2 | "She's at the pictures." | a sniff, then the words |
| 3 | *just a sniff and a breath* | no words at all |
| 4 | "Please, I want my mama!" | louder, more upset |

## 4. `audio/room/` — one take, 30–40 seconds

The most valuable single file. Put the phone down in a quiet room and leave it running.
If you can, have someone talk at normal volume **in another room with the door shut**, and
once or twice tap a pen or click a switch well away from the mic. Nothing identifiable —
you are making the feeling of a building with other people working in it.

It loops, so avoid anything distinctive that would repeat noticeably.

---

## Filtering (Audacity, free)

For every **voice** file, in this order:

1. **Effect → EQ and Filters → High-Pass Filter** — 300 Hz, 12 dB roll-off
2. **Effect → EQ and Filters → Low-Pass Filter** — 3000 Hz, 12 dB roll-off
3. *(optional)* **Effect → Distortion → Hard Clipping**, very light

That 300–3000 Hz band is what a 1937 carbon microphone and a copper pair actually did to a
voice. It is the muffling — you should not have to mumble to get it.

For **room**, filter far more gently or not at all, and cut the volume right down.

Export as WAV or MP3. Any filename.

---

## Where each file goes

```
audio/voice/man/    1.wav  2.wav  3.wav  4.wav  5.wav  6.wav
audio/voice/woman/  1.wav  2.wav  3.wav  4.wav  5.wav  6.wav
audio/voice/child/  1.wav  2.wav  3.wav  4.wav
audio/room/         room.wav
```

Names do not matter. Several files in a folder become variants, picked at random and
pitched ±6% each time, so six gives plenty of variety without sounding repetitive.

---

## Bonus: things already on your desk

These folders are still using generated sounds, and all of them are easy to record. `lamp/`
is the one worth doing — it plays about **thirty times a shift**, more than anything else,
and it is the sound telling you a call has arrived.

| folder | make it with |
|---|---|
| `lamp/` | a ballpoint pen click, or a light switch, close to the mic |
| `seat/` | a pen or coin dropped onto a wooden desk |
| `unplug/` | pulling any cable out of any socket |
| `snag/` | a cable dragged across a desk edge |
| `slip/` | a single sheet of paper picked up |

Keep these very short and do not filter them — they are objects in the room with you, not
things heard down a line.
