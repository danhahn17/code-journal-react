import placeholderimage from './assets/placeholder-image-square.jpg';

export function EditEntry() {
  return (
    <div className="row">
      <div className="column-full">
        <div className="container" data-view="entries">
          <div className="row">
            <div className="column-full d-flex justify-between align-center">
              <h1>Edit Entry</h1>
            </div>
          </div>
        </div>

        <ul className="entry-ul">
          <li data-entry-id="">
            <div className="row">
              <div className="column-half">
                <img
                  className="input-b-radius form-image"
                  src={placeholderimage}
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
                        required
                        className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                        type="text"
                        id="formTitle"
                        name="formTitle"
                      />
                      <label
                        className="margin-bottom-1 d-block"
                        htmlFor="photoUrk">
                        Photo URL
                      </label>
                      <input
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
                <textarea
                  required
                  class="input-b-color text-padding input-b-radius purple-outline d-block width-100"
                  name="formNotes"
                  id="formNotes"
                  cols="30"
                  rows="10"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="column-full d-flex justify-between">
                <button
                  className="delete-entry-button"
                  type="button"
                  id="deleteEntry">
                  Delete Entry
                </button>
                <button className="input-b-radius text-padding purple-background white-text">
                  SAVE
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
