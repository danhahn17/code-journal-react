import './CodeJournalWrapper.css';
import { ViewEntry } from './ViewEntry';
import { NewEntry } from './NewEntry';
import { EditEntry } from './EditEntry';
import { Modal } from './Modal';

export function CodeJournalWrapper() {
  return (
    <div>
      <header className="header purple-background">
        <div className="container">
          <div className="row">
            <div className="column-full d-flex align-center">
              <h1 className="white-text">Code Journal</h1>
              <h3>
                <a
                  id="entriesLink"
                  className="entries-link white-text"
                  href="#">
                  Entries
                </a>
              </h3>
            </div>
          </div>
        </div>
      </header>
      <ViewEntry />
      <NewEntry
        OnType={() => {
          console.log('bonjour');
        }}
      />
      <EditEntry />
      <Modal />
    </div>
  );
}
