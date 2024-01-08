import './CodeJournalWrapper.css';

export function CodeJournalWrapper() {
  return (
    <header className="header purple-background">
      <div className="container">
        <div className="row">
          <div className="column-full d-flex align-center">
            <h1 className="white-text">Code Journal</h1>
            <h3>
              <a id="entriesLink" className="entries-link white-text" href="#">
                Entries
              </a>
            </h3>
          </div>
        </div>
      </div>
    </header>
  );
}
