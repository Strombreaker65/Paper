// ——— shared data layer for paper ———
// Articles = short, dated, reporter-style (news-ish)
// Essays   = long-form argument (the heavier stuff)

const SEED = [
  {
    id: 'seed-1', kind: 'essay',
    title: 'The quiet industrial policy of the post-liberal state.',
    deck: 'Subsidies, tariffs, and strategic stockpiles have returned to the treasuries of the West. What is emerging is not socialism, nor mercantilism — but something less legible.',
    author: 'Ines Okafor', date: '2026-03-14',
    tags: ['policy','eu','us'],
    body:
`For forty years the argument was settled. Markets allocate, states referee, and the job of politics was to keep the referees honest. That compact is now audibly breaking — not in a single event, but in a hundred small departures that the people making them would still, if pressed, deny making at all.

The American Inflation Reduction Act, the European Chips Act, Japan's renewed METI, Seoul's K-Battery alliance, the quiet reappearance of sovereign wealth on every G20 balance sheet: taken one by one, each is unremarkable. Taken together, they describe a state that has rediscovered the habit of choosing.

## The reflex before the doctrine

The peculiar feature of the current moment is that the action has outrun its justification. Treasuries are spending as if they believe in industrial policy; finance ministries are writing memos that deny it. The result is a policy regime delivered almost entirely through the instruments of finance — tax credits, loan guarantees, procurement floors — rather than through ownership or command.

> The action has outrun its justification. Treasuries are spending as if they believe in industrial policy; finance ministries are writing memos that deny it.

This is not a failure of sophistication. The people running these programmes are, by and large, the same people who spent the nineties dismantling their predecessors. They are simply no longer persuaded that leaving the question to capital markets optimised for the next four quarters will produce a country that can defend, feed, or power itself in the next four decades.

## The instruments

What makes this regime legible only in retrospect is that its instruments do not look, at the point of contact, like planning. A tax credit is a market transaction. A loan guarantee is a contingent liability. A strategic stockpile is a line item.

€1.4T has been committed under named industrial-policy programmes across the EU, US, UK, Japan, and Korea between 2021 and 2025. Roughly half is non-grant — credits, guarantees, equity — and therefore substantially off-balance-sheet.

It is the aggregation that is new. When enough individually-modest instruments converge on the same handful of sectors — semiconductors, batteries, clean steel, a shortlist of biologics — the portfolio begins to behave, in expectation, like a plan.

## Whose capacity?

The honest answer to "whose plan" is: several overlapping constituencies, none of them fully in charge. Defence ministries want resilient supply chains. Labour movements want durable wages. Climate advocates want decarbonised industry. Treasuries want the off-balance-sheet part to stay off the balance sheet.

The risk is not that these stories are incompatible — they are, in fact, surprisingly close — but that no one is paid to write the version that holds them together.

## A way through

The argument of this essay is not that the reflex is wrong. It is that a reflex is an unstable thing to run a civilisation on for very long. The question the next five years will pose — to every treasury that has so far avoided posing it — is whether the instruments now in place can be stitched into a public account of what they are for.

Either way, the compact that ran from Thatcher to the pandemic is over. The argument about what replaces it has barely begun.`
  },
  {
    id: 'seed-2', kind: 'essay',
    title: 'Capital, without an exit.',
    deck: 'Private equity built its reputation on the IPO it will no longer get. A decade of dry-powder discipline is ending in a liquidity problem it dare not name.',
    author: 'Samir Khatri', date: '2026-03-02',
    tags: ['finance','pe'],
    body:
`The defining fact of private equity in 2026 is not what it owns, but what it cannot sell. Exit volumes are at a decade low. Hold periods have quietly doubled. And the industry's answer — continuation funds, NAV loans, secondary sales to itself — is beginning to look less like innovation and more like circulation of the same tired inventory between the same cooperating hands.

## The math doesn't care

A fund is a promise to return capital, with a distribution. When the distribution slips, the promise slips with it. Limited partners have been patient; pension funds particularly so. That patience has a shelf life measured in board meetings, and we are entering the quarter where several of them run out.

## What replaces the IPO

Nothing, for now. The public markets that once absorbed mid-sized take-privates have gotten pickier, and the mid-cap strategics that used to buy the rest are themselves under shareholder pressure to stop. The industry's quiet hope — that the rate cycle would re-open the window — has, so far, not materialised.

What does that mean for returns? Probably a lost vintage, possibly two. What it means for the people who raised that capital is more interesting.`
  },
  {
    id: 'seed-3', kind: 'article',
    title: 'Brussels slips a second Chips Act past a Friday budget.',
    deck: 'A €43bn amendment moved through the Parliament on a Friday evening with barely a press notice.',
    author: 'Ines Okafor', date: '2026-04-18',
    tags: ['eu','semis'],
    body:
`The European Parliament on Friday approved a €43 billion second tranche of the Chips Act as a technical amendment to the 2026 budget, with almost no public debate and a single press release issued after 7 p.m. local time.

Officials in Brussels described the move as "clarifying" an existing commitment. Three member states, speaking privately, said it was the largest industrial commitment the bloc has made since the original 2023 package.

## What it covers

The new envelope extends funding to second-generation fabs, the legacy-node capacity European automakers have been lobbying for, and — for the first time — a dedicated line for packaging and advanced test.

## Why now

The timing is not accidental. Treasury ministers wanted the number settled before the June council, where a less friendly debate on state aid rules is expected to open.`
  },
  {
    id: 'seed-4', kind: 'article',
    title: 'Treasury concedes the balance sheet.',
    deck: 'A technical note on contingent liabilities is, this week, the most interesting document in Washington.',
    author: 'Marcus Bell', date: '2026-04-12',
    tags: ['us','treasury'],
    body:
`A two-page technical note from the U.S. Treasury's Office of Financial Research, published late Wednesday, quietly concedes what the Inflation Reduction Act has always been: a multi-hundred-billion-dollar contingent liability that the federal balance sheet has so far declined to characterise.

The note itself is dry. Its implication is not. If the IRA's loan guarantees are scored as what they are, the next CBO baseline looks materially different.

## The politics

No one in a position to comment wanted to. But the fact of the note — published, signed, indexed — is the Treasury signalling, in the only way it is permitted to, that the conversation it has been avoiding can no longer be avoided.`
  },
  {
    id: 'seed-5', kind: 'essay',
    title: 'The arithmetic of an age-heavy state.',
    deck: 'Demographic inversion is no longer theoretical. Japan is the preview; Italy, Korea and Germany the queue behind it.',
    author: 'Léa Montagne', date: '2026-02-21',
    tags: ['demographics','fiscal'],
    body:
`There is a version of the demographic story that is about people — their lives, their grandchildren, the shape of a country whose median citizen is sixty. This essay is about the other version: the version about the accounts.

## What inverts

A dependency ratio above one — more non-workers than workers — has, until recently, been a thought experiment. Japan reached it in 2022. Italy will in 2028. Korea and Germany, on current trajectories, before the end of the decade.

## What breaks

Pensions break first, but not in the way the headlines imply. The breakage is less a default than a slow, politically humiliating renegotiation: retirement ages that rise faster than legislated, indexation that slips a percentage point behind what the promise implied, and — eventually — the quiet recategorisation of health spending from "care" to "social policy" so it fits a different budget line.

## What does not break

Surprisingly, investment. Countries with inverted pyramids turn out to invest more, not less, because labour scarcity forces capital deepening. The problem is not that there is no growth. The problem is who benefits from it.`
  },
  {
    id: 'seed-6', kind: 'article',
    title: 'Tokyo: yield curve control, in the rear view.',
    deck: 'A year after its unwind, the predicted carnage has not materialised.',
    author: 'Mei Sato', date: '2026-03-09',
    tags: ['japan','rates'],
    body:
`One year on from the Bank of Japan's formal unwind of yield curve control, the market reaction most commentators expected has simply not arrived.

The yen has drifted, not crashed. JGB yields have normalised without disorder. And the BoJ, quietly, is preparing the next step its mandate will not let it name out loud.

## What changed

Very little, on the surface. A great deal, underneath. Japanese domestic investors — long ordered to buy their own government's paper — are, for the first time in a decade, price-takers in their own market. What that does to household savings flows is the question the next twelve months will answer.`
  },
  {
    id: 'seed-7', kind: 'article',
    title: 'Mexico\'s nearshoring bill arrives.',
    deck: 'Three years of factory-belt growth are producing their first full fiscal accounting.',
    author: 'Daniela Ibarra', date: '2026-02-28',
    tags: ['mexico','trade'],
    body:
`The Mexican finance ministry's Q1 update, published this morning, contains the first honest estimate of what the country's three-year nearshoring boom has cost it: in water, in grid capacity, in the subsidies required to land the anchor tenants that made the rest possible.

## The number

Roughly $38 billion in cumulative public-sector investment, against an increase in formal-sector employment of 1.1 million jobs and an export-mix shift that is, by every measure, favourable.

It is, on net, a good trade. It is also a trade that the next administration will have to keep making, at increasing cost, because the moment it stops, the factory belt's next-phase expansion goes with it.`
  }
];

const DB = (() => {
  const KEY = 'paper:posts:v1';
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) { save(SEED); return SEED.slice(); }
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : SEED.slice();
    } catch (e) { return SEED.slice(); }
  }
  function save(arr) { localStorage.setItem(KEY, JSON.stringify(arr)); }
  return {
    all() { return load().sort((a,b) => b.date.localeCompare(a.date)); },
    get(id) { return load().find(p => p.id === id); },
    add(post) {
      const arr = load();
      arr.push(post);
      save(arr);
      return post;
    },
    update(id, patch) {
      const arr = load();
      const i = arr.findIndex(p => p.id === id);
      if (i >= 0) { arr[i] = { ...arr[i], ...patch }; save(arr); return arr[i]; }
      return null;
    },
    remove(id) {
      const arr = load().filter(p => p.id !== id);
      save(arr);
    },
    reset() { save(SEED); }
  };
})();

// ——— tiny markdown-ish renderer ———
// supports: # h1, ## h2, > blockquote, blank-line paragraphs, **bold**, *italic*
function renderMarkdown(src) {
  if (!src) return '';
  const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const inline = s => esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>');

  const blocks = src.replace(/\r\n/g,'\n').split(/\n{2,}/).map(b => b.trim()).filter(Boolean);
  const out = [];
  const slugs = new Set();
  function slug(text) {
    const base = text.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || 'section';
    let s = base, i = 2;
    while (slugs.has(s)) s = base + '-' + (i++);
    slugs.add(s);
    return s;
  }
  const toc = [];
  for (const b of blocks) {
    if (b.startsWith('## ')) {
      const t = b.slice(3).trim();
      const id = slug(t);
      toc.push({ id, text: t });
      out.push(`<h2 id="${id}">${inline(t)}</h2>`);
    } else if (b.startsWith('# ')) {
      out.push(`<h1>${inline(b.slice(2).trim())}</h1>`);
    } else if (b.startsWith('> ')) {
      out.push(`<blockquote>${inline(b.slice(2).trim())}</blockquote>`);
    } else {
      out.push(`<p>${inline(b).replace(/\n/g,'<br>')}</p>`);
    }
  }
  return { html: out.join('\n'), toc };
}

function fmtDate(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' });
}
function fmtDateDot(iso) {
  return iso.replaceAll('-', '.');
}
function readTime(body) {
  const words = (body || '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 230)) + ' min';
}
function year(iso) { return iso.slice(0,4); }

function genId() {
  return 'p-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,6);
}
