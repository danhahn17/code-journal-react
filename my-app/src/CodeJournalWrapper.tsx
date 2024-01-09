import './CodeJournalWrapper.css';
import { ViewEntry } from './ViewEntry';
import { NewEntry } from './NewEntry';
import { EditEntry } from './EditEntry';
import { Modal } from './Modal';
import { useState } from 'react';


export function CodeJournalWrapper() {
  const [view, setView] = useState('add')


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
                  onClick={() => setView('entries')}>
                  Entries
                </a>
              </h3>
            </div>
          </div>
        </div>
      </header>
      {view === 'entries' && <ViewEntry />}
      {view === 'edit' && <EditEntry />}
      {view === 'add' && <Modal />}
    </div>
  );
}
