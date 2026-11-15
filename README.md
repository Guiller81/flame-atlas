# Flame Atlas

**Can you trust a material's Earth fire rating in your space cabin?**

Flame Atlas is a dashboard of NASA's fire experiments in orbit and in reduced gravity, made by Team Flame Atlas for the NASA Space Apps Challenge 2026, challenge [Flame in Freefall](https://www.spaceappschallenge.org/2026/challenges/flame-in-freefall/).

- **Open the app:** https://guiller81.github.io/flame-atlas/
- **30-second demo:** https://youtu.be/auMoC6LcYts

## Why

Spacecraft cabin materials are rated with a flame test done on Earth (NASA-STD-6001 Test 1). NASA's tests in orbit and in reduced gravity show that some materials keep burning at lower oxygen.

- Ultem 1000 plastic film passes the Earth test up to 24% oxygen (at 70.3 kPa). In lunar-gravity drop tests at the same pressure its limit was 19.9%; the authors' own comparison uses an Earth value of 23.0% with a hot-wire igniter, and their pass criteria differ from the Earth test ([Hirsch et al. 2011, p.5](https://ntrs.nasa.gov/api/citations/20110008636/downloads/20110008636.pdf#page=5); [Olson and Ferkul 2012, p.6](https://ntrs.nasa.gov/api/citations/20130010991/downloads/20130010991.pdf#page=6)).
- On the ISS, flames on acrylic (PMMA) rods kept burning down to 13.6% oxygen; the Earth limit the authors compare it with is 15.4%, from a different test set-up (BASS-II Summary Report, [p.76](https://ntrs.nasa.gov/api/citations/20210011385/downloads/TM-20210011385.pdf#page=76) and [p.84](https://ntrs.nasa.gov/api/citations/20210011385/downloads/TM-20210011385.pdf#page=84)).
- One of NASA's planning atmospheres for exploration habitats is 34% oxygen at 8.2 psia, or 56.5 kPa ([Abney et al. 2026, p.13](https://ntrs.nasa.gov/api/citations/20260003925/downloads/20260003925.pdf#page=13)).

The evidence exists, but it is spread over a database and dozens of papers. Flame Atlas puts it in one place for the person who has to decide: a spacecraft designer or safety engineer choosing materials, cabin air or ventilation.

## What it does

- **Ranks** NASA's combustion experiments by how close their tests are to your cabin's oxygen, pressure and airflow.
- **Charts** the test results (oxygen against airflow, oxygen against pressure): what burned, what went out, what did not ignite. A dot is one test; a diamond is a burn limit reported by a paper. Each mark sits at its own value and names its source and page.
- **Compares**, for one material, its Earth limit with its results in orbit and in reduced gravity, and shows where your cabin sits between them.
- **Answers questions** with an SI assistant instructed to answer only from our curated documents, to cite source and page for each point, and to keep what the data shows apart from what is inferred.

It gives evidence and margins. The verdict stays with the engineer.

## How to use it

1. Open the app. It starts on the experiment that tested closest to the Moon base cabin.
2. Set **your conditions**: tap a cabin (ISS, Airlock, Moon lander, Moon base) or type your oxygen, pressure and airflow. You can also drag the "+" on a chart.
3. Under **Select tests by**, choose **Experiment** (ranked for your cabin) or **Material** (grouped by class, with counts per gravity).
4. Read the **card** (the facts for your selection), the **charts** (larger dots match your conditions) and **Details** (the tests behind them, each with its source page). **Download CSV** saves the tests in your selection.
5. **Ask**: type a question, tap "What do the papers add?" or "What did it find?" on a card, or "Ask why it burned" on a test. You can attach a material datasheet (PDF or image). **Save as PDF** keeps the conversation with its source links.

A typed question takes about 25 seconds. The answers behind the buttons are stored with the page and appear at once.

## NASA data and resources, and what each one gave us

| Resource | What it gave us | What it changed in the solution |
|---|---|---|
| [NASA PSI](https://psi.nasa.gov/physci/repo/search?q=combustion), the 24 Combustion Science investigation records (open API, CC0) | Name, objective, platform, dates, samples and DOI of every investigation | The Experiment list and its cards. All 24 are listed; the ones with test results are ranked for your cabin |
| [PSI-26 BASS](https://psi.nasa.gov/physci/repo/data/investigations/PSI-26), as-run test matrix | 109 tests, each with the conditions the log gives and a written result (7 more BASS tests come from its papers) | The dots: one mark per real test, at its own oxygen, pressure and airflow |
| [PSI-25 BASS-II](https://psi.nasa.gov/physci/repo/data/investigations/PSI-25), test matrix by PI and data FAQ, with the BASS-II Summary Report | 150 test results; the FAQ says how to read the columns (the "air display" number is the airflow speed in the duct) | Where a test gives that number, it sits on the airflow chart in cm/s |
| [PSI-20 ACME BRE](https://psi.nasa.gov/physci/repo/data/investigations/PSI-20) with its results in [Dehghani 2022](https://drum.lib.umd.edu/handle/1903/29303) | 173 gas-burner tests that emulate burning solids, at 18 to 40% oxygen and 56.5 to 108 kPa | The experiment ranked first for the Moon base cabin; it has its own chat memory |
| [PSI-98](https://psi.nasa.gov/physci/repo/data/investigations/PSI-98), [PSI-99](https://psi.nasa.gov/physci/repo/data/investigations/PSI-99), [PSI-100](https://psi.nasa.gov/physci/repo/data/investigations/PSI-100) Saffire I–III with their NTRS papers | 12 large-scale tests on Cygnus | The large-scale side of the evidence, next to the small ISS samples |
| NASA Technical Reports Server, 27 documents | Earth limits (NASA-STD-6001B, White Sands limit papers), drop-tower and partial-gravity tests, Saffire IV–VI, SoFIE, cabin atmosphere studies | The Earth side of most comparisons, the lunar and Martian gravity results, and the four cabin buttons with their sources |
| [A Researcher's Guide to ISS Combustion Science](https://www.nasa.gov/missions/station/a-researchers-guide-to-combustion-science/) (challenge Resources tab) | Background on the droplet, gas and smoke experiments | What the chat can say about investigations that have no test rows |
| [NASA Image and Video Library, "SoFIE-GEL"](https://images.nasa.gov/details/SoFIE-GEL) | A real flame in microgravity | The opening seconds of the demo video (credit "Video: NASA") |

Results published outside NASA sites are included too: the FLARE experiment on the ISS Kibo module (JAXA), a University of Maryland thesis and several journal papers. The full list, with links and reuse notes, is in [SOURCES.md](SOURCES.md).

In numbers: 887 test results (577 single tests and 310 burn limits reported by a paper); 600 in microgravity, 48 in partial gravity, 239 on Earth; 42 materials; 19 experiments and test campaigns with results, and 18 more PSI investigations listed.

## How the answers were checked

We graded the SI's answers before trusting them.

- **26 questions**, each with an answer key tied to source pages, drafted by SI from the sources. Some ask for things the documents do not hold, to see whether the assistant says so.
- One run through the live chat on 15 November 2026. Two independent SI graders marked every answer blind and checked the cited pages against the PDFs.
- **Result: 19 correct, 7 partial, 0 wrong** (both graders, the same seven). The partial answers mostly missed a point or a caveat the key asked for; one gave a wrong value (37% oxygen where the source says 36%).
- Cited statements found on the cited page: 143 of 149 (grader 1) and 128 of 130 (grader 2).
- The detection and suppression topic was added afterwards and checked on its own with 9 answers: 7 correct, 1 partial, and 1 marked partial by one grader and wrong by the other (it set two documents against each other). No invented number.

## What it shows today, and what is next

- Test results on the charts come from six PSI investigations (BASS, BASS-II, Saffire I–III, ACME BRE) and from 13 other campaigns in NASA reports and journal papers (drop towers, centrifuge and parabolic flights, Saffire IV–VI, SoFIE, JAXA's FLARE, Earth tests). The other 18 PSI investigations (mostly droplets, gas flames and smoke) are listed with their record; the chat can describe them, the charts do not rank them.
- Only 19 of the 42 materials have any test in reduced gravity, and 38 of the 887 results are near the Moon base cabin. The app shows these gaps as plainly as the data, and it does not rank materials: the data is too thin for that.
- PSI holds no partial-gravity data yet; our lunar and Martian results come from papers.
- Possible next steps: add the test results of the droplet, gas and smoke investigations to the charts, and add Moon- and Mars-gravity data once NASA publishes it in PSI.

## Where and how SI was used

The idea, the question the tool answers and its design are the team's own. We chose the sources, made the design decisions, ruled on every open point in the data (each ruling is labelled on the rows it touches) and set up the evaluation above. SI was a tool we directed:

- **In the app.** Google Gemini 3.8 Flash answers typed questions, only from the curated documents in `app/data/`. The page marks its answers as AI-generated.
- **Reading the documents.** SI agents (Claude, by Anthropic) extracted the facts and test rows from the sources, each with its page number. A second SI pass then checked the cited lines against their source pages before we signed off.
- **Answers behind the buttons.** The short answers behind the dashboard's buttons were written by Claude from the same curated documents, and each was checked against the cited pages by a second agent.
- **Code and data.** The page, the data files and the n8n workflows were written with Claude Code, directed and reviewed by us. The code files, the tests file and the prepared-answer files say so in their headers.
- **Evaluation.** SI drafted the questions and answer keys; the graders were two SI agents working blind and independently.
- **Text and video.** SI helped draft and edit this text and assemble the video. The video shows the live app and a NASA clip.

## What is in this repository

| Path | What |
|---|---|
| `app/` | The page: plain HTML, CSS and JavaScript, no framework. Served by GitHub Pages |
| `app/data/tests.json` | The 887 test results, the materials, the experiments and the source links |
| `app/data/bundle.md`, `bundle_burner.md` | The curated documents the chat reads (two memories: 667,529 and 215,386 tokens by Gemini's count) |
| `app/data/chat_tests.md`, `chat_tests_burner.md` | The tests table as the chat reads it |
| `app/data/prepared.json`, `prepared_tests.json` | The answers behind the buttons: 157 for cards and experiments, 887 for single tests |
| `backend/` | Two n8n workflow exports, credentials removed ([notes](backend/README.md)) |
| `SOURCES.md` | Every source, with links |

## How it is built

The page is static and draws everything except the chat in the browser, with no AI. The chat is one n8n workflow: it loads the curated documents and the tests table into a Gemini context cache and answers each question in a fixed format (lead, data points, inferred points, what is not covered), returning source IDs and pages that the page turns into links.

To run your own copy: serve `app/`, import `backend/flame-chat.workflow.json` into n8n, add a Google Gemini API credential, create two data tables (conversation turns and the cache record) and select them in the data-table nodes, set your data addresses in the Config node, and put your webhook address in `app/js/chat.js`.

## Licence and credits

- Code: [Apache-2.0](LICENSE).
- The Apache-2.0 licence covers our code and our own notes in `app/data/`. NASA PSI data is CC0-1.0. Facts and any wording taken from the cited documents stay under those documents' own terms (see [SOURCES.md](SOURCES.md)); this repository holds notes with page references, not the documents.
- Team Flame Atlas, NASA Space Apps Challenge 2026, Universal Event.
- Not reviewed or endorsed by NASA.
