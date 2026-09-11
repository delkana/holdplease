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

## 4. The numbers — ten takes a voice

This is the one part of the sentence that has to get through, so it is the one part
said in words. Every number on this board is made of digits, so **ten clips cover all
of it** — the twenty-four subscribers and the out-of-town numbers both.

Count slowly from **nought to nine**, a clear beat between each, in one take per voice.
Then in Audacity: **Analyze → Label Sounds** (it drops a label on each digit), then
**File → Export → Export Multiple**, split on labels. Rename the ten files `0` to `9`.

| folder | say |
|---|---|
| `audio/voice/man/num/` | "nought. one. two. three. four. five. six. seven. eight. nine." |
| `audio/voice/woman/num/` | the same, second voice |

Filter them exactly like the murmurs below. Keep each under a second — they are
played back to back, and the game spaces them off their own length.

**Optional, and better if you have the patience:** the whole number in one breath, so
the voice says "forty-seven" where the ticket says *forty-seven*, rather than
"four, seven". Twenty-four takes a voice, into `audio/voice/man/word/`, named after
the number — `47.wav`. The numbers are:

```
11  14  17  21  24  28  31  33  36  42  45  47
51  54  57  62  65  68  71  74  77  82  85  88
```

Same trick — read the list with a gap between each, Label Sounds, Export Multiple,
rename. Anything you skip falls back to the digits, so a half-finished set is fine.

**Optional:** a trailing "…please." and "…would you." in `audio/voice/man/tail/`,
played after the number. Two clips each voice and the sentence lands.

## 5. `audio/lamp/` — four to six clicks

**The most-played sound in the game** — about thirty times a shift, more than anything
else, and it is what tells you a call has arrived. It is worth ten minutes.

A real one is a relay snapping over: a small, dry, electromechanical *tick*, no ring to it.
A **ballpoint pen** held right against the microphone is almost exactly that sound.

| # | make it with | note |
|---|---|---|
| 1 | pen click **down** | the sharper of the two |
| 2 | pen click **up** | duller — a free second variant from the same pen |
| 3 | a **different** pen | a slightly different pitch is what you want |
| 4 | a light switch, close up | bigger, more of a clunk |
| 5 | a fingernail on a glass or a mug | brighter, drier |
| 6 | a clothes peg snapped shut | a harder snap |

Record six clicks with a second of gap between them, then cut them into separate files.

**Variation matters more here than anywhere else.** Thirty identical ticks a shift will
start to grate; six variants picked at random will not. Keep them **very short** — anything
over a quarter of a second is faded out anyway. Do not filter these: the lamp is on the
board in front of you, not down a line.

## 6. `audio/room/` — one take, 30–40 seconds

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
audio/voice/man/        1.wav  2.wav  3.wav  4.wav  5.wav  6.wav     the murmurs
audio/voice/woman/      1.wav  2.wav  3.wav  4.wav  5.wav  6.wav
audio/voice/child/      1.wav  2.wav  3.wav  4.wav

audio/voice/man/num/    0.wav … 9.wav                                the digits
audio/voice/woman/num/  0.wav … 9.wav

audio/voice/man/word/   11.wav … 88.wav                              optional
audio/voice/man/tail/   please.wav  wouldyou.wav                     optional

audio/lamp/             1.wav  2.wav  3.wav  4.wav  5.wav  6.wav
audio/room/             room.wav
```

Names matter only in `num/` and `word/`, where the number in the filename is what
picks the clip. Everywhere else they do not. Several files in a folder become variants, picked at random and
pitched ±6% each time, so six gives plenty of variety without sounding repetitive.

---

## Bonus: things already on your desk

These folders are still using generated sounds, and all of them are easy to record with
whatever is within reach.

| folder | make it with |
|---|---|
| `answer/` | lift a phone off a cradle by the mic, or a soft mouth click |
| `seat/` | a pen or coin dropped onto a wooden desk |
| `unplug/` | pulling any cable out of any socket |
| `snag/` | a cable dragged across a desk edge |
| `slip/` | a single sheet of paper picked up |

Keep these very short and do not filter them — they are objects in the room with you, not
things heard down a line.
