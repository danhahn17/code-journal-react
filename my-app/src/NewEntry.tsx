import { FormEvent } from 'react';
import { useState } from 'react';
import placeholderimage from './assets/placeholder-image-square.jpg';
import { addEntry } from './data';

// type NewEntryProps = {
//   onSubmit: () => void;
// }

// function OnSubmit(event: FormEvent<HTMLFormElement>) {
//   event.preventDefault();
//   const form = event.currentTarget;
//   const formData = new FormData(form);
//   console.log(
//     `{ Title: ${formData.get('formTitle')}, URL: ${formData.get(
//       'formURL'
//     )} }`
//   );
// }

export function NewEntry() {
  const [title, setTitle] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(`{ Title: ${title}, URL: ${photoURL} , Notes:, ${notes}}`);
    addEntry({ title: title, notes: notes, photoUrl: photoURL });
  }

  return (
    <div className="row">
      <div className="column-full">
        <div className="container" data-view="entries">
          <div className="row">
            <div className="column-full d-flex justify-between align-center">
              <h1>New Entry</h1>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <li className="entry-ul" data-entry-id="">
            <div className="row">
              <div className="column-half">
                <img
                  className="input-b-radius form-image"
                  src={photoURL || placeholderimage}
                  alt=""
                />
              </div>
              <div className="column-half">
                <div className="row">
                  <div className="column-full d-flex justify-between">
                    <div className="column-half">
                      <label
                        className="margin-bottom-1 d-block"
                        htmlFor="title">
                        Title
                      </label>
                      <input
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        required
                        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                        type="text"
                        id="formTitle"
                        name="formTitle"
                      />
                      <label
                        className="margin-bottom-1 d-block"
                        htmlFor="photoURL">
                        Photo URL
                      </label>
                      <input
                        value={photoURL}
                        onChange={(event) => setPhotoURL(event.target.value)}
                        required
                        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                        type="text"
                        id="formURL"
                        name="formURL"
                      />
                    </div>
                  </div>
                </div>
                <p></p>
              </div>
            </div>
            <div className="row margin-bottom-1">
              <div className="column-full">
                <label className="margin-bottom-1 d-block" htmlFor="formNotes">
                  Notes
                </label>
                <input
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                  required
                  className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
                  name="formNotes"
                  id="formNotes"
                />
              </div>
            </div>
          </li>
          <div className="row">
            <div className="column-full d-flex justify-between">
              <button className="input-b-radius text-padding purple-background white-text">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
