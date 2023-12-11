//mermaid flow chart for single page app note creation
// part 0
// exercises 0.5 and 0.6

flowchart TD

  A[Client] -->|Interacts with notes single page app| B(Single Page App)
  B -->|Creates new note| C(UI Components)
  C -->|Sends POST request| D(Server)
  D -->|Processes save request| E(Server Processing)
  E -->|Sends response to notes app| B
  B -->|Updates UI| C

  