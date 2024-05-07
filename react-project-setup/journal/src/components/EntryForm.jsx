import "./EntryForm.css";

export default function EntryForm() {
  return (
    <>
      <form action="" method="get" name="form" className="form">
        <label htmlFor="form" className="form__form-label">
          New Entry
        </label>
        <label htmlFor="motto" className="form__motto-label">
          Motto:{" "}
        </label>
        <input
          type="text"
          name="motto"
          id="motto"
          className="form__motto"
          required
        />
        <label htmlFor="entry" className="form__entry-label">
          Entry:{" "}
        </label>
        <textarea
          type="text"
          name="entry"
          id="entry"
          className="form__entry"
          rows="3"
          required
        />
        <button type="submit" className="form__submit">
          Create
        </button>
      </form>
    </>
  );
}
