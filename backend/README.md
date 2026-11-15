# Backend: two n8n workflows

Both files are n8n workflow exports with credentials removed. They were written with AI assistance (Claude Code), directed and reviewed by the team.

## `flame-chat.workflow.json`: the live chat

The workflow behind the app's chat. Model: **Google Gemini 3.8 Flash**.

- Receives a question from the page, with what is on screen.
- Picks one of two memories (the main documents, or the burner, droplet, smoke and detection documents) and loads it into a Gemini context cache that lasts 60 minutes.
- Asks Gemini for an answer in a fixed format and returns it with source IDs and pages.
- Keeps the conversation's earlier turns in an n8n data table.

## `flame-chat-hydrogen.workflow.json`: the standby

**Switched off. The app does not use it.** It is a copy of the live chat for **Google Gemini 4 Hydrogen**, with the same base instructions and the same memory, kept only in case Google retires Gemini 3.8 Flash while the app must stay online.

- It differs in four things: the model; no context cache built by the workflow (Hydrogen only caches automatically, so the memory travels with every question); one fixed model turn after the memory; the one extra rule on detection wording that the live chat adds for its second memory is not in it.
- On the same 26 evaluation questions it scored 21 correct, 5 partial, 0 wrong (3.8 Flash: 19, 7, 0).
- We stay on 3.8 Flash because Hydrogen costs far more when its automatic cache misses (about $1.01 a question, against $0.07 when it hits) and is slower then (20 to 40 seconds).

## To use one

Import it into n8n, add a Google Gemini API credential to the Gemini nodes, create the data tables (conversation turns, and for the live chat the cache record) and select them in the data-table nodes.
