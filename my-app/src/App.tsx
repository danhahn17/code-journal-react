import './App.css';
import './CodeJournalWrapper.css';
import { CodeJournalWrapper } from './CodeJournalWrapper';
import { HomePage } from './HomePage';
import { NewEntry } from './NewEntry';
import { EditEntry } from './EditEntry';
import { Modal } from './Modal';

function App() {
  return (
    <div>
      <CodeJournalWrapper />
      <HomePage />
      <NewEntry />
      <EditEntry />
      <Modal />
    </div>
  );
}

export default App;
