import placeholderimage from './assets/placeholder-image-square.jpg';

export function HomePage() {
  return (
    <div className="row">
      <div className="column-full">
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
                    <h3>This is test Title</h3>
                    <i className="fa-solid fa-pencil"></i>
                  </div>
                </div>
                <p></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
