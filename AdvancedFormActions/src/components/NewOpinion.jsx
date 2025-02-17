import { useActionState } from "react";

export function NewOpinion() {
  function dataParser(prevFormData, formData) {
    const username = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    let errors = [];

    if (username.trim().split(" ").length === 1) {
      errors.push("Please provide your full name");
    }

    if (title.trim().length < 5) {
      errors.push("Title must be at least 5 characters long");
    }

    if (body.trim().length < 10) {
      errors.push("Opinion must be at least 10 characters long");
    }

    if (errors.length > 0) {
      return { errors, enteredValues: { username, title, body }};
    }

    return { errors: null };
  }

  const [formData, formAction] = useActionState(dataParser, {
    userName: "",
    title: "",
    body: "",
  })

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formData.enteredValues?.username}/>
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formData.enteredValues?.title}/>
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formData.enteredValues?.body}></textarea>
        </p>

        <div>
          {formData.errors && (
            <ul className="error">
              {formData.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
        </div>

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
