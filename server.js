/* Hold, Please — a static server with no dependencies.
   The game is a single self-contained HTML file; this just hands it out. */
const http = require('node:http');
const fs   = require('node:fs');
const path = require('node:path');

const PORT = process.env.PORT || 8080;
const ROOT = __dirname;
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.mp3':  'audio/mpeg',
  '.ogg':  'audio/ogg',
  '.wav':  'audio/wav',
  '.m4a':  'audio/mp4',
  '.flac': 'audio/flac'
};

http.createServer((req, res) => {
  let name;
  try { name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400, { 'content-type': 'text/plain' }); return res.end('bad request'); }
  if (name === '/' || name === '') name = '/index.html';

  /* tell the game what is sitting in each audio/<slot>/ folder, so any filename works */
  if (name === '/audio-index.json') {
    const out = {};
    try {
      for (const d of fs.readdirSync(path.join(ROOT, 'audio'), { withFileTypes: true })) {
        if (!d.isDirectory()) continue;
        const files = fs.readdirSync(path.join(ROOT, 'audio', d.name))
          .filter(f => /\.(mp3|ogg|wav|m4a|flac)$/i.test(f));
        if (files.length) out[d.name] = files;
      }
    } catch (e) { /* no audio folder yet */ }
    res.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-cache' });
    return res.end(JSON.stringify(out));
  }

  const full = path.join(ROOT, path.normalize(name));
  if (!full.startsWith(ROOT + path.sep) && full !== path.join(ROOT, 'index.html')) {
    res.writeHead(403, { 'content-type': 'text/plain' });
    return res.end('forbidden');
  }

  fs.readFile(full, (err, data) => {
    if (err) {
      res.writeHead(404, { 'content-type': 'text/plain' });
      return res.end('not found');
    }
    res.writeHead(200, {
      'content-type': TYPES[path.extname(full).toLowerCase()] || 'application/octet-stream',
      'cache-control': 'no-cache'
    });
    res.end(data);
  });
}).listen(PORT, () => console.log('Hold, Please — position 4 open on port ' + PORT));
